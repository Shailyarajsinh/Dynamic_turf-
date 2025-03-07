import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
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

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-green-500">Home</a>
              </li>
              <li>
                <a href="/gallery" className="text-gray-400 hover:text-green-500">Gallery</a>
              </li>
              <li>
                <a href="/about-us" className="text-gray-400 hover:text-green-500">About us</a>
              </li>
              <li>
                <a href="/contact-us" className="text-gray-400 hover:text-green-500">Contact us</a>
              </li>
            </ul>
          </div>



          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold">Contact Us</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li>Email: support@turfbooking.com</li>
              <li>Phone: +91 1234567890</li>
              <li>Address: Vadodara, Gujarat, India</li>
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