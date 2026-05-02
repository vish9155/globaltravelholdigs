import React from "react";

export default function Disclaimer() {
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
            DISCLAIMER : Global Travel Holdings LLC 
            </h1>

            <p className="mt-4 text-gray-600 text-sm sm:text-base leading-7">
           The information provided on the Global Travel Holdings LLC website is intended for general informational and booking purposes only. While we strive to ensure that all content, pricing, and travel details are accurate and up to date, we do not guarantee the completeness, reliability, or accuracy of all information at all times
            </p>
            <p className="mt-4 text-gray-600 text-sm sm:text-base leading-7">
              Travel-related information such as prices, availability, schedules, and policies may change without prior notice due to factors beyond our control. By using our website, you acknowledge and accept that Global Travel Holdings LLC is not liable for any discrepancies, interruptions, or losses resulting from such changes.
            </p>

            <div className="mt-5 flex gap-3 flex-wrap text-sm">
              <span className="bg-gray-100 px-4 py-2 rounded-full">Effective Date: 31 April 2026</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full">Last Updated: 31 April  2026</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          
          {/* Left */}
          <div className="lg:col-span-2 space-y-6">

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold">1. Service Disclaimer</h2>
              <p className="mt-3 text-gray-600 text-sm leading-7">
              We act solely as an intermediary between customers and service providers. We do not operate airlines, hotels, or transport services.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold">2.No Guarantees</h2>
              <p className="mt-3 text-gray-600 text-sm leading-7">
               We do not guarantee:
              </p>
              <ul className="pl-5 list-disc">
                <li>	Visa approvals</li>
                <li>	Availability of services</li>
                <li>Accuracy of third-party information</li>
              </ul>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold">3. Pricing Disclaimer</h2>
              <p className="mt-3 text-gray-600 text-sm leading-7">
                Prices displayed on the website are subject to change and may vary at the time of booking.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold">4. Travel Risks</h2>
              <p className="mt-3 text-gray-600 text-sm leading-7">
                Travel involves inherent risks, including delays, cancellations, and unforeseen circumstances. Users are responsible for understanding these risks.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold">5.Limitation of Liability</h2>
              <p className="mt-3 text-gray-600 text-sm leading-7">
              We shall not be held liable for:
              </p>
              <ul className="pl-5 list-disc">
                <li>Indirect or incidental damages</li>
                <li>Loss of bookings or travel disruptions</li>
                <li>Third-party service failures</li>
              </ul>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold">6. User Responsibility</h2>
              <p className="mt-3 text-gray-600 text-sm leading-7">
              Users must verify all details before booking, including travel documents, visa requirements, and policies.
              </p>
            </div>

          </div>

          {/* Right */}
          <div className="space-y-6">

            <div className="bg-white border border-yellow-200 rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-lg">Contact Information</h3>
              <p className="text-sm text-gray-600 mt-2">
                If you have any questions regarding this disclaimer, please contact us:
              </p>

              <div className="mt-4 space-y-3 text-sm">
                <p><b>Email:</b>support@globaltravelholdings.com</p>
                <p><b>Phone:</b> +91 98765 43210</p>
                <p><b>Address:</b> Global Travel Holdings LLC,16192 Coastal Highway, Lewes, Delaware, USA</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-500 to-amber-500 text-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-bold text-lg">Updates</h3>
              <p className="mt-2 text-sm">
               This disclaimer may be updated without prior notice..
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}