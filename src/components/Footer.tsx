"use client";

import Link from "next/link";
import { Instagram, Linkedin, Facebook, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative w-full py-20 bg-black border-t border-white/5 overflow-hidden">
      {/* Background HUD Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(230,81,0,0.1)_1px,transparent_1px)] bg-[size:100%_40px]" />
        <div className="absolute top-0 right-10 w-px h-full bg-primary/20" />
        <div className="absolute top-0 left-10 w-px h-full bg-primary/20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center gap-12">
          
          {/* Main Linktree Button Area */}
          <div className="w-full max-w-2xl">
            <Link 
              href="https://linktr.ee/trajectoryjumech?fbclid=PAZXh0bgNhZW0CMTEAAaajz1I4w0OH00Qw7UtFQyHtOTuEdyiokldRelhsoZ4jyZgJvdnJ57qURH4_aem_KOr5iI6NgY0WGz17PuGT3A"
              target="_blank"
              className="group relative block w-full bg-[#0a0a0a] border border-primary/20 p-8 md:p-12 hover:border-primary/60 transition-all duration-700 hover:shadow-[0_0_50px_rgba(230,81,0,0.15)] overflow-hidden"
            >
              {/* Scanline Animation */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity">
                <div className="w-full h-2 bg-primary absolute top-0 animate-[scan_2s_linear_infinite]" />
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                <div className="text-center md:text-left">
                  <span className="text-primary font-mono text-[10px] tracking-[0.5em] uppercase mb-2 block opacity-80">System Access</span>
                  <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter group-hover:text-primary transition-colors duration-500">
                    Join The Revolution
                  </h3>
                  <p className="text-white/60 font-mono text-xs mt-2 uppercase tracking-widest">Connect via Linktree</p>
                </div>
                <div className="p-4 bg-primary/10 border border-primary/20 rounded-full group-hover:scale-125 group-hover:bg-primary transition-all duration-700">
                  <ExternalLink className="w-8 h-8 text-primary group-hover:text-black transition-colors" />
                </div>
              </div>

              {/* Technical Accents */}
              <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-primary/40" />
              <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-primary/40" />
            </Link>
          </div>

          {/* Social Icons & Info */}
          <div className="flex flex-col items-center gap-8">
            <div className="flex gap-6 md:gap-10">
              <Link 
                href="https://www.instagram.com/trajectory_jumech/" 
                target="_blank"
                className="group relative p-4 border border-white/5 bg-[#050505] hover:border-primary/40 transition-all duration-500"
              >
                <Instagram className="w-6 h-6 text-white/70 group-hover:text-primary transition-colors duration-300" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-primary/5 blur-sm" />
              </Link>
              
              <Link 
                href="https://www.linkedin.com/company/trajectoryjumech/" 
                target="_blank"
                className="group relative p-4 border border-white/5 bg-[#050505] hover:border-primary/40 transition-all duration-500"
              >
                <Linkedin className="w-6 h-6 text-white/70 group-hover:text-primary transition-colors duration-300" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-primary/5 blur-sm" />
              </Link>

              <Link 
                href="https://www.facebook.com/profile.php?id=61572408332143" 
                target="_blank"
                className="group relative p-4 border border-white/5 bg-[#050505] hover:border-primary/40 transition-all duration-500"
              >
                <Facebook className="w-6 h-6 text-white/70 group-hover:text-primary transition-colors duration-300" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-primary/5 blur-sm" />
              </Link>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-4">
                 <div className="w-20 h-px bg-white/10" />
                 <span className="text-[10px] font-mono text-white/80 uppercase tracking-[0.3em]">Trajectory_2k26</span>
                 <div className="w-20 h-px bg-white/10" />
              </div>
              <p className="text-[10px] font-mono text-white/70 uppercase tracking-widest mt-4">
                © 2026 Trajectory. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Extreme Bottom Tech Accent */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-primary/20 to-transparent" />
    </footer>
  );
};

export default Footer;
