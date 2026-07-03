"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, ArrowLeft, CheckCircle,
  Clock, Users, Award, Zap,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { services } from "@/lib/constants/services";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/constants/animations";

/* ── Per-service accent colours ── */
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

const accentBgMap: Record<string, string> = {
  "website-development":          "#EFF6FF",
  "mobile-app-development":       "#F5F3FF",
  "ui-ux-design":                 "#FDF2F8",
  "digital-marketing":            "#FFF7ED",
  seo:                            "#F0FDF4",
  branding:                       "#FFFBEB",
  "ai-solutions":                 "#F5F3FF",
  "custom-software-development":  "#ECFEFF",
  "cloud-solutions":              "#EFF6FF",
  "data-solutions":               "#F0FDFA",
  cybersecurity:                  "#FFF1F2",
  "it-infrastructure":            "#F8FAFC",
  "backup-recovery":              "#FFF7ED",
  maintenance:                    "#EEF2FF",
};

/* ── Ring background (same system as About page) ── */
const rings = [
  { size: 560, dur: 48, dir:  1, stroke: "rgba(61,90,46,0.07)", dash: "6 12", dotSize: 10, dotColor: "rgba(61,90,46,0.28)", glow: "0 0 12px rgba(61,90,46,0.22)" },
  { size: 400, dur: 30, dir: -1, stroke: "rgba(61,90,46,0.06)", dash: "4 8",  dotSize: 8,  dotColor: "rgba(61,90,46,0.22)", glow: "0 0 9px rgba(61,90,46,0.18)"  },
  { size: 250, dur: 19, dir:  1, stroke: "rgba(61,90,46,0.05)", dash: "3 6",  dotSize: 6,  dotColor: "rgba(61,90,46,0.20)", glow: "0 0 7px rgba(61,90,46,0.15)"  },
  { size: 130, dur: 12, dir: -1, stroke: "rgba(61,90,46,0.05)", dash: "2 5",  dotSize: 4,  dotColor: "rgba(61,90,46,0.18)", glow: "0 0 5px rgba(61,90,46,0.12)"  },
];

const particles = [
  { x: 7,  y: 18, s: 4, op: 0.15, dur: 7,  delay: 0   },
  { x: 91, y: 12, s: 3, op: 0.12, dur: 9,  delay: 1.2 },
  { x: 12, y: 72, s: 5, op: 0.10, dur: 8,  delay: 2   },
  { x: 88, y: 66, s: 4, op: 0.13, dur: 10, delay: 0.5 },
  { x: 50, y: 7,  s: 3, op: 0.09, dur: 6,  delay: 3   },
  { x: 93, y: 42, s: 3, op: 0.11, dur: 11, delay: 1.8 },
  { x: 4,  y: 48, s: 4, op: 0.10, dur: 7,  delay: 2.5 },
];

