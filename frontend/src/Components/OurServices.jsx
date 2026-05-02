import { icons } from 'lucide-react';
import React from 'react';

export default function OurServices() {

 let services = [
  {
    title: "Flight Booking – Cheap Domestic & International Flights",
    description: "Book domestic and international flights with ease at competitive prices. Enjoy flexible options, instant confirmations, and a seamless booking experience designed for convenient and stress-free travel planning.",
    icon: "Plane",
    color: "text-sky-500",
    bg: "bg-sky-500/10",
    border: "from-sky-500 to-blue-600"
  },
  {
    title: "Hotel Reservation – Affordable Hotels Worldwide",
    description: "Find and book top-rated hotels across the globe with the best deals. From budget stays to luxury accommodations, enjoy comfort, flexibility, and a smooth reservation experience for every trip.",
    icon: "Hotel",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
    border: "from-rose-500 to-pink-600"
  },
  {
    title: "Holiday Packages – Customized Vacation Deals",
    description: "Explore customized holiday packages designed for families, couples, and solo travelers. Get complete travel solutions including stays, transport, and activities for a hassle-free vacation experience.",
    icon: "Package",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "from-amber-500 to-orange-600"
  },
  {
    title: "Cruise Booking – Luxury Cruise Travel Experience",
    description: "Discover premium cruise journeys with world-class amenities, dining, and entertainment. Enjoy unforgettable experiences across stunning destinations with complete comfort and service.",
    icon: "Ship",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
    border: "from-cyan-500 to-blue-600"
  },
  {
    title: "Tour Guide – Local Travel Guides & Experiences",
    description: "Enhance your journey with experienced local tour guides offering cultural insights and personalized experiences. Make your trip more engaging, informative, and memorable.",
    icon: "Map",
    color: "text-green-500",
    bg: "bg-green-500/10",
    border: "from-green-500 to-emerald-600"
  },
  {
    title: "Visa Assistance – Fast & Reliable Visa Services",
    description: "Get expert visa assistance with complete support for documentation and application processes. Ensure a smooth and hassle-free experience for your international travel needs.",
    icon: "FileText",
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
    border: "from-indigo-500 to-purple-600"
  },
  {
    title: "Travel Insurance – Secure & Reliable Coverage",
    description: "Protect your journey with comprehensive travel insurance covering medical emergencies, trip cancellations, and unexpected events—ensuring peace of mind throughout your trip.",
    icon: "ShieldCheck",
    color: "text-teal-500",
    bg: "bg-teal-500/10",
    border: "from-teal-500 to-green-600"
  },
  {
    title: "Car Rentals – Affordable & Flexible Car Hire",
    description: "Rent reliable and affordable cars at your destination with flexible options. Enjoy comfortable and convenient travel while exploring cities at your own pace.",
    icon: "Car",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
    border: "from-yellow-500 to-orange-500"
  },
  {
    title: "24/7 Support – Travel Assistance Anytime",
    description: "Our dedicated support team is available 24/7 to assist with bookings, changes, and travel queries—ensuring a smooth and worry-free experience anytime, anywhere.",
    icon: "Headphones",
    color: "text-red-500",
    bg: "bg-red-500/10",
    border: "from-red-500 to-pink-600"
  }
];

  return (
    <section className='max-w-7xl mx-auto px-4 py-16'>

      <h2 className='text-center text-3xl md:text-4xl font-bold mb-12 text-fuchsia-700'>
         Our Services
      </h2>

  
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>

        {services.map((item, id) => {
          let Icon = icons[item.icon];

          return (
            <div
              key={id}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-br hover:scale-105 transition duration-300"
              style={{
                backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
              }}
            >

           
              <div className="bg-white rounded-2xl p-6 h-full text-center shadow-md hover:shadow-xl transition duration-300">

              
                <div className={`mx-auto flex items-center justify-center w-16 h-16 rounded-full ${item.bg} mb-4 group-hover:scale-110 transition`}>
                  <Icon className={`${item.color}`} size={26} />
                </div>

              
                <h3 className='text-lg font-semibold mb-2 text-gray-800'>
                  {item.title}
                </h3>

                <p className='text-sm text-gray-500 leading-relaxed'>
                  {item.description}
                </p>

              
                <div className={`mt-4 h-[3px] w-0 group-hover:w-full bg-gradient-to-r ${item.border} transition-all duration-500 rounded-full`}></div>

              </div>
            </div>
          );
        })}

      </div>

    </section>
  );
}