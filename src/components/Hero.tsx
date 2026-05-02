"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Typography from "./ui/Typography";

const MotionTypography = motion.create(Typography);

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
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-between p-8 md:p-12 lg:p-16">

        {/* Modular Top Bar */}
        <Navbar />

        {/* Hero Content */}
        <div className="max-w-[1400px] mx-auto w-full mb-12">
          <MotionTypography
            as="span"
            intent="body"
            color="onPrimary"
            weight="black"
            className="mb-4 block tracking-[0.4em]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            ONE STOP FOR YOUE EDUCATION JOURNY
          </MotionTypography>

          <MotionTypography
            as="h1"
            intent="display"
            color="white"
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            SHAPE<br />YOUR FUTURE.
          </MotionTypography>

          <div className="editorial-line text-white mb-8 max-w-md"></div>

          <MotionTypography
            as="p"
            intent="body"
            color="white"
            className="max-w-xl mb-10 opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            Strategic, precision-engineered guidance for international admissions and global university placement.
          </MotionTypography>

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
            <button className="bg-secondary text-white px-10 py-4 rounded-full font-bold uppercase hover:bg-secondary-container transition-all tracking-widest shadow-2xl shadow-secondary/20">
              Onboard
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
