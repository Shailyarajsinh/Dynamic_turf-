import React from "react";

function AboutUs() {
    return (
        <div className="bg-gray-100 min-h-screen py-12 px-6 md:px-12">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-4xl font-extrabold text-green-600 text-center mb-6">About Dynamic Turf</h1>
                <p className="text-gray-700 text-lg leading-relaxed">
                    Welcome to <span className="font-semibold">Dynamic Turf</span>, the ultimate destination for sports enthusiasts looking for a high-quality playing experience. 
                    Our state-of-the-art turf is designed for fast-paced, exciting games, whether it’s football, cricket, or any other small-sided sport.
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-800 mt-6">Why Choose Dynamic Turf?</h2>
                <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2">
                    <li>Premium artificial grass surface for a seamless playing experience.</li>
                    <li>Enclosed with high-quality nets to keep the game going non-stop.</li>
                    <li>Bright floodlights for evening and night matches.</li>
                    <li>Easy online booking and hassle-free management.</li>
                    <li>Perfect for football, cricket, and more!</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-gray-800 mt-6">Our Mission</h2>
                <p className="text-gray-700 mt-3">
                    At Dynamic Turf, our goal is to provide a top-notch sports facility where players of all skill levels can enjoy the game. 
                    We believe in promoting a healthy and active lifestyle while fostering community engagement through sports.
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-800 mt-6">Get in Touch</h2>
                <p className="text-gray-700 mt-3">
                    Have questions or want to book your next game? Contact us at
                    <span className="font-semibold"> info@dynamicturf.com</span> or visit us in person!
                </p>
            </div>
        </div>
    );
}

export default AboutUs;