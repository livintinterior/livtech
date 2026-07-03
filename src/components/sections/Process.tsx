"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, Map, Palette, Code2, ShieldCheck, Rocket,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { viewportConfig } from "@/lib/constants/animations";

/* ─── Step data ─── */
const steps = [
  {
    step: "01", title: "Discovery",
    short: "Discovery & Consultation",
    description: "We dive deep into your business, goals, and challenges through in-depth discovery sessions — nothing is built until we truly understand your vision.",
    Icon: Search,      fg: "#2563EB", bg: "#EFF6FF", accent: "#BFDBFE",
  },
  {
    step: "02", title: "Strategy",
    short: "Strategy & Planning",
    description: "A detailed project roadmap covering timelines, tech stack, architecture decisions, and resource allocation — all agreed before a single line of code.",
    Icon: Map,         fg: "#7C3AED", bg: "#F5F3FF", accent: "#DDD6FE",
  },
  {
    step: "03", title: "Design",
    short: "Design & Prototyping",
    description: "Beautiful, user-centred interfaces with interactive prototypes for your approval. You see exactly what you're getting before development begins.",
    Icon: Palette,     fg: "#DB2777", bg: "#FDF2F8", accent: "#FBCFE8",
  },
  {
    step: "04", title: "Development",
    short: "Development & Testing",
    description: "Clean, scalable code built in agile sprints with continuous integration and automated testing baked in — not bolted on at the end.",
    Icon: Code2,       fg: "#059669", bg: "#ECFDF5", accent: "#A7F3D0",
  },
  {
    step: "05", title: "QA",
    short: "Quality Assurance",
    description: "Rigorous testing across all devices, browsers, and edge cases before any code reaches production. We find the bugs so your users never have to.",
    Icon: ShieldCheck, fg: "#EA580C", bg: "#FFF7ED", accent: "#FED7AA",
  },
  {
    step: "06", title: "Launch",
    short: "Launch & Support",
    description: "Zero-downtime deployment followed by ongoing monitoring, optimisation, and dedicated support — so your product keeps performing at its best.",
    Icon: Rocket,      fg: "#D97706", bg: "#FFFBEB", accent: "#FDE68A",
  },
];

/* ─── Circle geometry ─── */
const SZ   = 400;
const CTR  = SZ / 2;
const R    = 152;
const CARD = 80;

function circlePos(i: number) {
  const a = (i / steps.length) * Math.PI * 2 - Math.PI / 2;
  return {
    left: Math.round(CTR + R * Math.cos(a) - CARD / 2),
    top:  Math.round(CTR + R * Math.sin(a) - CARD / 2),
  };
}

