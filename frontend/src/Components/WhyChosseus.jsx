import React from 'react'
import { motion } from "framer-motion";
import { Link, NavLink } from 'react-router-dom'
import {
    ShieldCheck,
    Globe2,
    Headphones,
    BadgeCheck,
    Plane
} from "lucide-react";

export default function WhyChosseus() {

    const features = [
        {
            icon: <ShieldCheck size={28} />,
            text: "User-friendly and intuitive booking experience"
        },
        {
            icon: <Globe2 size={28} />,
            text: "Transparent pricing with no hidden surprises"
        },
        {
            icon: <Headphones size={28} />,
            text: "Wide range of travel options worldwide"
        },
        {
            icon: <BadgeCheck size={28} />,
            text: "Dedicated customer support when you need assistance"
        },
    ];

    return (

        <section className='py-24 bg-gradient-to-b from-white to-gray-100 overflow-hidden'>

            <div className='max-w-7xl mx-auto px-5'>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>


                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >

                        <p className='text-green-600 font-semibold uppercase tracking-[4px]'>
                            Why Choose Global Travel Holdings LLC
                        </p>

                       

                        <p className='text-gray-600 mt-8 text-lg leading-relaxed'>
                            Choosing the right travel agency for flights and hotels can make a big difference in your overall experience. At Global Travel Holdings LLC, we prioritize trust, simplicity, and support.
                        </p>


                        <div className='space-y-6 mt-10'>

                            {features.map((item, index) => (

                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className='flex items-start gap-5 bg-white p-5 rounded-2xl shadow-lg'
                                >

                                    <div className='w-14 h-14 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center shrink-0'>

                                        {item.icon}

                                    </div>

                                    <p className='text-gray-700 text-lg leading-relaxed'>
                                        {item.text}
                                    </p>

                                </motion.div>

                            ))}

                        </div>


                        <div className='mt-10 space-y-6 text-gray-600 leading-relaxed text-lg'>

                            <p>
                              What truly sets Global Travel apart is its focus on personalization and luxury. Whether you’re traveling for business or leisure, the services are tailored to your needs—offering curated itineraries, premium accommodations, and exclusive deals. The intuitive booking system makes planning quick and easy, while maintaining a high-end feel throughout the process.
                            </p>

                            <p>
                                In addition, Global Travel provides reliable 24/7 customer support, so you’re always backed up no matter where you are. From last-minute changes to travel assistance, their team ensures peace of mind at every step. Combining affordability with quality, Global Travel delivers exceptional value, making it a trusted choice for modern travelers.
                            </p>

                           

                        </div>


                        <div className='flex flex-wrap gap-5 mt-12'>

                            <NavLink
                                to="/flights"
                                className='bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300'
                            >
                                Search Flights
                            </NavLink>

                            <Link
                                to="https://wa.me/919711110975"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='border border-black text-black hover:bg-black hover:text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300'
                            >
                                Chat On WhatsApp
                            </Link>

                        </div>

                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className='relative'
                    >


                        <div className='absolute -top-8 -left-8 w-full h-full bg-green-100 rounded-[40px]'></div>


                        <div className='relative overflow-hidden rounded-[40px] shadow-2xl group'>

                            <img
                                src="/images/Why chose global travel.jpg.jpeg"
                                className='w-[750px] border h-[750px] object-cover group-hover:scale-110 transition-all duration-700'
                                alt=""
                            />


                            <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent'></div>

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>
    )
}