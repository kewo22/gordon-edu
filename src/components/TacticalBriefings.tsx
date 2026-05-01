"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Typography from "./ui/Typography";

const TacticalBriefings = () => {
  return (
    <section className="mb-24 px-6 md:px-8">
      <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-8">
        <div className="max-w-2xl">
          <Typography as="span" intent="label" color="secondary" className="mb-3 block">
            Perspective
          </Typography>
          <Typography as="h2" intent="h1" className="mb-6">
            Visual Intelligence.
          </Typography>
          <Typography as="p" intent="body" color="muted" className="max-w-md">
            Access our tactical briefings on global market trends and institutional requirements.
          </Typography>
        </div>
        <Typography as="div" intent="label" className="opacity-30 pb-2">
          REF: SYSTEM_LOG_V2.4
        </Typography>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="bento-card group relative cursor-pointer aspect-video w-full"
      >
        <img
          alt="Consultants"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEDaWFVQ9WEL-f_MFRdzi-JyTecgWH4yWmu9aPcehPiEKh-qZH9E0-hrPSD_fdcQEjpdhFl94qAsbKQ8GrlGjGXV1G2cnutKsDTzL520jdvBLNDE3pnq0cgpIcX2gA7K9P4KLxBhUlq27Xh6CJsJZYJ5yrSKZt3T5AP6pLKpGIf7bQgPdvLIsPdzWBiZAsWKbi0Sa8nLhHiPgpo5YIyKhyoebr1yE_WqjhojvUi0UOrZqOCLUDfqu-X21ig7bEWx7yBgCol0VWOMwI"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
            <Play className="text-secondary w-12 h-12 fill-secondary" />
          </div>
        </div>
        <Typography as="div" intent="label" color="primary" className="absolute bottom-8 left-8 bg-white px-4 py-2 rounded-full shadow-lg">
          System Brief: 04:12 // PLAY NOW
        </Typography>
      </motion.div>
    </section>
  );
};

export default TacticalBriefings;
