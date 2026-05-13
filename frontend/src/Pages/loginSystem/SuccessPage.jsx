import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function EmailVerifiedSuccess() {
  return (
    <div className="  z-[9999] overflow-auto bg-gradient-to-br from-blue-50 via-white to-indigo-100 flex items-center justify-center px-4 py-20">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300/20 blur-3xl rounded-full"></div>

      {/* Card */}
      <div className="relative w-full max-w-lg bg-white/80 backdrop-blur-2xl border border-white/40 shadow-[0_20px_80px_rgba(0,0,0,0.12)] rounded-[32px] overflow-hidden">

        {/* Top */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-12 text-center">

          <div className="w-28 h-28 mx-auto rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center shadow-2xl border border-white/30">

            <CheckCircle2
              size={64}
              className="text-white"
            />

          </div>

          <h1 className="text-4xl font-black text-white mt-8">
            Email Verified
          </h1>

          <p className="text-blue-100 mt-4 text-lg">
            Your account is now active
          </p>
        </div>

        {/* Content */}
        <div className="px-10 py-12 text-center">

          <p className="text-gray-600 text-lg leading-9">

            Welcome to{" "}

            <span className="font-bold text-blue-700">
              Global Travel Holdings
            </span>

            . Your email verification has been completed successfully.

          </p>

          <div className="mt-10">

            <Link
              to="/login"
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                w-full
                py-4
                rounded-2xl
                bg-gradient-to-r
                from-blue-600
                to-indigo-700
                text-white
                text-lg
                font-bold
                shadow-2xl
                hover:scale-105
                transition-all
                duration-300
              "
            >
              Continue To Login

              <ArrowRight size={22} />
            </Link>

          </div>

          <div className="mt-8 text-gray-500 text-sm">
            Safe • Secure • Trusted Travel Experience ✈️
          </div>
        </div>
      </div>
    </div>
  );
}