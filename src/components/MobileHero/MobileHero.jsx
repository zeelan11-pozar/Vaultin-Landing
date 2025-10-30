"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function MobileHero() {
  const rootRef = useRef(null);
  const bgRef = useRef(null);

  // Variant 1 (initial text)
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);

  // Variant 2 (replacement elements)
  const titleRef = useRef(null);
  const ctaRef = useRef(null);

  // Overlay & fragments
  const overlayRef = useRef(null);
  const leftFragRef = useRef(null);
  const rightFragRef = useRef(null);
  const moonRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // compute positions (must run after DOM layout)
      const overlayEl = overlayRef.current;
      const leftEl = leftFragRef.current;
      const rightEl = rightFragRef.current;

      if (!overlayEl || !leftEl || !rightEl) return;

      // Get overlay dimensions (full width, no padding)
      const overlayRect = overlayEl.getBoundingClientRect();
      const overlayWidth = overlayRect.width;
      const overlayCenter = overlayWidth / 2;

      // Get current positions and dimensions
      const leftRect = leftEl.getBoundingClientRect();
      const rightRect = rightEl.getBoundingClientRect();
      const leftWidth = leftRect.width;
      const rightWidth = rightRect.width;

      // Get current positions relative to overlay
      const leftCurrentLeft = leftEl.offsetLeft;
      const rightCurrentLeft = rightEl.offsetLeft;

      // Calculate target positions so fragments touch at center
      // Left fragment: its RIGHT edge should be at center
      const leftTargetLeft = overlayCenter - leftWidth;
      // Right fragment: its LEFT edge should be at center  
      const rightTargetLeft = overlayCenter;

      // Calculate transforms needed
      const leftFinalX = leftTargetLeft - leftCurrentLeft;
      const rightFinalX = rightTargetLeft - rightCurrentLeft;

      // Build timeline tied to scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "+=1700", // increase or decrease to control scroll length
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
        defaults: { ease: "power2.out" },
      });

      // fade out side texts
      tl.to([leftTextRef.current, rightTextRef.current], { autoAlpha: 0, duration: 2 });

      // (optional) blur background - keep will-change hint so browser has a chance
      tl.to(
        bgRef.current,
        {
          // if this causes flicker, replace with crossfade strategy for production
          filter: "blur(8px)",
          duration: 2,
          ease: "power2.inOut",
        },
        "<"
      );

      // Slide fragments to center using computed pixel transforms
      // Using absolute pixel transforms guarantees they meet exactly.
      tl.to(leftEl, { x: leftFinalX, duration: 1.2, ease: "power3.out" }, "<");
      tl.to(rightEl, { x: rightFinalX, duration: 1.2, ease: "power3.out" }, "<");

      // Moon appears when fragments meet
      tl.to(moonRef.current, { autoAlpha: 1, scale: 1, duration: 0.4, ease: "power3.inOut" }, "-=1");

      // show CTA + title
      tl.fromTo(ctaRef.current, { autoAlpha: 0, y: 16,scale:0.8 }, { autoAlpha: 1, y: 0, scale:1, duration: 0.4 }, "<");
      tl.fromTo(titleRef.current, { autoAlpha: 0, y: -16, scale:0.8 }, { autoAlpha: 1, y: 0, scale:1, duration: 0.4 }, "<");

      // Hold the final state a bit before unpin (so CTA remains visible)
      tl.to({}, { duration: 1.2 });

      // cleanup on unmount handled by ctx.revert()
    }, rootRef);

    return () => ctx.revert();
  }, []); 

  return (
    <section
      ref={rootRef}
      className="flex md:hidden relative h-screen items-center justify-center bg-[#f1f1f1] overflow-hidden p-6 pt-16 sm:p-6 sm:pt-16"
    >
      <div className="relative grid grid-cols-1 gap-6 rounded-3xl bg-[#E7EAE9] px-6 py-8 w-full h-full overflow">
        {/* Background Image */}
        <div
          ref={bgRef}
          className="absolute inset-0 pointer-events-none flex items-center justify-center"
          style={{ willChange: "filter, transform" }}
          aria-hidden="true"
        >
          <Image
            src="/hero-image.png"
            alt="Hero"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* Left Column */}
        <div className="relative z-10 flex flex-col items-center justify-center px-8 pb-[25%]">
          <h2
            ref={leftTextRef}
            className="text-3xl sm:text-4xl font-semibold bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent font-narkiss-hadash text-center"
          >
            Don&apos;t just post
          </h2>

          <h1
            ref={titleRef}
            className="absolute text-3xl sm:text-4xl font-bold font-narkiss-hadash bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent opacity-0 text-center"
          >
            Vault<span className="text-secondary-900">in</span> and monetize it
          </h1>
        </div>

        {/* Right Column */}
        <div className="relative z-10 flex flex-col items-center justify-center px-8 pt-[25%]">
          <h2
            ref={rightTextRef}
            className="text-3xl sm:text-4xl font-semibold bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent font-narkiss-hadash text-center"
          >
            your content
          </h2>

          <button
            ref={ctaRef}
            className="absolute opacity-0 px-6 py-2 text-sm sm:text-base lg:text-lg rounded-full shadow-xs shadow-black/5 bg-white  text-primary-light hover:bg-secondary-900 transition-colors duration-300 "
          >
            Start earning now
          </button>
        </div>

        {/* Overlay for fragments + moon - NO PADDING HERE */}
        <div
          ref={overlayRef}
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="relative w-full h-full">
            {/* Left fragment - start off-screen to the left */}
            <div
              ref={leftFragRef}
              className="absolute top-1/2 -translate-y-1/2"
              style={{ left: '-20px' }} // Start further off-screen
            >
              <Image
                src="/left.png"
                alt="Left fragment"
                width={84}
                height={84}
                className="w-[50px] sm:w-[60px] h-auto"
              />
            </div>

            {/* Right fragment - start off-screen to the right */}
            <div
              ref={rightFragRef}
              className="absolute top-1/2 -translate-y-1/2"
              style={{ right: '-20px' }} // Start further off-screen

            >
              <Image
                src="/right.png"
                alt="Right fragment"
                width={84}
                height={84}
                className="w-[50px] sm:w-[60px] h-auto"
              />
            </div>

            {/* Moon */}
            <div
              ref={moonRef}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-0"
            >
              <Image
                src="/moon.png"
                alt="Moon"
                width={60}
                height={60}
                className="w-[24px] sm:w-[28px] h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}