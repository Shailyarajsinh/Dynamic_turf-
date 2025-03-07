import React, { useRef } from 'react';
import { Canvas, useFrame, } from "@react-three/fiber";
import { OrbitControls, useGLTF, SpotLight, useTexture } from "@react-three/drei";

import { NavLink } from 'react-router-dom';



function Football() {
    const texture = useTexture("/models/Material_diffuse.jpeg"); // Ensure correct path
    const { scene } = useGLTF("/models/footballsoccer_ball.glb"); // Load football model
    const footballRef = useRef();


    scene.traverse((child) => {
        if (child.isMesh) {
            child.material.map = texture;
            child.material.needsUpdate = true;
        }
    });


    // scene.traverse((child) => {
    //     if (child.isMesh) {
    //         child.material = new MeshStandardMaterial({color: 0x000000, map: texture});
    //     }
    // });

    // Rotate the football in place
    useFrame(() => {
        if (footballRef.current) {
            footballRef.current.rotation.z += 0.008;
        }
    });

    return <primitive object={scene} ref={footballRef} scale={2.4} position={[0, 0, 0]} />; // Increased scale
}

function Football3D() {
    return (
        <Canvas className=" object-cover"
            gl={{ toneMappingExposure: 1.5 }}
            camera={{ position: [0, 0, 4], fov: 5 }}> {/* Adjusted camera to fit larger ball */}
            {/* <ambientLight
                intensity={0.9}

            /> */}
            <directionalLight intensity={5} position={[10, 10, 10]} />
            <pointLight intensity={10} position={[5, 10, 5]} />
            <ambientLight intensity={10} />

            <SpotLight
                intensity={9}
                position={[0, 10, 10]}
            // angle={0.4}
            // penumbra={1}

            />

            <OrbitControls
                enableDamping={true}
                enableZoom={false}
                enablePan={true}
                minDistance={5}
                maxDistance={20}
                // minPolarAngle={0.5}
                // maxPolarAngle={1.5}
                autoRotate={false}
                // target={[0, 1, 0]}
                position0={[0, 0, 4]}

            />
            <Football />
        </Canvas>
    );
}



function Tennisball() {
    const { scene } = useGLTF("/models/tennis_ball.glb"); // Load football model
    const tennisballRef = useRef();

    // Rotate the football in place
    useFrame(() => {
        if (tennisballRef.current) {
            tennisballRef.current.rotation.z += 0.008;
        }
    });

    return <primitive object={scene} ref={tennisballRef} scale={2.4} position={[0, 0, 0]} />; // Increased scale
}

function Tennis3D() {
    return (
        <Canvas className=" object-cover"
            camera={{ position: [0, 0, 4], fov: 60 }}> {/* Adjusted camera to fit larger ball */}
            <ambientLight
                intensity={0.8}
                color="white"

            />

            <SpotLight
                intensity={0.6}
                position={[0, 10, 10]}
                angle={0.4}
                penumbra={1}

            />

            <OrbitControls
                enableDamping={true}
                enableZoom={false}
                enablePan={true}
                minDistance={5}
                maxDistance={20}
                // minPolarAngle={0.5}
                // maxPolarAngle={1.5}
                autoRotate={false}
                // target={[0, 1, 0]}
                position0={[0, 0, 4]}

            />
            <Tennisball />
        </Canvas>
    );
}

function HomePage() {
    return (
        <>
            {/* Hero Section */}
            <div
                className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: "url('/turf.jpg')" }}
            >
                <div className=" absolute inset-0 bg-black bg-opacity-50"></div>
                <div className=" relative text-center text-white px-6">
                    <h1 className="text-5xl font-extrabold drop-shadow-md">Book Your Game, Anytime!</h1>
                    <p className="mt-4 text-lg text-gray-200">
                        Find and book the best sports venues with ease.
                    </p>
                    <NavLink
                        to="/booking"
                        className="mt-6 inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-all shadow-lg focus:ring-2 focus:ring-green-300"
                    > Book Now</NavLink>
                </div>
            </div>

            {/* About Us Section */}
            <div className="py-16 bg-gray-100 text-center px-4 md:px-0">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
                    <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                        We provide an easy and hassle-free way to book sports venues for your favorite games.
                        Whether it’s football, cricket, or badminton, we’ve got you covered!
                    </p>
                </div>
            </div>

            {/* Popular Games Section */}
            <div className="py-16 px-4 md:px-0">
                <h2 className="text-4xl font-bold text-center text-gray-800">Popular Games</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10">
                    {[
                        { img: "cricket.jpg", title: "Cricket", desc: "Experience the thrill of batting, bowling, and fielding." },
                        { img: "football.jpg", title: "Football", desc: "Enjoy the fast-paced action of football with friends." },
                        { img: "badminton.jpg", title: "Badminton", desc: "Perfect for singles or doubles matches indoors." }
                    ].map((game, index) => (
                        <div key={index} className="bg-white shadow-xl rounded-xl overflow-hidden transform transition duration-300 hover:scale-105">
                            <img src={game.img} alt={game.title} className="w-full h-56 object-cover" />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-semibold text-gray-800">{game.title}</h3>
                                <p className="text-gray-600 mt-2">{game.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {/* 3D Sports Section */}
            <div className="flex justify-center items-center bg-gray-100 py-12 px-4 md:px-0" style={{ backgroundImage: "url('/turf.jpg')" }}>
                <div className="flex flex-col md:flex-row w-full max-w-6xl">
                    {/* 3D Football Section */}
                    <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-4">
                        <h2 className="text-3xl text-white font-bold mb-4 md:text-4xl">Experience 3D Football</h2>
                        <Football3D />
                    </div>

                    {/* 3D Tennis Section */}
                    <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-4">
                        <h2 className="text-3xl text-white font-bold mb-4 md:text-4xl">Experience 3D Tennis</h2>
                        <Tennis3D />
                    </div>
                </div>
            </div>


            {/* Testimonials Section */}
            <div className="py-16 bg-gray-100 px-4 md:px-0">
                <h2 className="text-4xl font-bold text-center text-gray-800">What Our Users Say</h2>
                <div className="max-w-4xl mx-auto mt-10 space-y-6">
                    {[
                        { quote: "Booking a football ground has never been easier. The experience was seamless!", name: "Alex D." },
                        { quote: "I love how simple and quick it is to find and book a badminton court!", name: "Maria S." }
                    ].map((testimonial, index) => (
                        <div key={index} className="bg-white p-8 shadow-xl rounded-lg text-center">
                            <p className="italic text-gray-700">"{testimonial.quote}"</p>
                            <p className="mt-4 font-semibold text-gray-900">- {testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default HomePage;
