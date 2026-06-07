import React from "react";
import { NavLink, useNavigate } from 'react-router-dom'
import {
  Wifi,
  Briefcase,
  ShieldCheck,
  ArrowRightLeft,
  ArrowRight,
  Luggage,
} from "lucide-react";

/*
Duffel Smart Flight Card

One Way → single route card
Round Trip → onward + return both shown

Because:
item.slices.length === 1 → One Way
item.slices.length === 2 → Round Trip

Based on your real Duffel response :contentReference[oaicite:0]{index=0}
*/

export default function FlightCard({ item }) {
  let slices = item?.slices || [];



  if (!slices.length) return null;
  let offerId = item.id
  let isRoundTrip = slices.length === 2;

  let firstSlice = slices[0];
  let secondSlice = slices[1];

  let firstSegment = firstSlice?.segments?.[0];
  let secondSegment = secondSlice?.segments?.[0];

  let airlineName = item?.owner?.name || "Airline";
  let airlineCode = item?.owner?.iata_code || "XX";
  let navigate = useNavigate()
  let airlineLogo =
    item?.owner?.logo_symbol_url ||
    `https://images.kiwi.com/airlines/64/${airlineCode}.png`;

  let price =
    item?.total_amount ||
    item?.intended_total_amount ||
    "0";

  let currency =
    item?.total_currency || "USD";

  let refundable =
    item?.conditions?.refund_before_departure?.allowed;

  let changeAllowed =
    item?.conditions?.change_before_departure?.allowed;

  let emissions =
    item?.total_emissions_kg || "N/A";

  let wifiAvailable =
    firstSegment?.passengers?.[0]?.cabin?.amenities?.wifi?.available;

  let checkedBag =
    firstSegment?.passengers?.[0]?.baggages?.find(
      (b) => b.type === "checked"
    );
  let carryOn = firstSegment?.passengers?.[0]?.baggages?.find(
    (b) => b.type === "carry_on"
  );

  let handleSelect = () => {
    //  pura item (offer) save karo
    localStorage.setItem("selectedOffer", JSON.stringify(item));

    //  navigate karo
    navigate(`/passengers/${offerId}`);
  };

  let renderSlice = (slice, label) => {
    let segment = slice?.segments?.[0];

    if (!slice || !segment) return null;

    let departureTime = new Date(
      segment?.departing_at
    );

    let arrivalTime = new Date(
      segment?.arriving_at
    );

    let originCode =
      slice?.origin?.iata_code || "N/A";

    let destinationCode =
      slice?.destination?.iata_code || "N/A";

    let originCity =
      slice?.origin?.city_name || "";

    let destinationCity =
      slice?.destination?.city_name || "";

    let duration =
      slice?.duration || "N/A";

    let fareBrand =
      slice?.fare_brand_name || "Basic";

    let cabinClass =
      segment?.passengers?.[0]
        ?.cabin_class_marketing_name || "Economy";

    let segments = slice?.segments || [];

    let layovers =
      segments.length > 1
        ? segments
          .slice(0, -1)
          .map(
            (seg) =>
              seg?.destination?.iata_code

          )
        : [];


    return (
      <div className="mb-6">
        {isRoundTrip && (
          <p className="text-sm font-semibold text-green-600 mb-3">
            {label}
          </p>
        )}

        <div className="grid grid-cols-3 items-center">
          {/* Departure */}
          <div className="text-center">
            <h3 className="text-2xl font-bold">
              {departureTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </h3>

            <p className="text-sm font-medium">
              {originCode}
            </p>

            <p className="text-xs text-slate-500">
              {originCity}
            </p>
          </div>

          {/* Middle */}
          <div className="px-4">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-slate-400" />

              <div className="flex-1 h-[2px] bg-gradient-to-r from-slate-300 to-slate-400 relative">
                {/* LAYOVERS */}
                {layovers.length > 0 && (

                  <p className="text-xs text-green-500 mt-1 text-center  absolute -top-2 left-1/2 -translate-x-1/2 bg-white">

                    via {layovers.join(", ")}
                  </p>
                )}


              </div>

              <div className="w-3 h-3 rounded-full bg-slate-400" />
            </div>

            <p className="text-center text-xs mt-4 font-medium text-slate-500">
              {duration}
            </p>

            <p className="text-center text-xs text-slate-500">
              {fareBrand}
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold">
              {arrivalTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </h3>

            <p className="text-sm font-medium">
              {destinationCode}
            </p>

            <p className="text-xs text-slate-500">
              {destinationCity}
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="text-xs bg-slate-100 px-3 py-2 rounded-xl">
            {cabinClass}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-6">
            <img
              src={airlineLogo}
              alt={airlineName}
              className="w-14 h-14 rounded-xl object-contain border bg-white p-2"
            />

            <div>
              <h2 className="font-bold text-lg">
                {airlineName}
              </h2>

              <p className="text-sm text-slate-500">
                {airlineCode}
              </p>
            </div>

            <div className="ml-auto flex gap-2">
              {isRoundTrip ? (
                <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full flex items-center gap-1">
                  <ArrowRightLeft size={14} />
                  Round Trip
                </span>
              ) : (
                <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                  One Way
                </span>
              )}

              {refundable && (
                <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                  Refundable
                </span>
              )}
            </div>
          </div>

          {renderSlice(firstSlice, "Departure Flight")}

          {isRoundTrip &&
            renderSlice(
              secondSlice,
              "Return Flight"
            )}

          <div className="flex flex-wrap gap-3 mt-4">
            {wifiAvailable && (
              <span className="text-xs bg-slate-100 px-3 py-2 rounded-xl flex items-center gap-2">
                <Wifi size={14} />
                WiFi
              </span>
            )}

            {checkedBag && (
              <span className="text-xs bg-slate-100 px-3 py-2 rounded-xl flex items-center gap-2">
                <Briefcase size={14} />
                {checkedBag.quantity}-{checkedBag?.type} Checked Bag
              </span>
            )}
            {carryOn && (
              <span className="text-xs bg-slate-100 px-3 py-2 rounded-xl flex items-center gap-2">
                <Luggage size={14} />
                {carryOn.quantity}-{carryOn?.type} Cabin Bag
              </span>
            )}

            {changeAllowed && (
              <span className="text-xs bg-slate-100 px-3 py-2 rounded-xl flex items-center gap-2">
                <ShieldCheck size={14} />
                Change Allowed
              </span>
            )}
          </div>

          <p className="text-xs text-slate-500 mt-4">
            CO₂ Emission: {emissions} kg
          </p>
        </div>

        <div className="w-full lg:w-72 bg-gradient-to-br from-green-50 to-slate-100 rounded-3xl border p-6 flex flex-col justify-center text-center">
          <p className="text-sm text-slate-500">
            Total Price
          </p>

          <h2 className="text-4xl font-bold text-green-600 my-2">
            {currency} {price}
          </h2>

          <p className="text-xs text-slate-500 mb-5">
            taxes included
          </p>

          <button onClick={handleSelect} className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-2xl font-semibold shadow-lg hover:scale-[1.02] transition">
            Select Flight
          </button>
        </div>
      </div>
    </div>
  );
}