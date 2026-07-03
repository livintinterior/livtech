"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap, ShieldCheck, TrendingUp, Heart } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/constants/animations";

/* ══════════════════════════════════════════════
   CUSTOM SVG ILLUSTRATIONS
══════════════════════════════════════════════ */

function CompassIllustration({ color }: { color: string }) {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
      <circle cx="17" cy="17" r="15" stroke={color} strokeWidth="1.4" opacity="0.35" />
      {[0, 90, 180, 270].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <line
            key={deg}
            x1={17 + 12 * Math.cos(rad)} y1={17 + 12 * Math.sin(rad)}
            x2={17 + 15 * Math.cos(rad)} y2={17 + 15 * Math.sin(rad)}
            stroke={color} strokeWidth="1.6" strokeLinecap="round" opacity="0.55"
          />
        );
      })}
      {/* South needle */}
      <path d="M17 17L14 24L17 22L20 24Z" fill={color} opacity="0.28" />
      {/* North needle — bold */}
      <path d="M17 17L14 10L17 12L20 10Z" fill={color} opacity="0.9" />
      <circle cx="17" cy="17" r="2.5" fill={color} opacity="0.85" />
      <circle cx="17" cy="17" r="1"   fill="white"  opacity="0.8"  />
      <text x="17" y="6.5" textAnchor="middle" fontSize="4" fontWeight="700" fill={color} opacity="0.7">N</text>
      <text x="17" y="31"  textAnchor="middle" fontSize="4" fontWeight="700" fill={color} opacity="0.4">S</text>
      <text x="30" y="18.5" textAnchor="middle" fontSize="4" fontWeight="700" fill={color} opacity="0.4">E</text>
      <text x="4"  y="18.5" textAnchor="middle" fontSize="4" fontWeight="700" fill={color} opacity="0.4">W</text>
    </svg>
  );
}

function EyeIllustration({ color }: { color: string }) {
  return (
    <svg width="38" height="28" viewBox="0 0 38 28" fill="none">
      <path
        d="M2 14C2 14 8 3 19 3C30 3 36 14 36 14C36 14 30 25 19 25C8 25 2 14 2 14Z"
        fill={color} fillOpacity="0.10" stroke={color} strokeWidth="1.5" strokeLinejoin="round"
      />
      <circle cx="19" cy="14" r="6.5" fill={color} opacity="0.22" />
      <circle cx="19" cy="14" r="5"   fill={color} opacity="0.35" />
      <circle cx="19" cy="14" r="3"   fill={color} opacity="0.85" />
      <circle cx="20.5" cy="12.5" r="1.1" fill="white" opacity="0.95" />
      <line x1="19" y1="0"   x2="19"   y2="2.2" stroke={color} strokeWidth="1.3" strokeLinecap="round" opacity="0.45" />
      <line x1="25" y1="1.8" x2="23.6" y2="3.4" stroke={color} strokeWidth="1.3" strokeLinecap="round" opacity="0.35" />
      <line x1="13" y1="1.8" x2="14.4" y2="3.4" stroke={color} strokeWidth="1.3" strokeLinecap="round" opacity="0.35" />
      <line x1="30" y1="6"   x2="28.4" y2="7.2" stroke={color} strokeWidth="1.3" strokeLinecap="round" opacity="0.25" />
      <line x1="8"  y1="6"   x2="9.6"  y2="7.2" stroke={color} strokeWidth="1.3" strokeLinecap="round" opacity="0.25" />
    </svg>
  );
}

