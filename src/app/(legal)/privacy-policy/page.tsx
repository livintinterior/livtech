import type { Metadata } from "next";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import { siteConfig } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name} — How we collect, use, and protect your personal data.`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative pt-24 pb-10 overflow-hidden">
        <AuroraBackground intensity="low" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.09] mb-6">
            <span className="text-[11px] font-semibold text-black/62 uppercase tracking-wider">Legal</span>
          </div>
          <h1 className="text-4xl font-bold text-[#0a0a08] mb-4 tracking-tight">Privacy Policy</h1>
          <p className="text-[13px] text-black/52">Last updated: January 1, 2025</p>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose-dark space-y-8">
          {[
            {
              title: "1. Information We Collect",
              content: `We collect information you provide directly to us, such as when you fill out a contact form, request a quote, book a consultation, or subscribe to our newsletter. This includes: name, email address, phone number, company name, project details, and any other information you choose to provide.

We also collect information automatically when you visit our website, including IP address, browser type, device information, pages visited, time spent on pages, and referring URLs.`,
            },
            {
              title: "2. How We Use Your Information",
              content: `We use the information we collect to:
• Respond to your inquiries and fulfill your requests
• Send you project-related communications and updates
• Send marketing communications (with your consent)
• Analyze and improve our website and services
• Comply with legal obligations
• Protect against fraud and unauthorized access`,
            },
            {
              title: "3. Information Sharing",
              content: `We do not sell, trade, or rent your personal information to third parties. We may share your information with:
• Service providers who assist us in operating our website and conducting our business (e.g., email providers, hosting services)
• Legal authorities when required by law
• Business partners with your explicit consent`,
            },
            {
              title: "4. Data Security",
              content: `We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes SSL encryption, secure server infrastructure, and regular security audits.`,
            },
            {
              title: "5. Cookies",
              content: `We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser. Essential cookies are required for the website to function. Analytics and marketing cookies are used with your consent.`,
            },
            {
              title: "6. Your Rights",
              content: `You have the right to:
• Access the personal information we hold about you
• Correct inaccurate or incomplete information
• Request deletion of your personal information
• Object to processing of your information
• Request restriction of processing
• Data portability
To exercise these rights, contact us at ${siteConfig.email.hello}`,
            },
            {
              title: "7. Data Retention",
              content: `We retain personal information for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements. Contact form data is retained for 2 years. Newsletter subscriber data is retained until you unsubscribe.`,
            },
            {
              title: "8. Contact Us",
              content: `If you have questions about this Privacy Policy or our data practices, please contact us at:
Email: ${siteConfig.email.hello}
Address: ${siteConfig.address.line1}, ${siteConfig.address.line2}`,
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
