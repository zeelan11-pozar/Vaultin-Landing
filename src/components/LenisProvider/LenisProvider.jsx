"use client";

import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

export default function LenisProvider({ children }) {
  const lenisRef = useRef();

  useEffect(() => {
    // Initialize Lenis
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
      lerp: 0.1,
    });

    // Make Lenis globally accessible
    if (typeof window !== 'undefined') {
      window.lenis = lenisRef.current;
    }

    // RAF loop for Lenis
    function raf(time) {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      if (typeof window !== 'undefined' && window.lenis) {
        delete window.lenis;
      }
    };
  }, []);

  return children;
}
