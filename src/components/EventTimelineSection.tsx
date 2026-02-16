"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const EventTimelineSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const events = [
    {
      day: "Day 1",
      date: "April 2, 2026",
      title: "Opening Ceremony!",
      desc: "Get ready for a day of fun and games, and meet your fellow participants.",
    },
    {
      day: "Day 2",
      date: "April 3, 2026",
      title: "Hardware Showdown!",
      desc: "Learn how to build your own AR/VR hardware from scratch.",
    },
    {
      day: "Day 3",
      date: "April 4, 2026",
      title: "Brainstorming!",
      desc: "Engage in a quiz debate and collaborative sessions to generate innovative ideas.",
    },
    {
      day: "Final Night",
      date: "April 4, 2026",
      title: "Closing Ceremony",
      desc: "Closing ceremony and awards presentation. Celebrate your achievements with your team!",
    },
  ];

  useGSAP(
    () => {
      if (!containerRef.current || !lineRef.current) return;

      // 1. Progress Line Animation
      gsap.to(lineRef.current, {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 20%",
          end: "bottom 80%",
          scrub: 1,
        },
      });

      // 2. Individual Item Animations
      const cards = gsap.utils.toArray(".timeline-item");
      cards.forEach((card: any, i) => {
        const isEven = i % 2 === 0;
        
        gsap.from(card, {
          x: isEven ? -100 : 100,
          opacity: 0,
          scale: 0.8,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 60%",
            scrub: 1,
          },
        });

        // Small indicator circle animation
        gsap.from(card.querySelector(".dot"), {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="relative w-full py-32 bg-black overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 relative">
        
        {/* Header */}
        <div className="text-center mb-24 md:mb-40">
          <h2 className="text-4xl md:text-8xl font-black text-white uppercase tracking-tighter filter drop-shadow-[0_0_20px_rgba(230,81,0,0.5)]">
            Event Timeline
          </h2>
          <p className="text-primary font-mono text-sm mt-4 tracking-[0.3em] uppercase opacity-60">The Realignment Sequence</p>
        </div>

        {/* Central Vertical Line Container */}
        <div className="absolute left-1/2 -translate-x-1/2 top-60 md:top-80 bottom-20 w-[2px] bg-white/5 z-0 hidden md:block">
           <div ref={lineRef} className="absolute top-0 left-0 w-full h-0 bg-primary shadow-[0_0_15px_var(--color-primary)]" />
        </div>

        {/* Mobile Left-Aligned Line */}
        <div className="absolute left-8 top-60 bottom-20 w-[2px] bg-white/5 z-0 md:hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-primary via-primary/50 to-transparent" />
        </div>

        {/* Timeline Items */}
        <div className="relative max-w-6xl mx-auto flex flex-col gap-24 md:gap-40">
          {events.map((event, i) => {
            const isEven = i % 2 === 0;
            return (
              <div 
                key={i} 
                className={`timeline-item flex items-center justify-center md:justify-between w-full relative ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Visual Dot on the line */}
                <div className="dot absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-primary bg-black z-10 hidden md:block shadow-[0_0_10px_var(--color-primary)]" />
                
                {/* Mobile Dot */}
                <div className="absolute left-4 w-4 h-4 rounded-full border-2 border-primary bg-black z-10 md:hidden shadow-[0_0_10px_var(--color-primary)]" />

                {/* Content Block */}
                <div className={`w-full md:w-[45%] ml-12 md:ml-0 group`}>
                   <div className="relative bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(230,81,0,0.05)] overflow-hidden">
                      {/* Decorative Background Number */}
                      <div className="absolute -right-4 -bottom-8 text-[10rem] font-black text-primary/5 group-hover:text-primary/10 transition-colors duration-500 select-none pointer-events-none">
                        {i + 1}
                      </div>

                      {/* Scanning Line Overlay */}
                      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl overflow-hidden">
                        <div className="w-full h-[2px] bg-primary absolute top-0 animate-[scan_4s_linear_infinite]" />
                      </div>

                      <div className="flex flex-col gap-4 relative z-10">
                        <div className="flex justify-between items-center">
                          <span className="text-primary font-mono text-xs tracking-widest uppercase">{event.day}</span>
                          <span className="text-white font-mono text-[10px]">{event.date}</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black text-white uppercase group-hover:text-primary transition-colors duration-300">
                          {event.title}
                        </h3>
                        <p className="text-white text-sm md:text-base leading-relaxed font-light">
                          {event.desc}
                        </p>
                      </div>

                      {/* Accent Corner */}
                      <div className={`absolute top-0 ${isEven ? 'right-0' : 'left-0'} w-12 h-12 border-t-2 border-${isEven ? 'r' : 'l'}-2 border-primary/20 group-hover:border-primary/60 transition-colors duration-500 rounded-${isEven ? 'tr' : 'tl'}-2xl`} />
                   </div>
                </div>

                {/* Empty Spacer for Desktop Layout */}
                <div className="hidden md:block w-[45%]" />
              </div>
            );
          })}
        </div>

        {/* HUD Elements */}
        <div className="mt-40 text-center flex flex-col items-center gap-4 opacity-30">
           <div className="w-[1px] h-20 bg-linear-to-b from-primary/50 to-transparent" />
           <span className="text-[10px] font-mono text-primary tracking-[0.5em] uppercase">End of Sequence</span>
        </div>
      </div>
    </section>
  );
};

export default EventTimelineSection;
