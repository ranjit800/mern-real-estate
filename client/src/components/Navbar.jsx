import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../assets/Images/Logo.png";
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

  return (
    <header className="bg-[#0f172a] shadow-2xl sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 ">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Luxora Realty Logo" className="h-20 object-contain" />
        </Link>
        {/* Search Bar */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#f1f5f9] rounded-full px-3 py-2 items-center hidden sm:flex w-32 sm:w-64 md:w-80 focus-within:ring-2 focus-within:ring-[#d1b989] transition"
        >
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none w-full text-sm text-gray-700 placeholder:text-gray-500"
          />
          <button>
            <FaSearch className="text-gray-500 text-sm ml-2" />
          </button>
        </form>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex items-center gap-6 text-sm font-medium text-[#d1b989]">
          <li>
            <Link to="/" className="hover:text-[#f6e7b4] transition duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[#f6e7b4] transition duration-200">
              About
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
              <Link to="/sign-in" className="text-black bg-[#d1b989] px-4 py-2 rounded-full hover:bg-[#b79e6a] transition">
                Sign In
              </Link>
            </li>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <div className="sm:hidden text-[#d1b989]">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>{isMobileMenuOpen ? <HiX className="text-2xl" /> : <HiMenuAlt3 className="text-2xl" />}</button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden px-4 pb-4 space-y-2">
          <form className="bg-[#f1f5f9] rounded-full px-3 py-2 flex items-center w-full">
            <input type="text" placeholder="Search..." className="bg-transparent outline-none w-full text-sm text-gray-700 placeholder:text-gray-500" />
            <FaSearch className="text-gray-500 text-sm ml-2" />
          </form>
          <ul className="flex flex-col gap-2 text-sm font-medium text-[#d1b989]">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <li className="hover:text-[#f6e7b4] transition">Home</li>
            </Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
              <li className="hover:text-[#f6e7b4] transition">About</li>
            </Link>
            <Link to="/sign-in" onClick={() => setIsMobileMenuOpen(false)}>
              <li className="text-black bg-[#d1b989] px-4 py-2 rounded-full w-max hover:bg-[#b79e6a] transition">Sign In</li>
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
