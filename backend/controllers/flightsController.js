import dotenv from 'dotenv'
dotenv.config()
import client from '../config/redisConfig.js';
import { getAccessToken } from '../oAuths/amadeusToken.js';
import { dedupe } from '../utils/dedupe.js';
import { getCacheSWR } from '../utils/cache.js';


export let fligtsDatas = async (req, res) => {
  try {
    let {
      from,
      to,
      departDate,
      returnDate,
      classe,
      adult,
      children,
      infant,
      tripType, // "oneway" | "roundtrip"
    } = req.body;

    let page = Number(req.query.page || 1);
    let limit = Number(req.query.limit || 20);
    /* =====================================================
       VALIDATION
    ===================================================== */

    if (!from || !to || !departDate) {
      return res.status(400).json({
        success: false,
        message: "from, to and departDate are required",
      });
    }



    let isRoundTrip =
      tripType === "roundtrip" &&
      returnDate &&
      returnDate !== "";



    let cacheKey = `flights:
      ${from}-
      ${to}-
      ${departDate}-
      ${isRoundTrip ? returnDate : "oneway"}-
      ${classe || "economy"}-
      ${adult || 1}-
      ${children || 0}-
      ${infant || 0}
    `.replace(/\s+/g, "");



    let data = await dedupe(cacheKey, () =>
      getCacheSWR(
        cacheKey,
        async () => {
          /* =====================================================
             PASSENGERS
          ===================================================== */

          let passengers = [];

          // Adults
          for (let i = 0; i < Number(adult || 1); i++) {
            passengers.push({
              type: "adult",
            });
          }

          // Children
          for (let i = 0; i < Number(children || 0); i++) {
            passengers.push({
              type: "child",
            });
          }

          // Infants
          for (let i = 0; i < Number(infant || 0); i++) {
            passengers.push({
              type: "infant_without_seat",
            });
          }



          let slices = [
            {
              origin: from,
              destination: to,
              departure_date: departDate,
            },
          ];

          /*
            IMPORTANT FIX

            ONLY if strict roundtrip
          */

          if (isRoundTrip) {
            slices.push({
              origin: to,
              destination: from,
              departure_date: returnDate,
            });
          }

          console.log("Trip Type:", tripType);
          console.log("Is Round Trip:", isRoundTrip);
          console.log("Slices:", slices);

          /* =====================================================
            DUFFEL API CALL
          ===================================================== */

          let response = await fetch(
            "https://api.duffel.com/air/offer_requests",
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${process.env.DUFFEL_API}`,
                "Content-Type": "application/json",
                "Duffel-Version": "v2",
              },
              body: JSON.stringify({
                data: {
                  slices,
                  passengers,

                },
              }),
            }
          );

          let result = await response.json();

          /* =====================================================
             ERROR HANDLING
          ===================================================== */

          if (!response.ok) {
            console.log(result);

            throw new Error(
              result?.errors?.[0]?.message ||
              "Duffel API Error"
            );
          }
          console.log("Duffel Offers Count:",
            result?.data?.offers?.length);


          return result;
        },
        600
      )
    );

    /* =====================================================
   RESPONSE (FILTER + PAGINATION)
===================================================== */

    let allOffers = data?.data?.offers || [];

    //  GET FILTERS FROM QUERY (frontend se bhejna hoga)
    let {
      airlines,
      stops,
      minPrice,
      maxPrice,
      refundableOnly,
      wifiOnly,
      time,
      cabin_class,
      layovers
    } = req.query;

    let total = allOffers.length
    //  CONVERT STRING → ARRAY
    let airlineArr = airlines ? airlines.split(",") : [];
    let stopsArr = stops ? stops.split(",") : [];
    let timeArr = time ? time.split(",") : [];
    let cabins = cabin_class ? cabin_class.split(",") : []
    let layoverArr = layovers ? layovers.split(",") : [];

    //  FILTERING
    let filteredOffers = allOffers.filter(item => {
      let firstSlice = item?.slices?.[0];
      let firstSegment = firstSlice?.segments?.[0];

      if (!firstSlice || !firstSegment) return false;

      let airline = item?.owner?.name || "";
      let cabin = item?.slices[0]?.segments[0]?.passengers[0]?.cabin_class

      let price = Number(item?.total_amount || 0);
      let stopsCount = firstSlice?.segments?.length - 1;

      let depHour = new Date(
        firstSegment?.departing_at
      ).getHours();

      let refundable =
        item?.conditions?.refund_before_departure?.allowed;

      let wifi =
        firstSegment?.passengers?.[0]?.cabin
          ?.amenities?.wifi?.available;

      let airlineMatch =
        airlineArr.length === 0 ||
        airlineArr.includes(airline);

      let cabinMatch =
        cabins.length === 0 ||
        cabins.includes(cabin);

      let stopMatch =
        stopsArr.length === 0 ||
        stopsArr.some(s =>
          (s === "non-stop" && stopsCount === 0) ||
          (s === "1" && stopsCount === 1) ||
          (s === "2+" && stopsCount >= 2)
        );

      let priceMatch =
        price >= Number(minPrice || 0) &&
        price <= Number(maxPrice || Infinity);

      let refundableMatch =
        refundableOnly !== "true" || refundable;

      let wifiMatch =
        wifiOnly !== "true" || wifi;

      let timeMatch =
        timeArr.length === 0 ||
        timeArr.some(t =>
          (t === "morning" && depHour >= 5 && depHour < 12) ||
          (t === "afternoon" && depHour >= 12 && depHour < 17) ||
          (t === "evening" && depHour >= 17 && depHour < 21) ||
          (t === "night" && (depHour >= 21 || depHour < 5))
        );
      let layoverMatch =
        layoverArr.length === 0 ||

        firstSlice?.segments?.some(
          seg =>
            layoverArr.includes(
              seg?.destination?.iata_code
            )
        );

      return (
        stopMatch &&
        priceMatch &&
        refundableMatch &&
        wifiMatch &&
        timeMatch &&
        airlineMatch &&
        cabinMatch &&
        layoverMatch
      );
    });

    //  PAGINATION (FILTER KE BAAD)
    let totalOffers = filteredOffers.length;
    let totalPages = Math.ceil(totalOffers / limit);

    let startIndex = (page - 1) * limit;
    let endIndex = startIndex + limit;

    let paginatedOffers = filteredOffers.slice(
      startIndex,
      endIndex
    );
    //  FILTER OPTIONS FROM FULL FILTERED DATA
    let allCabinClasses = [
      ...new Set(
        allOffers.map(
          item =>
            item?.slices?.[0]?.segments?.[0]
              ?.passengers?.[0]?.cabin_class
        ).filter(Boolean)
      )
    ];

    let allAirlines = [
      ...new Set(
        allOffers.map(
          item => item?.owner?.name
        ).filter(Boolean)
      )
    ];

    let allLayovers = [
      ...new Set(
        allOffers.flatMap(item =>
          item?.slices?.[0]?.segments
            ?.slice(0, -1)
            ?.map(
              seg =>
                seg?.destination?.iata_code
            )
        ).filter(Boolean)
      )
    ];

    return res.status(200).json({
      success: true,

      message: isRoundTrip
        ? "Round Trip Flights Fetched"
        : "One Way Flights Fetched",

      tripType: isRoundTrip
        ? "roundtrip"
        : "oneway",

      pagination: {
        currentPage: page,
        limit,
        total,
        totalOffers,
        totalPages,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
      },

      //  FILTER META
      filtersData: {
        cabinClasses: allCabinClasses,
        airlines: allAirlines,
        layovers: allLayovers,
      },

      //  ONLY 20 FOR UI
      data: {
        offers: paginatedOffers
      }
    });

  } catch (error) {
    console.error("Flight API Error:", error);

    return res.status(500).json({
      success: false,
      message:
        error.message || "Something went wrong",
    });
  }
};


export let searchLocation = async (req, res) => {
  try {
    let { query } = req.query;

    let response = await fetch(
      `https://api.duffel.com/places/suggestions?query=${query}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.DUFFEL_API}`,
          "Content-Type": "application/json",
          "Duffel-Version": "v2"
        }
      }
    );

    let result = await response.json();

    if (!response.ok) {
      return res.status(400).send({
        message: "Duffel API error",
        status: false,
        error: result
      });
    }

    return res.send({
      message: "Airport suggestions fetched successfully",
      status: true,
      data: result
    });


  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Location search error" })
  }
}

