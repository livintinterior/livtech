"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";

const clients = [
  { name: "Rajesh Kumar",   role: "CEO · MediCare",               avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80",  cat: "Healthcare" },
  { name: "Priya Sharma",   role: "CTO · EduTech Pro",            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80",  cat: "Education"  },
  { name: "Arun Patel",     role: "Founder · RetailMax",          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80",  cat: "Retail"     },
  { name: "Sunita Reddy",   role: "VP Tech · FinanceHub",         avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&q=80",  cat: "Finance"    },
  { name: "Mohammed Khan",  role: "Director · LogiTrack",         avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&q=80",  cat: "Logistics"  },
  { name: "Ananya Iyer",    role: "Head of Digital · StartupLab", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80",  cat: "Startup"    },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-3 h-3 fill-[#c4ba88] text-[#c4ba88]" />
      ))}
    </div>
  );
}

function ClientCard({ name, role, avatar, cat }: (typeof clients)[0]) {
  return (
    <div className="bg-white rounded-[18px] shadow-[0_6px_28px_rgba(0,0,0,0.09)] border border-black/[0.05] px-3.5 py-3 flex items-center gap-3 w-[210px] flex-shrink-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={avatar} alt={name} className="w-11 h-11 rounded-full object-cover flex-shrink-0 border-2 border-white shadow" />
      <div className="min-w-0">
        <p className="text-[12.5px] font-semibold text-[#0a0a08] truncate">{name}</p>
        <p className="text-[10px] text-black/45 truncate">{role}</p>
        <div className="flex items-center gap-1.5 mt-1">
          <Stars />
          <span className="text-[9px] text-black/35 font-medium">{cat}</span>
        </div>
      </div>
    </div>
  );
}

function FloatPill({
  style, delay, dur, children,
}: {
  style: React.CSSProperties;
  delay: number;
  dur: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="absolute hidden lg:block"
      style={style}
      initial={{ opacity: 0, scale: 0.85, y: 12 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ delay: delay + 0.7, duration: dur, repeat: Infinity, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export function Testimonials() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#f5f5f7" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent" />

      {/* ── Desktop: floating cards constellation ── */}
      <div className="relative hidden lg:flex lg:min-h-[640px] items-center justify-center py-16">
        <FloatPill style={{ left: "2%",  top: "14%" }} delay={0.10} dur={7.5}><ClientCard {...clients[0]} /></FloatPill>
        <FloatPill style={{ left: "18%", top: "46%" }} delay={0.22} dur={9.0}><ClientCard {...clients[1]} /></FloatPill>
        <FloatPill style={{ left: "3%",  top: "68%" }} delay={0.35} dur={7.0}><ClientCard {...clients[2]} /></FloatPill>
        <FloatPill style={{ right: "2%",  top: "18%" }} delay={0.15} dur={8.5}><ClientCard {...clients[3]} /></FloatPill>
        <FloatPill style={{ right: "18%", top: "48%" }} delay={0.28} dur={7.2}><ClientCard {...clients[4]} /></FloatPill>
        <FloatPill style={{ right: "3%",  top: "66%" }} delay={0.40} dur={9.5}><ClientCard {...clients[5]} /></FloatPill>

        {/* Center content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="relative z-10 text-center max-w-[420px] mx-auto px-6"
        >
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-black/[0.09] shadow-sm mb-6 text-[10px] font-semibold text-black/55 uppercase tracking-wider">
            <div className="w-1 h-1 rounded-full bg-[#3d5a2e]/60" />
            Testimonials
          </div>
          <div className="flex items-center justify-center gap-1.5 mb-4">
            <Stars />
            <span className="text-[13px] font-semibold text-[#0a0a08]">5.0</span>
            <span className="text-[12px] text-black/40">from 45+ clients</span>
          </div>
          <h2 className="text-[3.4rem] font-extrabold text-[#0a0a08] leading-[1.05] tracking-[-0.03em] mb-4">
            Loved by<br />
            <span className="text-[#3d5a2e]">Businesses</span><br />
            Worldwide
          </h2>
          <p className="text-[14px] text-black/48 leading-relaxed mb-8">
            Join 45+ companies that trust Livetech to build their most critical digital products.
          </p>
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0a0a08] text-white text-[13.5px] font-semibold hover:bg-[#0a0a08]/85 transition-all duration-200 shadow-md"
          >
            Read All Reviews <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      </div>

      {/* ── Mobile: stacked layout ── */}
      <div className="lg:hidden px-4 py-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-7"
        >
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-black/[0.09] shadow-sm mb-4 text-[10px] font-semibold text-black/55 uppercase tracking-wider">
            <div className="w-1 h-1 rounded-full bg-[#3d5a2e]/60" />
            Testimonials
          </div>
          <div className="flex items-center justify-center gap-1.5 mb-3">
            <Stars />
            <span className="text-[13px] font-semibold text-[#0a0a08]">5.0</span>
            <span className="text-[12px] text-black/40">from 45+ clients</span>
          </div>
          <h2 className="text-[2rem] sm:text-[2.4rem] font-extrabold text-[#0a0a08] leading-[1.08] tracking-[-0.025em] mb-3">
            Loved by <span className="text-[#3d5a2e]">Businesses</span> Worldwide
          </h2>
          <p className="text-[13px] text-black/48 leading-relaxed max-w-sm mx-auto">
            Join 45+ companies that trust Livetech to build their most critical digital products.
          </p>
        </motion.div>

        {/* Horizontal scroll strip of client cards */}
        <div className="overflow-x-auto no-scrollbar -mx-4 px-4 mb-7">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex gap-3 pb-1"
            style={{ width: "max-content" }}
          >
            {clients.map((c) => (
              <ClientCard key={c.name} {...c} />
            ))}
          </motion.div>
        </div>

        <div className="text-center">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0a0a08] text-white text-[13.5px] font-semibold hover:bg-[#0a0a08]/85 transition-all duration-200 shadow-md"
          >
            Read All Reviews <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent" />
    </section>
  );
}
