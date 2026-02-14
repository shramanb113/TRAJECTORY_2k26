"use client";

import { useRef } from "react";
import { useScroll } from "motion/react";
import { Canvas } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";
import NeuralCore from "./NeuralCore";

const NeuralInterfaceSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} className="h-[150vh] w-full relative z-20 bg-black overflow-hidden">
      <div className="sticky top-0 h-screen w-full">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }} gl={{ antialias: true }}>
          <color attach="background" args={["#000000"]} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          
          <ambientLight intensity={0.5} />
          
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <NeuralCore scrollProgress={scrollYProgress} />
          </Float>
        </Canvas>
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
           <h2 className="text-[var(--color-primary)] text-4xl md:text-6xl font-bold uppercase tracking-[0.5em] opacity-30 blur-sm animate-pulse">
             Singularity
           </h2>
        </div>
      </div>
    </section>
  );
};

export default NeuralInterfaceSection;
