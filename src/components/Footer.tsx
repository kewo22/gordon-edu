"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Typography from "./ui/Typography";

const Footer = () => {
  return (
    <footer className="bg-primary-container text-white pt-24 pb-12 px-6 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-24 border-b border-white/5">
          
          <div className="lg:col-span-5">
            <Typography as="div" intent="h3" className="mb-8 tracking-tighter">
              GFEC_CONSOLE
            </Typography>
            <Typography as="p" intent="body" className="text-white/40 leading-loose max-w-sm font-light">
              Architecting international educational trajectories through data-driven consultancy and strategic placement modules. Unlocking human potential across global borders.
            </Typography>
          </div>

          <div className="lg:col-span-3">
            <Typography as="span" intent="label" color="secondary" className="mb-10 block">
              Navigation Nodes
            </Typography>
            <div className="grid grid-cols-1 gap-4">
              {["System Home", "Placement Matrix", "About Protocol", "Visa Operations", "Career Strategy"].map((link) => (
                <Typography key={link} as="a" href="#" intent="label" className="text-white/40 hover:text-white transition-colors lowercase">
                  {link}
                </Typography>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
            <Typography as="span" intent="label" color="secondary" className="mb-10 block">
              Channel Subscription
            </Typography>
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
            <Typography as="p" intent="label" className="mt-4 text-white/20">
              By subscribing, you agree to our security protocols.
            </Typography>
          </div>
        </div>

        <Typography as="div" intent="label" className="text-center pt-12 opacity-20 tracking-[0.5em]">
          © 2024 GFEC // INTEGRATED SYSTEM ALL RIGHTS RESERVED
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
