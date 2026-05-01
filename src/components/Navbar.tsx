"use client";

import React from "react";
import Link from "next/link";
import Typography from "./ui/Typography";

const Navbar = () => {
  return (
    <nav className="glass-overlay rounded-2xl p-4 flex items-center justify-between border border-white/10 max-w-[1400px] mx-auto w-full">
      <div className="flex items-center gap-2 group">
        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black font-bold group-hover:rotate-12 transition-transform">
          G
        </div>
        <Typography as="span" intent="h3" color="white" className="text-xl tracking-tighter">
          GFEC
        </Typography>
      </div>

      <div className="hidden lg:flex items-center gap-10">
        {["Home", "Services", "About", "Contact"].map((item, idx) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
          >
            <Typography
              as="span"
              intent="label"
              color="white"
              className={idx === 0 ? "border-b border-white" : "opacity-70 hover:opacity-100 transition-opacity"}
            >
              {`0${idx + 1}. ${item}`}
            </Typography>
          </Link>
        ))}
      </div>

      <Typography as="button" intent="label" color="primary" className="bg-white px-6 py-2.5 rounded-full hover:bg-opacity-90 transition-all hover:scale-105 active:scale-95">
        Execute Application
      </Typography>
    </nav>
  );
};

export default Navbar;
