import React from 'react'
import { motion } from "framer-motion";
import { Link, NavLink } from 'react-router-dom'

import Testimonials from './Testimonials'
import Faq from './Faq'
import OurServices from './OurServices'
import WhyChosseus from './WhyChosseus'
import ExperienceWithExpert from './ExperienceWithExpert'
import MissionVision from './OurMission'

export default function About() {

    return (

        <>

            {/* HERO SECTION */}

            <section className="relative h-[75vh] md:h-[95vh] overflow-hidden">

                <img
                    src="/images/banner/About us banner.jpg.jpeg"
                    className='absolute inset-0 h-full w-full object-cover scale-110'
                    alt=""
                />

                {/* Overlay */}

                <div className='absolute inset-0 bg-black/55'></div>

                {/* Content */}

                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 h-full flex items-center justify-center text-center px-5"
                >

                    <div>

                        <p className='text-green-400 uppercase tracking-[5px] font-semibold mb-5'>
                            Explore The World With Confidence
                        </p>

                        <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-7xl leading-tight max-w-5xl mx-auto">

                            About Global Travel Holdings LLC

                        </h1>

                        <p className='text-gray-200 max-w-3xl mx-auto mt-8 text-lg md:text-xl leading-relaxed'>

                            Your trusted travel booking platform for flights,
                            hotels, and unforgettable travel experiences around the world.

                        </p>

                        <div className='flex flex-wrap justify-center gap-5 mt-10'>

                            <NavLink
                                to={"/flights"}
                                className='bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300'
                            >
                                Search Flights
                            </NavLink>



                        </div>

                    </div>

                </motion.div>

            </section>

            {/* INTRO TEXT */}

            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className='max-w-5xl mx-auto text-center py-16 px-5'
            >

                <p className='text-green-600 font-semibold uppercase tracking-[4px]'>
                    Trusted Travel Partner
                </p>

                <h2 className='text-3xl md:text-5xl font-bold mt-5 leading-tight'>
                    Your Trusted Travel Booking Platform for Flights & Hotels
                </h2>



            </motion.div>

            {/* FIRST SECTION */}

            <motion.section
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className='max-w-7xl mx-auto px-5 py-10'
            >

                <div className='grid md:grid-cols-2 gap-14 items-center'>

                    {/* IMAGE */}

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className='relative overflow-hidden rounded-3xl group shadow-2xl'
                    >

                        <img
                            src="/images/About us Intro.jpg.jpeg"
                            className='h-full w-full object-cover group-hover:scale-110 transition-all duration-500'
                            alt=""
                        />

                    </motion.div>

                    {/* CONTENT */}

                    <div>

                        <p className='text-green-600 font-semibold uppercase tracking-[3px]'>
                            Explore The World
                        </p>

                        <h3 className='text-3xl md:text-5xl font-bold mt-5 leading-tight'>

                            Explore the World with Global Travel Holdings LLC

                        </h3>

                        <div className='mt-8 space-y-6 text-gray-600 leading-relaxed text-lg'>

                            <p>
                                Global Travel Holdings LLC is a trusted platform built to make travel simple, reliable, and enjoyable. Whether you're planning a quick getaway or a long international journey, we provide a smooth and secure booking experience designed around your needs.
                            </p>

                            <p>
                                We focus on delivering value, transparency, and convenience at every step—helping you find the right options without confusion or stress. With a commitment to quality service and customer satisfaction, we aim to make every trip comfortable and memorable.
                            </p>

                            <p>
                                From personalized travel planning to dedicated support, Global Travel Holdings LLC ensures you can explore new destinations with confidence and peace of mind.
                            </p>

                        </div>

                        <div className='mt-10'>

                            <NavLink
                                to={"/flights"}
                                className='bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 inline-block'
                            >
                                Search Flights
                            </NavLink>

                        </div>

                    </div>

                </div>

            </motion.section>

            {/* SECOND SECTION */}

            <motion.section
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className='max-w-7xl mx-auto px-5 py-20'
            >

                <div className='grid md:grid-cols-2 gap-14 items-center'>

                    {/* CONTENT */}

                    <div>
                        <h3 className='text-3xl md:text-5xl font-bold mt-5 leading-tight'>
                            About Global Travel Holdings LLC

                        </h3>

                        <div className='mt-8 space-y-6 text-gray-600 leading-relaxed text-lg'>

                            <p>
                                Planning a trip should be exciting, not complicated. At Global Travel Holdings LLC, we make it easier to explore the world with confidence by offering a simple and reliable platform for all your travel needs.
                            </p>

                            <p>
                                From finding the right flights to booking comfortable stays and organizing complete travel experiences, our focus is on providing a smooth and stress-free journey from start to finish. We combine convenience, transparency, and dedicated support to ensure every traveler enjoys a seamless booking experience.
                            </p>

                            <p>
                                Whether you're traveling for business or leisure, we are here to help you plan smarter and travel better.
                            </p>

                        </div>

                        <div className='mt-10'>

                            <Link
                                href="https://wa.me/919711110975"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='bg-black hover:bg-green-800 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 inline-block'
                            >
                                Contact Us
                            </Link>

                        </div>

                    </div>

                    {/* IMAGE */}

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className='relative overflow-hidden rounded-3xl group shadow-2xl'
                    >

                        <img
                            src="/images/about us intro global traval.jpg.jpeg"
                            className='h-full w-full object-cover group-hover:scale-110 transition-all duration-500'
                            alt=""
                        />

                    </motion.div>

                </div>

            </motion.section>

            {/* EXTRA COMPONENTS */}

            <ExperienceWithExpert />

            <MissionVision />

            <OurServices />

            <Testimonials />

            <WhyChosseus />

            <Faq />

        </>

    )
}