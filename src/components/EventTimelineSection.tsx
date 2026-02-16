"use client";

import { motion } from "motion/react";

const EventTimelineSection = () => {
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

  return (
    <section className="relative w-full py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-4xl md:text-8xl font-black text-white uppercase tracking-tighter filter drop-shadow-[0_0_20px_rgba(230,81,0,0.5)]">
            Event Timeline
          </h2>
          <div className="h-1.5 w-24 md:w-40 bg-[var(--color-primary)] mx-auto mt-6 rounded-full shadow-[0_0_20px_var(--color-primary)]" />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {events.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl hover:border-[var(--color-primary)]/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(230,81,0,0.1)]"
            >
              {/* Robotic Accent Line */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-[var(--color-primary)] group-hover:w-full transition-all duration-700 ease-out" />
              
              <div className="flex flex-col h-full relative z-10">
                <span className="text-[var(--color-primary)] font-mono text-xs tracking-widest uppercase mb-2">
                  {item.day}
                </span>
                <span className="text-gray-600 font-mono text-[10px] mb-6">
                  {item.date}
                </span>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>

              {/* Background Decorative Element */}
              <div className="absolute bottom-4 right-4 text-white/5 font-mono text-6xl font-black pointer-events-none group-hover:text-[var(--color-primary)]/10 transition-colors duration-500">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventTimelineSection;
