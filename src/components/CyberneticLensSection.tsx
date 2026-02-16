"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import FeaturedEvents from "./FeaturedEvents";

gsap.registerPlugin(ScrollTrigger);

const CyberneticLensSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!triggerRef.current || !contentRef.current) return;

      const isMobile = window.innerWidth < 768;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: isMobile ? "+=1800%" : "+=1000%",
          scrub: 1,
          pin: true,
        },
      });

      // 1. Initial State
      gsap.set(contentRef.current, { 
        opacity: 0, 
        y: isMobile ? "20vh" : "30vh" 
      });

      // 2. Reveal Content
      tl.to(contentRef.current, {
        opacity: 1,
        y: "5vh",
        duration: 0.2,
        ease: "power2.out",
      }, 0.05);

      // 3. Deep Vertical Scroll for Cards
      tl.to(contentRef.current, {
        y: isMobile ? "-900vh" : "-220vh",
        duration: 0.8,
        ease: "none",
      }, 0.2);

      // 4. Clean Staggered Reveal of cards
      const cards = gsap.utils.toArray(".featured-card");
      cards.forEach((card: any, i) => {
        gsap.set(card, { 
          opacity: 0, 
          y: 60,
          scale: 0.95 
        });

        tl.to(card, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.25,
          ease: "power3.out"
        }, 0.15 + (i * 0.08));
      });
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="relative z-30 bg-black overflow-hidden border-t border-white/5">
      <div
        ref={triggerRef}
        className="h-screen w-full relative"
      >
        {/* Simple Technical Background */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(230,81,0,0.05)_0%,transparent_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        {/* Featured Events Layer */}
        <div 
          ref={contentRef}
          className="absolute inset-0 flex flex-col items-center justify-start pt-10 md:pt-20 px-4 z-25 pointer-events-none"
        >
          <div className="pointer-events-auto w-full max-w-7xl">
             <FeaturedEvents />
          </div>
        </div>

        {/* Minimal HUD Overlays */}
        <div className="absolute inset-0 pointer-events-none z-30 opacity-30 px-6 py-8">
           <div className="flex justify-between items-start text-[8px] font-mono text-primary/60">
             <div className="flex flex-col gap-1">
               <span>SYS_MODE: STABLE</span>
               <span className="animate-pulse">SIGNAL_LOCK: 100%</span>
             </div>
             <div className="text-right">
               <span>LATENCY: 12ms</span>
               <span>FPS: 60.0</span>
             </div>
           </div>
           
           <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
             <div className="w-px h-12 bg-linear-to-b from-primary/0 via-primary/50 to-primary/0" />
             <span className="text-[10px] font-mono text-primary/40 tracking-[0.3em] uppercase">Scroll to explore</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default CyberneticLensSection;
