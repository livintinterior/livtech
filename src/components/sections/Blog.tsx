"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/constants/animations";

const blogPosts = [
  {
    slug: "top-web-development-trends-2025",
    title: "Top Web Development Trends Shaping 2025",
    excerpt: "From AI-powered interfaces to edge computing, discover the technologies redefining how we build for the web.",
    category: "Web Development",
    author: "Livetech Team",
    readTime: 8,
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
  },
  {
    slug: "flutter-vs-react-native-2025",
    title: "Flutter vs React Native: Which to Choose in 2025?",
    excerpt: "A comprehensive comparison of the two leading cross-platform mobile frameworks to help you make the right technology decision.",
    category: "Mobile Dev",
    author: "Livetech Team",
    readTime: 12,
    thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
  },
  {
    slug: "ai-chatbots-business-automation",
    title: "How AI Chatbots Are Transforming Business Automation",
    excerpt: "Real-world examples of how businesses are using GPT-powered chatbots to reduce costs and improve customer experience.",
    category: "AI Solutions",
    author: "Livetech Team",
    readTime: 6,
    thumbnail: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
  },
];

export function Blog() {
  return (
    <section className="relative py-8 lg:py-12">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <SectionHeading
            label="Blog"
            title="Insights & "
            highlight="Resources"
            subtitle="Stay ahead with our latest thinking on technology, design, and digital transformation."
            align="left"
          />
          <Link
            href="/blog"
            className="hidden sm:flex items-center gap-1.5 text-[13px] font-medium text-[#3d5a2e]/80 hover:text-[#3d5a2e] transition-colors flex-shrink-0"
          >
            View all posts <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {blogPosts.map((post) => (
            <motion.div key={post.slug} variants={fadeUp}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="rounded-2xl overflow-hidden bg-black/[0.02] border border-black/[0.07] hover:border-black/[0.12] transition-all duration-300 h-full">
                  <div className="relative h-36 overflow-hidden">
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-[10px] font-medium text-white/90">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-[13px] font-semibold text-black/90 mb-2 group-hover:text-[#0a0a08] transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-[12px] text-black/55 mb-4 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-3 text-[11px] text-black/45">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime} min read
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-[#3d5a2e]/80 hover:text-[#3d5a2e] transition-colors"
          >
            View all posts <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
