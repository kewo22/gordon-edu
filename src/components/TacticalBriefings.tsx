"use client";

import React from "react";
import { motion } from "framer-motion";
import Typography from "./ui/Typography";

const TacticalBriefings = () => {
  return (
    <section className="mb-24 px-6 md:px-8">
      <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-8">
        <div className="max-w-2xl">
          <Typography as="span" intent="label" color="secondary" className="mb-3 block">
            Some text
          </Typography>
          <Typography as="h2" intent="h1" className="mb-6">
            Header Text
          </Typography>
          <Typography as="p" intent="body" color="muted" className="max-w-md">
            Some long description.
          </Typography>
        </div>
        {/* <Typography as="div" intent="label" className="opacity-30 pb-2">
          REF: SYSTEM_LOG_V2.4
        </Typography> */}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="bento-card group relative aspect-video w-full overflow-hidden"
      >
        <video
          src="/about-video.mp4"
          controls
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
};

export default TacticalBriefings;
