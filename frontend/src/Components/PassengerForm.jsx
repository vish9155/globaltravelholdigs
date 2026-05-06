import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import PhoneInput from "react-phone-number-input";
import ReactFlagsSelect from "react-flags-select";
import { useNavigate } from "react-router-dom";

export default function PassengerForm() {

  let [country, setCountry] = useState("IN")
  let navigate = useNavigate()

  let [issuingCountry, setCountryCode] = useState("IN")
  const offerData = useSelector((s) => s.offer.items);
  const passengers = offerData?.passengers || [];
  console.log(offerData.id, "co")
  let childLength = passengers.filter(i => i.type === "child").length;
  let adultLength = passengers.filter(i => i.type === "adult").length;
  let isInternational = useMemo(() => {
    if (!offerData?.slices?.length) return false;

    let origin = offerData.slices[0].origin;
    let destination = offerData.slices[0].destination;

    let originCountry = origin?.country_code || origin?.iata_country_code;
    let destinationCountry =
      destination?.country_code || destination?.iata_country_code;

    return originCountry !== destinationCountry;

  }, [offerData]);


  const [formData, setFormData] = useState([]);

  useEffect(() => {
    if (!passengers.length) return;

    let formatedData = passengers.map((p) => ({
      id: p.id,
      type: p.type,
      firstName: "",
      middleName: "",
      lastName: "",
      gender: "",
      dob: "",

      passportNumber: "",
      passportExpiry: "",

    }));

    setFormData(formatedData);

  }, [passengers]);

  function handleChange(index, field, value) {
    const updated = [...formData];
    updated[index][field] = value;
    setFormData(updated);
  }

  async function handleBooking() {
    try {

      let formattedData = formData.map((p) => {
        let passengers = {
          firstName: p.firstName,

          middleName: p.middleName,

          lastName: p.lastName,

          gender:
            p.gender === "male"
              ? "Male"
              : "Female",

          dob: p.dob,

          nationality: country,

          type: p.type,
        }
        if (isInternational) {
          passengers.passport = {
            number:
              p.passportNumber,

            country:
              issuingCountry,

            expiry:
              p.passportExpiry,
          }
        }
        return passengers;
      })

      // now create the the payment

      let createPayemnt = await fetch("https://www.globaltravel-holdings.com/payment/create-payment", {
        method: "POST", credentials: "include", headers: {
          "Content-Type": "application/json"
        }, body: JSON.stringify({
          passengers: formattedData,
          offerId: offerData.id
        })
      })

      let data = await createPayemnt.json();

      if (!data.status) {
        return alert(data.message)
      }

      let options = {
        key: data.key,
        amount: data.amount,
        currency: data.currency,
        order_id: data.orderId,
        name: "Flight Booking",
        description: "Secure Payment",
        method: {

          upi: true,

          card: true,

          netbanking: true,

          wallet: true,
        },
        handler: async function (response) {
          let verifySig = await fetch("https://www.globaltravel-holdings.com/payment/verify-payment", {
            method: "POST", credentials: "include", headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              bookingId:
                data.bookingId,

              razorpay_order_id:
                response.razorpay_order_id,

              razorpay_payment_id:
                response.razorpay_payment_id,

              razorpay_signature:
                response.razorpay_signature,
            })
          })
          let verifyData = await verifySig.json()
          if (verifyData.status) {
            alert("Booking Confirmed")
            console.log(verifyData)
            navigate(`/flights`)
          }
          else {
            alert(verifyData.message)
          }
        }
      }

      let razorpay = new window.Razorpay(options)
      razorpay.open()
    } catch (error) {

      console.log(error);

      alert(
        `Booking failed:${error.message}`
      );
    }

  }



  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">


        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Traveller Details
          </h2>
          <p className="text-sm text-gray-500">
            Enter passenger information as per government ID
          </p>
        </div>


        <div className="flex gap-3 mt-4 md:mt-0">

          <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-xl text-sm font-medium shadow-sm">
            Adult <span className="font-bold ml-1">{adultLength}</span>
          </div>


          <div className="bg-green-50 text-green-700 px-4 py-2 rounded-xl text-sm font-medium shadow-sm">
            Child <span className="font-bold ml-1">{childLength}</span>
          </div>


        </div>
      </div>

      {formData.map((p, index) => (
        <div
          key={p.id}
          className="bg-white border rounded-3xl p-6 mb-6 shadow-sm hover:shadow-md transition"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {p.type.toUpperCase()} {index + 1}
              </h3>
              <p className="text-xs text-gray-500">
                {p.type === "adult"
                  ? "12+ yrs"
                  : p.type === "child"
                    ? "2-12 yrs"
                    : "Infant"}
              </p>
            </div>

            <span className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-600 font-medium">
              Traveller
            </span>
          </div>

          {/* Form Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* First Name */}
            <div>
              <label className="text-xs text-gray-500">First Name</label>
              <input
                className="w-full border rounded-xl p-3 mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Enter First Name"
                value={p.firstName}
                onChange={(e) =>
                  handleChange(index, "firstName", e.target.value)
                }
              />
            </div>

            <div>
              <label className="text-xs text-gray-500">Middle Name</label>
              <input
                className="w-full border rounded-xl p-3 mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Enter Middle Name"
                value={p.middleName}
                onChange={(e) =>
                  handleChange(index, "middleName", e.target.value)
                }
              />
            </div>
            <div>
              <label className="text-xs text-gray-500">Last Name</label>
              <input
                className="w-full border rounded-xl p-3 mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Enter Last Name"
                value={p.lastName}
                onChange={(e) =>
                  handleChange(index, "lastName", e.target.value)
                }
              />
            </div>

            {/* Gender */}
            <div>
              <label className="text-xs text-gray-500">Gender</label>
              <select
                className="w-full border rounded-xl p-3 mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
                value={p.gender}
                onChange={(e) =>
                  handleChange(index, "gender", e.target.value)
                }
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            {/* DOB */}
            <div>
              <label className="text-xs text-gray-500">Date of Birth</label>
              <input
                type="date"
                className="w-full border rounded-xl p-3 mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
                value={p.dob}
                onChange={(e) =>
                  handleChange(index, "dob", e.target.value)
                }
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
          </div>

          {/*  Passport Section */}
          {isInternational && (
            <div className="mt-6 border-t pt-5">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">
                Passport Details 🌍
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                <div>
                  <label className="text-xs text-gray-500">
                    Passport Number
                  </label>
                  <input
                    className="w-full border rounded-xl p-3 mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
                    placeholder="Enter Passport No"
                    value={p.passportNumber}
                    onChange={(e) =>
                      handleChange(index, "passportNumber", e.target.value)
                    }
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-500">
                    Expiry Date
                  </label>
                  <input
                    type="date"
                    className="w-full border rounded-xl p-3 mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
                    value={p.passportExpiry}
                    onChange={(e) =>
                      handleChange(index, "passportExpiry", e.target.value)
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Issuing Country
                  </label>
                  <ReactFlagsSelect
                    selected={issuingCountry}
                    onSelect={(code) => setCountryCode(code)}
                    searchable
                    className="menu-flags "
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
      {/* CTA Button */}
      {formData.length > 0 && (
        <div className="text-center mt-6">
          <button onClick={handleBooking} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold shadow-md transition">
            Continue Booking
          </button>
        </div>
      )}
    </div>
  );
}