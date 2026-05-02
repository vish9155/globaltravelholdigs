import { Copyright, MapPin, PhoneCall, Mail, ExternalLink } from "lucide-react";
import React from "react";
import { FaEnvelope, FaWhatsapp, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="w-full  bg-gradient-to-r from-[#2b003f] via-[#3a005a] to-[#1a002b] text-white relative overflow-hidden">
            {/* Top Decorative Line */}
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50"></div>

            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
       
                <div className="space-y-6">
                    <NavLink
                        to="/"
                        className="text-3xl font-extrabold tracking-tighter text-white hover:text-amber-400 transition-colors"
                    >
                        GLOBAL<span className="text-amber-500 uppercase ml-1">Travel</span>
                    </NavLink>

                    <p className="text-gray-400 text-sm leading-relaxed border-l-2 py-3 border-amber-500/50 pl-4">
                        <b>Global Travel</b> A trusted and modern travel platform designed to make your journey easy, seamless, and memorable. We offer premium travel experiences, including flights, hotels, and luxury cruises.
                    </p>
                    
                    {/* Social Media Links (Optional but adds Premium Feel) */}
                    <div className="flex gap-4 mt-6">
                        {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                            <a key={index} href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-600 transition-all duration-300">
                                <Icon size={14} />
                            </a>
                        ))}
                    </div>
                </div>


                <div>
                    <h2 className="text-sm font-bold uppercase tracking-widest text-amber-500 mb-6">
                        Quick Exploration
                    </h2>
                    <div className="space-y-3">
                        {["Home", "Blog", "Flights", "Cars", "Hotels", "Cruise", "Packages"].map((item, i) => (
                            <NavLink 
                                key={i} 
                                to={`/${item.toLowerCase()}`} 
                                className="group flex items-center text-gray-400 hover:text-white transition-all text-sm"
                            >
                                <span className="w-0 group-hover:w-2 h-[1px] bg-amber-500 mr-0 group-hover:mr-2 transition-all"></span>
                                {item}
                            </NavLink>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-sm font-bold uppercase tracking-widest text-amber-500 mb-6">
                        Customer Support
                    </h2>
                    <div className="space-y-3">
                        {[
                            { name: "About Us", path: "/about-us" },
                            { name: "Privacy Policy", path: "/privacy-policy" },
                            { name: "Terms & Conditions", path: "/terms-conditions" },
                            { name: "Refund Policy", path: "/refund-policy" },
                            { name: "Contact Us", path: "/contact-us" },
                            { name: "Disclaimer", path: "/disclaimer" },
                            { name: "Services", path: "/services" }
                        ].map((link, i) => (
                            <NavLink 
                                key={i} 
                                to={link.path} 
                                className="group flex items-center text-gray-400 hover:text-white transition-all text-sm"
                            >
                                <span className="w-0 group-hover:w-2 h-[1px] bg-amber-500 mr-0 group-hover:mr-2 transition-all"></span>
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                </div>

 
                <div>
                    <h2 className="text-sm font-bold uppercase tracking-widest text-amber-500 mb-6">
                        Get In Touch
                    </h2>

                    <div className="space-y-5">
                        <div className="flex gap-4 items-start group">
                            <div className="mt-1 bg-white/5 p-2 rounded-lg group-hover:bg-amber-500/20 transition-colors">
                                <MapPin size={18} className="text-amber-500" />
                            </div>
                            <p className="text-gray-400 text-sm leading-snug">
                                A-16 17662 Irvine Blvd, Suite 9, <br />Tustin, CA 92780
                            </p>
                        </div>

                        <div className="flex gap-4 items-center group">
                            <div className="bg-white/5 p-2 rounded-lg group-hover:bg-amber-500/20 transition-colors">
                                <Mail size={16} className="text-amber-500" />
                            </div>
                            <NavLink to="mailto:support@gmail.com" className="text-gray-400 hover:text-white text-sm transition-colors">
                                support@gmail.com
                            </NavLink>
                        </div>

                        <div className="flex gap-4 items-center group">
                            <div className="bg-white/5 p-2 rounded-lg group-hover:bg-amber-500/20 transition-colors">
                                <PhoneCall size={16} className="text-amber-500" />
                            </div>
                            <NavLink to="tel:9155014125" className="text-gray-400 hover:text-white text-sm transition-colors">
                                +91 91550 14125
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/5 bg-black/20">
            <div className="max-w-7xl mx-auto px-6 ">
             
            </div>
                  {/* --- EXTRA BRAND ABOUT SECTION (Iska code chahiye tha aapko) --- */}
                {/* <div className="border-t border-slate-800 px-5 py-2">
                    <div className="bg-slate-900/50 rounded-3xl p-8 border border-slate-800">
                        <h3 className="text-xl font-bold text-white mb-4">About Global Travel LLC</h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-4">
                            Global Travel ek international travel solution provider hai. Hum apne customers ko best-in-class service dene ke liye commitment rakhte hain. Hamara platform AI-based search technology use karta hai jisse aapko sabse saste aur premium hotels, flights, aur holiday destinations milte hain. Chahe aap family trip plan kar rahe hon ya solo business travel, Global Travel har mod par aapka bharosemand saathi hai.
                        </p>
                        <div className="flex flex-wrap gap-4 text-xs font-medium text-slate-500">
                            <span className="bg-slate-800 px-3 py-1 rounded-full border border-slate-700">Verified Travel Agency</span>
                            <span className="bg-slate-800 px-3 py-1 rounded-full border border-slate-700">24/7 Support</span>
                            <span className="bg-slate-800 px-3 py-1 rounded-full border border-slate-700">Secure Payments</span>
                            <span className="bg-slate-800 px-3 py-1 rounded-full border border-slate-700">Worldwide Destinations</span>
                        </div>
                    </div>
                </div> */}

                {/* Bottom Bar */}
                <div className="py-3 px-5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 border-t border-slate-800 ">
                    <div className="flex items-center gap-1">
                        <Copyright size={14} />
                        <span>2026 Global Travel LLC. Luxury Travel Redefined.</span>
                    </div>
                    <div className="flex gap-6">
                        <NavLink to="/terms-conditions" className="hover:text-white transition">Terms</NavLink>
                        <NavLink to="/privacy-policy" className="hover:text-white transition">Privacy</NavLink>
                        <NavLink to="/refund-policy" className="hover:text-white transition">Refund</NavLink>
                    </div>
                </div>
            </div>

       
            <div className="fixed bottom-15 right-8 z-50">
                <div className="relative group">
                    {/* Pulsing effect */}
                    <span className="absolute inset-0 rounded-full bg-green-500/50 animate-ping"></span>
                    
                    <NavLink
                        to="https://wa.me/9155014125"
                        target="_blank"
                        className="relative z-10 w-16 h-16 rounded-full bg-green-600 flex items-center justify-center shadow-[0_0_20px_rgba(22,163,74,0.5)] group-hover:scale-110 group-hover:bg-green-500 transition-all duration-300"
                    >
                        <FaWhatsapp className="text-3xl text-white" />
                    </NavLink>
                </div>
            </div>
        </footer>
    );
}