function DiamondIllustration({ color }: { color: string }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M16 29L3 13L9 4H23L29 13Z" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.4" strokeLinejoin="round" />
      {/* Crown top facet */}
      <path d="M9 4H23L29 13H3Z" fill={color} fillOpacity="0.35" />
      <line x1="16" y1="4"  x2="16" y2="29" stroke={color} strokeWidth="0.8" opacity="0.28" />
      <line x1="3"  y1="13" x2="29" y2="13" stroke={color} strokeWidth="0.8" opacity="0.28" />
      <path d="M3 13L9 4L16 13Z"  fill={color} fillOpacity="0.18" />
      <path d="M29 13L23 4L16 13Z" fill={color} fillOpacity="0.10" />
      {/* Sparkles */}
      <circle cx="26" cy="5"  r="1.2" fill={color} opacity="0.55" />
      <circle cx="28" cy="9"  r="0.7" fill={color} opacity="0.40" />
      <circle cx="23" cy="2"  r="0.7" fill={color} opacity="0.35" />
    </svg>
  );
}

/* ══════════════════════════════════════════════
   DATA
══════════════════════════════════════════════ */

const stats = [
  { value: 50,  suffix: "+", label: "Projects Delivered", desc: "Across industries" },
  { value: 45,  suffix: "+", label: "Happy Clients",       desc: "Startups to enterprises" },
  { value: 20,  suffix: "+", label: "Team Experts",        desc: "Across tech & design" },
  { value: 2,   suffix: "+", label: "Years of Excellence", desc: "Building digital solutions" },
];

const values = [
  {
    title: "Our Mission",
    desc: "To simplify technology and make it accessible for every business — helping them grow faster and operate smarter in the digital age.",
    Illustration: CompassIllustration, fg: "#2563EB", bg: "#EFF6FF", accent: "#BFDBFE",
    bars: [40, 65, 50, 80, 55, 70],
  },
  {
    title: "Our Vision",
    desc: "To become India's most trusted technology partner, powering digital transformation for thousands of businesses worldwide.",
    Illustration: EyeIllustration, fg: "#7C3AED", bg: "#F5F3FF", accent: "#DDD6FE",
    bars: [55, 80, 60, 90, 70, 85],
  },
  {
    title: "Our Values",
    desc: "Excellence, integrity, innovation, and partnership — these aren't just words, they define how we work every single day.",
    Illustration: DiamondIllustration, fg: "#3d5a2e", bg: "#F0FDF4", accent: "#DCFCE7",
    bars: [70, 80, 85, 90, 88, 95],
  },
];

const milestones = [
  { year: "2016", title: "Founded in Hyderabad",   desc: "Started with a team of 5 passionate technologists." },
  { year: "2018", title: "First 50 Clients",        desc: "Expanded the team to 20 and served clients across 3 states." },
  { year: "2020", title: "Cloud & AI Division",     desc: "Launched dedicated cloud and artificial intelligence practices." },
  { year: "2024", title: "25+ Projects Milestone",  desc: "Celebrated successful deliveries across multiple industries." },
  { year: "2025", title: "Expansion & Growth",      desc: "Serving clients across India, UAE, USA, UK, and Singapore." },
  { year: "2026", title: "50+ Projects & Growing",  desc: "Building high-impact digital products for 45+ happy clients." },
];

