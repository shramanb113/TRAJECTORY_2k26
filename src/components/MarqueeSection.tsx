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
}: {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
  className?: string;
  itemClassName?: string;
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

  const mainItemClass = "text-[var(--color-accent)] drop-shadow-[0_0_10px_var(--color-primary)] opacity-100";
  const bgItemClass = "text-[var(--color-primary)] opacity-45";

  return (
    <section
      ref={containerRef}
      className="relative w-full py-20 md:py-32 bg-black flex flex-col justify-center overflow-hidden"
    >
      {/* Robotic Scanline Overlay */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />

      <div className="relative flex flex-col justify-center gap-4 md:gap-8">
        <MarqueeRow items={marqueeItems} direction="left" speed={40} itemClassName={mainItemClass} />
        <MarqueeRow 
          items={marqueeItems} 
          direction="right" 
          speed={30} 
          className="scale-95" 
          itemClassName={bgItemClass}
        />
        <MarqueeRow items={marqueeItems} direction="left" speed={35} itemClassName={mainItemClass} />
        <MarqueeRow 
          items={marqueeItems} 
          direction="right" 
          speed={25} 
          className="scale-90"
          itemClassName={bgItemClass}
        />
      </div>

      {/* Decorative Robotic Border Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
};

export default MarqueeSection;
