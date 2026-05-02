import React from 'react'
import { NavLink } from 'react-router-dom'
import Testimonials from './Testimonials'
import Faq from './Faq'
import OurServices from './OurServices'
import WhyChosseus from './WhyChosseus'
import ExperienceWithExpert from './ExperienceWithExpert'
import MissionVision from './OurMission'

export default function About() {
    return (
        <>
            <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">


                <img src="/images/banner/About us banner.jpg.jpeg" className='absolute inset-0 h-full w-full ' alt="" />



                <div className="relative z-10  h-full px-4 text-center">
                    <div className='flex items-center justify-center h-80 '>
                        <h1 className="text-white font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl max-w-4xl leading-snug">
                           About Global Travel Holdings LLC
                        </h1>
                    </div>

                </div>

            </section>
            <h2 className='text-xl sm:text-2xl md:text-3xl text-fuchsia-700 font-semibold text-center pt-10 py-3'>Your Trusted Travel Booking Platform for Flights & Hotels</h2>

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
                            <NavLink to={"/flights"} className={'p-3  px-8 text-white bg-yellow-600 rounded-full  '}>Search flights</NavLink>
                        </div>
                    </div>
                    <div className='order-2 md:order-2 relative group overflow-hidden rounded-xl bg-white/5 border-white/5 backdrop-blur-md'>
                        <img src="/images/About us Intro.jpg.jpeg" className='h-full w-full group-hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer' alt="" />
                    </div>
                </div>
            </section>

            <ExperienceWithExpert />
             <section className='max-w-7xl mx-auto px-3 py-14' data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='order-1 md:order-1'>
                        <h3 className='text-lg sm:text-xl font-semibold  text-center'>About Global Travel Holdings LLC</h3>
                        <div className='p-3'>
                            <p className='text-sm sm:text-base text-justify p-2'>Planning a trip should be exciting, not complicated. At Global Travel Holdings LLC, we make it easier to explore the world with confidence by offering a simple and reliable platform for all your travel needs.</p>
                            <p className='text-sm sm:text-base text-justify p-2'>From finding the right flights to booking comfortable stays and organizing complete travel experiences, our focus is on providing a smooth and stress-free journey from start to finish. We combine convenience, transparency, and dedicated support to ensure every traveler enjoys a seamless booking experience.</p>
                            <p className='text-sm sm:text-base text-justify p-2'>Whether you're traveling for business or leisure, we are here to help you plan smarter and travel better.</p>
                        </div>
                        <div className='mx-auto py-5 max-w-5xl text-center'>
                            <NavLink to={"/flights"} className={'p-3  px-8 text-white bg-yellow-600 rounded-full  '}>Search flights</NavLink>
                        </div>
                    </div>
                    <div className='order-2 md:order-2 relative group overflow-hidden rounded-xl bg-white/5 border-white/5 backdrop-blur-md'>
                        <img src="/images/about us intro global traval.jpg.jpeg" className='h-full w-full group-hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer' alt="" />
                    </div>
                </div>
            </section>
            <MissionVision />

            <OurServices />
            <Testimonials />
            <WhyChosseus />
            <Faq />


        </>
    )
}
