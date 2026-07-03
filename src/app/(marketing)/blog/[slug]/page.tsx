import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTA } from "@/components/sections/CTA";
import { BlogPostContent } from "./_components/BlogPostContent";

const posts: Record<string, {
  title: string; category: string; author: string; date: string; readTime: string;
  image: string; content: string; tags: string[];
}> = {
  "future-web-development-2025": {
    title: "The Future of Web Development in 2025",
    category: "Technology",
    author: "Sumanth Varma",
    date: "Jun 15, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&q=80",
    tags: ["Next.js", "React", "AI", "Web Development"],
    content: `Web development is evolving faster than ever. In 2025, the intersection of AI, edge computing, and new frameworks is reshaping how we build for the web.

## The Rise of AI-Assisted Development

Tools like GitHub Copilot and Claude have become indispensable. Developers who leverage AI assistance are shipping 2-3x faster without sacrificing quality. The key is knowing when to trust AI output and when to push back.

## Edge-First Architecture

With platforms like Vercel's Edge Runtime and Cloudflare Workers, running code closer to users is now the default. Latency for global users has dropped dramatically with p95 response times under 50ms achievable worldwide.

## React Server Components at Scale

Next.js App Router with React Server Components has fundamentally changed data fetching patterns. Components that used to require client-side hydration can now be fully server-rendered, improving both performance and developer experience.

## What This Means for Businesses

Companies that invest in modern web infrastructure see real business results: higher conversion rates, better search rankings, and lower infrastructure costs. At Livetech, we have helped 45+ clients modernize their web presence and the ROI speaks for itself.`,
  },
  "mobile-app-success-strategies": {
    title: "Mobile App Success: From MVP to Scale",
    category: "Mobile",
    author: "Anika Reddy",
    date: "Jun 10, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
    tags: ["React Native", "Flutter", "Mobile", "Startup"],
    content: `Building a mobile app is the easy part. Getting it to scale is where most startups struggle.

## Start with a Real Problem

The best apps we have built at Livetech started with a specific, painful problem. Not "we need an app," but "our customers cannot track their orders in real-time and we are losing 15% to churn."

## Choose the Right Stack

React Native vs Flutter is a framework war, but the real answer depends on your team and timeline. Flutter gives you pixel-perfect control with a single codebase. React Native gives you access to the vast JavaScript ecosystem and faster hiring.

## MVP Does Not Mean Ugly

Minimum Viable Product does not mean a buggy, slow, ugly app. It means the smallest set of features that delivers real value. Your MVP should be polished and fast, just limited in scope.

## Plan for Scale from Day One

The hardest technical migrations are the ones where scaling was not considered. Design your API, database schema, and infrastructure to handle 100x your launch traffic.`,
  },
  "seo-technical-guide-2025": {
    title: "Technical SEO Guide for 2025",
    category: "SEO",
    author: "Vikram Naidu",
    date: "Jun 5, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=1200&q=80",
    tags: ["SEO", "Technical", "Core Web Vitals", "Schema.org"],
    content: `Search engines in 2025 are smarter than ever. Here is what actually moves the needle.

## Core Web Vitals Are Non-Negotiable

Google's ranking signals now heavily weight real user experience metrics. LCP under 2.5s, FID under 100ms, CLS under 0.1. These are not nice-to-haves, they are requirements for competitive rankings.

## Schema.org Structured Data

Rich snippets are getting richer. Products, services, FAQs, articles. Marking up your content with proper JSON-LD structured data gives search engines the context to understand and feature your content.

## AI-Generated Content and E-E-A-T

Google's E-E-A-T (Experience, Expertise, Authoritativeness, Trust) has become even more important as AI content floods the web. The differentiator is genuine first-person experience and demonstrable expertise.

## Technical Foundations

Crawlability, indexability, site speed, mobile-first indexing, internal linking. These fundamentals never go out of style. Get these right before chasing the latest SEO trends.`,
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Blog Post Not Found" };
  return {
    title: post.title,
    description: post.content.slice(0, 155),
    openGraph: { images: [post.image] },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();
  return (
    <>
      <BlogPostContent post={post} slug={slug} />
      <CTA />
    </>
  );
}
