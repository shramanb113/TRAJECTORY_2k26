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

      // 0. Ensure definitive hidden state before animation
      gsap.set([contentRef.current, ".featured-card"], { opacity: 0, y: 30 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          scrub: false,
        },
      });

      // 1. Reveal Container
      tl.to(contentRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // 2. Staggered reveal of cards
      tl.to(".featured-card", {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
      }, "-=0.4");
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="relative z-30 bg-[#0B0F1A] overflow-hidden border-t border-white/5 py-20 px-4 text-accent">
      <div
        ref={triggerRef}
        className="w-full max-w-7xl mx-auto relative"
      >
        {/* Simple Technical Background */}
        <div className="absolute inset-0 pointer-events-none opacity-20 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.05)_0%,transparent_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        {/* Featured Events Layer */}
        <div 
          ref={contentRef}
          className="w-full"
        >
          <FeaturedEvents />
        </div>

        {/* Minimal HUD Overlays - Repositioned for standard flow */}
        <div className="absolute top-0 left-0 w-full pointer-events-none z-30 opacity-30 py-4">
           <div className="flex justify-between items-start text-[8px] font-mono text-primary/60 px-4">
             <div className="flex flex-col gap-1">
               <span>SYS_MODE: STABLE</span>
               <span className="animate-pulse">SIGNAL_LOCK: 100%</span>
             </div>
             <div className="text-right">
               <span>LATENCY: 12ms</span>
               <span>FPS: 60.0</span>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default CyberneticLensSection;
