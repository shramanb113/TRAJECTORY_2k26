"use client";
import About from "@/components/aboutgrid";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "motion/react";

const AbtPage = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
    
      useEffect(() => {
    
        gsap.to(boxRef.current, {
          y: -50,
          opacity: 1,
          delay: 0.2,
          duration: 0.9,
          ease: "power3.out"
        });
      }, []);
      const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };
  return (
    <div className="w-full flex flex-col justify-center items-center inset-0">

      {/* background */}
        <Image
        src="/bg-new.webp"
        alt="background"

        fill
        className="object-cover opacity-20 blur-xs"
        >

        </Image>

        {/* header and actual card grid */}
        <div className="pt-50 opacity-0 flex flex-col items-center justify-evenly" ref={boxRef}>
          <div className="mb-20">
          <motion.div
          className="relative z-10 text-center mt-1 pb-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
   <motion.h1
      variants={itemVariants}
      className="text-4xl md:text-8xl font-black tracking-tighter text-primary drop-shadow-[0_0_15px_rgba(0,229,255,0.5)] mb-4 glitch"
      data-text="ABOUT"
    >
      TRAJECTORY <span className="text-accent">2K26</span>
    </motion.h1>
  </motion.div>
        </div>
            <About></About>
        </div>

        {/* footer */}
        <div className="mt-[50px]">
            <Footer></Footer>
        </div>
    </div>
  )
}

export default AbtPage;
