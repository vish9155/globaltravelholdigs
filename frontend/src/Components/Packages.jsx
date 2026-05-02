import React, { useState } from 'react'
import { worldwidepackage } from '../data/packages/worldwidepackage'
import { CarFrontIcon, Hotel, Plane } from 'lucide-react'
import { honymoonpackage } from '../data/packages/honymoonpackage'

export default function Packages() {
    let [show, setshow] = useState(false)
    let [show2, setshow2] = useState(false)
    let worldpackage = show ? worldwidepackage : worldwidepackage.slice(0, 5)
    let honnymoonpackage = show2 ? honymoonpackage : honymoonpackage.slice(0, 5)
    console.log(worldpackage)
    return (
        <>
<section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
<img src="/images/banner/Home Page Banner.jpg.jpeg" className='absolute inset-0 h-full w-full' alt="" />

                <div className="relative z-10  h-full px-4 text-center">
                    <div className='flex items-center justify-center h-80 '>
                        <h1 className="text-white font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl max-w-4xl leading-snug">
                            Premium Business Class Flights at Exclusive Fares
                        </h1>
                    </div>

                </div>

            </section>
            <section className='max-w-7xl mx-auto px-3 py-10'>
                <h2 className='text-2xl font-semibold'>Worldwide Packages</h2>
                <div className='py-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 rounded-lg '>
                    {
                        worldpackage.map((item, id) => (
                            <div key={id} className='border border-black/20 shadow-xl rounded hover:shadow-amber-300  bg-white/5 backdrop-blur-xl'>
                                <div className='relative group overflow-hidden'>
                                    <img src={item.image} alt={item.image} className='h-full w-full object-cover group-hover:scale-110 cursor-pointer transition-all duration-300 ease-in' />
                                </div>
                                <div className='p-3'>
                                    <h4 className='text-base font-semibold'>{item.title}</h4>
                                    <p className='text-gray-600'>{item.days}</p>

                                </div>
                                <hr className='text-gray-200 pt-4' />
                                <div className='flex justify-between '>
                                    <div className='flex gap-2 px-2'>
                                        <Plane size={20} className='text-gay-600' />
                                        <Hotel size={20} className='text-gay-600' />
                                        <CarFrontIcon size={20} className='text-gay-600' />
                                    </div>
                                    <div className=''>
                                        <h2 className='text-xl font-semibold text-yellow-600 '>${item.price}</h2>
                                        <p className='text-sm text-gray-600 px-2'>Staring From</p>
                                    </div>
                                </div>
                                <hr className='text-gray-200 pb-4' />
                                <div className='text-center  py-3'>
                                    <button className='p-3 px-8 cursor-pointer bg-amber-400 rounded-full hover:bg-amber-600'>Book Now</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='text-center py-7'>
                    <button onClick={() => setshow(!show)} className='p-3 px-10 cursor-pointer bg-amber-400 rounded-full hover:bg-amber-600'>{show ? "Show Less" : "Show More"}</button>
                </div>
            </section>
            <section className='max-w-7xl mx-auto px-3 py-5'>
                <h2 className='text-2xl font-semibold'>Honeymoon Packages</h2>
                <div className='py-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 rounded-lg '>
                    {
                        honnymoonpackage.map((item, id) => (
                            <div key={id} className='border bg-white/5 backdrop-blur-xl shadow-xl rounded hover:shadow-amber-300'>
                                <div className='relative group overflow-hidden'>
                                    <img src={item.image} alt={item.image} className='h-full w-full object-cover group-hover:scale-110 cursor-pointer transition-all duration-300 ease-in' />
                                </div>
                                <div className='p-3'>
                                    <h4 className='text-base font-semibold'>{item.title}</h4>
                                    <p className='text-gray-600'>{item.days}</p>

                                </div>
                                <hr className='text-gray-200 pt-4' />
                                <div className='flex justify-between '>
                                    <div className='flex gap-2 px-2'>
                                        <Plane size={20} className='text-gay-600' />
                                        <Hotel size={20} className='text-gay-600' />
                                        <CarFrontIcon size={20} className='text-gay-600' />
                                    </div>
                                    <div className=''>
                                        <h2 className='text-xl font-semibold text-yellow-600 '>${item.price}</h2>
                                        <p className='text-sm text-gray-600 px-2'>Staring From</p>
                                    </div>
                                </div>
                                <hr className='text-gray-200 pb-4' />
                                <div className='text-center  py-3'>
                                    <button className='p-3 px-8 cursor-pointer bg-amber-400 rounded-full hover:bg-amber-600'>Book Now</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='text-center py-7'>
                    <button onClick={() => setshow2(!show2)} className='p-3 px-10 cursor-pointer bg-amber-400 rounded-full hover:bg-amber-600'>{show2 ? "Show Less" : "Show More"}</button>
                </div>
            </section>
        </>
    )
}
