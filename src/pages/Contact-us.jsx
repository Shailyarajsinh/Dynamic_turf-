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
                        📍 <span><a href="https://www.google.com/maps/place/Dynamic+Turf/@22.2969637,73.1482118,310m/data=!3m1!1e3!4m6!3m5!1s0x395fc9c150b86f97:0x94d8820497ca3ebb!8m2!3d22.2966274!4d73.1472503!16s%2Fg%2F11x36l4fmd?entry=ttu&g_ep=EgoyMDI1MDMxOC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="font-semibold">Dynamic Turf, Vadodara, Gujarat</a></span>
                    </p>
                    <p className="text-gray-700 mt-2">
                        📧 Email: <a href="mailto:dynamicturf01@gmail.com" className="font-semibold">dynamicturf01@gmail.com</a>
                    </p>
                    <p className="text-gray-700 mt-2">
                        📞 Phone: <span><a href="tel:+917600671251" className="font-semibold">+91 7600671251</a></span>
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
