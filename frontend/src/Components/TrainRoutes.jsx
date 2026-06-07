import React, { useState } from 'react'
import { trainroutes } from '../data/trainRoutes'
import { Minus, Plane } from 'lucide-react'

export default function TrainRoutes() {

    const [selected, setSelected] = useState("domestic")

    const category = [
        { cat: 'domestic', title: 'Domestic' },
        { cat: 'international', title: 'International' },
        { cat: 'popular', title: 'Popular' }
    ]

    const filteredData = trainroutes.filter(item => item.category === selected)

    return (
        <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12'>

         
            <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8 md:mb-10'>

                <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2'>
                    <Plane size={24} className='sm:w-7 sm:h-7' />
                    Global Travel Popular Routes
                </h2>

                <div className='bg-gray-100 p-1 rounded-full flex flex-wrap sm:flex-nowrap gap-2 w-full sm:w-auto overflow-x-auto'>

                    {category.map((item, id) => (
                        <button
                            key={id}
                            onClick={() => setSelected(item.cat)}
                            className={`px-4 sm:px-5 md:px-6 py-2 text-xs sm:text-sm md:text-base rounded-full whitespace-nowrap transition-all duration-300
                            
                            ${selected === item.cat
                                    ? "bg-amber-400 text-black shadow-md"
                                    : "text-gray-600 hover:bg-white"
                                }`}
                        >
                            {item.title}
                        </button>
                    ))}
                </div>
            </div>

           
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
             
                {filteredData.map((item) => (

                    <div
                        key={item.id}
                        className='bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col gap-4'
                    >

                        <p className='text-gray-500 text-xs sm:text-sm font-medium flex items-center gap-2'>
                            {item.departureDate}
                            <Minus size={14} />
                            {item.returnDate}
                        </p>

                     
                        <div className='flex items-center justify-between'>

                            <div className='text-left'>
                                <h2 className='text-lg sm:text-xl font-bold text-gray-800'>
                                    {item.from.code}
                                </h2>
                                <p className='text-xs sm:text-sm text-gray-500'>
                                    {item.from.city}
                                </p>
                            </div>

                            <div className='flex-1 flex items-center mx-2 sm:mx-3'>
                                <div className='w-full border-t border-dashed border-gray-300 relative'>
                                    <Plane size={14} className='absolute left-1/2 -translate-x-1/2 -top-2 text-amber-500' />
                                </div>
                            </div>

                         
                            <div className='text-right'>
                                <h2 className='text-lg sm:text-xl font-bold text-gray-800'>
                                    {item.to.code}
                                </h2>
                                <p className='text-xs sm:text-sm text-gray-500'>
                                    {item.to.city}
                                </p>
                            </div>
                        </div>

                     
                        <div className='flex items-center justify-between border-t pt-3'>

                            <p className='text-xs sm:text-sm text-gray-500'>
                                {item.tripType}
                            </p>

                            <p className='text-lg sm:text-xl font-bold text-green-600'>
                                ${item.price}
                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    )
}