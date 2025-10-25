import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons for hamburger menu
import logo from "../assets/profile.jpeg"; // your photo/logo

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo section */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
          {/* You can also add text beside logo if you like */}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#home" className="hover:text-blue-400">Home</a></li>
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-6 py-4 space-y-4">
          <a href="#home" onClick={toggleMenu} className="block hover:text-blue-400">Home</a>
          <a href="#about" onClick={toggleMenu} className="block hover:text-blue-400">About</a>
          <a href="#projects" onClick={toggleMenu} className="block hover:text-blue-400">Projects</a>
          <a href="#skills" onClick={toggleMenu} className="block hover:text-blue-400">Skills</a>
          <a href="#contact" onClick={toggleMenu} className="block hover:text-blue-400">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
