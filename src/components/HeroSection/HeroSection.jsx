"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import ImageCardContainer from '../ImageCardContainer/ImageCardContainer';
import { FaLock, FaUnlock } from 'react-icons/fa';
import Image from "next/image";

const HeroSection = () => {
  const [hovered, setHovered] = useState(false);
  const containerRef = useRef(null);
  
  // Set up scroll-based animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Transform scroll progress to arrow positions
  // At scroll 0: arrows are at edges (50% from center each way)
  // At scroll 1: arrows meet in center (0% from center)
  const leftArrowX = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);
  const rightArrowX = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  return (
    <section 
      ref={containerRef}
      className=" bg-secondary-50 flex items-center justify-center container mx-auto overflow-hidden"
    >
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6">
        <div className="relative z-100 mx-auto max-w-7xl flex flex-col min-h-screen items-center justify-center md:gap-6">
          {/* Logo Row */}
          <motion.div
            className="hidden md:flex mb-3 sm:mb-4 items-center justify-center space-x-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Image src="/Vaultin Logo.png" alt="Logo" width={981} height={141} className='md:h-5 w-35 lg:w-42 lg:h-6' />
          </motion.div>

          {/* Hero Heading */}
          <motion.h1
            className="relative font-narkiss-hadash  text-secondary-900 pointer-events-none text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] xl:text-[7.5rem] font-black sm:mb-8 leading-[0.9]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <ImageCardContainer />
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              LOCK.
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              SHARE.
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              EARN.
            </motion.div>
          </motion.h1>
          
          {/* Animated Button */}
          <motion.button
            className="mt-10 md:mt-0 pointer-events-auto cursor-pointer bg-primary-light hover:scale-105 hover:bg-secondary-900 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 lg:px-8 lg:py-4 rounded-full text-base sm:text-lg lg:text-lg transition-all duration-300 flex items-center justify-center space-x-2 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Icon container */}
            <div className='relative w-4 h-4 sm:w-5 sm:h-5 overflow-hidden'>
              <AnimatePresence mode="wait" initial={false}>
                {hovered ? (
                  <motion.div
                    key="unlock"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 20, opacity: 0 }}
                    transition={{ duration: 0.1 }}
                    className="absolute"
                  >
                    <FaUnlock className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="lock"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 20, opacity: 0 }}
                    transition={{ duration: 0.1 }}
                    className="absolute"
                  >
                    <FaLock className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <span className="text-sm sm:text-base lg:text-lg">Start earning today</span>
          </motion.button>

          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;