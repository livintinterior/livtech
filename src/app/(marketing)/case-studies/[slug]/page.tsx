import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, TrendingUp } from "lucide-react";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import { CTA } from "@/components/sections/CTA";

const cases: Record<string, {
  title: string; industry: string; client: string; duration: string;
  image: string; overview: string; challenge: string; solution: string;
  results: { metric: string; value: string }[]; tech: string[];
}> = {
  "medicare-patient-portal": {
    title: "MediCare Patient Portal Transformation",
    industry: "Healthcare",
    client: "MediCare Solutions",
    duration: "4 months",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&q=80",
    overview: "MediCare Solutions operates a network of 5 hospitals and 12 clinics across Telangana. They approached us to completely digitize their patient experience — from appointment booking to post-visit follow-ups.",
    challenge: "Patient scheduling was entirely manual, requiring phone calls during business hours. Medical records were stored in departmental silos. No-show rates were at 40%, costing the hospital ₹80 lakhs annually in lost appointments.",
    solution: "We designed and built a comprehensive patient portal with real-time appointment booking, automated SMS/email reminders, integrated video consultations via Daily.co, and a unified EHR that pulled records from all 17 locations into a single view. The system integrates with their existing lab management software.",
    results: [
      { metric: "Scheduling Time", value: "70% reduction" },
      { metric: "No-Show Rate", value: "40% → 12%" },
      { metric: "Patient Satisfaction", value: "4.8/5 average" },
      { metric: "Daily Active Users", value: "3,000+" },
      { metric: "Cost Savings", value: "₹65L/year" },
      { metric: "Video Consults", value: "500+/month" },
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Twilio", "Daily.co", "AWS RDS", "S3"],
  },
  "edulearn-lms-platform": {
    title: "EduLearn: 50,000 Students on Day One",
    industry: "Education",
    client: "EduTech Pro",
    duration: "6 months",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&q=80",
    overview: "EduTech Pro is an EdTech startup that wanted to launch a full-featured LMS for K-12 and competitive exam preparation. They needed to go from zero to scale-ready in 6 months.",
    challenge: "The founders were managing everything through a patchwork of Zoom, Google Drive, WhatsApp, and Excel. Student progress was impossible to track and teacher workload was unsustainable.",
    solution: "We built a unified LMS with live video classes (AWS MediaLive), recorded lessons with chapter markers, AI-powered question recommendation engine, automated grading for MCQ tests, parent dashboards, and push notifications. The backend was designed to handle 100,000 concurrent users.",
    results: [
      { metric: "Students at Launch", value: "50,000" },
      { metric: "Course Completion", value: "78% (vs 34% industry avg)" },
      { metric: "Teacher Time Saved", value: "8 hrs/week" },
      { metric: "Revenue Growth", value: "3x in Year 1" },
      { metric: "App Store Rating", value: "4.7/5" },
      { metric: "Monthly Active Users", value: "38,000" },
    ],
    tech: ["React", "Node.js", "MongoDB", "AWS MediaLive", "TensorFlow", "Redis", "Firebase FCM", "Razorpay"],
  },
  "retailmax-ecommerce": {
    title: "RetailMax: From 100 to 10,000 Daily Orders",
    industry: "E-Commerce",
    client: "RetailMax",
    duration: "5 months",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80",
    overview: "RetailMax is a fashion retailer that outgrew their WooCommerce setup. Their site was regularly crashing during sales events and page load times of 8+ seconds were hurting conversions.",
    challenge: "During their Diwali sale, the site crashed for 4 hours, costing ₹1.2 Cr in lost sales. They needed a platform that could handle 100x normal traffic while maintaining fast load times.",
    solution: "We rebuilt on a microservices architecture — Next.js storefront with ISR for product pages, a custom inventory microservice, Elasticsearch for product search, Redis for session management, and auto-scaling AWS infrastructure. AI product recommendations drove a significant lift in average order value.",
    results: [
      { metric: "Conversion Rate", value: "+47%" },
      { metric: "Page Load Time", value: "8s → 1.2s" },
      { metric: "Uptime", value: "Zero downtime in 12 months" },
      { metric: "Revenue", value: "+₹2.4 Cr in Year 1" },
      { metric: "Daily Orders", value: "100 → 10,000" },
      { metric: "Search Latency", value: "<100ms" },
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Elasticsearch", "AWS ECS", "Terraform", "Stripe/Razorpay"],
  },
};

const staticSlugs = ["medicare-patient-portal", "edulearn-lms-platform", "retailmax-ecommerce", "logitrack-fleet", "fintrack-trading", "govconnect-citizen"];

export async function generateStaticParams() {
  return staticSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = cases[slug];
  if (!c) return { title: "Case Study Not Found" };
  return {
    title: `${c.title} — Case Study`,
    description: c.overview,
    openGraph: { images: [c.image] },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = cases[slug];

  if (!c) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#0a0a08] mb-4">Case study not found</h1>
          <Link href="/case-studies" className="text-[#3d5a2e] hover:text-[#3d5a2e]">← Back to Case Studies</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="relative pt-24 pb-8 overflow-hidden">
        <AuroraBackground intensity="low" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-[13px] text-black/58 hover:text-[#0a0a08] transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> All Case Studies
          </Link>
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.09] text-[11px] font-semibold text-black/62">{c.industry}</span>
            <span className="px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.09] text-[11px] text-black/58">{c.client}</span>
            <span className="px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.09] text-[11px] text-black/58">Duration: {c.duration}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0a0a08] mb-4 leading-snug tracking-tight">{c.title}</h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-10 border border-black/[0.08]">
          <Image src={c.image} alt={c.title} fill className="object-cover" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
          {c.results.map(({ metric, value }) => (
            <div key={metric} className="p-4 rounded-xl bg-black/[0.03] border border-[#86a372]/15 text-center">
              <TrendingUp className="w-4 h-4 text-[#3d5a2e]/75 mx-auto mb-1" />
              <p className="text-[15px] font-bold text-[#0a0a08]">{value}</p>
              <p className="text-[10px] text-black/50">{metric}</p>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          {[
            { heading: "Overview", text: c.overview },
            { heading: "The Challenge", text: c.challenge },
            { heading: "Our Solution", text: c.solution },
          ].map(({ heading, text }) => (
            <div key={heading}>
              <h2 className="text-[17px] font-bold text-[#0a0a08] mb-3">{heading}</h2>
              <p className="text-[13px] text-black/60 leading-relaxed">{text}</p>
            </div>
          ))}

          <div>
            <h2 className="text-[17px] font-bold text-[#0a0a08] mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {c.tech.map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-lg bg-black/[0.04] border border-black/[0.09] text-[12px] text-black/58 hover:text-black/80 transition-colors">{t}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-black/[0.08] flex flex-wrap gap-4">
          <Link href="/contact" className="px-5 py-2.5 rounded-full bg-[#0a0a08] text-white text-[13px] font-semibold hover:bg-[#0a0a08]/90 transition-colors">
            Start a Similar Project
          </Link>
          <Link href="/portfolio" className="px-5 py-2.5 rounded-full border border-black/[0.18] text-[#0a0a08] text-[13px] font-medium hover:bg-black/[0.05] transition-colors">
            View Portfolio
          </Link>
        </div>
      </div>

      <CTA />
    </>
  );
}
