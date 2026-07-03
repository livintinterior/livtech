﻿import type { Metadata } from "next";
import Image from "next/image";
import { Star } from "lucide-react";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Client Testimonials",
  description: "See what 45+ clients say about Livtech - real reviews from businesses across healthcare, education, fintech, retail, and more.",
  keywords: ["Livtech reviews", "software company testimonials India", "client feedback web development", "IT company ratings Hyderabad"],
  alternates: { canonical: "https://livetech.in/testimonials" },
  openGraph: {
    title: "Client Testimonials | Livtech",
    description: "45+ happy clients share their experience working with Livtech. Rated 5.0 stars.",
    url: "https://livetech.in/testimonials",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Livtech Testimonials" }],
  },
  twitter: { card: "summary_large_image", title: "Client Testimonials | Livtech", description: "45+ happy clients share their experience working with Livtech. Rated 5.0 stars." },
};

const testimonials = [
  { name: "Rajesh Kumar",          role: "CEO",                company: "MediCare Solutions", content: "Livetech built our entire hospital management system in just 4 months. The quality exceeded our expectations and the support team has been exceptional. Highly recommend for any healthcare digital transformation project.", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80", category: "Healthcare" },
  { name: "Priya Sharma",          role: "CTO",                company: "EduTech Pro",        content: "Our e-learning platform now serves 50,000+ students seamlessly. The React/Node.js stack they chose is incredibly fast and the admin dashboard makes content management a breeze. Best tech partner we've had.", rating: 5, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80", category: "Education" },
  { name: "Arun Patel",            role: "Founder",            company: "RetailMax",          content: "Our e-commerce conversion rate increased by 47% after the redesign. Livetech's team understood our business deeply and delivered a solution that truly drives results. The performance is outstanding.", rating: 5, avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80", category: "Retail" },
  { name: "Sunita Reddy",          role: "VP Technology",      company: "FinanceHub",         content: "The real-time trading dashboard Livetech built handles millions of data points flawlessly. Security, performance, and UX are all top-notch. Their team's expertise in fintech is second to none.", rating: 5, avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&q=80", category: "Finance" },
  { name: "Mohammed Khan",         role: "Operations Director", company: "LogiTrack",         content: "GPS integration, real-time fleet tracking, driver management -- Livetech delivered everything perfectly. Our logistics efficiency improved by 35%. The mobile app is loved by our entire team.", rating: 5, avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&q=80", category: "Logistics" },
  { name: "Ananya Iyer",           role: "Head of Digital",    company: "StartupLab",        content: "Livetech took our MVP from concept to market in 8 weeks. They understand the startup mindset -- quick iteration, lean development, and scalable architecture. Our investors were impressed by the quality.", rating: 5, avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80", category: "Startup" },
  { name: "Deepak Nair",           role: "CTO",                company: "TechCorp India",    content: "We engaged Livetech for a complete cloud migration to AWS. The project was executed flawlessly with zero downtime and 40% cost savings. Their DevOps expertise is exceptional.", rating: 5, avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80", category: "Enterprise" },
  { name: "Kavita Joshi",          role: "Principal",          company: "Greenwood Academy", content: "Our school management system has transformed how we operate. From admissions to attendance to fee management -- everything is now digital. Parents love the mobile app!", rating: 5, avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&q=80", category: "Education" },
  { name: "Sriram Venkataramaiah", role: "MD",                 company: "ManufacturePro",    content: "The ERP system Livetech built for our manufacturing unit has completely transformed our operations. Production tracking, inventory management, and quality control in one unified platform.", rating: 5, avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&q=80", category: "Manufacturing" },
];

export default function TestimonialsPage() {
  return (
    <>
      <section className="relative pt-24 pb-10 overflow-hidden">
        <AuroraBackground intensity="low" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.09] mb-6">
            <span className="text-[11px] font-semibold text-black/62 uppercase tracking-wider">Testimonials</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0a0a08] mb-4 tracking-tight">
            What Our Clients <span className="gradient-text-static">Say</span>
          </h1>
          <p className="text-[15px] text-black/60 max-w-xl mx-auto leading-relaxed">
            45+ happy clients. 50+ successful projects. Here's what they say about working with Livetech.in.
          </p>
          <div className="flex items-center justify-center gap-2 mt-5">
            <div className="flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 text-[#c4ba88] fill-[#c4ba88]" />)}</div>
            <span className="text-[#0a0a08] font-semibold text-[15px]">5.0</span>
            <span className="text-black/50 text-[12px]">average rating from 45+ reviews</span>
          </div>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {testimonials.map(({ name, role, company, content, rating, avatar, category }) => (
              <div key={name} className="break-inside-avoid p-5 rounded-2xl bg-black/[0.02] border border-black/[0.07] hover:border-black/[0.12] hover:bg-black/[0.03] transition-all duration-300">
                <div className="flex gap-0.5 mb-3">{Array.from({ length: rating }).map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-[#c4ba88] fill-[#c4ba88]" />)}</div>
                <p className="text-[13px] text-black/45 italic leading-relaxed mb-4">&ldquo;{content}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-black/[0.10] flex-shrink-0">
                    <Image src={avatar} alt={name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[12px] font-semibold text-[#0a0a08]">{name}</p>
                    <p className="text-[10px] text-black/50 truncate">{role} · {company}</p>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-black/[0.04] border border-black/[0.08] text-[9px] font-medium text-black/52 flex-shrink-0">{category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

