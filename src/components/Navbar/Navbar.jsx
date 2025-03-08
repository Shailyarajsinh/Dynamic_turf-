import React, { useState } from "react";
import { Link } from "react-router-dom"; // If using React Router

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-red-600 flex items-center space-x-2">
                <img src="/dynamic_turf.jpg" alt="Dynamic Turf" className="w-8 h-8 rounded-4xl" />
                    <span> Dynamic Turf </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-6 text-center">
                    <Link to="/" className="text-gray-700 hover:text-green-600 transition px-4 py-2">Home</Link>
                    <Link to="/gallery" className="text-gray-700 hover:text-green-600 transition px-4 py-2">Gallery</Link>
                    <Link to="/about-us" className="text-gray-700 hover:text-green-600 transition px-4 py-2">About</Link>
                    <Link to="/contact-us" className="text-gray-700 hover:text-green-600 transition px-4 py-2">Contact</Link>
                    <Link to="/booking" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} className="md:hidden focus:outline-none">
                    <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>

            {/* Mobile Menu (Dropdown) */}
            <div className={`md:hidden bg-white ${isOpen ? "block" : "hidden"} transition-all duration-300 shadow-lg`}>
                <Link to="/" className="block px-6 py-3 text-gray-700 hover:bg-gray-100">Home</Link>
                <Link to="/gallery" className="block px-6 py-3 text-gray-700 hover:bg-gray-100">Gallery</Link>
                <Link to="/about-us" className="block px-6 py-3 text-gray-700 hover:bg-gray-100">About</Link>
                <Link to="/contact-us" className="block px-6 py-3 text-gray-700 hover:bg-gray-100">Contact</Link>
                <Link to="/booking" className="block px-6 py-3 bg-green-500 text-white text-center hover:bg-green-600">Get Started</Link>
            </div>
        </nav>
    );
}

export default Navbar;