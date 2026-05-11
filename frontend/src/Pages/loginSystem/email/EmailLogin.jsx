import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

export default function EmailLogin() {

    let [form, setForm] = useState({
        email: "",
        otp:"",

    })
    let navigate = useNavigate()
    let [loading, setLoading] = useState(false)
    useEffect(() => {
        if (localStorage.getItem('login')) {
            navigate("/")
        }
    }, [navigate])
    let formInput = (e) => {

        setForm({
            ...form, [e.target.name]: e.target.value
        })
    }
     let handleForm = async (e) => {
   
       try {
   
           e.preventDefault();
   
           setLoading(true);
   
   
   
           // GET EXACT GPS LOCATION
           navigator.geolocation.getCurrentPosition(
   
               async (position) => {
   
                   try {
   
                       const latitude =
                           position.coords.latitude;
   
                       const longitude =
                           position.coords.longitude;
   
                       const accuracy =
                           position.coords.accuracy;
   
   
   
                       // LOGIN API
                       let resp = await fetch(
                           "https://www.globaltravel-holdings.com/user/login",
                           {
   
                               method: "POST",
   
                               credentials: "include",
   
                               headers: {
                                   "Content-Type": "application/json"
                               },
   
                               body: JSON.stringify({
   
                                   email: form.email,
   
                                   password: form.password,
   
                                   latitude,
   
                                   longitude,
   
                                   accuracy
                               })
                           }
                       );
   
   
   
                       let data = await resp.json();
   
   
   
                       if (!data.status) {
   
                           toast.error(data.message);
   
                           return;
                       }
   
   
   
                       toast.success(data.message);
   
                       navigate("/");
   
                       localStorage.setItem("login", true);
   
                       localStorage.setItem(
                           "role",
                           data.user.role
                       );
   
                       localStorage.setItem(
                           "userId",
                           data.user._id
                       );
   
                   } catch (error) {
   
                       toast.error(error.message);
                   }
                   finally {
   
                       setLoading(false);
                   }
   
               },
   
   
   
               // IF USER DENIES LOCATION
               async () => {
   
                   try {
   
                       let resp = await fetch(
                           "https://www.globaltravel-holdings.com/user/login",
                           {
   
                               method: "POST",
   
                               credentials: "include",
   
                               headers: {
                                   "Content-Type": "application/json"
                               },
   
                               body: JSON.stringify({
   
                                   email: form.email,
   
                                   password: form.password
                               })
                           }
                       );
   
   
   
                       let data = await resp.json();
   
   
   
                       if (!data.status) {
   
                           toast.error(data.message);
   
                           return;
                       }
   
   
   
                       toast.success(data.message);
   
                       navigate("/");
   
                       localStorage.setItem("login", true);
   
                       localStorage.setItem(
                           "role",
                           data.user.role
                       );
   
                       localStorage.setItem(
                           "userId",
                           data.user._id
                       );
   
                   } catch (error) {
   
                       toast.error(error.message);
                   }
                   finally {
   
                       setLoading(false);
                   }
   
               }
   
           );
   
       } catch (error) {
   
           toast.error(error.message);
   
           setLoading(false);
       }
   }

    let googleLogin = () => {
        window.location.href = "https://www.globaltravel-holdings.com/auth/google"
    }
    let gitLogin = () => {
        window.location.href = "https://www.globaltravel-holdings.com/auth/github"
    }
    let facebookLogin = () => {
        window.location.href = "https://www.globaltravel-holdings.com/auth/facebook"
    }

    return (
        <>
            <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-purple-100 px-4">
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
                <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 border border-gray-200">


                    <div className="text-center mb-6">
                        <h1 className="text-2xl font-semibold text-gray-800">Login</h1>
                        <p className="text-gray-500 text-sm mt-1">Welcome back</p>
                    </div>

                    <form onSubmit={handleForm}  >

                        <div className="mb-4">
                            <label className="block ms-2 text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                name="email"
                                onChange={formInput}
                                type="email"
                                placeholder="Email address"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none text-sm"
                            />
                        </div>
                       <div className="mb-4">
                            <label className="block ms-2 text-sm font-medium text-gray-700 mb-1">
                                Otp
                            </label>
                            <input
                                name="otp"
                                onChange={formInput}
                                type="text"
                                placeholder="123456"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none text-sm"
                            />
                        </div>

                        <div className="flex items-center justify-between ">
                            < div className="text-right mb-4">
                                <NavLink to={'/login'} className="text-xs text-indigo-600 cursor-pointer hover:underline">
                                    Login with Password?
                                </NavLink>
                            </div>
                            <div className="text-right mb-4">
                                <NavLink to={'/forgot'} className="text-xs text-indigo-600 cursor-pointer hover:underline">
                                    Forgot password?
                                </NavLink>
                            </div>
                        </div>


                        <button className="w-full py-3 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition">
                            Login
                        </button>
                    </form>


                    <div className="flex items-center my-5">
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <span className="px-2 text-xs text-gray-400">OR</span>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>


                    <div className="flex justify-center gap-4">
                        <button className="p-2 border rounded-lg hover:bg-gray-50" cursor-pointer onClick={googleLogin}>
                            <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" />
                        </button>

                        <button className="p-2 border rounded-lg hover:bg-gray-50" cursor-pointer onClick={gitLogin}>
                            <img src="https://www.svgrepo.com/show/512317/github-142.svg" className="w-5 h-5" />
                        </button>

                        <button className="p-2 border rounded-lg hover:bg-gray-50" cursor-pointer onClick={facebookLogin}>
                            <img src="https://www.svgrepo.com/show/448224/facebook.svg" className="w-5 h-5" />
                        </button>
                    </div>


                    <div className="mx-auto max-w-7xl text-center py-5">
                        <NavLink to={"/phone-otp"} className=" text-center mx-auto mt-5 py-2 text-sm text-gray-600 hover:text-black transition">
                            Login with phone
                        </NavLink>
                    </div>

                    <p className="text-center text-xs text-gray-500 mt-5">
                        Don’t have an account?{" "}
                        <NavLink to={"/signup"} className="text-indigo-600 cursor-pointer hover:underline">
                            Sign up
                        </NavLink>
                    </p>

                </div>
            </section>
        </>
    )
}
