import React from "react";

export default function RefundPolicy() {
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
            Refund Policy : Global Travel Holdings LLC   
            </h1>

            <p className="mt-4 text-gray-600 text-sm sm:text-base leading-7">
    At Global Travel Holdings LLC, we understand that travel plans may change due to unforeseen circumstances. Our Refund Policy is designed to provide clarity and transparency regarding eligibility, timelines, and conditions under which refunds are processed.
            </p>
 <p className="mt-4 text-gray-600 text-sm sm:text-base leading-7">Refunds depend on multiple factors, including the type of booking, cancellation timing, and the policies of airlines, hotels, or third-party service providers. We strive to ensure that all refund requests are handled fairly, efficiently, and in accordance with applicable terms.</p>
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
              <h2 className="text-xl font-bold">1. General Conditions</h2>
              <ul>
                <li>	Refunds depend on third-party provider policies</li>
                <li>	Processing time varies based on payment method</li>
                <li> 	Service fees may not be refundable</li>
           
              </ul>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold">2. Partial Refunds</h2>
              <p className="mt-3 text-gray-600 text-sm leading-7">
               In some cases, partial refunds may be issued depending on cancellation timing and provider rules.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold">3.No Refund Situations</h2>
              <p className="mt-3 text-gray-600 text-sm leading-7">
              Refunds may not be applicable in cases such as:
              </p>
              <ul>
                <li>	No-show bookings</li>
                <li>Last-minute cancellations</li>
                <li>Non-refundable fares</li>
              </ul>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold">4. Processing Timeline</h2>
              <p className="mt-3 text-gray-600 text-sm leading-7">
               Refunds typically take 7 to 30 business days, depending on banks and service providers.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold">5.Chargebacks</h2>
              <p className="mt-3 text-gray-600 text-sm leading-7">
                Unauthorized chargebacks may lead to account suspension or legal action.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold">6. Refund Communication</h2>
              <p className="mt-3 text-gray-600 text-sm leading-7">
               All refund requests must be submitted via email with complete booking details.
              </p>
            </div>

          </div>

          {/* Right */}
          <div className="space-y-6">

            <div className="bg-white border border-yellow-200 rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-lg">Contact Support</h3>
              <p className="text-sm text-gray-600 mt-2">
                For refund requests or queries, contact our support team:
              </p>

              <div className="mt-4 space-y-3 text-sm">
                <p><b>Email:</b>support@globaltravelholdings.com</p>
                <p><b>Phone:</b> +91 98765 43210</p>
                <p><b>Address:</b>  Global Travel Holdings LLC,16192 Coastal Highway, Lewes, Delaware, USA </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-500 to-amber-500 text-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-bold text-lg">Important Note</h3>
              <p className="mt-2 text-sm">
                Refund policies may vary depending on the service provider. Always review terms before booking to avoid unexpected charges.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}