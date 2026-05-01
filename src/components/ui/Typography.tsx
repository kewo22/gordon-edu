"use client";

import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const typography = tv({
  base: "tracking-tight antialiased",
  variants: {
    intent: {
      display: "font-inter font-black leading-[0.95] text-size-display uppercase",
      h1: "font-inter font-black leading-[1.1] text-size-h1 uppercase",
      h2: "font-inter font-black leading-[1.2] text-size-h2 uppercase",
      h3: "font-inter font-bold leading-[1.3] text-size-h3 uppercase",
      body: "font-mono font-medium leading-relaxed text-size-body",
      label: "font-mono font-bold uppercase tracking-[0.3em] text-size-label",
      code: "font-mono font-medium bg-surface-container px-1.5 py-0.5 rounded text-size-label",
    },
    color: {
      primary: "text-primary",
      secondary: "text-secondary",
      white: "text-white",
      muted: "text-on-surface-variant",
      onPrimary: "text-on-primary",
      inherit: "text-inherit",
    },
    weight: {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      black: "font-black",
    },
  },
  defaultVariants: {
    intent: "body",
    color: "primary",
  },
});

type TypographyVariants = VariantProps<typeof typography>;

interface TypographyProps extends Omit<React.HTMLAttributes<HTMLElement>, "color">, TypographyVariants {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "label" | "div" | "a" | "button";
  href?: string;
}

const Typography = ({
  as: Component = "span",
  intent,
  color,
  weight,
  className,
  ...props
}: TypographyProps) => {
  return (
    <Component
      className={cn(typography({ intent, color, weight }), className)}
      {...props}
    />
  );
};

export default Typography;
export { typography };
