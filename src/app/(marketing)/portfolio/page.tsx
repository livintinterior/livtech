import type { Metadata } from "next";
import { PortfolioContent } from "./_components/PortfolioContent";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore Livtech's portfolio of 50+ projects across healthcare, education, fintech, e-commerce, logistics, and more industries.",
  keywords: ["software portfolio India", "web development projects", "app development portfolio", "IT company work Hyderabad", "digital products built"],
  alternates: { canonical: "https://livetech.in/portfolio" },
  openGraph: {
    title: "Portfolio | Livtech",
    description: "50+ projects delivered across 10+ industries. See the digital products we have built.",
    url: "https://livetech.in/portfolio",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Livtech Portfolio" }],
  },
  twitter: { card: "summary_large_image", title: "Portfolio | Livtech", description: "50+ projects delivered across 10+ industries. See the digital products we have built." },
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioContent />
      <CTA />
    </>
  );
}
