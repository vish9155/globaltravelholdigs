import React from "react";
import { Plane } from "lucide-react";

export default function Loader() {
  return (
    <section className="w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-50 via-white to-yellow-100">

      {/* Spinner Circle */}
      <div className="relative flex items-center justify-center">
        
        {/* Outer ring */}
        <div className="w-20 h-20 border-4 border-yellow-300 rounded-full animate-spin border-t-yellow-600"></div>

        {/* Center icon */}
        <div className="absolute">
          <Plane className="text-yellow-600 animate-pulse" size={28} />
        </div>

      </div>

      {/* Text */}
      <h2 className="mt-6 text-lg sm:text-xl font-semibold text-gray-700 animate-pulse">
        Experience With Global Travel...
      </h2>

      {/* Sub text */}
      <p className="text-sm text-gray-500 mt-2 flex gap-3">
        Preparing your journey <Plane size={28}/>
      </p>

    </section>
  );
}