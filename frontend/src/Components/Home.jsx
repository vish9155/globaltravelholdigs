import React from 'react'
import { NavLink } from 'react-router-dom'
import TrendingDestination from './TrendingDestination'
import OurServices from './OurServices'
import PremiumSpecials from './Special'
import HotelStay from './HotelStay'
import Testimonials from './Testimonials'
import Faq from './Faq'

export default function Home() {
    return (
        <>
            <section className="relative min-h-screen overflow-hidden">
                <video
                    src="/video/Home-Page-Video.mp4"
                    playsInline
                    loop
                    muted
                    autoPlay
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="relative z-10 min-h-screen px-4 text-center flex flex-col justify-center">

                    <div className="flex items-center justify-center">
                        <h1 className="text-white font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl max-w-4xl leading-snug">
                            Book Flights, Hotels & Holiday Packages Worldwide
                        </h1>
                    </div>

                    <div className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">

                        <div>
                            <NavLink
                                to={"/flights"}
                                className="block w-full sm:w-auto px-6 py-3 bg-yellow-600 hover:bg-yellow-800 rounded-xl text-white"
                            >
                                Search Flights
                            </NavLink>
                        </div>

                        <div>
                            <NavLink
                                to={"tel:8663075957"}
                                className="block w-full sm:w-auto px-6 py-3 bg-gray-600 hover:bg-black rounded-xl text-white"
                            >
                                Call Us Now
                            </NavLink>
                        </div>

                    </div>
                </div>
            </section>
            <section data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">
                <TrendingDestination />
            </section>
            <h2 className='text-xl sm:text-2xl md:text-3xl text-fuchsia-700 font-semibold text-center py-3'>Your Trusted Travel Booking Platform for Flights & Hotels</h2>
            <section className='max-w-7xl mx-auto px-3 py-14' data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='order-1 md:order-1'>
                        <h3 className='text-lg sm:text-xl font-semibold  text-center'>Explore the World with Global Travel Holdings LLC</h3>
                        <div className='p-3'>
                            <p className='text-sm sm:text-base text-justify p-2'>Global Travel Holdings LLC is a trusted platform built to make travel simple, reliable, and enjoyable. Whether you're planning a quick getaway or a long international journey, we provide a smooth and secure booking experience designed around your needs.</p>
                            <p className='text-sm sm:text-base text-justify p-2'>We focus on delivering value, transparency, and convenience at every step—helping you find the right options without confusion or stress. With a commitment to quality service and customer satisfaction, we aim to make every trip comfortable and memorable.</p>
                            <p className='text-sm sm:text-base text-justify p-2'>From personalized travel planning to dedicated support, Global Travel Holdings LLC ensures you can explore new destinations with confidence and peace of mind.</p>
                        </div>
                        <div className='mx-auto py-5 max-w-5xl text-center'>
                            <NavLink to={"/about-us"} className={'p-3  px-8 text-white bg-yellow-600 rounded-full  '}>About More</NavLink>
                        </div>
                    </div>
                    <div className='order-2 md:order-2 relative group overflow-hidden rounded-xl bg-white/5 border-white/5 backdrop-blur-md'>
                        <img src="/images/About us Intro.jpg.jpeg" className='h-full w-full group-hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer' alt="" />
                    </div>
                </div>
            </section>
            <section data-aos="flip-right"> <OurServices /></section>
            <section data-aos="fade-up-left"><HotelStay /></section>
            <section data-aos="fade-down-right"><PremiumSpecials /></section>

            <section data-aos="fade-left"><Testimonials /></section>
            <section data-aos="fade-down">
                <Faq />
            </section>
        </>
    )
}
