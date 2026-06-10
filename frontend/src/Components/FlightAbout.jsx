import React from 'react'
import FlightRoutes from './FlightRoutes'

export default function FlightAbout() {
    return (
        <div>
            <section className="max-w-7xl mx-auto px-4 py-16">

                <div className="text-center mb-14">
                    <p className="text-green-500 font-semibold tracking-widest uppercase">
                        Why Choose Us
                    </p>

                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3">
                        Your Trusted Flight Booking Partner
                    </h2>

                    <p className="text-gray-500 max-w-3xl mx-auto mt-5 text-lg leading-relaxed">
                        Discover affordable domestic and international flights with a seamless
                        booking experience, secure payments, and dedicated customer support.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

                    {[
                        {
                            title: "Book Flights Online at Best Prices Worldwide",
                            desc: "Booking flights should be simple, fast, and reliable. At Global Travel Holdings LLC, our flight booking online platform is designed to help you find the right flights at the best available prices without any hassle. Whether you're planning a business trip or a vacation, we make it easy to compare options and book with confidence"
                        },
                        {
                            title: "Find Cheap Flight Tickets for Every Destination",
                            desc: "Explore a wide range of options for both domestic and international travel. Our platform allows you to compare airlines, prices, and schedules so you can choose what fits your plan perfectly. With access to cheap flight tickets and exclusive offers, traveling has never been more affordable."
                        },
                        {
                            title: "Domestic & International Flight Booking Made Easy",
                            desc: "From short domestic routes to long-haul international journeys, we provide a seamless domestic flight booking and book international flights experience. Choose from multiple airlines, flexible timings, and convenient routes—all in one place."
                        },
                        {
                            title: "Get the Best Flight Deals & Offers",
                            desc: "We help travelers find the best flight deals by offering competitive pricing and smart search options. Whether you’re booking in advance or looking for last-minute tickets, our platform ensures value for every trip.",
                        },
                        {
                            title: "Simple & Secure Airline Ticket Booking",
                            desc: "Our system is built for fast and secure airline ticket booking. With an easy-to-use interface and safe payment options, you can complete your booking in just a few steps.",
                        },
                        {
                            title: "Start Your Journey Today",
                            desc: "Search, compare, and book your flights with ease through Global Travel Holdings LLC. Whether you're traveling locally or internationally, our platform ensures a smooth and reliable booking experience from start to finish.",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="group bg-white rounded-3xl border border-gray-100 p-7 shadow-xl shadow-black/5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                        >
                            {/* <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-3xl mb-6 shadow-lg">
                    {item.icon}
                </div> */}

                            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-500 transition">
                                {item.title}
                            </h3>

                            <p className="text-gray-600 leading-relaxed text-[16px]">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
            <FlightRoutes />
            <section className="max-w-7xl mx-auto px-4 py-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 text-white shadow-2xl">

                        <p className="uppercase tracking-widest text-sm font-semibold text-green-100">
                            Benefits
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold mt-3 leading-tight">
                            Why Book Flights with Global Travel Holdings LLC
                        </h2>

                        <p className="mt-5 text-green-50 leading-relaxed text-lg">
                            We help travelers discover affordable flights, compare airlines,
                            and enjoy a smooth booking experience with trusted support and
                            competitive pricing.
                        </p>

                        <div className="mt-8 space-y-5">

                            {[
                                "Easy-to-use flight search and booking system",
                                "Competitive pricing on global routes",
                                "Secure payment and instant confirmation",
                                "Access to multiple airlines and routes",
                                "Dedicated customer support for assistance",
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                        ✓
                                    </div>

                                    <p className="text-lg">
                                        {item}
                                    </p>
                                </div>
                            ))}

                        </div>
                    </div>

                    <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-xl shadow-black/5">

                        <p className="uppercase tracking-widest text-sm font-semibold text-green-500">
                            Smart Tips
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
                            Tips to Find Cheap Flights
                        </h2>

                        <div className="mt-8 space-y-6">

                            {[
                                {

                                    desc: "Book your tickets in advance for better prices",
                                },
                                {

                                    desc: "Be flexible with travel dates and times",
                                },
                                {

                                    desc: "Look for weekday departures for lower fares",
                                },
                                {

                                    desc: "Compare multiple airlines before booking",
                                },
                                {

                                    desc: "Check seasonal offers and discounts",
                                },
                            ].map((tip, i) => (
                                <div
                                    key={i}
                                    className="flex gap-5 items-start    last:border-none"
                                >
                                    <div className="min-w-[50px] h-[40px] rounded-2xl bg-green-100 text-green-600 flex items-center justify-center text-xl font-bold">
                                        {i + 1}
                                    </div>

                                    <div>

                                        <p className="text-gray-600 mt-2 leading-relaxed">
                                            {tip.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}
