import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industries } from "@/lib/constants/industries";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description: "Livtech serves healthcare, education, finance, retail, logistics, manufacturing, government, and more with specialized digital transformation solutions.",
  keywords: ["healthcare software India", "edtech development", "fintech solutions", "retail e-commerce development", "government IT solutions", "industry-specific software"],
  alternates: { canonical: "https://livetech.in/industries" },
  openGraph: {
    title: "Industries We Serve | Livtech",
    description: "Specialized digital solutions for healthcare, education, fintech, retail, logistics, and more.",
    url: "https://livetech.in/industries",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Livtech Industries" }],
  },
  twitter: { card: "summary_large_image", title: "Industries We Serve | Livtech", description: "Specialized digital solutions for healthcare, education, fintech, retail, logistics, and more." },
};

export default function IndustriesPage() {
  return (
    <>
      <section className="relative pt-24 pb-10 overflow-hidden">
        <AuroraBackground intensity="low" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.09] mb-6">
            <span className="text-[11px] font-semibold text-black/62 uppercase tracking-wider">Industries</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0a0a08] mb-5 tracking-tight">
            Built for Your <span className="gradient-text-static">Industry</span>
          </h1>
          <p className="text-[15px] text-black/60 max-w-2xl mx-auto leading-relaxed">
            16 industries. Hundreds of successful implementations. Deep domain expertise that translates into better digital solutions for your specific sector.
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map(({ slug, name, icon: Icon, description, solutions }) => (
              <Link key={slug} href={`/industries/${slug}`}>
                <div className="p-5 rounded-2xl bg-black/[0.02] border border-black/[0.07] hover:border-black/[0.12] hover:bg-black/[0.03] transition-all duration-300 group h-full">
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-black/[0.04] border border-black/[0.08] mb-4">
                    <Icon className="w-4 h-4 text-[#3d5a2e]/80" />
                  </div>
                  <h3 className="text-[13px] font-semibold text-black/90 mb-1.5 group-hover:text-[#0a0a08] transition-colors">{name}</h3>
                  <p className="text-[11px] text-black/50 mb-3 leading-relaxed">{description}</p>
                  <ul className="space-y-1 mb-3">
                    {solutions.slice(0, 2).map((s) => (
                      <li key={s} className="text-[11px] text-black/62 flex items-center gap-1.5">
                        <div className="w-1 h-1 rounded-full bg-[#a8c490]/35 flex-shrink-0" />{s}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-1 text-[11px] text-[#3d5a2e]/55 group-hover:text-[#3d5a2e] transition-colors">
                    Explore solutions <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
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

