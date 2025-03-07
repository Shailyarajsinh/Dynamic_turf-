import React from "react";

function Contact() {
    return (
        <div className="bg-gray-100 min-h-screen py-12 px-6 md:px-12">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-4xl font-extrabold text-green-600 text-center mb-6">Contact Us</h1>
                <p className="text-gray-700 text-lg text-center">
                    Have questions or want to book your next game? Get in touch with us!
                </p>
                
                <div className="mt-6">
                    <h2 className="text-2xl font-semibold text-gray-800">Reach Us At</h2>
                    <p className="text-gray-700 mt-2">
                        📍 <span className="font-semibold">Dynamic Turf, Main Street, Your City</span>
                    </p>
                    <p className="text-gray-700 mt-2">
                        📧 Email: <span className="font-semibold">info@dynamicturf.com</span>
                    </p>
                    <p className="text-gray-700 mt-2">
                        📞 Phone: <span className="font-semibold">+123 456 7890</span>
                    </p>
                </div>
                
                <h2 className="text-2xl font-semibold text-gray-800 mt-6">Send Us a Message</h2>
                <form className="mt-4">
                    <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg mt-2" required />
                    <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg mt-2" required />
                    <textarea placeholder="Your Message" className="w-full p-3 border rounded-lg mt-2 h-32" required></textarea>
                    <button type="submit" className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition mt-3">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
