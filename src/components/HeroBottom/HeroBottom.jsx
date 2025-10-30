"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { FaLock, FaUnlock } from "react-icons/fa";
import AnimatedButton from "../ui/AnimatedButton";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const IMAGES = [
  "/Hero-Photos/picture-1.jpg",
  "/Hero-Photos/picture-2.jpg",
  "/Hero-Photos/picture-3.jpg",
  "/Hero-Photos/picture-4.jpg",
  "/Hero-Photos/picture-5.jpg",
  "/Hero-Photos/picture-6.jpg",
];

const LOCKED_INDEXES = [1, 3, 5]; // choose any 3 locked

export default function HeroBottom() {
  const containerRef = useRef(null);
  const [isTouch, setIsTouch] = useState(false);

  // detect if device is touch (coarse pointer)
  useEffect(() => {
    const check = () => {
      setIsTouch(window.matchMedia("(pointer: coarse)").matches);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // motion values for cursor movement
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 100, damping: 15 });
  const springY = useSpring(y, { stiffness: 100, damping: 15 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const normX = offsetX / (rect.width / 2);
    const normY = offsetY / (rect.height / 2);

    x.set(normX * 20);
    y.set(normY * 20);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative flex items-center justify-center py-24 bg-[#f5f5f5] overflow-hidden">
      {/* Wrapper so images orbit around content */}
      <div
        ref={containerRef}
        onMouseMove={isTouch ? undefined : handleMouseMove}
        onMouseLeave={isTouch ? undefined : handleMouseLeave}
        className="relative w-[450px] sm:w-[550px] md:w-[900px] h-[450px] sm:h-[550px] md:h-[700px] flex items-center justify-center"
      >
        {/* Central content */}
        <div className="relative z-10 flex flex-col items-center text-center md:gap-y-8 max-w-sm">
          <Image
            src="/Vaultin Logo.png"
            alt="Vaultin Logo"
            width={140}
            height={50}
            className="opacity-0 "
          />

          <h2 className="pointer-events-none text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] xl:text-[7.5rem] font-narkiss-hadash text-secondary-900 font-extrabold leading-[0.9] mb-6">
            <span className="block">VAULT.</span>
            <span className="block">SHARE.</span>
            <span className="block">EARN.</span>
          </h2>

          <AnimatedButton initialIcon={FaLock} hoverIcon={FaUnlock}>
            Start Earning Today
          </AnimatedButton>
        </div>

        {/* Dispersed larger images around */}
        {IMAGES.map((src, i) => {
          const locked = LOCKED_INDEXES.includes(i);

          const positions = [
            "top-0 right-0 -translate-x-7/10 translate-y-2/10",
            "top-1/2 right-0 translate-x-1/2 -translate-y-1/2",
            "top-0 left-0 translate-x-1/2",
            "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2",
            "bottom-0 left-0 translate-x-1/2 -translate-y-2/10",
            "bottom-0 right-0 -translate-x-5/10 -translate-y-2/10",
          ];

          const depth = ((i+1) % 3) + 1;
          const factor = 0.5+depth * 0.3;

          const tx = useTransform(springX, (val) => val * factor);
          const ty = useTransform(springY, (val) => val * factor);

          return (
            <motion.div
              key={i}
              className={`absolute ${positions[i]} group w-22 sm:w-32 md:w-40 h-26 sm:h-36 md:h-48 overflow-hidden rounded-2xl`}
              style={isTouch ? {} : { x: tx, y: ty }}
            >
              {/* Base sharp image always visible */}
              <Image
                src={src}
                alt={`Hero Image ${i + 1}`}
                fill
                sizes="(max-width: 640px) 120px, (max-width: 1024px) 160px, 200px"
                className="object-cover rounded-2xl shadow-lg"
              />

              {/* If the image is permanently locked */}
              {locked && (
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 opacity-100 group-hover:opacity-0">
                  <div className="absolute inset-[-10%]">
                    <Image
                      src={src}
                      alt={`Blurred Hero Image ${i + 1}`}
                      fill
                      sizes="(max-width: 640px) 120px, (max-width: 1024px) 160px, 200px"
                      className="object-cover filter blur-xs rounded-2xl will-change-transform"
                      style={{ backfaceVisibility: "hidden" }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/40 rounded-2xl" />
                  <FaLock className="w-4 h-4 md:w-8 md:h-8 text-white z-10" />
                </div>
              )}

              {/* If the image is unlocked → show blur + lock only on hover */}
              {!locked && (
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                  <div className="absolute inset-[-10%]">
                    <Image
                      src={src}
                      alt={`Hover Blurred Hero Image ${i + 1}`}
                      fill
                      sizes="(max-width: 640px) 120px, (max-width: 1024px) 160px, 200px"
                      className="object-cover filter blur-xs rounded-2xl will-change-transform"
                      style={{ backfaceVisibility: "hidden" }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/40 rounded-2xl" />
                  <FaLock className="w-4 h-4 md:w-8 md:h-8 text-white z-10" />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
