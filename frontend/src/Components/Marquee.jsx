import React from "react";

export default function Marquee() {
  const services = [
    "✈️ Flight Booking",
    "🏨 Hotel Reservation",
    "🌍 Holiday Packages",
    "🚢 Cruise Booking",
    "🧭 Tour Guide",
    "🚗 Car Rentals",
    "🏔 Adventure Trips",
    "🎧 24/7 Support",
  ];

  return (
    <section className="py-6 py-10 ">
      
      <marquee
            direction="right" className="relative bg-gradient-to-r from-black via-gray-900 to-black overflow-hidden py-3">
        
        {/* Gradient fade left */}
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent z-10"></div>

        {/* Gradient fade right */}
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-10"></div>

        {/* Scrolling Track */}
        <div className="flex gap-8 animate-marquee duration-[30s] whitespace-nowrap">
          
          {[...services, ...services].map((item, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/10 
              rounded-full text-white text-sm md:text-base shadow-lg"
            >
              {item}
            </div>
          ))}

        </div>
      </marquee>
    </section>
  );
}