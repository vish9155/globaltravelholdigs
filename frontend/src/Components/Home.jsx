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

                        <h1 style={{ textShadow: "6px 6px 20px rgba(0,0,0,0.8)" }} className="text-white font-bold text-xl sm:text-2xl md:text-4xl lg:text-4xl leading-snug text-center lg:text-left max-w-xl">
                            Book Flights, Hotels & Holiday Packages Worldwide
                        </h1>

                        <div className="w-full max-w-md lg:max-w-lg backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-xl">
                            <BookingForm />
                        </div>

                    </div>
                    <div>
                    </div>

                </div>
            </section>
            <section data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">
                <TrendingDestination />
            </section>

            {/* <section className='max-w-7xl mx-auto px-3 py-14'>

                <div className='gap-2 items-center '>
                    <span className="h-[2px] w-8 bg-green-600/80"></span>
                    <span className='text-green-600/80 font-bold tracking-[0.2em] uppercase text-md'>Your Trusted Travel Booking Platform for<br /> </span>
                    <h2 className='text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight'>
                        Flights <span className="text-green-600/80">& Hotels</span>
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
                            <NavLink to={"/about-us"} className={'p-3  px-8 text-white bg-green-800/80 rounded-full  '}>About More</NavLink>
                        </div>
                    </div>
                    <div className='order-2 md:order-2 relative group overflow-hidden rounded-xl bg-white/5 border-white/5 backdrop-blur-md'>
                        <img src="/images/About us Intro.jpg.jpeg" className='h-full w-full group-hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer' alt="" />
                    </div>
                </div>
            </section>
             */}

          <section className="relative overflow-hidden">

    {/* Background */}
    <div className="absolute inset-0 bg-[#eef6e8]"></div>

    <div
        className="absolute inset-0 bg-cover bg-center opacity-35"
        style={{
            backgroundImage:
                "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop')",
        }}
    ></div>

    <div className="absolute inset-0 bg-gradient-to-r from-[#f8fff5]/95 via-[#f7fff4]/85 to-[#eef6e8]/80"></div>

    <div className="absolute bottom-0 left-0 w-[420px] h-[320px] bg-gradient-to-t from-green-200/50 to-transparent blur-2xl"></div>

    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-lime-200/20 blur-3xl rounded-full"></div>

    {/* <svg
        className="absolute top-20 left-0 w-full h-[250px] opacity-20"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M0 180C220 70 380 260 620 170C850 80 1020 240 1240 140C1320 100 1380 110 1440 150"
            stroke="#16a34a"
            strokeWidth="3"
            strokeDasharray="10 10"
            fill="none"
        />
    </svg> */}

    {/* Palm Leaf */}
    <div className="absolute top-0 right-0 opacity-80">
        <img
            src="https://pngimg.com/d/palm_tree_PNG2494.png"
            alt=""
            className="w-[180px]"
        />
    </div>

    {/* Left Dots */}
    <div className="absolute top-24 left-10 grid grid-cols-4 gap-4 opacity-20">
        {[...Array(12)].map((_, i) => (
            <div
                key={i}
                className="w-3 h-3 bg-green-600 rounded-full"
            ></div>
        ))}
    </div>

    {/* Main Content */}
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16">

        <div className="flex flex-col items-center text-center mb-12">
            <div className="flex items-center gap-3 mb-4">
                <span className="h-[2px] w-10 bg-green-600 rounded-full"></span>

                <span className="text-green-700 font-semibold tracking-[0.25em] uppercase text-sm sm:text-base">
                    Your Trusted Travel Booking Platform For
                </span>

                <span className="h-[2px] w-10 bg-green-600 rounded-full"></span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                Flights <span className="text-green-700">& Hotels</span>
            </h2>

            <p className="text-slate-500 mt-4 max-w-2xl text-sm sm:text-base">
                Discover seamless travel experiences with trusted booking services,
                exclusive deals, and personalized support for every journey.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            <div className="order-2 md:order-1">
                <div className="bg-white/85 backdrop-blur-xl shadow-2xl rounded-[35px] p-6 sm:p-8 border border-white/70">

                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-5 leading-snug">
                        Explore the World with{" "}
                        <span className="text-green-700">
                            Global Travel Holdings LLC
                        </span>
                    </h3>

                    <div className="space-y-5">
                        <p className="text-sm sm:text-base text-slate-600 leading-7 text-justify">
                            Global Travel Holdings LLC is a trusted platform built to make
                            travel simple, reliable, and enjoyable. Whether you're planning a
                            quick getaway or a long international journey, we provide a smooth
                            and secure booking experience designed around your needs.
                        </p>

                        <p className="text-sm sm:text-base text-slate-600 leading-7 text-justify">
                            We focus on delivering value, transparency, and convenience at
                            every step—helping you find the right options without confusion or
                            stress. With a commitment to quality service and customer
                            satisfaction, we aim to make every trip comfortable and memorable.
                        </p>

                        <p className="text-sm sm:text-base text-slate-600 leading-7 text-justify">
                            From personalized travel planning to dedicated support, Global
                            Travel Holdings LLC ensures you can explore new destinations with
                            confidence and peace of mind.
                        </p>
                    </div>

                    <div className="mt-8">
                        <NavLink
                            to={"/about-us"}
                            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-green-700 text-white font-semibold shadow-lg hover:bg-green-800 hover:scale-105 transition-all duration-300"
                        >
                            About More
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className="order-1 md:order-2">
                <div className="relative overflow-hidden rounded-[35px] shadow-2xl group">

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent z-10"></div>

                    <img
                        src="/images/About us Intro.jpg.jpeg"
                        alt="Travel"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                    />

                    <div className="absolute bottom-5 left-5 z-20 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-lg">
                        <p className="text-sm font-semibold text-slate-800">
                            Trusted by Travelers Worldwide
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

            <section> <OurServices /></section>
            <section><HotelStay /></section>
            <section data-aos="fade-down-right"><PremiumSpecials /></section>

            <section data-aos="fade-left"><Testimonials /></section>
            <section data-aos="fade-down">
                <Faq />
            </section>
        </>
    )
}
