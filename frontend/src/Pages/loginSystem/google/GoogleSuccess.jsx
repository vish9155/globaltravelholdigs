import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, Globe, Plane } from "lucide-react";

export default function GoogleSuccess() {
    let navigate = useNavigate();

    useEffect(() => {
        let handleGoogleLogin = async () => {
            try {
                let resp = await fetch("http://localhost:5000/user/me", {
                    method: "GET",
                    credentials: "include"
                });

                let data = await resp.json();
                console.log(data);

                if (data.user || data.status) {
                    localStorage.setItem("login", "true");
                    localStorage.setItem("userId", data.user?._id || "");
                    localStorage.setItem("role", data.user?.role || "");

                    setTimeout(() => {
                        navigate("/");
                    }, 3000);
                } else {
                    navigate("/login");
                }
            } catch (error) {
                console.log(error);
                navigate("/login");
            }
        };

        handleGoogleLogin();
    }, [navigate]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 flex items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-md"
            >
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 text-center">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="flex justify-center mb-6"
                    >
                        <div className="relative">
                            <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center border border-green-400/30">
                                <CheckCircle className="w-12 h-12 text-green-400" />
                            </div>
                            <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center shadow-lg">
                                <Plane className="w-5 h-5 text-white" />
                            </div>
                        </div>
                    </motion.div>

                    <div className="flex items-center justify-center gap-2 mb-3">
                        <Globe className="w-5 h-5 text-cyan-300" />
                        <h1 className="text-2xl font-bold text-white">
                            Global Travel Holdings
                        </h1>
                    </div>

                    <h2 className="text-xl font-semibold text-white mb-2">
                        Google Login Successful 
                    </h2>

                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                        Welcome back! Your account has been securely authenticated.
                        Redirecting you to your dashboard...
                    </p>

                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 3, ease: "linear" }}
                            className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full"
                        />
                    </div>

                    <p className="text-xs text-slate-400 mt-4">
                        Please wait while we prepare your travel experience.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}