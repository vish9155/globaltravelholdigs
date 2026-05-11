import React, { useCallback, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css';
import "react-toastify/dist/ReactToastify.css";
import {
    Lock,
    Eye,
    EyeOff,
    ShieldCheck,
    KeyRound,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ChangePassword() {
    let id=localStorage.getItem("userId")
    let [showOldPassword, setShowOldPassword] = useState(false);
    let [showNewPassword, setShowNewPassword] = useState(false);
    let [showConfirmPassword, setShowConfirmPassword] = useState(false);
    let [loading, setLoading] = useState(false)
   let navigate=useNavigate()
    let [form, setForm] = useState({
        confirmpass: "",
        newpass: "",
        oldpass: ""
    })

    let formInput =useCallback( (e) => {
   
           setForm({
               ...form, [e.target.name]: e.target.value
           })
       },[])
    let formHandle = async (e) => {
        try {
            e.preventDefault();
            setLoading(true);

           

            let resp = await fetch("https://www.globaltravel-holdings.com/user/password-reset/" + id, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            });

            let data = await resp.json();

            if (!data.status) {
                toast.error(data.message);
                return
            }
            // console.log(data)
            toast.success(data.message);
            navigate("/profile")
        } catch (err) {
            toast.error(err.message)
        } finally {
            setLoading(false);
        }
    };
    return (
        <section className="max-w-4xl mx-auto">
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

                <div className="bg-gradient-to-r from-slate-900 to-slate-700 px-8 py-8 text-white">
                    <div className="flex items-center gap-3">
                        <ShieldCheck size={28} />
                        <div>
                            <h1 className="text-3xl font-bold">
                                Change Password
                            </h1>
                            <p className="text-sm text-slate-200 mt-1">
                                Keep your account secure by updating your password regularly
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="p-8 grid md:grid-cols-2 gap-8">
                    {/* Left Side Info */}
                    <div className="bg-slate-50 rounded-2xl p-6 border">
                        <div className="flex items-center gap-3 mb-4">
                            <KeyRound className="text-slate-700" size={24} />
                            <h2 className="text-xl font-semibold">
                                Security Tips
                            </h2>
                        </div>

                        <ul className="space-y-3 text-sm text-gray-600">
                            <li>• Use at least 8 characters</li>
                            <li>• Include uppercase & lowercase letters</li>
                            <li>• Add numbers and special characters</li>
                            <li>• Don’t reuse old passwords</li>
                            <li>• Keep your account secure for safe bookings</li>
                        </ul>
                    </div>


                    <form onSubmit={formHandle} className="space-y-6">

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Current Password
                            </label>

                            <div className="relative">
                                <input
                                    name="oldpass"
                                    type={showOldPassword ? "text" : "password"}
                                    placeholder="Enter current password"
                                    className="w-full border rounded-xl px-4 py-3 pr-12 outline-none focus:ring-2 focus:ring-slate-400"
                                    onChange={forminput}
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowOldPassword(!showOldPassword)
                                    }
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                                >
                                    {showOldPassword ? (
                                        <EyeOff size={20} />
                                    ) : (
                                        <Eye size={20} />
                                    )}
                                </button>
                            </div>
                        </div>

 
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                New Password
                            </label>

                            <div className="relative">
                                <input
                                    name="newpass"
                                    type={showNewPassword ? "text" : "password"}
                                    placeholder="Enter new password"
                                    className="w-full border rounded-xl px-4 py-3 pr-12 outline-none focus:ring-2 focus:ring-slate-400"
                                    onChange={forminput}
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowNewPassword(!showNewPassword)
                                    }
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                                >
                                    {showNewPassword ? (
                                        <EyeOff size={20} />
                                    ) : (
                                        <Eye size={20} />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Confirm New Password
                            </label>

                            <div className="relative">
                                <input
                                    name="confirmpass"
                                    
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Confirm new password"
                                    className="w-full border rounded-xl px-4 py-3 pr-12 outline-none focus:ring-2 focus:ring-slate-400"
                                    onChange={forminput}
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowConfirmPassword(!showConfirmPassword)
                                    }
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                                >
                                    {showConfirmPassword ? (
                                        <EyeOff size={20} />
                                    ) : (
                                        <Eye size={20} />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Button */}
                        <button className="w-full cursor-pointer bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl font-semibold text-lg transition">
                            Update Password
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}