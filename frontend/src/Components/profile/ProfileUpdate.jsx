import React, { useEffect, useState } from "react";
import { Camera } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css';
import "react-toastify/dist/ReactToastify.css";
import ReactFlagsSelect from "react-flags-select";
import { Navigate, useNavigate } from "react-router-dom";

export default function ProfileUpdate() {
    let id = localStorage.getItem("userId");
    let [file, setFile] = useState(null);
    let [preview, setPreview] = useState(
        "assets/images/homepage-one/sallers-cover.png"
    );
    let navigate = useNavigate()
    let uploadImage = async () => {
        if (!file) {
            toast.error("Please select image");
            return;
        }
        let formData = new FormData();
        formData.append("myfile", file);
        let resp = await fetch("https://www.globaltravel-holdings.com/user/update-image/"+id, {
            method: "PUT",
            credentials: "include",
            body: formData 
        });

        let data = await resp.json();
        if (!data.status) {
           return toast.error(data.message)
        }
        toast.success(data.message)
        navigate("/profile")
    };
  
    let [loading, setLoading] = useState(false)
    let [value, setValue] = useState("")
    let [form, setForm] = useState({
        name: "",
        email: "",
        country: "",
        city: "",
        state: "",
        zipCode: "",
        address: "",
        phone: "",
        avatar:"",
    })
    let [country, setCountry] = useState("IN")



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
                phone: value || form.phone,
                country: country || form.country
            };

            let resp = await fetch("https://www.globaltravel-holdings.com/user/profile/update/" + id, {
                method: "PUT",
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
            navigate("/profile")
        } catch (err) {
            toast.error(err.message)
        } finally {
            setLoading(false);
        }
    };
    let fetchdata = async () => {
        try {
            let resp = await fetch("https://www.globaltravel-holdings.com/user/profile/" + id, {
                method: "GET", credentials: "include"
            })
            resp = await resp.json()
            console.log(resp)
            if (!resp.status) {
                setForm({
                    name: "",
                    email: "",
                    country: "",
                    city: "",
                    state: "",
                    zipCode: "",
                    address: "",
                    phone: "",
                })
            }
            setForm(resp.user)
            setValue(resp.user?.phone || "");
            setCountry(resp.user?.country || "");

        } catch (error) {
            setForm({
                name: "",
                email: "",
                country: "",
                city: "",
                state: "",
                zipCode: "",
                address: "",
                phone: ""
            })
        }
    }
    useEffect(() => {
        fetchdata()
    }, [])

    console.log(form)


    return (
        <section className="max-w-7xl mx-auto px-4 py-8 bg-slate-50 min-h-screen">
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
                    <h1 className="text-3xl md:text-4xl font-bold">
                        Update Profile
                    </h1>
                    <p className="text-sm md:text-base text-slate-200 mt-2">
                        Keep your travel profile updated for seamless flight booking
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 p-8">

                    <div className="bg-slate-100 rounded-2xl p-6 shadow-sm h-fit">
                        <div className="flex flex-col items-center text-center">
                            {/* Profile Image with Camera Option */}
                            <div className="relative group">
                                <img
                                    src={form?.avatar?form.avatar:preview}
                                    alt="profile"
                                    className="w-44 h-44 rounded-full object-cover border-4 border-white shadow-xl"
                                />


                                <input
                                    type="file"
                                    hidden
                                    id="profileImage"
                                    accept="image/*"
                                    onChange={(e) => {
                                        let f = e.target.files[0];
                                        if (!f) return;
                                        setFile(f);
                                        setPreview(URL.createObjectURL(f));
                                    }}
                                />


                                <label
                                    htmlFor="profileImage"
                                    className="absolute bottom-3 right-3 bg-slate-900 hover:bg-slate-800 text-white p-3 rounded-full cursor-pointer shadow-lg transition"
                                >
                                    <Camera size={20} />
                                </label>
                            </div>

                            <h2 className="text-xl font-semibold mt-5">
                           Profile Photo
                            </h2>

                            <p className="text-sm text-gray-500 mt-2">
                                Upload a professional photo for a better travel experience
                            </p>

                            <button onClick={uploadImage} className="cursor-pointer mt-6 w-full bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-xl font-medium transition">
                                Save Image
                            </button>
                        </div>
                    </div>


                    <div className="lg:col-span-2">
                        <form onSubmit={formHandle} className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    onChange={forminput}
                                    name="name"
                                    value={form?.name}
                                    placeholder="Enter full name"
                                    className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-400"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    value={form?.email}
                                    onChange={forminput}
                                    name="email"
                                    placeholder="Enter email"
                                    className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-400"
                                />
                            </div>

                            <div className="">
                                <label className="block text-sm font-medium mb-2">
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
                                    className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-400"
                                />

                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Country
                                </label>
                                <ReactFlagsSelect
                                    selected={country}
                                    onSelect={(code) => setCountry(code)}
                                    searchable
                                    className="menu-flags "
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    State
                                </label>
                                <input
                                    type="text"
                                    name="state"
                                    value={form?.state}
                                    onChange={forminput}
                                    placeholder="Enter state"
                                    className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-400"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    City
                                </label>
                                <input
                                    type="text"
                                    onChange={forminput}
                                    value={form?.city}
                                    name="city"
                                    placeholder="Enter city"
                                    className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-400"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    ZIP Code
                                </label>
                                <input
                                    type="text"
                                    value={form?.zipCode}
                                    name="zipCode"
                                    onChange={forminput}
                                    placeholder="Enter ZIP code"
                                    className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-400"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium mb-2">
                                    Address
                                </label>
                                <textarea
                                    rows="4"
                                    onChange={forminput}
                                    value={form?.address}
                                    name="address"
                                    placeholder="Enter full address"
                                    className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-400"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <button className="cursor-pointer w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl font-semibold text-lg transition">
                                    Update Profile
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}