"use client";

import React from "react";
import { FaInstagram, FaFacebook,FaYoutube, FaMailBulk  } from "react-icons/fa";
import { IoMailOpenSharp } from "react-icons/io5";
import Link from "next/link";

const Footer = () => {
  const styles = {
    storeBtn:
      "cursor-pointer inline-flex items-center justify-center gap-3 rounded-full bg-white px-4 sm:px-5 py-2 text-secondary-900 shadow-sm hover:scale-105 transition-all duration-300 w-40 sm:w-44", 
    // 👆 both buttons will be equal width
    iconCircle:
      "cursor-pointer h-10 w-10 rounded-full bg-white inline-flex items-center justify-center hover:scale-110 transition-all duration-300",
    footerLink:
      "cursor-pointer hover:text-secondary-700 transition-colors duration-300",
    footerLinkLg:
      "cursor-pointer text-2xl hover:text-secondary-700 transition-colors duration-300",
  };

  return (
    <footer className="w-full bg-secondary-900 rounded-t-[28px] md:rounded-t-[36px] px-6 md:px-8 lg:px-12 py-10 md:py-12 lg:py-14 mt-16 md:mt-24">
      <div className="container mx-auto flex flex-col gap-12 md:gap-10">
        
        {/* Row 1: Store badges + Social icons */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-8 md:gap-12">
          
          {/* Left column */}
          <div className="flex flex-col md:flex-row md:flex-wrap gap-5 md:gap-10 text-white text-center md:text-left">
            <Link href="/" className={`${styles.footerLinkLg} block md:inline-block`}>Vaultin</Link>
            {/* <Link href="/" className={`${styles.footerLinkLg} block md:inline-block`}>Our Blog</Link> */}
            <a 
              onClick={() => {
                const faqSection = document.getElementById('faq');
                if (faqSection) {
                  faqSection.scrollIntoView({ behavior: 'smooth' });
                }
              }} 
              className={`${styles.footerLinkLg} block md:inline-block cursor-pointer`}
            >
              FAQ
            </a>
            {/* <Link href="/" className={`${styles.footerLinkLg} block md:inline-block`}>Service Status</Link> */}
          </div>


          {/* Social icons */}
          <div className="flex items-center gap-4 text-secondary-900 text-2xl justify-center md:justify-end">
            <Link href="/" aria-label="Instagram" className={styles.iconCircle}>
              <FaInstagram />
            </Link>
            <Link href="/" aria-label="X" className={styles.iconCircle}>
              <FaYoutube />
            </Link>
            <Link href="/" aria-label="TikTok" className={styles.iconCircle}>
              <FaFacebook />
            </Link>
            <Link href="/" aria-label="TikTok" className={styles.iconCircle}>
              <IoMailOpenSharp />
            </Link>
          </div>
        </div>

        {/* Row 2: Columns */}
        <div className="flex justify-between flex-col items-center md:flex-row gap-4 text-white/90">

          
          {/* Right column */}
          <div className="flex flex-col md:flex-row md:flex-wrap gap-5 md:gap-x-8 text-white text-center md:text-right">
            <Link href="/" className={`${styles.footerLink} block md:inline-block`}>Contact Us</Link>
            <Link href="/" className={`${styles.footerLink} block md:inline-block`}>Vaultin Privacy Policy</Link>
            <Link href="/" className={`${styles.footerLink} block md:inline-block`}>Terms of Services</Link>
            {/* <Link href="/" className={`${styles.footerLink} block md:inline-block`}>Complaints & Content Removal Policy</Link> */}
          </div>

          {/* Left column */}
            <span className="cursor-pointer ">©Vaultin {new Date().getFullYear()}</span>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
