"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        alt="University Campus"
        className="absolute inset-0 w-full h-full object-cover"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwlrpUQdg2Eq9Afmn1OFLEhTCJZ-YKSHNX-r8uAX6UOUQtde__T1E2qG9AqW-LsuaEhVFrHU6CpdX_O2s3LIYAxmOm0Y_KL-VnMuMwtqUE6lnqRXxVMVyjLPsHoBly-DigkNorW4XuI7XGMuq287G4rV9NVI5VmYcYTNxsDLvUJ0xz07ljF6pvATsUUhe8AqK_6LZ0cNx-jZi1aKn4IjtXKAgDBIBJwONTk44cizXLuaa1YzFK8MsGYnUGP2D6OSzGOfy1I2aDCWA6"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-between p-8 md:p-12 lg:p-16">
        
        {/* Modular Top Bar */}
        <Navbar />

        {/* Hero Content */}
        <div className="max-w-[1400px] mx-auto w-full mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-secondary font-bold text-xs uppercase tracking-[0.4em] mb-4 block"
          >
            // GLOBAL EDUCATION PLATFORM
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-white text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tighter max-w-4xl mb-8 font-inter"
          >
            SHAPE<br />YOUR FUTURE.
          </motion.h1>
          
          <div className="editorial-line text-white mb-8 max-w-md"></div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="text-white/80 text-base md:text-lg max-w-xl leading-relaxed mb-10 font-light font-mono"
          >
            Strategic, precision-engineered guidance for international admissions and global university placement.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <div className="relative max-w-xs w-full">
              <input
                className="bg-white/10 border border-white/20 text-white rounded-full px-6 py-4 text-xs w-full focus:ring-secondary focus:border-secondary outline-none backdrop-blur-md placeholder:text-white/30"
                placeholder="Enter node email..."
                type="email"
              />
            </div>
            <button className="bg-secondary text-white px-10 py-4 rounded-full font-bold text-xs uppercase hover:bg-secondary-container transition-all tracking-widest shadow-2xl shadow-secondary/20">
              Initialize Connection
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
