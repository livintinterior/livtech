import type { Metadata } from "next";
import { BlogContent } from "./_components/BlogContent";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read the latest insights, tutorials, and industry news from the Livtech team on web development, mobile apps, AI, cloud, and digital transformation.",
  keywords: ["web development blog", "tech insights India", "software development tutorials", "AI blog", "digital transformation articles"],
  alternates: { canonical: "https://livetech.in/blog" },
  openGraph: {
    title: "Blog | Livtech",
    description: "Tech insights, tutorials, and industry news from the Livtech team.",
    url: "https://livetech.in/blog",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Livtech Blog" }],
  },
  twitter: { card: "summary_large_image", title: "Blog | Livtech", description: "Tech insights, tutorials, and industry news from the Livtech team." },
};

export default function BlogPage() {
  return (
    <>
      <BlogContent />
      <CTA />
    </>
  );
}
