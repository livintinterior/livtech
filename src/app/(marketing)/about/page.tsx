import type { Metadata } from "next";
import { CTA } from "@/components/sections/CTA";
import { AboutContent } from "./_components/AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Livtech — a modern technology company delivering complete digital transformation solutions. Our story, mission, team, and values.",
  keywords: ["about Livtech", "technology company Hyderabad", "software company India", "IT company founders", "digital transformation team"],
  alternates: { canonical: "https://livetech.in/about" },
  openGraph: {
    title: "About Us | Livtech",
    description: "Meet the team behind Livtech. 2+ years of building digital products for 45+ clients across India and beyond.",
    url: "https://livetech.in/about",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "About Livtech" }],
  },
  twitter: { card: "summary_large_image", title: "About Us | Livtech", description: "Meet the team behind Livtech. 2+ years of building digital products for 45+ clients across India and beyond." },
};

export default function AboutPage() {
  return (
    <>
      <AboutContent />
      <CTA />
    </>
  );
}
