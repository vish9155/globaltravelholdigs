import { CalendarDays, MapPin } from 'lucide-react'
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { NavLink } from 'react-router-dom'

export default function Car() {

  const [pickupDate, setpickupDate] = useState(new Date())
  const [dropDate, setdropDate] = useState(new Date())

  return (
    <>
      <section className='relative w-full h-[75vh] md:h-[85vh]'>


        <img
          src="/images/banner/Car Rental Banner.jpg.jpeg"
          className='h-full w-full  brightness-75'
          alt=""
        />



        <div className='absolute bottom-0 w-full px-4 flex justify-center'>

          <div className=' max-w-7xl mx-auto bg-white rounded-2xl shadow-2xl p-4 md:p-6'>


            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 items-center'>


              <div className='flex items-center gap-2 border rounded-lg px-3 py-2'>
                <MapPin size={18} className='text-gray-500' />
                <input
                  type="text"
                  placeholder='Pick-up location'
                  className='w-full outline-none text-sm'
                />
              </div>


              <div className='flex items-center gap-2 border rounded-lg px-3 py-2'>
                <MapPin size={18} className='text-gray-500' />
                <input
                  type="text"
                  placeholder='Drop-off location'
                  className='w-full outline-none text-sm'
                />
              </div>

              <div className='flex items-center gap-2 border rounded-lg px-3 py-2'>
                <CalendarDays size={18} className='text-gray-500' />
                <DatePicker
                  selected={pickupDate}
                  onChange={(date) => setpickupDate(date)}
                  className='w-full outline-none text-sm'
                />
              </div>

              <div className='border rounded-lg px-3 py-2'>
                <input
                  type="time"
                  className='w-full outline-none text-sm'
                />
              </div>


              <div className='flex items-center gap-2 border rounded-lg px-3 py-2'>
                <CalendarDays size={18} className='text-gray-500' />
                <DatePicker
                  selected={dropDate}
                  minDate={pickupDate}
                  onChange={(date) => setdropDate(date)}
                  className='w-full outline-none text-sm'
                />
              </div>


              <div className='border rounded-lg px-3 py-2'>
                <input
                  type="time"
                  className='w-full outline-none text-sm'
                />
              </div>

              <div className='border rounded-lg px-3 py-2'>
                <input
                  type="number"
                  className='w-full outline-none text-sm'
                  placeholder='Driver age'
                />
              </div>
              <div>
                <button className='w-full bg-yellow-400 hover:bg-yellow-500 transition rounded-lg py-3 font-semibold text-sm'>
                  Search
                </button>
              </div>

            </div>

          </div>

        </div>

      </section>

<div className='max-w-6xl mx-auto px-3 py-10'>
  <h1 className='text-xl sm:text-2xl md:text-3xl pt-5 py-4 font-semibold leading-3 text-fuchsia-700 text-center'>Book Car Rentals Online for Easy & Flexible Travel</h1>
  <p className='p-2 sm:p-3 md:p-4 max-w-5xl text-base text-gray-600 mx-auto text-center'>
Getting around your destination should be convenient and stress-free. With Global Travel Holdings LLC, our <b>car rental booking online</b> platform makes it easy to find and reserve the right vehicle for your journey. Whether you need a car for business, leisure, or daily travel, we provide flexible options to match your needs.
  </p>
</div>

      <section className='grid grid-cols-1 md:grid-cols-3 gap-6 gap-y-10 max-w-7xl mx-auto px-3 py-10'>
        <div className='shadow-2xl z-50 rounded-2xl  shadow-gray-600 p-6' >
          <h2 className='text-xl sm:text-2xl md:text-2xl '>Rent a Car Online with Ease</h2>
          <p className='py-3 text-base pl-3'>Quickly <b>rent a car online</b> by choosing from a wide range of vehicles, including economy, SUV, and luxury options. Our platform allows you to compare availability, pricing, and features to make the right choice</p>
        </div>
        <div className='shadow-2xl z-50 rounded-2xl  shadow-gray-600 p-6' >
          <h2 className='text-xl sm:text-2xl md:text-2xl '>Affordable & Cheap Car Rental Deals</h2>
          <p className='py-3 text-base pl-3'>Find <b>cheap car rental deals</b> without compromising on quality or reliability. We help you access competitive pricing and seasonal offers, making travel more budget-friendly.</p>
        </div>
        <div className='shadow-2xl z-50 rounded-2xl  shadow-gray-600 p-6'>
          <h2 className='text-xl sm:text-2xl md:text-2xl '>Airport & Local Car Rental Services</h2>
          <p className='pl-3 py-3 text-base'>Book an <b>airport car rental service</b> for smooth pickups and drop-offs. Whether you need transportation from the airport or within the city, our services ensure convenience at every step.</p>
        </div>
        <div className='shadow-2xl z-50 rounded-2xl  shadow-gray-600 p-6'>
          <h2 className='text-xl sm:text-2xl md:text-2xl '>Car Hire Worldwide for Every Journey</h2>
          <p className='pl-3 py-3 text-base'>With our <b>car hire worldwide</b> network, you can book vehicles across multiple destinations. From short city trips to long-distance travel, we provide options suitable for every plan.</p>
        </div>

        <div className='shadow-2xl z-50 rounded-2xl  shadow-gray-600 p-6'>
          <h2 className='text-xl sm:text-2xl md:text-2xl '>Secure & Hassle-Free Booking Experience</h2>
          <p className='py-3 pl-3 text-base'>Enjoy a simple and secure booking process with instant confirmations. Our platform ensures transparency, safety, and reliability for every reservation.</p>
        </div>
        <div className='shadow-2xl z-50 rounded-2xl  shadow-gray-600 p-6'>
          <h2 className='text-xl sm:text-2xl md:text-2xl '>Start Your Journey with the Right Ride</h2>
          <p className='py-3 pl-3 text-base'>Book your car rental with Global Travel Holdings LLC and enjoy a smooth and flexible travel experience. Whether for business or leisure, we make every journey comfortable and convenient.</p>
        </div>


      </section>
        <div className='py-10 mx-auto px-3 text-center'>
                <NavLink to="tel:9155014125" className="px-8 py-3 bg-slate-900  text-center  text-white rounded-full font-semibold hover:bg-amber-600 transition-colors shadow-lg">
                            Book your car 
                          </NavLink>
            </div>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto px-3 py-10'>
        <div className='shadow-2xl z-50 rounded-2xl  shadow-gray-600 p-6' >
          <h2 className='text-xl sm:text-2xl md:text-2xl '>Why Choose Global Travel Holdings LLC for Car Rentals</h2>

          <ul className='pl-10 list-disc leading-relaxed p-6'>
            <li>Wide range of vehicles for different travel needs</li>
            <li>	Easy comparison of pricing and features</li>
            <li>		Secure booking and payment process</li>
            <li>Flexible rental options</li>
            <li>	Dedicated customer support</li>
          </ul>

        </div>
        <div className='shadow-2xl z-50 rounded-2xl  shadow-gray-600 p-6'>
          <h2 className='text-xl sm:text-2xl md:text-2xl '>Tips for Booking the Best Car Rental</h2>
          <ul className='pl-10 list-disc leading-relaxed py-4'>
            <li>Book in advance for better prices</li>
            <li>Choose the right vehicle based on your travel needs</li>
            <li>Compare rental policies and fuel options</li>
            <li>Check pickup and drop-off locations carefully</li>
            <li>Look for seasonal offers and discounts</li>
          </ul>
        </div>
      </section>
    </>
  )
}