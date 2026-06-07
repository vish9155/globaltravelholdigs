import React from 'react'
import { motion } from "framer-motion";
import { Plane, Hotel, Car, ShieldCheck, Globe2, ShipWheel } from "lucide-react";

export default function ExperienceWithExpert() {

    const services = [
        {
            icon: <Plane size={30} />,
            text: "Easy flight bookings for domestic and international travel"
        },
        {
            icon: <Hotel size={30} />,
            text: "Comfortable hotel reservations across global destinations"
        },
        {
            icon: <Car size={30} />,
            text: "Convenient car rental services for local and long-distance travel"
        },
        {
            icon: <ShipWheel size={30} />,
            text: "Cruise bookings for luxury travel experiences"
        },
        {
            icon: <ShieldCheck size={30} />,
            text: "Travel insurance for safe and secure trips"
        },
        {
            icon: <Globe2 size={30} />,
            text: "Visa assistance for hassle-free international travel"
        },
    ];

    const team = [
        {
            image: "/images/about/account.png",
            name: "Emily Johnson",
            role: "Travel Consultant"
        },
        {
            image: "/images/about/manager.png",
            name: "Sarah Williams",
            role: "Booking Manager"
        },
        {
            image: "/images/about/supervisor.png",
            name: "Olivia Brown",
            role: "Travel Supervisor"
        },
    ];

    return (

        <section className='py-24 bg-gradient-to-b from-white to-gray-100 overflow-hidden'>

            <div className='max-w-7xl mx-auto px-5'>

                {/* TOP SECTION */}

                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className='text-center max-w-4xl mx-auto'
                >

                    <p className='text-green-600 font-semibold uppercase tracking-[4px]'>
                        What We Offer
                    </p>

                    <h2 className='text-4xl md:text-6xl font-bold mt-5 leading-tight'>
                        Complete Travel Solutions
                        For Modern Travelers
                    </h2>

                    <p className='text-gray-500 mt-7 text-lg leading-relaxed'>
                        We provide a complete travel booking platform designed
                        to simplify flights, hotels, car rentals, cruises,
                        travel insurance, and international travel planning.
                    </p>

                </motion.div>

                {/* SERVICES GRID */}

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20'>

                    {services.map((item, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className='bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100'
                        >

                            <div className='w-16 h-16 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center mb-6'>
                                {item.icon}
                            </div>

                            <p className='text-lg text-gray-700 leading-relaxed'>
                                {item.text}
                            </p>

                        </motion.div>

                    ))}

                </div>

                {/* STATS */}

                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-24'
                >

                    <div className='bg-white rounded-3xl p-10 shadow-lg text-center'>

                        <h2 className='text-5xl font-bold text-green-600'>
                            1.5M+
                        </h2>

                        <p className='text-gray-500 mt-3 text-lg'>
                            Clients Served
                        </p>

                    </div>

                    <div className='bg-white rounded-3xl p-10 shadow-lg text-center'>

                        <h2 className='text-5xl font-bold text-green-600'>
                            95%
                        </h2>

                        <p className='text-gray-500 mt-3 text-lg'>
                            Satisfaction Rate
                        </p>

                    </div>

                    <div className='bg-white rounded-3xl p-10 shadow-lg text-center'>

                        <h2 className='text-5xl font-bold text-green-600'>
                            $2,050
                        </h2>

                        <p className='text-gray-500 mt-3 text-lg'>
                            Average Savings Per Ticket
                        </p>

                    </div>

                </motion.div>

                {/* TEAM SECTION */}

                <div className='mt-28'>

                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className='text-center'
                    >

                        <p className='text-green-600 font-semibold uppercase tracking-[4px]'>
                            Meet Our Experts
                        </p>

                        <h2 className='text-4xl md:text-5xl font-bold mt-5'>
                            Dedicated Travel Professionals
                        </h2>

                    </motion.div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-16'>

                        {team.map((item, index) => (

                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className='bg-white rounded-3xl overflow-hidden shadow-xl group'
                            >

                                <div className='overflow-hidden'>

                                    <img
                                        src={item.image}
                                        className='w-full h-[400px] object-cover group-hover:scale-110 transition-all duration-500'
                                        alt=""
                                    />

                                </div>

                                <div className='p-4 text-center'>

                                    <h3 className='text-2xl font-bold'>
                                        {item.name}
                                    </h3>

                                    <p className='text-gray-500 mt-2'>
                                        {item.role}
                                    </p>

                                </div>

                            </motion.div>

                        ))}

                    </div>

                </div>

            </div>

        </section>

    )
}