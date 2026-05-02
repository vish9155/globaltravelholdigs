import React from 'react'
import { NavLink } from 'react-router-dom'

export default function WhyChosseus() {
  return (
    <>
     <section className='max-w-7xl mx-auto px-3 py-14'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div className='order-1 md:order-1'>
                            <h2 className='text-lg sm:text-xl font-semibold text-center'>Why Choose Global Travel Holdings LLC</h2>
                            <div className='p-3'>
                                <p className='text-sm sm:text-base text-justify p-2'>Choosing the right <b>travel agency for flights and hotels</b> can make a big difference in your overall experience. At Global Travel Holdings LLC, we prioritize trust, simplicity, and support.</p>
                                <ul className='pl-30 list-disc'>
                                  <li>User-friendly and intuitive booking experience</li>
                                  <li>Transparent pricing with no hidden surprises</li>
                                  <li>Wide range of travel options worldwide</li>
                                  <li>Dedicated customer support when you need assistance</li>
                                  <li>Focus on safety through a secure travel booking platform</li>
                                </ul>
                                <p className='text-sm sm:text-base text-justify p-2'>What truly sets Global Travel apart is its focus on personalization and luxury. Whether you’re traveling for business or leisure, the services are tailored to your needs—offering curated itineraries, premium accommodations, and exclusive deals. The intuitive booking system makes planning quick and easy, while maintaining a high-end feel throughout the process..</p>
                                <p className='text-sm sm:text-base text-justify p-2'>In addition, Global Travel provides reliable 24/7 customer support, so you’re always backed up no matter where you are. From last-minute changes to travel assistance, their team ensures peace of mind at every step. Combining affordability with quality, Global Travel delivers exceptional value, making it a trusted choice for modern travelers.</p>
                            </div>
                           <div className='mx-auto py-5'>
                             <NavLink className={'p-4  px-8 text-white bg-yellow-600 rounded-full '}>Search flights</NavLink>
                           </div>
                        </div>
                        <div className='order-2 md:order-2 relative group overflow-hidden border border-amber-300'>
                 <img src="/images/Why chose global travel.jpg.jpeg" className='h-full w-full group-hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer' alt="" />
                        </div>
                    </div>
                </section>
    </>
  )
}
