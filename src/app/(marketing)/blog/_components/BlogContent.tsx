"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";

/* ── Types ── */
type Post = {
  slug: string; title: string; excerpt: string; category: string;
  readTime: number; publishedAt: string; thumbnail: string; featured: boolean;
};

/* ── All 16 blog posts ── */
const POSTS: Post[] = [
  { slug: "top-web-development-trends-2025",  title: "Top Web Development Trends Shaping 2025",                           excerpt: "From AI-powered interfaces to edge computing and WebAssembly, discover the technologies redefining how we build for the web in 2025.",                               category: "Web Development",   readTime:  8, publishedAt: "Jan 15, 2025",  thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",    featured: true  },
  { slug: "flutter-vs-react-native-2025",      title: "Flutter vs React Native: Which to Choose in 2025?",                 excerpt: "A comprehensive comparison of Flutter and React Native covering performance, ecosystem, developer experience, and which framework suits your project best.",          category: "Mobile Dev",        readTime: 12, publishedAt: "Jan 8, 2025",   thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",  featured: true  },
  { slug: "ai-chatbots-business-automation",   title: "How AI Chatbots Are Transforming Business Automation in 2025",      excerpt: "Real-world examples of how businesses use GPT-powered chatbots to reduce costs, improve customer experience, and automate repetitive workflows.",                  category: "AI Solutions",      readTime:  6, publishedAt: "Dec 20, 2024", thumbnail: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",  featured: true  },
  { slug: "aws-vs-azure-vs-gcp-2025",          title: "AWS vs Azure vs Google Cloud: Which Platform Is Right for You?",    excerpt: "Breaking down the strengths, weaknesses, pricing, and ideal use cases for the three major cloud platforms to help you make the right choice for your business.",   category: "Cloud",             readTime: 15, publishedAt: "Dec 10, 2024", thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",  featured: false },
  { slug: "seo-technical-guide-2025",          title: "The Complete Technical SEO Guide for 2025",                          excerpt: "Everything you need to know about Core Web Vitals, schema markup, structured data, and technical SEO best practices to rank higher in 2025.",                category: "SEO",               readTime: 20, publishedAt: "Nov 28, 2024", thumbnail: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&q=80",    featured: false },
  { slug: "cybersecurity-startup-guide",       title: "Cybersecurity Essentials Every Startup Must Know in 2025",           excerpt: "A practical cybersecurity checklist for startups covering secure coding practices, incident response planning, and employee security training.",                 category: "Cybersecurity",     readTime: 10, publishedAt: "Nov 15, 2024", thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",    featured: false },
  { slug: "nextjs-15-features-guide",          title: "Next.js 15: Everything New You Need to Know",                        excerpt: "A deep dive into Next.js 15 biggest updates including Turbopack by default, improved caching, Server Actions improvements, and what it means for your projects.",  category: "Web Development",   readTime:  9, publishedAt: "Nov 5, 2024",  thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&q=80",  featured: false },
  { slug: "ui-ux-design-trends-2025",          title: "UI/UX Design Trends That Will Dominate 2025",                        excerpt: "From glassmorphism 2.0 and bento grid layouts to AI-assisted design and micro-interactions, the visual language defining modern digital products.",            category: "UI/UX Design",      readTime:  7, publishedAt: "Oct 22, 2024", thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",    featured: false },
  { slug: "digital-marketing-roi-guide",       title: "How to Maximise ROI from Digital Marketing in 2025",                 excerpt: "Stop wasting ad spend. This guide breaks down attribution models, budget allocation frameworks, and the channels delivering the highest returns right now.",     category: "Digital Marketing", readTime: 11, publishedAt: "Oct 10, 2024", thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",  featured: false },
  { slug: "postgresql-vs-mongodb-2025",        title: "PostgreSQL vs MongoDB: Choosing the Right Database in 2025",         excerpt: "SQL vs NoSQL is a false choice. Both have clear strengths. We break down when to use each based on data model, scale requirements, and team expertise.",         category: "Backend",           readTime: 13, publishedAt: "Sep 25, 2024", thumbnail: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&q=80",    featured: false },
  { slug: "devops-cicd-best-practices",        title: "DevOps and CI/CD Best Practices for Modern Engineering Teams",       excerpt: "From GitHub Actions to Docker and Kubernetes, the pipelines, patterns, and mindsets that help engineering teams ship faster with confidence.",                     category: "Cloud",             readTime: 14, publishedAt: "Sep 12, 2024", thumbnail: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&q=80",  featured: false },
  { slug: "branding-guide-for-startups",       title: "The Startup Branding Playbook: Build a Brand That Sticks",           excerpt: "Why most startup brands fail and how to build one that earns instant recognition. Covers logo strategy, color psychology, typography, and brand voice.",           category: "Branding",          readTime:  8, publishedAt: "Aug 30, 2024", thumbnail: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80",  featured: false },
  { slug: "erp-for-small-businesses",          title: "Does Your Small Business Actually Need an ERP System?",              excerpt: "ERP is not just for enterprises anymore. We break down what ERPs do, when your business is ready for one, and how to choose the right platform.",               category: "Custom Software",   readTime: 10, publishedAt: "Aug 15, 2024", thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",  featured: false },
  { slug: "zero-trust-security-explained",     title: "Zero Trust Security: What It Is and Why Every Business Needs It",    excerpt: "The perimeter is dead. Zero Trust assumes breach and verifies every request. Here is what it means in practice and how to start implementing it today.",        category: "Cybersecurity",     readTime:  9, publishedAt: "Jul 28, 2024", thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80",    featured: false },
  { slug: "react-native-performance-tips",     title: "10 React Native Performance Optimisations You Should Know",          excerpt: "Slow React Native apps lose users. From Hermes engine to FlatList optimisation, memo strategies, and native modules, boost your app performance today.",         category: "Mobile Dev",        readTime: 11, publishedAt: "Jul 10, 2024", thumbnail: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=600&q=80",  featured: false },
  { slug: "building-accessible-websites",      title: "Web Accessibility in 2025: Why It Matters and How to Get It Right",  excerpt: "Over 1 billion people have a disability. Building accessible websites is better UX for everyone. A practical WCAG 2.2 guide for developers.",                  category: "Web Development",   readTime: 12, publishedAt: "Jun 20, 2024", thumbnail: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&q=80",  featured: false },
];

/* ── Category color map ── */
const CAT: Record<string, { bg: string; fg: string }> = {
  "Web Development":   { bg: "#DBEAFE", fg: "#1D4ED8" },
  "Mobile Dev":        { bg: "#CFFAFE", fg: "#0E7490" },
  "AI Solutions":      { bg: "#EDE9FE", fg: "#7C3AED" },
  "Cloud":             { bg: "#FED7AA", fg: "#C2410C" },
  "SEO":               { bg: "#DCFCE7", fg: "#15803D" },
  "Cybersecurity":     { bg: "#FFE4E6", fg: "#BE185D" },
  "UI/UX Design":      { bg: "#FEF9C3", fg: "#92400E" },
  "Digital Marketing": { bg: "#ECFDF5", fg: "#065F46" },
  "Backend":           { bg: "#F3F4F6", fg: "#374151" },
  "Branding":          { bg: "#FDF2F8", fg: "#9D174D" },
  "Custom Software":   { bg: "#F0F9FF", fg: "#0C4A6E" },
};

function catColor(category: string) {
  return CAT[category] ?? { bg: "#F3F4F6", fg: "#374151" };
}

/* ── Particle positions (fixed to avoid hydration mismatch) ── */
const PARTICLES = [
  { left: "10%", top: "12%", delay: 0.0, dur: 4.5 },
  { left: "26%", top: "7%",  delay: 0.5, dur: 5.2 },
  { left: "52%", top: "10%", delay: 1.1, dur: 3.9 },
  { left: "71%", top: "16%", delay: 0.3, dur: 4.8 },
  { left: "86%", top: "8%",  delay: 0.8, dur: 5.4 },
  { left: "6%",  top: "52%", delay: 1.4, dur: 4.2 },
  { left: "83%", top: "58%", delay: 0.4, dur: 3.7 },
  { left: "18%", top: "73%", delay: 1.7, dur: 5.0 },
  { left: "63%", top: "68%", delay: 0.6, dur: 4.6 },
  { left: "43%", top: "83%", delay: 2.0, dur: 3.8 },
];

/* ── Ring background ── */
function HeroBackground() {
  const rings = [
    { r: 200, dur: 30, dir:  1, stroke: "rgba(61,90,46,0.12)", dash: "12 8" },
    { r: 320, dur: 45, dir: -1, stroke: "rgba(61,90,46,0.07)", dash: "6 14" },
    { r: 450, dur: 60, dir:  1, stroke: "rgba(61,90,46,0.04)", dash: "4 10" },
  ];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="bl-dot" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="rgba(61,90,46,0.28)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bl-dot)" />
      </svg>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 65% 60% at 50% 50%, rgba(134,163,114,0.10) 0%, transparent 70%)" }} />
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

/* ── Large horizontal featured card (first post) ── */
function FeaturedHeroCard({ post }: { post: Post }) {
  const { bg, fg } = catColor(post.category);
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 24px 60px rgba(0,0,0,0.10)" }}
      transition={{ duration: 0.25 }}
      className="group rounded-2xl bg-white border border-black/[0.07] overflow-hidden"
    >
      <Link href={`/blog/${post.slug}`} className="grid md:grid-cols-2 gap-0">
        {/* Image */}
        <div className="relative h-60 md:h-80 overflow-hidden">
          <Image
            src={post.thumbnail} alt={post.title} fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
          {/* Accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1" style={{ background: fg }} />
        </div>
        {/* Content */}
        <div className="p-7 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-4">
            <span
              className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider"
              style={{ background: bg, color: fg }}
            >
              {post.category}
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#3d5a2e]/10 text-[10px] font-semibold text-[#3d5a2e] uppercase tracking-wider">
              Featured
            </span>
          </div>
          <h2 className="text-[18px] sm:text-[22px] font-bold text-[#0a0a08] leading-tight mb-3 tracking-tight group-hover:text-[#3d5a2e] transition-colors duration-300">
            {post.title}
          </h2>
          <p className="text-[13px] text-black/55 leading-relaxed mb-5 line-clamp-3">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-[11px] text-black/42">
              <span className="flex items-center gap-1">
                <Clock size={11} strokeWidth={2} /> {post.readTime} min read
              </span>
              <span>{post.publishedAt}</span>
            </div>
            <div
              className="flex items-center gap-1 text-[12px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{ color: fg }}
            >
              Read <ArrowRight size={13} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ── Secondary featured card (posts 2 & 3) ── */
function FeaturedCard({ post }: { post: Post }) {
  const { bg, fg } = catColor(post.category);
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 20px 48px rgba(0,0,0,0.09)" }}
      transition={{ duration: 0.25 }}
      className="group rounded-2xl bg-white border border-black/[0.07] overflow-hidden flex flex-col"
    >
      <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
        <div className="relative h-44 overflow-hidden flex-shrink-0">
          <Image
            src={post.thumbnail} alt={post.title} fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-1" style={{ background: fg }} />
          <div className="absolute top-3 left-3 flex gap-1.5">
            <span className="px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-sm text-[9.5px] font-semibold text-white/90">
              {post.category}
            </span>
            <span className="px-2 py-0.5 rounded-full bg-[#3d5a2e]/80 backdrop-blur-sm text-[9.5px] font-semibold text-white">
              Featured
            </span>
          </div>
        </div>
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-[14px] font-bold text-[#0a0a08] leading-snug mb-2 group-hover:text-[#3d5a2e] transition-colors duration-300 line-clamp-2">
            {post.title}
          </h3>
          <p className="text-[12px] text-black/52 leading-relaxed line-clamp-2 flex-1">{post.excerpt}</p>
          <div className="flex items-center justify-between mt-4 pt-3.5 border-t border-black/[0.06]">
            <span className="flex items-center gap-1 text-[11px] text-black/42">
              <Clock size={10} strokeWidth={2} /> {post.readTime} min
            </span>
            <span className="text-[11px] text-black/40">{post.publishedAt}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ── Regular article card (filterable grid) ── */
function ArticleCard({ post }: { post: Post }) {
  const { bg, fg } = catColor(post.category);
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.08)" }}
      transition={{ duration: 0.22 }}
      className="group rounded-2xl bg-white border border-black/[0.07] overflow-hidden flex flex-col"
    >
      <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
        <div className="relative h-40 overflow-hidden flex-shrink-0">
          <Image
            src={post.thumbnail} alt={post.title} fill
            className="object-cover transition-transform duration-600 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Accent top bar */}
          <div className="absolute top-0 left-0 right-0 h-0.5 transition-all duration-300 group-hover:h-1" style={{ background: fg }} />
        </div>
        <div className="p-4 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-2.5">
            <span
              className="px-2 py-0.5 rounded-full text-[9.5px] font-semibold uppercase tracking-wide"
              style={{ background: bg, color: fg }}
            >
              {post.category}
            </span>
            <span className="text-[10.5px] text-black/38">{post.publishedAt}</span>
          </div>
          <h3 className="text-[13px] font-bold text-[#0a0a08] leading-snug mb-2 line-clamp-2 group-hover:text-[#3d5a2e] transition-colors duration-250">
            {post.title}
          </h3>
          <p className="text-[11.5px] text-black/50 leading-relaxed line-clamp-2 flex-1">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between mt-3.5 pt-3 border-t border-black/[0.06]">
            <span className="flex items-center gap-1 text-[10.5px] text-black/40">
              <Clock size={10} strokeWidth={2} /> {post.readTime} min read
            </span>
            <span
              className="flex items-center gap-0.5 text-[10.5px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{ color: fg }}
            >
              Read <ArrowRight size={10} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ── Motion variants ── */
const fade = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const vp = { once: true, margin: "-80px" as const };

/* ════════ Main export ════════ */
export function BlogContent() {
  const featured = POSTS.filter((p) => p.featured);
  const rest     = POSTS.filter((p) => !p.featured);

  const allCategories = ["All", ...Array.from(new Set(rest.map((p) => p.category))).sort()];
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? rest : rest.filter((p) => p.category === activeCategory);

  const featRef  = useRef<HTMLDivElement>(null);
  const listRef  = useRef<HTMLDivElement>(null);
  const featIn   = useInView(featRef,  vp);
  const listIn   = useInView(listRef,  vp);

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ background: "#f5f5f7" }}>
        <HeroBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] shadow-sm mb-6 text-[11px] font-semibold text-black/52 uppercase tracking-wider"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#3d5a2e]" />
            Blog &amp; Insights
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.10, duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="text-4xl sm:text-5xl lg:text-[3.6rem] font-extrabold text-[#0a0a08] leading-[1.06] tracking-[-0.03em] mb-5"
          >
            Technology Insights &amp;
            <br />
            <span className="text-[#3d5a2e]">Industry Trends</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.6 }}
            className="text-[15px] text-black/55 max-w-[500px] mx-auto leading-relaxed mb-10"
          >
            Expert perspectives on web development, mobile apps, cloud, AI, cybersecurity,
            and digital transformation from the Livetech team.
          </motion.p>

          {/* Stats chips */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="flex items-center justify-center gap-3 flex-wrap"
          >
            {[
              { val: "16",        lbl: "Articles" },
              { val: "11",        lbl: "Categories" },
              { val: "170+ min",  lbl: "Total Reading" },
              { val: "Weekly",    lbl: "New Posts" },
            ].map(({ val, lbl }) => (
              <div key={lbl} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/[0.07] shadow-sm">
                <span className="text-[13px] font-bold text-[#0a0a08]">{val}</span>
                <span className="text-[11px] text-black/45">{lbl}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Featured Articles ─── */}
      <section className="py-12" ref={featRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            variants={fade} initial="hidden" animate={featIn ? "show" : "hidden"}
            className="text-[11px] font-semibold text-black/40 uppercase tracking-widest mb-5"
          >
            Featured Articles
          </motion.p>
          <motion.div
            variants={stagger} initial="hidden" animate={featIn ? "show" : "hidden"}
            className="space-y-4"
          >
            {/* First featured — large horizontal */}
            <motion.div variants={fade}>
              <FeaturedHeroCard post={featured[0]} />
            </motion.div>
            {/* Featured 2 & 3 — side by side */}
            <motion.div variants={stagger} className="grid sm:grid-cols-2 gap-4">
              {featured.slice(1).map((post) => (
                <motion.div key={post.slug} variants={fade}>
                  <FeaturedCard post={post} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── All Articles with category filter ─── */}
      <section className="pb-20" ref={listRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filter pills */}
          <motion.div
            variants={fade} initial="hidden" animate={listIn ? "show" : "hidden"}
            className="mb-8"
          >
            <p className="text-[11px] font-semibold text-black/40 uppercase tracking-widest mb-4">
              All Articles
            </p>
            <div className="flex gap-2 flex-wrap overflow-x-auto pb-1">
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="relative px-3.5 py-1.5 rounded-full text-[12px] font-medium transition-colors duration-200 whitespace-nowrap"
                  style={{
                    color: activeCategory === cat ? "#fff" : "rgba(0,0,0,0.55)",
                    zIndex: 0,
                  }}
                >
                  {activeCategory === cat && (
                    <motion.span
                      layoutId="blog-active-cat"
                      className="absolute inset-0 rounded-full bg-[#3d5a2e]"
                      style={{ zIndex: -1 }}
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{cat}</span>
                </button>
              ))}
            </div>
            <p className="text-[11px] text-black/35 mt-3">
              Showing {filtered.length} article{filtered.length !== 1 ? "s" : ""}
              {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
            </p>
          </motion.div>

          {/* Animated articles grid */}
          <AnimatePresence mode="popLayout">
            <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((post) => (
                <motion.div
                  key={post.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                >
                  <ArticleCard post={post} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-black/40 text-[14px]">
              No articles in this category yet. Check back soon.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
