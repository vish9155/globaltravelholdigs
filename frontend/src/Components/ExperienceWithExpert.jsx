import React from 'react'

export default function ExperienceWithExpert() {
  return (
   <>
     <section>
                <div className='max-w-7xl mx-auto py-10 px-3'>
                    <h2 className='text-xl sm:text-2xl md:text-3xl text-center text-fuchsia-700'>What We Offer</h2>
                    
                    <div className=' max-w-4xl mx-auto px-3 py-5'>
                        <p className='text-center  text-sm sm:text-base text-gray-600 p-1 sm:p-2 md:p-3'>
                          We provide a complete flight hotel car booking platform designed to meet the needs of modern travelers:
                        </p>
                        <ul className='pl-50 list-disc text-center'>
                            <li className='text-justify'>Easy flight bookings for domestic and international travel</li>
                            <li className='text-justify'>Comfortable hotel reservations across global destinations</li>
                            <li className='text-justify'>Convenient car rental services for local and long-distance travel</li>
                            <li className='text-justify'>Cruise bookings for luxury travel experiences</li>
                            <li className='text-justify'>Travel insurance for safe and secure trips</li>
                            <li className='text-justify'>Visa assistance for hassle-free international travel</li>
                            <li className='text-justify'>Customized holiday and vacation packages</li>
                        </ul>
                        <p className='text-center  text-sm sm:text-base text-gray-600 p-1 sm:p-2 md:p-3'>Our platform is built to offer flexibility, choice, and efficiency—all in one place.</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto px-3   '>
                        <div className='p-1 sm:p-2 md:p-3'>
                            <h2 className='text-3xl md:text-4xl  text-justify'>1,5+ Million</h2>
                            <p className='text-justify text-sm sm:text-base text-gray-600'>Clients Served</p>
                        </div>
                        <div>
                            <h2 className='text-3xl md:text-5xl  text-justify'>95%</h2>
                            <p className='text-justify text-sm sm:text-base text-gray-600'>Satisfaction Rate</p>
                        </div>
                        <div>
                            <h2 className='text-3xl md:text-5xl  text-justify'>$2,050</h2>
                            <p className='text-justify text-sm sm:text-base text-gray-600'>Average Savings per Ticket</p>
                        </div>
                    </div>
                    <div className='p-2 sm:p-3 md:p-4'>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8  '>

                            <div>
                                <div className='z-40  shadow-lg shadow-white group overflow-hidden relative p-5 mx-auto rounded-xl transform translate-x-0 hover:-translate-x-4 transition-transform duration-300 ease-in cursor-pointer'>
                                    <img src="/images/about/account.png" className='h-full w-full object-cover rounded-xl group-hover:scale-110 ' alt="" />
                                    <h2 className='text-lg md:text-xl  p-3 text-center'>Emily Johnson</h2>
                                </div>
                            </div>
                            <div>
                                <div className='z-40 shadow-lg shadow-white group overflow-hidden relative p-5 mx-auto rounded-xl transform translate-x-0 hover:-translate-x-4 transition-transform duration-300 ease-in cursor-pointer'>
                                    <img src="/images/about/manager.png" className='h-full w-full object-cover rounded-xl group-hover:scale-110 ' alt="" />
                                    <h2 className='text-lg md:text-xl  p-3 text-center'>Sarah Williams</h2>

                                </div>
                            </div>
                            <div>
                                <div className='z-40 shadow-lg shadow-white group overflow-hidden relative p-5 mx-auto rounded-xl transform translate-x-0 hover:-translate-x-4 transition-transform duration-300 ease-in cursor-pointer' >
                                    <img src="/images/about/supervisor.png" className='h-full w-full object-cover rounded-xl group-hover:scale-110 ' alt="" />
                                    <h2 className='text-lg md:text-xl  p-3 text-center'>Olivia Brown</h2>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
   </>
  )
}
