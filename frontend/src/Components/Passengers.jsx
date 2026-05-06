import React, { useEffect, useMemo, useState } from "react";
import {
    Wifi,
    Briefcase,
    ShieldCheck,
    ArrowRightLeft,
    Luggage,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { flightOffer } from "../redux/FlightOffers";
import PassengerForm from "./PassengerForm";

export default function FlightDetails() {

    let navigate = useNavigate();

    let flightOffersData = useSelector(s => s.offer.items)
    console.log(flightOffersData)
    let dispatch = useDispatch()
  let {offerId}=useParams()
    useEffect(() => {
      
        dispatch(flightOffer(offerId))
    }, [offerId])


    let offer = useMemo(() => {
        if (flightOffersData) return flightOffersData;

        // let fallback = localStorage.getItem("selectedOffer");
        // return fallback ? JSON.parse(fallback) : null;

    }, [flightOffersData]);

    if (!offer) {
        return (
            <div className="flex justify-center items-center h-screen text-lg font-semibold">
                No flight selected
            </div>
        );
    }




    let slices = offer?.slices || [];
    if (!slices.length) return null;

    let isRoundTrip = slices.length === 2;

    let airlineName = offer?.owner?.name || "Airline";
    let airlineCode = offer?.owner?.iata_code || "XX";

    let airlineLogo =
        offer?.owner?.logo_symbol_url ||
        `https://images.kiwi.com/airlines/64/${airlineCode}.png`;

    let price =
        offer?.total_amount || offer?.intended_total_amount || "0";

    let currency = offer?.total_currency || "USD";

    let refundable =
        offer?.conditions?.refund_before_departure?.allowed;

    let changeAllowed =
        offer?.conditions?.change_before_departure?.allowed;

    let emissions = offer?.total_emissions_kg || "N/A";

    let firstSegment = slices[0]?.segments?.[0];

    let wifiAvailable =
        firstSegment?.passengers?.[0]?.cabin?.amenities?.wifi?.available;

    let checkedBag =
        firstSegment?.passengers?.[0]?.baggages?.find(
            (b) => b.type === "checked"
        );

    let carryOn =
        firstSegment?.passengers?.[0]?.baggages?.find(
            (b) => b.type === "carry_on"
        );

    let formatDuration = (duration) => {
        let match = duration.match(/PT(\d+)H(\d+)M/);
        if (!match) return duration;
        return `${match[1]}h ${match[2]}m`;
    };

    let renderSlice = (slice, label) => {
        let segment = slice?.segments?.[0];
        if (!slice || !segment) return null;

        let departureTime = new Date(segment.departing_at);
        let arrivalTime = new Date(segment.arriving_at);

        return (
            <div className="mb-6">
                {isRoundTrip && (
                    <p className="text-sm font-semibold text-blue-600 mb-2">
                        {label}
                    </p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-4">
                    {/* Departure */}
                    <div className="text-center">
                        <h3 className="text-xl sm:text-2xl font-bold">
                            {departureTime.toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                        </h3>
                        <p className="font-medium">
                            {slice.origin?.iata_code}
                        </p>
                        <p className="text-xs text-slate-500">
                            {slice.origin?.city_name}
                        </p>
                    </div>

                    {/* Middle */}
                    <div className="text-center">
                        <div className="flex items-center">
                            <div className="w-3 h-3 bg-slate-400 rounded-full" />
                            <div className="flex-1 h-[2px] bg-slate-300" />
                            <div className="w-3 h-3 bg-slate-400 rounded-full" />
                        </div>

                        <p className="text-xs mt-2 text-slate-500">
                            {formatDuration(slice.duration)}
                        </p>

                        <p className="text-xs text-slate-500">
                            {slice.fare_brand_name}
                        </p>
                    </div>

                    {/* Arrival */}
                    <div className="text-center">
                        <h3 className="text-xl sm:text-2xl font-bold">
                            {arrivalTime.toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                        </h3>
                        <p className="font-medium">
                            {slice.destination?.iata_code}
                        </p>
                        <p className="text-xs text-slate-500">
                            {slice.destination?.city_name}
                        </p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="max-w-6xl mx-auto p-4">
            <div className="bg-white rounded-3xl border shadow-sm hover:shadow-xl transition-all duration-300 p-4 sm:p-6">
                <div className="flex flex-col lg:flex-row gap-6">

                    {/* LEFT */}
                    <div className="flex-1">
                        {/* Airline */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
                            <img
                                src={airlineLogo}
                                alt={airlineName}
                                className="w-14 h-14 rounded-xl border p-2 bg-white"
                            />

                            <div>
                                <h2 className="font-bold text-lg">
                                    {airlineName}
                                </h2>
                                <p className="text-sm text-gray-500">
                                    {airlineCode}
                                </p>
                            </div>

                            <div className="ml-auto flex gap-2 flex-wrap">
                                {isRoundTrip ? (
                                    <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full flex items-center gap-1">
                                        <ArrowRightLeft size={14} />
                                        Round Trip
                                    </span>
                                ) : (
                                    <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">
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

                        {/* Flights */}
                        {renderSlice(slices[0], "Departure")}
                        {isRoundTrip && renderSlice(slices[1], "Return")}

                        {/* Features */}
                        <div className="flex flex-wrap gap-2 mt-4">
                            {wifiAvailable && (
                                <span className="badge">
                                    <Wifi size={14} /> WiFi
                                </span>
                            )}

                            {checkedBag && (
                                <span className="badge">
                                    <Briefcase size={14} /> {checkedBag.quantity} Checked
                                </span>
                            )}

                            {carryOn && (
                                <span className="badge">
                                    <Luggage size={14} /> {carryOn.quantity} Cabin
                                </span>
                            )}

                            {changeAllowed && (
                                <span className="badge">
                                    <ShieldCheck size={14} /> Change Allowed
                                </span>
                            )}
                        </div>

                        <p className="text-xs text-gray-500 mt-4">
                            CO₂ Emission: {emissions} kg
                        </p>
                        
                    </div>

                    {/* RIGHT */}
                    <div className="text-center flex items-center justify-center flex-col sticky top-4 bg-gradient-to-br from-blue-50 to-gray-100 rounded-3xl border p-6 text-center">
                        <p className="text-sm text-gray-500">Total Price</p>

                        <h2 className="text-3xl sm:text-4xl font-bold text-green-600 my-2">
                            {currency} {price}
                        </h2>

                        <p className="text-xs text-gray-500 mb-4">
                            Taxes included
                        </p>

                       
                    </div>
                </div>
            </div>

       
            <style jsx>{`
        .badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          background: #f1f5f9;
          padding: 8px 12px;
          border-radius: 12px;
        }
      `}</style>
       <PassengerForm />
        </div>
    );
}
