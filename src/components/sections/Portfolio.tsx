"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/constants/animations";

const portfolioItems = [
  {
    title: "MediCare Patient Portal",
    category: "Healthcare",
    description: "A comprehensive patient management system with appointment booking, EMR, and telemedicine features.",
    detail: "Built for a leading hospital chain across 12 cities. The platform handles 5,000+ daily appointments, integrates with lab systems, and provides real-time telemedicine consultations via WebRTC.",
    tags: ["Next.js", "PostgreSQL", "TypeScript"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    slug: "medicare-patient-portal",
    result: "40% reduction in missed appointments",
  },
  {
    title: "EduLearn Platform",
    category: "EdTech",
    description: "An interactive learning management system serving 50,000+ students across India.",
    detail: "A full-featured LMS with live classes, recorded sessions, AI-based quiz generation, progress tracking, and certificate issuance. Scaled to handle 10,000 concurrent users during peak hours.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
    slug: "edulearn-platform",
    result: "50,000+ active learners",
  },
  {
    title: "RetailMax E-Commerce",
    category: "Retail",
    description: "A high-performance e-commerce platform processing 10,000+ orders daily with AI recommendations.",
    detail: "Multi-vendor marketplace with AI-powered product recommendations, real-time inventory sync, automated logistics dispatch, and a seller dashboard with deep analytics.",
    tags: ["Next.js", "AWS", "Redis"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    slug: "retailmax-ecommerce",
    result: "3x increase in average order value",
  },
  {
    title: "FinanceHub Dashboard",
    category: "Fintech",
    description: "Real-time financial analytics dashboard with advanced charting and risk management tools.",
    detail: "Live trading dashboard consuming market data via WebSocket feeds. Features custom chart builders, portfolio risk heatmaps, and automated alert rules for price movements.",
    tags: ["React", "Python", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    slug: "financehub-dashboard",
    result: "Sub-50ms data latency",
  },
  {
    title: "LogiTrack Fleet System",
    category: "Logistics",
    description: "GPS-integrated fleet management and delivery tracking platform for 500+ vehicles.",
    detail: "End-to-end fleet visibility with live GPS tracking, route optimisation engine, driver behaviour scoring, fuel consumption analytics, and customer-facing delivery ETAs.",
    tags: ["React Native", "Node.js", "WebSocket"],
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80",
    slug: "logitrack-fleet",
    result: "22% fuel cost reduction",
  },
  {
    title: "BuildSmart Construction ERP",
    category: "Construction",
    description: "End-to-end construction project management system with cost tracking and resource planning.",
    detail: "Custom ERP covering procurement, BOQ management, labour attendance, progress billing, and site-level dashboards for project managers. Deployed across 30+ active project sites.",
    tags: ["Angular", "Spring Boot", "MySQL"],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    slug: "buildsmart-erp",
    result: "30% faster project delivery",
  },
];

type Project = (typeof portfolioItems)[0];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Modal */}
        <motion.div
          className="relative bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-lg mx-auto"
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 24 }}
          transition={{ type: "spring", stiffness: 320, damping: 28 }}
        >
          {/* Image */}
          <div className="relative h-52 w-full overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="512px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            {/* Category badge */}
            <div className="absolute top-4 left-4">
              <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-[10px] font-medium text-white/90">
                {project.category}
              </span>
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/60 transition-colors"
            >
              <X size={14} />
            </button>

            {/* Result pill */}
            <div className="absolute bottom-4 left-4">
              <span className="px-3 py-1 rounded-full bg-[#3d5a2e]/90 backdrop-blur-sm text-white text-[11px] font-semibold">
                {project.result}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h2 className="text-[18px] font-bold text-[#0a0a08] mb-2">{project.title}</h2>
            <p className="text-[13px] text-black/55 leading-relaxed mb-4">{project.detail}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-black/[0.04] border border-black/[0.08] text-[11px] text-black/60 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Link
                href={`/portfolio/${project.slug}`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0a0a08] text-white text-[13px] font-semibold hover:bg-[#0a0a08]/85 transition-colors"
                onClick={onClose}
              >
                View Full Case Study <ExternalLink size={13} />
              </Link>
              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl border border-black/[0.12] text-[13px] text-black/60 hover:bg-black/[0.04] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function Portfolio() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section className="relative py-8 lg:py-12">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Portfolio"
          title="Work That Speaks "
          highlight="for Itself"
          subtitle="A selection of projects that demonstrate our capability to deliver complex solutions across diverse industries."
          className="mb-6"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {portfolioItems.map((item) => (
            <motion.div key={item.slug} variants={fadeUp}>
              <button
                onClick={() => setSelected(item)}
                className="group block w-full text-left"
              >
                <div className="rounded-2xl overflow-hidden bg-black/[0.02] border border-black/[0.07] hover:border-black/[0.12] transition-all duration-300 h-full">
                  {/* Image */}
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white text-[12px] font-medium">
                        <ExternalLink className="w-3.5 h-3.5" />
                        View Project
                      </div>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-[10px] font-medium text-white/90">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-[13px] font-semibold text-black/90 mb-1.5 group-hover:text-[#0a0a08] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[12px] text-black/55 mb-4 leading-relaxed">{item.description}</p>

                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-black/[0.03] border border-black/[0.07] text-[10px] text-black/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          className="mt-12 text-center"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-medium text-black/70 rounded-full border border-black/[0.12] hover:bg-black/[0.04] hover:border-black/[0.22] transition-all duration-200"
          >
            View Full Portfolio <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      </div>

      {/* Modal */}
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
