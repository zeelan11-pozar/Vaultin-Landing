"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function DesktopHero() {
  const rootRef = useRef(null);
  const boxRef = useRef(null);
  const bgRef = useRef(null);

  // text refs
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);

  // central refs (title + CTA kept in grid)
  const titleRef = useRef(null);
  const ctaRef = useRef(null);

  // fragments / moon refs (these live in an overlay that's a direct child of boxRef)
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

      // bounding sizes (relative to viewport)
      const overlayRect = overlayEl.getBoundingClientRect();
      const leftRect = leftEl.getBoundingClientRect();
      const rightRect = rightEl.getBoundingClientRect();

      // width of usable area (inside padding) where fragments should meet
      const containerWidth = overlayRect.width;

      // offsetLeft (left coordinate of each element within overlay, ignoring transforms)
      // offsetLeft is measured relative to offsetParent (overlay which is positioned)
      const leftOffsetLeft = leftEl.offsetLeft;
      const rightOffsetLeft = rightEl.offsetLeft; // left coordinate of right element

      // element widths
      const leftWidth = leftRect.width;
      const rightWidth = rightRect.width;

      // compute pixel perfect targets so they meet at center:
      // left final left = center - leftWidth  (so its right edge is at center)
      // right final left = center (so its left edge is at center)
      const centerX = containerWidth / 2;
      const targetLeftLeft = Math.round(centerX - leftWidth); // left element final left
      const targetRightLeft = Math.round(centerX); // right element final left

      // compute the final translateX values we need to set on each element:
      // transformFinal = targetLeft - offsetLeft
      const leftFinalX = targetLeftLeft - leftOffsetLeft;
      const rightFinalX = targetRightLeft - rightOffsetLeft;

      // Build timeline tied to scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "+=1500", // increase or decrease to control scroll length
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
          duration: 1,
          ease: "power2.inOut",
        },
        "<"
      );

      // Slide fragments to center using computed pixel transforms
      // Using absolute pixel transforms guarantees they meet exactly.
      tl.to(leftEl, { x: leftFinalX, duration: 1.2,  }, "<");
      tl.to(rightEl, { x: rightFinalX, duration: 1.2, }, "<");

      // Moon appears when fragments meet
      tl.to(moonRef.current, { autoAlpha: 1, scale: 1, duration: 0.4,  }, "-=1");

      // show CTA + title
      tl.fromTo(ctaRef.current, { autoAlpha: 0, y: 16,scale:0.8 }, { autoAlpha: 1, y: 0,scale:1,  duration: 0.4 }, "<");
      tl.fromTo(titleRef.current, { autoAlpha: 0, y: -16,scale:0.8 }, { autoAlpha: 1, y: 0,scale:1, duration: 0.4 }, "<");

      // Hold the final state a bit before unpin (so CTA remains visible)
      tl.to({}, { duration: 1.8 });

      // cleanup on unmount handled by ctx.revert()
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="hidden md:flex relative h-screen items-center justify-center overflow-hidden bg-[#f1f1f1] p-6 pt-16 md:p-24"
    >
      {/* Box container - the overlay (fragments) will be positioned relative to this */}
      <div
        ref={boxRef}
        className="relative w-full h-full rounded-3xl bg-[#E7EAE9] overflow  grid grid-cols-1 md:grid-cols-4 gap-6 px-6 sm:px-8 md:px-0 py-8 md:py-0"
      >
        {/* Background image (blur target) */}
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
    className="object-contain "
  />
</div>


        {/* Grid content: left / center / right */}
        <div className="relative z-10 col-span-1 flex  justify-start items-start p-8">
          <h2
            ref={leftTextRef}
            className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent font-narkiss-hadash text-center md:text-left"
          >
            Don&apos;t just post
          </h2>
        </div>

        <div className="relative z-10 col-span-1 md:col-span-2 flex flex-col items-center justify-between text-center md:py-8">
          <div ref={titleRef} className="opacity-0 mb-6">
            <h1 className="text-4xl md:text-5xl font-narkiss-hadash font-bold bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent">
              Vault<span className="text-secondary-900">in</span> and monetize it
            </h1>
          </div>

          <div className="relative mb-6 h-[84px] w-full" /> {/* spacer so center area keeps layout (fragments are overlaid) */}

          <button
            ref={ctaRef}
            className="relative opacity-0 px-4 py-2 text-sm sm:text-base lg:text-lg rounded-full text-primary-light bg-white shadow-sm shadow-black/5 hover:bg-secondary-900 hover:text-white  cursor-pointer transition-colors duration-300"
          >
            Start earning now
          </button>
        </div>

        <div className="relative z-10 col-span-1 flex items-center justify-end md:items-end p-8">
          <h2
            ref={rightTextRef}
            className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent font-narkiss-hadash text-center md:text-right"
          >
            your <br /> content
          </h2>
        </div>

        {/* === FRAGMENTS OVERLAY (positioned inside the same box container) === */}
        {/* overlay uses same horizontal padding as the grid (px-6 sm:px-8 md:px-0) so fragments line up with content area */}
        <div
          ref={overlayRef}
          className="absolute inset-0 pointer-events-none px-6 sm:px-8 md:px-0"
          aria-hidden="true"
        >
          {/* We place an inner relative container that spans full width */}
          <div className="relative w-full h-full">
            {/* left fragment - start slightly outside left edge via transform class */}
            <div
              ref={leftFragRef}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-10"
              style={{ willChange: "transform" }}
            >
              <Image src="/left.png" alt="Left fragment" width={84} height={84} className="w-[40px] md:w-[60px] lg:w-[90px] h-auto" />
            </div>

            {/* right fragment - start slightly outside right edge */}
            <div
              ref={rightFragRef}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-10"
              style={{ willChange: "transform" }}
            >
              <Image src="/right.png" alt="Right fragment" width={84} height={84} className="w-[40px] md:w-[60px] lg:w-[90px] h-auto" />
            </div>

            {/* moon centered in overlay */}
            <div ref={moonRef} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-0" style={{ willChange: "transform, opacity" }}>
              <Image src="/moon.png" alt="Moon" width={60} height={60} className="w-[26px] md:w-[36px] lg:w-[40px] h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
