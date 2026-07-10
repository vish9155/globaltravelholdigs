import {
  Copyright,
  MapPin,
  PhoneCall,
  Mail,
  ArrowUpRight,
} from "lucide-react";

import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  return (
    <footer className="relative overflow-hidden bg-[#2b2b2b] text-white border-t border-white/10">


      <div className="absolute top-0 left-0 w-80 h-80 bg-green-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gray-500/10 blur-3xl rounded-full"></div>


      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-80"></div>


      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">


        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="space-y-6"
        >

          <NavLink
            to="/"
            className="inline-block group"
          >

            <img
              src="/images/gtb logo 2.png"
              alt="logofooter"
              className="h-25 w-[150px] object-contain transition-transform duration-500 group-hover:scale-105"
            />

          </NavLink>

          <p className="text-gray-300 text-[15px] leading-relaxed border-l-2 border-emerald-500/60 pl-4">
            <span className="font-semibold text-white">
              Global Travel
            </span>{" "}
            is a trusted and modern travel platform designed to make your journey smooth, luxurious, and unforgettable with premium cruise, hotel, and vacation experiences.
          </p>

          {/* Social Icons */}

          <div className="flex gap-4 pt-2">

            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="group w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-gradient-to-r hover:from-green-600 hover:to-emerald-500 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-lg"
                >
                  <Icon
                    size={15}
                    className="group-hover:scale-110 transition"
                  />
                </a>
              )
            )}

          </div>

        </motion.div>

        {/* Quick Links */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >

          <h2 className="text-sm font-bold uppercase tracking-[3px] text-emerald-500 mb-7">
            Quick Exploration
          </h2>

          <div className="space-y-4 ">

            {[
              "Home",
              "Blog",
              "Flights",
              "Cars",
              "Hotels",
              "Cruise",
              "Packages",
            ].map((item, i) => (

              <NavLink
                key={i}
                to={`/${item.toLowerCase()}`}
                className="group flex items-center gap-2 text-gray-300 font-semibold font-['Poppins'] hover:text-white transition-all duration-300 text-md"
              >

                <span className="flex items-center gap-3">

                  <span className="w-0 group-hover:w-3 h-[2px] bg-emerald-500 transition-all duration-300"></span>

                  {item}

                </span> 

                <ArrowUpRight
                  size={15}
                  className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                />

              </NavLink>

            ))}

          </div>

        </motion.div>


        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
        >

          <h2 className="text-md font-bold uppercase tracking-[3px] text-emerald-500 mb-7">
            Customer Support
          </h2>

          <div className="space-y-4">

            {[
              { name: "About Us", path: "/about-us" },
              { name: "Privacy Policy", path: "/privacy-policy" },
              { name: "Terms & Conditions", path: "/terms-conditions" },
              { name: "Refund Policy", path: "/refund-policy" },
              { name: "Contact Us", path: "/contact-us" },
              { name: "Disclaimer", path: "/disclaimer" },
              { name: "Services", path: "/services" },
            ].map((link, i) => (

              <NavLink
                key={i}
                to={link.path}
                className="group flex items-center gap-2 font-['Poppins'] font-semibold text-gray-300 hover:text-white transition-all duration-300 text-md"
              >

                <span className="flex items-center gap-3">

                  <span className="w-0 group-hover:w-3 h-[2px] bg-emerald-500 transition-all duration-300"></span>

                  {link.name}

                </span>

                <ArrowUpRight
                  size={15}
                  className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                />

              </NavLink>

            ))}

          </div>

        </motion.div>


        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={4}
        >

          <h2 className="text-sm font-bold uppercase tracking-[3px] text-emerald-500 mb-7">
            Get In Touch
          </h2>

          <div className="space-y-6">


            <div className="flex gap-4 group">

              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-all duration-300">

                <MapPin size={18} className="text-emerald-500" />

              </div>

              <p className="text-gray-4300 text-md leading-relaxed">
                A-16 17662 Irvine Blvd,
                <br />
                Suite 9, Tustin, CA 92780
              </p>

            </div>


            <div className="flex gap-4 items-center group">

              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-all duration-300">

                <Mail size={18} className="text-emerald-500" />

              </div>

              <NavLink
                to="mailto:support@gmail.com"
                className="text-gray-100 hover:text-white transition-colors duration-300 text-md"
              >
                support@gmail.com
              </NavLink>

            </div>


            <div className="flex gap-4 items-center group">

              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-all duration-300">

                <PhoneCall size={18} className="text-emerald-500" />

              </div>

              <NavLink
                to="tel:+18888434146"
                className="text-gray-100 hover:text-white transition-colors duration-300 text-md"
              >
                +1 8888434146
              </NavLink>

            </div>

          </div>

        </motion.div>

      </div>


      <div className="border-t border-white/10 bg-black/40 backdrop-blur-xl relative z-10">

        <div className="max-w-7xl mx-auto py-5 px-6 flex flex-col md:flex-row justify-between items-center gap-4  tracking-wider text-gray-200">

          <div className="flex items-center gap-2">

            <Copyright size={13} className="text-emerald-500" />

            <span className="text-md">
              2026 Global Travel LLC. Luxury Travel Redefined.
            </span>

          </div>

          <div className="flex gap-6">

            <NavLink
              to="/terms-conditions"
              className="hover:text-emerald-400 transition"
            >
              Terms
            </NavLink>

            <NavLink
              to="/privacy-policy"
              className="hover:text-emerald-400 transition"
            >
              Privacy
            </NavLink>

            <NavLink
              to="/refund-policy"
              className="hover:text-emerald-400 transition"
            >
              Refund
            </NavLink>

          </div>

        </div>

      </div>


      <div className="fixed bottom-7 right-7 z-50">

        <div className="relative group">

          <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping opacity-70"></span>

          <NavLink
            to="https://wa.me/18888434146"
            target="_blank"
            className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 flex items-center justify-center shadow-[0_10px_30px_rgba(16,185,129,0.4)] hover:scale-110 transition-all duration-300"
          >

            <FaWhatsapp className="text-3xl text-white" />

          </NavLink>

        </div>

      </div>

    </footer>
  );
}