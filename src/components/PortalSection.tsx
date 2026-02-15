"use client";

import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import EventTimelineSection from "./EventTimelineSection";
import ShatteredPortal from "./ShatteredPortal";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const PortalSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  // This ref drives the 3D animation without re-renders
  const progressRef = useRef(0);

  useGSAP(
    () => {
      if (!triggerRef.current || !timelineRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=600%", // Slightly more room for the sequence
          scrub: 1,
          pin: true,
          onUpdate: (self: any) => {
            progressRef.current = self.progress;
          },
        },
      });

      // 0. Set initial states
      gsap.set(timelineRef.current, { opacity: 0, scale: 0.9 });
      gsap.set(".timeline-heading", { opacity: 0, y: 30 });
      gsap.set(".timeline-card", { opacity: 0, y: 50, scale: 0.8 });

      // 1. Reveal container and heading early
      tl.to(timelineRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.2,
      }, 0.3); // Reveal earlier

      tl.to(".timeline-heading", {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power3.out"
      }, 0.35);

      // 2. Staggered reveal of cards
      const cards = gsap.utils.toArray(".timeline-card");
      cards.forEach((card: any, i) => {
        tl.to(card, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.4,
          ease: "back.out(1.4)",
        }, 0.45 + (i * 0.1)); 
      });

      // 3. Keep it fully visible until the end
      tl.to([".timeline-heading", ".timeline-card"], {
        opacity: 1,
        duration: 0.1,
      }, 0.95);
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="relative z-20 bg-black">
      <div
        ref={triggerRef}
        className="h-screen w-full relative overflow-hidden"
      >
        {/* Adjusted Z-index to be on top of the canvas for visibility */}
        <div
          ref={timelineRef}
          className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
        >
          <EventTimelineSection />
        </div>

        <Canvas
          camera={{ position: [0, 0, 6], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
          className="relative z-10 pointer-events-none"
        >
          <pointLight position={[0, 0, -5]} intensity={5} color="#00ffff" />
          <pointLight position={[5, 5, 5]} intensity={1} color="#ffffff" />

          <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
            <ShatteredPortal progress={progressRef} />
          </Float>

          <Environment preset="night" />
        </Canvas>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
          <h2 className="text-primary text-5xl md:text-8xl font-black uppercase italic tracking-tighter opacity-10 mix-blend-overlay"></h2>
        </div>
      </div>
    </section>
  );
};

export default PortalSection;
