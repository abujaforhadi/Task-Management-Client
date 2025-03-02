import { Link } from "react-router"; 
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Banner = () => {
    return (
        <div className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
            {/* Three.js Canvas Background */}
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <Canvas>
                    <OrbitControls enableZoom={false} />
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[2, 2, 2]} />
                    <Sphere args={[1, 100, 200]} scale={2.5}>
                        <MeshDistortMaterial 
                            color="#5ae253" 
                            attach="material" 
                            distort={0.5} 
                            speed={2} 
                        />
                    </Sphere>
                </Canvas>
            </div>

            {/* Hero Content */}
            <div className="relative text-center px-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-[#5ae253]">
                    Boost Your Productivity <br /> with Smart Task Management
                </h1>
                <p className="py-4 text-lg text-gray-500">
                    Stay organized, plan efficiently, and execute tasks seamlessly. 
                    Our tool helps you manage projects and boost productivity effortlessly.
                </p>
                <Link to="/login">
                    <button className="btn bg-white border rounded-full px-6 py-3 text-black border-[#14a077] hover:bg-[#14a077] hover:text-white transition">
                        Get Started
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Banner;
