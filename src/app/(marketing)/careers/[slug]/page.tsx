import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MapPin, Clock, Briefcase, CheckCircle2 } from "lucide-react";
import { AuroraBackground } from "@/components/effects/AuroraBackground";

const jobs: Record<string, {
  title: string; department: string; location: string; type: string;
  description: string; responsibilities: string[]; requirements: string[];
  niceToHave: string[]; benefits: string[];
}> = {
  "senior-fullstack-developer": {
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    location: "Hyderabad / Remote",
    type: "Full-Time",
    description: "Join our engineering team to build world-class web applications for clients across 16 industries. You'll be working with the latest technologies including Next.js, React, TypeScript, and PostgreSQL.",
    responsibilities: [
      "Architect and develop scalable full-stack web applications",
      "Lead technical decisions and code reviews",
      "Mentor junior developers and establish best practices",
      "Collaborate with designers and project managers to deliver on time",
      "Optimize application performance and ensure security",
    ],
    requirements: [
      "5+ years of full-stack development experience",
      "Expert-level React and TypeScript skills",
      "Strong Node.js/Express or Next.js API routes experience",
      "PostgreSQL or MySQL proficiency",
      "Experience with AWS or GCP",
    ],
    niceToHave: [
      "Experience with React Native or Flutter",
      "Familiarity with DevOps / CI-CD pipelines",
      "Open-source contributions",
      "Previous startup or agency experience",
    ],
    benefits: ["Competitive salary + performance bonus", "Flexible remote work", "Health insurance", "Learning budget ₹50,000/year", "25 days paid leave"],
  },
  "ui-ux-designer": {
    title: "UI/UX Designer",
    department: "Design",
    location: "Hyderabad / Remote",
    type: "Full-Time",
    description: "Create stunning, conversion-focused digital experiences for our diverse client base. You'll own the end-to-end design process from user research to final handoff.",
    responsibilities: [
      "Lead UX research and translate insights into wireframes and prototypes",
      "Design pixel-perfect UI in Figma",
      "Create and maintain design systems",
      "Collaborate with developers during implementation",
      "Conduct usability testing and iterate based on feedback",
    ],
    requirements: [
      "3+ years of product/UI-UX design experience",
      "Expert Figma proficiency",
      "Strong portfolio showing shipped products",
      "Understanding of web/mobile design constraints",
      "Experience with design systems",
    ],
    niceToHave: [
      "Basic HTML/CSS knowledge",
      "Motion design / Framer experience",
      "Experience with user testing tools",
      "B2B SaaS design background",
    ],
    benefits: ["Competitive salary", "Design tool budget", "Flexible hours", "Health insurance", "Work from home"],
  },
  "digital-marketing-specialist": {
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Hyderabad",
    type: "Full-Time",
    description: "Drive growth for Livetech.in and our clients through data-driven digital marketing campaigns across SEO, paid ads, social media, and content.",
    responsibilities: [
      "Plan and execute multi-channel digital marketing campaigns",
      "Manage Google Ads, Meta Ads, and LinkedIn campaigns",
      "Drive SEO strategy and content marketing",
      "Analyze campaign performance and optimize ROI",
      "Create monthly reports for clients and leadership",
    ],
    requirements: [
      "3+ years digital marketing experience",
      "Google Ads and Meta Ads certified",
      "Strong SEO knowledge (technical + content)",
      "Analytics proficiency (GA4, Search Console)",
      "B2B marketing experience preferred",
    ],
    niceToHave: [
      "Experience marketing SaaS or tech services",
      "Copywriting and content creation skills",
      "Video marketing knowledge",
      "Marketing automation experience",
    ],
    benefits: ["Competitive salary", "Performance bonuses", "Health insurance", "Flexible hours", "Growth opportunities"],
  },
  "flutter-developer": {
    title: "Flutter Developer",
    department: "Engineering",
    location: "Remote",
    type: "Contract",
    description: "Build beautiful, cross-platform mobile apps for our clients in healthcare, education, e-commerce, and more using Flutter and Dart.",
    responsibilities: [
      "Develop and maintain Flutter mobile apps for iOS and Android",
      "Integrate REST APIs and third-party services",
      "Implement complex UI with smooth animations",
      "Write unit and widget tests",
      "Collaborate with backend developers",
    ],
    requirements: [
      "3+ years Flutter/Dart experience",
      "Published apps on App Store or Play Store",
      "Strong state management knowledge (Riverpod/Bloc/Provider)",
      "REST API integration experience",
      "Clean architecture principles",
    ],
    niceToHave: [
      "React Native experience",
      "Firebase integration",
      "Native iOS/Android development knowledge",
      "CI/CD for mobile (Fastlane, Codemagic)",
    ],
    benefits: ["Competitive contract rate", "100% remote", "Flexible hours", "Long-term engagement opportunity"],
  },
  "devops-engineer": {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Hyderabad / Remote",
    type: "Full-Time",
    description: "Build and maintain the cloud infrastructure that powers 200+ client applications. You'll work with AWS, Docker, Kubernetes, and modern CI/CD pipelines.",
    responsibilities: [
      "Design and manage AWS cloud infrastructure",
      "Build and maintain CI/CD pipelines",
      "Implement monitoring, alerting, and observability",
      "Manage Kubernetes clusters and containerized workloads",
      "Ensure 99.9% uptime SLA for client applications",
    ],
    requirements: [
      "4+ years DevOps/SRE experience",
      "AWS Solutions Architect certification",
      "Docker and Kubernetes proficiency",
      "CI/CD experience (GitHub Actions, Jenkins)",
      "Infrastructure as Code (Terraform or CDK)",
    ],
    niceToHave: [
      "GCP or Azure experience",
      "Security certifications",
      "Database administration",
      "Cost optimization experience",
    ],
    benefits: ["Competitive salary", "AWS certification sponsored", "Health insurance", "Flexible remote", "25 days leave"],
  },
};

