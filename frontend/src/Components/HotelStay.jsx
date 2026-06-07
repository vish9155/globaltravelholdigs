import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';


import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


import { NavLink } from 'react-router-dom';
import { ArrowRight, HotelIcon } from 'lucide-react';
export default function HotelStay() {
    let trendingDestination = [
        {
            img: "/images/New Folder/Hotels/Hotel South Beach.jpg.jpeg",
            title: "1 Hotel South Beach"
        },
        {
            img: "/images/New Folder/Hotels/Acqualina Resort & Residences.jpg.jpeg",
            title: "Acqualina Resort & Residences"
        },
        {
            img: "/images/New Folder/Hotels/Baccarat Hotel.jpg.jpeg",
            title: "Baccarat Hotel"

        },
        {
            img: "/images/New Folder/Hotels/Amangiri hotel.jpg.jpeg",
            title: "Amangiri hotel"
        },
        {
            img: "/images/New Folder/Hotels/Nobu Hotel Chicago.jpg.jpeg",
            title: "Nobu Hotel Chicago"
        },
        {
            img: "/images/New Folder/Hotels/The Beverly Hills Hotel.jpg.jpeg",
            title: "The Beverly Hills Hotel"

        },
        {
            img: "/images/New Folder/Hotels/The Venetian Resort.jpg.jpeg",
            title: "The Venetian Resort"
        },
        {
            img: "/images/New Folder/Hotels/LondonHouse Chicago.jpg.jpeg",
            title: "LondonHouse Chicago"
        },
        {
            img: "/images/New Folder/Hotels/The Plaza Hotel.jpg.jpeg",
            title: "The Plaza Hotel"
        }
    ];
    return (
        <>
            <section className='bg-white py-16'>
                <div className='max-w-7xl mx-auto px-6'>

                    <motion.div 
                    initial={{opacity:0,y:80}}
                    transition={{duration:0.8}}
                     whileInView={{ opacity: 1, y: 0 }}

                    className='mb-12 border-l-4 border-green-500 pl-6'>
                        <h2 className='text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3'>
                            <HotelIcon size={40} className='text-green-600 bg-gray-400/20 rounded-2xl' />
                            Luxury <span className="text-green-500">Hotel</span> Stays
                        </h2>
                        <p className='text-gray-500 text-lg mt-3 max-w-2xl leading-relaxed'>
                            Handpicked premium accommodations worldwide, offering comfort, elegance, and unforgettable travel experiences.
                        </p>
                    </motion.div>

                    <div className='bg-gray-50/50 p-6 rounded-[2rem] border border-gray-100'>
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={24}
                            navigation={true}
                            autoplay={{ delay: 3500, disableOnInteraction: false }}
                            breakpoints={{
                                0: { slidesPerView: 1.2, spaceBetween: 16 },
                                640: { slidesPerView: 2.2, spaceBetween: 20 },
                                768: { slidesPerView: 3, spaceBetween: 24 },
                                1024: { slidesPerView: 4, spaceBetween: 30 },
                            }}
                            modules={[Navigation, Autoplay]}
                            className="mySwiper"
                        >
                            {trendingDestination.map((item, id) => (
                                <SwiperSlide
                                    key={id}
                                    className="relative overflow-hidden group rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 bg-white"
                                >
                                    <div className="relative h-[420px] w-full overflow-hidden">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                                        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                                            <h3 className='text-xl text-white font-bold mb-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300'>
                                                {item.title}
                                            </h3>

                                            <NavLink
                                                to="/"
                                                className="inline-flex items-center gap-2 bg-gray-800 hover:bg-green-500  text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 transform scale-90 group-hover:scale-100 origin-left"
                                            >
                                                Explore More
                                                <ArrowRight size={18} />
                                            </NavLink>
                                        </div>

                                        <div className="absolute top-4 left-4 bg-green-600 backdrop-blur-md text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-white/30">
                                            Luxury Stay
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}
