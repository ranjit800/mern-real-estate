import React from "react";
import WhoWeAre from "../components/WhoWeAre";
import WhyWorkWithUs from "../components/WhyWorkWithUs";
import WhyChooseUs from "../components/WhyChooseUs";
import OurServices from "../components/OurServices";

const About = () => {
  return (
    <>
     <div className="min-h-screen bg-[#1f1f1f] flex flex-col items-center justify-start pt-10">
      <div className="w-full max-w-7xl px-4 pt-16">
        <h1 className="text-5xl font-semibold text-white mb-6 text-center drop-shadow-lg">
          About <span className="text-[#d1b989]">Luxora Realty</span>
        </h1>
        <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto mb-12">
          Welcome to <span className="text-white font-semibold">Luxora Realty</span> – your trusted partner in finding, selling, or renting exceptional properties. 
          With a passion for real estate and a commitment to personalized service, we help you make confident decisions at every step of your property journey.
        </p>
      </div>
      <WhoWeAre />
      <div className="w-full max-w-7xl px-4 mt-16 mb-20">
        <h2 className="text-3xl font-semibold text-white mb-4 text-center">Our Mission</h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-10">
          To connect people with their dream homes and investment opportunities, providing expert guidance, transparency, and a seamless experience from start to finish.
        </p>
        
      </div>
    </div>
      <WhyWorkWithUs/>
      <WhyChooseUs/>
      <OurServices/>
    </>
   
  );
};

export default About;
