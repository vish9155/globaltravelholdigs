import React, { useState } from 'react'
import { trainroutes } from '../data/trainRoutes'
import { ArrowRight, Plane } from 'lucide-react'
import { motion } from 'framer-motion'

export default function FlightRoutes() {

    const [selected, setSelected] = useState("domestic")

    const category = [
        { cat: 'domestic', title: 'Domestic' },
        { cat: 'international', title: 'International' },
        { cat: 'popular', title: 'Popular' }
    ]

    const filteredData = trainroutes.filter(
        (item) => item.category === selected
    )

    return (

        <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>

            <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12'>

                <div>

                    <p className='uppercase tracking-[4px] text-sm font-semibold text-green-500 mb-3'>
                        Explore Routes
                    </p>

                    <h2 className='text-3xl md:text-5xl font-bold text-gray-900 leading-tight'>
                        Popular Flight Routes
                    </h2>

                    <p className='text-gray-500 mt-4 max-w-2xl text-lg leading-relaxed'>
                        Discover trending domestic and international destinations
                        with affordable fares and smooth travel experiences.
                    </p>

                </div>

                <div className='bg-gray-100 p-2 rounded-full flex items-center gap-2 overflow-x-auto'>

                    {category.map((item, id) => (

                        <button
                            key={id}
                            onClick={() => setSelected(item.cat)}
                            className={`px-5 md:px-7 py-3 rounded-full text-sm md:text-base font-semibold whitespace-nowrap transition-all duration-300
                            
                            ${selected === item.cat
                                    ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg"
                                    : "text-gray-600 hover:bg-white hover:shadow"
                                }`}
                        >
                            {item.title}
                        </button>

                    ))}

                </div>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>

                {filteredData.map((item, index) => (

                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className='group bg-white rounded-3xl border border-gray-100 p-6 shadow-xl shadow-black/5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden relative'
                    >

                        <div className='flex items-center justify-between mb-6'>

                            <span className='bg-green-100 text-green-700 text-xs font-semibold px-4 py-2 rounded-full'>
                                {item.tripType}
                            </span>

                            <span className='text-sm text-gray-500'>
                                {item.departureDate}
                            </span>

                        </div>

                        <div className='flex items-center justify-between gap-4'>

                            <div className='text-left'>

                                <h3 className='text-3xl font-bold text-gray-900'>
                                    {item.from.code}
                                </h3>

                                <p className='text-gray-500 mt-1 text-sm'>
                                    {item.from.city}
                                </p>

                            </div>

                            <div className='flex-1 relative flex items-center justify-center'>

                                <div className='w-full border-t-2 border-dashed border-gray-300'></div>

                                <div className='absolute w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition'>

                                    <Plane
                                        size={18}
                                        className='text-white rotate-90'
                                    />

                                </div>

                            </div>

                            
                            <div className='text-right'>

                                <h3 className='text-3xl font-bold text-gray-900'>
                                    {item.to.code}
                                </h3>

                                <p className='text-gray-500 mt-1 text-sm'>
                                    {item.to.city}
                                </p>

                            </div>

                        </div>

                        <div className='mt-6 flex items-center justify-between text-sm text-gray-500'>

                            <p>
                                Return: {item.returnDate}
                            </p>

                            <p>
                                Direct Flight
                            </p>

                        </div>

                        <div className='mt-8 flex items-center justify-between border-t border-gray-100 pt-5'>

                            <div>

                                <p className='text-sm text-gray-500'>
                                    Starting From
                                </p>

                                <h3 className='text-3xl font-bold text-green-600'>
                                    ${item.price}
                                </h3>

                            </div>

                            {/* <button className='group/btn flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-5 py-3 rounded-2xl font-semibold shadow-lg transition-all'>

                                Book Now

                                <ArrowRight
                                    size={18}
                                    className='group-hover/btn translate-x-1 transition'
                                />

                            </button> */}

                        </div>

                        <div className='absolute -top-20 -right-20 w-40 h-40 bg-green-100 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500'></div>

                    </motion.div>

                ))}

            </div>

        </section>
    )
}