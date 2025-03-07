import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold">Turf Booking</h3>
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
              <li>Address: 123 Sports Lane, City, Country</li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-500">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.56v14.91c0 .97-.79 1.76-1.76 1.76H1.76C.79 21.23 0 20.44 0 19.47V4.56C0 3.59.79 2.8 1.76 2.8h20.48c.97 0 1.76.79 1.76 1.76zM9.6 18.4v-7.2H7.2v7.2h2.4zm-1.2-8.4c.8 0 1.44-.64 1.44-1.44 0-.8-.64-1.44-1.44-1.44-.8 0-1.44.64-1.44 1.44 0 .8.64 1.44 1.44 1.44zm10.8 8.4v-4.08c0-2.16-1.2-3.12-2.8-3.12-1.28 0-1.88.72-2.2 1.2v-1.04H12v7.2h2.4v-3.6c0-.96.16-1.92 1.36-1.92 1.2 0 1.2 1.12 1.2 2v3.52H19.2z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.23 5.924c-.806.358-1.67.6-2.577.708a4.515 4.515 0 001.98-2.49 9.027 9.027 0 01-2.86 1.09 4.506 4.506 0 00-7.677 4.108 12.8 12.8 0 01-9.29-4.71 4.506 4.506 0 001.394 6.014 4.49 4.49 0 01-2.04-.563v.057a4.506 4.506 0 003.616 4.415 4.52 4.52 0 01-2.034.077 4.507 4.507 0 004.21 3.128 9.038 9.038 0 01-5.6 1.93c-.364 0-.724-.02-1.08-.063a12.75 12.75 0 006.92 2.03c8.3 0 12.84-6.88 12.84-12.84 0-.195-.005-.39-.014-.583a9.172 9.172 0 002.26-2.34z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.42 3.44 8.1 7.9 8.1v-5.72H8.9v-2.38h2.04V9.85c0-2.02 1.23-3.13 3.04-3.13.88 0 1.8.16 1.8.16v1.98h-1.02c-1 0-1.32.62-1.32 1.26v1.5h2.22l-.36 2.38h-1.86v5.72c4.46-.5 7.9-3.68 7.9-8.1 0-5.5-4.46-9.96-9.96-9.96z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center text-gray-400">
          &copy; {new Date().getFullYear()} Turf Booking. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;