"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/constants/animations";

const stats = [
  { value: 50,  suffix: "+", label: "Projects Delivered",  description: "Across industries worldwide" },
  { value: 45,  suffix: "+", label: "Happy Clients",        description: "Startups to enterprises" },
  { value: 2,   suffix: "+", label: "Years of Experience",  description: "Of building digital solutions" },
  { value: 99,  suffix: "%", label: "Client Retention",     description: "Our clients keep coming back" },
];

export function Stats() {
  return (
    <section className="relative py-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#86a372]/8 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {stats.map(({ value, suffix, label, description }) => (
            <motion.div key={label} variants={fadeUp}>
              <div className="relative p-4 rounded-2xl bg-black/[0.02] border border-black/[0.08] hover:border-black/[0.12] hover:bg-black/[0.03] transition-all duration-300 group text-center">
                <div className="text-3xl lg:text-4xl font-bold gradient-text-static mb-1">
                  <AnimatedCounter end={value} suffix={suffix} />
                </div>
                <div className="text-sm font-semibold text-black/80 mb-1">{label}</div>
                <div className="text-xs text-black/52">{description}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
