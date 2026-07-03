"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import {
  Mail, Phone, MapPin, MessageSquare,
  Calendar, Clock, ArrowRight, ExternalLink,
} from "lucide-react";
import { ContactFormSection } from "../ContactFormSection";
import { siteConfig } from "@/lib/constants/site";

/* ── Pre-defined particle positions (avoids hydration mismatch) ── */
const PARTICLES = [
  { left: "11%", top: "14%", delay: 0.0, dur: 4.4 },
  { left: "27%", top: "7%",  delay: 0.6, dur: 5.1 },
  { left: "54%", top: "11%", delay: 1.2, dur: 3.9 },
  { left: "72%", top: "17%", delay: 0.3, dur: 4.8 },
  { left: "87%", top: "9%",  delay: 0.9, dur: 5.5 },
  { left: "7%",  top: "54%", delay: 1.5, dur: 4.1 },
  { left: "84%", top: "59%", delay: 0.4, dur: 3.7 },
  { left: "19%", top: "74%", delay: 1.8, dur: 5.0 },
  { left: "64%", top: "69%", delay: 0.7, dur: 4.6 },
  { left: "44%", top: "84%", delay: 2.1, dur: 3.8 },
];

/* ── Animated ring hero background (same pattern as About / Services) ── */
function HeroBackground() {
  const rings = [
    { r: 200, dur: 30, dir:  1, stroke: "rgba(61,90,46,0.13)", dash: "12 8" },
    { r: 320, dur: 44, dir: -1, stroke: "rgba(61,90,46,0.08)", dash: "6 14" },
    { r: 450, dur: 58, dir:  1, stroke: "rgba(61,90,46,0.05)", dash: "4 10" },
  ];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Dot grid */}
      <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="cp-dot" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="rgba(61,90,46,0.28)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cp-dot)" />
      </svg>
      {/* Radial glow */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 65% 60% at 50% 50%, rgba(134,163,114,0.11) 0%, transparent 70%)" }} />
      {/* Rotating rings */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {rings.map((rg, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ width: rg.r * 2, height: rg.r * 2, left: -rg.r, top: -rg.r }}
            animate={{ rotate: rg.dir > 0 ? 360 : -360 }}
            transition={{ duration: rg.dur, repeat: Infinity, ease: "linear" }}
          >
            <svg width="100%" height="100%" viewBox={`0 0 ${rg.r * 2} ${rg.r * 2}`} fill="none">
              <circle cx={rg.r} cy={rg.r} r={rg.r - 1} stroke={rg.stroke} strokeWidth="1.2" strokeDasharray={rg.dash} />
              <circle cx={rg.r} cy="3" r="3.5" fill="rgba(61,90,46,0.45)" />
            </svg>
          </motion.div>
        ))}
      </div>
      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#3d5a2e]/30"
          style={{ left: p.left, top: p.top }}
          animate={{ y: [0, -18, 0], opacity: [0, 0.7, 0] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

/* ── Unique element: animated "signal / online" card ── */
function SignalCard() {
  return (
    <div className="relative rounded-2xl bg-white border border-black/[0.07] shadow-sm overflow-hidden p-4">
      {/* Subtle inner dot grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(61,90,46,0.3) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />
      <div className="relative flex flex-col items-center text-center">
        {/* Live status badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dcfce7] border border-[#3d5a2e]/20 mb-3">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-[#16a34a]"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.4, repeat: Infinity }}
          />
          <span className="text-[10.5px] font-semibold text-[#166534] tracking-wide">We are Online Now</span>
        </div>

        {/* Radar rings + center icon */}
        <div className="relative w-36 h-36 flex items-center justify-center mb-3">
          {[1, 2, 3].map((ring) => (
            <motion.div
              key={ring}
              className="absolute rounded-full border border-[#3d5a2e]/18"
              style={{ width: ring * 36 + 12, height: ring * 36 + 12 }}
              animate={{ scale: [1, 1.14, 1], opacity: [0.55, 0.08, 0.55] }}
              transition={{ duration: 2.2 + ring * 0.55, repeat: Infinity, delay: ring * 0.38, ease: "easeInOut" }}
            />
          ))}
          {/* Center Livetech hub */}
          <div className="relative z-10 w-14 h-14 rounded-2xl bg-white shadow-lg shadow-black/[0.12] border border-black/[0.07] flex items-center justify-center">
            <Image src="/images/logo.png" alt="Livetech" width={36} height={34} />
          </div>
        </div>

        <p className="text-[13.5px] font-semibold text-[#0a0a08] mb-1">Ready to connect with you</p>
        <p className="text-[11.5px] text-black/50 leading-relaxed mb-3">
          Average first response under{" "}
          <span className="font-semibold text-black/70">2 hours</span>.
          <br />
          Emergency support available 24/7.
        </p>

        {/* Quick channel chips */}
        <div className="flex gap-2 flex-wrap justify-center">
          {[
            { label: "Email",    href: `mailto:${siteConfig.email.hello}`,                                bg: "#DBEAFE", fg: "#1D4ED8", Icon: Mail          },
            { label: "Call",     href: `tel:${siteConfig.phone}`,                                        bg: "#DCFCE7", fg: "#15803D", Icon: Phone         },
            { label: "WhatsApp", href: `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`,   bg: "#D1FAE5", fg: "#059669", Icon: MessageSquare },
          ].map(({ label, href, bg, fg, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-black/[0.07] hover:border-black/[0.15] hover:scale-105 transition-all duration-200"
              style={{ background: bg }}
            >
              <Icon size={11} color={fg} strokeWidth={2} />
              <span className="text-[10.5px] font-semibold" style={{ color: fg }}>{label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Contact method cards data ── */
const CONTACT_METHODS = [
  {
    Icon: Mail,           label: "Email Us",  value: siteConfig.email.hello,
    href: `mailto:${siteConfig.email.hello}`,
    desc: "We respond within 24 hours",
    bg: "#DBEAFE", fg: "#1D4ED8",
  },
  {
    Icon: Phone,          label: "Call Us",   value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
    desc: "Mon to Sat, 9 AM to 7 PM IST",
    bg: "#DCFCE7", fg: "#15803D",
  },
  {
    Icon: MessageSquare,  label: "WhatsApp",  value: "Chat with us",
    href: `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`,
    desc: "Quick response guaranteed",
    bg: "#D1FAE5", fg: "#059669",
  },
  {
    Icon: MapPin,         label: "Visit Us",  value: siteConfig.address.line1,
    href: "https://maps.google.com",
    desc: siteConfig.address.line2,
    bg: "#FEF3C7", fg: "#B45309",
  },
];

/* ── Social SVG icons ── */
function IcoLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
    </svg>
  );
}
function IcoInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
      <rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}
function IcoTwitterX() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}
function IcoFacebook() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}
function IcoGitHub() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

const SOCIALS = [
  { label: "LinkedIn",  Icon: IcoLinkedIn,  href: siteConfig.social.linkedin,  color: "#0077B5" },
  { label: "Instagram", Icon: IcoInstagram, href: siteConfig.social.instagram, color: "#E4405F" },
  { label: "Twitter",   Icon: IcoTwitterX,  href: siteConfig.social.twitter,   color: "#1DA1F2" },
  { label: "Facebook",  Icon: IcoFacebook,  href: siteConfig.social.facebook,  color: "#1877F2" },
  { label: "GitHub",    Icon: IcoGitHub,    href: siteConfig.social.github,    color: "#333333" },
];

/* ── Shared motion variants ── */
const fade = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};
const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.08 } },
};
const vp = { once: true, margin: "-80px" as const };

