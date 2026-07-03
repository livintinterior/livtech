"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, Code2, Smartphone, Brain, Cloud,
  ShieldCheck, BarChart2, Palette, Database,
} from "lucide-react";

const DUR = 26; // seconds per full orbit rotation

const ORBIT_ICONS = [
  { Icon: Palette,     bg: "#FFE4E6", fg: "#BE185D", label: "UI / UX"    },
  { Icon: Code2,       bg: "#DBEAFE", fg: "#1D4ED8", label: "Web Dev"    },
  { Icon: Brain,       bg: "#EDE9FE", fg: "#7C3AED", label: "AI / ML"    },
  { Icon: Cloud,       bg: "#FED7AA", fg: "#C2410C", label: "Cloud"      },
  { Icon: Database,    bg: "#E0E7FF", fg: "#4338CA", label: "Custom ERP" },
  { Icon: BarChart2,   bg: "#FEF3C7", fg: "#B45309", label: "Analytics"  },
  { Icon: ShieldCheck, bg: "#DCFCE7", fg: "#15803D", label: "Security"   },
  { Icon: Smartphone,  bg: "#CFFAFE", fg: "#0E7490", label: "Mobile"     },
];

/* ── Reusable orbit display at any radius ── */
function OrbitDisplay({ radius }: { radius: number }) {
  const orbitD  = radius * 2;
  const pad     = 70;                              // space around orbit for overflowing icons
  const iconSz  = radius < 160 ? 42 : 52;         // smaller icons on mobile
  const hubSz   = radius < 160 ? 68 : 88;
  const ringInc = radius < 160 ? 22 : 28;
  const ringOff = radius < 160 ? 11 : 14;

  return (
    <div
      className="relative flex items-center justify-center select-none"
      style={{ width: orbitD + pad, height: orbitD + pad }}
    >
      {/* Orbit track circle */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        fill="none"
        viewBox={`0 0 ${orbitD + pad} ${orbitD + pad}`}
      >
        <circle
          cx={(orbitD + pad) / 2} cy={(orbitD + pad) / 2}
          r={radius}
          stroke="rgba(61,90,46,0.14)"
          strokeWidth="1"
          strokeDasharray="5 9"
        />
      </svg>

      {/* Center hub — absolutely centered, stays still */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        {[1, 2].map((ring) => (
          <motion.div
            key={ring}
            className="absolute rounded-[20px] border border-[#3d5a2e]/20"
            style={{
              width:  hubSz + ring * ringInc,
              height: hubSz + ring * ringInc,
              top:    -(ring * ringOff),
              left:   -(ring * ringOff),
            }}
            animate={{ opacity: [0.55, 0, 0.55], scale: [0.96, 1.09, 0.96] }}
            transition={{ duration: 2.4 + ring * 0.9, repeat: Infinity, delay: ring * 0.5, ease: "easeInOut" }}
          />
        ))}
        <div
          className="rounded-[20px] bg-white border border-black/[0.06] flex items-center justify-center"
          style={{ width: hubSz, height: hubSz, boxShadow: "0 10px 40px rgba(0,0,0,0.12)" }}
        >
          <Image
            src="/images/logo.png"
            alt="Livetech"
            width={Math.round(hubSz * 0.63)}
            height={Math.round(hubSz * 0.60)}
          />
        </div>
      </div>

      {/* Rotating ring of icons */}
      <motion.div
        style={{ width: orbitD, height: orbitD, position: "relative", flexShrink: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: DUR, repeat: Infinity, ease: "linear" }}
      >
        {ORBIT_ICONS.map((icon, i) => {
          const angle = (i / ORBIT_ICONS.length) * 2 * Math.PI - Math.PI / 2;
          const x = radius + Math.cos(angle) * radius - iconSz / 2;
          const y = radius + Math.sin(angle) * radius - iconSz / 2;
          const IconComp = icon.Icon;
          return (
            <motion.div
              key={i}
              className="absolute flex flex-col items-center gap-1"
              style={{ left: x, top: y }}
              animate={{ rotate: -360 }}
              transition={{ duration: DUR, repeat: Infinity, ease: "linear" }}
            >
              <div
                className="rounded-[14px] flex items-center justify-center"
                style={{
                  width: iconSz, height: iconSz,
                  background: icon.bg,
                  boxShadow: "0 5px 18px rgba(0,0,0,0.09)",
                }}
              >
                <IconComp size={Math.round(iconSz * 0.42)} color={icon.fg} strokeWidth={1.8} />
              </div>
              <span className="text-[8.5px] font-semibold text-black/50 tracking-wide bg-white/90 px-1.5 py-0.5 rounded-full border border-black/[0.07] whitespace-nowrap">
                {icon.label}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

/* ════════ Hero ════════ */
export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden"
      style={{ background: "#f5f5f7" }}
    >
      {/* Video background */}
      <video
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ opacity: 0.07 }}
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 70% at 30% 50%, rgba(134,163,114,0.09) 0%, transparent 65%)" }}
      />

      {/* ── LEFT / TOP: Orbit ── */}
      <motion.div
        className="flex-1 flex items-center justify-center pt-24 pb-6 lg:pt-0 lg:pb-0 lg:min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {/* Mobile orbit */}
        <div className="block lg:hidden">
          <OrbitDisplay radius={130} />
        </div>
        {/* Desktop orbit */}
        <div className="hidden lg:block lg:translate-y-8">
          <OrbitDisplay radius={210} />
        </div>
      </motion.div>

      {/* ── RIGHT / BOTTOM: Hero text ── */}
      <div className="flex-1 flex items-center justify-center lg:min-h-screen px-6 pb-16 lg:pb-0 lg:translate-y-10">
        <div className="max-w-[520px] w-full text-center lg:text-left">

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="text-[2.4rem] sm:text-[3rem] lg:text-[3.8rem] font-extrabold text-[#0a0a08] leading-[1.05] tracking-[-0.03em] mb-5"
          >
            Build Digital
            <br />
            Products That{" "}
            <span className="text-[#3d5a2e]">Scale</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.68, duration: 0.6 }}
            className="text-[15px] text-black/50 leading-relaxed mb-8 max-w-[420px] mx-auto lg:mx-0"
          >
            Web apps, mobile platforms, AI solutions, and enterprise software —
            engineered for performance, built to last.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.78, duration: 0.5 }}
            className="flex items-center gap-3 justify-center lg:justify-start flex-wrap mb-10"
          >
            <Link
              href="/request-quote"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#0a0a08] text-white text-[14px] font-semibold hover:bg-[#0a0a08]/85 transition-all duration-200 shadow-lg shadow-black/[0.12]"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-black/[0.14] text-black/60 text-[14px] font-medium bg-white hover:border-black/[0.25] hover:text-black/80 transition-all duration-200 shadow-sm"
            >
              View Our Work
            </Link>
          </motion.div>

          {/* Stat chips */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="flex items-center gap-2.5 justify-center lg:justify-start flex-wrap"
          >
            {[
              { value: "50+",  label: "Projects"  },
              { value: "45+",  label: "Clients"   },
              { value: "2+",   label: "Years"     },
              { value: "99%",  label: "Retention" },
            ].map(({ value, label }) => (
              <div key={label} className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.07] shadow-sm">
                <span className="text-[13px] font-bold text-[#0a0a08]">{value}</span>
                <span className="text-[11px] text-black/45">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
