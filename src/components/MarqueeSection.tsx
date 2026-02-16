"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";

const topics = [
  "Machine Design",
  "Thermal Engineering",
  "Fluid Mechanics",
  "Structural Engineering",
  "Control Systems",
  "Signal Processing",
  "Numerical Methods",
  "Power Electronics",
  "Digital Circuits",
  "Heat Transfer",
];

// Duplicate topics to ensure smooth infinite scroll
const marqueeItems = [...topics, ...topics, ...topics];

const MarqueeRow = ({
  items,
  direction = "left",
  speed = 20,
  className = "",
  itemClassName = "",
  color = "#FFD580",
}: {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
  className?: string;
  itemClassName?: string;
  color?: string;
}) => {
  return (
    <div className={`flex overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="flex gap-6 md:gap-10 py-2"
        animate={{
          x: direction === "left" ? "-50%" : "0%",
        }}
        initial={{
          x: direction === "left" ? "0%" : "-50%",
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {items.map((item, index) => (
          <span
            key={index}
            className={`text-2xl md:text-6xl font-black uppercase tracking-tighter ${itemClassName}`}
            style={{ 
              color: color,
              textShadow: `0 0 15px ${color}80` 
            }}
          >
            {item}
          </span>
        ))}
      </motion.div>
      <motion.div
        className="flex gap-6 md:gap-10 py-2"
        animate={{
          x: direction === "left" ? "-50%" : "0%",
        }}
        initial={{
          x: direction === "left" ? "0%" : "-50%",
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {items.map((item, index) => (
          <span
            key={`dup-${index}`}
            className={`text-2xl md:text-6xl font-black uppercase tracking-tighter ${itemClassName}`}
            style={{ 
              color: color,
              textShadow: `0 0 15px ${color}80` 
            }}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const MarqueeSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const rowColors = ["#FFD580", "#F5B041", "#FFD580", "#F5B041"];

  return (
    <section
      ref={containerRef}
      className="relative w-full py-20 md:py-32 bg-black flex flex-col justify-center overflow-hidden"
    >
      {/* CRT Monitor Frame (Left/Right Borders) */}
      <div className="absolute left-0 top-0 w-1 md:w-2 h-full bg-primary/20 border-r border-primary/40 z-30" />
      <div className="absolute right-0 top-0 w-1 md:w-2 h-full bg-primary/20 border-l border-primary/40 z-30" />
      
      {/* Chassis Corner Accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/60 z-40" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/60 z-40" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/60 z-40" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/60 z-40" />

      {/* CRT Overlay Layer */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_60%,rgba(0,0,0,0.7)_100%)]" />
        
        {/* Scanlines */}
        <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.4)_50%)] bg-[length:100%_4px]" />
        
        {/* Flicker Effect */}
        <div className="absolute inset-0 bg-white/5 animate-[flicker_0.15s_infinite] opacity-[0.03]" />
      </div>

      <div className="relative flex flex-col justify-center gap-4 md:gap-8 z-10">
        <MarqueeRow items={marqueeItems} direction="left" speed={40} color={rowColors[0]} itemClassName="opacity-100" />
        <MarqueeRow 
          items={marqueeItems} 
          direction="right" 
          speed={30} 
          className="scale-95" 
          color={rowColors[1]}
          itemClassName="opacity-80"
        />
        <MarqueeRow items={marqueeItems} direction="left" speed={35} color={rowColors[2]} itemClassName="opacity-100" />
        <MarqueeRow 
          items={marqueeItems} 
          direction="right" 
          speed={25} 
          className="scale-90"
          color={rowColors[3]}
          itemClassName="opacity-80"
        />
      </div>

      <style jsx global>{`
        @keyframes flicker {
          0% { opacity: 0.01; }
          5% { opacity: 0.05; }
          10% { opacity: 0.01; }
          15% { opacity: 0.08; }
          20% { opacity: 0.02; }
          25% { opacity: 0.05; }
          30% { opacity: 0.01; }
          100% { opacity: 0.02; }
        }
      `}</style>
    </section>
  );
};

export default MarqueeSection;
