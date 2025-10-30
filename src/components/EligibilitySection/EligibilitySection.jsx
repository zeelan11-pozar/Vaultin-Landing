"use client";

import React from "react";
import { FaCheck } from "react-icons/fa";
import Button from "../ui/Button";

const EligibilitySection = () => {
const items = [
  { title: "No copied content permitted" },
  { title: "No misleading or false information" },
  { title: "Adult/nude content is not permitted" },
  { title: "Strong engagement on videos required" },
];


  return (
    <section className="w-full   bg-secondary-900  px-6 md:px-8 lg:px-12 py-18 md:py-24 lg:py-26">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-18 items-start">
        {/* Left */}
        <div className="lg:col-span-7 flex flex-col gap-8 md:gap-8 items-center text-center lg:text-left lg:items-start ">
          <h2 className="text-white text-3xl sm:text-4xl lg:text-[40px] font-medium font-narkiss-hadash">
            Creator Guidelines
            {/* <span className="italic  text-primary-light font-narkiss-hadash">
              {' '}for Creators
            </span> */}
          </h2>
          <p className="text-neutral-400 max-w-md">
            Be part of our premium creator community by meeting these requirements.
          </p>
          <Button variant="primary">
            View more
          </Button>
        </div>

        {/* Right */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4 md:gap-3">
  {items.map((item, idx) => (
    <div
      key={idx}
      className="flex flex-col items-start gap-2 rounded-2xl bg-secondary-800 px-3 md:px-6 py-5 md:py-7 shadow-sm"
    >
      <div className="inline-flex md:h-8 md:w-8 h-7 w-7 items-center justify-center rounded-full border border-emerald-500/40 bg-secondary-900 font-extralight text-emerald-400">
        <FaCheck className="md:h-4 md:w-4 h-3 w-3" />
      </div>
      <span className="text-white text-sm md:text-lg ">
        {item.title}
      </span>
      
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default EligibilitySection;


