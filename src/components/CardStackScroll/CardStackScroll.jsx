"use client";

import React from "react";
import Image from "next/image";

const cardData = [
  {
    id: 1,
    title: "Import",
    content: "Easily add your photos, videos, or files directly from your device.",
    contentLight: "Any format, up to 10GB.",
    image: "/Import.jpg",
  },
  {
    id: 2,
    title: "Lock",
    content:
      "Monetize your media by setting your price and sharing a payment link.",
    contentLight: "Sell endlessly.",
    image: "/Lock.jpg",
  },
  {
    id: 3,
    title: "Share",
    content:
      "Publish your Vaultin link across Instagram, Snapchat, Telegram, and more.",
    contentLight:
      "Make exclusive content available in one click.",
    image: "/Share.jpg",
  },
];

export default function CardStackScroll() {
  return (
    <div
      className="relative w-full bg-gradient-to-b from-[#f1f1f1] to-transparent"
      style={{ height: `${cardData.length * 100}vh` }}
    >
      {cardData.map((card, i) => (
        <section
          key={i}
          className="sticky top-0 flex items-center justify-center h-screen"
          style={{ zIndex: i + 1 }}
        >
          <div
            className="relative w-[90%] md:w-[80%] h-[65vh] md:h-[80vh] 
                       bg-[#f1f1f1] rounded-[40px] lg:rounded-[60px] 
                       flex flex-col lg:flex-row 
                       overflow-hidden [box-shadow:0_0_20px_rgba(0,0,0,0.25)]"
            style={{
              transform: `translateY(${i * 2}vh)`,
            }}
          >
            {/* Text */}
            <div
              className="relative z-20 flex flex-col items-center px-6 pt-8 lg:p-0 text-center lg:text-left flex-1
                         lg:absolute lg:top-10 lg:left-10 lg:bottom-0 lg:w-[40%]"
            >
              <div className="max-w-lg">
                <h3
                  className="text-4xl sm:text-5xl lg:text-[50px] 
                             bg-gradient-to-r from-primary-light to-primary-dark 
                             bg-clip-text text-transparent font-[500] mb-4 leading-tight font-narkiss-hadash"
                >
                  {card.title}
                </h3>
                <p className="sm:text-lg md:text-xl mb-3 font-[400]">
                  {card.content}
                </p>
                <p className="sm:text-base md:text-lg text-neutral-400 font-[400]">
                  {card.contentLight}
                </p>
              </div>
            </div>

            {/* Image */}
            {/* Mobile & Tablet (fill width, fixed height) */}
            <div className="relative h-full w-full lg:hidden flex items-end justify-center">
              <Image
                src={card.image}
                alt={card.title}
                width={1600}   // large base width
                height={900}   // keeps aspect ratio
                priority
                className="object-contain h-auto w-auto bottom-0 absolute rounded-b-[40px]"
              />
            </div>

            {/* Desktop (full height, auto width) */}
            <div className="hidden lg:flex items-end justify-end relative h-full w-full">
              <Image
                src={card.image}
                alt={card.title}
                width={1600}   // large base width
                height={900}   // keeps aspect ratio
                priority
                className="h-auto w-auto object-contain rounded-r-[40px] lg:rounded-r-[60px]"
              />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
