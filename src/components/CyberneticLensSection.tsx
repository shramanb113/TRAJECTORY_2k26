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

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=1000%", // Extra long for full vertical pass
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
        y: "40vh" 
      });

      // 2. Open Iris & Reveal Content early (0 -> 0.25)
      tl.to(contentRef.current, {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        y: "10vh",
        duration: 0.25,
        ease: "power2.out",
      }, 0.05); // Start earlier

      // 3. Deep Vertical Scroll (0.25 -> 0.95)
      tl.to(contentRef.current, {
        y: "-200vh", // Even deeper to ensure phase 6 is seen
        duration: 0.7,
        ease: "none",
      }, 0.25);

      // 4. Individual card finesse
      const cards = gsap.utils.toArray(".featured-card");
      cards.forEach((card: any, i) => {
        tl.to(card, {
          opacity: 1,
          scale: 1,
          duration: 0.2,
          ease: "back.out(1.2)"
        }, 0.1 + (i * 0.08));
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
          className="absolute inset-0 flex flex-col items-center justify-start pt-20 px-4 z-25 pointer-events-none"
        >
          {/* Re-enable events once they start appearing */}
          <div className="pointer-events-auto">
             <FeaturedEvents />
          </div>
        </div>

        {/* The 3D Lens (Behind the content once we 'enter') - Z-20 */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <Canvas
            camera={{ position: [0, 0, 10], fov: 45 }}
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
           <div className="absolute top-10 left-10 text-[10px] font-mono text-primary animate-pulse">SYSTEM_SCAN: ACTIVE</div>
        </div>
      </div>
    </section>
  );
};

export default CyberneticLensSection;