function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <div className="absolute inset-0 dot-pattern opacity-25" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] rounded-full bg-[#3d5a2e]/[0.05] blur-3xl" />
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
          {size >= 400 && (
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

const trustPoints = [
  { Icon: Award,  label: "Deep Domain Expertise",  desc: "Specialists with hands-on experience across 16+ industries and technology stacks." },
  { Icon: Clock,  label: "On-Time Delivery",        desc: "Agile methodology with transparent timelines, milestone tracking, and zero-surprise delivery." },
  { Icon: Users,  label: "Dedicated Team",          desc: "A dedicated account team — project manager, developers, and QA — from day one to go-live." },
  { Icon: Zap,    label: "Post-Launch Support",     desc: "We don't disappear after launch. 24/7 support, SLA-backed response, and ongoing optimization." },
];

export function ServiceDetailContent({ slug }: { slug: string }) {
  const service = services.find((s) => s.slug === slug)!;
  const Icon   = service.icon;
  const accent = accentMap[slug]   ?? "#3d5a2e";
  const accentBg = accentBgMap[slug] ?? "#F0FDF4";
  const related = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      {/* ══ 1. HERO ══ */}
      <section className="relative min-h-[620px] lg:min-h-[660px] flex flex-col justify-center pt-24 pb-14 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent" />
        <HeroBackground />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[12px] font-medium text-black/45 hover:text-black/70 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> All Services
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              {/* Badge */}
              <motion.div variants={fadeUp} className="mb-5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-black/[0.09] shadow-sm">
                  <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: accent }} />
                  <span className="text-[11px] font-semibold text-black/55 uppercase tracking-wider">Livetech Service</span>
                </div>
              </motion.div>

              {/* Icon + Title */}
              <motion.div variants={fadeUp} className="flex items-center gap-4 mb-4">
                <div
                  className="w-14 h-14 rounded-[18px] flex items-center justify-center flex-shrink-0 shadow-lg"
                  style={{ background: accentBg, boxShadow: `0 8px 24px ${accent}30` }}
                >
                  <Icon className="w-7 h-7" style={{ color: accent }} />
                </div>
                <h1 className="text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem] font-extrabold text-[#0a0a08] leading-[1.06] tracking-[-0.03em]">
                  {service.title}
                </h1>
              </motion.div>

              <motion.p variants={fadeUp} className="text-[15px] text-black/52 leading-relaxed mb-8 max-w-xl">
                {service.description}
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                <Link
                  href="/request-quote"
                  className="inline-flex items-center gap-2 px-6 py-3 text-[13.5px] font-semibold text-white bg-[#0a0a08] rounded-full hover:bg-[#0a0a08]/85 transition-all shadow-lg shadow-black/[0.12]"
                >
                  Get a Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/book-consultation"
                  className="inline-flex items-center gap-2 px-6 py-3 text-[13.5px] font-medium text-black/65 rounded-full border border-black/[0.14] bg-white/80 backdrop-blur-sm hover:border-black/[0.25] hover:text-black/80 transition-all"
                >
                  Free Consultation
                </Link>
              </motion.div>
            </motion.div>

            {/* Right — Features card */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="rounded-[24px] overflow-hidden bg-white shadow-[0_4px_32px_rgba(0,0,0,0.09)] border border-black/[0.06]">
                {/* Coloured header strip */}
                <div className="px-6 py-4 flex items-center gap-3" style={{ background: accentBg, borderBottom: `1px solid ${accent}18` }}>
                  <div className="w-8 h-8 rounded-[10px] flex items-center justify-center" style={{ background: `${accent}20` }}>
                    <CheckCircle className="w-4 h-4" style={{ color: accent }} />
                  </div>
                  <h2 className="text-[14px] font-bold text-[#0a0a08]">What&apos;s Included</h2>
                </div>
                <ul className="p-5 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-[13px] text-black/60">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: accent }} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ 2. TECHNOLOGIES ══ */}
      <section className="relative py-10 lg:py-14" style={{ background: "#f5f5f7" }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Tech Stack"
            title="Technologies "
            highlight="We Use"
            subtitle={`The tools and platforms our ${service.title} team relies on to build fast, scalable, and secure solutions.`}
            className="mb-8"
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerContainer}
            className="flex flex-wrap gap-3"
          >
            {service.technologies.map((tech) => (
              <motion.div key={tech} variants={fadeUp}>
                <span
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-black/[0.07] text-[13px] font-medium text-black/70 hover:border-black/[0.18] hover:text-black/90 transition-colors shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
                  {tech}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ 3. WHY LIVETECH ══ */}
      <section className="relative py-10 lg:py-14 bg-white">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Why Us"
            title={`Why Livetech for `}
            highlight={service.title + "?"}
            subtitle="Our certified specialists bring years of hands-on experience, a proven delivery methodology, and a commitment to your business outcomes."
            className="mb-10"
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {trustPoints.map(({ Icon: TIcon, label, desc }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
                className="p-5 rounded-[22px] bg-white border border-black/[0.07] shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] transition-shadow"
              >
                <div
                  className="w-10 h-10 rounded-[12px] flex items-center justify-center mb-4"
                  style={{ background: accentBg, boxShadow: `0 4px 12px ${accent}20` }}
                >
                  <TIcon className="w-5 h-5" style={{ color: accent }} />
                </div>
                <h3 className="text-[13.5px] font-bold text-[#0a0a08] mb-2">{label}</h3>
                <p className="text-[12px] text-black/50 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ 4. RELATED SERVICES ══ */}
      <section className="relative py-10 lg:py-14" style={{ background: "#f5f5f7" }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Explore More"
            title="Related "
            highlight="Services"
            subtitle="Discover more ways Livetech can help accelerate your digital transformation."
            className="mb-8"
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-3 gap-5"
          >
            {related.map((s) => {
              const RelIcon = s.icon;
              const relAccent = accentMap[s.slug] ?? "#3d5a2e";
              const relBg     = accentBgMap[s.slug] ?? "#F0FDF4";
              return (
                <motion.div
                  key={s.slug}
                  variants={fadeUp}
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 320, damping: 22 }}
                >
                  <Link
                    href={`/services/${s.slug}`}
                    className="block p-5 rounded-[22px] bg-white border border-black/[0.07] shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] hover:border-black/[0.12] transition-all h-full"
                  >
                    <div
                      className="w-10 h-10 rounded-[12px] flex items-center justify-center mb-3.5"
                      style={{ background: relBg, boxShadow: `0 4px 12px ${relAccent}20` }}
                    >
                      <RelIcon className="w-5 h-5" style={{ color: relAccent }} />
                    </div>
                    <h3 className="text-[13.5px] font-bold text-[#0a0a08] mb-1.5">{s.title}</h3>
                    <p className="text-[12px] text-black/50 leading-relaxed mb-4">{s.shortDesc}</p>
                    <span className="inline-flex items-center gap-1 text-[12px] font-semibold" style={{ color: relAccent }}>
                      Explore <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            className="mt-8"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-black/55 hover:text-[#0a0a08] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to All Services
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
