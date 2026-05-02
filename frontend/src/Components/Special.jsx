import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination'
import { Autoplay, Pagination } from "swiper/modules";
import { NavLink } from "react-router-dom";

export default function PremiumSpecials() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 py-14">
      
      <h2 className="text-xl sm:text-2xl md:text-3xl text-fuchsia-700 text-center font-semibold py-6">
        Global Travel Specials – Best Deals on Flights, Hotels & Holiday Packages
      </h2>
      <p className="py-3 max-w-3xl mx-auto text-center text-base ">Discover handpicked travel deals designed for every kind of journey. From spiritual destinations across India to international getaways, explore seamless options for flights, hotels, car rentals, and complete holiday packages—all in one place.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">

        <div className="relative rounded-2xl overflow-hidden group border">
          <img src="/images/Explore divine destinations in India.jpg.jpeg"
           
            className="h-full w-full  group-hover:scale-110 transition duration-500"
          />
           <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>

          <div className="absolute inset-0 p-4 flex flex-col justify-between text-white  bg-white/10">
            <div>
              <h3 className="font-semibold text-lg text-shadow-black text-shadow-2xs">
               Spiritual Tours in India
              </h3>
              <p className="text-sm opacity-90  text-shadow-black text-shadow-2xs">
                Explore sacred destinations like Varanasi, Kedarnath, and Tirupati with customized travel packages designed for a peaceful and meaningful journey.
              </p>
            </div>

            <NavLink to="/packages" className="bg-white/20 backdrop-blur px-4 py-1 rounded-full text-sm hover:bg-yellow-400 hover:text-black transition">
              View More →
            </NavLink>
          </div>
        </div>

  
        <div className="relative col-span-1 md:col-span-2 rounded-2xl overflow-hidden">
          <Swiper
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            className="mySwiper1 h-full"
          >
            {[
              "/images/Universal Studios 828x300.jpg.jpeg",
              "/images/Singapore 828x300.jpg.jpeg",
            ].map((img, i) => (
              <SwiperSlide key={i}>
                <div className="relative h-full group border">
                  <img
                    src={img}
                    className="h-full w-full border-red-600 object-cover group-hover:scale-105 transition duration-500"
                  />

                  Gradient Overlay
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>

                  <div className="absolute inset-0 p-6 flex flex-col justify-center text-white">
                    <h3 className="text-xl md:text-2xl font-bold">
                      Your Singapore Adventure Awaits
                    </h3>
                    <p className="text-sm mt-2">
                      From Marina Bay to Universal Studios
                    </p>

                    <button className="mt-4 w-fit bg-white text-black px-4 py-2 rounded-full hover:bg-yellow-400 transition transform hover:scale-105">
                      View More →
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="relative col-span-1 md:col-span-2 rounded-2xl overflow-hidden border group">
          <img
            src= "/images/Tour Packages 828x300.jpg.jpeg"            className="h-full w-full  object-cover group-hover:scale-110 transition duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
          <div className="absolute inset-0 p-4 flex flex-col justify-between text-white  bg-white/10">
            <div>
              <h3 className="text-xl font-semibold text-shadow-black text-shadow-2xs">
              Holiday Packages
              </h3>
              <p className="py-3 text-sm  text-shadow-black text-shadow-2xs font-semibold">Choose from customized holiday packages for families, couples, and solo travelers with complete travel planning.</p>
              
            </div>

            <NavLink to={'/packages'} className="bg-white/20 px-4 py-1 rounded-full hover:bg-yellow-400 hover:text-black transition">
              View More →
            </NavLink>
          </div>
        </div>

       
        {[
          {
            title: "Build Your Own Itinerary",
            img: "/images/Build Your Own Itinerary.jpg.jpeg",
            path:"/contact-us"
          },
          {
            title: "Hotel Booking Deals",
            img: "/images/Hotel.jpg.jpeg",
            path:"/hotels",
            "desc":"Book budget to luxury hotels worldwide with best price assurance and comfortable stays."
          },
          {
            title: "Flight Deals (Domestic & International)",
            img: "/images/flight.jpg.jpeg",
            path:"/flights",
            desc:"Find affordable flight tickets with flexible options and exclusive deals for both domestic and international travel"
          },
          {
            title: "Car Rentals & Transfers",
            img: "/images/car.jpg.jpeg",
            path:"/cars",
            desc:"Enjoy hassle-free travel with reliable car rental services and airport transfers at your destination."
          },
          
        ].map((item, i) => (
          <div key={i} className="relative rounded-2xl overflow-hidden group">
            <img
              src={item.img}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
 <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>

            <NavLink to={item.path} className="absolute inset-0 p-4 flex items-start justify-between flex-1 flex-col text-white  bg-white/10">
              <h3 className="text-sm text-white font-semibold text-shadow-black text-shadow-2xs">
                {item.title}
              </h3>
               <p className="py-3 text-lg  text-shadow-black text-shadow-2xs font-semibold">{item.desc}</p>
              
            </NavLink>
          </div>
        ))}

      </div>
    </section>
  );
}