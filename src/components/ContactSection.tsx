"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Send, Share2, Globe } from "lucide-react";
import Typography from "./ui/Typography";

const ContactSection = () => {
  return (
    <section className="mb-24 px-6 md:px-8">
      <div className="bento-card overflow-hidden flex flex-col lg:grid lg:grid-cols-12">
        
        {/* Form Column */}
        <div className="flex-1 p-10 lg:p-12 lg:col-span-8">
          <div className="flex justify-between items-start mb-10">
            <div>
              <Typography as="span" intent="label" color="secondary" className="mb-2 block">
                Transmission
              </Typography>
              <Typography as="h2" intent="h2" className="font-inter">
                Initialize Inquiry.
              </Typography>
            </div>
            <Typography as="span" intent="label" className="opacity-30 pt-2">
              SECURE_LINK
            </Typography>
          </div>
          
          <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div className="col-span-2 md:col-span-1 space-y-2">
              <Typography as="label" intent="label" className="opacity-40">
                Full Identity Name
              </Typography>
              <input 
                className="w-full bg-surface-container/50 border border-outline-variant/10 rounded-xl px-5 py-3.5 text-xs focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all font-mono" 
                type="text" 
                placeholder="John Doe"
              />
            </div>
            <div className="col-span-2 md:col-span-1 space-y-2">
              <Typography as="label" intent="label" className="opacity-40">
                Email Node Address
              </Typography>
              <input 
                className="w-full bg-surface-container/50 border border-outline-variant/10 rounded-xl px-5 py-3.5 text-xs focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all font-mono" 
                type="email" 
                placeholder="john@example.com"
              />
            </div>
            <div className="col-span-2 space-y-2">
              <Typography as="label" intent="label" className="opacity-40">
                Message Body / Payload
              </Typography>
              <textarea 
                className="w-full bg-surface-container/50 border border-outline-variant/10 rounded-xl px-5 py-3.5 text-xs focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all min-h-[100px] font-mono" 
                rows={3}
                placeholder="Tell us about your goals..."
              />
            </div>
            <button className="col-span-2 bg-primary text-white py-4 rounded-full font-bold text-xs uppercase tracking-[0.3em] hover:bg-secondary transition-all shadow-xl shadow-black/10 mt-2 justify-self-start w-fit px-12 flex items-center gap-2 group">
              TRANSMIT DATA PACKET
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>

        {/* Access Points Column */}
        <div className="w-full bg-primary-container text-white p-10 lg:p-12 flex flex-col justify-between lg:col-span-4 h-full">
          <div>
            <Typography as="h3" intent="label" color="secondary" className="mb-10">
              Access Points
            </Typography>
            <div className="space-y-10">
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <MapPin className="text-secondary w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <Typography as="span" intent="label" className="block opacity-40">
                    HQ Address
                  </Typography>
                  <Typography as="p" intent="body" className="font-light leading-relaxed">
                    123 Academic Way,<br />Global City, GC 45678
                  </Typography>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <Phone className="text-secondary w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <Typography as="span" intent="label" className="block opacity-40">
                    Voice Comms
                  </Typography>
                  <Typography as="p" intent="body" className="font-light">
                    +1 (555) 012-3456
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 mt-10">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-secondary transition-all cursor-pointer">
                <Share2 className="w-4 h-4" />
              </div>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-secondary transition-all cursor-pointer">
                <Globe className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