export async function generateStaticParams() {
  return Object.keys(jobs).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const job = jobs[slug];
  if (!job) return { title: "Job Not Found" };
  return {
    title: `${job.title} — Careers at Livetech.in`,
    description: job.description,
  };
}

export default async function CareerDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = jobs[slug];

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#0a0a08] mb-4">Job not found</h1>
          <Link href="/careers" className="text-[#3d5a2e] hover:text-[#3d5a2e]">← Back to Careers</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="relative pt-24 pb-10 overflow-hidden">
        <AuroraBackground intensity="low" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/careers" className="inline-flex items-center gap-2 text-[13px] text-black/58 hover:text-[#0a0a08] transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> All Positions
          </Link>
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.09] text-[11px] font-semibold text-black/62">
              <Briefcase className="w-3 h-3" />{job.department}
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.09] text-[11px] text-black/58">
              <MapPin className="w-3 h-3" />{job.location}
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.09] text-[11px] text-black/58">
              <Clock className="w-3 h-3" />{job.type}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0a0a08] mb-4 tracking-tight">{job.title}</h1>
          <p className="text-[14px] text-black/60 leading-relaxed">{job.description}</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {[
              { heading: "Responsibilities", items: job.responsibilities },
              { heading: "Requirements", items: job.requirements },
              { heading: "Nice to Have", items: job.niceToHave },
            ].map(({ heading, items }) => (
              <div key={heading}>
                <h2 className="text-[15px] font-bold text-[#0a0a08] mb-4">{heading}</h2>
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[13px] text-black/60">
                      <CheckCircle2 className="w-4 h-4 text-[#3d5a2e]/80 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="space-y-5">
            <div className="p-5 rounded-2xl bg-black/[0.02] border border-black/[0.07]">
              <h3 className="text-[12px] font-semibold text-[#0a0a08] mb-4">Benefits</h3>
              <ul className="space-y-2">
                {job.benefits.map((b) => (
                  <li key={b} className="text-[11px] text-black/58 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#a8c490]/50 flex-shrink-0" />{b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-5 rounded-2xl bg-[#86a372]/8 border border-[#86a372]/10">
              <h3 className="text-[12px] font-semibold text-[#0a0a08] mb-2">Ready to Apply?</h3>
              <p className="text-[11px] text-black/58 mb-4">Send your resume and portfolio to our careers team.</p>
              <a
                href="mailto:careers@livetech.in"
                className="block w-full text-center py-2.5 px-4 rounded-full bg-[#0a0a08] text-white text-[12px] font-semibold hover:bg-[#0a0a08]/90 transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
