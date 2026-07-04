import type { Metadata } from "next";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import { Technologies } from "@/components/sections/Technologies";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Technologies",
  description: "Explore the 50+ technologies Livtech works with -- from React and Next.js to AWS, Python, Flutter, and TensorFlow.",
  keywords: ["React development", "Next.js agency", "Flutter app development", "AWS cloud services", "Python AI development", "Node.js backend"],
  alternates: { canonical: "https://livetech.in/technologies" },
  openGraph: {
    title: "Technologies | Livtech",
    description: "50+ technologies -- React, Next.js, Flutter, AWS, Python, TensorFlow, and more. We use the right stack for your project.",
    url: "https://livetech.in/technologies",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Livtech Tech Stack" }],
  },
  twitter: { card: "summary_large_image", title: "Technologies | Livtech", description: "50+ technologies -- React, Next.js, Flutter, AWS, Python, TensorFlow, and more." },
};

export default function TechnologiesPage() {
  return (
    <>
      <section className="relative pt-24 pb-8 overflow-hidden">
        <AuroraBackground intensity="low" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.09] mb-6">
            <span className="text-[11px] font-semibold text-black/62 uppercase tracking-wider">Tech Stack</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0a0a08] mb-4 tracking-tight">
            Our <span className="gradient-text-static">Technology Stack</span>
          </h1>
          <p className="text-[15px] text-black/60 max-w-xl mx-auto leading-relaxed">
            We work with 50+ cutting-edge technologies to deliver modern, scalable, and maintainable solutions.
          </p>
        </div>
      </section>
      <Technologies />
      <CTA />
    </>
  );
}

