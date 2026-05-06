import React, { useEffect, useState } from "react";
import {
  Home,
  User,
  Lock,
  LogOut,
  LogIn,
  Menu,
  X,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import ProfileHome from "../../Components/profile/ProfileHome";
import ProfileUpdate from "../../Components/profile/ProfileUpdate";
import ChangePassword from "../../Components/profile/ProfilePasswordChange";
import Logout from "./Logout";

export default function ProfilePage() {
  let navigate = useNavigate();
  let [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  let isLoggedIn = localStorage.getItem("login");

  let [activeTab, setActiveTab] = useState("Home");
  let [sidebarOpen, setSidebarOpen] = useState(true);
  let [mobileOpen, setMobileOpen] = useState(false);

  let tabs = [
    { name: "Home", icon: <Home size={18} /> },
    { name: "Profile", icon: <User size={18} /> },
    { name: "Change Password", icon: <Lock size={18} /> },

    isLoggedIn
      ? { name: "Logout", icon: <LogOut size={18} /> }
      : { name: "Login", icon: <LogIn size={18} /> },
  ];

  let handleTabClick = (tabName) => {
    if (tabName === "Login") {
      navigate("/login");
      return;
    }

    setActiveTab(tabName);
    setMobileOpen(false);
  };

  return (
    <div className="min-h-screen flex bg-gray-100 relative">
      {/* Desktop Sidebar */}
      <div
        className={`hidden md:flex flex-col bg-gray-900 text-white ${sidebarOpen ? "w-64" : "w-20"
          } transition-all duration-300 min-h-screen`}
      >
        <div
          className="p-4 cursor-pointer"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu />
        </div>

        <div className="mt-5 space-y-2">
          {tabs.map((tab, index) => (
            <div
              key={index}
              onClick={() => handleTabClick(tab.name)}
              className={`flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-700 transition
              ${activeTab === tab.name ? "bg-gray-700" : ""}`}
            >
              {tab.icon}
              {sidebarOpen && <span>{tab.name}</span>}
            </div>
          ))}
        </div>
      </div>

      <div
        className={`md:hidden fixed left-0 w-full bg-white shadow px-4 py-4 flex justify-between items-center  transition-all duration-300 ${isScrolled ? "top-0" : "top-15"
          }`}
      >
        <Menu
          size={20}
          className="cursor-pointer"
          onClick={() => setMobileOpen(true)}
        />
        <span className="font-semibold">{activeTab}</span>
      </div>

      {/* Mobile Sidebar Drawer */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setMobileOpen(false)}
          />

          <div className="fixed top-0 left-0 h-full w-64 bg-gray-900 text-white z-50 p-4">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-semibold">Menu</span>

              <X
                onClick={() => setMobileOpen(false)}
                className="cursor-pointer"
              />
            </div>

            {tabs.map((tab, index) => (
              <div
                key={index}
                onClick={() => handleTabClick(tab.name)}
                className={`flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-700 transition
                ${activeTab === tab.name ? "bg-gray-700" : ""}`}
              >
                {tab.icon}
                <span>{tab.name}</span>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full">
        {/* Header */}
        <div className="bg-white shadow px-6 py-4 font-semibold text-lg md:mt-0 mt-[72px]">
          {activeTab}
        </div>

        {/* Page Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          {activeTab === "Home" && <ProfileHome />}

          {activeTab === "Profile" && <ProfileUpdate />}

          {activeTab === "Change Password" && (
            <ChangePassword />
          )}

          {activeTab === "Logout" && isLoggedIn && (
            <Logout />
          )}
        </div>
      </div>
    </div>
  );
}