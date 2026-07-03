import type { Metadata } from "next";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import { siteConfig } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: `Refund Policy for ${siteConfig.name} — Our fair and transparent refund terms.`,
};

export default function RefundPolicyPage() {
  return (
    <>
      <section className="relative pt-24 pb-10 overflow-hidden">
        <AuroraBackground intensity="low" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.09] mb-6">
            <span className="text-[11px] font-semibold text-black/62 uppercase tracking-wider">Legal</span>
          </div>
          <h1 className="text-4xl font-bold text-[#0a0a08] mb-4 tracking-tight">Refund Policy</h1>
          <p className="text-[13px] text-black/52">Last updated: January 1, 2025</p>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {[
            {
              title: "Our Commitment",
              content: `At ${siteConfig.name}, we are committed to delivering excellent work and ensuring client satisfaction. Our refund policy is designed to be fair to both parties.`,
            },
            {
              title: "Refund Eligibility",
              content: `Refunds may be considered in the following circumstances:
• We fail to deliver the agreed scope within the agreed timeline without mutual agreement on extension
• The delivered work substantially fails to meet the documented requirements
• We are unable to complete the project due to our own limitations

Refunds are NOT available:
• After client approval of deliverables
• For scope changes requested after project commencement
• For delays caused by client's failure to provide required inputs
• For dissatisfaction based on subjective preferences not documented in the brief`,
            },
            {
              title: "Advance Payment",
              content: `The advance payment (typically 50% of project cost) is non-refundable once work has commenced, as it covers initial research, planning, design explorations, and resource allocation. However, if we have not started work, the full advance may be refunded within 7 business days.`,
            },
            {
              title: "Refund Process",
              content: `To request a refund:
1. Contact us at ${siteConfig.email.hello} with your project details and reason for the refund request
2. We will acknowledge your request within 2 business days
3. Our team will review the request and respond within 7 business days
4. Approved refunds will be processed within 14 business days to the original payment method`,
            },
            {
              title: "Dispute Resolution",
              content: `Before initiating a refund request, we encourage clients to discuss concerns with their dedicated project manager. Most issues can be resolved through open communication. If a resolution cannot be reached, we will engage in good-faith mediation before any formal proceedings.`,
            },
            {
              title: "Maintenance & Subscription Services",
              content: `Monthly maintenance and subscription services may be cancelled with 30 days written notice. Prorated refunds for unused portions of prepaid periods are available upon request.`,
            },
            {
              title: "Contact",
              content: `For refund inquiries: ${siteConfig.email.hello}
For billing disputes: ${siteConfig.email.support}
Phone: ${siteConfig.phone}`,
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
