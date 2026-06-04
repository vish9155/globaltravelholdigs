import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Phone } from 'lucide-react';

const BookingForm = () => {
  const [tripType, setTripType] = useState('Round-Trip');
  const [travelerClass, setTravelerClass] = useState('Economy / 1 Traveler');
  
  const [isTripOpen, setIsTripOpen] = useState(false);
  const [isClassOpen, setIsClassOpen] = useState(false);

  const Dropdown = ({ label, options, value, setValue, isOpen, setIsOpen }) => (
    <div className="relative flex-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm font-semibold flex items-center justify-between hover:bg-gray-100 transition shadow-sm"
      >
        {value}
        <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-100 rounded-2xl shadow-xl z-50 overflow-hidden animate-in fade-in zoom-in duration-200">
          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => {
                setValue(opt);
                setIsOpen(false);
              }}
              className="px-4 py-3 text-sm font-medium hover:bg-green-50 hover:text-green-600 cursor-pointer transition-colors"
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="max-w-md w-full bg-white/40 rounded-[2.5rem] shadow-2xl p-8 flex flex-col gap-5 border border-gray-100">
      
      <div className="flex gap-3">
        <Dropdown 
          options={['Round-Trip', 'One Way', 'Multi-City']} 
          value={tripType} 
          setValue={setTripType} 
          isOpen={isTripOpen} 
          setIsOpen={setIsTripOpen} 
        />
        <Dropdown 
          options={['Business / 1 Traveler', 'First Class / 1 Traveler', 'Economy / 1 Traveler']} 
          value={travelerClass} 
          setValue={setTravelerClass} 
          isOpen={isClassOpen} 
          setIsOpen={setIsClassOpen} 
        />
      </div>

      <div className="flex flex-col border border-gray-300 rounded-3xl overflow-hidden shadow-sm">
        <input 
          type="text" 
          placeholder="Going from, airport or city" 
          className="p-5 hover:bg-gray-50 outline-none border-b border-gray-200 focus:bg-green-50/20 transition placeholder:text-black font-medium"
        />
        <input 
          type="text" 
          placeholder="Going to, airport or city" 
          className="p-5 hover:bg-gray-50 outline-none focus:bg-green-50/20 transition placeholder:text-black font-medium"
        />
      </div>

      <div className="grid grid-cols-2 border border-gray-300 rounded-3xl divide-x divide-gray-300 overflow-hidden shadow-sm">
        <div className="p-4 flex flex-col hover:bg-gray-50 transition cursor-pointer">
          <label className="text-[10px] uppercase font-bold text-black tracking-wider">Departure</label>
          <input type="date" className="bg-transparent outline-none font-bold text-black mt-1 cursor-pointer" />
        </div>
        <div className="p-4 flex flex-col hover:bg-gray-50 transition cursor-pointer">
          <label className="text-[10px] uppercase font-bold text-black tracking-wider">Return</label>
          <input type="date"  className="bg-transparent outline-none font-bold text-black mt-1 cursor-pointer" />
        </div>
      </div>

      <button className="w-full  cursor-pointer bg-[#1a1a1a] hover:bg-black text-white py-5 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-lg shadow-black/10">
        Book Now 
        <span className="text-2xl leading-none">›</span>
      </button>

      <div className="relative flex items-center py-2">
        <div className="flex-grow border-t border-gray-200 border-dashed"></div>
        <span className="flex-shrink mx-4 text-black text-xs font-bold uppercase tracking-tighter">or</span>
        <div className="flex-grow border-t border-gray-200 border-dashed"></div>
      </div>

      <div className="flex items-center justify-between border border-green-100 bg-green-50/40 rounded-full p-2.5 pl-5 cursor-pointer hover:bg-green-50 transition shadow-sm">
        <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-sm">
                 <img src="https://i.pravatar.cc/100" alt="Agent" className="w-full h-full object-cover" />
            </div>
            <div>
                <p className="text-[12px] font-extrabold text-gray-900">Call us </p>
                <p className="text-[10px] text-green-600 font-bold uppercase tracking-wide">Phone-exclusive savings</p>
            </div>
        </div>
        <div className="w-11 h-11 rounded-full bg-white border border-green-200 flex items-center justify-center text-green-600 shadow-md">
            <Phone size={18} fill="currentColor" />
        </div>
      </div>
    </div>
  );
};

export default BookingForm
