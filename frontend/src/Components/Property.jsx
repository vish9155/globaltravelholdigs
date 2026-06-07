import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
// import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { NavLink } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Property() {

    const property = [
        {   
            img: "/images/hotels/Hotels.jpg.jpeg",
            title: "Hotels"
        },
        {
            img: "/images/hotels/Resorts.jpg.jpeg",
            title: "Resorts"
        },
        {
            img: "/images/hotels/Villas.jpg.jpeg",
            title: "Villas"
        },
        {
            img: "/images/hotels/Cottages.jpg.jpeg",
            title: "Cottages"
        },
        {
            img: "/images/hotels/Guest Houses.jpg.jpeg",
            title: "Guest Houses"
        },
        {
            img: "/images/hotels/Apartments.jpg.jpeg",
            title: "Apartments"
        },
        {
            img: "/images/hotels/Resort Villages.jpg.jpeg",
            title: "Resort Villages"
        },
    ]

    return (
        <section className="bg-gray-50 py-14">

            <div className="max-w-7xl mx-auto px-4">

                <div className="text-center mb-10">

                    <h2 className="text-3xl md:text-4xl font-bold text-green-700">
                        Browse by Property Type
                    </h2>

                    <p className="text-gray-600 mt-3 font-semibold text-lg max-w-2xl mx-auto">
                        Discover hotels, resorts, villas, cottages, and more for your perfect stay.
                    </p>

                </div>

                <Swiper
                    slidesPerView={4}
                    spaceBetween={24}
                    navigation={true}
                    // pagination={{ clickable: true }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 16,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 18,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 24,
                        },
                    }}
                    modules={[Navigation, Pagination, Autoplay]}
                    className="pb-12"
                >

                    {property.map((item, id) => (

                        <SwiperSlide key={id}>

                            <div className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition duration-500 bg-white">

                                <div className="overflow-hidden">

                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                                    />

                                </div>

                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-500"></div>

                                <div className="absolute bottom-0 left-0 w-full p-5 flex items-center justify-between">

                                    <div>

                                        <h3 className="text-xl font-semibold text-white">
                                            {item.title}
                                        </h3>

                                        <p className="text-sm text-gray-200 mt-1">
                                            Explore stays
                                        </p>

                                    </div>

                                    <NavLink
                                        to="#"
                                        className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center hover:bg-green-600 hover:text-white transition duration-300"
                                    >
                                        <ArrowRight size={20} />
                                    </NavLink>

                                </div>

                            </div>

                        </SwiperSlide>

                    ))}

                </Swiper>

            </div>

        </section>
    )
}