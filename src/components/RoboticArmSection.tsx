"use client";

import { useScroll } from "motion/react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, Stars, ContactShadows } from "@react-three/drei";
import { useRef } from "react";
import ComplexRoboticArm from "./ComplexRoboticArm";

const RoboticArmSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} className="h-[200vh] relative z-20 bg-black overflow-hidden">
      <div className="sticky top-0 h-screen w-full">
        <Canvas shadows camera={{ position: [4, 4, 10], fov: 35 }} gl={{ antialias: true }}>
          <color attach="background" args={["#050505"]} />
          <fog attach="fog" args={['#050505', 8, 30]} />
          
          <Stars radius={100} depth={50} count={7000} factor={4} saturation={0} fade speed={1} />
          
          {/* Enhanced Lighting for Metallic Look */}
          <ambientLight intensity={0.5} />
          <spotLight 
            position={[10, 15, 10]} 
            angle={0.3} 
            penumbra={1} 
            intensity={2} 
            castShadow 
            shadow-bias={-0.0001}
            color="#ffffff"
          />
          <pointLight position={[-10, 5, -10]} intensity={1} color="#E65100" />
          <pointLight position={[0, -5, 5]} intensity={0.5} color="#00bcd4" />

          <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
            <ComplexRoboticArm scrollProgress={scrollYProgress} />
          </Float>
          
          <ContactShadows resolution={1024} scale={20} blur={2} opacity={0.5} far={10} color="#000000" />
          
          <Environment preset="night" />
        </Canvas>
        
        {/* Helper Text */}
        <div className="absolute bottom-10 left-0 right-0 text-center pointer-events-none">
           <h2 className="text-[var(--color-primary)] text-2xl font-bold uppercase tracking-widest opacity-50 drop-shadow-[0_0_10px_rgba(230,81,0,0.5)]">
             Initializing Fabrication Sequence...
           </h2>
        </div>
      </div>
    </section>
  );
};

export default RoboticArmSection;
