"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { technologies, techCategories } from "@/lib/constants/technologies";
import { TechIcon } from "@/components/shared/TechIcon";
import { cn } from "@/lib/utils/cn";
import { viewportConfig } from "@/lib/constants/animations";

export function Technologies() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = activeCategory === "All"
    ? technologies
    : technologies.filter((t) => t.category === activeCategory);

  return (
    <section className="relative py-12 lg:py-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Tech Stack"
          title="Technologies We "
          highlight="Master"
          subtitle="We work with the best tools in the industry to deliver modern, scalable, and maintainable solutions."
          className="mb-6"
        />

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {techCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-1.5 rounded-full text-[12px] font-medium transition-all duration-200",
                activeCategory === category
                  ? "bg-[#0a0a08] text-white"
                  : "bg-black/[0.03] text-black/58 border border-black/[0.09] hover:text-black/70 hover:bg-black/[0.06]"
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Tech grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3"
          >
            {filtered.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center gap-2 p-3 rounded-xl bg-black/[0.02] border border-black/[0.07] hover:border-black/[0.12] hover:bg-black/[0.04] transition-all duration-200 group cursor-default"
              >
                <TechIcon slug={tech.slug} size={26} className="opacity-80 group-hover:opacity-100 transition-opacity duration-200" />
                <span className="text-[10px] text-black/52 group-hover:text-[#0a0a08] transition-colors text-center leading-tight">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
