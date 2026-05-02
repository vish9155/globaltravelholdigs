import React, { useState } from 'react';
import { faqdata } from '../data/faq';
import { FaPlus } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default function Faq() {
  let tabs = [
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

  let [tab, setTab] = useState("booking_services");
  let [open, setOpen] = useState(false);
  let [search, setSearch] = useState("");
  
  let Selectedfaqdata = faqdata[tab] || [];
  let filterdata = Selectedfaqdata.filter((item) => 
    item.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#fafaf9] text-slate-900 font-sans selection:bg-amber-100">
      
      <section className="relative overflow-hidden bg-white border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
        
        <header className="relative max-w-5xl mx-auto text-center py-20 px-6">
          <h2 className='text-xl sm:text-2xl md:text-4xl text-fuchsia-700 text-center font-semibold py-5'>24/7 Customer Support for Your Travel Needs</h2>
          {/* <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-amber-50 text-amber-700 rounded-full border border-amber-100">
            Customer Support
          </span> */}
          <h1 className="text-5xl md:text-4xl font-extrabold mb-6 tracking-tight text-slate-900">
            How can we <span className="text-amber-600">help you Today?</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-500 text-lg leading-relaxed">
           Find quick answers and reliable support for your travel plans. Browse our help center, explore common topics, or connect with our team for assistance with flight bookings, hotel reservations, cancellations, refunds, and more.
          </p>

          <div className="max-w-2xl mx-auto mt-10 relative">
            <input 
              type="text" 
              placeholder="Search for questions (e.g. 'refund policy')..." 
              onChange={(e) => setSearch(e.target.value)} 
              className="w-full bg-white shadow-2xl shadow-slate-200/50 outline-none border border-slate-200 focus:border-amber-400 p-5 pl-8 rounded-2xl transition-all duration-300 text-slate-700 placeholder:text-slate-400" 
            />
          </div>
        </header>
      </section>

      {/* Tabs Section */}
      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">
        <div className="flex flex-wrap justify-center gap-3 bg-white/80 backdrop-blur-md p-4 rounded-3xl shadow-xl border border-slate-100">
          {tabs.map((item, id) => (
            <button 
              key={id} 
              onClick={() => { setTab(item.key); setOpen(null); }} 
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 transform active:scale-95 ${
                item.key === tab 
                ? "bg-slate-900 text-white shadow-lg shadow-slate-300 scale-105" 
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </section>

      {/* FAQ Content */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-12 flex items-center justify-between border-b border-slate-200 pb-6">
            <h2 className="text-2xl font-bold text-slate-800">
                {tabs.find(t => t.key === tab)?.label} FAQs
            </h2>
            <span className="text-sm text-slate-400 font-medium">
                {filterdata.length} Results
            </span>
        </div>

        {filterdata.length === 0 ? (
          <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-300">
            <p className="text-slate-500 font-medium">No matches found for "{search}"</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filterdata.map((item, id) => {
              const isOpen = open === id;
              return (
                <div 
                  key={id} 
                  className={`group transition-all duration-500 rounded-2xl border ${
                    isOpen ? "border-amber-200 bg-amber-50/30" : "border-slate-200 bg-white hover:border-amber-200"
                  }`}
                >
                  <button 
                    className="flex items-center justify-between p-6 w-full text-left focus:outline-none" 
                    onClick={() => setOpen(isOpen ? null : id)}
                  >
                    <h3 className={`font-semibold text-lg transition-colors ${isOpen ? "text-amber-900" : "text-slate-700"}`}>
                      {item.question}
                    </h3>
                    <div className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isOpen ? "bg-amber-500 text-white rotate-45" : "bg-slate-100 text-slate-400 group-hover:bg-amber-100 group-hover:text-amber-600"
                    }`}>
                      <FaPlus className="text-xs" />
                    </div>
                  </button>
                  
                  <div 
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-8 text-slate-600 leading-relaxed text-base">
                      <div className="pt-2 border-t border-amber-100/50">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Footer Decoration */}
      <div className="max-w-lg mx-auto text-center pb-20">
          <p className="text-slate-400 text-sm mb-4">Still need help?</p>
          <NavLink to="/contact-us" className="px-8 py-3 bg-slate-900 text-white rounded-full font-semibold hover:bg-amber-600 transition-colors shadow-lg">
              Contact Concierge Support
          </NavLink>
      </div>
    </div>
  );
}