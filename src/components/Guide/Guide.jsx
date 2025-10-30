"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLock, FaUnlock } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const words = ["Musician","Artist","Coach", "Influencer" ];

const HeroWithTypewriter = () => {
  const [hovered, setHovered] = useState(false);
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);
  
    useEffect(() => {
      if (index >= words.length) return;
  
      if (subIndex === words[index].length + 1 && !deleting) {
        setTimeout(() => setDeleting(true), 1000);
        return;
      }
  
      if (subIndex === 0 && deleting) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
        return;
      }
  
      const timeout = setTimeout(() => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      }, deleting ? 70 : 120);
  
      return () => clearTimeout(timeout);
    }, [subIndex, index, deleting]);
  
return (
  <section className="w-full bg-secondary-900 px-6 md:px-10 py-10">
    <div className="container mx-auto">
      <div className="w-full lg:min-h-55 bg-primary-light bg-gradient-to-r from-primary-light to-primary-dark text-white rounded-3xl flex flex-col lg:flex-row items-center justify-between px-3 md:px-10 py-6 shadow-lg">
        
        {/* Left: sentence with blinking caret */}
        <div className="flex-2/3 flex justify-center text-center lg:justify-start lg:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl  font-base leading-snug">
            Whether you’re a{" "}
            <span className="text-white whitespace-nowrap">
              &quot;{words[index].substring(0, subIndex)}
              <span className="animate-[blink_1s_step-start_infinite]">|</span>&quot;
            </span>
            <br/>
            start monetizing your passion today!
          </h2>
        </div>

        {/* Right button */}
        <div className="flex-1/3 flex justify-center mt-6 lg:mt-0 lg:justify-end">
          <motion.button
            className="pointer-events-auto cursor-pointer bg-white scale-75 sm:scale-75 md:scale-90 lg:scale-100 hover:scale-105 hover:bg-secondary-900 text-primary-light hover:text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 lg:px-8 lg:py-4 rounded-full text-base sm:text-lg lg:text-lg transition-all duration-300 flex items-center justify-center space-x-2 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Icon container */}
            <div className="relative w-4 h-4 sm:w-5 sm:h-5 overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                {hovered ? (
                  <motion.div
                    key="unlock"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 20, opacity: 0 }}
                    transition={{ duration: 0.1 }}
                    className="absolute"
                  >
                    <FaUnlock className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="lock"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 20, opacity: 0 }}
                    transition={{ duration: 0.1 }}
                    className="absolute"
                  >
                    <FaLock className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <span className="text-md md:text-md lg:text-lg">
              Sign Up to start earning
            </span>
          </motion.button>
        </div>
      </div>
    </div>
  </section>
);
};
  
  const features = [
  {
    title: "Content Library",
    desc: "Organize all your curated links in one place to maximize your income.",
    img: "/Card-Photos/img2.png",
  },
  {
    title: "Secure Access",
    desc: "Gain recurring 10% earnings from referred users forever.",
    img: "/Card-Photos/img3.png",
  },
  {
    title: "Protected Content",
    desc: "Keep your content exclusive while giving your audience a taste of more.",
    img: "/Card-Photos/img1.png",
  },
  {
    title: "Effortless Payments",
    desc: "Buyers can pay instantly without needing an app or account.",
    img: "/Card-Photos/img3.png",
  },
];

  
  const FeaturesSection = () => {
    return (
      <section className="bg-secondary-900 text-white  flex flex-col items-center py-16">
        <div className="container mx-auto">
          <h1 className="text-center bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent font-narkiss-hadash text-3xl sm:text-4xl md:text-[40px] mx-6 mb-12">
              
            Guide to Vaultin&apos;s features
          </h1>
  
          {/* Mobile: Single column with peek effect */}
          <div className="block sm:hidden ">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={16}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              centeredSlides={true}
              slidesPerView={1.15}
              className="pb-10 px-4"
              style={{ paddingLeft: '20px', paddingRight: '20px' }}

            >
              {features.map((feature, i) => (
                <SwiperSlide key={i}>
                  <div className="rounded-3xl bg-[#f1f1f1] text-secondary-900 flex flex-col overflow-hidden h-[480px]">
                    {/* Content section - fixed height */}
                    <div className="flex flex-col p-6 h-[180px] flex-shrink-0 text-center">
                      <h3 className="font-bold text-xl mb-3 leading-tight">{feature.title}</h3>
                      <p className="text-base text-secondary-700 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                    {/* Image section - fills remaining space */}
                    <div className="flex-1 overflow-hidden">
                      <img
                        src={feature.img}
                        alt={feature.title}
                        className="w-full h-full object-cover rounded-b-3xl"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Tablet: Two columns with peek effect */}
          <div className="hidden sm:block lg:hidden">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              centeredSlides={true}
              className="pb-10 px-4"
              breakpoints={{
                426: { slidesPerView: 1.9 },
                540: { slidesPerView: 2.3},
                768: { slidesPerView: 2.5 },
              }}
            >
              {features.map((feature, i) => (
                <SwiperSlide key={i}>
                  <div className="rounded-3xl bg-[#f1f1f1] text-secondary-900 flex flex-col overflow-hidden h-[420px]">
                    {/* Content section - fixed height */}
                    <div className="flex flex-col p-6 h-[160px] flex-shrink-0 text-center">
                      <h3 className="font-bold text-lg mb-3 leading-tight">{feature.title}</h3>
                      <p className="text-sm text-secondary-700 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                    {/* Image section - fills remaining space */}
                    <div className="flex-1 overflow-hidden">
                      <img
                        src={feature.img}
                        alt={feature.title}
                        className="w-full h-full object-cover rounded-b-3xl"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>


          
          <div className="hidden mx-4 lg:block">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={24}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              centeredSlides={false}
              className="pb-10 px-4"
              breakpoints={{
                1024: { slidesPerView: 3.2 },
                1280: { slidesPerView: 3.5 },
                1440: { slidesPerView: 4 },
              }}
            >
              {features.map((feature, i) => (
                <SwiperSlide key={i}>
                  <div className="rounded-3xl bg-[#f1f1f1] text-secondary-900 flex flex-col overflow-hidden h-[500px]">
                    {/* Content section - fixed height */}
                    <div className="flex flex-col p-8 h-[200px] flex-shrink-0 text-center">
                      <h3 className="font-bold text-xl mb-4 leading-tight">{feature.title}</h3>
                      <p className="text-md text-secondary-700 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                    {/* Image section - fills remaining space */}
                    <div className="flex-1 overflow-hidden">
                      <img
                        src={feature.img}
                        alt={feature.title}
                        className="w-full h-full object-cover rounded-b-3xl"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    );
  };
  

const Guide = () => {
  return (
    <main className="bg-secondary-900 translate-y-[24px] md:translate-y-[32px] md:mt-10 lg:mt-20 py-8 md:py-16 min-h-screen">
      <HeroWithTypewriter />
      <FeaturesSection />
    </main>
  );
};

export default Guide;