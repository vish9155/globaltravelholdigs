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
    img: "/images/New Folder/Australia image.jpg (1).jpeg",
    name:"Australia"
  },
  {
    img: "/images/New Folder/Mexico image.jpg (1).jpeg",
    name:"Mexico"
  },
  {
    img: "/images/New Folder/Japan image.jpg (1).jpeg",
    name:"Japan"
  },
  {
    img: "/images/New Folder/Germany image.jpg (1).jpeg",
    name:"Germany"
  },
  {
    img: "/images/New Folder/France image.jpg (1).jpeg",
    name:"France"
  },
  {
    img: "/images/New Folder/Brazil image.jpg (1).jpeg",
    name:"Brazil"
  },
  {
    img: "/images/New Folder/canada image.jpg (1).jpeg",
    name:"Canada"
  },
  {
    img: "/images/New Folder/United Kingdom.jpg.jpeg",
    name:"United Kingdom"
  },
  {
    img: "/images/New Folder/United Arab Emirates image.jpg (1).jpeg",
    name:"United Arab Emirates"
  }
];
    return (
        <>
      <section className='max-w-7xl mx-auto mt-10  '>
    {/* Header Section - Better Spacing & Subtext */}
    <div className='flex flex-col md:flex-row justify-between items-end mb-12 px-2'>
        <div className="space-y-2">
            <div className="flex items-center gap-2">
                <span className="h-[2px] w-8 bg-orange-600/80"></span>
                <span className='text-orange-600/80 font-bold tracking-[0.2em] uppercase text-xs'>Plan your next trip</span>
            </div>
            <h2 className='text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight'>
                Trending <span className="text-orange-600/80">Destinations</span>
            </h2>
        </div>
        <NavLink 
            className='hidden md:flex group items-center gap-2 bg-white border border-slate-200 px-6 py-3 rounded-full text-slate-700 font-semibold hover:bg-orange-600/80 hover:text-white hover:border-orange-600/80 transition-all duration-300 shadow-sm' 
            to='/flights'
        >
            Explore All <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
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
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            modules={[Pagination, Autoplay]}
            className="!pb-16"
        >
            {trendingDestination.map((item, id) => (
                <SwiperSlide key={id} className="group relative overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-slate-200/60 transition-all duration-500 hover:-translate-y-1">
                    
                    {/* Floating Badge (Price/Rating)
                    <div className="absolute top-5 right-5 z-20 backdrop-blur-md bg-white/20 border border-white/30 px-4 py-1.5 rounded-full text-white text-sm font-bold shadow-lg">
                        ⭐ 4.8
                    </div> */}

                    {/* Image Section */}
                    <div className="relative h-[400px]  w-full overflow-hidden">
                        <img
                            src={item.img}
                            alt={item.title}
                            className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                        />
                        {/* Multi-layer Gradient for better text contrast */}
                        {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent opacity-80" /> */}
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                    </div>
                    
                    {/* Content Section */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500">
                        <div className="flex flex-col gap-1">   
                            <span className="text-white text-lg font-bold uppercase tracking-widest">{item.name}</span>
                            <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{item.title}</h3>
                        </div>

                        {/* Animated revealing part */}
                        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-800 ease-in-out">
                            <div className="overflow-hidden">
                                {/* <p className="text-blue-600 text-sm mb-6 line-clamp-2 leading-relaxed">
                                    Experience the breathtaking beauty and culture of {item.title}. A perfect getaway for your soul.
                                </p> */}
                                <NavLink
                                    to="/"
                                    className="inline-flex items-center justify-center w-full bg-white text-slate-900 py-3.5 rounded-2xl font-bold text-sm hover:bg-orange-600/80 hover:text-white transition-all duration-300 shadow-lg"
                                >
                                    View Details
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>

        {/* Custom Pagination Container */}
        <div className="custom-pagination flex justify-center gap-2 mt-4"></div>
    </div>
</section>
        </>
    )
}
