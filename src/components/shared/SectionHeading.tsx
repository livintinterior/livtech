"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";
import { GradientText } from "@/components/effects/GradientText";
import { fadeUp, viewportConfig } from "@/lib/constants/animations";

interface SectionHeadingProps {
  label?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export function SectionHeading({
  label,
  title,
  highlight,
  subtitle,
  align = "center",
  className,
  titleClassName,
  subtitleClassName,
}: SectionHeadingProps) {
  const alignClass = {
    left:   "items-start text-left",
    center: "items-center text-center",
    right:  "items-end text-right",
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={fadeUp}
      className={cn("flex flex-col gap-2", alignClass[align], className)}
    >
      {label && (
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/[0.04] border border-black/[0.09]">
          <div className="w-1 h-1 rounded-full bg-[#3d5a2e]/60" />
          <span className="text-[10px] font-semibold text-black/62 uppercase tracking-wider">
            {label}
          </span>
        </div>
      )}

      <h2 className={cn("text-2xl sm:text-3xl lg:text-[2.4rem] font-bold text-[#0a0a08] leading-tight tracking-tight", titleClassName)}>
        {highlight ? (
          <>
            {title}
            <GradientText>{highlight}</GradientText>
          </>
        ) : title}
      </h2>

      {subtitle && (
        <p className={cn("text-[13.5px] text-black/60 max-w-2xl leading-relaxed", subtitleClassName)}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
