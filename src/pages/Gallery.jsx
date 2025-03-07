import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function Gallery() {
    const categories = {
        Football: ["../../turf.jpg", "../../turf.jpg", "../../turf.jpg"],
        Cricket: ["../../turf.jpg", "../../turf.jpg", "../../turf.jpg"],
        Events: ["../../turf.jpg", "../../turf.jpg", "../../turf.jpg"],
    };

    const [selectedCategory, setSelectedCategory] = useState("Football");
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const images = categories[selectedCategory].map((src) => ({ src }));

    return (
        <div className="bg-gray-100 min-h-screen py-12 px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-extrabold text-green-600 text-center mb-8">Gallery</h1>
                <p className="text-gray-700 text-lg text-center mb-6">
                    Explore our state-of-the-art turf and facilities.
                </p>
                
                <div className="flex justify-center space-x-4 mb-6">
                    {Object.keys(categories).map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                                selectedCategory === category ? "bg-green-600 text-white" : "bg-gray-300 text-gray-700"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {categories[selectedCategory].map((image, index) => (
                        <div key={index} className="overflow-hidden rounded-lg shadow-lg cursor-pointer" onClick={() => {
                            setPhotoIndex(index);
                            setIsOpen(true);
                        }}>
                            <img
                                src={image}
                                alt={`Dynamic Turf ${index + 1}`}
                                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {isOpen && (
                <Lightbox
                    open={isOpen}
                    close={() => setIsOpen(false)}
                    slides={images}
                    index={photoIndex}
                />
            )}
        </div>
    );
}

export default Gallery;