/* ════════ Main export ════════ */
export function ContactContent() {
  const methodsRef = useRef<HTMLDivElement>(null);
  const formRef    = useRef<HTMLDivElement>(null);
  const methodsIn  = useInView(methodsRef, vp);
  const formIn     = useInView(formRef,    vp);

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative pt-20 pb-8 overflow-hidden" style={{ background: "#f5f5f7" }}>
        <HeroBackground />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] shadow-sm mb-4 text-[11px] font-semibold text-black/52 uppercase tracking-wider"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#3d5a2e]" />
            Get In Touch
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="text-4xl sm:text-5xl lg:text-[3.6rem] font-extrabold text-[#0a0a08] leading-[1.06] tracking-[-0.03em] mb-3"
          >
            {"Let's Build Something"}
            <br />
            <span className="text-[#3d5a2e]">Extraordinary</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.6 }}
            className="text-[15px] text-black/55 max-w-[480px] mx-auto leading-relaxed mb-6"
          >
            Have a project in mind? Drop us a message and our team will get back within 24 hours
            {" "}&mdash; no commitment required.
          </motion.p>

          {/* Quick-stat chips */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="flex items-center justify-center gap-3 flex-wrap"
          >
            {[
              { val: "< 2 hrs", lbl: "Avg. Response"      },
              { val: "50+",     lbl: "Projects Delivered"  },
              { val: "24 / 7",  lbl: "Emergency Support"   },
              { val: "Free",    lbl: "First Consultation"  },
            ].map(({ val, lbl }) => (
              <div key={lbl} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/[0.07] shadow-sm">
                <span className="text-[13px] font-bold text-[#0a0a08]">{val}</span>
                <span className="text-[11px] text-black/45">{lbl}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Contact method cards ─── */}
      <section className="py-6" ref={methodsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            variants={stagger} initial="hidden" animate={methodsIn ? "show" : "hidden"}
          >
            {CONTACT_METHODS.map(({ Icon, label, value, href, desc, bg, fg }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                variants={fade}
                whileHover={{ y: -5, boxShadow: "0 18px 44px rgba(0,0,0,0.09)" }}
                className="group p-5 rounded-2xl bg-white border border-black/[0.07] transition-colors duration-300 block"
              >
                {/* Colored icon tile */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: bg }}
                >
                  <Icon size={18} color={fg} strokeWidth={1.8} />
                </div>
                <p className="text-[10px] text-black/42 mb-0.5 uppercase tracking-widest font-semibold">{label}</p>
                <p className="text-[13px] font-semibold text-[#0a0a08] mb-1 leading-snug">{value}</p>
                <p className="text-[11px] text-black/45 leading-snug">{desc}</p>
                {/* Hover arrow */}
                <div
                  className="mt-3 flex items-center gap-1 text-[11px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ color: fg }}
                >
                  Connect <ArrowRight size={10} />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Form + Sidebar ─── */}
      <section className="pb-14" ref={formRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid lg:grid-cols-5 gap-6"
            variants={stagger} initial="hidden" animate={formIn ? "show" : "hidden"}
          >
            {/* Contact form + Also Reach Us At */}
            <motion.div variants={fade} className="lg:col-span-3 space-y-4">
              <ContactFormSection />

              {/* Also reach us + social — below the form */}
              <div className="p-5 rounded-2xl bg-white border border-black/[0.07] shadow-sm">
                <h3 className="text-[13px] font-semibold text-[#0a0a08] mb-3">Also Reach Us At</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 mb-4">
                  {[
                    { lbl: "Sales",   email: siteConfig.email.sales   },
                    { lbl: "Support", email: siteConfig.email.support },
                  ].map(({ lbl, email }) => (
                    <div key={lbl} className="flex items-center gap-2">
                      <span className="text-[12px] text-black/50">{lbl}:</span>
                      <a
                        href={`mailto:${email}`}
                        className="text-[12px] text-[#3d5a2e]/75 hover:text-[#3d5a2e] transition-colors font-medium"
                      >
                        {email}
                      </a>
                    </div>
                  ))}
                </div>

                {/* Social platforms */}
                <div className="pt-3.5 border-t border-black/[0.06] flex items-center gap-4">
                  <p className="text-[10px] text-black/38 uppercase tracking-widest font-semibold flex-shrink-0">Follow Us</p>
                  <div className="flex gap-2 flex-wrap">
                    {SOCIALS.map(({ label, Icon, href, color }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={label}
                        className="group flex items-center justify-center w-8 h-8 rounded-lg bg-black/[0.03] border border-black/[0.07] hover:border-black/[0.20] hover:bg-black/[0.06] transition-all duration-200"
                        style={{ color }}
                      >
                        <Icon />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div variants={fade} className="lg:col-span-2 space-y-4">

              {/* Unique signal/online card */}
              <SignalCard />

              {/* Working hours */}
              <div className="p-5 rounded-2xl bg-white border border-black/[0.07] shadow-sm">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-7 h-7 rounded-lg bg-[#FEF3C7] flex items-center justify-center">
                    <Clock size={14} color="#B45309" strokeWidth={2} />
                  </div>
                  <h3 className="text-[13px] font-semibold text-[#0a0a08]">Working Hours</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { day: "Monday to Friday", time: "9 AM to 7 PM IST", active: true  },
                    { day: "Saturday",          time: "9 AM to 5 PM IST", active: true  },
                    { day: "Sunday",             time: "Closed",           active: false },
                  ].map(({ day, time, active }) => (
                    <div key={day} className="flex items-center justify-between">
                      <span className="text-[12px] text-black/58">{day}</span>
                      <span className={`text-[12px] ${active ? "text-[#0a0a08] font-medium" : "text-black/38"}`}>{time}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3.5 border-t border-black/[0.06] flex items-center gap-2">
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-[#16a34a] flex-shrink-0"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.6, repeat: Infinity }}
                  />
                  <span className="text-[11px] text-black/50">Emergency support available 24/7</span>
                </div>
              </div>

              {/* Quick actions */}
              <div className="p-5 rounded-2xl bg-white border border-black/[0.07] shadow-sm">
                <h3 className="text-[13px] font-semibold text-[#0a0a08] mb-3">Quick Actions</h3>
                <div className="space-y-1">
                  {[
                    { href: "/book-consultation", Icon: Calendar,     title: "Book a Consultation", sub: "30-min free discovery call" },
                    { href: "/request-quote",     Icon: MessageSquare, title: "Request a Quote",    sub: "Get pricing for your project" },
                  ].map(({ href, Icon, title, sub }) => (
                    <Link
                      key={href}
                      href={href}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#3d5a2e]/[0.04] transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-black/[0.04] border border-black/[0.07] flex items-center justify-center group-hover:bg-[#3d5a2e]/10 group-hover:border-[#3d5a2e]/20 transition-colors flex-shrink-0">
                        <Icon size={14} className="text-[#3d5a2e]/70" strokeWidth={1.8} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[12.5px] font-medium text-black/80 group-hover:text-[#0a0a08] transition-colors">{title}</p>
                        <p className="text-[11px] text-black/45">{sub}</p>
                      </div>
                      <ArrowRight size={12} className="text-black/22 group-hover:text-[#3d5a2e]/55 transition-colors flex-shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>

            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
