import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "In-depth case studies showing how Livtech delivers measurable business results for clients across healthcare, education, retail, finance, and more.",
  keywords: ["software case studies India", "web development results", "app development success stories", "digital transformation case study"],
  alternates: { canonical: "https://livetech.in/case-studies" },
  openGraph: {
    title: "Case Studies | Livtech",
    description: "Real results from real projects -- see how Livtech transforms businesses with technology.",
    url: "https://livetech.in/case-studies",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Livtech Case Studies" }],
  },
  twitter: { card: "summary_large_image", title: "Case Studies | Livtech", description: "Real results from real projects -- see how Livtech transforms businesses with technology." },
};

const cases = [
  { slug: "medicare-patient-portal",  title: "MediCare Patient Portal Transformation",  industry: "Healthcare",   result: "70% reduction in scheduling time", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&q=80", summary: "How we built a hospital patient management system that eliminated manual scheduling, reduced no-shows by 28%, and improved patient satisfaction to 4.8/5." },
  { slug: "edulearn-lms-platform",    title: "EduLearn: 50,000 Students on Day One",   industry: "Education",    result: "78% course completion rate",        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80", summary: "We built a full-featured LMS that scaled from 0 to 50,000 students in 6 months, tripling the client's revenue in the first year." },
  { slug: "retailmax-ecommerce",      title: "RetailMax: From 100 to 10,000 Daily Orders", industry: "E-Commerce", result: "47% increase in conversion rate",   image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80", summary: "A complete e-commerce platform rebuild on microservices that handled Black Friday traffic with zero downtime and increased conversions by 47%." },
  { slug: "logitrack-fleet",          title: "LogiTrack GPS Fleet Management",          industry: "Logistics",    result: "35% logistics efficiency gain",     image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80", summary: "Real-time GPS tracking, route optimization, and driver management for a 500-vehicle fleet across 12 states." },
  { slug: "fintrack-trading",         title: "FinTrack Real-Time Trading Dashboard",    industry: "Finance",      result: "Sub-100ms data updates",            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80", summary: "A high-frequency trading dashboard handling millions of WebSocket events per second with enterprise-grade security and sub-100ms latency." },
  { slug: "govconnect-citizen",       title: "GovConnect Citizen Services Portal",      industry: "Government",   result: "200,000 citizens served",           image: "https://images.unsplash.com/photo-1575503802870-45de6a6217c8?w=800&q=80", summary: "A secure, accessible government portal digitizing 45 citizen services and reducing physical office visits by 60%." },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="relative pt-24 pb-10 overflow-hidden">
        <AuroraBackground intensity="low" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.09] mb-6">
            <span className="text-[11px] font-semibold text-black/62 uppercase tracking-wider">Case Studies</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0a0a08] mb-4 tracking-tight">
            Real Projects. <span className="gradient-text-static">Real Results.</span>
          </h1>
          <p className="text-[15px] text-black/60 max-w-xl mx-auto leading-relaxed">
            Deep dives into how we've solved complex business problems with technology â€” with measurable outcomes.
          </p>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {cases.map(({ slug, title, industry, result, image, summary }) => (
              <Link key={slug} href={`/case-studies/${slug}`}>
                <div className="group rounded-2xl bg-black/[0.02] border border-black/[0.07] hover:border-black/[0.12] hover:bg-black/[0.03] transition-all duration-300 overflow-hidden h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/85 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-[10px] font-semibold text-black/70 border border-black/[0.10]">{industry}</span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <p className="text-[11px] font-semibold text-[#3d5a2e]/80 mb-2">Result: {result}</p>
                    <h3 className="text-[13px] font-bold text-black/90 mb-2 group-hover:text-[#0a0a08] transition-colors leading-snug">{title}</h3>
                    <p className="text-[11px] text-black/50 leading-relaxed flex-1">{summary}</p>
                    <div className="flex items-center gap-1 text-[11px] text-[#3d5a2e]/55 group-hover:text-[#3d5a2e] mt-4 transition-colors">
                      Read case study <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

