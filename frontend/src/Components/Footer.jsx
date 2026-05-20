import { Copyright, MapPin, PhoneCall, Mail } from "lucide-react";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="w-full bg-[#111111] text-white relative overflow-hidden border-t space-y-2 border-gray-800">
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-60"></div>

            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                
                <div className="space-y-6">
                    <NavLink
                        to="/"
                        className="text-2xl font-black tracking-widest text-white uppercase group"
                    >
                        <img src="/images/New Folder/fbh.png" alt="logofooter" className="text-emerald-500 h-25 w-[150px]  transition-colors duration-300 group-hover:text-emerald-400 ml-1"/>
                    </NavLink>

                    <p className="text-gray-300 text-xs uppercase tracking-wider font-bold leading-relaxed border-l-2 py-2 border-emerald-500/50 pl-4">
                        <b>Global Travel</b> A trusted and modern travel platform designed to make your journey easy, seamless, and memorable. We offer premium travel experiences.
                    </p>
                    
                    <div className="flex gap-3 mt-6">
                        {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                            <a 
                                key={index} 
                                href="#" 
                                className="w-9 h-9 rounded-full bg-white/20 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-emerald-500 hover:border-emerald-500 hover:-translate-y-1 transition-all duration-300"
                            >
                                <Icon size={14} />
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-xs font-black uppercase tracking-widest text-emerald-500 mb-6">
                        Quick Exploration
                    </h2>
                    <div className="space-y-3">
                        {["Home", "Blog", "Flights", "Cars", "Hotels", "Cruise", "Packages"].map((item, i) => (
                            <NavLink 
                                key={i} 
                                to={`/${item.toLowerCase()}`} 
                                className="group flex items-center text-gray-300 hover:text-white font-medium text-sm uppercase tracking-wider transition-all"
                            >
                                <span className="w-0 group-hover:w-2 h-[2px] bg-emerald-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                {item}
                            </NavLink>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-xs font-black uppercase tracking-widest text-emerald-500 mb-6">
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
                                className="group flex items-center text-gray-300 hover:text-white text-sm font-medium tracking-wide transition-all duration-300"
                            >
                                <span className="w-0 group-hover:w-2 h-[2px] bg-emerald-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-xs font-black uppercase tracking-widest text-emerald-500 mb-6">
                        Get In Touch
                    </h2>

                    <div className="space-y-5">
                        <div className="flex gap-4 items-start group">
                            <div className="mt-0.5 bg-white/20 p-2 rounded-xl group-hover:bg-emerald-500/20 border border-white/bg-white/20 transition-colors duration-300">
                                <MapPin size={15} className="text-emerald-600" />
                            </div>
                            <p className="text-gray-300 text-xs font-bold uppercase tracking-wider leading-snug">
                                A-16 17662 Irvine Blvd, Suite 9, <br />Tustin, CA 92780
                            </p>
                        </div>

                        <div className="flex gap-4 items-center group">
                            <div className="bg-white/20 p-2 rounded-xl group-hover:bg-emerald-500/20 border border-white/bg-white/20 transition-colors duration-300">
                                <Mail size={15} className="text-emerald-500" />
                            </div>
                            <NavLink to="mailto:support@gmail.com" className="text-gray-300 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors">
                                support@gmail.com
                            </NavLink>
                        </div>

                        <div className="flex gap-4 items-center group">
                            <div className="bg-white/20 p-2 rounded-xl group-hover:bg-emerald-500/20 border border-white/bg-white/20 transition-colors duration-300">
                                <PhoneCall size={15} className="text-emerald-500" />
                            </div>
                            <NavLink to="tel:9155014125" className="text-gray-300 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors">
                                +91 91550 14125
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800/60 bg-black/40">
                <div className="max-w-7xl mx-auto py-5 px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-widest text-gray-300">
                    <div className="flex items-center gap-1.5">
                        <Copyright size={12} className="text-gray-600" />
                        <span>2026 Global Travel LLC. Luxury Travel Redefined.</span>
                    </div>
                    <div className="flex gap-6">
                        <NavLink to="/terms-conditions" className="hover:text-emerald-500 transition-colors">Terms</NavLink>
                        <NavLink to="/privacy-policy" className="hover:text-emerald-500 transition-colors">Privacy</NavLink>
                        <NavLink to="/refund-policy" className="hover:text-emerald-500 transition-colors">Refund</NavLink>
                    </div>
                </div>
            </div>

            <div className="fixed bottom-8 right-8 z-50">
                <div className="relative group">
                    <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping opacity-75"></span>
                    
                    <NavLink
                        to="https://wa.me/9155014125"
                        target="_blank"
                        className="relative z-10 w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 hover:scale-110 hover:bg-emerald-600 transition-all duration-300"
                    >
                        <FaWhatsapp className="text-2xl text-white" />
                    </NavLink>
                </div>
            </div>
        </footer>
    );
}