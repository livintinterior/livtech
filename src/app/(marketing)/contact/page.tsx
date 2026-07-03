import type { Metadata } from "next";
import { ContactContent } from "./_components/ContactContent";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Livtech. Contact us for web development, mobile apps, digital marketing, or any technology service. We respond within 24 hours.",
  keywords: ["contact Livtech", "hire software developers Hyderabad", "get a quote web development", "IT company contact India"],
  alternates: { canonical: "https://livetech.in/contact" },
  openGraph: {
    title: "Contact Us | Livtech",
    description: "Reach out to Livtech for web development, mobile apps, AI, and digital services. Free consultation available.",
    url: "https://livetech.in/contact",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Contact Livtech" }],
  },
  twitter: { card: "summary_large_image", title: "Contact Us | Livtech", description: "Reach out to Livtech for web development, mobile apps, AI, and digital services. Free consultation available." },
};

export default function ContactPage() {
  return (
    <>
      <ContactContent />
      <CTA />
    </>
  );
}