const teamMembers = [
  { name: "Aryan Varma",  role: "Founder & CEO", desc: "Visionary leader with 2+ years in technology consulting and product development.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", accent: "#DBEAFE", fg: "#1D4ED8", Icon: Zap },
  { name: "Eswar Menti",  role: "Co-Founder & CTO",   desc: "Full-stack architect with expertise in cloud systems and enterprise software.",      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80", accent: "#DDD6FE", fg: "#7C3AED", Icon: ShieldCheck },
  { name: "Keerthi Budde",   role: "Head of Design",    desc: "Award-winning UI/UX designer passionate about user-centered experiences.",    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80", accent: "#FCE7F3", fg: "#BE185D", Icon: Heart },
  { name: "Naveen Alugule", role: "Head of Marketing", desc: "Data-driven marketer with deep expertise in B2B and SaaS growth strategies.", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80", accent: "#FEF3C7", fg: "#B45309", Icon: TrendingUp },
];

const certifications = [
  "ISO 9001:2015 Certified", "Global Delivery Model",
  "Dedicated Account Teams", "Agile Development",
  "24/7 Support", "NDA Protected",
];

/* ══════════════════════════════════════════════
   HERO BACKGROUND — rotating rings + particles
══════════════════════════════════════════════ */

const rings = [
  { size: 600, dur: 48, dir:  1, stroke: "rgba(61,90,46,0.07)", dash: "6 12", dotSize: 10, dotColor: "rgba(61,90,46,0.30)", glow: "0 0 12px rgba(61,90,46,0.25)" },
  { size: 440, dur: 32, dir: -1, stroke: "rgba(61,90,46,0.06)", dash: "4 8",  dotSize: 8,  dotColor: "rgba(61,90,46,0.25)", glow: "0 0 9px rgba(61,90,46,0.20)"  },
  { size: 290, dur: 20, dir:  1, stroke: "rgba(61,90,46,0.05)", dash: "3 6",  dotSize: 6,  dotColor: "rgba(61,90,46,0.22)", glow: "0 0 7px rgba(61,90,46,0.18)"  },
  { size: 160, dur: 13, dir: -1, stroke: "rgba(61,90,46,0.05)", dash: "2 5",  dotSize: 4,  dotColor: "rgba(61,90,46,0.20)", glow: "0 0 5px rgba(61,90,46,0.15)"  },
];

const particles = [
  { x: 8,  y: 18, s: 4, op: 0.18, dur: 7,  delay: 0   },
  { x: 90, y: 12, s: 3, op: 0.14, dur: 9,  delay: 1.2 },
  { x: 12, y: 72, s: 5, op: 0.12, dur: 8,  delay: 2   },
  { x: 87, y: 68, s: 4, op: 0.15, dur: 10, delay: 0.5 },
  { x: 50, y: 8,  s: 3, op: 0.10, dur: 6,  delay: 3   },
  { x: 93, y: 42, s: 3, op: 0.13, dur: 11, delay: 1.8 },
  { x: 4,  y: 48, s: 4, op: 0.11, dur: 7,  delay: 2.5 },
  { x: 75, y: 88, s: 3, op: 0.10, dur: 8,  delay: 0.8 },
  { x: 22, y: 90, s: 4, op: 0.12, dur: 9,  delay: 1.5 },
];

function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#3d5a2e]/[0.05] blur-3xl" />

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
          {size >= 440 && (
            <div className="absolute rounded-full" style={{ width: dotSize * 0.7, height: dotSize * 0.7, bottom: 4, left: "50%", marginLeft: -(dotSize * 0.7) / 2, background: dotColor, boxShadow: glow }} />
          )}
        </motion.div>
      ))}

      {particles.map((p, i) => (
        <motion.div
          key={`p-${i}`}
          className="absolute rounded-full"
          style={{ width: p.s, height: p.s, left: `${p.x}%`, top: `${p.y}%`, background: `rgba(61,90,46,${p.op})` }}
          animate={{ y: [0, -10, 0], opacity: [p.op, p.op * 2.2, p.op] }}
          transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
        />
      ))}
    </div>
  );
}

/* ══════════════════════════════════════════════
   SUB-COMPONENTS
══════════════════════════════════════════════ */

type ValueCardProps = {
  title: string;
  desc: string;
  Illustration: React.ComponentType<{ color: string }>;
  fg: string;
  bg: string;
  accent: string;
  bars: number[];
};

type TeamCardProps = {
  name: string;
  role: string;
  desc: string;
  avatar: string;
  accent: string;
  fg: string;
  Icon: React.ElementType;
};

