import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import axios from "../utils/axios";

const SignUp = () => {
  const [formData, setformData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const res = await fetch("/api/auth/sigup", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   });
  //   const data = await res.json();
  //   console.log(data);
  // };

  // console.log(formData);

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError(null);
  try {
    const res = await axios.post('/auth/signup', formData);
    console.log("User created successfully:", res.data);
    // Optionally, redirect or show success message here
    navigate('/sign-in');
  } catch (err) {
    const errorMsg = err.response?.data?.message || err.response?.data || err.message || "Signup failed";
    setError(errorMsg);
    console.error("Signup error:", errorMsg);
    
  } finally {
    setLoading(false);
  }
 
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4 py-12">
      <div className="max-w-5xl w-full bg-slate-800 text-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        {/* Left side image with caption */}
        <div className="md:w-1/2 relative hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1609173853745-45e3df324831?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hero"
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-6 left-6">
            <h2 className="text-xl font-semibold">Capturing Moments, Creating Memories</h2>
            <p className="text-sm text-slate-300 mt-1">Where luxury meets lifestyle.</p>
          </div>
        </div>

        {/* Right form section */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-2">Create an account</h2>
          <p className="text-slate-400 mb-6">
            Already have an account?{" "}
            <Link to="/sign-in" className="text-cyan-400 hover:underline">
              Sign in
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-lg bg-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              id="username"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg bg-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              id="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg bg-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              id="password"
              onChange={handleChange}
            />

            <button
              disabled={loading}
              type="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 rounded-lg transition flex items-center justify-center"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  Loading...
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <div className="my-6 text-center text-slate-400">or continue with</div>

          <button className="w-full flex items-center justify-center gap-2 border border-slate-600 py-3 rounded-lg text-slate-200 hover:bg-slate-700 transition">
            <FcGoogle className="text-xl" /> Continue with Google
          </button>
        </div>
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default SignUp;
