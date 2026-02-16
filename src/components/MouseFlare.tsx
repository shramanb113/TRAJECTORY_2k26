"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const MouseFlare = () => {
  const flareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!flareRef.current) return;

    const flare = flareRef.current;
    
    // quickTo for high-performance tracking
    const xTo = gsap.quickTo(flare, "x", { duration: 0.4, ease: "power3" });
    const yTo = gsap.quickTo(flare, "y", { duration: 0.4, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={flareRef}
      className="fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 pointer-events-none z-[9999] opacity-50 mix-blend-screen"
    >
      <div className="absolute inset-0 bg-primary blur-xl rounded-full opacity-40" />
      <div className="absolute inset-0 bg-primary/20 blur-sm rounded-full" />
    </div>
  );
};

export default MouseFlare;
