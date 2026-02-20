"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B0F1A] flex flex-col items-center justify-center p-6 text-center font-mono relative overflow-hidden text-accent">
      {/* Background "Noise" and Distortion */}
      <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-screen" 
           style={{ backgroundImage: 'url("https://media.giphy.com/media/oEI9uWU0EB9PC/giphy.gif")' }} />
      
      {/* Error Hexagon Frame */}
      <div className="relative z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative inline-block mb-12"
        >
          <div className="text-9xl md:text-[12rem] font-black text-secondary/20 relative">
            404
            <div className="absolute inset-0 text-white/10 blur-sm">404</div>
          </div>
          
          {/* Glitch Overlay */}
          <motion.div 
            animate={{ 
              x: [0, -2, 2, -1, 0],
              opacity: [1, 0.8, 1, 0.9, 1]
            }}
            transition={{ duration: 0.2, repeat: Infinity, repeatType: "mirror" }}
            className="absolute inset-0 flex items-center justify-center text-secondary/80 text-8xl md:text-[10rem] font-black pointer-events-none overflow-hidden"
            style={{ clipPath: 'inset(45% 0 45% 0)' }}
          >
            404
          </motion.div>
        </motion.div>

        <div className="max-w-xl mx-auto space-y-6">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-4xl text-accent font-bold tracking-tighter uppercase"
          >
            Nexus Point Not Found
          </motion.h1>

          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-primary/70 text-sm md:text-base leading-relaxed"
          >
            The sector you are trying to access has been <span className="text-secondary font-bold">[PURGED/CORRUPTED]</span>. 
            Your presence has been logged. Please return to the central hub immediately.
          </motion.p>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="pt-8"
          >
            <Link 
              href="/" 
              className="group relative px-8 py-3 bg-primary text-black font-bold uppercase tracking-widest transition-all hover:bg-secondary hover:text-white hover:scale-105 inline-block"
            >
              <span className="relative z-10">Return to Terminal</span>
              {/* Button Glow Effect */}
              <div className="absolute inset-0 bg-secondary/50 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative Binary Rain Overlay (Subtle) */}
      <div className="absolute top-0 bottom-0 left-4 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-0 bottom-0 right-4 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      
      {/* HUD Elements */}
      <div className="absolute bottom-6 left-6 text-[10px] text-secondary/40 text-left">
        ERR_CODE: LINK_MISSING_0x404<br />
        SECTOR: UNKNOWN_VOID
      </div>
      <div className="absolute bottom-6 right-6 text-[10px] text-secondary/40 text-right uppercase tracking-widest">
        Unauthorized access detected
      </div>
    </div>
  );
}
