"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import ImageCard from '../ImageCard/ImageCard';

const ImageCardContainer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const handleMouseMove = useCallback((e) => {
    if (!isTouchDevice) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
  }, [isTouchDevice]);

  useEffect(() => {
    setIsClient(true);
    
    // Detect if device supports touch events
    const checkTouchDevice = () => {
      const hasTouchEvents = 'ontouchstart' in window;
      const hasPointerEvents = navigator.pointerEnabled;
      const maxTouchPoints = navigator.maxTouchPoints;
      
      setIsTouchDevice(hasTouchEvents || hasPointerEvents || maxTouchPoints > 0);
    };
    
    checkTouchDevice();
    
    // Only add mouse move listener if not a touch device
    if (!isTouchDevice) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (!isTouchDevice) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [handleMouseMove, isTouchDevice]);

  const getParallaxOffset = (intensity) => {
    if (!isClient || isTouchDevice) return { x: 0, y: 0 };
    const x = (mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth / 2 : 0)) * intensity/2;
    const y = (mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight / 2 : 0)) * intensity/2;
    return { x, y };
  };

  const handleClose = (id) => {
    console.log(`Closing card ${id}`);
    // You can add logic here to handle card removal if needed
  };

  return (
    <div className="absolute inset-0 pointer-events-none z-101">
      {/* Individual Image Cards with Custom Positioning */}
      
      {/* Card 1 - Top right */}
      <motion.div
        className="absolute translate-x-1/2 -translate-y-1/2"
        style={{
          top: "0%",
          right: "0%",
          ...(isClient && {
            x: getParallaxOffset(0.035).x,
            y: getParallaxOffset(0.035).y,
          }),
        }}
         
        transition={{ type: "spring", stiffness: 300 }}
      >
        <ImageCard
          imageUrl="/Hero-Photos/picture-1.jpg"
          initialBlur={true}
          width="w-20 sm:w-28 lg:w-40"
          height="h-24 sm:h-32 lg:h-48"
        />
      </motion.div>

      {/* Card 2 - middle Right */}
      <motion.div
        className="absolute translate-x-[160%] "
        style={{
          top: "50%",
          right: "0%",
          ...(isClient && {
            x: getParallaxOffset(0.042).x,
            y: getParallaxOffset(0.042).y,
          }),
        }}
         
        transition={{ type: "spring", stiffness: 300 }}
      >
        <ImageCard
          imageUrl="/Hero-Photos/picture-2.jpg"
          initialBlur={false}
          width="w-18 sm:w-26 lg:w-36"
          height="h-22 sm:h-33 lg:h-44"
        />
      </motion.div>

      {/* Card 3 - bottom right */}
      <motion.div
        className="absolute translate-x-5/10 translate-y-4/3 md:translate-x-7/10 md:translate-y-5/5"
        style={{
          bottom: "0%",
          right: "0%",
          ...(isClient && {
            x: getParallaxOffset(0.045).x,
            y: getParallaxOffset(0.045).y,
          }),
        }}
         
        transition={{ type: "spring", stiffness: 300 }}
      >
        <ImageCard
          imageUrl="/Hero-Photos/picture-3.jpg"
          initialBlur={false}
          width="w-22 sm:w-33 lg:w-40"
          height="h-26 sm:h-38 lg:h-48"
        />
      </motion.div>

      {/* Card 4 - top left */}
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-4/10 "
        style={{
          top: "0%",
          left: "0%",
          ...(isClient && {
            x: getParallaxOffset(0.04).x,
            y: getParallaxOffset(0.04).y,
          }),
        }}
         
        transition={{ type: "spring", stiffness: 300 }}
      >
        <ImageCard
          imageUrl="/Hero-Photos/picture-4.jpg"
          initialBlur={false}
          width="w-18 sm:w-28 lg:w-38"
          height="h-24 sm:h-34 lg:h-46"
        />
      </motion.div>

      {/* Card 5 - Bottom Left */}
      <motion.div
        className="absolute -translate-x-3/2 -translate-y-1/2"
        style={{
          top: "50%",
          bottom: "0%",
          ...(isClient && {
            x: getParallaxOffset(0.035).x,
            y: getParallaxOffset(0.035).y,
          }),
        }}
         
        transition={{ type: "spring", stiffness: 300 }}
      >
        <ImageCard
          imageUrl="/Hero-Photos/picture-5.jpg"
          initialBlur={true}
          width="w-22 sm:w-33 lg:w-42"
          height="h-26 sm:h-38 lg:h-50"
        />
      </motion.div>

      {/* Card 6 - Bottom Right */}
      <motion.div
        className="absolute -translate-x-6/10 translate-y-4/3 md:-translate-x-4/10 md:translate-y-3/5"
        style={{
          bottom: "0%",
          left: "0%",
          
          
          ...(isClient && {
            x: getParallaxOffset(0.042).x,
            y: getParallaxOffset(0.042).y,
          }),
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <ImageCard
          imageUrl="/Hero-Photos/picture-6.jpg"
          initialBlur={false}
          width="w-22 sm:w-33 lg:w-40"
          height="h-26 sm:h-38 lg:h-48"
        />
      </motion.div>
    </div>
  );
};

export default ImageCardContainer;
