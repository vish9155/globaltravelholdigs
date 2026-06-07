import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Pagination, Autoplay } from 'swiper/modules';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function TrendingDestination() {
  let trendingDestination = [
    { img: "/images/New Folder/Australia image.jpg (1).jpeg", name: "Australia" },
    { img: "/images/New Folder/Mexico image.jpg (1).jpeg", name: "Mexico" },
    { img: "/images/New Folder/Japan image.jpg (1).jpeg", name: "Japan" },
    { img: "/images/New Folder/Germany image.jpg (1).jpeg", name: "Germany" },
    { img: "/images/New Folder/France image.jpg (1).jpeg", name: "France" },
    { img: "/images/New Folder/Brazil image.jpg (1).jpeg", name: "Brazil" },
    { img: "/images/New Folder/canada image.jpg (1).jpeg", name: "Canada" },
    { img: "/images/New Folder/United Kingdom.jpg.jpeg", name: "United Kingdom" },
    { img: "/images/New Folder/United Arab Emirates image.jpg (1).jpeg", name: "United Arab Emirates" }
  ];

  return (
    <>
      <section className='max-w-7xl mx-auto mt-16 px-4 md:px-6'>
        <div className='flex flex-col md:flex-row justify-between items-end mb-12 gap-4'>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-8 bg-emerald-500"></span>
              <span className='text-emerald-600 font-black tracking-[0.2em] uppercase text-xs'>Plan your next trip</span>
            </div>
            <h2 className='text-3xl md:text-5xl font-black text-[#111111] tracking-tight uppercase'>
              Trending <span className="text-emerald-500">Destinations</span>
            </h2>
          </div>
          <NavLink 
            className='group flex items-center gap-2 bg-white border border-gray-200 px-6 py-3 rounded-full text-[#111111] font-bold text-sm uppercase tracking-wider hover:bg-[#111111] hover:text-white hover:border-[#111111] transition-all duration-300 shadow-sm' 
            to='/flights'
          >
            Explore All <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </NavLink>
        </div>

        <div className='relative group/container'>
          <Swiper
            slidesPerView={3}
            spaceBetween={24}
            loop={true}
            centeredSlides={false}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ 
              clickable: true, 
              dynamicBullets: true,
              el: '.custom-pagination' 
            }}
            breakpoints={{
              0: { slidesPerView: 1.2, spaceBetween: 16, centeredSlides: true },
              640: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            modules={[Pagination, Autoplay]}
            className="!pb-16"
          >
            {trendingDestination.map((item, id) => (
              <SwiperSlide key={id} className="group relative overflow-hidden rounded-[2.5rem] bg-white shadow-xl shadow-gray-200/50 transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                
                <div className="relative h-[400px] w-full overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 transition-opacity duration-300" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end z-10">
                  <div className="flex flex-col gap-0.5 mb-3"> 
                    <span className="text-emerald-400 text-[11px] font-black uppercase tracking-widest">{item.name}</span>
                    <h3 className="text-2xl font-black text-white leading-tight uppercase tracking-tight">{item.name}</h3>
                  </div>

                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                    <div className="overflow-hidden">
                      <NavLink
                        to={`/flights?search=${item.name}`}
                        className="inline-flex items-center justify-center w-full bg-white hover:bg-emerald-500 text-[#111111] hover:text-white py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-lg mt-2"
                      >
                        View Details
                      </NavLink>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-pagination flex justify-center gap-2 mt-4"></div>
        </div>
      </section>

      <style>{`
        .custom-pagination .swiper-pagination-bullet-active {
          background: #10b981 !important;
          width: 24px !important;
          border-radius: 4px !important;
        }
        .custom-pagination .swiper-pagination-bullet {
          background: #6b7280;
        }
      `}</style>
    </>
  )
}
