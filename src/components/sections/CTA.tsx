"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MessageSquare } from "lucide-react";
import { viewportConfig } from "@/lib/constants/animations";

export function CTA() {
  return (
    <section className="relative py-8 lg:py-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[#86a372]/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-[#5a4e28]/6 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.7 }}
          className="relative px-6 py-10 sm:px-10 sm:py-12 rounded-3xl bg-black/[0.02] border border-black/[0.09]"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.10] mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#a8c490] animate-pulse" />
            <span className="text-[11px] font-semibold text-black/50 uppercase tracking-wider">
              Let's Build Something Great
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[2.3rem] font-bold text-[#0a0a08] mb-4 leading-tight tracking-tight">
            Ready to Transform Your
            <br />
            <span className="gradient-text-static">Digital Presence?</span>
          </h2>

          <p className="text-[13.5px] text-black/60 mb-7 max-w-xl mx-auto leading-relaxed">
            Join 45+ businesses that have partnered with Livetech.in to build powerful digital
            solutions. Let's discuss your project today — consultation is free.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/book-consultation"
              className="inline-flex items-center gap-2.5 px-6 py-3 text-[13px] font-semibold text-white bg-[#0a0a08] rounded-full hover:bg-[#0a0a08]/85 transition-all duration-200 shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              Book Free Consultation
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-6 py-3 text-[13px] font-medium text-black/70 rounded-full border border-black/[0.15] hover:bg-black/[0.04] hover:border-black/[0.25] transition-all duration-200"
            >
              <MessageSquare className="w-4 h-4" />
              Send a Message
            </Link>
          </div>

          <p className="mt-6 text-[11px] text-black/62">
            No commitment required. We'll get back to you within 24 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
