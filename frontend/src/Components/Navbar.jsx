import { Menu, X, User, ChevronDown } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  let [open, setOpen] = useState(false);

  let [isLangOpen, setIsLangOpen] = useState(false);
  let [currentLang, setCurrentLang] = useState("EN");
  let langRef = useRef(null);

   const languages = [
    { name: "English", code: "en", label: "EN" },
    { name: "Hindi", code: "hi", label: "HI" },
    { name: "Spanish", code: "es", label: "ES" },
    { name: "Chinese", code: "zh-CN", label: "ZH" },
    { name: "Arabic", code: "ar", label: "AR" },
    { name: "French", code: "fr", label: "FR" },
    { name: "Russian", code: "ru", label: "RU" },
    { name: "Portuguese", code: "pt", label: "PT" },
    { name: "German", code: "de", label: "DE" },
  ];

  const navbar = [
    { title: "Home", path: "/" },
    { title: "Flights", path: "/flights" },
    { title: "Hotels", path: "/hotels" },
    { title: "Cars", path: "/cars" },
    { title: "Cruise", path: "/cruise" },
    { title: "Packages", path: "/packages" },
  ];

  const handleLangChange = (langCode, label) => {
    document.cookie = `googtrans=/en/${langCode}; path=/`;
    setCurrentLang(label);
    setIsLangOpen(false);

    window.location.href = window.location.href;
  };

  useEffect(() => {
    if (!window.googleTranslateElementInit) {
      const script = document.createElement("script");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi,es,zh-CN,ar,fr,ru,pt,de",
            autoDisplay: false,
          },
          "google_translate_element"
        );
      };
    }

    const match = document.cookie.match(/googtrans=\/en\/(\w+)/);
    if (match) {
      const lang = languages.find((l) => l.code === match[1]);
      if (lang) setCurrentLang(lang.label);
    }

    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setIsLangOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const frame = document.querySelector(".goog-te-banner-frame");
      if (frame) frame.remove();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);


  return (
    <>
      <div id="google_translate_element" style={{ display: "none" }} />


<div className={`fixed inset-0 z-[9999] transition-all duration-500 ${open ? "visible" : "invisible"}`}>
  
  <div
    className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${
      open ? "opacity-100" : "opacity-0"
    }`}
    onClick={() => setOpen(false)}
  />

  <div
    className={`absolute left-0 top-0 h-full w-[280px] sm:w-[350px] bg-white text-[#111111] shadow-2xl transform transition-transform duration-500 ease-out ${
      open ? "translate-x-0" : "-translate-x-full"
    } flex flex-col`}
  >
    <div className="flex justify-between items-center p-6 border-b border-gray-100">
      <h2 className="text-xl font-black tracking-tight text-[#111111] uppercase">Menu</h2>
      <div 
        className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
        onClick={() => setOpen(false)}
      >
        <X size={22} className="text-gray-500 hover:text-[#111111] hover:rotate-90 transition-all duration-300" />
      </div>
    </div>

    <nav className="flex flex-col gap-1.5 p-5">
      {navbar.map((item, i) => (
        <NavLink
          key={i}
          to={item.path}
          onClick={() => setOpen(false)}
          className={({ isActive }) => `
            text-base font-bold py-3 px-4 rounded-xl transition-all duration-200 uppercase tracking-wide
            ${isActive ? "bg-emerald-50 text-emerald-600" : "hover:bg-gray-50 hover:pl-6 text-gray-700 hover:text-[#111111]"}
          `}
        >
          {item.title}
        </NavLink>
      ))}
    </nav>

    <div className="mt-auto p-6 border-t border-gray-100 bg-gray-50/50">
        <p className="text-[10px] text-gray-400 uppercase tracking-widest font-black">Global Logo © 2026</p>
    </div>
  </div>
</div>

<section className="w-full h-20 flex items-center justify-between px-6 md:px-12 bg-white/90 backdrop-blur-md text-[#111111] sticky top-0 z-[999] border-b border-gray-100 shadow-sm">

  <div className="flex items-center gap-5">
    <Menu
      size={26}
      className="cursor-pointer md:hidden text-[#111111] hover:text-emerald-500 transition-colors"
      onClick={() => setOpen(true)}
    />
    <div className="flex items-center">
      <Link to="/">
        <img 
          src="/images/New Folder/dsbsvd.png" 
          alt="Logo"  
          className="h-18 w-auto object-contain  transition-transform duration-300"
        />
      </Link>
    </div>
  </div>

  <div className="flex items-center gap-10 tracking-[1.5px]">

    <nav className="hidden md:flex gap-10 items-center tracking-[1.5px]">
      {navbar.map((item, i) => (
        <NavLink
          key={i}
          to={item.path}
          className={({ isActive }) => `
            text-[14px] font-['Poppins'] font-bold tracking-wider relative group uppercase transition-colors duration-200
            ${isActive ? "text-emerald-600" : "text-[#111111] hover:text-emerald-600"}
          `}
        >
          {item.title}
          <span className="absolute -bottom-1.5 left-1/2 w-0 h-[2px] bg-emerald-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </NavLink>
      ))}
    </nav>

    <div className="flex items-center gap-4">
      
      <div className="relative" ref={langRef}>
        <button
          onClick={() => setIsLangOpen(!isLangOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-full border border-gray-200 text-xs font-black text-gray-700 uppercase tracking-wider transition-all duration-200"
        >
          <span className="text-emerald-500 text-sm animate-pulse">•</span> {currentLang}
          <ChevronDown size={14} className={`text-gray-500 transition-transform duration-300 ${isLangOpen ? "rotate-180" : ""}`} />
        </button>

        {isLangOpen && (
          <div className="absolute right-0 mt-3 w-48 bg-white text-[#111111] rounded-2xl shadow-xl border border-gray-100 overflow-hidden animate-in fade-in zoom-in duration-200 z-[1000]">
            {languages.map((lang) => (
              <div
                key={lang.code}
                onClick={() => handleLangChange(lang.code, lang.label)}
                className="px-4 py-3.5 hover:bg-emerald-50 hover:text-emerald-600 cursor-pointer text-xs font-bold uppercase tracking-wide transition-colors border-b last:border-0 border-gray-50"
              >
                {lang.name}
              </div>
            ))}
          </div>
        )}
      </div>

      <NavLink
        to="/profile"
        className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 hover:bg-emerald-600 hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <User size={18} strokeWidth={2.5} />
      </NavLink>
    </div>
  </div>
</section>
</>
    
  );
}
