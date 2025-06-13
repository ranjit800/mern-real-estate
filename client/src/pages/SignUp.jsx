import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "../utils/axios";
import OAuth from "../components/OAuth";

const SignUp = () => {
  const [formData, setformData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await axios.post("/auth/signup", formData);
      console.log("User created successfully:", res.data);
      navigate("/sign-in");
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
        {/* Left side image */}
        <div className="md:w-1/2 relative hidden md:block">
          <img src="https://images.unsplash.com/photo-1609173853745-45e3df324831?q=80&w=1974&auto=format&fit=crop" alt="Hero" className="h-full w-full object-cover" />
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

            {/* Password field with eye icon */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-3 pr-12 rounded-lg bg-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                id="password"
                onChange={handleChange}
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute top-3 right-4 text-slate-300">
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <button
              disabled={loading}
              type="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 rounded-lg transition flex items-center justify-center"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                  </svg>
                  Loading...
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <div className="my-6 text-center text-slate-400">or continue with</div>

          <OAuth />
          {/* <button className="w-full flex items-center justify-center gap-2 border border-slate-600 py-3 rounded-lg text-slate-200 hover:bg-slate-700 transition">
            <FcGoogle className="text-xl" /> Continue with Google
          </button> */}

          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
