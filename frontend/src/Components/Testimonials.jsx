import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination, Autoplay } from 'swiper/modules'
import { Quote } from 'lucide-react'
import { clientReviews } from '../data/testimonials'

export default function Testimonials() {

  let [tabs, setTabs] = useState([
    { title: "Flights", val: "flights" },
    { title: "Hotels", val: "hotels" },
    { title: "Cruise", val: "cruise" },
    { title: "Packages", val: "packages" },
    { title: "Cars", val: "cars" }
  ])

  let [selected, setSelected] = useState("flights")
  let filterdData = clientReviews[selected] || []

  return (
    <section className='relative py-20 overflow-hidden bg-[#111111] border-t border-gray-900'>

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_-20%,rgba(16,185,129,0.08),transparent_50%)]"></div>

      <div className='text-center mb-12 px-4'>
        <h2 className='text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight'>
          Why Customers Love <span className="text-emerald-500">Global Travel</span>
        </h2>

        <div className='max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-8 bg-white/5 backdrop-blur-md p-6 rounded-[2rem] border border-white/5 shadow-xl'>
          {[
            { num: "140+", label: "Years Legacy" },
            { num: "4000+", label: "Tours" },
            { num: "1M+", label: "Happy Travelers" },
            { num: "50+", label: "Awards" }
          ].map((item, i) => (
            <div key={i} className="text-white space-y-1">
              <h3 className="text-2xl md:text-3xl font-black text-emerald-500 tracking-tight">{item.num}</h3>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-center flex-wrap gap-2.5 mb-12 px-4'>
        {tabs.map((item, id) => (
          <button
            key={id}
            onClick={() => setSelected(item.val)}
            className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 cursor-pointer
              ${item.val === selected
                ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20 scale-105"
                : "bg-white/5 text-gray-400 border border-white/5 hover:bg-white/10 hover:text-white"
              }`}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className='max-w-7xl mx-auto px-6'>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          grabCursor={true}
          pagination={{ 
            clickable: true,
            dynamicBullets: true,
            el: '.testimonial-pagination'
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          modules={[Autoplay, Pagination]}
          className="!pb-16"
        >
          {filterdData.map((item, id) => (
            <SwiperSlide key={id}>
              <div className="group relative p-[1px] rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent hover:from-emerald-500/40 transition-all duration-500 h-full">
                
                <div className="bg-[#161616] rounded-[2rem] p-8 h-full text-white shadow-2xl relative overflow-hidden flex flex-col justify-between border border-white/5">
                  
                  <div>
                    <Quote size={28} className="text-emerald-500 mb-4 scale-x-[-1]" />

                    <p className='text-sm text-gray-300 font-medium leading-relaxed line-clamp-5'>
                      "{item.message}"
                    </p>
                  </div>

                  <div className='flex items-center gap-4 mt-8 pt-4 border-t border-white/5'>
                    <img
                      src={item.image}
                      className='w-11 h-11 rounded-full object-cover border-2 border-emerald-500 shadow-md'
                      alt={item.name}
                    />

                    <div>
                      <h3 className='font-black text-xs uppercase tracking-wider text-white'>{item.name}</h3>
                      <p className='text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-0.5'>{item.date}</p>
                    </div>
                  </div>

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="testimonial-pagination flex justify-center gap-2 mt-2"></div>
      </div>

      <style>{`
        .testimonial-pagination .swiper-pagination-bullet-active {
          background: #10b981 !important;
          width: 24px !important;
          border-radius: 4px !important;
        }
        .testimonial-pagination .swiper-pagination-bullet {
          background: #4b5563;
        }
      `}</style>
    </section>
  )
}