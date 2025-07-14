import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import bg from '../assets/Images/contactUs-bg.png'

const ContactUs = () => {
  return (
    <section
      className="py-16 px-6 md:px-12 min-h-[110vh] flex items-center "
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <div className="container mx-auto w-full grid md:grid-cols-2 gap-12 items-start  backdrop-blur-sm">
        {/* Left: Contact Form */}
        <form className="space-y-10 p-6">
          <div>
            <label className="block mb-1 text-sm font-medium text-lime-100">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-lime-100">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-lime-100">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-lime-100">Message</label>
            <textarea
              rows="4"
              placeholder="Your message..."
              className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-2 rounded-md transition"
          >
            Submit
          </button>
        </form>

        {/* Right: Contact Info */}
        <div className="text-gray-200 p-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-sm mb-8 max-w-md">
            Contact us for questions, technical assistance, or collaboration opportunities
            via the contact information provided.
          </p>
          <ul className="space-y-5">
            <li className="flex items-center gap-4">
              <div className="p-2 rounded-full bg-[#d1b989] text-white">
                <FaPhoneAlt size={16} />
              </div>
              <span className="text-sm">+123-456-7890</span>
            </li>
            <li className="flex items-center gap-4">
              <div className="p-2 rounded-full bg-[#d1b989] text-white">
                <FaEnvelope size={16} />
              </div>
              <span className="text-sm">hello@reallygreatsite.com</span>
            </li>
            <li className="flex items-center gap-4">
              <div className="p-2 rounded-full bg-[#d1b989] text-white">
                <FaMapMarkerAlt size={16} />
              </div>
              <span className="text-sm">123 Anywhere ST., Any City, 12345</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
