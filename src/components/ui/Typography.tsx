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
      /* Hero headline — max impact, ultra-tight optical leading */
      display: "font-inter font-black leading-[0.9] tracking-tighter fs-display uppercase",
      /* Section headings — e.g. "Visual Intelligence.", "Initialize Inquiry." */
      h1: "font-inter font-black leading-[1.0] tracking-tighter fs-h1 uppercase",
      /* Card headings — e.g. "Placement", "Visa Ops", "Careers" */
      h2: "font-inter font-black leading-[1.1] tracking-tight fs-h2 uppercase",
      /* Sub-headings — e.g. "GFEC_CONSOLE", contact sub-labels */
      h3: "font-inter font-bold leading-[1.2] tracking-tight fs-h3 uppercase",
      /* Body copy — paragraph descriptions */
      body: "font-mono font-normal leading-relaxed fs-body",
      /* Labels, tags, metadata — e.g. "ACTIVE PROTOCOL", "Q4 2024" */
      label: "font-mono font-bold uppercase tracking-[0.4em] fs-label",
      /* Inline code snippets */
      code: "font-mono font-medium bg-surface-container px-1.5 py-0.5 rounded fs-label",
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
