import type { Metadata } from "next";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import { siteConfig } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `Cookie Policy for ${siteConfig.name} — How we use cookies and similar tracking technologies.`,
};

export default function CookiePolicyPage() {
  return (
    <>
      <section className="relative pt-24 pb-10 overflow-hidden">
        <AuroraBackground intensity="low" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.09] mb-6">
            <span className="text-[11px] font-semibold text-black/62 uppercase tracking-wider">Legal</span>
          </div>
          <h1 className="text-4xl font-bold text-[#0a0a08] mb-4 tracking-tight">Cookie Policy</h1>
          <p className="text-[13px] text-black/52">Last updated: January 1, 2025</p>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {[
            {
              title: "What Are Cookies?",
              content: `Cookies are small text files placed on your device when you visit our website. They help us recognize your browser and remember certain information to enhance your experience.`,
            },
            {
              title: "Types of Cookies We Use",
              content: `Essential Cookies: Required for the website to function properly. Cannot be disabled.
• Session management
• Security features
• Load balancing

Analytics Cookies: Help us understand how visitors use our website.
• Google Analytics (page views, session duration, traffic sources)
• Microsoft Clarity (heatmaps, session recordings — anonymized)

Marketing Cookies: Used to deliver relevant advertisements.
• Google Ads conversion tracking
• Meta Pixel for social media advertising
• LinkedIn Insight Tag

Preference Cookies: Remember your preferences.
• Language settings
• Theme preferences
• Form data preservation`,
            },
            {
              title: "Managing Cookies",
              content: `You can control cookies through:
• Your browser settings (see your browser's help documentation)
• Our cookie consent banner (shown on your first visit)
• Google Analytics opt-out: https://tools.google.com/dlpage/gaoptout

Note: Disabling certain cookies may impact website functionality.`,
            },
            {
              title: "Third-Party Cookies",
              content: `Our website may contain links to third-party websites and integrate third-party services that use their own cookies. We have no control over these cookies. Please review the privacy policies of any third-party sites you visit.`,
            },
            {
              title: "Cookie Retention",
              content: `Session cookies: Deleted when you close your browser
Persistent cookies: Retained for the period specified, typically 1-2 years
Analytics cookies: Data retained for 26 months (Google Analytics default)`,
            },
            {
              title: "Contact",
              content: `Questions about our cookie use? Contact us at ${siteConfig.email.hello}`,
            },
          ].map(({ title, content }) => (
            <div key={title} className="p-6 rounded-2xl bg-black/[0.02] border border-black/[0.08]">
              <h2 className="text-lg font-semibold text-[#0a0a08] mb-3">{title}</h2>
              <p className="text-[13px] text-black/60 leading-relaxed whitespace-pre-line">{content}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
