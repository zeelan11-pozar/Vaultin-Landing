"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { FaLock, FaUnlock } from "react-icons/fa";

export default function AnimatedButton({
  text = "Start earning today",
  initialIcon: InitialIcon = FaLock,
  hoverIcon: HoverIcon = FaUnlock,
}) {
  const containerRef = useRef(null);
  const icon1Ref = useRef(null);
  const icon2Ref = useRef(null);

  const handleMouseEnter = () => {
    const tl = gsap.timeline({ defaults: { duration: 0.25, ease: "power2.out" } });
    tl.to(icon1Ref.current, { x: 20, opacity: 0 }, 0) // slide out old icon
      .fromTo(icon2Ref.current, { x: -20, opacity: 0 }, { x: 0, opacity: 1 }, 0);
  };

  const handleMouseLeave = () => {
    const tl = gsap.timeline({ defaults: { duration: 0.25, ease: "power2.out" } });
    tl.to(icon2Ref.current, { x: 20, opacity: 0 }, 0) // slide out hover icon
      .fromTo(icon1Ref.current, { x: -20, opacity: 0 }, { x: 0, opacity: 1 }, 0);
  };

  return (
    <button
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="hover:scale-105 mt-8 md:mt-0 pointer-events-auto cursor-pointer 
                 bg-primary-light hover:bg-secondary-900 text-white font-semibold 
                 px-5 py-3 text-sm 
                 sm:px-5 sm:py-3 sm:text-base 
                 lg:px-8 lg:py-4 lg:text-lg 
                 rounded-full transition-all duration-300 
                 flex items-center justify-center space-x-2 md:space-x-4 overflow-hidden"
    >
      {/* Icon container */}
      <div className="relative w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5 overflow-hidden flex-shrink-0 ">
        {/* Default icon */}
        <div ref={icon1Ref} className="absolute inset-0 flex items-center justify-center">
          <InitialIcon className="w-full h-full" />
        </div>

        {/* Hover icon (hidden initially) */}
        <div
          ref={icon2Ref}
          className="absolute inset-0 flex items-center justify-center opacity-0"
        >
          <HoverIcon className="w-full h-full" />
        </div>
      </div>

      <span className="whitespace-nowrap">{text}</span>
    </button>
  );
}
