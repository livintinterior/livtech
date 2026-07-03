"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Home } from "lucide-react";
import { AuroraBackground } from "@/components/effects/AuroraBackground";

export default function ThankYouPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AuroraBackground intensity="medium" />
      <div className="relative z-10 max-w-lg mx-auto px-4 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="w-16 h-16 rounded-2xl bg-[#86a372]/12 border border-[#3d5a2e]/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-[#3d5a2e]" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0a0a08] mb-4 tracking-tight">
            Thank You!
          </h1>
          <p className="text-[15px] text-black/60 mb-8 leading-relaxed">
            Your message has been received. Our team will review it and get back to you
            within 24 hours (usually much faster!).
          </p>

          <div className="p-5 rounded-2xl bg-black/[0.02] border border-black/[0.07] mb-8 text-left">
            <h3 className="text-[13px] font-semibold text-[#0a0a08] mb-3">What happens next?</h3>
            <ol className="space-y-2">
              {[
                "We review your inquiry and assign the right specialist",
                "You'll receive an email confirmation shortly",
                "Our team will reach out within 24 hours to discuss your project",
                "We schedule a free consultation call at your convenience",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-[12px] text-black/60">
                  <span className="w-5 h-5 rounded-full bg-black/[0.06] text-black/62 text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="flex items-center justify-center gap-2 px-6 py-2.5 text-[13px] font-medium text-[#0a0a08] rounded-full border border-black/[0.15] hover:bg-black/[0.05] transition-colors">
              <Home className="w-4 h-4" /> Back to Home
            </Link>
            <Link href="/portfolio" className="flex items-center justify-center gap-2 px-6 py-2.5 text-[13px] font-semibold text-white rounded-full bg-[#0a0a08] hover:bg-[#0a0a08]/85 transition-colors">
              View Our Work <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
