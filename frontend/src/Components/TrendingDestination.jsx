import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'


// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { NavLink } from 'react-router-dom';
import { ArrowRight, TrendingUp } from 'lucide-react';
export default function TrendingDestination() {
  let trendingDestination = [
  {
    img: "/images/Australia.jpg.jpeg"
  },
  {
    img: "/images/Mexico.jpg.jpeg"
  },
  {
    img: "/images/Japan.jpg.jpeg"
  },
  {
    img: "/images/Germany.jpg.jpeg"
  },
  {
    img: "/images/France.jpg.jpeg"
  },
  {
    img: "/images/Brazil.jpg.jpeg"
  },
  {
    img: "/images/Canada.jpg.jpeg"
  },
  {
    img: "/images/United Kingdom.jpg.jpeg"
  },
  {
    img: "/images/United Arab Emirates.jpg.jpeg"
  }
];
    return (
        <>
            <section className='max-w-6xl mx-auto px-3 py-10'>
                <div className='flex justify-between items-center'>
                    <h2 className='p-3 text-lg sm:text-xl md:text-3xl font-semibold flex gap-1 text-fuchsia-700'>Top Travel Destinations Worldwide <TrendingUp className='text-fuchsia-600' size={24} /></h2>
                    <NavLink className={'text-fuchsia-600 hover:underline-fuchsia-700 flex gap-1 '} to={'/flights'}>View All <ArrowRight size={18} /> </NavLink>
                </div>
                <div className='p-3'>

                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}

                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        breakpoints={{
                            0: { slidesPerView: 1, spaceBetween: 12 },
                            640: { slidesPerView: 2, spaceBetween: 16 },
                            768: { slidesPerView: 3, spaceBetween: 20 },

                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        {
                            trendingDestination.map((item, id) => (
                                <SwiperSlide className="relative overflow-hidden group rounded-lg border border-white/5 bg-white/5 backdrop-blur-md">

                               
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="h-full w-full  object-cover transition duration-500 group-hover:scale-110"
                                    />

                                 
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">

                                        <NavLink
                                            to="/"
                                            className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded-full flex items-center gap-2 transform translate-y-10 group-hover:translate-y-0 transition duration-300"
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
            </section>
        </>
    )
}
