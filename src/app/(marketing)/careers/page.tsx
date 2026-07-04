import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, ArrowRight, Briefcase } from "lucide-react";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the Livtech team. We are hiring passionate technologists, designers, and marketers. Build the future with us in Hyderabad and remote.",
  keywords: ["jobs at Livtech", "software developer jobs Hyderabad", "IT careers India", "tech jobs remote India", "developer hiring Hyderabad"],
  alternates: { canonical: "https://livetech.in/careers" },
  openGraph: {
    title: "Careers | Livtech",
    description: "Join Livtech -- we are hiring developers, designers, and marketers. Work on cutting-edge digital products.",
    url: "https://livetech.in/careers",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Careers at Livtech" }],
  },
  twitter: { card: "summary_large_image", title: "Careers | Livtech", description: "Join Livtech -- we are hiring developers, designers, and marketers. Work on cutting-edge digital products." },
};

const jobs = [
  { id: "1", title: "Senior Full-Stack Developer",    department: "Engineering",     location: "Hyderabad / Remote", type: "Full-Time", slug: "senior-fullstack-developer" },
  { id: "2", title: "UI/UX Designer",                department: "Design",           location: "Hyderabad / Remote", type: "Full-Time", slug: "ui-ux-designer" },
  { id: "3", title: "Digital Marketing Specialist",  department: "Marketing",        location: "Hyderabad",          type: "Full-Time", slug: "digital-marketing-specialist" },
  { id: "4", title: "Flutter Developer",             department: "Engineering",     location: "Remote",             type: "Contract",  slug: "flutter-developer" },
  { id: "5", title: "DevOps Engineer",               department: "Infrastructure",  location: "Hyderabad / Remote", type: "Full-Time", slug: "devops-engineer" },
];

export default function CareersPage() {
  return (
    <>
      <section className="relative pt-24 pb-12 overflow-hidden">
        <AuroraBackground intensity="low" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.09] mb-6">
            <span className="text-[11px] font-semibold text-black/62 uppercase tracking-wider">We&apos;re Hiring</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0a0a08] mb-5 tracking-tight">
            Build the Future <span className="gradient-text-static">With Us</span>
          </h1>
          <p className="text-[15px] text-black/60 max-w-xl mx-auto leading-relaxed">
            Join a team of passionate technologists working on impactful projects for clients across 16 industries worldwide.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[15px] font-semibold text-black/60 mb-6">Open Positions ({jobs.length})</h2>
          <div className="space-y-3">
            {jobs.map((job) => (
              <Link key={job.id} href={`/careers/${job.slug}`}>
                <div className="flex items-center justify-between p-5 rounded-2xl bg-black/[0.02] border border-black/[0.07] hover:border-black/[0.12] hover:bg-black/[0.03] transition-all duration-300 group">
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-xl bg-black/[0.04] border border-black/[0.08] flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-4 h-4 text-[#3d5a2e]/75" />
                    </div>
                    <div>
                      <h3 className="text-[13px] font-semibold text-black/90 group-hover:text-[#0a0a08] transition-colors">{job.title}</h3>
                      <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                        <span className="text-[11px] text-black/50">{job.department}</span>
                        <span className="text-black/52">·</span>
                        <span className="flex items-center gap-1 text-[11px] text-black/50"><MapPin className="w-3 h-3" />{job.location}</span>
                        <span className="text-black/52">·</span>
                        <span className="flex items-center gap-1 text-[11px] text-black/50"><Clock className="w-3 h-3" />{job.type}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-medium border ${job.type === "Full-Time" ? "border-[#3d5a2e]/20 text-[#3d5a2e]/75 bg-[#86a372]/5" : "border-[#c4ba88]/20 text-[#c4ba88]/60 bg-[#c4ba88]/5"}`}>
                      {job.type}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-black/60 group-hover:text-[#0a0a08] group-hover:translate-x-0.5 transition-all" />
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