function ValueCard({ title, desc, Illustration, fg, bg, accent, bars }: ValueCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      className="rounded-[24px] overflow-hidden bg-white shadow-[0_4px_28px_rgba(0,0,0,0.07)] border border-black/[0.04] flex flex-col"
    >
      <div className="h-[148px] relative flex items-center justify-center overflow-hidden" style={{ background: bg }}>
        {/* Decorative bar chart */}
        <div className="absolute bottom-4 left-5 flex items-end gap-1">
          {bars.map((h, i) => (
            <div key={i} className="w-[5px] rounded-full" style={{ height: h * 0.44, background: fg, opacity: 0.15 + i * 0.04 }} />
          ))}
        </div>
        <div className="absolute top-4 right-5 w-2.5 h-2.5 rounded-full opacity-20" style={{ background: fg }} />
        <div className="absolute top-7 right-9 w-1.5 h-1.5 rounded-full opacity-12" style={{ background: fg }} />
        <div className="absolute w-28 h-28 rounded-full opacity-[0.07]" style={{ border: `12px solid ${fg}` }} />
        {/* Custom illustration in icon tile */}
        <div
          className="relative z-10 w-[64px] h-[64px] rounded-[18px] flex items-center justify-center shadow-lg"
          style={{ background: accent, boxShadow: `0 8px 24px ${fg}30` }}
        >
          <Illustration color={fg} />
        </div>
      </div>
      <div className="p-5 flex-1">
        <h3 className="text-[14.5px] font-bold text-[#0a0a08] mb-2">{title}</h3>
        <p className="text-[12.5px] text-black/52 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

function TeamCard({ name, role, desc, avatar, accent, fg, Icon }: TeamCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      className="rounded-[24px] overflow-hidden bg-white shadow-[0_4px_28px_rgba(0,0,0,0.07)] border border-black/[0.04] flex flex-col"
    >
      <div className="relative h-[160px] overflow-hidden" style={{ background: accent }}>
        <Image src={avatar} alt={name} fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 25vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute top-3 right-3 w-8 h-8 rounded-[10px] flex items-center justify-center" style={{ background: accent, boxShadow: `0 4px 12px ${fg}30` }}>
          <Icon size={15} color={fg} strokeWidth={1.9} />
        </div>
      </div>
      <div className="p-4 flex-1">
        <h3 className="text-[14px] font-bold text-[#0a0a08] mb-0.5">{name}</h3>
        <span className="text-[11.5px] font-semibold" style={{ color: fg }}>{role}</span>
        <p className="text-[11.5px] text-black/50 leading-relaxed mt-2">{desc}</p>
      </div>
    </motion.div>
  );
}

