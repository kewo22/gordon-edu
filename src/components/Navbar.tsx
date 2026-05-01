"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="glass-overlay rounded-2xl p-4 flex items-center justify-between border border-white/10 max-w-[1400px] mx-auto w-full">
      <div className="flex items-center gap-2 group">
        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black font-bold group-hover:rotate-12 transition-transform">
          G
        </div>
        <span className="text-xl font-black tracking-tighter text-white">GFEC</span>
      </div>

      <div className="hidden lg:flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
        {["Home", "Services", "About", "Contact"].map((item, idx) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`${idx === 0 ? "text-white border-b border-white" : "hover:text-white transition-colors"}`}
          >
            {`0${idx + 1}. ${item}`}
          </Link>
        ))}
      </div>

      <button className="bg-white text-black px-6 py-2.5 rounded-full text-[10px] font-bold uppercase hover:bg-opacity-90 transition-all hover:scale-105 active:scale-95">
        Execute Application
      </button>
    </nav>
  );
};

export default Navbar;
