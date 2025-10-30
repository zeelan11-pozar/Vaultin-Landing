"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import { HiLockOpen } from "react-icons/hi";

const ImageCard = ({
  imageUrl,
  initialBlur = false,
  className = "",
  width = "w-40",
  height = "h-52"
}) => {
  const [hovered, setHovered] = useState(false);

  // Decide if the image should look blurred
  const isBlurred = initialBlur ? !hovered : hovered;
  // Decide which icon to show
  const showLock = isBlurred;

  return (
    <motion.div
      className={`${width} ${height} rounded-2xl overflow-hidden  pointer-events-auto ${className}`}
      initial={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative w-full h-full">
        {/* Background Image with blur toggle */}
        <Image
          src={imageUrl}
          alt="Hero image"
          fill
          className={`object-cover transition-all duration-300 ${
            isBlurred ? "blur-sm" : "blur-0"
          }`}
          sizes="160px"
        />

        {/* Lock / Unlock Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          {showLock && (
            <HiLockOpen className="w-6 h-6 md:w-8 md:h-8 text-white drop-shadow-lg transition-opacity duration-300 opacity-100" />
          ) }
        </div>

        {/* Blur Effect */}
        <motion.div 
          className="absolute inset-0"
          initial={initialBlur ? "blurred" : "unblurred"}
          whileHover={initialBlur? "blurred" : "unblurred"}
        ></motion.div>

        {/* Close Button */}
        <button className="absolute top-2 right-2 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
          <RxCross2 className="text-black text-xs m-1" />
        </button>
      </div>
    </motion.div>
  );
};

export default ImageCard;
