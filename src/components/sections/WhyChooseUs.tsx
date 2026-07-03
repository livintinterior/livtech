"use client";

import { motion } from "framer-motion";
import {
  Zap, ShieldCheck, Users, TrendingUp, Clock, Trophy,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { staggerContainer, viewportConfig } from "@/lib/constants/animations";

const features = [
  {
    title: "Lightning Fast Delivery",
    desc: "We ship faster than the industry average. Agile sprints, no delays, no compromise on quality.",
    Icon: Zap,
    topBg: "#EFF6FF",
    accent: "#DBEAFE",
    fg: "#1D4ED8",
    bars: [40, 65, 50, 80, 55, 70],
  },
  {
    title: "Security First Approach",
    desc: "Every project is built security-in — from code practices to industry compliance standards.",
    Icon: ShieldCheck,
    topBg: "#F0FDF4",
    accent: "#DCFCE7",
    fg: "#15803D",
    bars: [55, 80, 60, 90, 70, 85],
  },
  {
    title: "Long-Term Partnership",
    desc: "We don't just build and leave. We become your dedicated technology partner for years.",
    Icon: Users,
    topBg: "#F5F3FF",
    accent: "#EDE9FE",
    fg: "#7C3AED",
    bars: [30, 50, 75, 60, 90, 65],
  },
  {
    title: "ROI-Focused Mindset",
    desc: "Every decision is driven by business value. We measure success by impact on your bottom line.",
    Icon: TrendingUp,
    topBg: "#FFFBEB",
    accent: "#FEF3C7",
    fg: "#B45309",
    bars: [35, 55, 70, 85, 90, 95],
  },
  {
    title: "24/7 Dedicated Support",
    desc: "Around-the-clock monitoring, rapid response, and proactive maintenance. Always on.",
    Icon: Clock,
    topBg: "#FDF2F8",
    accent: "#FCE7F3",
    fg: "#BE185D",
    bars: [60, 55, 65, 60, 70, 62],
  },
  {
    title: "Proven Excellence",
    desc: "2+ years delivering enterprise-grade solutions. 50+ projects. 99% client satisfaction.",
    Icon: Trophy,
    topBg: "#FFF7ED",
    accent: "#FFEDD5",
    fg: "#C2410C",
    bars: [70, 80, 85, 90, 88, 95],
  },
];

function FeatureCard({
  title, desc, Icon, topBg, accent, fg, bars,
}: (typeof features)[0]) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      className="rounded-[24px] overflow-hidden bg-white shadow-[0_4px_28px_rgba(0,0,0,0.07)] border border-black/[0.04] flex flex-col h-full"
    >
      {/* Illustration top */}
      <div
        className="h-[120px] relative flex items-center justify-center overflow-hidden"
        style={{ background: topBg }}
      >
        {/* Mini bar chart decoration */}
        <div className="absolute bottom-4 left-5 flex items-end gap-1">
          {bars.map((h, i) => (
            <div
              key={i}
              className="w-[5px] rounded-full"
              style={{ height: h * 0.45, background: fg, opacity: 0.15 + i * 0.04 }}
            />
          ))}
        </div>
        {/* Top-right decorative dots */}
        <div
          className="absolute top-4 right-5 w-2.5 h-2.5 rounded-full opacity-20"
          style={{ background: fg }}
        />
        <div
          className="absolute top-7 right-9 w-1.5 h-1.5 rounded-full opacity-12"
          style={{ background: fg }}
        />
        {/* Subtle ring */}
        <div
          className="absolute w-28 h-28 rounded-full opacity-[0.07]"
          style={{ border: `12px solid ${fg}` }}
        />
        {/* Central icon tile */}
        <div
          className="relative z-10 w-[62px] h-[62px] rounded-[18px] flex items-center justify-center shadow-lg"
          style={{
            background: accent,
            boxShadow: `0 8px 24px ${fg}30`,
          }}
        >
          <Icon size={26} color={fg} strokeWidth={1.8} />
        </div>
      </div>

      {/* Text content */}
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-[13px] font-bold text-[#0a0a08] mb-1.5">{title}</h3>
        <p className="text-[11.5px] text-black/52 leading-relaxed flex-1">{desc}</p>
      </div>
    </motion.div>
  );
}

export function WhyChooseUs() {
  return (
    <section className="relative py-10 lg:py-14" style={{ background: "#ffffff" }}>
      {/* Dividers */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Why Livetech"
          title="Why 45+ Businesses Choose "
          highlight="Us"
          subtitle="Deep technical expertise meets strategic thinking — delivering solutions that transform, not just function."
          className="mb-6"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-stretch"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              <FeatureCard {...f} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
