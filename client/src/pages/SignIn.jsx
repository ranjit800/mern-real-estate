import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4 py-12">
      <div className="max-w-5xl w-full bg-slate-800 text-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side Image Section */}
        <div className="md:w-1/2 relative hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1524321405874-351c3cb5d301?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Sign In Visual"
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-6 left-6">
            <h2 className="text-xl font-semibold">Welcome Back to Luxora Realty</h2>
            <p className="text-sm text-slate-300 mt-1">Luxury begins the moment you log in.</p>
          </div>
        </div>

        {/* Right Side Sign In Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-2">Sign in to your account</h2>
          <p className="text-slate-400 mb-6">
            Don’t have an account?{" "}
            <Link to="/sign-up" className="text-cyan-400 hover:underline">Sign up</Link>
          </p>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg bg-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg bg-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />

            <button
              type="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 rounded-lg transition"
            >
              Sign In
            </button>
          </form>

          <div className="my-6 text-center text-slate-400">or continue with</div>

          <button className="w-full flex items-center justify-center gap-2 border border-slate-600 py-3 rounded-lg text-slate-200 hover:bg-slate-700 transition">
            <FcGoogle className="text-xl" /> Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
