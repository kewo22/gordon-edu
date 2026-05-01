"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-container text-white pt-24 pb-12 px-6 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-24 border-b border-white/5">
          
          <div className="lg:col-span-5">
            <div className="text-3xl font-black mb-8 tracking-tighter font-inter uppercase">GFEC_CONSOLE</div>
            <p className="text-sm text-white/40 leading-loose max-w-sm font-light font-mono">
              Architecting international educational trajectories through data-driven consultancy and strategic placement modules. Unlocking human potential across global borders.
            </p>
          </div>

          <div className="lg:col-span-3">
            <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.3em] mb-10 block font-mono">Navigation Nodes</span>
            <div className="grid grid-cols-1 gap-4 text-[10px] font-bold uppercase tracking-widest font-mono">
              {["System Home", "Placement Matrix", "About Protocol", "Visa Operations", "Career Strategy"].map((link) => (
                <a key={link} className="text-white/40 hover:text-white transition-colors" href="#">
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
            <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.3em] mb-10 block font-mono">Channel Subscription</span>
            <div className="relative group">
              <input 
                className="w-full bg-white/5 border border-white/5 rounded-full px-8 py-5 text-xs focus:ring-1 focus:ring-secondary/50 focus:outline-none transition-all placeholder:text-white/20 font-mono" 
                placeholder="Identity Node Email..." 
                type="text" 
              />
              <button className="absolute right-2 top-2 bottom-2 bg-secondary text-white px-6 rounded-full hover:bg-secondary-container transition-all flex items-center justify-center">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <p className="mt-4 text-[9px] text-white/20 uppercase tracking-widest font-mono">By subscribing, you agree to our security protocols.</p>
          </div>
        </div>

        <div className="text-center pt-12 text-[10px] font-bold uppercase tracking-[0.5em] opacity-20 font-mono">
          © 2024 GFEC // INTEGRATED SYSTEM ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
};

export default Footer;
