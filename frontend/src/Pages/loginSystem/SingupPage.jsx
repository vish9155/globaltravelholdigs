import React from "react";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Navigate, NavLink, useNavigate } from 'react-router-dom'


export default function SignupPage() {
  let [value, setValue] = useState("");
  let [country, setCountry] = useState("IN");
  let navigate = useNavigate()
  let [showPass, setShowPass] = useState(false)
  let [loading, setLoading] = useState(false)
  let [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  })

  // useEffect(() => {
  //   fetch("https://ipapi.co/json/")
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data)
  //       setCountry(data.country)
  //     }
  //     );

  // }, []);

  let forminput = (e) => {
    try {

      setLoading(true)
      setForm({ ...form, [e.target.name]: e.target.value })
      setLoading(false)
    } catch (error) {

    }
  }
  let formHandle = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);

      let payload = {
        ...form,
        phone: value
      };

      let resp = await fetch("https://www.globaltravel-holdings.com/user/create", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      let data = await resp.json();

      if (!data.status) {
        toast.error(data.message);
        return
      }
      toast.success(data.message);
      
      navigate("/login")
    } catch (err) {
      toast.err(err.message)
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen py-10 flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-purple-100 px-4">
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

      <div className="w-full max-w-lg bg-white/80 backdrop-blur-xl shadow-2xl rounded-2xl p-8 border border-gray-200">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Create Account</h1>
          <p className="text-gray-500 mt-2">Start your journey with us </p>
        </div>
        <form onSubmit={formHandle} className="space-y-4">

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              onChange={forminput}
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              onChange={forminput}
              placeholder="example@gmail.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <PhoneInput
              international
              defaultCountry={"IN"}
              value={value}
              onChange={setValue}
              placeholder="Enter phone number"
              countryCallingCodeEditable={false}   //  user code edit na kare
              addInternationalOption={false}       // clean dropdown (no confusing options)
              autoComplete="tel"
              smartCaret={true}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none transition pr-10 hover:border-indigo-400 focus:border-indigo-500"
            />

          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                name="password"
                type={showPass ? "text" : "password"}

                onChange={forminput}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none transition pr-10"
              />
              <span onClick={() => setShowPass(!showPass)} className="absolute right-3 top-3 z-50 text-gray-400 cursor-pointer">
                {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>

          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:scale-[1.02] active:scale-[0.98] transition cursor-pointer"
          >
            {loading ? "Submitting" : " Sign Up"}
          </button>
        </form>


        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-gray-400 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>



        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{' '}
          <NavLink to={'/login '} className="text-indigo-600 font-medium cursor-pointer hover:underline">
            Login
          </NavLink>
        </p>
      </div>
    </section>
  );
}
