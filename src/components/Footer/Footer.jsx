import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold">Dynamic Turf</h3>
            <p className="mt-2 text-gray-400">
              Book your favorite sports turf anytime, anywhere. Enjoy the best facilities and affordable rates.
            </p>
          </div>

          {/* /* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-green-500">Home</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-green-500">Gallery</Link>
              </li>
              <li>
                <Link to="/about-us" className="text-gray-400 hover:text-green-500">About us</Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-gray-400 hover:text-green-500">Contact us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">Contact Us</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li>Email: <a href="mailto:dynamicturf01@gmail.com" className="font-semibold">dynamicturf01@gmail.com</a></li>
              <li>Phone: <a href="tel:+917600671251" className="font-semibold">+91 7600671251</a></li>
              <li>Address: <a href="https://www.google.com/maps/place/Dynamic+Turf/@22.2969637,73.1482118,310m/data=!3m1!1e3!4m6!3m5!1s0x395fc9c150b86f97:0x94d8820497ca3ebb!8m2!3d22.2966274!4d73.1472503!16s%2Fg%2F11x36l4fmd?entry=ttu&g_ep=EgoyMDI1MDMxOC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="font-semibold">Dynamic Turf, Vadodara, Gujarat</a></li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-500">
                <FaFacebookF className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500">
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center text-gray-400">
          &copy; {new Date().getFullYear()} Dynamic Turf. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;