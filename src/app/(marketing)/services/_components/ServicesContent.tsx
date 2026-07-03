"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { services } from "@/lib/constants/services";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/constants/animations";

/* ── Images ── */
const serviceImages: Record<string, string> = {
  "website-development":          "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80",
  "mobile-app-development":       "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
  "ui-ux-design":                 "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
  "digital-marketing":            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  seo:                            "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80",
  branding:                       "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80",
  "ai-solutions":                 "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80",
  "custom-software-development":  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
  "cloud-solutions":              "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80",
  "data-solutions":               "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  cybersecurity:                  "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80",
  "it-infrastructure":            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
  "backup-recovery":              "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
  maintenance:                    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
};

const accentMap: Record<string, string> = {
  "website-development":          "#1D4ED8",
  "mobile-app-development":       "#7C3AED",
  "ui-ux-design":                 "#BE185D",
  "digital-marketing":            "#C2410C",
  seo:                            "#15803D",
  branding:                       "#B45309",
  "ai-solutions":                 "#6D28D9",
  "custom-software-development":  "#0E7490",
  "cloud-solutions":              "#0369A1",
  "data-solutions":               "#0F766E",
  cybersecurity:                  "#B91C1C",
  "it-infrastructure":            "#475569",
  "backup-recovery":              "#C2410C",
  maintenance:                    "#4338CA",
};

/* ── Animated ring background (same as About page) ── */
const rings = [
  { size: 520, dur: 44, dir:  1, stroke: "rgba(61,90,46,0.07)", dash: "6 12", dotSize: 9,  dotColor: "rgba(61,90,46,0.28)", glow: "0 0 10px rgba(61,90,46,0.22)" },
  { size: 370, dur: 28, dir: -1, stroke: "rgba(61,90,46,0.06)", dash: "4 8",  dotSize: 7,  dotColor: "rgba(61,90,46,0.22)", glow: "0 0 8px rgba(61,90,46,0.18)"  },
  { size: 230, dur: 17, dir:  1, stroke: "rgba(61,90,46,0.05)", dash: "3 6",  dotSize: 5,  dotColor: "rgba(61,90,46,0.20)", glow: "0 0 6px rgba(61,90,46,0.15)"  },
  { size: 120, dur: 11, dir: -1, stroke: "rgba(61,90,46,0.05)", dash: "2 5",  dotSize: 4,  dotColor: "rgba(61,90,46,0.18)", glow: "0 0 5px rgba(61,90,46,0.12)"  },
];

const particles = [
  { x: 8,  y: 20, s: 4, op: 0.16, dur: 7,  delay: 0   },
  { x: 90, y: 14, s: 3, op: 0.13, dur: 9,  delay: 1.2 },
  { x: 14, y: 70, s: 5, op: 0.11, dur: 8,  delay: 2   },
  { x: 86, y: 68, s: 4, op: 0.14, dur: 10, delay: 0.5 },
  { x: 50, y: 6,  s: 3, op: 0.09, dur: 6,  delay: 3   },
  { x: 92, y: 44, s: 3, op: 0.12, dur: 11, delay: 1.8 },
  { x: 4,  y: 50, s: 4, op: 0.10, dur: 7,  delay: 2.5 },
];

function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <div className="absolute inset-0 dot-pattern opacity-25" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-[#3d5a2e]/[0.05] blur-3xl" />
      {rings.map(({ size, dur, dir, stroke, dash, dotSize, dotColor, glow }, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2"
          style={{ width: size, height: size, marginLeft: -size / 2, marginTop: -size / 2 }}
          animate={{ rotate: dir * 360 }}
          transition={{ duration: dur, repeat: Infinity, ease: "linear" }}
        >
          <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="absolute inset-0">
            <circle cx={size / 2} cy={size / 2} r={size / 2 - 4} fill="none" stroke={stroke} strokeWidth="1.5" strokeDasharray={dash} />
          </svg>
          <div className="absolute rounded-full" style={{ width: dotSize, height: dotSize, top: 4, left: "50%", marginLeft: -dotSize / 2, background: dotColor, boxShadow: glow }} />
          {size >= 370 && (
            <div className="absolute rounded-full" style={{ width: dotSize * 0.7, height: dotSize * 0.7, bottom: 4, left: "50%", marginLeft: -(dotSize * 0.7) / 2, background: dotColor, boxShadow: glow }} />
          )}
        </motion.div>
      ))}
      {particles.map((p, i) => (
        <motion.div
          key={`p-${i}`}
          className="absolute rounded-full"
          style={{ width: p.s, height: p.s, left: `${p.x}%`, top: `${p.y}%`, background: `rgba(61,90,46,${p.op})` }}
          animate={{ y: [0, -10, 0], opacity: [p.op, p.op * 2, p.op] }}
          transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
        />
      ))}
    </div>
  );
}

/* ── Service card ── */
function ServiceCard({
  slug, title, shortDesc, features, color,
}: {
  slug: string; title: string; shortDesc: string;
  features: readonly string[]; color: string;
}) {
  const img    = serviceImages[slug];
  const accent = accentMap[slug] ?? "#3d5a2e";

  return (
    <motion.div whileHover={{ y: -5, scale: 1.01 }} transition={{ type: "spring", stiffness: 320, damping: 22 }}>
      <Link
        href={`/services/${slug}`}
        className="block rounded-[24px] overflow-hidden bg-white border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.07)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.12)] transition-shadow duration-300 h-full flex flex-col"
      >
        {/* Image */}
        <div className="relative h-[170px] overflow-hidden flex-shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 opacity-35 mix-blend-multiply" style={{ background: accent }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          {/* Color bar at top */}
          <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color}`} />
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-[14px] font-bold text-[#0a0a08] mb-1.5 leading-snug">{title}</h3>
          <p className="text-[12px] text-black/52 leading-relaxed mb-4 flex-1 line-clamp-2">{shortDesc}</p>

          <ul className="space-y-1.5 mb-4">
            {features.slice(0, 3).map((f) => (
              <li key={f} className="flex items-center gap-2 text-[11px] text-black/45">
                <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: accent }} />
                {f}
              </li>
            ))}
          </ul>

          <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold" style={{ color: accent }}>
            Learn more <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

/* ── Main export ── */
export function ServicesContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[480px] flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent" />
        <HeroBackground />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center"
        >
          <motion.div variants={fadeUp} className="flex justify-center mb-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-black/[0.09] shadow-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-[#3d5a2e]/70 animate-pulse" />
              <span className="text-[11px] font-semibold text-black/55 uppercase tracking-wider">14 Services · All Under One Roof</span>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-[2.2rem] sm:text-[3rem] lg:text-[3.8rem] font-extrabold text-[#0a0a08] leading-[1.06] tracking-[-0.03em] mb-5"
          >
            Everything You Need to<br />
            <span className="text-[#3d5a2e]">Grow Digitally</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-[15px] text-black/52 leading-relaxed max-w-xl mx-auto">
            From your first website to enterprise-scale infrastructure — Livetech.in provides
            14 specialised technology services under one roof.
          </motion.p>
        </motion.div>
      </section>

      {/* Services grid */}
      <section className="relative py-12 pb-20" style={{ background: "#f5f5f7" }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="What We Do"
            title="Our "
            highlight="Services"
            subtitle="Select a service to explore what's included, technologies we use, and how we deliver results."
            className="mb-10"
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((s) => (
              <motion.div key={s.slug} variants={fadeUp} className="group h-full">
                <ServiceCard
                  slug={s.slug}
                  title={s.title}
                  shortDesc={s.shortDesc}
                  features={s.features}
                  color={s.color}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
