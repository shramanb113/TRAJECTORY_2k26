"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Loading() {
  const [loadingText, setLoadingText] = useState("INITIALIZING_SYSTEM");
  const texts = [
    "SYNCING_NEURAL_LINK",
    "INITIALIZING_QUANTUM_CORE",
    "BYPASSING_SECURE_NODE",
    "ESTABLISHING_CYBER_VORTEX",
    "CONNECTED_TO_SINGULARITY",
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setLoadingText(texts[i % texts.length]);
      i++;
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black font-mono overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }} 
      />
      
      {/* Scanner Beam */}
      <motion.div 
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-[2px] bg-primary/50 shadow-[0_0_15px_var(--color-primary)] z-10 pointer-events-none"
      />

      <div className="relative z-20 flex flex-col items-center">
        {/* Futuristic Hexagon Loader */}
        <div className="relative w-32 h-32 mb-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-4 border-t-primary border-r-transparent border-b-secondary border-l-transparent rounded-full shadow-[0_0_20px_rgba(0,229,255,0.3)]"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 border-2 border-t-accent border-r-transparent border-b-primary border-l-transparent rounded-full opacity-70"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-4 h-4 bg-accent shadow-[0_0_10px_var(--color-accent)] rounded-sm transform rotate-45"
            />
          </div>
        </div>

        {/* Loading Text with Glitch Effect */}
        <div className="flex flex-col items-center gap-2">
          <div className="text-accent text-sm tracking-[0.3em] uppercase opacity-50 mb-1">
            Accessing Terminal...
          </div>
          <motion.div 
            key={loadingText}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-primary text-xl font-bold tracking-widest flex items-center gap-2"
          >
            <span className="w-2 h-6 bg-primary animate-pulse" />
            {loadingText}
            <span className="text-[10px] opacity-50 bg-primary/20 px-1 ml-2">v2.026.0</span>
          </motion.div>
        </div>

        {/* Progress Bar Container */}
        <div className="mt-8 w-64 h-1 bg-white/10 relative overflow-hidden rounded-full">
          <motion.div 
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-primary to-transparent"
          />
        </div>
      </div>

      {/* Side Decorative Data */}
      <div className="absolute left-10 bottom-10 text-[10px] text-primary/30 space-y-1 hidden md:block">
        <div>[ STATUS: OK ]</div>
        <div>[ LINK: SECURE ]</div>
        <div>[ UPLINK: STABLE ]</div>
      </div>
      <div className="absolute right-10 bottom-10 text-[10px] text-primary/30 space-y-1 hidden md:block text-right">
        <div>COORDINATES: 23.0225° N, 72.5714° E</div>
        <div>TIME: {new Date().toLocaleTimeString()}</div>
      </div>
    </div>
  );
}
