import Image from "../assets/Images/bookMet.png"; 
import { Link } from "react-router-dom";

const BookConsultation = () => {
  return (
    <section className="bg-[#1f1f1f] text-white py-16 px-4">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-semibold mb-10">Book a consultation</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Image */}
        <img
          src={Image}
          alt="Consultation Room"
          className="w-full h-auto object-cover rounded-md shadow-md"
        />

        {/* Text Content - aligned to the top */}
        <div className="flex flex-col justify-center h-full">
          <p className="text-base leading-relaxed mb-8">
            Highlight specific services or products here. It can be a property appraisal
            service, a consultation, or something uniquely yours. Give it room to shine here.
          </p>
          <Link
            to="/contact"
            className="text-white text-lg underline underline-offset-4 hover:text-gray-300 transition w-fit"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  </section>
  );
};

export default BookConsultation;
