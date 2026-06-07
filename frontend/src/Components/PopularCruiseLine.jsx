import { motion } from 'framer-motion'
import { DollarSign, MapPin, Ship, Star } from 'lucide-react'
import React, { useState } from 'react'

export default function PopularCruiseLine() {
 let popularcruiseline= [
  {
    "id": 1,
    "name": "Royal Caribbean International",
    "image": "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13",
    "rating": 4.8,
    "priceFrom": 799,
    "duration": "3-12 Nights",
    "departurePorts": ["Miami", "Fort Lauderdale", "New York"],
    "destinations": ["Caribbean", "Bahamas", "Alaska", "Europe"],
    "description": "Famous for mega ships, adventure activities, and luxury experiences.",
    "highlights": ["Surf Simulator", "Skydiving Experience", "Broadway Shows"],
    "bestFor": "Families & Adventure Lovers"
  },
  {
    "id": 2,
    "name": "Carnival Cruise Line",
    "image": "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    "rating": 4.5,
    "priceFrom": 499,
    "duration": "2-7 Nights",
    "departurePorts": ["Miami", "Galveston", "Los Angeles"],
    "destinations": ["Caribbean", "Mexico", "Bahamas"],
    "description": "Fun and budget-friendly cruises with lively entertainment.",
    "highlights": ["WaterWorks Park", "Comedy Shows", "Night Parties"],
    "bestFor": "Young Travelers & Groups"
  },
  {
    "id": 3,
    "name": "Norwegian Cruise Line",
    "image": "https://images.unsplash.com/photo-1548574505-5e239809ee19",
    "rating": 4.7,
    "priceFrom": 699,
    "duration": "3-10 Nights",
    "departurePorts": ["Miami", "Seattle", "New York"],
    "destinations": ["Caribbean", "Alaska", "Hawaii"],
    "description": "Freestyle cruising with no fixed schedules or dress codes.",
    "highlights": ["Go-Kart Track", "Freestyle Dining", "Live Shows"],
    "bestFor": "Flexible Travelers"
  },
  {
    "id": 4,
    "name": "Disney Cruise Line",
    "image": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    "rating": 4.9,
    "priceFrom": 999,
    "duration": "3-7 Nights",
    "departurePorts": ["Orlando", "Miami"],
    "destinations": ["Bahamas", "Caribbean"],
    "description": "Magical Disney-themed cruises with characters and entertainment.",
    "highlights": ["Disney Shows", "Kids Clubs", "Character Meetups"],
    "bestFor": "Families with Kids"
  },
  {
    "id": 5,
    "name": "Princess Cruises",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "rating": 4.7,
    "priceFrom": 850,
    "duration": "5-14 Nights",
    "departurePorts": ["Los Angeles", "Seattle"],
    "destinations": ["Alaska", "Mexico", "Caribbean"],
    "description": "Premium cruises known for romantic and relaxing journeys.",
    "highlights": ["Movies Under the Stars", "Fine Dining", "Luxury Spa"],
    "bestFor": "Couples & Relaxation"
  },
  {
    "id": 6,
    "name": "Celebrity Cruises",
    "image": "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    "rating": 4.8,
    "priceFrom": 900,
    "duration": "4-12 Nights",
    "departurePorts": ["Miami", "Fort Lauderdale"],
    "destinations": ["Caribbean", "Europe", "Alaska"],
    "description": "Modern luxury cruise line with elegant design and fine dining.",
    "highlights": ["Infinity Pools", "Michelin Dining", "Modern Cabins"],
    "bestFor": "Luxury Travelers"
  },
  {
    "id": 7,
    "name": "Holland America Line",
    "image": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    "rating": 4.6,
    "priceFrom": 780,
    "duration": "5-14 Nights",
    "departurePorts": ["Seattle", "Vancouver"],
    "destinations": ["Alaska", "Europe", "Asia"],
    "description": "Classic cruising experience with cultural enrichment programs.",
    "highlights": ["Live Music", "Cooking Shows", "Art Classes"],
    "bestFor": "Mature Travelers"
  },
  {
    "id": 8,
    "name": "MSC Cruises",
    "image": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "rating": 4.4,
    "priceFrom": 650,
    "duration": "3-10 Nights",
    "departurePorts": ["Miami", "New York"],
    "destinations": ["Caribbean", "Europe"],
    "description": "European-style cruises with elegant ships and affordable luxury.",
    "highlights": ["Luxury Lounges", "Family Areas", "Broadway Shows"],
    "bestFor": "Affordable Luxury"
  },
  {
    "id": 9,
    "name": "Virgin Voyages",
    "image": "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    "rating": 4.7,
    "priceFrom": 850,
    "duration": "4-8 Nights",
    "departurePorts": ["Miami"],
    "destinations": ["Caribbean", "Mexico"],
    "description": "Adults-only cruise with modern design and nightlife.",
    "highlights": ["No Kids Policy", "Nightlife", "Luxury Dining"],
    "bestFor": "Adults & Couples"
  },
  {
    "id": 10,
    "name": "Regent Seven Seas Cruises",
    "image": "https://images.unsplash.com/photo-1493558103817-58b2924bce98",
    "rating": 4.9,
    "priceFrom": 2500,
    "duration": "7-21 Nights",
    "departurePorts": ["Miami", "Los Angeles"],
    "destinations": ["Worldwide"],
    "description": "Ultra luxury all-inclusive cruise experience.",
    "highlights": ["All-Inclusive", "Private Suites", "Fine Dining"],
    "bestFor": "Ultra Luxury Travelers"
  },
  {
    "id": 11,
    "name": "Oceania Cruises",
    "image": "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
    "rating": 4.8,
    "priceFrom": 1500,
    "duration": "7-20 Nights",
    "departurePorts": ["Miami", "New York"],
    "destinations": ["Europe", "Asia", "Caribbean"],
    "description": "Focus on culinary excellence and destination-rich itineraries.",
    "highlights": ["Gourmet Dining", "Small Ships", "Luxury Service"],
    "bestFor": "Food Lovers"
  },
  {
    "id": 12,
    "name": "Silversea Cruises",
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "rating": 4.9,
    "priceFrom": 3000,
    "duration": "7-25 Nights",
    "departurePorts": ["Miami", "Fort Lauderdale"],
    "destinations": ["Antarctica", "Europe", "Alaska"],
    "description": "Expedition and ultra-luxury cruises to remote destinations.",
    "highlights": ["Butler Service", "Expedition Tours", "All-Inclusive"],
    "bestFor": "Luxury & Exploration"
  }
]
let [show,setShow]=useState(false)
let filterdata=show?popularcruiseline:popularcruiseline.slice(0,6)


 const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};



  return (
   <>
  <section className='max-w-7xl mx-auto px-3 py-14'>


    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className='text-center'
    >
      <h2 className='text-3xl md:text-5xl font-bold py-3 bg-gradient-to-r from-gray-600 to-green-700 bg-clip-text text-transparent'>
        Cruise Deals You'll Love
      </h2>

      <p className='text-gray-500 max-w-2xl mx-auto text-sm md:text-base'>
        Explore luxury cruise experiences with world-class comfort,
        entertainment, and breathtaking destinations.
      </p>
    </motion.div>


    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pt-12'>

      {
      filterdata.map((item,id)=>(

        <motion.div
          key={id}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={id}
          whileHover={{ y: -12 }}
          className='relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_70px_rgba(0,0,0,0.18)] transition-all duration-500 group'
        >


          <div className='overflow-hidden relative'>

            <img
              src={item.image}
              className='w-full h-[240px] object-cover group-hover:scale-110 transition-transform duration-700'
              alt=""
            />


            <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent'></div>


            <div className='absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 shadow-lg'>
              <Star className='text-yellow-400 fill-yellow-400' size={16}/>
              <span className='text-sm font-semibold'>
                {item.rating}
              </span>
            </div>

            <div className='absolute bottom-4 left-4 text-white'>
              <h2 className='text-2xl font-bold leading-tight'>
                {item.name}
              </h2>
            </div>

          </div>


          <div className='p-5'>

            <p className='text-sm sm:text-base text-gray-600 leading-relaxed'>
              {item.description}
            </p>


            <div className='grid grid-cols-2 gap-3 py-5'>

              <div className='bg-gray-50 rounded-xl p-3 text-center'>
                <p className='text-xs text-gray-500'>Duration</p>
                <h3 className='font-semibold text-gray-800'>
                  {item.duration}
                </h3>
              </div>

              <div className='bg-green-50 rounded-xl p-3 text-center'>
                <p className='text-xs text-gray-500'>Starting From</p>

                <h3 className='font-semibold text-green-600 flex justify-center items-center'>
                  <DollarSign size={16}/>
                  {item.priceFrom}
                </h3>
              </div>

            </div>


            <div className='space-y-3'>

              <div className='flex items-start gap-3'>
                <Ship className='text-cyan-600 mt-1' size={18}/>
                <div>
                  <h3 className='font-semibold text-gray-800'>
                    Destination
                  </h3>

                  <p className='text-sm text-gray-600'>
                    {item.destinations.join(", ")}
                  </p>
                </div>
              </div>


              <div className='flex items-start gap-3'>
                <MapPin className='text-red-500 mt-1' size={18}/>
                <div>
                  <h3 className='font-semibold text-gray-800'>
                    Departure Ports
                  </h3>

                  <p className='text-sm text-gray-600'>
                    {item.departurePorts.join(", ")}
                  </p>
                </div>
              </div>


              <div>
                <h3 className='font-semibold text-gray-800 pb-2'>
                  Highlights
                </h3>

                <div className='flex flex-wrap gap-2'>
                  {
                    item.highlights.map((highlight,index)=>(
                      <span
                        key={index}
                        className='px-3 py-1 bg-cyan-50 text-green-700 rounded-full text-xs font-medium'
                      >
                        {highlight}
                      </span>
                    ))
                  }
                </div>
              </div>


              <div className='pt-3'>
                <span className='inline-block px-4 py-2 rounded-full bg-gradient-to-r from-green-400 to-gray-500 text-white text-sm font-semibold shadow-md'>
                  Best For : {item.bestFor}
                </span>
              </div>

            </div>

          </div>

        </motion.div>

      ))
      }

    </div>


    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className='pt-10 mx-auto flex items-center justify-center'
    >
      <button
        className='px-10 py-3 rounded-full bg-gradient-to-r from-green-600 to-gray-700 text-white font-semibold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300'
        onClick={()=>setShow(!show)}
      >
        {show ? 'Show Less' : "Show More"}
      </button>
    </motion.div>

   </section>
   </>
  )
}
