"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";

const EventTimelineSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);

  return (
    <section ref={containerRef} className="min-h-screen bg-black relative z-10 py-20">
      <div className="container mx-auto px-4">
        <motion.div style={{ opacity, y }} className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] uppercase tracking-tighter">
            Event Timeline
          </h2>
          <p className="mt-4 text-[var(--color-text-secondary)] text-xl max-w-2xl mx-auto">
            The sequence of events leading to the singularity.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto border-l-2 border-[var(--color-primary)] pl-8 space-y-12">
          {[
            { year: "2K26", title: "Initiation", desc: "System boot sequence engaged due to anomalies." },
            { year: "2027", title: "The Merge", desc: "Biological and digital entities begin detailed integration." },
            { year: "2028", title: "Total Recall", desc: "Global network archives all human memory." },
            { year: "2029", title: "Singularity", desc: "Machine intelligence surpasses collective human cognition." },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative"
            >
              <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[var(--color-accent)] border-4 border-black" />
              <div className="bg-[#111] p-6 rounded-lg border border-[#333] hover:border-[var(--color-primary)] transition-colors duration-300">
                <span className="text-[var(--color-primary)] font-mono text-sm tracking-widest">{item.year}</span>
                <h3 className="text-2xl font-bold text-white mt-1 mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventTimelineSection;
