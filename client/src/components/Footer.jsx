const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-[#d1b989] py-10 border-t-[1px] border-[#d1b989]">
      
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h2 className="text-lg font-bold mb-4">Luxora Realty</h2>
          <p className="text-sm">
            We bring luxury and trust to your doorstep. Discover premium properties that match your lifestyle.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-[#f6e7b4] transition">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-[#f6e7b4] transition">About</a>
            </li>
            <li>
              <a href="/sign-in" className="hover:text-[#f6e7b4] transition">Sign In</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-bold mb-4">Contact Us</h2>
          <ul className="text-sm space-y-2">
            <li>Email: info@luxorarealty.com</li>
            <li>Phone: +91 8001801496</li>
            <li>Address: Kolkata, West Bengal, India</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#d1b989] mt-10 pt-4 text-center text-xs text-[#d1b989]">
        © {new Date().getFullYear()} Luxora Realty. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
