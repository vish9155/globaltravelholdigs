import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// import required modules

import { NavLink } from 'react-router-dom';
import { ArrowRight, HotelIcon } from 'lucide-react';
export default function HotelStay() {
    let trendingDestination = [
        {
            img: "/images/1 Hotel South Beach.jpg.jpeg",
            title: "1 Hotel South Beach"
        },
        {
            img: "/images/Acqualina Resort & Residences 828x300.jpg.jpeg",
            title: "Acqualina Resort & Residences"
        },
        {
            img: "/images/Baccarat Hotel New York.jpg.jpeg",
            title:"Baccarat Hotel"

        },
        {
            img: "/images/Amangiri hotel.jpg.jpeg",
            title: "Amangiri hotel"
        },
        {
            img: "/images/Nobu Hotel Chicago.jpg.jpeg",
            title: "Nobu Hotel Chicago"
        },
        {
            img: "/images/The Beverly Hills Hotel.jpg.jpeg",
            title:"The Beverly Hills Hotel"

        },
        {
            img: "/images/The Venetian Resort.jpg.jpeg",
            title: "The Venetian Resort"
        },
        {
            img: "/images/LondonHouse Chicago.jpg.jpeg",
            title: "LondonHouse Chicago"
        },
        {
            img: "/images/The Plaza Hotel.jpg.jpeg",
            title:"The Plaza Hotel"
        }
    ];
    return (
        <>
            <section className=' bg-gray-800/5 backdrop-blur-md shadow-xl shadow-white rounded-2xl max-w-7xl mx-auto px-3 '>
                <div className='max-w-6xl mx-auto px-3 py-10 '>
                   <div className='max-w-7xl mx-auto px-4 mb-10'>
        <h2 className='text-3xl md:text-4xl font-bold text-fuchsia-700 flex gap-2'>
          <HotelIcon size={33} className='mt-1'/> Luxury Hotel Stays & Premium Accommodation Worldwide
        </h2>
        <p className='text-gray-900 text-base  mt-4'>
          Handpicked luxury hotels and premium stays across top destinations, offering comfort, elegance, and unforgettable travel experiences.
        </p>
      </div>
                    <div className='p-3'>

                        <Swiper
                            slidesPerView={4}
                            spaceBetween={30}
                            navigation={true}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 2500, disableOnInteraction: false }}
                            breakpoints={{
                                0: { slidesPerView: 1, spaceBetween: 12 },
                                640: { slidesPerView: 2, spaceBetween: 16 },
                                768: { slidesPerView: 3, spaceBetween: 20 },
                                1080: { slidesPerView: 4, spaceBetween: 24 },
                            }}
                            modules={[Navigation, Pagination, Autoplay]}
                            className="mySwiper"
                        >
                            {
                                trendingDestination.map((item, id) => (
                                    <SwiperSlide key={id} className="relative overflow-hidden group rounded border">

                                        {/* Image */}
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="h-full w-full object-cover transition duration-500 group-hover:scale-110 brightness-75"
                                        />
                                        <h2 className='absolute bottom-2 left-2 text-base text-white font-semibold'>{item.title}</h2>
                                        <NavLink
                                            to="/"
                                            className="absolute bottom-2 right-0 px-3 py-2  bg-yellow-500 text-black  rounded-full flex items-center gap-1 transform  text-xs"
                                        >

                                            <ArrowRight size={20} />
                                        </NavLink>
                                        {/* Overlay (hidden by default) */}
                                        <div className="absolute    bottom-2 right-0  opacity-0 group-hover:opacity-100 transition duration-300  ">

                                            <NavLink
                                                to="/"
                                                className=" px-3 py-2 bg-yellow-500 text-black  rounded-full flex items-center gap-1 transform translate-x-0 group-hover:translate-x-0 transition duration-300 text-xs"
                                            >
                                                Explore More
                                                <ArrowRight size={20} />
                                            </NavLink>

                                        </div>

                                    </SwiperSlide>
                                ))
                            }


                        </Swiper>

                    </div>
                </div>
            </section>
        </>
    )
}
