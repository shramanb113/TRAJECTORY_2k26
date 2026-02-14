"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/robot-human-silhouettes.webp"
          alt="Dystopian Hero Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        {/* Gradient Overlay for Dystopian Feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/90 pointer-events-none" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-black tracking-tighter text-[var(--color-primary)] drop-shadow-[0_0_15px_rgba(230,81,0,0.5)] mb-4 glitch"
          data-text="TRAJECTORY"
        >
          TRAJECTORY <span className="text-[var(--color-accent)]">2K26</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl font-light text-[var(--color-accent)] max-w-2xl mx-auto mb-10 tracking-wide"
        >
          The Future is Realigned. <br />
          Experience the mechanical revolution.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link
            href="#explore"
            className="px-8 py-4 text-xl font-bold text-[var(--color-base)] bg-[var(--color-primary)] rounded-none hover:bg-[var(--color-secondary)] hover:text-[var(--color-accent)] transition-all duration-300 shadow-[0_0_20px_var(--color-primary)] hover:shadow-[0_0_30px_var(--color-secondary)] uppercase tracking-wider clip-path-polygon"
          >
            Explore Events
          </Link>
          <Link
            href="/login"
            className="px-8 py-4 text-xl font-bold text-[var(--color-primary)] border-2 border-[var(--color-primary)] bg-transparent rounded-none hover:bg-[var(--color-primary)] hover:text-[var(--color-base)] transition-all duration-300 uppercase tracking-wider"
          >
            Join the Resistance
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
