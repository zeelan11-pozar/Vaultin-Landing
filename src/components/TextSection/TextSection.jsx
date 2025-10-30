"use client";

import React from "react";

export default function TextSection() {
  return (
    <section className="relative bg-secondary-50 px-6 md:px-12 lg:px-20 ">
      {/* Subheading Text */}
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative">
        {/* <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-secondary-900 leading-relaxed">
          Because your content shouldn't be free.
        </h2> */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary-900 leading-snug">
          Upload your content, set the price, and share securely.
        </h2>
      </div>
    </section>
  );
}
