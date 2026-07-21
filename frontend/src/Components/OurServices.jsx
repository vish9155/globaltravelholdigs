import { Container, icons } from 'lucide-react';
import React from 'react';
import { motion, scale, stagger } from "framer-motion";
import { Link } from 'react-router-dom';

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

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      }
    }
  }

  const cardAnimation = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className='max-w-7xl mx-auto  py-5'>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className='text-center mb-14'
      >
        <h2 className='text-center text-3xl md:text-4xl font-bold mb-12 '>
          Our <span className='bg-gradient-to-r from-green-400 to-gray-500 bg-clip-text text-transparent'>Services</span>
        </h2>

      </motion.div>


      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >

        {services.map((item, id) => {

          let Icon = icons[item.icon];

          return (

            <motion.div
              key={id}
              variants={cardAnimation}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className="group relative p-[1px] rounded-[2rem] overflow-hidden"
            >

              <div className={`absolute inset-0 bg-gradient-to-br ${item.border} opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm`} />

              <div className="relative bg-white rounded-[2rem] p-7 h-full text-center shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">

                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.15,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`mx-auto flex items-center justify-center w-20 h-20 rounded-full ${item.bg} mb-6 shadow-md`}
                >
                  <Icon className={item.color} size={32} />
                </motion.div>

                <h3 className="text-lg font-bold mb-3 text-gray-800 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>

               

                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.4 }}
                  className={`mt-6 h-[4px] mx-auto rounded-full bg-gradient-to-r ${item.border}`}
                /> <Link to="tel:+91 8588809690" className=' p-1.5 bg-green-700 text-white hover:bg-green-800 transition rounded-lg  font-semibold'>
                Book Now
                </Link>

              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}