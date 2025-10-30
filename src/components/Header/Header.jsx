"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../ui/Button'

const Header = () => {

  const handleSignUpClick = (e) => {
    e.preventDefault();
    // Smooth scroll to the bottom of the page
    
  };

  return (
    <div className='w-full container mx-auto'>
    <header className="fixed top-0 z-50 container mx-auto">
      <motion.div 
        className="w-full px-4 sm:px-6 py-4 sm:py-6 lg:py-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mx-auto flex items-center justify-between text-secondary-900">
          {/* Logo */}
          <motion.div className="flex items-center gap-2 hover:text-secondary-600 transition-colors cursor-pointer">
            <motion.div 
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image src="/Vaultin Logo.png" alt="Logo" width={981} height={141} className='w-28 h-4 md:h-5 w-35 lg:w-42 lg:h-6' />
            </motion.div>
          </motion.div>

          <div className="flex bg-[#E7EAE9] pl-6 p-1 rounded-full items-center gap-4 md:gap-6 lg:gap-6">

           <button className="text-secondary-900 text-sm sm:text-base lg:text-lg font-medium hover:text-primary-light transition-colors duration-300 cursor-pointer" onClick={handleSignUpClick}>
            Login
           
           </button>
          {/* Sign Up Button */}
          <Button variant="primary">
            Sign Up
          </Button>
          </div>
          
          
        </div>
      </motion.div>
      </header>
    </div>
  );
};

export default Header;
