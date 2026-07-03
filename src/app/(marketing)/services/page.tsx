import type { Metadata } from "next";
import { ServicesContent } from "./_components/ServicesContent";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Livtech's complete range of digital services -- web development, mobile apps, AI solutions, cloud, cybersecurity, SEO, branding, and more.",
  keywords: ["web development Hyderabad", "mobile app development India", "AI solutions", "cloud services India", "SEO agency", "custom software development"],
  alternates: { canonical: "https://livetech.in/services" },
  openGraph: {
    title: "Our Services | Livtech",
    description: "From web apps to AI and cloud -- full-stack digital services for startups and enterprises across India.",
    url: "https://livetech.in/services",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Livtech Services" }],
  },
  twitter: { card: "summary_large_image", title: "Our Services | Livtech", description: "From web apps to AI and cloud -- full-stack digital services for startups and enterprises across India." },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesContent />
      <CTA />
    </>
  );
}
