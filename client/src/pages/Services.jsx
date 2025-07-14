import React from "react";
import OurServices from "../components/OurServices";
import BookConsultation from "../components/BookConsultation";

const Services = () => {
  return (
    <>
     <div className="min-h-[50vh] bg-[#1f1f1f] flex flex-col items-center justify-start pt-10">
      <div className="w-full max-w-7xl px-4 pt-16">
        <h1 className="text-5xl font-semibold text-white mb-6 text-center drop-shadow-lg">
          Our <span className="text-[#d1b989]">Services</span>
        </h1>
        <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto mb-12">
          Discover the range of real estate services we offer at <span className="text-white font-semibold">Luxora Realty</span>. Whether you are buying, selling, investing, or
          renovating, our expert team is here to guide you every step of the way.
        </p>
      </div>
    </div>
      <OurServices />
      <BookConsultation/>
    </>
   
  );
};

export default Services;
