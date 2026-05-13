import { AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function EmailAlreadyVerified() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-white to-amber-100 flex items-center justify-center px-4">

      <div className="max-w-md w-full bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-100">

        {/* Top Section */}
        <div className="bg-gradient-to-r from-orange-500 to-amber-600 p-8 text-center">

          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto backdrop-blur-md">
            <AlertCircle size={50} className="text-white" />
          </div>

          <h1 className="text-3xl font-bold text-white mt-5">
            Already Verified
          </h1>

          <p className="text-orange-100 mt-2 text-sm">
            Your email address has already been verified
          </p>
        </div>

        {/* Body */}
        <div className="p-8 text-center">

          <p className="text-gray-600 leading-7">
            This email is already verified with{" "}
            <span className="font-semibold text-orange-600">
              Global Travel Holdings
            </span>
            .
          </p>

          <p className="text-gray-500 mt-4 text-sm">
            You can now login and continue exploring flights,
            hotels and travel services.
          </p>

          <div className="mt-8">
            <Link
              to="/login"
              className="inline-block w-full bg-gradient-to-r from-orange-500 to-amber-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-300"
            >
              Go To Login
            </Link>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            Global Travel Holdings ✈️
          </div>
        </div>
      </div>
    </div>
  );
}