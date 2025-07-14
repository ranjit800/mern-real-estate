// const Footer = () => {
//   return (
//     <footer className="bg-[#0f172a] text-[#d1b989] py-10 border-t-[1px] border-[#d1b989]">
      
//       <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* About */}
//         <div>
//           <h2 className="text-lg font-bold mb-4">Luxora Realty</h2>
//           <p className="text-sm">
//             We bring luxury and trust to your doorstep. Discover premium properties that match your lifestyle.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h2 className="text-lg font-bold mb-4">Quick Links</h2>
//           <ul className="space-y-2 text-sm">
//             <li>
//               <a href="/" className="hover:text-[#f6e7b4] transition">Home</a>
//             </li>
//             <li>
//               <a href="/about" className="hover:text-[#f6e7b4] transition">About</a>
//             </li>
//             <li>
//               <a href="/sign-in" className="hover:text-[#f6e7b4] transition">Sign In</a>
//             </li>
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <h2 className="text-lg font-bold mb-4">Contact Us</h2>
//           <ul className="text-sm space-y-2">
//             <li>Email: info@luxorarealty.com</li>
//             <li>Phone: +91 8001801496</li>
//             <li>Address: Kolkata, West Bengal, India</li>
//           </ul>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-[#d1b989] mt-10 pt-4 text-center text-xs text-[#d1b989]">
//         © {new Date().getFullYear()} Luxora Realty. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { Link } from "react-router-dom";
import logo from "../assets/Images/Logo3.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import bg from '../assets/Images/footer-bg.png'

const Footer = () => {
  return (
    <footer
      className="relative text-[#1b1b1b] py-16 font-serif"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for better readability if needed */}
      <div className="absolute inset-0 bg-[#b8c7bf]/50 blur-md pointer-events-none" style={{zIndex: 0}}></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Column - Quick Links */}
        <div className="text-center md:text-left">
          <h2 className="uppercase text-sm font-bold tracking-wide mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-[#5b4636] transition">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#5b4636] transition">About</Link>
            </li>
            <li>
              <Link to="/sign-in" className="hover:text-[#5b4636] transition">Sign In</Link>
            </li>
          </ul>
        </div>

        {/* Center - Logo & Description */}
        <div className="text-center">
          <img src={logo} alt="Luxora Realty" className="mx-auto  w-48 h-48 object-contain" />
          <h2 className="text-lg font-semibold mb-2">Luxora Realty</h2>
          <p className="text-sm text-[#0a0a0a] font-semibold">
            We bring luxury and trust to your doorstep. <br />
            Discover premium properties that match your lifestyle.
          </p>
        </div>

        {/* Right Column - Contact & Social */}
        <div className="text-center md:text-right">
          <h2 className="uppercase text-sm font-bold tracking-wide mb-4">Contact Us</h2>
          <ul className="text-sm space-y-1">
            <li>Email: info@luxorarealty.com</li>
            <li>Phone: +91 8001801496</li>
            <li>Address: Kolkata, West Bengal, India</li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-end space-x-4 mt-4 text-[#1b1b1b]">
            <a href="#" aria-label="Facebook" className="w-6 h-6 bg-[#dbeafe] rounded-full flex items-center justify-center hover:bg-[#c7e0ff] transition">
              <FaFacebookF size={12} />
            </a>
            <a href="#" aria-label="Instagram" className="w-6 h-6 bg-[#dbeafe] rounded-full flex items-center justify-center hover:bg-[#c7e0ff] transition">
              <FaInstagram size={12} />
            </a>
            <a href="#" aria-label="Twitter" className="w-6 h-6 bg-[#dbeafe] rounded-full flex items-center justify-center hover:bg-[#c7e0ff] transition">
              <FaTwitter size={12} />
            </a>
            <a href="#" aria-label="LinkedIn" className="w-6 h-6 bg-[#dbeafe] rounded-full flex items-center justify-center hover:bg-[#c7e0ff] transition">
              <FaLinkedinIn size={12} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t container mx-auto border-[#1b1b1b] mt-12 pt-4 text-center text-sm text-[#1b1b1b]">
        © {new Date().getFullYear()} Luxora Realty. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
