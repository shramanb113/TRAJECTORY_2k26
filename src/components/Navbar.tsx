"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const Navbar = () => {
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
       transition: { duration: 0.3, ease: "easeOut" as const }
    },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-transparent backdrop-blur-sm"
    >
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/logo.webp"
            alt="Trajectory Logo"
            width={80}
            height={80}
            className="w-20 h-20 object-contain"
          />
        </Link>
      </div>

      <div className="flex items-center gap-8">
        <motion.div variants={itemVariants}>
          <Link
            href="#explore"
            className="text-lg font-medium text-[var(--color-accent)] hover:text-[var(--color-primary)] transition-colors duration-300"
          >
            Explore
          </Link>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Link
            href="#about"
            className="text-lg font-medium text-[var(--color-accent)] hover:text-[var(--color-primary)] transition-colors duration-300"
          >
            About
          </Link>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Link
            href="/login"
            className="px-6 py-2 text-lg font-bold text-[var(--color-base)] bg-[var(--color-primary)] rounded-full hover:bg-[var(--color-secondary)] hover:text-[var(--color-accent)] transition-all duration-300 shadow-[0_0_10px_var(--color-primary)] hover:shadow-[0_0_20px_var(--color-secondary)]"
          >
            Login
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
