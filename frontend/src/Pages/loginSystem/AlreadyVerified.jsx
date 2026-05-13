import { AlertCircle, ArrowRight } from "lucide-react";

export default function EmailAlreadyVerified() {
  return (
    <div className="z-[9999] overflow-auto bg-gradient-to-br from-orange-50 via-white to-amber-100 flex items-center justify-center px-4 py-10">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-300/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-300/20 blur-3xl rounded-full"></div>

      {/* Card */}
      <div className="relative w-full max-w-lg bg-white/80 backdrop-blur-2xl border border-white/40 shadow-[0_20px_80px_rgba(0,0,0,0.12)] rounded-[32px] overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-amber-600 px-8 py-12 text-center">

          <div className="w-28 h-28 mx-auto rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center shadow-2xl border border-white/30">

            <AlertCircle
              size={64}
              className="text-white"
            />

          </div>

          <h1 className="text-4xl font-black text-white mt-8">
            Already Verified
          </h1>

          <p className="text-orange-100 mt-4 text-lg">
            Your email is already verified
          </p>
        </div>

        {/* Body */}
        <div className="px-10 py-12 text-center">

          <p className="text-gray-600 text-lg leading-9">

            This email address is already connected with{" "}

            <span className="font-bold text-orange-600">
              Global Travel Holdings
            </span>

            .

          </p>

          <p className="text-gray-500 mt-6 leading-8">

            You can now continue exploring flights,
            luxury hotels, travel packages and more.

          </p>

          {/* Button */}
          <div className="mt-10">

            <a
              href="/login"
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                w-full
                py-4
                rounded-2xl
                bg-gradient-to-r
                from-orange-500
                to-amber-600
                text-white
                text-lg
                font-bold
                shadow-2xl
                hover:scale-105
                transition-all
                duration-300
              "
            >
              Go To Login

              <ArrowRight size={22} />
            </a>

          </div>

          {/* Footer Text */}
          <div className="mt-8 text-gray-500 text-sm">
            Safe • Secure • Trusted Travel Experience ✈️
          </div>

        </div>
      </div>
    </div>
  );
}