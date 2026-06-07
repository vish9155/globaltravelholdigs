import React, { useState } from 'react'
import { worldwidepackage } from '../data/packages/worldwidepackage'
import { CarFrontIcon, Hotel, Plane, Star } from 'lucide-react'
import { honymoonpackage } from '../data/packages/honymoonpackage'
import { motion } from "framer-motion";

export default function Packages() {

    let [show, setshow] = useState(false)
    let [show2, setshow2] = useState(false)

    let worldpackage = show
        ? worldwidepackage
        : worldwidepackage.slice(0, 6)

    let honnymoonpackage = show2
        ? honymoonpackage
        : honymoonpackage.slice(0, 6)

    return (
        <div className='bg-gradient-to-b from-gray-50 to-white'>


            <section className="relative w-full h-[75vh] md:h-[90vh] overflow-hidden">

                <img
                    src="/images/banner/Home Page Banner.jpg.jpeg"
                    className='absolute inset-0 h-full w-full object-cover'
                    alt=""
                />


                {/* <div className="absolute inset-0 bg-black/50 z-0"></div> */}

                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-0"></div>


                <div className="relative z-10 h-full flex items-center justify-center text-center px-4">

                    <div>

                        <motion.h1
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-white font-bold text-3xl sm:text-5xl md:text-6xl max-w-5xl leading-tight"
                        >
                            Premium Business Class Flights at Exclusive Fares
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className=' mt-5 text-lg md:text-2xl text-white font-semibold max-w-3xl mx-auto'
                        >
                            Discover luxury travel experiences with exclusive global packages.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className='flex justify-center gap-4 mt-8 flex-wrap'
                        >

                            <button className='bg-emerald-500 hover:bg-emerald-600 text-white transition-all duration-300 px-8 py-3 rounded-full font-semibold shadow-lg'>
                                Explore Packages
                            </button>

                            <button className='border border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-3 rounded-full font-semibold'>
                                Contact Us
                            </button>

                        </motion.div>

                    </div>

                </div>

            </section>


            <section className='max-w-7xl mx-auto px-4 py-20'>

                <div className='text-center mb-14'>

                    <h2 className='text-4xl font-bold bg-gradient-to-r from-green-700  to-gray-400  text-transparent bg-clip-text'>
                        Worldwide Packages
                    </h2>

                    <div className='w-24 h-1 bg-green-400 mx-auto mt-4 rounded-full'></div>

                    <p className='text-gray-500 mt-4 font-semibold'>
                        Explore handpicked destinations across the globe
                    </p>

                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>

                    {
                        worldpackage.map((item, id) => (

                            <motion.div
                                key={id}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: id * 0.1 }}
                                whileHover={{ y: -10 }}
                                className='rounded-3xl overflow-hidden bg-white shadow-xl hover:shadow-green-200 transition-all duration-300'
                            >
                                <div className='relative overflow-hidden group'>

                                    <img
                                        src={item.image}
                                        alt=""
                                        className='h-72 w-full object-cover group-hover:scale-110 transition-all duration-500'
                                    />

                                    <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent'></div>


                                    <div className='absolute top-4 left-4 bg-black hover:bg-green-600 cursor-pointer text-white px-4 py-1 rounded-full text-sm font-semibold'>
                                        Popular
                                    </div>


                                    <div className='absolute top-4 right-4 bg-green-400 text-black px-4 py-2 rounded-full font-bold shadow-lg'>
                                        ${item.price}
                                    </div>


                                    <div className='absolute bottom-5 left-5'>

                                        <h3 className='text-white text-2xl font-bold'>
                                            {item.title}
                                        </h3>

                                        <p className='text-gray-200 text-sm'>
                                            {item.days}
                                        </p>

                                    </div>

                                </div>


                                <div className='p-5'>


                                    <div className='flex items-center gap-5 text-gray-600 py-4 border-b'>

                                        <div className='flex items-center gap-1'>
                                            <Plane size={18} />
                                            <span className='text-sm'>Flight</span>
                                        </div>

                                        <div className='flex items-center gap-1'>
                                            <Hotel size={18} />
                                            <span className='text-sm'>Hotel</span>
                                        </div>

                                        <div className='flex items-center gap-1'>
                                            <CarFrontIcon size={18} />
                                            <span className='text-sm'>Cab</span>
                                        </div>

                                    </div>


                                    <div className='flex items-center justify-between py-4'>

                                        <div className='flex gap-1 text-green-500'>

                                            <Star size={18} fill='currentColor' />
                                            <Star size={18} fill='currentColor' />
                                            <Star size={18} fill='currentColor' />
                                            <Star size={18} fill='currentColor' />
                                            <Star size={18} fill='currentColor' />

                                        </div>

                                        <p className='text-sm text-gray-500'>
                                            5.0 Reviews
                                        </p>

                                    </div>


                                    <button className='w-full sm:w-auto p-3 px-8 rounded-xl bg-gradient-to-r from-green-500 to-gray-500 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer text-sm sm:text-base font-semibold text-white'>
                                        Book Now
                                    </button>

                                </div>

                            </motion.div>

                        ))
                    }

                </div>


                <div className='text-center py-12'>

                    <button
                        onClick={() => setshow(!show)}
                        className='w-full sm:w-auto p-3 px-8 rounded-xl bg-gradient-to-r from-green-500 to-gray-500 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer text-sm sm:text-base font-semibold text-white'
                    >
                        {show ? "Show Less" : "Show More"}
                    </button>

                </div>

            </section>


            <section className='max-w-7xl mx-auto px-4 py-10'>

                <div className='text-center mb-14'>

                    <h2 className='text-4xl font-bold bg-gradient-to-r from-green-700  to-gray-400  text-transparent bg-clip-text'>
                        Honeymoon Packages
                    </h2>

                    <div className='w-24 h-1 bg-green-500 mx-auto mt-4 rounded-full'></div>

                    <p className='text-gray-500 mt-4 font-semibold'>
                        Romantic destinations for unforgettable memories
                    </p>

                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>

                    {
                        honnymoonpackage.map((item, id) => (

                            <motion.div
                                key={id}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: id * 0.1 }}
                                whileHover={{ y: -10 }}
                                className='rounded-3xl overflow-hidden bg-white shadow-xl hover:shadow-green-200 transition-all duration-300'
                            >


                                <div className='relative overflow-hidden group'>

                                    <img
                                        src={item.image}
                                        alt=""
                                        className='h-72 w-full object-cover group-hover:scale-110 transition-all duration-500'
                                    />

                                    <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent'></div>


                                    <div className='absolute top-4 left-4 bg-black cursor-pointer    hover:bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold'>
                                        Romantic
                                    </div>


                                    <div className='absolute top-4 right-4 bg-green-400 text-black px-4 py-2 rounded-full font-bold shadow-lg'>
                                        ${item.price}
                                    </div>


                                    <div className='absolute bottom-5 left-5'>

                                        <h3 className='text-white text-2xl font-bold'>
                                            {item.title}
                                        </h3>

                                        <p className='text-gray-200 text-sm'>
                                            {item.days} 
                                        </p>

                                    </div>

                                </div>


                                <div className='p-5'>


                                    <div className='flex items-center gap-5 text-gray-600 py-4 border-b'>

                                        <div className='flex items-center gap-1'>
                                            <Plane size={18} />
                                            <span className='text-sm'>Flight</span>
                                        </div>

                                        <div className='flex items-center gap-1'>
                                            <Hotel size={18} />
                                            <span className='text-sm'>Hotel</span>
                                        </div>

                                        <div className='flex items-center gap-1'>
                                            <CarFrontIcon size={18} />
                                            <span className='text-sm'>Cab</span>
                                        </div>

                                    </div>


                                    <div className='flex items-center justify-between py-4'>

                                        <div className='flex gap-1 text-green-500'>

                                            <Star size={18} fill='currentColor' />
                                            <Star size={18} fill='currentColor' />
                                            <Star size={18} fill='currentColor' />
                                            <Star size={18} fill='currentColor' />
                                            <Star size={18} fill='currentColor' />

                                        </div>

                                        <p className='text-sm text-gray-500'>
                                            5.0 Reviews
                                        </p>

                                    </div>


                                    <button className='w-full sm:w-auto p-3 px-8 rounded-xl bg-gradient-to-r from-green-500 to-gray-500 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer text-sm sm:text-base font-semibold text-white'>
                                        Book Romantic Trip
                                    </button>

                                </div>

                            </motion.div>

                        ))
                    }

                </div>

                <div className='text-center py-12'>

                    <button
                        onClick={() => setshow2(!show2)}
                        className='w-full sm:w-auto p-3 px-8 rounded-xl bg-gradient-to-r from-green-500 to-gray-500 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer text-sm sm:text-base font-semibold text-white'
                    >
                        {show2 ? "Show Less" : "Show More"}
                    </button>

                </div>

            </section>

        </div>
    )
}