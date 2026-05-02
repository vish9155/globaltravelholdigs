import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import FlightCard from "./FlightCard";
import { ArrowRight, FilterIcon, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import { fetchFlights } from "../redux/FlightSlice";

export default function FlightResult() {
  let location = useLocation();
  let dispatch = useDispatch();


  let payload = useMemo(() => {
    return (
      location.state ||
      JSON.parse(localStorage.getItem("payload") || "null")
    );
  }, []);


  let [filters, setFilters] = useState({
    airlines: [],
    stops: [],
    time: [],
    refundableOnly: false,
    wifiOnly: false,
    sort: "",
    maxPrice: 100000,
    minPrice: 0,
    cabin_class: [],
    layovers: [],
  });

  let [openFilter, setOpenFilter] = useState(false);


  let offers = useSelector((s) => s.flights.offers);
  let pagination = useSelector((s) => s.flights.pagination);
  let loading = useSelector((s) => s.flights.loading);

  console.log(offers, pagination)


  useEffect(() => {
    if (payload) {
      dispatch(
        fetchFlights({
          payload,
          page: 1,
          limit: 20,
          filters,
        })
      );
    }
  }, [filters, payload]);

  const parseDuration = (duration = "") => {

    let match = duration.match(
      /P(?:(\d+)D)?T?(?:(\d+)H)?(?:(\d+)M)?/
    );

    if (!match) return 0;

    let days =
      Number(match[1] || 0);

    let hours =
      Number(match[2] || 0);

    let minutes =
      Number(match[3] || 0);

    return (
      days * 24 * 60 +
      hours * 60 +
      minutes
    );
  };
  const getLayoverMinutes = (segments) => {

    if (segments.length <= 1) return 0;

    let total = 0;

    for (let i = 0; i < segments.length - 1; i++) {

      let currentArrival =
        new Date(
          segments[i].arriving_at
        );

      let nextDeparture =
        new Date(
          segments[i + 1].departing_at
        );

      total +=
        (nextDeparture - currentArrival)
        / (1000 * 60);
    }

    return total;
  };


  let sortedFlights = [...offers].sort((a, b) => {

    if (filters.sort === "cheap") {
      return (
        Number(a.total_amount) -
        Number(b.total_amount)
      );
    }

    if (filters.sort === "expensive") {
      return (
        Number(b.total_amount) -
        Number(a.total_amount)
      );
    }

    if (filters.sort === "fastest") {

      let aDuration =
        parseDuration(
          a?.slices?.[0]?.duration || ""
        );

      let bDuration =
        parseDuration(
          b?.slices?.[0]?.duration || ""
        );

      return aDuration - bDuration;
    }
    if (filters.sort === "slowest") {

      let aDuration =
        parseDuration(
          a?.slices?.[0]?.duration || ""
        );

      let bDuration =
        parseDuration(
          b?.slices?.[0]?.duration || ""
        );
      console.log(
        a?.slices?.[0]?.duration,
        parseDuration(a?.slices?.[0]?.duration)
      );
      return bDuration - aDuration;
    }
    if (filters.sort === "short layover") {
      let aLayover =
        getLayoverMinutes(
          a?.slices?.[0]?.segments || []
        );

      let bLayover =
        getLayoverMinutes(
          b?.slices?.[0]?.segments || []
        );

      return aLayover - bLayover;
    }
    if (filters.sort === "lowest emissions") {

      return (
        Number(a.total_emissions_kg) -
        Number(b.total_emissions_kg)
      );
    }
    if (filters.sort === "highest emissions") {

      return (
        Number(b.total_emissions_kg) -
        Number(a.total_emissions_kg)
      );
    }
    return 0;
  });

  let filtersData = useSelector(
    (s) => s.flights.filtersData
  );

  let [airlineShow, setAirlineShow] = useState(false)

  let [layoverShow, setLayoverShow] = useState(false)

  let airlines =
    filtersData?.airlines || [];

  let visibleAirline = airlineShow ? airlines : airlines.slice(0, 12)

  let cabinClass =
    filtersData?.cabinClasses || [];
  let layovers =
    filtersData?.layovers || [];

  let visibleLayovers = layoverShow ? layovers : layovers.slice(0, 8)

  return (
    <div className="min-h-screen bg-slate-50 md:flex gap-6 px-4 py-6  ">

      <div className="hidden md:block w-80 bg-white rounded-3xl shadow-lg p-6 overflow-scroll h-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">
            Filters
          </h2>

          <button
            onClick={() =>
              setFilters({
                airlines: [],
                stops: [],
                time: [],
                cabin_class: [],
                refundableOnly: false,
                wifiOnly: false,
                sort: "",
                minPrice: 0,
                maxPrice: 100000,
                layovers: []
              })
            }
            className="text-sm text-blue-600"
          >
            Clear
          </button>
        </div>

        {/* Airlines */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3">
            Airlines
          </h3>

          <div className="space-y-2">
            {visibleAirline.map((item, i) => (
              <label
                key={i}
                className="flex items-center gap-2 text-sm"
              >
                <input
                  type="checkbox"
                  checked={filters.airlines.includes(item)}
                  className="accent-blue-600"
                  onChange={(e) => {
                    let updated =
                      e.target.checked
                        ? [
                          ...filters.airlines,
                          item,
                        ]
                        : filters.airlines.filter(
                          (x) => x !== item
                        );

                    setFilters((prev) => ({
                      ...prev,
                      airlines: updated,
                    }));
                  }}
                />

                {item}
              </label>
            ))}
          </div>
          {airlines.length > 12 && (
            <button
              onClick={() =>
                setAirlineShow(
                  !airlineShow
                )
              }
              className="
      text-blue-600
      text-sm
      mt-2
      font-medium
    "
            >
              {airlineShow
                ? "Show Less"
                : `Load More (${airlines.length - 12})`}
            </button>
          )}
        </div>

        <div className="mb-6">
          <h3 className="font-semibold mb-3">
            Cabin Class
          </h3>

          <div className="space-y-2">
            {cabinClass.map((item, i) => (
              <label
                key={i}
                className="flex items-center gap-2 text-sm"
              >
                <input
                  type="checkbox"
                  className="accent-blue-600"
                  checked={filters.cabin_class.includes(item?.toLowerCase())}
                  onChange={(e) => {
                    let updated =
                      e.target.checked
                        ? [
                          ...filters.cabin_class,
                          item,
                        ]
                        : filters.cabin_class.filter(
                          (x) => x !== item
                        );

                    setFilters((prev) => ({
                      ...prev,
                      cabin_class: updated,
                    }));
                  }}
                />

                {item?.toUpperCase()}
              </label>
            ))}
          </div>
        </div>

        {/* Price */}
        {/* PRICE FILTER (MIN + MAX SEPARATE SLIDER) */}

        <div className="mb-6">
          <h3 className="font-semibold mb-4 text-lg">
            Price Range
          </h3>

          {/* Price Values */}
          <div className="flex justify-between text-sm text-gray-600 mb-3">
            <span className="font-medium">
              Min: ${filters.minPrice}
            </span>

            <span className="font-medium">
              Max: ${filters.maxPrice}
            </span>
          </div>

          {/* MIN PRICE */}
          <div className="mb-5">
            <p className="text-sm text-gray-500 mb-2">
              Minimum Price
            </p>

            <input
              type="range"
              min="0"
              max="200000"
              step="100"
              value={filters.minPrice}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  minPrice: Math.min(
                    Number(e.target.value),
                    prev.maxPrice - 100
                  ),
                }))
              }
              className="w-full accent-yellow-500 cursor-pointer"
            />
          </div>

          {/* MAX PRICE */}
          <div>
            <p className="text-sm text-gray-500 mb-2">
              Maximum Price
            </p>

            <input
              type="range"
              min="0"
              max="200000"
              step="100"
              value={filters.maxPrice}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  maxPrice: Math.max(
                    Number(e.target.value),
                    prev.minPrice + 100
                  ),
                }))
              }
              className="w-full accent-yellow-500 cursor-pointer"
            />
          </div>
        </div>


        {/* Departure Time */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-4">
            Departure Time
          </h3>

          <div className="grid grid-cols-2 gap-3">
            {[
              {
                label: "Morning",
                value: "morning",
                time: "05:00 - 11:59",
                icon: "🌅",
              },
              {
                label: "Afternoon",
                value: "afternoon",
                time: "12:00 - 16:59",
                icon: "☀️",
              },
              {
                label: "Evening",
                value: "evening",
                time: "17:00 - 20:59",
                icon: "🌇",
              },
              {
                label: "Night",
                value: "night",
                time: "21:00 - 04:59",
                icon: "🌙",
              },
            ].map((item, i) => (
              <label
                key={i}
                className={`cursor-pointer border rounded-2xl p-3 transition-all shadow-sm hover:shadow-md
        ${filters.time.includes(item.value)
                    ? "border-yellow-500 bg-yellow-50"
                    : "border-gray-200 bg-white"
                  }`}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  checked={filters.time.includes(item.value)}
                  onChange={(e) => {
                    let update = e.target.checked
                      ? [...filters.time, item.value]
                      : filters.time.filter(
                        (x) => x !== item.value
                      );

                    setFilters((prev) => ({
                      ...prev,
                      time: update,
                    }));
                  }}
                />

                <div className="text-lg mb-1">
                  {item.icon}
                </div>

                <p className="font-medium text-sm">
                  {item.label}
                </p>

                <p className="text-xs text-gray-500">
                  {item.time}
                </p>
              </label>
            ))}
          </div>
        </div>



        {/* Stops */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3">
            Stops
          </h3>

          {["non-stop", "1", "2+"].map(
            (item, i) => (
              <label
                key={i}
                className="flex items-center gap-2 text-sm mb-2"
              >
                <input
                  type="checkbox"
                  className="accent-blue-600"
                  onChange={(e) => {
                    let updated =
                      e.target.checked
                        ? [
                          ...filters.stops,
                          item,
                        ]
                        : filters.stops.filter(
                          (x) => x !== item
                        );

                    setFilters((prev) => ({
                      ...prev,
                      stops: updated,
                    }));
                  }}
                />

                {item}
              </label>
            )
          )}
        </div>
        <div className="mb-6">
          <h3 className="font-semibold mb-3">
            Layovers
          </h3>

          <div className="space-y-2">

            {visibleLayovers.map((item, i) => (

              <label
                key={i}
                className="flex gap-2 text-sm"
              >

                <input
                  type="checkbox"

                  checked={filters.layovers.includes(item)}

                  onChange={(e) => {

                    let updated =
                      e.target.checked
                        ? [
                          ...filters.layovers,
                          item
                        ]
                        : filters.layovers.filter(
                          x => x !== item
                        );

                    setFilters(prev => ({
                      ...prev,
                      layovers: updated
                    }));
                  }}
                />

                {item}

              </label>
            ))}
          </div>
          {layovers.length > 8 && (
            <button
              onClick={() =>
                setLayoverShow(
                  !layoverShow
                )
              }
              className="
      text-blue-600
      text-sm
      mt-2
      font-medium
    "
            >
              {layoverShow
                ? "Show Less"
                : `Load More (${layovers.length - 8})`}
            </button>
          )}
        </div>
        {/* Premium Filters */}
        <div className="space-y-3">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={
                filters.refundableOnly
              }
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  refundableOnly:
                    e.target.checked,
                }))
              }
            />

            Refundable Only
          </label>

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={filters.wifiOnly}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  wifiOnly:
                    e.target.checked,
                }))
              }
            />

            WiFi Available
          </label>
        </div>
      </div>
      <div className="flex items-center justify-between mb-3 md:hidden  bg-white rounded-lg shadow-lg p-6 overflow-scroll h-auto">
        <FilterIcon size={22} onClick={() => setOpenFilter(true)} />
        <p className="text-slate-600 block md:hidden">
          <span className="font-bold text-black">
            {pagination?.totalOffers || 0}
          </span>{" "}
          Flights Found{" "} Out of{" "}
          <span className="font-bold text-black">
            {pagination?.total || 0}
          </span>{" "}

        </p>
      </div>
      {openFilter && (
        <div className="fixed inset-0 z-[9999] flex">

          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpenFilter(false)}
          />

          <div className="relative w-[85%] max-w-sm bg-white h-full p-5 overflow-auto animate-slideIn shadow-2xl">

            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Filters</h2>
              <button
                onClick={() => setOpenFilter(false)}
                className="text-lg"
              >
                <X size={28} />
              </button>
            </div>

            {/* Airlines */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">
                Airlines
              </h3>

              <div className="space-y-2">
                {visibleAirline.map((item, i) => (
                  <label
                    key={i}
                    className="flex items-center gap-2 text-sm"
                  >
                    <input
                      type="checkbox"
                      checked={filters.airlines.includes(item)}
                      className="accent-blue-600"
                      onChange={(e) => {
                        let updated =
                          e.target.checked
                            ? [
                              ...filters.airlines,
                              item,
                            ]
                            : filters.airlines.filter(
                              (x) => x !== item
                            );

                        setFilters((prev) => ({
                          ...prev,
                          airlines: updated,
                        }));
                      }}
                    />

                    {item}
                  </label>
                ))}
              </div>
              {airlines.length > 12 && (
                <button
                  onClick={() =>
                    setAirlineShow(
                      !airlineShow
                    )
                  }
                  className="
      text-blue-600
      text-sm
      mt-2
      font-medium
    "
                >
                  {airlineShow
                    ? "Show Less"
                    : `Load More (${airlines.length - 12})`}
                </button>
              )}
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-3">
                Cabin Class
              </h3>

              <div className="space-y-2">
                {cabinClass.map((item, i) => (
                  <label
                    key={i}
                    className="flex items-center gap-2 text-sm"
                  >
                    <input
                      type="checkbox"
                      className="accent-blue-600"
                      checked={filters.cabin_class.includes(item?.toLowerCase())}
                      onChange={(e) => {
                        let updated =
                          e.target.checked
                            ? [
                              ...filters.cabin_class,
                              item,
                            ]
                            : filters.cabin_class.filter(
                              (x) => x !== item
                            );

                        setFilters((prev) => ({
                          ...prev,
                          cabin_class: updated,
                        }));
                      }}
                    />

                    {item?.toUpperCase()}
                  </label>
                ))}
              </div>
            </div>

            {/* Price */}
            {/* PRICE FILTER (MIN + MAX SEPARATE SLIDER) */}

            <div className="mb-6">
              <h3 className="font-semibold mb-4 text-lg">
                Price Range
              </h3>

              {/* Price Values */}
              <div className="flex justify-between text-sm text-gray-600 mb-3">
                <span className="font-medium">
                  Min: ${filters.minPrice}
                </span>

                <span className="font-medium">
                  Max: ${filters.maxPrice}
                </span>
              </div>

              {/* MIN PRICE */}
              <div className="mb-5">
                <p className="text-sm text-gray-500 mb-2">
                  Minimum Price
                </p>

                <input
                  type="range"
                  min="0"
                  max="200000"
                  step="100"
                  value={filters.minPrice}
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      minPrice: Math.min(
                        Number(e.target.value),
                        prev.maxPrice - 100
                      ),
                    }))
                  }
                  className="w-full accent-yellow-500 cursor-pointer"
                />
              </div>

              {/* MAX PRICE */}
              <div>
                <p className="text-sm text-gray-500 mb-2">
                  Maximum Price
                </p>

                <input
                  type="range"
                  min="0"
                  max="200000"
                  step="100"
                  value={filters.maxPrice}
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      maxPrice: Math.max(
                        Number(e.target.value),
                        prev.minPrice + 100
                      ),
                    }))
                  }
                  className="w-full accent-yellow-500 cursor-pointer"
                />
              </div>
            </div>


            {/* Departure Time */}
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-4">
                Departure Time
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    label: "Morning",
                    value: "morning",
                    time: "05:00 - 11:59",
                    icon: "🌅",
                  },
                  {
                    label: "Afternoon",
                    value: "afternoon",
                    time: "12:00 - 16:59",
                    icon: "☀️",
                  },
                  {
                    label: "Evening",
                    value: "evening",
                    time: "17:00 - 20:59",
                    icon: "🌇",
                  },
                  {
                    label: "Night",
                    value: "night",
                    time: "21:00 - 04:59",
                    icon: "🌙",
                  },
                ].map((item, i) => (
                  <label
                    key={i}
                    className={`cursor-pointer border rounded-2xl p-3 transition-all shadow-sm hover:shadow-md
        ${filters.time.includes(item.value)
                        ? "border-yellow-500 bg-yellow-50"
                        : "border-gray-200 bg-white"
                      }`}
                  >
                    <input
                      type="checkbox"
                      className="hidden"
                      checked={filters.time.includes(item.value)}
                      onChange={(e) => {
                        let update = e.target.checked
                          ? [...filters.time, item.value]
                          : filters.time.filter(
                            (x) => x !== item.value
                          );

                        setFilters((prev) => ({
                          ...prev,
                          time: update,
                        }));
                      }}
                    />

                    <div className="text-lg mb-1">
                      {item.icon}
                    </div>

                    <p className="font-medium text-sm">
                      {item.label}
                    </p>

                    <p className="text-xs text-gray-500">
                      {item.time}
                    </p>
                  </label>
                ))}
              </div>
            </div>



            {/* Stops */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">
                Stops
              </h3>

              {["non-stop", "1", "2+"].map(
                (item, i) => (
                  <label
                    key={i}
                    className="flex items-center gap-2 text-sm mb-2"
                  >
                    <input
                      type="checkbox"
                      className="accent-blue-600"
                      onChange={(e) => {
                        let updated =
                          e.target.checked
                            ? [
                              ...filters.stops,
                              item,
                            ]
                            : filters.stops.filter(
                              (x) => x !== item
                            );

                        setFilters((prev) => ({
                          ...prev,
                          stops: updated,
                        }));
                      }}
                    />

                    {item}
                  </label>
                )
              )}
            </div>
            <div className="mb-6">
              <h3 className="font-semibold mb-3">
                Layovers
              </h3>

              <div className="space-y-2">

                {visibleLayovers.map((item, i) => (

                  <label
                    key={i}
                    className="flex gap-2 text-sm"
                  >

                    <input
                      type="checkbox"

                      checked={filters.layovers.includes(item)}

                      onChange={(e) => {

                        let updated =
                          e.target.checked
                            ? [
                              ...filters.layovers,
                              item
                            ]
                            : filters.layovers.filter(
                              x => x !== item
                            );

                        setFilters(prev => ({
                          ...prev,
                          layovers: updated
                        }));
                      }}
                    />

                    {item}

                  </label>
                ))}
              </div>
              {layovers.length > 8 && (
                <button
                  onClick={() =>
                    setLayoverShow(
                      !layoverShow
                    )
                  }
                  className="
      text-blue-600
      text-sm
      mt-2
      font-medium
    "
                >
                  {layoverShow
                    ? "Show Less"
                    : `Load More (${layovers.length - 8})`}
                </button>
              )}
            </div>
            {/* Premium Filters */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={
                    filters.refundableOnly
                  }
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      refundableOnly:
                        e.target.checked,
                    }))
                  }
                />

                Refundable Only
              </label>

              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={filters.wifiOnly}
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      wifiOnly:
                        e.target.checked,
                    }))
                  }
                />

                WiFi Available
              </label>
            </div>

            <button
              onClick={() => setOpenFilter(false)}
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 py-3 rounded-xl font-semibold mt-4 shadow"
            >
              Apply Filters
            </button>

          </div>
        </div>
      )}

      {/* RIGHT CONTENT */}
      <div className="flex-1">
        <div className="bg-white rounded-2xl shadow p-4 mb-5 flex justify-between items-center">
          <p className="text-slate-600 hidden md:block">
            <span className="font-bold text-black">
              {pagination?.totalOffers || 0}
            </span>{" "}
            Flights Found{" "} Out of{" "}
            <span className="font-bold text-black">
              {pagination?.total || 0}
            </span>{" "}

          </p>
          <p className="text-slate-600 flex items-center gap-2">
            <span className="font-bold text-black">
              {payload?.from}
            </span>{" "}
            <ArrowRight size={18} />
            <span className="font-bold text-black">
              {payload?.to}
            </span>{" "}

          </p>

          <select
            className="border rounded-lg px-3 py-2 text-sm"
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                sort: e.target.value,
              }))
            }
          >
            <option value="">
              Sort By
            </option>
            <option value="cheap">
              Cheapest
            </option>
            <option value="expensive">
              Expensive
            </option>
            <option value="fastest">
              Fastest
            </option>
            <option value="slowest">
              Slowest
            </option>
            <option value="short layover">
              Short Layovers
            </option>
            <option value="highest emissions">Highest Emissions</option>
            <option value="lowest emissions">Lowest Emissions</option>
          </select>
        </div>

        {/* Cards */}
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow animate-pulse"
              >
                <div className="h-4 bg-slate-200 rounded w-1/3 mb-3"></div>
                <div className="h-4 bg-slate-200 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-5">
            {sortedFlights.map((item, i) => (
              <FlightCard
                key={i}
                item={item}
              />
            ))}
          </div>
        )}
        <div className="hidden  md:flex justify-center gap-4 mt-8">
          <button
            disabled={!pagination?.hasPrevPage}
            onClick={() =>
              dispatch(
                fetchFlights({
                  payload,
                  page: pagination.currentPage - 1,
                  limit: 20,
                  filters
                })
              )
            }
            className="px-5 py-2 rounded-lg border"
          >
            Previous
          </button>

          <span className="font-semibold">
            Page {pagination?.currentPage} of {pagination?.totalPages}
          </span>

          <button
            disabled={!pagination?.hasNextPage}
            onClick={() =>
              dispatch(
                fetchFlights({
                  payload,
                  page: pagination.currentPage + 1,
                  limit: 20,
                  filters
                })
              )
            }
            className="px-5 py-2 rounded-lg border"
          >
            Next
          </button>
        </div>
      </div>
      <div className="md:hidden flex justify-center gap-4 mt-8">
        <button
          disabled={!pagination?.hasPrevPage}
          onClick={() =>
            dispatch(
              fetchFlights({
                payload,
                page: pagination.currentPage - 1,
                limit: 20,
                filters
              })
            )
          }
          className="px-5 py-2 rounded-lg border"
        >
          Previous
        </button>

        <span className="font-semibold">
          Page {pagination?.currentPage} of {pagination?.totalPages}
        </span>

        <button
          disabled={!pagination?.hasNextPage}
          onClick={() =>
            dispatch(
              fetchFlights({
                payload,
                page: pagination.currentPage + 1,
                limit: 20,
                filters
              })
            )
          }
          className="px-5 py-2 rounded-lg border"
        >
          Next
        </button>
      </div>
    </div>
  );
}