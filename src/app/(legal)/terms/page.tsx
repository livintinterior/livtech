import type { Metadata } from "next";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import { siteConfig } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${siteConfig.name} — Terms and conditions governing your use of our services.`,
};

export default function TermsPage() {
  return (
    <>
      <section className="relative pt-24 pb-10 overflow-hidden">
        <AuroraBackground intensity="low" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.09] mb-6">
            <span className="text-[11px] font-semibold text-black/62 uppercase tracking-wider">Legal</span>
          </div>
          <h1 className="text-4xl font-bold text-[#0a0a08] mb-4 tracking-tight">Terms of Service</h1>
          <p className="text-[13px] text-black/52">Last updated: January 1, 2025</p>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {[
            {
              title: "1. Acceptance of Terms",
              content: `By accessing and using the services of ${siteConfig.name}, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our services.`,
            },
            {
              title: "2. Services",
              content: `${siteConfig.name} provides technology services including but not limited to website development, mobile app development, UI/UX design, digital marketing, SEO, cloud solutions, and related IT services. Services are provided as described in individual project agreements and statements of work.`,
            },
            {
              title: "3. Client Responsibilities",
              content: `Clients are responsible for:
• Providing accurate project requirements and timely feedback
• Providing necessary content, assets, and access credentials
• Reviewing and approving deliverables within agreed timelines
• Making payments per the agreed payment schedule
• Ensuring any content provided does not infringe third-party rights`,
            },
            {
              title: "4. Intellectual Property",
              content: `Upon receipt of full payment, all custom work created specifically for the client becomes the client's property. ${siteConfig.name} retains the right to use the work in our portfolio and marketing materials unless explicitly agreed otherwise. We retain ownership of our pre-existing tools, frameworks, and methodologies.`,
            },
            {
              title: "5. Payment Terms",
              content: `Payment terms are specified in individual project agreements. Generally:
• 50% advance payment before project commencement
• Remaining balance upon project completion before final delivery
• Late payments may incur interest charges of 2% per month
• Projects may be paused or suspended for non-payment`,
            },
            {
              title: "6. Confidentiality",
              content: `Both parties agree to maintain confidentiality of proprietary information shared during the course of the engagement. This obligation continues for 2 years after project completion. We sign NDAs upon request.`,
            },
            {
              title: "7. Limitation of Liability",
              content: `${siteConfig.name}'s liability is limited to the amount paid for the specific service in question. We are not liable for indirect, incidental, or consequential damages. This includes loss of data, revenue, profits, or business opportunities.`,
            },
            {
              title: "8. Governing Law",
              content: `These terms are governed by the laws of India. Any disputes shall be resolved through arbitration in Hyderabad, Telangana, India, in accordance with the Arbitration and Conciliation Act, 1996.`,
            },
            {
              title: "9. Contact",
              content: `For questions about these terms, contact us at ${siteConfig.email.hello}`,
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
