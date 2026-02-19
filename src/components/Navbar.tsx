"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "motion/react";

const Navbar = () => {

  const navigation = useRouter();

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
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-6 py-3 md:py-4 bg-transparent backdrop-blur-sm"
    >
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/logo.webp"
            alt="Trajectory Logo"
            width={60}
            height={60}
            className="w-12 h-12 md:w-20 md:h-20 object-contain"
          />
        </Link>
      </div>

      <div className="flex items-center gap-4 md:gap-8">
        <motion.div variants={itemVariants}>
          <Link
            href="#explore"
            className="text-sm md:text-lg font-medium text-[var(--color-accent)] hover:text-[var(--color-primary)] transition-colors duration-300"
          >
            Explore
          </Link>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Link
            href={"/about"}
            className="text-sm md:text-lg font-medium text-[var(--color-accent)] hover:text-[var(--color-primary)] transition-colors duration-300"
          >
            About
          </Link>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Link
            href="./src/app/login"
            className="px-4 md:px-6 py-1.5 md:py-2 text-sm md:text-lg font-bold text-[var(--color-vanta)] bg-[var(--color-primary)] rounded-full hover:bg-[var(--color-secondary)] hover:text-[var(--color-accent)] transition-all duration-300 shadow-[0_0_10px_var(--color-primary)] hover:shadow-[0_0_20px_var(--color-secondary)]"
          >
            Login
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
