"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { AuroraBackground } from "@/components/effects/AuroraBackground";

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <AuroraBackground intensity="medium" />
      <div className="relative z-10 max-w-xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-[120px] sm:text-[180px] font-black leading-none gradient-text-static mb-4 select-none">
            404
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-[#0a0a08] mb-4">
            Page Not Found
          </h1>
          <p className="text-black/60 mb-10 leading-relaxed text-[15px]">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 px-6 py-2.5 text-[13px] font-semibold text-white bg-[#0a0a08] rounded-full hover:bg-[#0a0a08]/85 transition-all"
            >
              <Home className="w-4 h-4" /> Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="flex items-center justify-center gap-2 px-6 py-2.5 text-[13px] font-medium text-black/70 rounded-full border border-black/[0.15] hover:bg-black/[0.04] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Go Back
            </button>
          </div>

          <p className="text-[13px] text-black/50">
            Looking for something specific?{" "}
            <Link href="/contact" className="text-[#3d5a2e]/80 hover:text-[#3d5a2e] transition-colors">
              Contact us
            </Link>{" "}
            and we&apos;ll help you find it.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
