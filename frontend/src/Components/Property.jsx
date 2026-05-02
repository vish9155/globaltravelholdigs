import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// import required modules

import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
export default function Property() {
    let property = [
        {
            img: "/images/hotels/Hotels.jpg.jpeg",
            title: "Hotels"
        },
        {
            img: "/images/hotels/Resorts.jpg.jpeg",
            title: "Resort"
        },
        {
            img: "/images/hotels/Villas.jpg.jpeg",
            title:"Villas"

        },
        {
            img: "/images/hotels/Cottages.jpg.jpeg",
            title: "Cottage"
        },
        {
            img: "/images/hotels/Guest Houses.jpg.jpeg",
            title: "Guest House"
        },
        {
            img: "/images/hotels/Apartments.jpg.jpeg",
            title:"Appartments"

        },
        {
            img: "/images/hotels/Resort Villages.jpg.jpeg",
            title: "Resort Villages"
        },
       
    ];
    return (
        <>
            <section className=' backdrop-blur-md'>
                <div className='max-w-7xl mx-auto px-3 py-10 '>
                    <h2 className='p-3 text-lg sm:text-xl md:text-2xl'>Browse by property type</h2>
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
                                property.map((item, id) => (
                                    <SwiperSlide key={id} className="relative overflow-hidden group rounded border">

                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="h-[280px] w-[290px] object-cover transition duration-500 group-hover:scale-110 brightness-75 border"
                                        />
                                        <h2 className='absolute bottom-2 left-2 text-base text-white font-semibold'>{item.title}</h2>
                                        <NavLink
                                            to="#"
                                            className="absolute bottom-2 right-0 px-3 py-2  bg-yellow-500 text-black  rounded-full flex items-center gap-1 transform  text-xs"
                                        >

                                            <ArrowRight size={20} />
                                        </NavLink>
                                 
                                       

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
