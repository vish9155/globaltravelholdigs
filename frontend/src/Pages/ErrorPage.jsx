import React, { useEffect, useState } from "react";
import {
  Plane,
  MapPinned,
  Hotel,
  Headphones,
  Camera,
  Home,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
  const [count, setCount] = useState(5);

  const navigate = useNavigate();

  useEffect(() => {
    if (count === 0) {
      navigate("/");
      return;
    }

    const timer = setTimeout(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-100 overflow-hidden relative">

      {/* Floating Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300/20 blur-3xl rounded-full"></div>

      {/* Main */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-16">

        {/* Logo */}
        <div className="flex items-center gap-3 mb-8">

          <div className="bg-blue-600 p-3 rounded-2xl shadow-lg">
            <Plane className="text-white" size={28} />
          </div>

          <div>
            <h1 className="text-2xl font-extrabold text-slate-800">
              Global Travel
            </h1>

            <p className="text-sm text-slate-500">
              Holdings
            </p>
          </div>
        </div>

        {/* 404 */}
        <div className="text-center">

          <h1 className="text-[130px] md:text-[180px] font-black text-blue-700 leading-none drop-shadow-xl">
            404
          </h1>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-2">
            Page Not Found
          </h2>

          <p className="max-w-2xl text-slate-600 mt-6 text-lg leading-8">
            Looks like this travel destination doesn’t exist anymore.
            Don’t worry — we’ll guide you back to your journey.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 mt-16 w-full max-w-6xl">

          {[
            {
              icon: <MapPinned size={32} />,
              title: "Top Destinations",
            },
            {
              icon: <Plane size={32} />,
              title: "Flight Deals",
            },
            {
              icon: <Hotel size={32} />,
              title: "Luxury Hotels",
            },
            {
              icon: <Camera size={32} />,
              title: "Travel Memories",
            },
            {
              icon: <Headphones size={32} />,
              title: "24/7 Support",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="
                bg-white/70
                backdrop-blur-xl
                rounded-3xl
                p-6
                border border-white/50
                shadow-xl
                hover:-translate-y-2
                transition-all
                duration-300
                text-center
              "
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto text-blue-700">
                {item.icon}
              </div>

              <h3 className="mt-5 font-bold text-slate-800">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Countdown */}
        <div className="mt-16 text-center">

          <p className="text-slate-600 text-lg">
            Redirecting to homepage in
          </p>

          <div className="flex items-center justify-center gap-4 mt-6">

            {[count].map((num, index) => (
              <div
                key={index}
                className="
                  w-24 h-24
                  rounded-3xl
                  bg-gradient-to-br
                  from-blue-600
                  to-indigo-700
                  text-white
                  flex
                  flex-col
                  items-center
                  justify-center
                  shadow-2xl
                "
              >
                <span className="text-4xl font-black">
                  {num}
                </span>

                <span className="text-sm opacity-80">
                  Seconds
                </span>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="mt-10">

            <Link
              to="/"
              className="
                inline-flex
                items-center
                gap-3
                px-8
                py-4
                rounded-2xl
                bg-gradient-to-r
                from-blue-600
                to-indigo-700
                text-white
                font-semibold
                shadow-2xl
                hover:scale-105
                transition-all
                duration-300
              "
            >
              <Home size={22} />
              Go Back Home
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center">

          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Global Travel Holdings
          </p>

          <p className="text-slate-400 text-xs mt-2">
            Safe • Secure • Trusted Travel Experience ✈️
          </p>
        </div>
      </div>
    </div>
  );
}