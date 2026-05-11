import { Menu, X, User, ChevronDown } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  let [open, setOpen] = useState(false);

  let [isLangOpen, setIsLangOpen] = useState(false);
  let [currentLang, setCurrentLang] = useState("EN");
  let langRef = useRef(null);

  let languages = [
    { name: "English", code: "en", label: "EN" },
    { name: "Hindi", code: "hi", label: "HI" },
    { name: "Spanish", code: "es", label: "ES" },
    { name: "Chinese (Simplified)", code: "zh-CN", label: "ZH" },
    { name: "Arabic", code: "ar", label: "AR" },
    { name: "French", code: "fr", label: "FR" },
    { name: "Russian", code: "ru", label: "RU" },
    { name: "Portuguese", code: "pt", label: "PT" },
    { name: "German", code: "de", label: "DE" },
  ];

  let navbar = [
    { title: "Home", path: "/" },
    { title: "Flights", path: "/flights" },
    { title: "Hotels", path: "/hotels" },
    { title: "Cars", path: "/cars" },
    { title: "Cruise", path: "/cruise" },
    { title: "Packages", path: "/packages" },
  ];

  // Language Change
  let handleLangChange = (langCode, label) => {
    document.cookie = `googtrans=/en/${langCode}; path=/`;
    document.cookie = `googtrans=/en/${langCode}; domain=.localhost; path=/`;
    setCurrentLang(label);
    window.location.reload();
  };

  // Google Script Load
  useEffect(() => {
    let addScript = document.createElement("script");
    addScript.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    addScript.async = true;
    document.body.appendChild(addScript);

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

    let match = document.cookie.match(/googtrans=\/en\/(\w+)/);
    if (match) {
      let lang = languages.find((l) => l.code === match[1]);
      if (lang) setCurrentLang(lang.label);
    }

    let handleClickOutside = (e) => {
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
{/*
      <div
        id="google_translate_element"
        style={{ visibility: "hidden", position: "absolute", zIndex: -1 }}
      ></div>


     <section className="w-full h-16 flex items-center justify-between px-5 bg-black/50 text-white shadow-lg top-0 z-[999] relative overflow-visible">


        <div className="flex items-center gap-4">
          <Menu
            size={26}
            className="cursor-pointer md:hidden hover:scale-110 transition"
            onClick={() => setOpen(true)}
          />

          <h1 className="text-xl md:text-2xl font-bold tracking-wide">
            <span className="text-cyan-400">Gl</span>
            <span className="text-pink-400">ob</span>
            <span className="text-orange-400">al</span>
            <span className="text-cyan-400">Tr</span>
            <span className="text-pink-400">av</span>
            <span className="text-orange-400">el</span>
          </h1>
        </div>


        <div className="md:flex gap-10 hidden">
          {navbar.map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              className="text-lg font-medium tracking-wide hover:translate-x-2 transition duration-300 hover:text-yellow-400"
            >
              {item.title}
            </NavLink>
          ))}
        </div>


        <div className="flex items-center gap-4">


          <div className="relative" ref={langRef}>
            

            <div className="relative z-[9999]" ref={langRef}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1 text-sm font-bold"
              >
                {currentLang}
                <ChevronDown size={14} />
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white text-black rounded-xl shadow-2xl overflow-hidden">
                  {languages.map((lang) => (
                    <div
                      key={lang.code}
                      onClick={() => handleLangChange(lang.code, lang.label)}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm font-medium"
                    >
                      {lang.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <NavLink to={'/profile'} className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition cursor-pointer">
            <User size={18} />
          </NavLink>
        </div>
      </section>

*/}

<div className={`fixed inset-0 z-[9999] transition-all duration-500 ${open ? "visible" : "invisible"}`}>
  
  <div
    className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${
      open ? "opacity-100" : "opacity-0"
    }`}
    onClick={() => setOpen(false)}
  />

  <div
    className={`absolute left-0 top-0 h-full w-[280px] sm:w-[350px] bg-white text-black shadow-2xl transform transition-transform duration-500 ease-out ${
      open ? "translate-x-0" : "-translate-x-full"
    } flex flex-col`}
  >
    <div className="flex justify-between items-center p-6 border-b border-gray-100">
      <h2 className="text-2xl font-extrabold tracking-tight text-gray-800">Menu</h2>
      <div 
        className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
        onClick={() => setOpen(false)}
      >
        <X size={24} className="text-gray-500 hover:rotate-90 transition-transform duration-300" />
      </div>
    </div>

    <nav className="flex flex-col gap-2 p-6">
      {navbar.map((item, i) => (
        <NavLink
          key={i}
          to={item.path}
          onClick={() => setOpen(false)}
          className={({ isActive }) => `
            text-lg font-semibold py-3 px-4 rounded-xl transition-all duration-200
            ${isActive ? "bg-orange-50 text-orange-600" : "hover:bg-gray-50 hover:pl-6 text-gray-700"}
          `}
        >
          {item.title}
        </NavLink>
      ))}
    </nav>

    <div className="mt-auto p-6 border-t border-gray-100">
        <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Global Logo © 2026</p>
    </div>
  </div>
</div>

<section className="w-full h-20 flex items-center justify-between px-6 md:px-12  backdrop-blur-lg bg-white/35 text-black sticky top-0 z-[999] border-b border-white/10">

  <div className="flex items-center gap-6">
    <Menu
      size={28}
      className="cursor-pointer md:hidden hover:text-orange-500 transition-colors"
      onClick={() => setOpen(true)}
    />
    <div className="flex items-center">
      <img 
        src="/images/Global logo final.png" 
        alt="Logo"  
        className="h-16 w-auto object-contain hover:scale-105 transition-transform duration-300 filter drop-shadow-[0px_4px_20px_rgba(0,31,63,0.1)]"
      />
    </div>
  </div>

  <div className="flex items-center gap-8">

    <nav className="hidden md:flex gap-8 items-center">
      {navbar.map((item, i) => (
        <NavLink
          key={i}
          to={item.path}
          className="text-[15px] font-semibold tracking-wide relative group uppercase"
        >
          {item.title}
          <span className="absolute -bottom-2 left-1/2 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </NavLink>
      ))}
    </nav>

    <div className="flex items-center gap-4">
      <div className="relative" ref={langRef}>
        <button
          onClick={() => setIsLangOpen(!isLangOpen)}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 text-xs font-bold transition"
        >
          <span className="text-orange-500">•</span> {currentLang}
          <ChevronDown size={14} className={`transition-transform ${isLangOpen ? "rotate-180" : ""}`} />
        </button>

        {isLangOpen && (
          <div className="absolute right-0 mt-3 w-44 bg-white text-black rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in zoom-in duration-200">
            {languages.map((lang) => (
              <div
                key={lang.code}
                onClick={() => handleLangChange(lang.code, lang.label)}
                className="px-4 py-3 hover:bg-orange-50 hover:text-orange-600 cursor-pointer text-sm font-semibold transition-colors border-b last:border-0 border-gray-50"
              >
                {lang.name}
              </div>
            ))}
          </div>
        )}
      </div>

      <NavLink
        to="/profile"
        className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/20 hover:scale-110 active:scale-95 transition-all"
      >
        <User size={20} strokeWidth={2.5} />
      </NavLink>
    </div>
  </div>
</section>
    </>
  );
}
