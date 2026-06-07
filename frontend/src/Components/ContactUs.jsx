import { MapPin, Phone } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
import { FaEnvelope } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactUs() {

    let [input, setInput] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    })

    let [loading, setLoading] = useState(false)

    let formInput = (e) => {

        setInput({
            ...input, [e.target.name]: e.target.value
        })
    }

    let formHandle = async (e) => {
        try {

            e.preventDefault()
            setLoading(true)
            let data = await fetch("https://www.globaltravel-holdings.com/enquiry/user", {
                method: "POST", credentials: "include", headers: {

                    "Content-Type": "application/json"
                },
                body: JSON.stringify(input)
            })

            let result = await data.json()

            if (!result.status) {

             return   toast.error(result.message)

            }
            toast.success(result.message)
            setLoading(false)

        } catch (error) {
            toast.error(error.message)

        }
        finally {
            setLoading(false)
        }
    }

    return (
        <>

            <section className="relative w-full h-[45vh] sm:h-[55vh] md:h-[85vh] overflow-hidden">

                <img
                    src="/images/banner/contact.jpg.jpeg"
                    alt="" className=' w-full h-full object-cover'
                />
  {/* <div className="absolute inset-0 bg-black/30"></div> */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>


                {/* <div className="relative z-10 flex items-center justify-center h-full text-center">
                    <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-wide animate-fadeIn">
                        Let’s Connect
                    </h1>
                </div> */}
            </section>

            <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">

                <div className="bg-white/70 backdrop-blur-2xl p-8 rounded-3xl shadow-2xl h-[400px] border border-gray-200">

                    <h2 className="text-2xl font-bold mb-6">Contact Info</h2>

                    <div className="space-y-6 text-gray-700">

                        <div>
                            <p className="font-semibold flex gap-2"><MapPin size={24} /> Address</p>
                            <p className="text-sm">
                                7260 W Azure Dr, Las Vegas, USA
                            </p>
                        </div>

                        <div>
                            <p className="font-semibold flex gap-2"><FaEnvelope className='text-lg' /> Email</p>
                            <NavLink to="mailto:support@gmail.com" className="text-green-600 hover:underline">
                                support@gmail.com
                            </NavLink>
                        </div>

                        <div>
                            <p className="font-semibold flex gap-2"><Phone size={24} /> Phone</p>
                            <NavLink to="tel:+1 8888434146" className="text-green-600 hover:underline">
                                +1 8888434146
                            </NavLink>
                        </div>


                        <Link
                            to="https://wa.me/+1 8888434146"
                            target="_blank"
                            className="block text-center w-full py-3 rounded-xl bg-gradient-to-r from-green-500 to-gray-500 text-white font-semibold text-lg shadow-lg hover:scale-105 transition-all duration-300"
                        >
                            Chat On WhatsApp
                        </Link>

                    </div>




                </div>


                <div className="bg-white/60 backdrop-blur-2xl p-8 rounded-3xl shadow-2xl border border-gray-200">

                    <h2 className="text-2xl font-bold mb-6 text-center">
                        Send Message
                    </h2>

                    <form className="space-y-6" onSubmit={formHandle}>



                        <div className="relative">
                            <input type="text" required className="peer w-full border p-3 rounded-xl outline-none" />
                            <label className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-green-600 bg-white px-1">
                                Name*
                            </label>
                        </div>

                        <div className="relative">
                            <input type="tel" required className="peer w-full border p-3 rounded-xl outline-none" />
                            <label className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-green-600 bg-white px-1">
                                Phone*
                            </label>
                        </div>

                        <div className="relative">
                            <input type="email" required className="peer w-full border p-3 rounded-xl outline-none" />
                            <label className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-green-600 bg-white px-1">
                                Email*
                            </label>
                        </div>

                        <div className="relative">
                            <textarea rows={4} required className="peer w-full border p-3 rounded-xl outline-none resize-none"></textarea>
                            <label className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-green-600 bg-white px-1">
                                Message*
                            </label>
                        </div>


                        <button className="w-full py-3 rounded-xl bg-gradient-to-r from-green-500 to-gray-500 text-white font-semibold text-lg shadow-lg hover:scale-105 transition-all duration-300">
                            Send Message
                        </button>

                    </form>

                </div>

            </section>
            <div className="mt-6 mb-10 p-3 bg-white rounded-4xl md:rounded-2xl max-w-7xl mx-auto overflow-hidden">
                <iframe
                    title="map"
                    src="https://maps.google.com/maps?q=las%20vegas&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-[400px] border-none"
                ></iframe>
            </div>


            <style>
                {`
                .animate-fadeIn {
                    animation: fadeIn 1.5s ease-in-out;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                `}
            </style>
        </>
    )
}
