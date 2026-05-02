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

    // Cookie check
    let match = document.cookie.match(/googtrans=\/en\/(\w+)/);
    if (match) {
      let lang = languages.find((l) => l.code === match[1]);
      if (lang) setCurrentLang(lang.label);
    }

    // Close dropdown
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

      <div
        id="google_translate_element"
        style={{ visibility: "hidden", position: "absolute", zIndex: -1 }}
      ></div>


     <section className="w-full h-16 flex items-center justify-between px-5 bg-gradient-to-r from-[#2b003f] via-[#3a005a] to-[#1a002b] text-white shadow-lg top-0 z-[999] relative overflow-visible">


        <div className="flex items-center gap-4">
          <Menu
            size={26}
            className="cursor-pointer hover:scale-110 transition"
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


      <div
        className={`fixed inset-0 z-[9999] transition ${open ? "visible" : "invisible"
          }`}
      >
        <div
          className={`absolute left-0 top-0 h-full w-[85%] md:w-[350px] bg-gradient-to-b from-[#2b003f] via-[#3a005a] to-[#1a002b] text-white shadow-2xl p-6 transform transition duration-300 ${ open ? "translate-x-0" : "-translate-x-full" }`}
          onClick={() => setOpen(false)}
        />

        {/* SIDEBAR */}
<div
  className={`fixed inset-0 z-[9999] transition ${
    open ? "visible" : "invisible"
  }`}
>
  {/* BACKDROP */}
  <div
    className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition ${
      open ? "opacity-100" : "opacity-0"
    }`}
    onClick={() => setOpen(false)}
  />

  {/* SIDEBAR PANEL */}
  <div
    className={`absolute left-0 top-0 h-full w-[85%] sm:w-[320px] bg-gradient-to-b from-[#2b003f] via-[#3a005a] to-[#1a002b] text-white p-6 transform transition duration-300 ease-in-out ${
      open ? "translate-x-0" : "-translate-x-full"
    } flex flex-col`}
  >
    {/* HEADER */}
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-bold">Menu</h2>
      <X
        onClick={() => setOpen(false)}
        className="cursor-pointer hover:rotate-90 transition"
      />
    </div>

    {/* NAV LINKS */}
    <div className="flex flex-col gap-4">
      {navbar.map((item, i) => (
        <NavLink
          key={i}
          to={item.path}
          onClick={() => setOpen(false)}
          className="text-lg font-medium py-2 border-b border-white/10 hover:text-yellow-400 transition"
        >
          {item.title}
        </NavLink>
      ))}
    </div>

   

   
  </div>
</div>
      </div>
    </>
  );
}