/* ─── Circle step card ─── */
function CircleCard({
  step, index, isActive, onClick,
}: {
  step: typeof steps[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const p = circlePos(index);
  const { Icon, fg, bg, accent, step: num, title } = step;

  return (
    <motion.button
      onClick={onClick}
      className="absolute focus:outline-none"
      style={{ width: CARD, height: CARD + 24, left: p.left, top: p.top - 12 }}
      animate={{ scale: isActive ? 1.12 : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      whileHover={{ scale: isActive ? 1.14 : 1.07 }}
    >
      {isActive && (
        <motion.div
          layoutId="circle-glow"
          className="absolute inset-x-0 top-0 rounded-[22px]"
          style={{
            height: CARD,
            boxShadow: `0 0 0 3px ${fg}55, 0 12px 36px ${fg}35`,
          }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
        />
      )}

      {/* Card face */}
      <div
        className="relative z-10 flex flex-col items-center justify-center gap-2 rounded-[20px] border transition-all duration-200"
        style={{
          width: CARD,
          height: CARD,
          background: isActive ? bg : "#ffffff",
          borderColor: isActive ? `${fg}28` : "rgba(0,0,0,0.07)",
          boxShadow: isActive
            ? `0 8px 28px ${fg}22`
            : "0 2px 10px rgba(0,0,0,0.07)",
        }}
      >
        <div
          className="w-[42px] h-[42px] rounded-[13px] flex items-center justify-center"
          style={{
            background: isActive ? accent : bg,
            boxShadow: isActive ? `0 4px 14px ${fg}28` : "none",
          }}
        >
          <Icon size={20} strokeWidth={1.85} style={{ color: fg }} />
        </div>
        <span
          className="text-[9.5px] font-semibold"
          style={{ color: isActive ? fg : "rgba(0,0,0,0.30)" }}
        >
          {num}
        </span>
      </div>

      {/* Stage label */}
      <span
        className="block text-center text-[9.5px] font-semibold mt-1.5 whitespace-nowrap"
        style={{ color: isActive ? fg : "rgba(0,0,0,0.40)" }}
      >
        {title}
      </span>
    </motion.button>
  );
}

/* ─── Right-side step row ─── */
function StepRow({
  step, isActive, onClick,
}: {
  step: typeof steps[0];
  isActive: boolean;
  onClick: () => void;
}) {
  const { Icon, fg, bg, accent, step: num, short, description } = step;
  return (
    <motion.button
      onClick={onClick}
      className="w-full text-left flex gap-3 p-3.5 rounded-2xl border transition-all duration-200 focus:outline-none"
      style={{
        background: isActive ? bg : "#ffffff",
        borderColor: isActive ? `${fg}28` : "rgba(0,0,0,0.07)",
        boxShadow: isActive ? `0 4px 20px ${fg}18` : "0 1px 6px rgba(0,0,0,0.05)",
      }}
      whileHover={{ y: -1 }}
      transition={{ type: "spring", stiffness: 340, damping: 26 }}
    >
      {/* Icon */}
      <div
        className="w-10 h-10 rounded-[13px] flex items-center justify-center flex-shrink-0 mt-0.5"
        style={{
          background: isActive ? accent : bg,
          boxShadow: isActive ? `0 3px 12px ${fg}25` : "none",
        }}
      >
        <Icon size={18} strokeWidth={1.85} style={{ color: fg }} />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span
            className="text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-none"
            style={{ background: isActive ? accent : "rgba(0,0,0,0.06)", color: isActive ? fg : "rgba(0,0,0,0.36)" }}
          >
            {num}
          </span>
          <h3
            className="text-[12.5px] font-bold leading-tight"
            style={{ color: isActive ? fg : "#0a0a08" }}
          >
            {short}
          </h3>
        </div>
        <AnimatePresence>
          {isActive ? (
            <motion.p
              key="desc"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22 }}
              className="text-[11px] text-black/52 leading-relaxed overflow-hidden"
            >
              {description}
            </motion.p>
          ) : (
            <motion.p
              key="short"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[11px] text-black/36 leading-tight truncate"
            >
              {description.slice(0, 60)}…
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Active indicator */}
      <div
        className="w-1 self-stretch rounded-full flex-shrink-0 transition-all duration-200"
        style={{ background: isActive ? fg : "transparent" }}
      />
    </motion.button>
  );
}

/* ─── Main section ─── */
export function Process() {
  const [active, setActive] = useState(0);

  return (
    <section
      className="relative py-10 lg:py-14 overflow-hidden"
      style={{ background: "#f5f5f7" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="How We Work"
          title="Our Proven "
          highlight="6-Step Process"
          subtitle="A structured approach that ensures every project is delivered on time, within budget, and beyond expectations."
          className="mb-10"
        />

        {/* ════ Desktop: circle left + list right ════ */}
        <div className="hidden lg:flex items-center gap-10 xl:gap-16">

          {/* ── Circle of icons ── */}
          <motion.div
            className="relative flex-shrink-0"
            style={{ width: SZ, height: SZ }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportConfig}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* SVG guide circle + spokes */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox={`0 0 ${SZ} ${SZ}`}
            >
              <circle
                cx={CTR} cy={CTR} r={R}
                fill="none"
                stroke="rgba(0,0,0,0.07)"
                strokeWidth="1.5"
                strokeDasharray="5 5"
              />
              {steps.map((_, i) => {
                const p = circlePos(i);
                return (
                  <line
                    key={i}
                    x1={CTR} y1={CTR}
                    x2={p.left + CARD / 2}
                    y2={p.top  + CARD / 2}
                    stroke="rgba(0,0,0,0.05)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                );
              })}
              {steps.map((s, i) => {
                const p = circlePos(i);
                return (
                  <circle
                    key={i}
                    cx={p.left + CARD / 2}
                    cy={p.top  + CARD / 2}
                    r="3"
                    fill={i === active ? s.fg : "rgba(0,0,0,0.12)"}
                  />
                );
              })}
            </svg>

            {/* Center dot */}
            <div
              className="absolute rounded-full border-2"
              style={{
                width: 20, height: 20,
                left: CTR - 10, top: CTR - 10,
                borderColor: "rgba(0,0,0,0.10)",
                background: "#f5f5f7",
              }}
            />

            {/* Step cards */}
            {steps.map((step, i) => (
              <CircleCard
                key={step.step}
                step={step}
                index={i}
                isActive={i === active}
                onClick={() => setActive(i)}
              />
            ))}
          </motion.div>

          {/* ── Step descriptions list ── */}
          <motion.div
            className="flex-1 space-y-2"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {steps.map((step, i) => (
              <StepRow
                key={step.step}
                step={step}
                isActive={i === active}
                onClick={() => setActive(i)}
              />
            ))}
          </motion.div>
        </div>

        {/* ════ Mobile: vertical cards ════ */}
        <div className="lg:hidden space-y-3">
          {steps.map(({ step, short, description, Icon, fg, bg, accent }) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              className="flex gap-4 p-4 rounded-2xl bg-white border border-black/[0.07] shadow-sm"
            >
              <div
                className="w-11 h-11 rounded-[14px] flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: accent }}
              >
                <Icon size={19} strokeWidth={1.9} style={{ color: fg }} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="text-[9px] font-bold px-1.5 py-0.5 rounded"
                    style={{ background: bg, color: fg }}
                  >
                    {step}
                  </span>
                  <h3 className="text-[13px] font-semibold text-[#0a0a08]">{short}</h3>
                </div>
                <p className="text-[12px] text-black/52 leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
