import React from "react";

const stats = [
  {
    number: "#1",
    description: "Real Estate Group in\nWhelton from 2022–2025",
  },
  {
    number: "18+",
    description: "Years of Real Estate\nExperience",
  },
  {
    number: "10",
    description: "Licensed Real\nEstate Agents",
  },
  {
    number: "$1K",
    description: "Average savings per\n$100K for our buyers",
  },
];

const WhyWorkWithUs = () => {
  return (
    <section className="bg-[#172C17] text-white py-20 px-6 h-[80vh]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light mb-16">Why work with us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Empty left side for spacing like your image */}
          <div></div>
          {/* Stats right side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {stats.map((item, index) => (
              <div key={index}>
                <div className="text-5xl font-light mb-2">{item.number}</div>
                <p className="text-sm whitespace-pre-line text-gray-200">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
