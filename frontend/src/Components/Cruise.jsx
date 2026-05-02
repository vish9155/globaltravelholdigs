import { CalendarDays, Home, MapPin, Ship } from 'lucide-react'
import React from 'react'
import PopularCruiseLine from './PopularCruiseLine'
import Testimonials from './Testimonials'
import CruiseDestination from './CruiseDestination'
import { NavLink } from 'react-router-dom'

export default function Cruise() {
  return (
    <>
      <section className='w-full relative h-[70vh] md:h-[85vh]'>


        <img
          src="/images/banner/Cruise Banner.jpg.jpeg"
          className='w-full h-full '
          alt=""
        />


        <div className='absolute bottom-6 sm:bottom-10 md:-bottom-5 w-full px-3 sm:px-4'>

          <div className='max-w-7xl mx-auto p-4 sm:p-6 md:p-8 opacity-90 bg-white rounded-xl sm:rounded-2xl shadow-2xl shadow-amber-100'>


            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4'>

              <div className='group'>
                <div className='flex border p-2.5 sm:p-3 rounded-lg gap-3 sm:gap-4 items-center'>
                  <MapPin size={18} />
                  <input
                    type="text"
                    placeholder='Departure Port'
                    name='from'
                    className='outline-0 w-full text-sm sm:text-base'
                  />
                </div>
              </div>


              <div className='group'>
                <div className='flex border p-2.5 sm:p-3 rounded-lg gap-3 sm:gap-4 items-center'>
                  <MapPin size={18} />
                  <input
                    type="text"
                    placeholder='Destination Port'
                    name='to'
                    className='outline-0 w-full text-sm sm:text-base'
                  />
                </div>
              </div>

              <div className='group'>
                <div className='flex border p-2.5 sm:p-3 rounded-lg gap-3 sm:gap-4 items-center'>
                  <CalendarDays size={18} />
                  <input
                    type="month"
                    name='date'
                    className='outline-0 w-full text-sm sm:text-base'
                  />
                </div>
              </div>


              <div className='group'>
                <div className='flex border p-2.5 sm:p-3 rounded-lg gap-3 sm:gap-4 items-center'>
                  <Home size={18} />
                  <select
                    name='date'
                    className='outline-0 w-full text-sm sm:text-base'
                  >
                    <option value="select length">Select Length</option>
                    <option value="3-5 Nights">3-5 Nights</option>
                    <option value="6-9 Nights">6-9 Nights</option>
                    <option value="10-14 Nights">10-14 Nights</option>
                    <option value="15+ Nights">15+ Nights</option>
                  </select>
                </div>
              </div>


              <div className='group'>
                <div className='flex border p-2.5 sm:p-3 rounded-lg gap-3 sm:gap-4 items-center'>
                  <Ship size={18} />
                  <input
                    type="text"
                    placeholder='All Cruise Line'
                    name='cruise'
                    className='outline-0 w-full text-sm sm:text-base'
                  />
                </div>
              </div>

            </div>


            <div className='mx-auto text-center pt-4 sm:pt-5'>
              <button className='w-full sm:w-auto p-2.5 sm:p-3 px-6 sm:px-8 rounded-lg bg-amber-500 hover:bg-amber-600 transition cursor-pointer text-sm sm:text-base'>
                Search
              </button>
            </div>

          </div>
        </div>

      </section>

<div className='max-w-6xl mx-auto px-3 py-10'>
  <h1 className='text-xl sm:text-2xl md:text-3xl pt-5 py-4 font-semibold leading-3 text-fuchsia-700 text-center'>Book Cruise Online for Luxury & Relaxing Travel Experiences</h1>
  <p className='p-2 sm:p-3 md:p-4 max-w-5xl text-base text-gray-600 mx-auto text-center'>
Experience travel like never before with our <b>cruise booking online</b> platform. At Global Travel Holdings LLC, we help you explore the world through comfortable and well-planned cruise journeys. Whether you're looking for a relaxing getaway or a luxury vacation, we make it easy to find and book the perfect cruise.
  </p>
</div>

           <section className='grid grid-cols-1 md:grid-cols-3 gap-6 gap-y-10 max-w-7xl mx-auto px-3 py-5'>
                <div className='shadow-2xl z-50 rounded-2xl  shadow-gray-600 p-6' >
                    <h2 className='text-xl sm:text-2xl md:text-2xl '>Discover Cruise Vacations Worldwide</h2>
                    <p className='py-3 text-base pl-3'>Explore a variety of <b>cruise vacations worldwide</b>, from tropical island escapes to scenic ocean journeys. Choose from multiple routes, durations, and cruise types that suit your travel preferences.</p>
                </div>
                <div className='shadow-2xl z-50 rounded-2xl  shadow-gray-600 p-6' >
                    <h2 className='text-xl sm:text-2xl md:text-2xl '>Book Cruise Deals at the Best Prices</h2>
                    <p className='py-3 text-base pl-3'>Find exclusive <b>book cruise deals</b> and enjoy value-packed travel experiences. Our platform helps you compare options and choose from <b>affordable cruise deals</b> without compromising on comfort or quality.</p>
                </div>
                <div className='shadow-2xl z-50 rounded-2xl  shadow-gray-600 p-6'>
                    <h2 className='text-xl sm:text-2xl md:text-2xl '>Luxury Cruise Packages for Premium Travel</h2>
                    <p className='pl-3 py-3 text-base'>Indulge in premium travel with our <b>luxury cruise packages designed for comfort</b>, entertainment, and unforgettable experiences. Enjoy world-class amenities, fine dining, and scenic views throughout your journey.</p>
                </div>
                <div className='shadow-2xl z-50 rounded-2xl  shadow-gray-600 p-6'>
                    <h2 className='text-xl sm:text-2xl md:text-2xl '>Easy & Secure Cruise Booking Process</h2>
                    <p className='pl-3 py-3 text-base'>Our system ensures a smooth and secure booking experience. With simple steps and instant confirmations, you can complete your cruise reservation quickly and confidently.</p>
                </div>

                <div className='shadow-2xl z-50 rounded-2xl  shadow-gray-600 p-6'>
                    <h2 className='text-xl sm:text-2xl md:text-2xl '>Start Your Cruise Journey Today</h2>
                    <p className='py-3 pl-3 text-base'>Plan your next cruise with Global Travel Holdings LLC and enjoy a seamless booking experience. Whether you're traveling for leisure or luxury, we help you create unforgettable moments on the sea.</p>
                </div>
             


            </section>
             <div className='py-10 mx-auto px-3 text-center'>
                <NavLink to="tel:9155014125" className="px-8 py-3 bg-slate-900  text-center  text-white rounded-full font-semibold hover:bg-amber-600 transition-colors shadow-lg">
                        Book Now ?
                          </NavLink>
            </div>
      <PopularCruiseLine />
      <Testimonials />
         <section className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto px-3 py-10'>
                <div className='shadow-2xl z-50 rounded-2xl  shadow-gray-600 p-6' >
                    <h2 className='text-xl sm:text-2xl md:text-2xl '>Why Choose Global Travel Holdings LLC for Cruise Booking</h2>
                    <ul className='pl-10 list-disc leading-relaxed p-6'>
                        <li>Wide selection of cruise options worldwide</li>
                        <li>	Competitive pricing and exclusive deals</li>
                        <li>	Easy comparison of cruise packages</li>
                        <li>Secure and reliable booking system</li>
                        <li>	Dedicated customer support</li>
                    </ul>

                </div>
                <div className='shadow-2xl z-50 rounded-2xl  shadow-gray-600 p-6'>
                    <h2 className='text-xl sm:text-2xl md:text-2xl '>Tips to Choose the Right Cruise</h2>
                    <ul className='pl-10 list-disc leading-relaxed py-4'>
                        <li>Select destinations based on your travel interests</li>
                        <li>Compare cruise duration and onboard facilities</li>
                        <li>Book early for better availability and pricing</li>
                        <li>Check inclusions like meals and entertainment</li>
                        <li>Choose the right cabin type for comfort</li>
                    </ul>
                </div>
            </section>
             <div className='py-10 mx-auto px-3 text-center'>
                <NavLink to="tel:9155014125" className="px-8 py-3 bg-slate-900  text-center  text-white rounded-full font-semibold hover:bg-amber-600 transition-colors shadow-lg">
                          Enquiry For Cruise Packages
                          </NavLink>
            </div>
      <CruiseDestination />
       <div className='py-10 mx-auto px-3 text-center'>
                <NavLink to="tel:9155014125" className="px-8 py-3 bg-slate-900  text-center  text-white rounded-full font-semibold hover:bg-amber-600 transition-colors shadow-lg">
                         Book your favourite Cruise Destination
                          </NavLink>
            </div>
    </>
  )
}