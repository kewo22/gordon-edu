"use client";

import React from "react";
import { motion } from "framer-motion";
import { Landmark, FileText, TrendingUp, MoveRight, ShieldCheck, RefreshCw } from "lucide-react";
import Typography from "./ui/Typography";

const MotionTypography = motion.create(Typography);

const CapabilitiesMatrix = () => {
  return (
    <section className="mb-24 px-6 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Metrics Card (Left Column) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:col-span-4 bg-primary-container text-white rounded-[32px] p-10 flex flex-col justify-between min-h-[600px] border border-white/5"
        >
          <div>
            <Typography as="h3" intent="label" color="secondary" className="mb-16">
              Performance Metrics
            </Typography>
            <div className="space-y-16">
              <div className="pb-6">
                <div className="flex items-end justify-between mb-4">
                  <Typography as="span" intent="label" color="white" className="opacity-50">
                    Success Rate
                  </Typography>
                  <Typography as="span" intent="display" color="secondary">
                    98%
                  </Typography>
                </div>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "98%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="h-full bg-secondary" 
                  />
                </div>
              </div>
              <div className="pb-6">
                <div className="flex items-end justify-between mb-4">
                  <Typography as="span" intent="label" color="white" className="opacity-50">
                    Partners
                  </Typography>
                  <Typography as="span" intent="display" color="white">
                    500+
                  </Typography>
                </div>
                <div className="h-1 w-full bg-white/5 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 pt-8 border-t border-white/10 opacity-40">
            <RefreshCw className="w-3 h-3 text-white" />
            <Typography as="span" intent="label" color="white">
              DATA UPDATED: Q4 2024
            </Typography>
          </div>
        </motion.div>

        {/* Services Right Column */}
        <div className="md:col-span-8 flex flex-col gap-8">
          
          {/* Top Row: Placement & Visa Ops */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Placement */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bento-card p-10 flex flex-col justify-between min-h-[300px]"
            >
              <div>
                <div className="w-12 h-12 bg-secondary/5 rounded-2xl flex items-center justify-center text-secondary mb-10 border border-secondary/10">
                  <Landmark className="w-6 h-6" />
                </div>
                <Typography as="h3" intent="h2" className="mb-4">
                  Placement
                </Typography>
                <div className="editorial-line text-on-surface mb-6"></div>
                <Typography as="p" intent="body" color="muted">
                  Expert institutional matching based on advanced academic telemetry and profile optimization.
                </Typography>
              </div>
              <div className="pt-8 border-t border-outline-variant/10 flex justify-between items-center">
                <Typography as="span" intent="label" color="secondary">
                  ACTIVE PROTOCOL
                </Typography>
                <MoveRight className="w-5 h-5 opacity-40 hover:opacity-100 transition-opacity cursor-pointer" />
              </div>
            </motion.div>

            {/* Visa Ops */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bento-card p-10 flex flex-col justify-between min-h-[300px] bg-surface-container-low"
            >
              <div>
                <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-10 border border-primary/10">
                  <FileText className="w-6 h-6" />
                </div>
                <Typography as="h3" intent="h2" className="mb-4">
                  Visa Ops
                </Typography>
                <div className="editorial-line text-primary mb-6"></div>
                <Typography as="p" intent="body" color="muted">
                  End-to-end regulatory compliance and documentation engineering for global mobility.
                </Typography>
              </div>
              <div className="pt-8 border-t border-outline-variant/10 flex justify-between items-center">
                <Typography as="span" intent="label">
                  SECURE PROCESS
                </Typography>
                <ShieldCheck className="w-5 h-5 opacity-40" />
              </div>
            </motion.div>
          </div>

          {/* Bottom Row: Careers (Prominent Card) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bento-card p-10 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-10 bg-white grow"
          >
            <div className="flex items-center gap-8 w-full md:w-1/3">
              <div className="w-16 h-16 bg-secondary/5 rounded-2xl flex items-center justify-center text-secondary border border-secondary/10 shrink-0">
                <TrendingUp className="w-8 h-8" />
              </div>
              <Typography as="h3" intent="h2">
                Careers
              </Typography>
            </div>
            <div className="w-full md:w-1/2">
              <Typography as="p" intent="body" color="muted" className="text-base">
                Strategic alignment with high-growth global job markets and industry verticals through direct corporate network integration.
              </Typography>
            </div>
            <div className="w-full md:w-auto flex flex-col items-end gap-6">
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <div className="w-2 h-2 bg-secondary rounded-full opacity-40"></div>
                <div className="w-2 h-2 bg-secondary rounded-full opacity-10"></div>
              </div>
              <Typography as="span" intent="label" color="secondary">
                MARKET SYNC
              </Typography>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesMatrix;
