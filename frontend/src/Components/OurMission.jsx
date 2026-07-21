import React from "react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

import {
  Globe2,
  Target,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";

export default function MissionVision() {

  const cards = [
    {
      icon: <Globe2 size={35} />,
      title: "Who We Are",
      desc1:
        "Global Travel Holdings LLC is a trusted online travel agency platform designed to simplify the way people plan and book their journeys.",
      desc2:
        "We provide a seamless and reliable experience for travelers looking for convenience, flexibility, and peace of mind.As a growing global travel solutions provider, our goal is to bring everything you need for travel into one easy-to-use platform—helping you plan smarter and travel better.",
    },

    {
      icon: <Target size={35} />,
      title: "Our Mission", 
      desc1:
        "Our mission is to make travel planning simple, transparent, and accessible for everyone. ",
      desc2:
        "Through our advanced travel booking services, we aim to remove complexity and provide a smooth experience from search to booking.We focus on delivering value, reliability, and customer satisfaction at every stage of your journey.",
    },

    {
      icon: <Lightbulb size={35} />,
      title: "Our Approach",
      desc1:
        "We understand that every journey is unique. That’s why we focus on providing personalized solutions that match your travel needs—whether it’s a budget-friendly trip, a business journey, or a luxury vacation.",
      desc2:
        "By combining technology with customer-focused service, we ensure that your travel planning is smooth, efficient, and stress-free.",
    },

    {
      icon: <ShieldCheck size={35} />,
      title: "Our Commitment",
      desc1:
        "By combining technology with customer-focused service, we ensure that your travel planning is smooth, efficient, and stress-free.",
      desc2:
        "By combining technology with customer-focused service, we ensure that your travel planning is smooth, efficient, and stress-free.",
    },
  ];

  return (

    <section className="py-6 bg-gradient-to-b from-gray-100 to-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-5">

        {/* TOP HEADING */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >

          <p className="text-green-600 uppercase tracking-[4px] font-semibold">
            Our Mission & Vision
          </p>

      
        </motion.div>

        {/* CARDS */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">

          {cards.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >

              <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center">

                {item.icon}

              </div>

              <h3 className="text-3xl font-bold mt-8">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-6 leading-relaxed text-lg">
                {item.desc1}
              </p>

              <p className="text-gray-500 mt-5 leading-relaxed">
                {item.desc2}
              </p>

            </motion.div>

          ))}

        </div>

        {/* BOTTOM CTA */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-28 bg-black rounded-[40px] overflow-hidden relative"
        >

          {/* Background Overlay */}

          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-transparent"></div>

          <div className="relative z-10 px-8 py-16 md:px-20 text-center">

            <p className="text-green-400 uppercase tracking-[4px] font-semibold">
              Start Your Journey Today
            </p>

            <h2 className="text-4xl md:text-6xl font-bold text-white mt-6 leading-tight max-w-4xl mx-auto">

              Experience A Smarter
              Way To Travel

            </h2>

            <p className="text-gray-300 mt-8 max-w-3xl mx-auto text-lg leading-relaxed">

            Start your journey with Global Travel Holdings LLC and experience a smarter way to travel. Whether you're planning ahead or booking at the last moment, we are here to support you every step of the way.

            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-12">

              <NavLink
                to="/flights"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300"
              >
                Search Flights
              </NavLink>

              <Link
                to="tel:91 8588809690"
                className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300"
              >
                Call Us Now
              </Link>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}