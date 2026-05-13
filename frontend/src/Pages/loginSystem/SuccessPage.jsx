import { CheckCircle, MailCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function EmailVerifiedSuccess() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-blue-100 flex items-center justify-center px-4">

      <div className="max-w-md w-full bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-100">

        {/* Top Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-center">

          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto backdrop-blur-md">
            <CheckCircle size={50} className="text-white" />
          </div>

          <h1 className="text-3xl font-bold text-white mt-5">
            Email Verified
          </h1>

          <p className="text-blue-100 mt-2 text-sm">
            Your account has been successfully verified
          </p>
        </div>

        {/* Body */}
        <div className="p-8 text-center">

          <p className="text-gray-600 leading-7">
            Welcome to{" "}
            <span className="font-semibold text-blue-700">
              Global Travel Holdings
            </span>
            . Your email verification is complete and your account is now active.
          </p>

          <div className="mt-8">
            <Link
              to="/login"
              className="inline-block w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-300"
            >
              Continue To Login
            </Link>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            Safe • Secure • Trusted Travel Experience ✈️
          </div>
        </div>
      </div>
    </div>
  );
}