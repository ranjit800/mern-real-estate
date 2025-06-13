import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your update logic here
    console.log("Profile updated");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 px-6 py-10 text-white flex items-center justify-center">
      <div className="w-full max-w-4xl bg-slate-900 shadow-xl rounded-3xl p-8 md:p-12 border border-slate-700">
        {/* Top Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[#d1b989]">My Profile</h1>
          <p className="text-slate-400 mt-2">Manage your account details and listings</p>
        </div>

        {/* Start Form */}
        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Profile Avatar + Fields */}
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Avatar */}
            <div className="relative w-32 h-32 shrink-0">
              <img
                src={currentUser?.avatar || "https://via.placeholder.com/100"}
                alt="Profile"
                className="w-full h-full object-cover rounded-full border-4 border-[#d1b989] shadow-lg cursor-pointer"
              />
              <div className="absolute bottom-0 right-0 bg-[#d1b989] text-black text-xs px-2 py-1 rounded-full font-semibold shadow-md cursor-pointer">
                Edit
              </div>
            </div>

            {/* Fields */}
            <div className="w-full space-y-6">
              <div>
                <label className="block mb-1 text-sm text-slate-300">Username</label>
                <input
                  type="text"
                  defaultValue={currentUser?.username || ""}
                  className="w-full px-5 py-3 rounded-lg bg-slate-700 bg-opacity-80 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#d1b989]"
                  id="username"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm text-slate-300">Email</label>
                <input
                  type="email"
                  defaultValue={currentUser?.email || ""}
                  className="w-full px-5 py-3 rounded-lg bg-slate-700 bg-opacity-80 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#d1b989]"
                  id="email"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm text-slate-300">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-5 py-3 rounded-lg bg-slate-700 bg-opacity-80 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#d1b989]"
                  id="password"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              type="submit"
              className="w-full bg-[#d1b989] hover:bg-[#b79e6a] text-black font-semibold py-3 rounded-xl shadow-md transition"
            >
              Update Profile
            </button>
            <Link
              to="/create-listing"
              className="w-full text-center bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 rounded-xl shadow-md transition"
            >
              Create Listing
            </Link>
          </div>
        </form>

        {/* Divider */}
        <div className="border-t border-slate-700 my-8" />

        {/* Bottom Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-center">
          <button className="text-red-500 hover:text-red-400 transition">Delete Account</button>
          <button className="hover:text-cyan-400 transition">Sign Out</button>
          <Link to="/my-listings" className="text-cyan-400 hover:text-cyan-300 transition">
            Show My Listings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
