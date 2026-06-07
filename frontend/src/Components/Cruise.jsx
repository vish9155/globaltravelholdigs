import { CalendarDays, Home, MapPin, Ship } from 'lucide-react'
import React from 'react'
import PopularCruiseLine from './PopularCruiseLine'
import Testimonials from './Testimonials'
import CruiseDestination from './CruiseDestination'
import { NavLink } from 'react-router-dom'
import { motion } from "framer-motion";

export default function Cruise() {
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <section className='w-full relative h-[70vh] md:h-[85vh] overflow-hidden'>

        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          src="/images/banner/Cruise Banner.jpg.jpeg"
          className='w-full h-full object-cover brightness-[0.65]'
          alt=""
        />

        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20'></div>

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='absolute top-24 md:top-28 left-1/2 -translate-x-1/2 text-center z-20 px-4'
        >
          <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-2xl'>
            Luxury Cruise Booking
          </h1>

          <p className='text-white/90 text-sm sm:text-lg max-w-3xl mx-auto pt-4 leading-relaxed'>
            Explore breathtaking cruise vacations with premium comfort,
            world-class experiences, and unforgettable ocean journeys.
          </p>
        </motion.div>

        <div className='absolute bottom-6 sm:bottom-10  w-full px-3 sm:px-4 z-30'>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className='max-w-7xl mx-auto p-4 sm:p-6 md:p-8 backdrop-blur-xl bg-white/90 rounded-2xl shadow-[0_20px_80px_rgba(0,0,0,0.25)] border border-white/20'
          >

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4'>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                className='group'
              >
                <div className='flex border border-gray-200 bg-white hover:border-green-400 hover:shadow-lg transition-all duration-300 p-2.5 sm:p-3 rounded-xl gap-3 sm:gap-4 items-center'>
                  <MapPin size={18} className='text-green-500' />
                  <input
                    type="text"
                    placeholder='Departure Port'
                    name='from'
                    className='outline-0 w-full text-sm sm:text-base bg-transparent'
                  />
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
                className='group'
              >
                <div className='flex border border-gray-200 bg-white hover:border-green-400 hover:shadow-lg transition-all duration-300 p-2.5 sm:p-3 rounded-xl gap-3 sm:gap-4 items-center'>
                  <MapPin size={18} className='text-green-500' />
                  <input
                    type="text"
                    placeholder='Destination Port'
                    name='to'
                    className='outline-0 w-full text-sm sm:text-base bg-transparent'
                  />
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={3}
                className='group'
              >
                <div className='flex border border-gray-200 bg-white hover:border-green-400 hover:shadow-lg transition-all duration-300 p-2.5 sm:p-3 rounded-xl gap-3 sm:gap-4 items-center'>
                  <CalendarDays size={18} className='text-green-500' />
                  <input
                    type="month"
                    name='date'
                    className='outline-0 w-full text-sm sm:text-base bg-transparent'
                  />
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={4}
                className='group'
              >
                <div className='flex border border-gray-200 bg-white hover:border-green-400 hover:shadow-lg transition-all duration-300 p-2.5 sm:p-3 rounded-xl gap-3 sm:gap-4 items-center'>
                  <Home size={18} className='text-green-500' />
                  <select
                    name='date'
                    className='outline-0 w-full text-sm sm:text-base bg-transparent'
                  >
                    <option value="select length">Select Length</option>
                    <option value="3-5 Nights">3-5 Nights</option>
                    <option value="6-9 Nights">6-9 Nights</option>
                    <option value="10-14 Nights">10-14 Nights</option>
                    <option value="15+ Nights">15+ Nights</option>
                  </select>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={5}
                className='group'
              >
                <div className='flex border border-gray-200 bg-white hover:border-green-400 hover:shadow-lg transition-all duration-300 p-2.5 sm:p-3 rounded-xl gap-3 sm:gap-4 items-center'>
                  <Ship size={18} className='text-green-500' />
                  <input
                    type="text"
                    placeholder='All Cruise Line'
                    name='cruise'
                    className='outline-0 w-full text-sm sm:text-base bg-transparent'
                  />
                </div>
              </motion.div>

            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className='mx-auto text-center pt-5'
            >
              <button className='w-full sm:w-auto p-3 px-8 rounded-xl bg-gradient-to-r from-green-500 to-gray-500 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer text-sm sm:text-base font-semibold text-white'>
                Search
              </button>
            </motion.div>

          </motion.div>
        </div>
      </section>


      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className='max-w-6xl mx-auto px-3 py-14'
      >
        <h1 className='text-xl sm:text-2xl md:text-4xl pt-5 py-4 font-bold text-green-700 text-center'>
          Book Cruise Online for Luxury & Relaxing Travel Experiences
        </h1>

        <p className='p-2 sm:p-3 md:p-4 max-w-5xl text-base md:text-lg text-gray-600 mx-auto text-center leading-relaxed'>
          Experience travel like never before with our <b>cruise booking online</b> platform. At Global Travel Holdings LLC, we help you explore the world through comfortable and well-planned cruise journeys. Whether you're looking for a relaxing getaway or a luxury vacation, we make it easy to find and book the perfect cruise.
        </p>
      </motion.div>


      <section className='grid grid-cols-1 md:grid-cols-3 gap-6 gap-y-10 max-w-7xl mx-auto px-3 py-5'>

        {[
          {
            title: "Discover Cruise Vacations Worldwide",
            desc: "Explore a variety of cruise vacations worldwide, from tropical island escapes to scenic ocean journeys. Choose from multiple routes, durations, and cruise types that suit your travel preferences."
          },
          {
            title: "Book Cruise Deals at the Best Prices",
            desc: "Find exclusive book cruise deals and enjoy value-packed travel experiences. Our platform helps you compare options and choose from affordable cruise deals without compromising on comfort or quality."
          },
          {
            title: "Luxury Cruise Packages for Premium Travel",
            desc: "Indulge in premium travel with our luxury cruise packages designed for comfort, entertainment, and unforgettable experiences."
          },
          {
            title: "Easy & Secure Cruise Booking Process",
            desc: "Our system ensures a smooth and secure booking experience. With simple steps and instant confirmations, you can complete your cruise reservation quickly and confidently."
          },
          {
            title: "Start Your Cruise Journey Today",
            desc: "Plan your next cruise with Global Travel Holdings LLC and enjoy a seamless booking experience."
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            whileHover={{ y: -10 }}
            className='rounded-3xl bg-white border  border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-500 p-6 '
          >
            <h2 className='text-xl sm:text-2xl  md:text-2xl font-semibold text-gray-800'>
              {item.title}
            </h2>

            <p className='py-4 text-base text-gray-600 leading-relaxed'>
              {item.desc}
            </p>
          </motion.div>
        ))}

      </section>


      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='py-10 mx-auto px-3 text-center'
      >
        <NavLink
          to="tel:+1 8888434146"
          className="w-full sm:w-auto p-3 px-8 rounded-xl bg-gradient-to-r from-green-500 to-gray-500 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer text-sm sm:text-base font-semibold text-white"
        >
          Book Now ?
        </NavLink>
      </motion.div>


      <PopularCruiseLine />
      <Testimonials />

    
      <section className='relative overflow-hidden py-16 bg-gradient-to-br from-green-50 via-white to-gray-100'>


        <div className='absolute top-0 left-0 w-72 h-72 bg-green-200 opacity-20 blur-3xl rounded-full'></div>

        <div className='absolute bottom-0 right-0 w-72 h-72 bg-gray-300 opacity-20 blur-3xl rounded-full'></div>

        <div className='max-w-7xl mx-auto px-3'>


          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='text-center pb-12'
          >

            <h2 className='text-3xl md:text-5xl font-bold bg-gradient-to-r from-green-700 via-emerald-600 to-gray-700 bg-clip-text text-transparent'>
              Why Travelers Love Our Cruise Services
            </h2>

            <p className='text-gray-500 max-w-3xl mx-auto pt-5 leading-relaxed text-sm md:text-base'>
              Explore luxury cruise experiences with trusted booking,
              premium destinations, and smooth travel planning designed
              for unforgettable vacations.
            </p>

          </motion.div>


          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>


            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              whileHover={{ y: -10 }}
              className='relative bg-white/80 backdrop-blur-xl border border-white/30 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_70px_rgba(0,0,0,0.15)] transition-all duration-500 p-8 overflow-hidden'
            >


              <div className='absolute -top-20 -right-20 w-52 h-52 bg-green-100 rounded-full blur-3xl opacity-40'></div>

              <h2 className='relative text-2xl md:text-3xl font-bold text-gray-800 pb-6 leading-snug'>
                Why Choose Global Travel Holdings LLC for Cruise Booking
              </h2>

              <ul className='relative space-y-5 text-gray-600 leading-relaxed'>

                <li className='bg-gray-50 hover:bg-green-50 transition-all duration-300 rounded-2xl px-5 py-4 border border-transparent hover:border-green-100'>
                  Wide selection of cruise options worldwide
                </li>

                <li className='bg-gray-50 hover:bg-green-50 transition-all duration-300 rounded-2xl px-5 py-4 border border-transparent hover:border-green-100'>
                  Competitive pricing and exclusive deals
                </li>

                <li className='bg-gray-50 hover:bg-green-50 transition-all duration-300 rounded-2xl px-5 py-4 border border-transparent hover:border-green-100'>
                  Easy comparison of cruise packages
                </li>

                <li className='bg-gray-50 hover:bg-green-50 transition-all duration-300 rounded-2xl px-5 py-4 border border-transparent hover:border-green-100'>
                  Secure and reliable booking system
                </li>

                <li className='bg-gray-50 hover:bg-green-50 transition-all duration-300 rounded-2xl px-5 py-4 border border-transparent hover:border-green-100'>
                  Dedicated customer support
                </li>

              </ul>

            </motion.div>


            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              whileHover={{ y: -10 }}
              className='relative bg-white/80 backdrop-blur-xl border border-white/30 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_70px_rgba(0,0,0,0.15)] transition-all duration-500 p-8 overflow-hidden'
            >


              <div className='absolute -bottom-20 -left-20 w-52 h-52 bg-gray-200 rounded-full blur-3xl opacity-40'></div>

              <h2 className='relative text-2xl md:text-3xl font-bold text-gray-800 pb-6 leading-snug'>
                Tips to Choose the Right Cruise
              </h2>

              <ul className='relative space-y-5 text-gray-600 leading-relaxed'>

                <li className='bg-gray-50 hover:bg-green-50 transition-all duration-300 rounded-2xl px-5 py-4 border border-transparent hover:border-green-100'>
                  Select destinations based on your travel interests
                </li>

                <li className='bg-gray-50 hover:bg-green-50 transition-all duration-300 rounded-2xl px-5 py-4 border border-transparent hover:border-green-100'>
                  Compare cruise duration and onboard facilities
                </li>

                <li className='bg-gray-50 hover:bg-green-50 transition-all duration-300 rounded-2xl px-5 py-4 border border-transparent hover:border-green-100'>
                  Book early for better availability and pricing
                </li>

                <li className='bg-gray-50 hover:bg-green-50 transition-all duration-300 rounded-2xl px-5 py-4 border border-transparent hover:border-green-100'>
                  Check inclusions like meals and entertainment
                </li>

                <li className='bg-gray-50 hover:bg-green-50 transition-all duration-300 rounded-2xl px-5 py-4 border border-transparent hover:border-green-100'>
                  Choose the right cabin type for comfort
                </li>

              </ul>

            </motion.div>

          </div>


          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className='text-center pt-14'
          >

            <button className='px-10 py-4 rounded-full bg-gradient-to-r from-green-700 via-emerald-600 to-gray-700 text-white font-semibold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300'>
              Explore Luxury Cruise Packages
            </button>

          </motion.div>

        </div>

      </section>


      <CruiseDestination/>

    </>
  )
}