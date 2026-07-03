"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, User, Tag, ArrowRight } from "lucide-react";

type BlogPost = {
  title: string; category: string; author: string; date: string;
  readTime: string; image: string; content: string; tags: string[];
};

const PARTICLES = [
  { left: "8%",  top: "18%", delay: 0.0, dur: 4.5 },
  { left: "24%", top: "8%",  delay: 0.5, dur: 5.2 },
  { left: "68%", top: "12%", delay: 1.1, dur: 3.9 },
  { left: "82%", top: "7%",  delay: 0.3, dur: 4.8 },
  { left: "91%", top: "22%", delay: 0.8, dur: 5.1 },
  { left: "5%",  top: "48%", delay: 1.4, dur: 4.2 },
  { left: "88%", top: "55%", delay: 0.4, dur: 3.7 },
];

function HeroBackground() {
  const rings = [
    { r: 180, dur: 30, dir:  1, stroke: "rgba(61,90,46,0.11)", dash: "10 8" },
    { r: 300, dur: 46, dir: -1, stroke: "rgba(61,90,46,0.07)", dash: "5 13" },
    { r: 420, dur: 62, dir:  1, stroke: "rgba(61,90,46,0.04)", dash: "4 10" },
  ];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute inset-0 w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="bp-dot" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="rgba(61,90,46,0.28)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bp-dot)" />
      </svg>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 55% 55% at 50% 50%, rgba(134,163,114,0.09) 0%, transparent 70%)" }} />
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
              <circle cx={rg.r} cy={rg.r} r={rg.r - 1} stroke={rg.stroke} strokeWidth="1.1" strokeDasharray={rg.dash} />
              <circle cx={rg.r} cy="3" r="3" fill="rgba(61,90,46,0.4)" />
            </svg>
          </motion.div>
        ))}
      </div>
      {PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#3d5a2e]/25"
          style={{ left: p.left, top: p.top }}
          animate={{ y: [0, -16, 0], opacity: [0, 0.6, 0] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export function BlogPostContent({ post, slug }: { post: BlogPost; slug: string }) {
  const paragraphs = post.content.split("\n\n");

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative pt-24 pb-10 overflow-hidden" style={{ background: "#f5f5f7" }}>
        <HeroBackground />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[13px] text-black/50 hover:text-[#3d5a2e] transition-colors mb-8 group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
              Back to Blog
            </Link>
          </motion.div>

          {/* Category badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.45 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-black/[0.09] mb-5"
          >
            <Tag size={11} className="text-[#3d5a2e]/70" />
            <span className="text-[10.5px] font-semibold text-black/58 uppercase tracking-wider">{post.category}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.65, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="text-3xl sm:text-4xl font-extrabold text-[#0a0a08] mb-6 leading-tight tracking-[-0.025em]"
          >
            {post.title}
          </motion.h1>

          {/* Meta row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.45 }}
            className="flex flex-wrap items-center gap-4 text-[12px] text-black/45"
          >
            <span className="flex items-center gap-1.5">
              <User size={13} strokeWidth={1.8} /> {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={13} strokeWidth={1.8} /> {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} strokeWidth={1.8} /> {post.readTime}
            </span>
          </motion.div>
        </div>
      </section>

      {/* ─── Article body ─── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 0.65 }}
          className="relative w-full h-[340px] sm:h-[420px] rounded-2xl overflow-hidden mb-10 border border-black/[0.08]"
        >
          <Image
            src={post.image} alt={post.title} fill
            className="object-cover" sizes="(max-width: 768px) 100vw, 768px"
          />
          {/* Gradient overlay top */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#3d5a2e]" />
        </motion.div>

        {/* Content */}
        <motion.article
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42, duration: 0.6 }}
          className="max-w-none"
        >
          {paragraphs.map((para, i) => {
            if (para.startsWith("## ")) {
              return (
                <h2 key={i} className="text-[18px] font-bold text-[#0a0a08] mt-10 mb-4 tracking-tight">
                  {para.replace("## ", "")}
                </h2>
              );
            }
            return (
              <p key={i} className="text-[14px] text-black/62 leading-[1.8] mb-5">
                {para}
              </p>
            );
          })}
        </motion.article>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-black/[0.08]"
        >
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-white border border-black/[0.09] text-[11px] font-medium text-black/55 hover:border-[#3d5a2e]/30 hover:text-[#3d5a2e] transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Back to blog CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.62, duration: 0.45 }}
          className="mt-10 flex items-center justify-between"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/[0.12] text-[13px] font-medium text-black/60 bg-white hover:border-[#3d5a2e]/35 hover:text-[#3d5a2e] transition-all duration-200"
          >
            <ArrowLeft size={13} /> All Articles
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3d5a2e] text-white text-[13px] font-semibold hover:bg-[#3d5a2e]/90 transition-all duration-200"
          >
            Discuss a Project <ArrowRight size={13} />
          </Link>
        </motion.div>
      </div>
    </>
  );
}
