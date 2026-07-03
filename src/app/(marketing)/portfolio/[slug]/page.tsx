import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import { CTA } from "@/components/sections/CTA";

const projects: Record<string, {
  title: string; client: string; category: string; industry: string;
  image: string; description: string; challenge: string; solution: string;
  results: string[]; tech: string[];
}> = {
  "medicare-patient-portal": {
    title: "MediCare Patient Portal",
    client: "MediCare Solutions",
    category: "Web App",
    industry: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&q=80",
    description: "A comprehensive patient management portal enabling online appointments, medical records access, and telemedicine consultations for a 500-bed hospital network.",
    challenge: "The hospital was managing appointments manually with a 3-day wait for scheduling and 40% no-show rates. Patient records were siloed across departments.",
    solution: "We built a unified portal with real-time appointment booking, automated SMS reminders, video consultation integration, and a shared EHR system across all departments.",
    results: ["70% reduction in scheduling time", "No-show rate dropped from 40% to 12%", "Patient satisfaction score: 4.8/5", "3,000+ daily active users"],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Twilio", "Daily.co", "AWS"],
  },
  "edulearn-platform": {
    title: "EduLearn LMS Platform",
    client: "EduTech Pro",
    category: "SaaS Platform",
    industry: "Education",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&q=80",
    description: "A full-featured learning management system serving 50,000+ students with live classes, assignments, progress tracking, and AI-powered recommendations.",
    challenge: "The client had a fragmented mix of Zoom, Google Classroom, and spreadsheets that created a poor experience for students and teachers alike.",
    solution: "We built a unified LMS with live streaming, asynchronous video lessons, interactive assignments, automatic grading, and an AI recommendation engine that suggests the next course.",
    results: ["50,000+ students onboarded in 6 months", "Course completion rate: 78% (industry avg: 34%)", "Teacher time saved: 8 hrs/week", "Revenue grew 3x in Year 1"],
    tech: ["React", "Node.js", "MongoDB", "AWS MediaLive", "TensorFlow", "Redis"],
  },
  "retailmax-ecommerce": {
    title: "RetailMax E-Commerce Platform",
    client: "RetailMax",
    category: "E-Commerce",
    industry: "Retail",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80",
    description: "A high-performance e-commerce platform handling 10,000+ daily orders with real-time inventory, multi-warehouse fulfillment, and personalized recommendations.",
    challenge: "The client's WooCommerce site was crashing during sales events and couldn't handle their growth from 100 to 10,000 daily orders.",
    solution: "We rebuilt the platform on a microservices architecture with Next.js storefront, custom inventory management, AI-driven product recommendations, and auto-scaling infrastructure.",
    results: ["Conversion rate increased 47%", "Page load time: 1.2s (was 8s)", "Zero downtime in 12 months", "Revenue +₹2.4 Cr in Year 1"],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Elasticsearch", "AWS"],
  },
};

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Portfolio`,
    description: project.description,
    openGraph: { images: [project.image] },
  };
}

export default async function PortfolioProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#0a0a08] mb-4">Project not found</h1>
          <Link href="/portfolio" className="text-[#3d5a2e] hover:text-[#3d5a2e]">← Back to Portfolio</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="relative pt-24 pb-8 overflow-hidden">
        <AuroraBackground intensity="low" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-[13px] text-black/58 hover:text-[#0a0a08] transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.09] text-[11px] font-semibold text-black/62">{project.category}</span>
            <span className="px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.09] text-[11px] text-black/58">{project.industry}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0a0a08] mb-3 tracking-tight">{project.title}</h1>
          <p className="text-[14px] text-black/60">{project.client}</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="relative w-full h-[450px] rounded-2xl overflow-hidden mb-12 border border-black/[0.08]">
          <Image src={project.image} alt={project.title} fill className="object-cover" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-8">
            {[
              { heading: "About the Project", text: project.description },
              { heading: "The Challenge", text: project.challenge },
              { heading: "Our Solution", text: project.solution },
            ].map(({ heading, text }) => (
              <div key={heading}>
                <h2 className="text-[17px] font-bold text-[#0a0a08] mb-3">{heading}</h2>
                <p className="text-[13px] text-black/60 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <div className="space-y-5">
            <div className="p-5 rounded-2xl bg-black/[0.02] border border-black/[0.07]">
              <h3 className="text-[13px] font-semibold text-[#0a0a08] mb-4">Results Achieved</h3>
              <ul className="space-y-2.5">
                {project.results.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-[12px] text-black/60">
                    <CheckCircle2 className="w-4 h-4 text-[#3d5a2e]/80 flex-shrink-0 mt-0.5" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-5 rounded-2xl bg-black/[0.02] border border-black/[0.07]">
              <h3 className="text-[13px] font-semibold text-[#0a0a08] mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-1 rounded-md bg-black/[0.04] border border-black/[0.09] text-[11px] text-black/58">{t}</span>
                ))}
              </div>
            </div>
            <Link href="/contact" className="block w-full text-center py-3 px-4 rounded-full bg-[#0a0a08] text-white text-[13px] font-semibold hover:bg-[#0a0a08]/90 transition-colors">
              Start a Similar Project
            </Link>
          </div>
        </div>
      </div>

      <CTA />
    </>
  );
}
