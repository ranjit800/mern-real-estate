import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import bgImg from "../assets/Images/bg2.png";

const Hero = () => {
  return (
    <div className="bg-[#f3f0eb] w-full">
      <motion.div
        className="max-w-7xl mx-auto px-4 py-20 flex flex-col items-center md:items-end text-right"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl font-serif md:text-7xl  text-slate-800 mb-4 mt-7 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Looking to buy or <br /> sell your property?
        </motion.h1>
        <motion.p className="text-md md:text-xl text-slate-600 mb-2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }}>
          You've come to the right place.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.7 }}>
          <Link to="/search" className="text-sm md:text-base text-blue-800 font-semibold hover:underline">
            Let’s get started…
          </Link>
        </motion.div>
      </motion.div>

      <motion.div className="w-full px-16 pb-16" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }}>
        <img src={bgImg} alt="Modern House" className="w-full object-cover rounded-lg" />
      </motion.div>
    </div>
  );
};

export default Hero;
