import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../assets/Images/Logo3.png";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isMobileMenuOpen]);

  return (
    <header className="w-full fixed -top-3 z-50 px-4 pt-4">
      <div
        className="max-w-7xl mx-auto flex justify-between items-center bg-black/50 backdrop-blur-xl border border-[#ffffff14] rounded-full px-6 py-1.5  shadow-lg"
        style={{ boxShadow: "0 0 20px rgba(255, 255, 255, 0.15)" }}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Luxora Realty Logo" className="h-10 md:h-14 w-auto md:w-32 object-contain" />
        </Link>
        {/* Search Bar (Desktop) */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#f1f5f9]/80 rounded-full px-3 py-2 items-center hidden sm:flex w-32 sm:w-64 md:w-80 focus-within:ring-2 focus-within:ring-[#d1b989] transition shadow"
        >
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none w-full text-sm text-gray-700 placeholder:text-gray-500"
          />
          <button>
            <FaSearch className="text-gray-500 text-sm ml-2" />
          </button>
        </form>
        {/* Desktop Menu */}
        <ul className="hidden sm:flex items-center gap-8 text-sm font-medium text-white">
          <li>
            <Link to="/" className="hover:text-[#d1b989] transition duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[#d1b989] transition duration-200">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-[#d1b989] transition duration-200">
              Services
            </Link>
          </li>
          <li>
            <Link to="/search" className="hover:text-[#d1b989] transition duration-200">
              Listing
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-[#d1b989] transition duration-200">
              Contact Us
            </Link>
          </li>
          {currentUser ? (
            <li>
              <Link to="/profile">
                <img src={currentUser.avatar} alt="User" className="h-10 w-10 rounded-full object-cover border-2 border-[#d1b989]" />
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/sign-in" className="text-white bg-[#A445ED] px-4 py-2 rounded-md hover:bg-[#D175B6] transition shadow">
                Sign In
              </Link>
            </li>
          )}
        </ul>
        {/* Mobile Menu Button */}
        <div className="sm:hidden text-white">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="z-50">
            {isMobileMenuOpen ? <HiX className="text-2xl" /> : <HiMenuAlt3 className="text-2xl" />}
          </button>
        </div>
      </div>
      {/* Overlay */}
      {isMobileMenuOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsMobileMenuOpen(false)} />}
      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#120022] backdrop-blur-md z-50 transform transition-transform duration-300 ease-in-out sm:hidden rounded-tr-2xl ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-4 py-20">
          <form onSubmit={handleSubmit} className="bg-[#f1f5f9]/80 rounded-full px-3 py-2 flex items-center w-full mb-6 shadow">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent outline-none w-full text-sm text-gray-700 placeholder:text-gray-500"
            />
            <button>
              <FaSearch className="text-gray-500 text-sm ml-2" />
            </button>
          </form>
          <ul className="flex flex-col space-y-6 text-white text-base font-medium">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <li className="hover:text-[#D175B6] transition">Home</li>
            </Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
              <li className="hover:text-[#D175B6] transition">About</li>
            </Link>
            <Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>
              <li className="hover:text-[#D175B6] transition">Services</li>
            </Link>
            <Link to="/listing" onClick={() => setIsMobileMenuOpen(false)}>
              <li className="hover:text-[#D175B6] transition">Listing</li>
            </Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <li className="hover:text-[#D175B6] transition">Contact Us</li>
            </Link>
            {currentUser ? (
              <Link to="/profile" onClick={() => setIsMobileMenuOpen(false)}>
                <li className="hover:text-[#D175B6] transition flex items-center gap-2">
                  <img src={currentUser.avatar} alt="User" className="h-8 w-8 rounded-full object-cover border-2 border-[#d1b989]" />
                  Profile
                </li>
              </Link>
            ) : (
              <Link to="/sign-in" onClick={() => setIsMobileMenuOpen(false)}>
                <li className="text-white bg-[#A445ED] px-4 py-2 rounded-md hover:bg-[#D175B6] transition shadow w-full text-center">Sign In</li>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
