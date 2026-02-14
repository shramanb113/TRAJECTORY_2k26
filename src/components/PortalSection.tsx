"use client";

import { useRef } from "react";
import { useScroll } from "motion/react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, Stars } from "@react-three/drei";
import ShatteredPortal from "./ShatteredPortal";

const PortalSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} className="h-[150vh] w-full relative z-20 bg-black overflow-hidden">
      <div className="sticky top-0 h-screen w-full">
        {/* Cinematic Lighting Setup */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-0 pointer-events-none" />
        
        <Canvas camera={{ position: [0, 0, 6], fov: 50 }} gl={{ antialias: true }}>
          <color attach="background" args={["#000000"]} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          
          {/* Backlight to shine through glass */}
          <pointLight position={[0, 0, -5]} intensity={5} color="#00ffff" />
          <pointLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
          
          <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
            <ShatteredPortal scrollProgress={scrollYProgress} />
          </Float>
          
          <Environment preset="night" />
        </Canvas>
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
           <h2 className="text-[var(--color-primary)] text-5xl md:text-8xl font-black uppercase italic tracking-tighter opacity-10 mix-blend-overlay">
             BREAKTHROUGH
           </h2>
        </div>
      </div>
    </section>
  );
};

export default PortalSection;
