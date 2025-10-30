"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Button from "../ui/Button";

export default function HeroNew() {
  const rootRef = useRef(null);
  const stackWrapperRef = useRef(null);
  const imagesRef = useRef([]);
  const headingRef = useRef(null);
  const ctaRef = useRef(null);

  // 🔥 React state for heading text
  const [headingText, setHeadingText] = useState("Welcome to Vaultin");

  // Image refs
  const addToImageRefs = (el) => {
    if (el && !imagesRef.current.includes(el)) {
      imagesRef.current.push(el);
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state (GSAP)
      gsap.set(stackWrapperRef.current, { y: "100vh", opacity: 0 });
      gsap.set(imagesRef.current, {
        x: 0,
        y: 0,
        rotation: (i) => (i - 3) * 5,
        filter: "blur(0px)",
      });
      gsap.set([headingRef.current, ctaRef.current], { opacity: 0, y: 40 });

      const yOffsets = [40, 0, 30, -30, 20, -40];

      const tl = gsap.timeline();

      // Step 1: bring stack up
      tl.to(stackWrapperRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      });

      // Step 2: disperse images
      tl.to(
        imagesRef.current,
        {
          x: (i) => i * 200 - (imagesRef.current.length - 1) * 100,
          y: (i) => yOffsets[i] || 0,
          rotation: 0,
          duration: 0.8,
          ease: "circ.out",
        },
        "+=0.3"
      );

      // Step 3: fade in heading + CTA simultaneously
      tl.to(
        [headingRef.current, ctaRef.current],
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "<"
      );

      // Step 4: blur selected images
      const blurredIndexes = [1, 3, 5];
      tl.to(
        blurredIndexes.map((i) => imagesRef.current[i]),
        {
          filter: "blur(3px)",
          duration: 0.8,
          ease: "power2.out",
          onComplete: () => {
            blurredIndexes.forEach((i) =>
              imagesRef.current[i].classList.add("hover-unblur")
            );
          },
        },
        "+=0.5"
      );

      // Step 5: heading slide transition
      tl.to(
        headingRef.current,
        {
          y: -40,
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
          onComplete: () => {
            setHeadingText("Lock. Share. Earn.");
            gsap.set(headingRef.current, { y: 40, opacity: 0 });
          },
        },
        "<"
      );

      tl.to(headingRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative flex flex-col items-center justify-center h-screen w-full bg-white overflow-hidden"
    >
      {/* Hero Heading */}
      <div
        ref={headingRef}
        className="absolute top-34 text-center max-w-2xl opacity-0"
      >
        <h1 className="text-4xl md:text-6xl bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent mb-4">
          {headingText}
        </h1>
      </div>

      {/* Image Stack */}
      <div
        ref={stackWrapperRef}
        // ✅ Inline style avoids initial flash
        style={{ transform: "translateY(100vh)", opacity: 0 }}
        className="relative flex items-center justify-center w-full h-full overflow-visible"
      >
        {[...Array(6)].map((_, i) => (
          <div key={i} className="absolute rounded-3xl overflow-visible group">
            <div
              ref={addToImageRefs}
              className="w-[180px] h-[260px] overflow-hidden rounded-3xl relative"
            >
              <Image
                src={`/Hero-Photos/picture-${i + 1}.jpg`}
                alt={`Hero Picture ${i + 1}`}
                width={180}
                height={260}
                className="object-cover w-full h-full transition-all duration-500 group-hover:blur-0"
                priority
              />
            </div>
          </div>
        ))}
      </div>

      {/* CTA Block */}
      <div
        ref={ctaRef}
        className="absolute bottom-24 text-center max-w-2xl opacity-0"
      >
        <div className="flex items-center flex-col">
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Turn your moments into value — share, engage, and grow with us.
          </p>
          <Button variant="primary">Get Started</Button>
        </div>
      </div>
    </section>
  );
}
