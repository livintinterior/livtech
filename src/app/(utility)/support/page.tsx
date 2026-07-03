import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle, Phone, Clock, BookOpen, FileQuestion, Headphones, Zap } from "lucide-react";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import { siteConfig } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Support Center",
  description: "Get help from Livetech.in's support team. We're available 24/7 for critical issues and during business hours for general queries.",
};

const channels = [
  { icon: Mail,        title: "Email Support",     desc: "For general queries and non-urgent issues. Response within 4 business hours.", action: `mailto:${siteConfig.email.support}`, cta: siteConfig.email.support },
  { icon: MessageCircle, title: "WhatsApp",         desc: "Quick questions and project updates. Available Mon–Sat 9AM–7PM.",             action: `https://wa.me/${siteConfig.whatsapp}`, cta: "Chat on WhatsApp" },
  { icon: Phone,       title: "Phone",              desc: "For urgent matters. Business hours Mon–Sat 9AM–6PM IST.",                     action: `tel:${siteConfig.phone}`, cta: siteConfig.phone },
  { icon: Headphones,  title: "Priority Support",   desc: "24/7 critical incident support for Enterprise clients. SLA: 1-hour response.", action: "/contact", cta: "Contact Us" },
];

const resources = [
  { icon: FileQuestion, title: "FAQ",             desc: "Answers to the most common questions about our services and process.", href: "/faq" },
  { icon: BookOpen,    title: "Blog & Guides",    desc: "Technical guides, best practices, and industry insights from our team.",  href: "/blog" },
  { icon: Zap,         title: "Service Status",   desc: "Check the uptime and incident status of Livetech-managed infrastructure.", href: "#" },
];

export default function SupportPage() {
  return (
    <>
      <section className="relative pt-24 pb-10 overflow-hidden">
        <AuroraBackground intensity="low" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.09] mb-6">
            <span className="text-[11px] font-semibold text-black/62 uppercase tracking-wider">Support Center</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0a0a08] mb-4 tracking-tight">
            How Can We <span className="gradient-text-static">Help?</span>
          </h1>
          <p className="text-[15px] text-black/60 max-w-xl mx-auto leading-relaxed">
            Our support team is here to ensure your project runs smoothly. Choose the channel that works best for you.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-2 h-2 rounded-full bg-[#7ec87a] animate-pulse" />
            <span className="text-[12px] text-black/50">All systems operational · {siteConfig.hours}</span>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[15px] font-bold text-[#0a0a08] mb-6">Contact Channels</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {channels.map(({ icon: Icon, title, desc, action, cta }) => (
              <a key={title} href={action} className="group block p-5 rounded-2xl bg-black/[0.02] border border-black/[0.07] hover:border-black/[0.12] hover:bg-black/[0.03] transition-all duration-300">
                <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-black/[0.04] border border-black/[0.09] mb-3">
                  <Icon className="w-4 h-4 text-[#3d5a2e]/75" />
                </div>
                <h3 className="text-[13px] font-semibold text-[#0a0a08] mb-1 group-hover:text-[#0a0a08] transition-colors">{title}</h3>
                <p className="text-[11px] text-black/50 mb-3 leading-relaxed">{desc}</p>
                <span className="text-[12px] font-medium text-[#3d5a2e]/55 group-hover:text-[#3d5a2e] transition-colors">{cta} →</span>
              </a>
            ))}
          </div>

          <h2 className="text-[15px] font-bold text-[#0a0a08] mb-6">Self-Service Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {resources.map(({ icon: Icon, title, desc, href }) => (
              <Link key={title} href={href} className="group block p-5 rounded-2xl bg-black/[0.02] border border-black/[0.07] hover:border-black/[0.12] hover:bg-black/[0.03] transition-all duration-300">
                <Icon className="w-5 h-5 text-[#3d5a2e]/75 mb-3" />
                <h3 className="text-[12px] font-semibold text-[#0a0a08] mb-1 group-hover:text-[#0a0a08] transition-colors">{title}</h3>
                <p className="text-[11px] text-black/50 leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-[#86a372]/8 border border-[#86a372]/10 text-center">
            <Clock className="w-5 h-5 text-[#3d5a2e]/75 mx-auto mb-2" />
            <h3 className="text-[14px] font-bold text-[#0a0a08] mb-1">Business Hours</h3>
            <p className="text-[13px] text-black/60">{siteConfig.hours} (IST)</p>
            <p className="text-[11px] text-black/45 mt-1">Emergency support 24/7 for Enterprise SLA clients</p>
          </div>
        </div>
      </section>
    </>
  );
}
