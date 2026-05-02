import React, { useEffect, useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Briefcase,
  Globe,
  MapPinned,
  Building2,
  BadgeCheck,
} from "lucide-react";

export default function ProfileHome() {
  let id = localStorage.getItem("userId");
  let [data, setData] = useState({});

  let fetchdata = async () => {
    try {
      let resp = await fetch(
        "http://localhost:5000/user/profile/" + id,
        {
          method: "GET",
          credentials: "include",
        }
      );

      resp = await resp.json();

      if (!resp.status) {
        setData({});
        return;
      }

      setData(resp.user);
    } catch (error) {
      setData({});
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Top Cover */}
          <div className="relative h-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700">
            <div className="absolute inset-0 bg-black/10" />

            {/* Profile Image */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[-60px]">
              <img
                src={
                  data?.avatar
                    ? data.avatar
                    : "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                }
                alt="Profile"
                className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-xl"
              />
            </div>
          </div>

          {/* Profile Content */}
          <div className="pt-20 pb-10 px-6 md:px-10">
            {/* Name Section */}
            <div className="text-center">
              <h1 className="text-3xl font-bold text-slate-800">
                {data?.name || "User Name"}
              </h1>

              <p className="text-slate-500 mt-2 flex items-center justify-center gap-2">
                <BadgeCheck size={18} />
                Premium Flight Member
              </p>
            </div>

            {/* Main Grid */}
            <div className="grid lg:grid-cols-2 gap-8 mt-10">
              {/* Personal Details */}
              <div className="bg-slate-50 rounded-2xl p-6  border border-slate-200">
                <h2 className="text-xl font-semibold mb-6 text-slate-800">
                  Personal Information
                </h2>

                <div className="space-y-5">
                  <InfoRow
                    icon={<Mail size={18} />}
                    label="Email Address"
                    value={data?.email}
                  />

                  <InfoRow
                    icon={<Phone size={18} />}
                    label="Phone Number"
                    value={data?.phone}
                  />

                  <InfoRow
                    icon={<Globe size={18} />}
                    label="Country"
                    value={data?.country}
                  />

                  <InfoRow
                    icon={<Building2 size={18} />}
                    label="State"
                    value={data?.state}
                  />

                  <InfoRow
                    icon={<MapPinned size={18} />}
                    label="City"
                    value={data?.city}
                  />
                </div>
              </div>

              {/* Address Details */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h2 className="text-xl font-semibold mb-6 text-slate-800">
                  Address Details
                </h2>

                <div className="space-y-5">
                  <InfoRow
                    icon={<MapPin size={18} />}
                    label="Full Address"
                    value={data?.address}
                  />

                  <InfoRow
                    icon={<Briefcase size={18} />}
                    label="ZIP Code"
                    value={data?.zipCode}
                  />

                  <InfoRow
                    icon={<BadgeCheck size={18} />}
                    label="Membership"
                    value="Premium Traveler"
                  />

                  <InfoRow
                    icon={<Globe size={18} />}
                    label="Travel Status"
                    value="Verified Passenger"
                  />
                </div>
              </div>
            </div>

            {/* Profile Completion Card */}
            <div className="mt-10 bg-gradient-to-r from-slate-900 to-slate-700 rounded-3xl p-8 text-white shadow-lg">
              <h2 className="text-2xl font-bold">
                Travel Profile Status
              </h2>

              <p className="text-slate-200 mt-2">
                Your travel profile is active and verified for seamless
                domestic and international bookings.
              </p>

            
              {(() => {
                let fields = [
                  data?.name,
                  data?.email,
                  data?.phone,
                  data?.country,
                  data?.state,
                  data?.city,
                  data?.zipCode,
                  data?.address,
                  data?.avatar,
                ];

                let filledFields = fields.filter(Boolean).length;
                let totalFields = fields.length;

                let percentage = Math.round(
                  (filledFields / totalFields) * 100
                );

                return (
                  <>
                  
                    <div className="mt-6 w-full bg-white/20 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-white h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${percentage}%`,
                        }}
                      />
                    </div>

                  
                    <div className="flex items-center justify-between mt-4">
                      <p className="text-sm text-slate-200">
                        Profile Completion: {percentage}%
                      </p>

                      <span className="text-sm font-medium bg-white/20 px-4 py-1 rounded-full">
                        {percentage === 100
                          ? "Fully Verified"
                          : percentage >= 70
                            ? "Almost Complete"
                            : percentage >= 40
                              ? "In Progress"
                              : "Incomplete"}
                      </span>
                    </div>

                 
                    {percentage < 100 && (
                      <p className="mt-4 text-sm text-slate-300">
                        Complete your profile to unlock faster bookings,
                        priority support, and premium traveler benefits.
                      </p>
                    )}
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-white p-3 rounded-xl shadow-sm border">
        {icon}
      </div>

      <div>
        <p className="text-sm text-slate-500">{label}</p>
        <p className="font-medium text-slate-800">
          {value || "Not Provided"}
        </p>
      </div>
    </div>
  );
}