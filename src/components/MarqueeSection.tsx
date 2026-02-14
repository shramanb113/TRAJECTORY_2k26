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
}: {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
  className?: string;
}) => {
  return (
    <div className={`flex overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="flex gap-10 py-2"
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
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[var(--color-primary)] opacity-20"
          >
            {item}
          </span>
        ))}
      </motion.div>
      <motion.div
        className="flex gap-10 py-2"
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
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[var(--color-primary)] opacity-20"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const MarqueeSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen bg-black flex flex-col justify-center overflow-hidden cursor-none"
    >
      {/* Background Marquees (Dim/Hidden) */}
      <div className="absolute inset-0 flex flex-col justify-center gap-6 opacity-20 pointer-events-none">
        <MarqueeRow items={marqueeItems} direction="left" speed={40} />
        <MarqueeRow items={marqueeItems} direction="right" speed={30} />
        <MarqueeRow items={marqueeItems} direction="left" speed={35} />
        <MarqueeRow items={marqueeItems} direction="right" speed={25} />
      </div>

      {/* Spotlight Logic: We render the SAME content but masked heavily */}
      <div
        className="absolute inset-0 flex flex-col justify-center gap-6 pointer-events-none"
        style={{
          maskImage: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
        }}
      >
        <MarqueeRow
          items={marqueeItems}
          direction="left"
          speed={40}
          className="[&>div>span]:opacity-100 [&>div>span]:text-[var(--color-accent)] [&>div>span]:drop-shadow-[0_0_10px_var(--color-primary)]"
        />
        <MarqueeRow
          items={marqueeItems}
          direction="right"
          speed={30}
          className="[&>div>span]:opacity-100 [&>div>span]:text-[var(--color-accent)] [&>div>span]:drop-shadow-[0_0_10px_var(--color-primary)]"
        />
        <MarqueeRow
          items={marqueeItems}
          direction="left"
          speed={35}
          className="[&>div>span]:opacity-100 [&>div>span]:text-[var(--color-accent)] [&>div>span]:drop-shadow-[0_0_10px_var(--color-primary)]"
        />
        <MarqueeRow
          items={marqueeItems}
          direction="right"
          speed={25}
          className="[&>div>span]:opacity-100 [&>div>span]:text-[var(--color-accent)] [&>div>span]:drop-shadow-[0_0_10px_var(--color-primary)]"
        />
      </div>
    </section>
  );
};

export default MarqueeSection;
