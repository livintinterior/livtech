"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/constants/animations";

/* ── Projects data ── */
const projects = [
  { slug: "medicare-patient-portal",    title: "MediCare Patient Portal",      client: "MediCare Solutions",       category: "Healthcare",     tags: ["Next.js","PostgreSQL","TypeScript","AWS"],          description: "Comprehensive patient management system with appointment booking, EMR, telemedicine, and billing serving 50,000+ patients.",    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",  accent: "#2563EB", featured: true,  results: ["50K+ patients","40% less admin time","99.9% uptime"]  },
  { slug: "edulearn-platform",          title: "EduLearn LMS Platform",        client: "EduTech Pro",              category: "Education",      tags: ["React","Node.js","MongoDB","Firebase"],             description: "Interactive learning management system with live classes, assessments, certificates, and analytics for 50,000+ students.",        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",  accent: "#7C3AED", featured: true,  results: ["50K+ students","95% completion","4.8/5 rating"]       },
  { slug: "retailmax-ecommerce",        title: "RetailMax E-Commerce",         client: "RetailMax",                category: "Retail",         tags: ["Next.js","AWS","Redis","Elasticsearch"],            description: "High-performance e-commerce platform with AI recommendations, inventory management, and multi-vendor support.",                   image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",  accent: "#C2410C", featured: true,  results: ["47% conversion","10K+ orders/day","3x faster"]       },
  { slug: "financehub-dashboard",       title: "FinanceHub Analytics",         client: "FinanceHub",               category: "Finance",        tags: ["React","Python","WebSocket","PostgreSQL"],          description: "Real-time financial analytics dashboard with trading signals, portfolio tracking, and advanced risk management tools.",             image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",  accent: "#15803D", featured: true,  results: ["Rs 500Cr+ managed","Real-time data","SOC 2"]          },
  { slug: "logitrack-fleet",            title: "LogiTrack Fleet System",       client: "LogiTrack",                category: "Logistics",      tags: ["React Native","Node.js","GPS API","WebSocket"],     description: "GPS-integrated fleet management and delivery tracking platform managing 500+ vehicles in real-time across multiple cities.",          image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80",  accent: "#0E7490", featured: false, results: ["35% efficiency","500+ vehicles","Real-time GPS"]      },
  { slug: "buildsmart-erp",             title: "BuildSmart Construction ERP",  client: "BuildSmart",               category: "Construction",   tags: ["Angular","Spring Boot","MySQL","Docker"],           description: "End-to-end construction ERP with project management, procurement, billing, and resource planning for large-scale contractors.",      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",  accent: "#B45309", featured: false, results: ["25% cost reduction","10 projects","100+ users"]       },
  { slug: "govconnect-portal",          title: "GovConnect Citizen Portal",    client: "District Administration",  category: "Government",     tags: ["Next.js","PostgreSQL","Docker","Azure"],            description: "Digital citizen services portal handling applications, grievances, and document processing for 500,000+ citizens.",                  image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80",  accent: "#1D4ED8", featured: false, results: ["500K+ citizens","80% digital","Award-winning"]        },
  { slug: "hotelpro-management",        title: "HotelPro Management Suite",    client: "HotelPro Group",           category: "Hospitality",    tags: ["Vue.js","Laravel","MySQL","Stripe"],                description: "Complete hotel management system with PMS, reservations, housekeeping, F&B, and guest experience modules across 15 hotels.",         image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",  accent: "#B45309", featured: false, results: ["15 hotels","30% rev increase","Guest app"]            },
  { slug: "agriconnect-platform",       title: "AgriConnect Smart Farm",       client: "AgriConnect",              category: "Agriculture",    tags: ["React","Node.js","MongoDB","IoT"],                  description: "IoT-connected agricultural platform providing crop monitoring, market price analytics, and farmer advisory for 10,000+ farmers.",     image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",  accent: "#166534", featured: false, results: ["10K+ farmers","20% yield increase","IoT sensors"]    },
  { slug: "neobank-app",                title: "NeoBank Mobile App",           client: "NeoBank India",            category: "Finance",        tags: ["Flutter","Firebase","Node.js","PostgreSQL"],        description: "Full-stack neobank application with digital onboarding, UPI payments, smart savings, investment tracking, and AI expense insights.",  image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",  accent: "#0369A1", featured: false, results: ["200K+ downloads","4.9 App Store","RBI compliant"]    },
  { slug: "traveleasy-booking",         title: "TravelEasy Booking Engine",    client: "TravelEasy",               category: "Travel",         tags: ["Next.js","Prisma","Redis","Stripe"],                description: "End-to-end travel booking platform with flights, hotels, holiday packages, and real-time pricing for B2C and B2B segments.",          image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",  accent: "#0891B2", featured: false, results: ["1M+ bookings","120+ partners","Rs 50Cr+ GTV"]         },
  { slug: "startuplab-crm",             title: "StartupLab CRM Platform",      client: "StartupLab",               category: "Startup",        tags: ["React","Node.js","OpenAI","PostgreSQL"],            description: "AI-powered CRM built for fast-growing startups with deal tracking, automated follow-ups, forecasting, and team collaboration.",        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80",  accent: "#7C3AED", featured: false, results: ["500+ startups","3x pipeline growth","AI-powered"]    },
  { slug: "ngo-connect",                title: "NGO Connect Impact Platform",  client: "ChangeIndia Foundation",   category: "NGO",            tags: ["Next.js","Prisma","Razorpay","Tailwind"],           description: "End-to-end NGO management platform with donor CRM, online fundraising, volunteer coordination, and real-time impact reporting.",      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",  accent: "#BE185D", featured: false, results: ["Rs 2Cr+ raised","5K+ donors","12 NGOs"]               },
  { slug: "cybershield-soc",            title: "CyberShield SOC Dashboard",    client: "SecureTech",               category: "Cybersecurity",  tags: ["React","Python","Elastic","Kubernetes"],            description: "Real-time Security Operations Center dashboard with threat detection, incident management, and automated response playbooks.",           image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",  accent: "#B91C1C", featured: false, results: ["99.8% threat detection","SIEM integrated","SOC 2"]   },
  { slug: "quickfast-delivery",         title: "QuickFast Hyperlocal Delivery",client: "QuickFast",                category: "Logistics",      tags: ["React Native","Node.js","Redis","MapBox"],          description: "Hyperlocal delivery platform with real-time order tracking, dynamic routing, dark store management, and live driver allocation.",        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",  accent: "#0E7490", featured: false, results: ["28 min avg delivery","10K+ orders/day","50+ cities"] },
];

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

/* ── Ring background ── */
const rings = [
  { size: 540, dur: 46, dir:  1, stroke: "rgba(61,90,46,0.07)", dash: "6 12", dot: 9  },
  { size: 380, dur: 29, dir: -1, stroke: "rgba(61,90,46,0.06)", dash: "4 8",  dot: 7  },
  { size: 230, dur: 18, dir:  1, stroke: "rgba(61,90,46,0.05)", dash: "3 6",  dot: 5  },
  { size: 120, dur: 11, dir: -1, stroke: "rgba(61,90,46,0.05)", dash: "2 5",  dot: 4  },
];

const ptcls = [
  { x: 8,  y: 18, s: 4, op: 0.14, dur: 7,  d: 0   },
  { x: 91, y: 12, s: 3, op: 0.12, dur: 9,  d: 1.2 },
  { x: 14, y: 72, s: 5, op: 0.10, dur: 8,  d: 2   },
  { x: 86, y: 66, s: 4, op: 0.13, dur: 10, d: 0.5 },
  { x: 50, y: 6,  s: 3, op: 0.09, dur: 6,  d: 3   },
  { x: 92, y: 44, s: 3, op: 0.11, dur: 11, d: 1.8 },
];

function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <div className="absolute inset-0 dot-pattern opacity-25" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] rounded-full bg-[#3d5a2e]/[0.05] blur-3xl" />
      {rings.map(({ size, dur, dir, stroke, dash, dot }, i) => (
        <motion.div key={i} className="absolute top-1/2 left-1/2"
          style={{ width: size, height: size, marginLeft: -size / 2, marginTop: -size / 2 }}
          animate={{ rotate: dir * 360 }}
          transition={{ duration: dur, repeat: Infinity, ease: "linear" }}>
          <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="absolute inset-0">
            <circle cx={size/2} cy={size/2} r={size/2-4} fill="none" stroke={stroke} strokeWidth="1.5" strokeDasharray={dash} />
          </svg>
          <div className="absolute rounded-full" style={{ width: dot, height: dot, top: 4, left: "50%", marginLeft: -dot/2, background: "rgba(61,90,46,0.28)", boxShadow: "0 0 10px rgba(61,90,46,0.2)" }} />
        </motion.div>
      ))}
      {ptcls.map((p, i) => (
        <motion.div key={i} className="absolute rounded-full"
          style={{ width: p.s, height: p.s, left: `${p.x}%`, top: `${p.y}%`, background: `rgba(61,90,46,${p.op})` }}
          animate={{ y: [0, -10, 0], opacity: [p.op, p.op * 2, p.op] }}
          transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: p.d }} />
      ))}
    </div>
  );
}

/* ── Featured card (large) ── */
function FeaturedCard({ project }: { project: typeof projects[0] }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative rounded-[24px] overflow-hidden bg-white border border-black/[0.07] shadow-[0_4px_28px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.15)] transition-shadow duration-400 h-full flex flex-col"
    >
      <Link href={`/portfolio/${project.slug}`} className="flex flex-col h-full">
        {/* Image */}
        <div className="relative h-[220px] overflow-hidden flex-shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-108" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          {/* Top bar */}
          <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, ${project.accent}, ${project.accent}88)` }} />
          {/* Category pill */}
          <div className="absolute top-4 left-4">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold text-white backdrop-blur-sm border border-white/20" style={{ background: `${project.accent}cc` }}>
              {project.category}
            </span>
          </div>
          {/* External link icon */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
              <ExternalLink className="w-3.5 h-3.5 text-white" />
            </div>
          </div>
          {/* Results strip at bottom of image */}
          <div className="absolute bottom-3 left-4 right-4 flex gap-2 flex-wrap">
            {project.results.map((r) => (
              <span key={r} className="px-2 py-0.5 rounded-md text-[9.5px] font-semibold bg-white/15 backdrop-blur-sm text-white border border-white/20">{r}</span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <p className="text-[10.5px] font-medium text-black/40 mb-1 uppercase tracking-wider">{project.client}</p>
          <h3 className="text-[15px] font-bold text-[#0a0a08] mb-2 leading-snug">{project.title}</h3>
          <p className="text-[12px] text-black/52 leading-relaxed mb-4 flex-1 line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span key={tag} className="px-2 py-0.5 rounded-md text-[10px] text-black/50 border border-black/[0.08] bg-black/[0.03]">{tag}</span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ── Regular card ── */
function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.35 }}
      whileHover={{ y: -5 }}
      className="group relative rounded-[22px] overflow-hidden bg-white border border-black/[0.07] shadow-[0_4px_20px_rgba(0,0,0,0.07)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.13)] transition-shadow duration-300 h-full flex flex-col"
    >
      <Link href={`/portfolio/${project.slug}`} className="flex flex-col h-full">
        {/* Image area */}
        <div className="relative h-[180px] overflow-hidden flex-shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          {/* Gradient overlay — slides up on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent translate-y-8 group-hover:translate-y-0 transition-transform duration-400" />
          {/* Top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: project.accent }} />
          {/* Category */}
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 rounded-full text-[9.5px] font-semibold text-white backdrop-blur-sm border border-white/20" style={{ background: `${project.accent}cc` }}>
              {project.category}
            </span>
          </div>
          {/* Hover: show results */}
          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 flex flex-wrap gap-1.5">
            {project.results.map((r) => (
              <span key={r} className="px-2 py-0.5 rounded text-[9.5px] font-semibold bg-white/15 backdrop-blur-sm text-white border border-white/20">{r}</span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          <p className="text-[10px] font-medium text-black/38 mb-1 uppercase tracking-wider">{project.client}</p>
          <h3 className="text-[13.5px] font-bold text-[#0a0a08] mb-1.5 leading-snug">{project.title}</h3>
          <p className="text-[11.5px] text-black/50 leading-relaxed mb-3 flex-1 line-clamp-2">{project.description}</p>
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-1">
              {project.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="px-1.5 py-0.5 rounded text-[9.5px] text-black/45 border border-black/[0.07] bg-black/[0.02]">{tag}</span>
              ))}
            </div>
            <span className="text-[11px] font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: project.accent }}>
              View <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ── Main export ── */
export function PortfolioContent() {
  const [activeCategory, setActiveCategory] = useState("All");

  const featured = projects.filter((p) => p.featured);
  const filtered  = projects.filter((p) => !p.featured && (activeCategory === "All" || p.category === activeCategory));

  return (
    <>
      {/* ══ 1. HERO ══ */}
      <section className="relative min-h-[500px] flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent" />
        <HeroBackground />

        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div variants={fadeUp} className="flex justify-center mb-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-black/[0.09] shadow-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-[#3d5a2e]/70 animate-pulse" />
              <span className="text-[11px] font-semibold text-black/55 uppercase tracking-wider">50+ Projects Delivered</span>
            </div>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-[2.4rem] sm:text-[3.2rem] lg:text-[4rem] font-extrabold text-[#0a0a08] leading-[1.06] tracking-[-0.03em] mb-5">
            Our Work <span className="text-[#3d5a2e]">Speaks</span> for Itself
          </motion.h1>

          <motion.p variants={fadeUp} className="text-[15px] text-black/52 leading-relaxed max-w-xl mx-auto">
            From startups to enterprises, across 16 industries. Here is a glimpse of the digital products we have built and the results we have delivered.
          </motion.p>

          {/* Quick stats */}
          <motion.div variants={fadeUp} className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { value: "50+",  label: "Projects Built"   },
              { value: "10+",  label: "Industries"       },
              { value: "45+",  label: "Happy Clients"    },
              { value: "2+",   label: "Years Experience" },
            ].map(({ value, label }) => (
              <div key={label} className="py-3 px-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-black/[0.07] shadow-sm text-center">
                <p className="text-[1.5rem] font-extrabold text-[#0a0a08] leading-none mb-0.5">{value}</p>
                <p className="text-[11px] text-black/45 font-medium">{label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ══ 2. FEATURED PROJECTS ══ */}
      <section className="relative py-10 lg:py-14" style={{ background: "#f5f5f7" }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Highlights" title="Featured " highlight="Projects" subtitle="Our most impactful work — complex problems solved with elegant technology." className="mb-8" />

          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featured.map((project) => (
              <motion.div key={project.slug} variants={fadeUp} className="h-full">
                <FeaturedCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ 3. ALL PROJECTS WITH FILTER ══ */}
      <section className="relative py-10 lg:py-14 bg-white">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="All Work" title="Browse by " highlight="Category" subtitle="Filter our portfolio by industry or technology to find relevant case studies." className="mb-8" />

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="relative px-4 py-1.5 rounded-full text-[12.5px] font-medium transition-all duration-200"
                style={activeCategory === cat
                  ? { background: "#0a0a08", color: "#fff" }
                  : { background: "rgba(0,0,0,0.03)", color: "rgba(0,0,0,0.55)", border: "1px solid rgba(0,0,0,0.08)" }
                }
              >
                {cat}
                {activeCategory === cat && (
                  <motion.span layoutId="filter-pill" className="absolute inset-0 rounded-full bg-[#0a0a08]" style={{ zIndex: -1 }} transition={{ type: "spring", stiffness: 400, damping: 30 }} />
                )}
              </button>
            ))}
          </div>

          {/* Grid */}
          <AnimatePresence mode="popLayout">
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-black/40 text-[13px]">
              No projects in this category yet. <Link href="/contact" className="text-[#3d5a2e] underline underline-offset-2">Get in touch</Link> to discuss yours.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
