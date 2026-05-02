"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface AnimatedCounterProps {
  value: number;
  duration?: number;
  delay?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

const AnimatedCounter = ({
  value,
  duration = 2,
  delay = 0,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(motionValue, value, {
        duration,
        delay,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [motionValue, inView, value, duration, delay]);

  const displayValue = useTransform(motionValue, (latest) => 
    `${prefix}${latest.toFixed(decimals)}${suffix}`
  );

  return (
    <motion.span ref={ref} className={cn("inline-block", className)}>
      {displayValue}
    </motion.span>
  );
};

export default AnimatedCounter;
