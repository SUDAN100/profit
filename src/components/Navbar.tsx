
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-purple-700">WebGrowth</span>
              <span className="text-2xl font-light text-gray-700">Pro</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-purple-700 transition-colors duration-300">Home</Link>
            <Link to="/services" className="text-gray-600 hover:text-purple-700 transition-colors duration-300">Services</Link>
            <Link to="/portfolio" className="text-gray-600 hover:text-purple-700 transition-colors duration-300">Portfolio</Link>
            <Link to="/blog" className="text-gray-600 hover:text-purple-700 transition-colors duration-300">Blog</Link>
            <Link to="/contact">
              <Button className="bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded-md">
                Get Started
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              className="text-gray-700 hover:text-purple-700"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-purple-700 hover:bg-gray-50 rounded-md" onClick={toggleMenu}>Home</Link>
            <Link to="/services" className="block px-3 py-2 text-gray-600 hover:text-purple-700 hover:bg-gray-50 rounded-md" onClick={toggleMenu}>Services</Link>
            <Link to="/portfolio" className="block px-3 py-2 text-gray-600 hover:text-purple-700 hover:bg-gray-50 rounded-md" onClick={toggleMenu}>Portfolio</Link>
            <Link to="/blog" className="block px-3 py-2 text-gray-600 hover:text-purple-700 hover:bg-gray-50 rounded-md" onClick={toggleMenu}>Blog</Link>
            <Link to="/contact" className="block px-3 py-2" onClick={toggleMenu}>
              <Button className="w-full bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded-md">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
