import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  LogOut,
  ShieldCheck,
  Plane,
  Loader2,
} from "lucide-react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Logout() {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      let resp = await fetch(
        "http://localhost:5000/user/logout",
        {
          method: "GET",
          credentials: "include",
        }
      );

      resp = await resp.json();

      if (!resp.status) {
        return toast.error(resp.message);
      }

      toast.success(resp.message);

      localStorage.clear();

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  useEffect(() => {
    logout();
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 text-white px-8 py-8">
          <div className="flex items-center gap-4">
            <div className="bg-white/10 p-4 rounded-2xl">
              <LogOut size={30} />
            </div>

            <div>
              <h1 className="text-3xl font-bold">
                Logging You Out
              </h1>
              <p className="text-slate-200 mt-1">
                Securing your travel account safely
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Info */}
            <div>
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <ShieldCheck
                    className="text-slate-700"
                    size={22}
                  />
                  <p className="text-slate-700 font-medium">
                    Your session is being securely closed
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Plane
                    className="text-slate-700"
                    size={22}
                  />
                  <p className="text-slate-700 font-medium">
                    Travel data is protected safely
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Loader2
                    className="animate-spin text-slate-700"
                    size={22}
                  />
                  <p className="text-slate-700 font-medium">
                    Redirecting to login page...
                  </p>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="bg-slate-50 rounded-3xl border p-8 flex flex-col items-center justify-center text-center">
              <div className="w-24 h-24 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-lg">
                <LogOut size={38} />
              </div>

              <h2 className="text-2xl font-bold text-slate-800 mt-6">
                Logout Successful
              </h2>

              <p className="text-slate-500 mt-3">
                Thank you for using our flight booking
                platform. See you on your next journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}