function MilestoneItem({ year, title, desc, isLast }: typeof milestones[0] & { isLast: boolean }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-8 h-8 rounded-full bg-white border-2 border-[#3d5a2e]/25 flex items-center justify-center shadow-sm flex-shrink-0">
          <div className="w-2 h-2 rounded-full bg-[#3d5a2e]/70" />
        </div>
        {!isLast && <div className="w-px flex-1 bg-[#3d5a2e]/12 my-1" style={{ minHeight: 24 }} />}
      </div>
      <div className="pb-5">
        <span className="inline-block text-[10px] font-extrabold text-[#3d5a2e]/80 px-2 py-0.5 rounded bg-[#3d5a2e]/08 mb-1.5">{year}</span>
        <h4 className="text-[13px] font-bold text-[#0a0a08] mb-0.5">{title}</h4>
        <p className="text-[12px] text-black/52 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   MAIN EXPORT
══════════════════════════════════════════════ */

export function AboutContent() {
  return (
    <>
      {/* ══ 1. HERO ══ */}
      <section className="relative min-h-[680px] lg:min-h-[740px] flex flex-col items-center justify-center pt-24 pb-14 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent" />
        <HeroBackground />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeUp} className="flex justify-center mb-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-black/[0.09] shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3d5a2e]/70 animate-pulse" />
                <span className="text-[11px] font-semibold text-black/55 uppercase tracking-wider">About Livetech</span>
              </div>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-[2.2rem] sm:text-[3rem] lg:text-[3.8rem] font-extrabold text-[#0a0a08] leading-[1.06] tracking-[-0.03em] mb-5"
            >
              Building the Future,
              <br />
              <span className="text-[#3d5a2e]">One Solution at a Time</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-[15px] sm:text-[16px] text-black/52 leading-relaxed mb-8 max-w-xl mx-auto">
              Livetech.in is a modern technology company delivering complete digital transformation
              solutions for startups, businesses, enterprises, and institutions worldwide.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 text-[13.5px] font-semibold text-white bg-[#0a0a08] rounded-full hover:bg-[#0a0a08]/85 transition-all duration-200 shadow-lg shadow-black/[0.12]">
                Work With Us <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/portfolio" className="inline-flex items-center gap-2 px-6 py-3 text-[13.5px] font-medium text-black/65 rounded-full border border-black/[0.14] bg-white/80 backdrop-blur-sm hover:border-black/[0.25] hover:text-black/80 transition-all duration-200 shadow-sm">
                View Our Work
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3"
          >
            {stats.map(({ value, suffix, label, desc }) => (
              <div key={label} className="p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-black/[0.07] hover:border-black/[0.12] transition-colors shadow-sm text-center">
                <div className="text-[1.75rem] font-extrabold text-[#0a0a08] leading-none mb-1">
                  <AnimatedCounter end={value} suffix={suffix} />
                </div>
                <div className="text-[12px] font-semibold text-black/70 mb-0.5">{label}</div>
                <div className="text-[10.5px] text-black/38">{desc}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ 2. MISSION / VISION / VALUES ══ */}
      <section className="relative py-10 lg:py-14" style={{ background: "#f5f5f7" }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Our Foundation" title="Mission, Vision & " highlight="Values" subtitle="The principles that guide every decision we make and every line of code we write." className="mb-8" />
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {values.map((v) => (
              <motion.div key={v.title} variants={fadeUp}>
                <ValueCard {...v} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ 3. STORY + TIMELINE ══ */}
      <section className="relative py-10 lg:py-14 bg-white">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportConfig} transition={{ duration: 0.6 }}>
              <SectionHeading label="Our Story" title="From a Hyderabad " highlight="Startup" subtitle="to a National Technology Leader" align="left" className="mb-6" />
              <div className="space-y-4 text-[13.5px] text-black/58 leading-relaxed">
                <p>Livetech.in was founded in 2016 with a simple but powerful belief: technology should be an enabler for every business, not just large enterprises with massive budgets.</p>
                <p>Starting with a team of 5 passionate engineers in Hyderabad, we built our first generation of websites and mobile apps for local businesses. The quality of our work and our commitment to client success quickly earned us a reputation.</p>
                <p>Today, 2+ years later, we have a team of 20+ specialists across technology, design, marketing, and consulting — serving 45+ clients across India, the UAE, USA, and the UK.</p>
              </div>
              <div className="mt-7 flex gap-3 flex-wrap">
                <Link href="/portfolio" className="inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-semibold text-white bg-[#0a0a08] rounded-full hover:bg-[#0a0a08]/85 transition-all">
                  Our Work <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-medium text-black/65 rounded-full border border-black/[0.14] hover:border-black/[0.25] transition-all">
                  Get in Touch
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportConfig} transition={{ duration: 0.6, delay: 0.15 }} className="pt-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/[0.04] border border-black/[0.09] mb-6 text-[10px] font-semibold text-black/55 uppercase tracking-wider">
                <div className="w-1 h-1 rounded-full bg-[#3d5a2e]/60" />
                Our Journey
              </div>
              {milestones.map((m, i) => (
                <MilestoneItem key={m.year} {...m} isLast={i === milestones.length - 1} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ 4. TEAM ══ */}
      <section className="relative py-10 lg:py-14" style={{ background: "#f5f5f7" }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Our Team" title="Meet the " highlight="Leaders" subtitle="The experts behind Livetech's award-winning work — a team that cares as much about your success as you do." className="mb-8" />
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {teamMembers.map((member) => (
              <motion.div key={member.name} variants={fadeUp} className="group">
                <TeamCard {...member} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ 5. CERTIFICATIONS ══ */}
      <section className="relative py-8 bg-white">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportConfig} className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {certifications.map((label) => (
              <div key={label} className="flex items-center gap-2 text-black/42">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3d5a2e]/50 flex-shrink-0" />
                <span className="text-[12.5px] font-medium">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
