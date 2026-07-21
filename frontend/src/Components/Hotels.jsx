import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { CalendarDays, Dot, MapPin, Minus, Plus, Users } from 'lucide-react'
import HotelStay from './HotelStay';
import Property from './Property';
import Testimonials from './Testimonials';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Hotels() {

    let [checkin, setCheckIn] = useState(new Date())
    let [checkout, setCheckout] = useState(new Date())
    let [open, setopen] = useState(false)
    let [guest, setGuest] = useState({
        adult: 1,
        children: 0,
        rooms: 1
    })

    let updateGuest = (type, value) => {
        setGuest(prev => ({
            ...prev, [type]: Math.max(0, prev[type] + value)
        }))
    }

    return (
        <>

            <section className='w-full h-[70vh] md:h-[85vh] relative z-50'>
                <motion.div
                    initial={{ opacity: 0, scale: 1.15 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className='absolute inset-0'
                >
                    <img
                        src="/images/banner/hotels.jpg.jpeg"
                        className='absolute w-full h-full  brightness-75'
                        alt=""
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>


                </motion.div>

                {/* <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent'></div> */}


                <div className='absolute bottom-20 w-full px-3'>
                    <div className='max-w-7xl mx-auto backdrop-blur-xl bg-white shadow-2xl rounded-3xl p-5 md:p-7 border border-white/30'>

                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4'>


                            <div className='flex items-center gap-3 px-4 py-3 rounded-xl bg-white shadow-sm hover:shadow-md transition'>
                                <MapPin size={20} className='' />
                                <input
                                    type="text"
                                    placeholder='Where are you going?'
                                    className='w-full outline-none bg-transparent text-sm'
                                />
                            </div>


                            <div className='flex items-center gap-3 px-4 py-3 rounded-xl bg-white shadow-sm hover:shadow-md transition'>
                                <CalendarDays size={20} className='' />
                                <DatePicker
                                    selected={checkin}
                                    minDate={checkin}
                                    onChange={(date) => setCheckIn(date)}
                                    className='w-full outline-none text-sm'
                                />
                            </div>


                            <div className='flex items-center gap-3 px-4 py-3 rounded-xl bg-white shadow-sm hover:shadow-md transition'>
                                <CalendarDays size={20} className='' />
                                <DatePicker
                                    selected={checkout}
                                    minDate={checkout}
                                    onChange={(date) => setCheckout(date)}
                                    className='w-full outline-none text-sm'
                                />
                            </div>

                            <div className='relative z-50'>
                                <div
                                    onClick={() => setopen(!open)}
                                    className='flex items-center justify-between px-4 py-3 rounded-xl bg-white shadow-sm hover:shadow-md transition cursor-pointer'
                                >
                                    <div className='flex items-center gap-2'>
                                        <Users size={18} className='' />
                                        <span className='text-sm'>
                                            {guest.adult}A <Dot size={14} className='inline' />
                                            {guest.children}C <Dot size={14} className='inline' />
                                            {guest.rooms}R
                                        </span>
                                    </div>
                                </div>


                                {open && (
                                    <div className='absolute bottom-14  left-0 w-full bg-white rounded-xl shadow-xl z-50 border'>

                                        <div className='p-4 space-y-4'>


                                            <div className='flex justify-between items-center'>
                                                <span>Adults</span>
                                                <div className='flex items-center gap-4'>
                                                    <Minus onClick={() => updateGuest('adult', -1)} className='cursor-pointer' />
                                                    <span>{guest.adult}</span>
                                                    <Plus onClick={() => updateGuest('adult', 1)} className='cursor-pointer' />
                                                </div>
                                            </div>


                                            <div className='flex justify-between items-center'>
                                                <span>Children</span>
                                                <div className='flex items-center gap-4'>
                                                    <Minus onClick={() => updateGuest('children', -1)} className='cursor-pointer' />
                                                    <span>{guest.children}</span>
                                                    <Plus onClick={() => updateGuest('children', 1)} className='cursor-pointer' />
                                                </div>
                                            </div>

                                            <div className='flex justify-between items-center'>
                                                <span>Rooms</span>
                                                <div className='flex items-center gap-4'>
                                                    <Minus onClick={() => updateGuest('rooms', -1)} className='cursor-pointer' />
                                                    <span>{guest.rooms}</span>
                                                    <Plus onClick={() => updateGuest('rooms', 1)} className='cursor-pointer' />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='p-4 text-center'>
                                            <button
                                                onClick={() => setopen(false)}
                                                className='bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg transition'
                                            >
                                                Done
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <button className='bg-gradient-to-r p-3 from-amber-500 via-amber-500 to-amber-500 hover:opacity-90 text-white rounded-xl font-medium shadow-lg'>
                                Search
                            </button>

                        </div>
                    </div>
                </div>
            </section>
            <section className='relative max-w-7xl mx-auto px-3 py-10'>
                <div className='flex flex-col items-center text-center mb-12'>
                    <div className="flex items-center gap-3 ">
                        <span className="h-[2px] w-10 bg-green-600 rounded-full"></span>
                        <h2 className='text-xl text-green-600 font-semibold tracking-[0.26em] '>Trending Destination</h2>
                        <span className='h-[2px] w-10 bg-green-600 rounded-full'></span>
                    </div>


                    <span className='text-gray-600 pb-6 leading-tight font-extrabold text-3xl'>Most popular choices for
                        <span className='text-green-600'> travelers from Usa</span>
                    </span>

                </div>



                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>


                    <div className='relative overflow-hidden rounded-xl'>
                        <img
                            src="/images/hotels/New York.jpg.jpeg"
                            className='w-full h-full object-cover hover:scale-110 brightness-75 cursor-pointer transition duration-500'
                            alt=""
                        />
                        <div className='absolute left-5 top-5'>
                            <h2 className='text-white font-semibold text-2xl'>New York</h2>

                        </div>
                    </div>


                    <div className='relative overflow-hidden rounded-xl '>
                        <img
                            src="/images/hotels/Grand Canyon.jpg.jpeg"
                            className='w-full h-full object-cover hover:scale-110 brightness-75 cursor-pointer transition duration-500'
                            alt=""
                        />
                        <div className='absolute left-5 top-5'>
                            <h2 className='text-white font-semibold text-2xl'>Grand Canyon</h2>

                        </div>
                    </div>

                </div>


                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-5'>

                    <div className='relative overflow-hidden rounded-xl '>
                        <img
                            src="/images/hotels/miami.jpg.jpeg"
                            className='w-full h-full object-cover hover:scale-110 brightness-75 cursor-pointer transition duration-500'
                            alt=""
                        />
                        <div className='absolute left-5 top-5'>
                            <h2 className='text-white font-semibold text-2xl '>Miami</h2>

                        </div>
                    </div>

                    <div className='relative overflow-hidden rounded-xl '>
                        <img
                            src="/images/hotels/Las Vgas.jpg.jpeg"
                            className='w-full h-full object-cover hover:scale-110 brightness-75 cursor-pointer transition duration-500'
                            alt=""
                        />
                        <div className='absolute left-5 top-5'>
                            <h2 className='text-white font-semibold text-2xl'>Las Vages</h2>

                        </div>
                    </div>


                    <div className='relative overflow-hidden rounded-xl  md:col-span-1'>
                        <img
                            src="/images/hotels/jackson whole.jpg.jpeg"
                            className='w-full h-full object-cover hover:scale-110 brightness-75 cursor-pointer transition duration-500'
                            alt=""
                        />
                        <div className='absolute left-5 top-5'>
                            <h2 className='text-white font-semibold text-2xl'>Jackson Whole</h2>

                        </div>
                    </div>


                </div>

            </section>

            <div className='py-10 mx-auto px-3 text-center'>
                <NavLink to="tel:+91 8588809690" className="px-8 py-3 /90  bg-black text-center  text-white rounded-full font-semibold hover:bg-green-600 transition-colors shadow-lg">
                    Book Now Your favourite Hotels
                </NavLink>
            </div>


            <div className="grid grid-cols-1 max-w-7xl mx-auto md:grid-cols-2 xl:grid-cols-3 gap-8">

                {[
                    {
                        title: "Find the Best Hotel Deals for Every Stay",
                        desc: "Explore a wide selection of properties across top destinations. Whether you're searching for cheap hotel deals or premium stays, our platform allows you to compare prices, amenities, and locations to make the right choice."
                        // icon: "✈️",
                    },
                    {
                        title: "Book Hotels Online with Ease & Flexibility",
                        desc: "Our system makes it easy to book hotels online with just a few clicks. Filter your search based on price, location, ratings, and facilities to find accommodations that suit your travel needs."
                    },
                    {
                        title: "Budget to Luxury Hotels Booking Options",
                        desc: "We offer everything from budget hotels worldwide to premium and luxury hotels booking options. Whether you're traveling for business, family vacations, or leisure, you’ll find the right stay for every occasion."
                        // icon: "🔒",
                    },
                    {
                        title: "Secure & Hassle-Free Hotel Reservations",
                        desc: "Enjoy a smooth and secure booking process with instant confirmations. Our platform ensures transparency in pricing and a reliable experience for every reservation.",
                        // icon: "💸",
                    },
                    {
                        title: "Book Your Stay with Confidence",
                        desc: "Plan your stay with Global Travel Holdings LLC and enjoy a seamless hotel booking experience. Whether you're looking for comfort, luxury, or affordability, we help you find the perfect place to stay anywhere in the world.",
                        // icon: "📞",
                    },
                    {
                        title: "Book Hotels Online at Best Prices Worldwide",
                        desc: "Finding the right place to stay should be simple and stress-free. With Global Travel Holdings LLC, our hotel booking online platform helps you discover and reserve the perfect accommodation for any trip. From short stays to long vacations, we provide reliable options that match your comfort and budget.",
                        // icon: "⚡",
                    },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="group bg-white rounded-3xl border border-gray-100 p-7 shadow-xl shadow-black/5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                    >
                        {/* <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-3xl mb-6 shadow-lg">
                    {item.icon}
                </div> */}

                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-500 transition">
                            {item.title}
                        </h3>

                        <p className="text-gray-600 leading-relaxed text-[16px]">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>


            <section className='py-10'>
                <HotelStay />
                <div className='py-10 mx-auto px-3 text-center'>
                    <NavLink to="/contact-us" className="px-8 py-3 bg-black text-center  text-white rounded-full font-semibold hover:bg-green-600 transition-colors shadow-lg">
                        Book Hotels Now
                    </NavLink>
                </div>
            </section>



            <Testimonials />
            <Property />
            <div className='py-10 mx-auto px-3 text-center'>
                <NavLink to="tel:+91 8588809690" className="px-8 py-3 bg-gray-800  text-center  text-white rounded-full font-semibold hover:bg-green-600 transition-colors shadow-lg">
                    Booking Enquiry
                </NavLink>
            </div>
            <section className="max-w-7xl mx-auto px-4 py-14">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Card 1 */}
                    <div className="rounded-2xl border border-gray-200 p-8 shadow-lg transition duration-300 bg-white">

                        <h2 className="text-2xl md:text-3xl font-semibold text-green-600 leading-snug mb-6">
                            Why Choose Global Travel Holdings LLC for Hotel Booking
                        </h2>

                        <ul className="space-y-4 text-gray-700 leading-7 list-disc pl-6">

                            <li>Wide range of hotels across global destinations</li>

                            <li>Easy comparison of prices and amenities</li>

                            <li>Secure booking and payment system</li>

                            <li>Flexible options for every budget</li>

                            <li>Dedicated customer support</li>

                        </ul>

                    </div>

                    {/* Card 2 */}
                    <div className="rounded-2xl border border-gray-200 p-8 shadow-lg transition duration-300 bg-white ">

                        <h2 className="text-2xl md:text-3xl font-semibold text-green-600 leading-snug mb-6">
                            Tips to Get the Best Hotel Deals
                        </h2>

                        <ul className="space-y-4 text-gray-700 leading-7 list-disc pl-6">

                            <li>Book early to secure better prices</li>

                            <li>Choose flexible dates for more options</li>

                            <li>Compare hotel ratings and guest reviews</li>

                            <li>Look for seasonal discounts and offers</li>

                            <li>Select the right location based on your itinerary</li>

                        </ul>

                    </div>

                </div>

            </section>
        </>
    )
}


