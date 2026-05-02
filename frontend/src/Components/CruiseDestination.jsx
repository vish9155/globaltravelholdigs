import { DollarSign } from 'lucide-react'
import React, { useState } from 'react'

export default function CruiseDestination() {
  let cruisedestination=[
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
let [show,setShow]=useState(false)
 let filteredData=show?cruisedestination:cruisedestination.slice(0,5)
  return (
    <>
     <section className='max-w-7xl mx-auto px-3 py-10'>
    <h2 className='text-center text-2xl md:text-4xl font-semibold py-5'>Cruise Destination You'll Love</h2>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
      {
      filteredData.map((item,id)=>(
        <div className='relative overflow-hidden group border' key={id}>
            <img src={item.image} className='w-[403px] h-[220px] border' alt="" />
            <div className='p-3'>
                <h2 className='text-2xl font-semibold text-center'>{item.name}</h2>
                <p className='text-xs sm:text-base text-justify py-2'>
                   {item.details}
                </p>
                <hr className='text-gary-400' />
                <div className='p-2  flex items-center justify-around'>
                   
                   <span className='text-gray-600'>{item.duration}</span>
                   <span className=" flex items-center gap-0.2 text-green-600"><DollarSign size={18} /> {item.priceFrom}</span>
                </div>
        
            <span className='text-gray-600 text-sm flex items-center gap-1'><h2 className='text-base font-semibold text-black'>Highlights:-</h2>{item.highlights.join(",")}</span>
              <span className='text-gray-600 text-sm flex items-center gap-1'><h2 className='text-base font-semibold text-black'>BestTime:-</h2>{item.bestTime}</span>
            </div>
        </div>
      ))
      }
     
    </div>
     <div className='pt-6 mx-auto flex items-center justify-center'>
        <button className='p-3 px-8 text-center bg-amber-300 rounded-lg ' onClick={()=>setShow(!show)}>{show?'Show Less':"Show More"}</button>
      </div>
   </section>
    </>
  )
}
