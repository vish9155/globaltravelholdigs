import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import TrendingDestination from './TrendingDestination'
import OurServices from './OurServices'
import PremiumSpecials from './Special'
import HotelStay from './HotelStay'
import Testimonials from './Testimonials'
import Faq from './Faq'
import BookingForm from './HomeFlightSearch'

export default function Home() {
    const videoRef = useRef(null)

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 1
        }
    }, [])

    return (
        <>
            <section className="relative w-full min-h-screen overflow-hidden">
                <video
                    src="/video/Home-Page-Video.mp4"
                    ref={videoRef}
                    loop
                    muted
                    autoPlay
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/20"></div>


                <div className="relative z-10 min-h-screen px-4  flex flex-col justify-center">

                    <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-center justify-between gap-6">

                        <h1 className="text-white font-bold text-xl sm:text-2xl md:text-4xl lg:text-4xl leading-snug text-center lg:text-left max-w-xl">
                            Book Flights, Hotels & Holiday Packages Worldwide
                        </h1>

                        <div className="w-full max-w-md lg:max-w-lg backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-xl">
                            <BookingForm />
                        </div>

                    </div>
                    <div>
                        {/* <NavLink
                                to={"tel:+91 8663075957"}
                                className="block w-full sm:w-auto px-6 py-3 bg-gray-600 hover:bg-black rounded-xl text-white"
                            >
                                Call Us Now
                            </NavLink> */}
                    </div>

                </div>
            </section>
            <section data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">
                <TrendingDestination />
            </section>

            <section className='max-w-7xl mx-auto px-3 py-14'>

                <div className='gap-2 items-center '>
                    <span className="h-[2px] w-8 bg-orange-600/80"></span>
                    <span className='text-orange-600/80 font-bold tracking-[0.2em] uppercase text-md'>Your Trusted Travel Booking Platform for<br /> </span>
                    <h2 className='text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight'>
                        Flights <span className="text-orange-600/80">& Hotels</span>
                    </h2>
                </div>


                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
                    <div className='order-1 md:order-1'>
                        <h3 className='text-lg sm:text-xl font-semibold  text-center'>Explore the World with Global Travel Holdings LLC</h3>
                        <div className='p-3'>
                            <p className='text-sm sm:text-base text-justify p-2'>Global Travel Holdings LLC is a trusted platform built to make travel simple, reliable, and enjoyable. Whether you're planning a quick getaway or a long international journey, we provide a smooth and secure booking experience designed around your needs.</p>
                            <p className='text-sm sm:text-base text-justify p-2'>We focus on delivering value, transparency, and convenience at every step—helping you find the right options without confusion or stress. With a commitment to quality service and customer satisfaction, we aim to make every trip comfortable and memorable.</p>
                            <p className='text-sm sm:text-base text-justify p-2'>From personalized travel planning to dedicated support, Global Travel Holdings LLC ensures you can explore new destinations with confidence and peace of mind.</p>
                        </div>
                        <div className='mx-auto py-5 max-w-5xl text-center'>
                            <NavLink to={"/about-us"} className={'p-3  px-8 text-white bg-orange-800/80 rounded-full  '}>About More</NavLink>
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
