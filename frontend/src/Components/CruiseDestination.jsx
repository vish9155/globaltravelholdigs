import { DollarSign, CalendarDays, Sparkles } from 'lucide-react'
import React, { useState } from 'react'
import { motion } from "framer-motion";


export default function CruiseDestination() {
  let cruisedestination = [
    {
      "id": 1,
      "name": "Caribbean",
      "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      "priceFrom": 499,
      "duration": "3-7 Nights",
      "details": "Crystal clear waters, white sand beaches, and vibrant island culture across Bahamas, Jamaica, and more.",
      "highlights": ["Beach Relaxation", "Snorkeling", "Island Tours"],
      "bestTime": "Dec - Apr"
    },
    {
      "id": 2,
      "name": "Alaska",
      "image": "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      "priceFrom": 899,
      "duration": "5-10 Nights",
      "details": "Explore glaciers, wildlife, and scenic fjords with breathtaking natural beauty.",
      "highlights": ["Glacier Viewing", "Whale Watching", "Nature Tours"],
      "bestTime": "May - Sep"
    },
    {
      "id": 3,
      "name": "Hawaii",
      "image": "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      "priceFrom": 1099,
      "duration": "7-10 Nights",
      "details": "Tropical paradise with volcanoes, waterfalls, and beautiful beaches.",
      "highlights": ["Volcano Tours", "Surfing", "Island Hopping"],
      "bestTime": "Apr - Oct"
    },
    {
      "id": 4,
      "name": "Mexico Riviera",
      "image": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
      "priceFrom": 599,
      "duration": "3-7 Nights",
      "details": "Sunny beaches, cultural heritage, and vibrant nightlife in Cabo and Ensenada.",
      "highlights": ["Beach Clubs", "Local Cuisine", "Nightlife"],
      "bestTime": "Nov - May"
    },
    {
      "id": 5,
      "name": "Mediterranean",
      "image": "https://images.unsplash.com/photo-1493558103817-58b2924bce98",
      "priceFrom": 1299,
      "duration": "7-14 Nights",
      "details": "Explore Europe’s iconic cities like Rome, Barcelona, and Santorini.",
      "highlights": ["Historic Cities", "Architecture", "Cuisine"],
      "bestTime": "May - Sep"
    },
    {
      "id": 6,
      "name": "Bahamas",
      "image": "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
      "priceFrom": 399,
      "duration": "2-5 Nights",
      "details": "Quick getaway with turquoise waters and relaxing island vibes.",
      "highlights": ["Short Trips", "Beach Time", "Water Sports"],
      "bestTime": "Dec - Apr"
    },
    {
      "id": 7,
      "name": "Northern Europe",
      "image": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      "priceFrom": 1399,
      "duration": "7-12 Nights",
      "details": "Discover fjords, castles, and scenic coastal towns in Norway and beyond.",
      "highlights": ["Fjords", "Cruise Views", "Cultural Tours"],
      "bestTime": "Jun - Aug"
    },
    {
      "id": 8,
      "name": "South Pacific",
      "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      "priceFrom": 1499,
      "duration": "8-15 Nights",
      "details": "Exotic islands like Bora Bora and Fiji with crystal lagoons.",
      "highlights": ["Island Luxury", "Scuba Diving", "Private Beaches"],
      "bestTime": "May - Oct"
    },
    {
      "id": 9,
      "name": "Antarctica",
      "image": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      "priceFrom": 4999,
      "duration": "10-20 Nights",
      "details": "Ultimate expedition to icy landscapes, penguins, and remote wilderness.",
      "highlights": ["Expedition Cruise", "Wildlife", "Icebergs"],
      "bestTime": "Nov - Mar"
    },
    {
      "id": 10,
      "name": "Asia",
      "image": "https://images.unsplash.com/photo-1548574505-5e239809ee19",
      "priceFrom": 999,
      "duration": "5-12 Nights",
      "details": "Explore diverse cultures, temples, and modern cities across Asia.",
      "highlights": ["Cultural Tours", "Food", "City Exploration"],
      "bestTime": "Oct - Apr"
    },
    {
      "id": 11,
      "name": "Australia & New Zealand",
      "image": "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
      "priceFrom": 1799,
      "duration": "10-18 Nights",
      "details": "Explore Sydney, Auckland, and stunning coastal landscapes.",
      "highlights": ["Nature", "City Tours", "Wildlife"],
      "bestTime": "Nov - Feb"
    },
    {
      "id": 12,
      "name": "Transatlantic",
      "image": "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13",
      "priceFrom": 899,
      "duration": "10-16 Nights",
      "details": "Classic ocean crossing between America and Europe with luxury at sea.",
      "highlights": ["Relaxation", "Luxury Experience", "Sea Days"],
      "bestTime": "Apr - Jun"
    }
  ]
  let [show, setShow] = useState(false)
  let filteredData = show ? cruisedestination : cruisedestination.slice(0, 6)


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
        <section className='max-w-7xl mx-auto px-3 py-14 overflow-hidden'>


        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-center'
        >

          <h2 className='text-3xl md:text-5xl font-bold py-3 bg-gradient-to-r from-green-700 via-emerald-600 to-gray-700 bg-clip-text text-transparent'>
            Cruise Destination You'll Love
          </h2>

          <p className='text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed'>
            Discover breathtaking cruise destinations with luxury experiences,
            scenic ocean views, and unforgettable memories.
          </p>

        </motion.div>


        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pt-12'>

          {
            filteredData.map((item, id) => (

              <motion.div
                key={id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={id}
                whileHover={{ y: -12 }}
                className='relative overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-[0_10px_35px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-500 group'
              >


                <div className='overflow-hidden relative'>

                  <img
                    src={item.image}
                    className='w-full h-[240px] object-cover group-hover:scale-110 transition-transform duration-700'
                    alt=""
                  />


                  <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent'></div>


                  <div className='absolute bottom-5 left-5 text-white'>

                    <h2 className='text-3xl font-bold drop-shadow-xl'>
                      {item.name}
                    </h2>

                  </div>


                  <div className='absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-lg flex items-center gap-1'>

                    <CalendarDays size={16} className='text-green-700' />

                    <span className='text-sm font-semibold text-gray-700'>
                      {item.bestTime}
                    </span>

                  </div>

                </div>


                <div className='p-5'>

                  <p className='text-sm sm:text-base text-gray-600 leading-relaxed'>
                    {item.details}
                  </p>


                  <div className='grid grid-cols-2 gap-3 py-5'>

                    <div className='bg-gray-100 rounded-2xl p-3 text-center'>

                      <p className='text-xs text-gray-500'>
                        Duration
                      </p>

                      <h3 className='font-semibold text-gray-800'>
                        {item.duration}
                      </h3>

                    </div>

                    <div className='bg-green-50 rounded-2xl p-3 text-center border border-green-100'>

                      <p className='text-xs text-gray-500'>
                        Starting From
                      </p>

                      <h3 className='font-semibold text-green-700 flex justify-center items-center'>
                        <DollarSign size={16} />
                        {item.priceFrom}
                      </h3>

                    </div>

                  </div>


                  <div>

                    <h3 className='font-semibold text-gray-800 pb-3 flex items-center gap-2'>
                      <Sparkles className='text-green-700' size={18} />
                      Highlights
                    </h3>

                    <div className='flex flex-wrap gap-2'>

                      {
                        item.highlights.map((highlight, index) => (
                          <span
                            key={index}
                            className='px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium hover:bg-green-200 transition'
                          >
                            {highlight}
                          </span>
                        ))
                      }

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
            className='px-10 py-3 rounded-full bg-gradient-to-r from-green-700 via-emerald-600 to-gray-700 text-white font-semibold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300'
            onClick={() => setShow(!show)}
          >
            {show ? 'Show Less' : "Show More"}
          </button>

        </motion.div>

      </section>
    </>
  )
}
