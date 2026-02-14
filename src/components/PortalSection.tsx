"use client";

import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import EventTimelineSection from "./EventTimelineSection";
import ShatteredPortal from "./ShatteredPortal";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger) 


const PortalSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  // This ref drives the 3D animation without re-renders
  const progressRef = useRef(0);

  useGSAP(() => {
    if (!triggerRef.current || !timelineRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "+=500%", // Pin for 5 screens worth of scroll
        scrub: 1, // Smooth scrubbing
        pin: true,
        onUpdate: (self :any) => {
          // Update the ref for the 3D component to read
          progressRef.current = self.progress;
        }
      }
    });

    // Animate the DOM Layer (Timeline)
    // Hide initially
    gsap.set(timelineRef.current, { opacity: 0, scale: 0.8 });

    // Reveal deep in the scroll (0.6 to 0.9)
    tl.to(timelineRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.3, // relative to timeline duration (which is 1 total)
        ease: "power2.out"
    }, 0.6); // Start at 60% of the pinned distance

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative z-20 bg-black">
      {/* The Trigger Element (What gets pinned) */}
      <div ref={triggerRef} className="h-screen w-full relative overflow-hidden">
        
        {/* The Timeline INSIDE the portal (Behind the canvas) */}
        <div 
          ref={timelineRef}
          className="absolute inset-0 z-0 flex items-center justify-center opacity-0"
        >
          <EventTimelineSection />
        </div>

        {/* The 3D Portal (Transparent, on top) */}
        <Canvas camera={{ position: [0, 0, 6], fov: 50 }} gl={{ antialias: true, alpha: true }} className="relative z-10 pointer-events-none">
          <pointLight position={[0, 0, -5]} intensity={5} color="#00ffff" />
          <pointLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
          
          <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
            {/* Pass the REF, not a value */}
            <ShatteredPortal progress={progressRef} />
          </Float>
          
          <Environment preset="night" />
        </Canvas>
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
           <h2 className="text-[var(--color-primary)] text-5xl md:text-8xl font-black uppercase italic tracking-tighter opacity-10 mix-blend-overlay">
             BREAKTHROUGH
           </h2>
        </div>
      </div>
    </section>
  );
};

export default PortalSection;
