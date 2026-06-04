import React from "react";
import { NavLink } from "react-router-dom";

export default function MissionVision() {
  return (
    <section className="max-w-6xl mx-auto  rounded-lg shadow-2xl shadow-white py-16 px-4">
      
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-wide">
          Our Mission & Vision
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Vision Card */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-xl hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
          Who We Are
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Global Travel Holdings LLC is a trusted <b>online travel agency platform</b> built to simplify the way people plan and book their journeys. We provide a seamless and reliable experience for travelers looking for convenience, flexibility, and peace of mind.
            </p>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">As a growing <b>global travel solutions</b> provider, our goal is to bring everything you need for travel into one easy-to-use platform—helping you plan smarter and travel better.</p>
          </div>

          {/* Mission Card */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-xl hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
               Our Mission
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
             Our mission is to make travel planning simple, transparent, and accessible for everyone. Through <b>our advanced travel booking services</b>, we aim to remove complexity and provide a smooth experience from search to booking.
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">We focus on delivering value, reliability, and customer satisfaction at every stage of your journey.</p>
          </div>
<div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-xl hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
              Our Approach
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            We understand that every journey is unique. That’s why we focus on providing personalized solutions that match your travel needs—whether it’s a budget-friendly trip, a business journey, or a luxury vacation.
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">By combining technology with customer-focused service, we ensure that your travel planning is smooth, efficient, and stress-free.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-xl hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
             Our Commitment
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
           At Global Travel Holdings LLC, we are committed to building long-term relationships through trust, transparency, and quality service. We continuously improve our platform to meet the evolving expectations of travelers worldwide.
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">Your journey matters to us, and we strive to make every experience better than the last.</p>
          </div>
        </div>
      </div>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed py-20 max-w-4xl mx-auto">Start your journey with Global Travel Holdings LLC and experience a smarter way to travel. Whether you're planning ahead or booking at the last moment, we are here to support you every step of the way.</p>
          <div className="mx-auto text-center">
            <NavLink to="tel:9155014125" className="px-8 py-3 bg-slate-900 text-white rounded-full font-semibold hover:bg-amber-600 transition-colors shadow-lg">Call-Us Now</NavLink>
          </div>
    </section>
  );
}