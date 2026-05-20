import React, { useState } from 'react';
import { faqdata } from '../data/faq';
import { FaPlus } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Faq() {

  const tabs = [
    { label: "Booking", key: "booking_services" },
    { label: "Payment", key: "payment_pricing" },
    { label: "Cancellation", key: "cancellation_refund" },
    { label: "Changes", key: "changes_rescheduling" },
    { label: "Flights", key: "flight_services" },
    { label: "Hotels", key: "hotel_services" },
    { label: "Car Rental", key: "car_rental" },
    { label: "Cruises", key: "cruise_services" },
    { label: "Delays", key: "delays_cancellations" },
    { label: "Support", key: "support_security" }
  ];

  const [tab, setTab] = useState("booking_services");
  const [open, setOpen] = useState(null);
  const [search, setSearch] = useState("");

  const Selectedfaqdata = faqdata[tab] || [];

  const filterdata = Selectedfaqdata.filter((item) =>
    item.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 overflow-hidden">

      <section className="relative py-24 px-6 border-b border-slate-100">

        <div className="absolute top-0 left-0 w-72 h-72 bg-green-200/30 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-200/30 blur-3xl rounded-full"></div>

        <div className="relative max-w-5xl mx-auto text-center">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-500  to-gray-500 bg-clip-text text-transparent mb-6"
          >
            24/7 Customer Support for Your Travel Needs
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
          >
            How can we{" "}
            <span className="bg-gradient-to-r from-green-500 to-gray-500 bg-clip-text text-transparent">
              help you today?
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto mt-6 text-slate-500 text-lg leading-relaxed"
          >
            Find quick answers and reliable support for your travel plans.
            Get help with bookings, refunds, cancellations, hotels,
            rescheduling, and more.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto mt-12"
          >
            <input
              type="text"
              placeholder="Search your question..."
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-5 rounded-2xl border border-slate-200 bg-white shadow-xl outline-none focus:ring-4 focus:ring-green-100 focus:border-green-400 transition-all duration-300 placeholder:text-slate-400"
            />
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 -mt-8 relative z-10">

        <div className="bg-white/80 backdrop-blur-xl border border-slate-100 shadow-2xl rounded-3xl p-4 flex flex-wrap justify-center gap-3">

          {tabs.map((item, id) => (

            <button
              key={id}
              onClick={() => {
                setTab(item.key);
                setOpen(null);
              }}
              className={`px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                item.key === tab
                  ? "bg-green-600 text-white shadow-lg scale-105"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">

        <div className="flex items-center justify-between mb-12 border-b border-slate-200 pb-6">

          <h2 className="text-3xl font-bold text-slate-800">
            {tabs.find((t) => t.key === tab)?.label} FAQs
          </h2>

          <span className="text-slate-400 text-sm">
            {filterdata.length} Questions
          </span>
        </div>

        {filterdata.length === 0 ? (

          <div className="text-center py-20 rounded-3xl bg-slate-50 border border-dashed border-slate-300">
            <p className="text-slate-500 font-medium">
              No matching questions found.
            </p>
          </div>

        ) : (

          <div className="space-y-5">

            {filterdata.map((item, id) => {

              const isOpen = open === id;

              return (

                <motion.div
                  key={id}
                  layout
                  className={`rounded-3xl border overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "border-green-200 bg-white shadow-xl"
                      : "border-slate-200 bg-white hover:border-green-200"
                  }`}
                >

                  <button
                    onClick={() => setOpen(isOpen ? null : id)}
                    className="w-full p-6 flex items-center justify-between text-left"
                  >

                    <h3
                      className={`text-lg font-semibold transition-all ${
                        isOpen
                          ? "bg-gradient-to-r from-green-500 via-black to-gray-500 bg-clip-text text-transparent"
                          : "text-slate-700"
                      }`}
                    >
                      {item.question}
                    </h3>

                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                        isOpen
                          ? "bg-gradient-to-r from-green-500 to-gray-500 text-white rotate-45"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <FaPlus />
                    </div>
                  </button>

                  <AnimatePresence>

                    {isOpen && (

                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                      >

                        <div className="px-6 pb-8 text-slate-600 leading-relaxed border-t border-slate-100">
                          <div className="pt-5">
                            {item.answer}
                          </div>
                        </div>

                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        )}
      </section>

      <section className="pb-14 px-6">

        <div className="max-w-2xl mx-auto bg-gradient-to-r from-green-500 to-gray-500 rounded-[40px] p-5 text-center shadow-2xl">

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Still Need Help?
          </h2>

          <p className="text-white/90 mb-8 text-lg">
            Our travel support team is available 24/7 to assist you.
          </p>

          <NavLink
            to="/contact-us"
            className="inline-block bg-white text-slate-900 font-semibold px-8 py-4 rounded-full hover:scale-105 transition-all duration-300"
          >
            Contact Support
          </NavLink>
        </div>
      </section>
    </div>
  );
}