"use client";

import { useRef } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { EffectComposer, Bloom, ChromaticAberration, Vignette } from "@react-three/postprocessing";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import CyberneticLens from "./CyberneticLens";
import FeaturedEvents from "./FeaturedEvents";
import RoboticTunnel from "./RoboticTunnel";

gsap.registerPlugin(ScrollTrigger);

const CyberneticLensSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!triggerRef.current || !contentRef.current) return;

      const isMobile = window.innerWidth < 768;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: isMobile ? "+=1200%" : "+=1000%", // Even longer on mobile for full card reveal
          scrub: 1,
          pin: true,
          onUpdate: (self: any) => {
            progressRef.current = self.progress;
          },
        },
      });

      // 1. Initial State - Pre-reveal
      gsap.set(contentRef.current, { 
        opacity: 0, 
        scale: 0.8, 
        filter: "blur(20px)",
        y: isMobile ? "20vh" : "40vh" 
      });

      // 2. Open Iris & Reveal Content early
      tl.to(contentRef.current, {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        y: "5vh",
        duration: 0.25,
        ease: "power2.out",
      }, 0.05);

      // 3. Deep Vertical Scroll
      tl.to(contentRef.current, {
        y: isMobile ? "-600vh" : "-220vh", // Deepest possible to ensure Phase 6 is seen
        duration: 0.75, // Slightly longer duration for the deeper move
        ease: "none",
      }, 0.25);

      // 4. Staggered reveal of cards with Side-to-Side entry
      const cards = gsap.utils.toArray(".featured-card");
      cards.forEach((card: any, i) => {
        const isLeft = i % 2 === 0;
        const offsetX = isMobile ? 40 : 150; 
        
        gsap.set(card, { 
          opacity: 0, 
          scale: 0.8, 
          x: isLeft ? -offsetX : offsetX,
          y: isMobile ? 20 : 40
        });

        tl.to(card, {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          duration: 0.2, // Faster entry
          ease: "back.out(1.2)"
        }, 0.12 + (i * 0.06)); // Faster stagger
      });
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="relative z-30 bg-black overflow-hidden">
      <div
        ref={triggerRef}
        className="h-screen w-full relative"
      >
        {/* Featured Events now on top for guaranteed visibility and interaction - Z-25 */}
        <div 
          ref={contentRef}
          className="absolute inset-0 flex flex-col items-center justify-start pt-10 md:pt-20 px-4 z-25 pointer-events-none"
        >
          {/* Re-enable events once they start appearing */}
          <div className="pointer-events-auto w-full">
             <FeaturedEvents />
          </div>
        </div>

        {/* The 3D Lens (Behind the content once we 'enter') - Z-20 */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <Canvas
            camera={{ 
              position: [0, 0, 10], 
              fov: typeof window !== 'undefined' && window.innerWidth < 768 ? 75 : 45 
            }}
            gl={{ antialias: true, alpha: true }}
          >
            <ambientLight intensity={0.2} />
            <pointLight position={[5, 5, 5]} intensity={2} color="#00ffff" />
            
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
              <CyberneticLens scrollProgress={progressRef} />
            </Float>

            <RoboticTunnel progress={progressRef} />

            <Environment preset="city" />

            <EffectComposer multisampling={4}>
              <Bloom intensity={1.5} luminanceThreshold={0.1} />
              <ChromaticAberration offset={new THREE.Vector2(0.005, 0.005)} />
              <Vignette darkness={1.2} />
            </EffectComposer>
          </Canvas>
        </div>

        {/* Scanlines & HUD Overlay - Z-30 */}
        <div className="absolute inset-0 pointer-events-none z-30 opacity-20">
           <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,255,255,0.25)_50%)] bg-[length:100%_2px]" />
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]" />
           <div className="absolute top-6 left-6 md:top-10 md:left-10 text-[8px] md:text-[10px] font-mono text-primary animate-pulse">SYSTEM_SCAN: ACTIVE</div>
        </div>
      </div>
    </section>
  );
};

export default CyberneticLensSection;
