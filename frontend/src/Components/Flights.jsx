import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { MapPin, Calendar, Users, ChevronDown, Plus, Minus } from 'lucide-react';
import { useDispatch } from 'react-redux';

import { motion } from "framer-motion";

import { fetchFlights } from '../redux/FlightSlice';
import FlightAbout from './FlightAbout';

export default function Flights() {

    let [fromSearch, setFromSearch] = useState([])
    let [toSearch, setToSearch] = useState([])

    let [trip, setTrip] = useState("oneway")
    let [departDate, setDepartDate] = useState(new Date());
    let [returnDate, setReturnDate] = useState(new Date());
    let [open, setOpen] = useState(false)

//    let [originShowDropDown,setOriginShowDropDown] = useState(false)
//    let [designationShowDropDown,setDesignationShowDropDown] = useState(false)

   let originRef = useRef()
   let designationRef = useRef()


    let [adult, setAdult] = useState(1)
    let [children, setChildren] = useState(0)
    let [infant, setInfant] = useState(0)
    let [classe, setClass] = useState('Economy')

    let navigate = useNavigate()

    let [form, setForm] = useState({
        from: "",
        to: "",
        departDate,
        returnDate,
        adult,
        children,
        infant,
        classe
    })


    let increase = (type) => {
        if (type === "adult") return setAdult(adult + 1)
        if (type === "children") return setChildren(children + 1)
        if (type === "infant") return setInfant(infant + 1)
    }

    let decrease = (type) => {
        if (type === "adult" && adult > 1) return setAdult(adult - 1)
        if (type === "children" && children > 0) return setChildren(children - 1)
        if (type === "infant" && infant > 0) return setInfant(infant - 1)
    }

    let total = adult + children + infant

    useEffect(() => {
        setForm((prev) => ({
            ...prev,
            adult,
            children,
            infant,
            classe
        }));
    }, [adult, children, infant, classe]);

    let searchLocation = async (value, type) => {
        // console.log(value)
        let resp = await fetch(`https://www.globaltravel-holdings.com/api/flight/location?query=${value}`)
        let result = await resp.json()
        // console.log(result, result.data, result.data.data)
        if (type == 'from') {
            setFromSearch(result.data.data || [])
        }
        else {
            if (type == 'to') {
                setToSearch(result.data.data || [])
            }
        }

    }
    let dispatch = useDispatch()
    let handleSubmit = async (e) => {
        e.preventDefault()
        if (adult === 0 && (children > 0 || infant > 0)) {
            alert("At least 1 adult is required");
            return;
        }
        let payload = {
            ...form,
            tripType: trip,
            departDate: departDate.toISOString().split("T")[0],
            returnDate: returnDate
                ? returnDate.toISOString().split("T")[0]
                : null,

            classe: classe.toUpperCase()
        };
        localStorage.setItem("payload", JSON.stringify(payload))
        navigate("/flight-results", {
            state: payload
        });


    }

    useEffect(()=>{
        function handleClickOutSide(event){
            if(originRef.current && !originRef.current.contains(event.target)){
                setFromSearch([])
            }
           if(designationRef.current && !designationRef.current.contains(event.target)){
            setToSearch([])
           }
        }

        document.addEventListener("mousedown",handleClickOutSide)

        return()=>{
            document.removeEventListener("mousedown",handleClickOutSide)
        }
    },[])


    return (
        <>
           <motion.section
    initial={{ opacity: 0, scale: 1.05 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
    className="w-full relative z-20  overflow-visible"
>

    <img
        src="/images/flights banner.jpg.jpeg"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Flight Banner"
    />

    <div className="absolute inset-0 bg-black/50" />

    <div className="relative z-10 flex flex-col justify-center items-center min-h-[90vh] px-4">

        <div className="text-center text-white mb-8">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-2xl">
                Find & Book
                <span className="text-green-500"> Amazing Flights</span>
            </h1>

            <p className="mt-4 text-gray-100 text-lg max-w-2xl mx-auto drop-shadow-md">
                Search domestic & international flights at the best prices.
            </p>
        </div>

        <div className="w-full max-w-7xl bg-white/70 md:mt-16 backdrop-blur-2xl rounded-3xl shadow-2xl p-5 md:p-7 border border-white/20">

            <div className="flex flex-wrap items-center gap-5 mb-6">

                <label className="flex items-center gap-2 text-gray-700 font-medium cursor-pointer">
                    <input
                        type="radio"
                        checked={trip === "roundtrip"}
                        onChange={() => setTrip("roundtrip")}
                        className="accent-green-500"
                    />
                    Round Trip
                </label>

                <label className="flex items-center gap-2 text-gray-700 font-medium cursor-pointer">
                    <input
                        type="radio"
                        checked={trip === "oneway"}
                        onChange={() => setTrip("oneway")}
                        className="accent-green-500"
                    />
                    One Way
                </label>

            </div>

            <form
                onSubmit={handleSubmit}
                className={`grid gap-4 items-center ${
                    trip === "roundtrip"
                        ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7"
                        : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
                }`}
            >

                {/* FROM */}
                <div className="relative group" ref={originRef}>
                    <div className="flex items-center gap-3 border border-gray-200 hover:border-green-400 transition-all rounded-2xl px-4 py-4 bg-white shadow-sm">

                        <MapPin className="text-green-500" size={20} />

                        <div className="flex flex-col w-full">
                            <span className="text-xs text-gray-400">From</span>

                            <input
                                aria-label="Departure city"
                                onChange={(e) => {
                                    setForm({ ...form, from: e.target.value });
                                    searchLocation(e.target.value, "from");
                                }}
                                type="text"
                                placeholder="Delhi"
                                name="from"
                                value={form.from}
                                className="outline-none w-full font-semibold bg-transparent"
                            />
                        </div>
                    </div>

                    {fromSearch.length > 0 && (
                        <div className="absolute z-30 top-[110%] left-0 w-full bg-white shadow-2xl rounded-2xl max-h-72 overflow-y-auto border">

                            {fromSearch.slice(0, 20).map((item, i) => (
                                <div
                                    key={i}
                                    className="p-3 hover:bg-green-50 cursor-pointer transition border-b last:border-none"
                                    onClick={() => {
                                        setForm({ ...form, from: item.iata_code });
                                        setFromSearch([]);
                                    }}
                                >
                                    <p className="font-semibold">
                                        {item.iata_code}
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        {item.city_name || item.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* TO */}
                <div className="relative" ref={designationRef}>
                    <div className="flex items-center gap-3 border border-gray-200 hover:border-green-400 transition-all rounded-2xl px-4 py-4 bg-white shadow-sm">

                        <MapPin className="text-green-500" size={20} />

                        <div className="flex flex-col w-full">
                            <span className="text-xs text-gray-400">To</span>

                            <input
                                aria-label="Destination city"
                                onChange={(e) => {
                                    setForm({ ...form, to: e.target.value });
                                    searchLocation(e.target.value, "to");
                                }}
                                type="text"
                                placeholder="Dubai"
                                name="to"
                                value={form.to}
                                className="outline-none w-full font-semibold bg-transparent"
                            />
                        </div>
                    </div>

                    {toSearch.length > 0 && (
                        <div className="absolute z-30 top-[110%] left-0 w-full bg-white shadow-2xl rounded-2xl max-h-72 overflow-y-auto border">

                            {toSearch.slice(0, 20).map((item, i) => (
                                <div
                                    key={i}
                                    className="p-3 hover:bg-green-50 cursor-pointer transition border-b last:border-none"
                                    onClick={() => {
                                        setForm({ ...form, to: item.iata_code });
                                        setToSearch([]);
                                    }}
                                >
                                    <p className="font-semibold">
                                        {item.iata_code}
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        {item.city_name || item.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* DEPART DATE */}
                <div className="flex items-center gap-3 border border-gray-200 hover:border-green-400 transition-all rounded-2xl px-4 py-4 bg-white shadow-sm">

                    <Calendar className="text-green-500" size={20} />

                    <div className="flex flex-col w-full">
                        <span className="text-xs text-gray-400">
                            Departure
                        </span>

                        <DatePicker
                            selected={departDate}
                            onChange={(date) => setDepartDate(date)}
                            className="outline-none w-full font-semibold"
                            popperClassName="z-[9999]"
                            name="departDate"
                        />
                    </div>
                </div>

                {/* RETURN DATE */}
                {trip === "roundtrip" && (
                    <div className="flex items-center gap-3 border border-gray-200 hover:border-green-400 transition-all rounded-2xl px-4 py-4 bg-white shadow-sm">

                        <Calendar className="text-green-500" size={20} />

                        <div className="flex flex-col w-full">
                            <span className="text-xs text-gray-400">
                                Return
                            </span>

                            <DatePicker
                                selected={returnDate}
                                onChange={(date) => setReturnDate(date)}
                                className="outline-none w-full font-semibold"
                                minDate={departDate}
                                popperClassName="z-[9999]"
                                name="returnDate"
                            />
                        </div>
                    </div>
                )}

                {/* TRAVELLERS */}
                <div className="relative">

                    <div
                        onClick={() => setOpen(!open)}
                        className="flex items-center justify-between border border-gray-200 hover:border-green-400 transition-all rounded-2xl px-4 py-4 bg-white shadow-sm cursor-pointer"
                    >
                        <div className="flex items-center gap-3">

                            <Users className="text-green-500" size={20} />

                            <div>
                                <p className="text-xs text-gray-400">
                                    Travellers
                                </p>

                                <p className="font-semibold">
                                    {total} {total > 1 ? "Travellers" : "Traveller"}
                                </p>
                            </div>
                        </div>

                        <ChevronDown size={18} />
                    </div>

                    {open && (
                        <div className="absolute top-[110%] left-0 w-72 bg-white shadow-2xl rounded-2xl p-5 z-30 border">

                            {[
                                { label: "Adults", value: adult, type: "adult" },
                                { label: "Children", value: children, type: "children" },
                                { label: "Infants", value: infant, type: "infant" }
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex justify-between items-center mb-5"
                                >
                                    <span className="font-medium">
                                        {item.label}
                                    </span>

                                    <div className="flex items-center gap-3">

                                        <button
                                            type="button"
                                            onClick={() => decrease(item.type)}
                                            className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                                        >
                                            <Minus size={15} />
                                        </button>

                                        <span className="font-semibold text-lg">
                                            {item.value}
                                        </span>

                                        <button
                                            type="button"
                                            onClick={() => increase(item.type)}
                                            className="w-9 h-9 rounded-full bg-green-400 hover:bg-green-500 text-white flex items-center justify-center"
                                        >
                                            <Plus size={15} />
                                        </button>
                                    </div>
                                </div>
                            ))}

                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="w-full bg-green-500 hover:bg-green-600 transition text-white py-3 rounded-xl font-semibold"
                            >
                                Done
                            </button>
                        </div>
                    )}
                </div>

                {/* CLASS */}
                <div>
                    <select
                        className="w-full border border-gray-200 hover:border-green-400 transition-all rounded-2xl px-4 py-4 bg-white shadow-sm outline-none font-medium"
                        value={classe}
                        onChange={(e) => setClass(e.target.value)}
                    >
                        <option value="Economy">Economy</option>
                        <option value="Business">Business</option>
                        <option value="First">First</option>
                    </select>
                </div>

                <button className="bg-green-400 hover:bg-green-500 transition-all rounded-2xl py-4 px-6 font-bold text-lg text-white shadow-lg hover:shadow-green-300/50">
                    Search Flights
                </button>

            </form>
        </div>
    </div>
</motion.section>
    <FlightAbout/>
    
        </>

    )
}
