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
    <section className='relative py-16 overflow-hidden bg-gradient-to-br from-[#2b003f] via-[#3a005a] to-[#1a002b]'>


      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_30%,#ff00cc20,transparent_40%),radial-gradient(circle_at_80%_70%,#00ffe520,transparent_40%)]"></div>

      <div className='flex justify-center flex-wrap gap-3 mb-10'>
        {tabs.map((item, id) => (
          <button
            key={id}
            onClick={() => setSelected(item.val)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300
              ${item.val === selected
                ? "bg-gradient-to-r from-pink-500 to-orange-400 text-white shadow-lg scale-105"
                : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className='text-center mb-10'>
        <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
          Why Customers Love Global Travel
        </h2>

        <div className='max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-6'>
          {[
            { num: "140+", label: "Years Legacy" },
            { num: "4000+", label: "Tours" },
            { num: "1M+", label: "Happy Travelers" },
            { num: "50+", label: "Awards" }
          ].map((item, i) => (
            <div key={i} className="text-white">
              <h3 className="text-2xl font-bold text-yellow-400">{item.num}</h3>
              <p className="text-xs text-gray-300">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4'>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          grabCursor={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 12 },
            640: { slidesPerView: 2, spaceBetween: 16 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          modules={[Autoplay, Pagination]}
        >

          {filterdData.map((item, id) => (
            <SwiperSlide key={id}>

              <div className="group relative p-[1px] rounded-2xl bg-gradient-to-br via-purple-400 to-purple-800 hover:scale-105 transition duration-500">

         
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 h-full text-white shadow-xl relative overflow-hidden">

                
                  <Quote size={28} className="text-yellow-400 mb-3 scale-x-[-1]" />

               
                  <p className='text-sm text-gray-200 leading-relaxed line-clamp-5'>
                    {item.message}
                  </p>

                  <div className='flex items-center gap-3 mt-6'>
                    <img
                      src={item.image}
                      className='w-12 h-12 rounded-full object-cover border-2 border-yellow-400'
                      alt=""
                    />

                    <div>
                      <h3 className='font-semibold text-sm'>{item.name}</h3>
                      <p className='text-xs text-gray-800'>{item.date}</p>
                    </div>
                  </div>

                 
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-yellow-400/10 via-pink-500/10 to-purple-500/10"></div>

                </div>
              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </section>
  )
}