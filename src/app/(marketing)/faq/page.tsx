import type { Metadata } from "next";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Livtech's services, process, pricing, timelines, and technology stack. Get answers before you reach out.",
  keywords: ["web development FAQ", "software company questions", "IT services FAQ India", "how much does a website cost", "how long to build an app"],
  alternates: { canonical: "https://livetech.in/faq" },
  openGraph: {
    title: "FAQ | Livtech",
    description: "Answers to the most common questions about working with Livtech -- process, pricing, timelines, and tech.",
    url: "https://livetech.in/faq",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Livtech FAQ" }],
  },
  twitter: { card: "summary_large_image", title: "FAQ | Livtech", description: "Answers to the most common questions about working with Livtech -- process, pricing, timelines, and tech." },
};

export default function FAQPage() {
  return (
    <>
      <section className="relative pt-24 pb-8 overflow-hidden">
        <AuroraBackground intensity="low" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.09] mb-6">
            <span className="text-[11px] font-semibold text-black/62 uppercase tracking-wider">FAQ</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0a0a08] mb-4 tracking-tight">
            Frequently Asked <span className="gradient-text-static">Questions</span>
          </h1>
          <p className="text-[15px] text-black/60 max-w-xl mx-auto leading-relaxed">
            Everything you want to know before starting your project with us.
          </p>
        </div>
      </section>
      <FAQ />
      <CTA />
    </>
  );
}

