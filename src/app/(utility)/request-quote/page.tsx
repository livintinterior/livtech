import type { Metadata } from "next";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import { QuoteFormSection } from "./QuoteFormSection";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Request a Quote",
  description: "Get a detailed project quote from Livetech.in. Tell us about your project and we'll provide a comprehensive proposal within 24 hours.",
};

const inclusions = [
  "Detailed project scope and timeline",
  "Technology recommendations",
  "Transparent pricing breakdown",
  "Team and expertise overview",
  "Case studies from similar projects",
  "No-obligation proposal",
];

export default function RequestQuotePage() {
  return (
    <>
      <section className="relative pt-24 pb-10 overflow-hidden">
        <AuroraBackground intensity="low" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="lg:pt-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.09] mb-6">
                <span className="text-[11px] font-semibold text-black/62 uppercase tracking-wider">Request Quote</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#0a0a08] mb-4 leading-tight tracking-tight">
                Get Your<br />
                <span className="gradient-text-static">Project Quote</span>
              </h1>
              <p className="text-[15px] text-black/60 mb-8 leading-relaxed">
                Fill out the form and we'll provide a detailed, no-obligation quote within 24 hours.
                Our proposals are thorough, transparent, and tailored to your specific requirements.
              </p>

              <div className="p-5 rounded-2xl bg-black/[0.02] border border-black/[0.07]">
                <h3 className="text-[13px] font-semibold text-[#0a0a08] mb-4">What&apos;s included in your quote:</h3>
                <ul className="space-y-2.5">
                  {inclusions.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-[12px] text-black/60">
                      <CheckCircle className="w-4 h-4 text-[#3d5a2e]/80 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <QuoteFormSection />
          </div>
        </div>
      </section>
    </>
  );
}
