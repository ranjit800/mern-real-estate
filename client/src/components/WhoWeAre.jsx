import React from "react";
import { motion } from "framer-motion";
import whoWeAreImg from "../assets/Images/who-we-r2.png"; // Update path as needed

const WhoWeAre = () => {
  return (
    <div className="bg-[#1f1f1f] w-full py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Text Section */}
        <motion.div
          className="text-center md:text-left md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-white text-4xl font-semibold">WHO WE ARE</h2>
          <p className="text-gray-300 text-base leading-relaxed max-w-md mx-auto md:mx-0">
            At <span className="text-white font-semibold">Luxora Realty </span> Estate, we are committed to connecting people with their dream homes. 
            With years of experience in the real estate industry, our team brings deep local knowledge, 
            personalized service, and a passion for helping clients make informed property decisions. 
            Whether you're buying, selling, or renting, we guide you every step of the way to ensure a 
            smooth, transparent, and rewarding experience.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="md:w-1/2 w-full flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <img
            src={whoWeAreImg}
            alt="Who We Are"
            className="rounded-3xl w-full max-w-[650px] h-auto object-cover shadow-xl"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default WhoWeAre;
