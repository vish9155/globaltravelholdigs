import { DollarSign, Star } from 'lucide-react'
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
let filterdata=show?popularcruiseline:popularcruiseline.slice(0,5)
  return (
   <>
   <section className='max-w-7xl mx-auto px-3 py-10'>
    <h2 className='text-center text-2xl md:text-4xl font-semibold py-5'>Cruise Deals You'll Love</h2>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
      {
      filterdata.map((item,id)=>(
        <div className='relative overflow-hidden group border' key={id}>
            <img src={item.image} className='w-[403px] h-[220px] border' alt="" />
            <div className='p-3'>
                <h2 className='text-2xl font-semibold text-center'>{item.name}</h2>
                <p className='text-xs sm:text-base text-justify py-2'>
                   {item.description}
                </p>
                <hr className='text-gary-400' />
                <div className='p-2  flex items-center justify-around'>
                   <span className='flex items-center gap-2 text-gray-600 '><Star className='text-yellow-300' size={18}/> {item.rating}</span>
                   <span className='text-gray-600'>{item.duration}</span>
                   <span className=" flex items-center gap-0.2 text-green-600"><DollarSign size={18} /> {item.priceFrom}</span>
                </div>
         <span className='text-gray-600 text-sm flex items-center gap-2'><h2 className='text-base font-semibold text-black'>Destination:-</h2>{item.destinations.join(",")}</span>
            <span className='text-gray-600 text-sm flex items-center gap-2'><h2 className='text-base font-semibold text-black'>DeparturePorts:-</h2>{item.departurePorts.join(",")}</span>
            <span className='text-gray-600 text-sm flex items-center gap-1'><h2 className='text-base font-semibold text-black'>Highlights:-</h2>{item.highlights.join(",")}</span>
              <span className='text-gray-600 text-sm flex items-center gap-1'><h2 className='text-base font-semibold text-black'>BestFor:-</h2>{item.bestFor}</span>
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
