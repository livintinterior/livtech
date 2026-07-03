"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { services } from "@/lib/constants/services";
import { viewportConfig } from "@/lib/constants/animations";

/* ─── One Unsplash image per service (same aspect, all 600 × 400 crop) ─── */
const serviceImages: Record<string, string> = {
  "website-development":
    "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop&q=80",
  "mobile-app-development":
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&q=80",
  "ui-ux-design":
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop&q=80",
  "digital-marketing":
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80",
  seo:
    "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=400&fit=crop&q=80",
  branding:
    "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop&q=80",
  "ai-solutions":
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop&q=80",
  "custom-software-development":
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&q=80",
  "cloud-solutions":
    "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop&q=80",
};

const accentMap: Record<string, string> = {
  "website-development":        "#1D4ED8",
  "mobile-app-development":     "#7C3AED",
  "ui-ux-design":               "#BE185D",
  "digital-marketing":          "#C2410C",
  seo:                          "#15803D",
  branding:                     "#B45309",
  "ai-solutions":               "#6D28D9",
  "custom-software-development": "#0E7490",
  "cloud-solutions":            "#0369A1",
};

/* ─── Single card ─── */
function SlideCard({
  title,
  shortDesc,
  slug,
  features,
}: {
  title: string;
  shortDesc: string;
  slug: string;
  features: readonly string[];
}) {
  const img    = serviceImages[slug];
  const accent = accentMap[slug] ?? "#3d5a2e";

  return (
    <Link
      href={`/services/${slug}`}
      className="group flex-shrink-0 w-[272px] rounded-[22px] overflow-hidden bg-white border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_36px_rgba(0,0,0,0.12)] transition-shadow duration-300 flex flex-col"
      style={{ textDecoration: "none" }}
    >
      {/* ── Image — fixed 160 px, all same height ── */}
      <div className="relative h-[160px] overflow-hidden flex-shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Colour tint overlay */}
        <div
          className="absolute inset-0 opacity-40 mix-blend-multiply"
          style={{ background: accent }}
        />
      </div>

      {/* ── Text ── */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-[13.5px] font-bold text-[#0a0a08] mb-1 group-hover:text-[#3d5a2e] transition-colors duration-200">
          {title}
        </h3>
        <p className="text-[11.5px] text-black/50 leading-relaxed mb-3 line-clamp-2">
          {shortDesc}
        </p>

        <ul className="space-y-1 mb-4 flex-1">
          {features.slice(0, 3).map((f) => (
            <li key={f} className="flex items-start gap-1.5 text-[11px] text-black/45">
              <span
                className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                style={{ background: accent }}
              />
              {f}
            </li>
          ))}
        </ul>

        <span
          className="inline-flex items-center gap-1 text-[11.5px] font-semibold"
          style={{ color: accent }}
        >
          Learn more
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>
    </Link>
  );
}

export function Services() {
  const cards = services.slice(0, 9);

  return (
    <section id="services" className="relative py-10 lg:py-14 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.10] to-transparent" />
        <div className="absolute inset-0 dot-pattern opacity-25" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="What We Do"
          title="Enterprise-Grade "
          highlight="Digital Services"
          subtitle="From ideation to deployment — we cover every aspect of your digital journey with specialised expertise and cutting-edge technology."
          className="mb-6"
        />
      </div>

      {/* ── Marquee strip (bleeds past the container) ── */}
      <div className="relative overflow-hidden group">
        {/* Left fade edge */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Right fade edge */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* The scrolling row — duplicated so it loops seamlessly */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
          transition={{ duration: 0.5 }}
          className="flex gap-5 px-5 animate-marquee group-hover:[animation-play-state:paused]"
          style={{ width: "max-content", animationDuration: "52s" }}
        >
          {/* First copy */}
          {cards.map((svc) => (
            <SlideCard
              key={svc.slug}
              title={svc.title}
              shortDesc={svc.shortDesc}
              slug={svc.slug}
              features={svc.features}
            />
          ))}
          {/* Duplicate for seamless loop */}
          {cards.map((svc) => (
            <SlideCard
              key={`${svc.slug}-dup`}
              title={svc.title}
              shortDesc={svc.shortDesc}
              slug={svc.slug}
              features={svc.features}
            />
          ))}
        </motion.div>
      </div>

      {/* ── View all button ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ delay: 0.2 }}
          className="mt-10 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0a0a08] text-white text-[13.5px] font-semibold hover:bg-[#0a0a08]/85 transition-all duration-200 shadow-md"
          >
            View All 14 Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
