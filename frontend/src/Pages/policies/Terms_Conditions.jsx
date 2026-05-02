import React from "react";

export default function TermsConditions() {
  return (
    <section className="bg-gradient-to-b from-yellow-50 via-white to-yellow-50 min-h-screen py-10 sm:py-14">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Header */}
        <div className="relative overflow-hidden rounded-3xl border border-yellow-200 bg-white shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-amber-500/10"></div>

          <div className="relative px-6 py-10 sm:px-10 sm:py-14">
            <p className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-4 py-1 rounded-full">
              Global Travel Legal
            </p>

            <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">
           Terms & Conditions - Global Travel
            </h1>

            <p className="mt-4 text-gray-600 text-sm sm:text-base leading-7">
              Welcome to Global Travel Holdings LLC. These Terms & Conditions govern your use of our website, services, and booking platform. By accessing our website or making any booking, you agree to comply with the terms outlined below.
            </p>
            <p className="mt-4 text-gray-600 text-sm sm:text-base leading-7">
              Our goal is to provide a seamless, reliable, and transparent travel booking experience. These terms are designed to clearly define the responsibilities, rights, and obligations of both the user and Global Travel Holdings LLC. We strongly recommend reviewing these terms before proceeding with any transaction to ensure a clear understanding of our policies.
            </p>

            <div className="mt-5 flex gap-3 flex-wrap text-sm">
              <span className="bg-gray-100 px-4 py-2 rounded-full">Effective Date: 31 April 2026</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full">Last Updated: 31 April 2026</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          
          {/* Left */}
          <div className="lg:col-span-2 space-y-6">

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold">1. Eligibility</h2>
              <p className="mt-3 text-gray-600 text-sm leading-7">
              You must be at least 18 years old and capable of entering into legally binding agreements to use our services.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold">2. Service Scope</h2>
              <p className="mt-3 text-gray-600 text-sm leading-7">
               We provide booking facilitation services for:
              </p>
              <ul className="pl-8 list-disc">
                <li>	Flights</li>
                <li>Hotels</li>
                <li>Car rentals</li>
                <li>Cruises</li>
                <li>Travel insurance</li>
                <li>	Visa assistance</li>
              </ul>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold">3.Pricing & Availability</h2>
            <ul className="pl-8 list-disc">
              <li>	Prices are subject to change without notice</li>
              <li>Availability is not guaranteed until booking confirmation</li>
              <li>Additional charges may apply based on service providers</li>
            </ul>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold">4. Cancellations & Modifications</h2>
              <ul className="pl-8 list-disc">
                <li>	Subject to provider policies</li>
                <li>	Fees may apply for changes or cancellations</li>
                <li>Some bookings may be non-refundable</li>
              </ul>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold">5. Payment Terms</h2>
             <ul className="pl-8 list-disc">
              <li>	Payments must be completed at the time of booking</li>
              <li>We use secure third-party payment gateways</li>
              <li>Failure in payment may result in booking cancellation</li>
             </ul>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold">6. Prohibited Activities</h2>
              <p className="mt-3 text-gray-600 text-sm leading-7">
               Users must not:
              </p>
              <ul className="pl-8 list-disc">
                <li>	Provide false information</li>
                <li>Use the website for fraudulent purposes</li>
                <li>Attempt to harm or disrupt the platform</li>
              </ul>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold">7. Force Majeure</h2>
              <p className="mt-3 text-gray-600 text-sm leading-7">
               We are not responsible for disruptions caused by events beyond our control, including natural disasters, pandemics, or government restrictions.
              </p>Governing Law
            </div>
             <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold">7. Governing Law</h2>
              <p className="mt-3 text-gray-600 text-sm leading-7">
               These terms are governed by the laws of the United States.
              </p>
            </div>

          </div>

          {/* Right */}
          <div className="space-y-6">

            <div className="bg-white border border-yellow-200 rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-lg">Contact Information</h3>
              <p className="text-sm text-gray-600 mt-2">
                For any queries related to terms and conditions, contact us:
              </p>

              <div className="mt-4 space-y-3 text-sm">
                <p><b>Email:</b>support@globaltravelholdings.com</p>
                <p><b>Phone:</b> +91 98765 43210</p>
                <p><b>Address:</b> Global Travel Holdings LLC
16192 Coastal Highway, Lewes, Delaware, USA
</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-500 to-amber-500 text-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-bold text-lg">Important Notice</h3>
              <p className="mt-2 text-sm">
                By continuing to use our services, you agree to follow all applicable travel rules, regulations, and provider-specific policies.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}