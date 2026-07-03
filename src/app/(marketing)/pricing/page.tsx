import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, ArrowRight } from "lucide-react";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent pricing plans for web development, mobile apps, and digital services. No hidden fees. Custom enterprise quotes available.",
  keywords: ["web development pricing India", "mobile app cost", "software development cost Hyderabad", "IT services pricing", "affordable web development"],
  alternates: { canonical: "https://livetech.in/pricing" },
  openGraph: {
    title: "Pricing | Livtech",
    description: "Honest, transparent pricing for web development, mobile apps, and digital services. No surprises.",
    url: "https://livetech.in/pricing",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Livtech Pricing" }],
  },
  twitter: { card: "summary_large_image", title: "Pricing | Livtech", description: "Honest, transparent pricing for web development, mobile apps, and digital services. No surprises." },
};

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses getting started online",
    price: "From â‚¹15,000",
    period: "per project",
    features: {
      "Business Website (up to 10 pages)": true,
      "Responsive Design": true,
      "Basic SEO Setup": true,
      "Contact Form": true,
      "Google Analytics": true,
      "3 Months Free Maintenance": true,
      "CMS Integration": false,
      "E-Commerce Features": false,
      "Custom Web Application": false,
      "Priority Support": false,
    },
    cta: "Get Started",
    href: "/request-quote",
    highlighted: false,
  },
  {
    name: "Professional",
    description: "For growing businesses that need advanced features",
    price: "From â‚¹45,000",
    period: "per project",
    features: {
      "Business Website (up to 10 pages)": true,
      "Responsive Design": true,
      "Basic SEO Setup": true,
      "Contact Form": true,
      "Google Analytics": true,
      "3 Months Free Maintenance": "6 Months",
      "CMS Integration": true,
      "E-Commerce Features": true,
      "Custom Web Application": true,
      "Priority Support": true,
    },
    cta: "Start Building",
    href: "/request-quote",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex requirements",
    price: "Custom",
    period: "quote",
    features: {
      "Business Website (up to 10 pages)": true,
      "Responsive Design": true,
      "Basic SEO Setup": true,
      "Contact Form": true,
      "Google Analytics": true,
      "3 Months Free Maintenance": "12 Months",
      "CMS Integration": true,
      "E-Commerce Features": true,
      "Custom Web Application": true,
      "Priority Support": "24/7 SLA",
    },
    cta: "Contact Sales",
    href: "/contact",
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-10 overflow-hidden">
        <AuroraBackground intensity="low" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.09] mb-6">
            <span className="text-[11px] font-semibold text-black/62 uppercase tracking-wider">Transparent Pricing</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0a0a08] mb-4 tracking-tight">
            Simple, <span className="gradient-text-static">Honest Pricing</span>
          </h1>
          <p className="text-[15px] text-black/60 max-w-xl mx-auto leading-relaxed">
            No hidden fees. No surprise bills. Just clear pricing built around the value we deliver.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-7 ${
                  plan.highlighted
                    ? "border-[#3d5a2e]/25 bg-[#86a372]/[0.04]"
                    : "border-black/[0.08] bg-black/[0.02]"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#0a0a08] text-white text-[11px] font-bold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-[15px] font-bold text-[#0a0a08] mb-1">{plan.name}</h3>
                <p className="text-[12px] text-black/52 mb-5">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-[#0a0a08]">{plan.price}</span>
                  <span className="text-black/52 text-[12px] ml-1">/ {plan.period}</span>
                </div>
                <Link
                  href={plan.href}
                  className={`block w-full py-2.5 text-[13px] font-semibold text-center rounded-full transition-all duration-200 mb-6 ${
                    plan.highlighted
                      ? "bg-[#0a0a08] text-white hover:bg-[#0a0a08]/85"
                      : "border border-black/[0.12] text-black/70 hover:bg-black/[0.04]"
                  }`}
                >
                  {plan.cta}
                </Link>
                <ul className="space-y-3">
                  {Object.entries(plan.features).map(([feature, value]) => (
                    <li key={feature} className="flex items-center justify-between text-[12px]">
                      <span className="text-black/58">{feature}</span>
                      {value === true ? (
                        <Check className="w-3.5 h-3.5 text-[#3d5a2e] flex-shrink-0" />
                      ) : value === false ? (
                        <X className="w-3.5 h-3.5 text-black/52 flex-shrink-0" />
                      ) : (
                        <span className="text-[11px] text-[#3d5a2e]/80 font-medium">{value}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Custom quote note */}
          <div className="p-6 rounded-2xl bg-black/[0.02] border border-black/[0.07] text-center">
            <h3 className="text-[15px] font-semibold text-[#0a0a08] mb-2">Need Mobile Apps, AI Solutions, or Custom Software?</h3>
            <p className="text-[13px] text-black/58 mb-4 leading-relaxed">
              Pricing for mobile apps, AI solutions, custom software, and cloud services varies based on scope.
              Request a detailed quote and we&apos;ll provide a breakdown within 24 hours.
            </p>
            <Link
              href="/request-quote"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-semibold text-white bg-[#0a0a08] rounded-full hover:bg-[#0a0a08]/85 transition-all"
            >
              Request Custom Quote <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <FAQ />
      <CTA />
    </>
  );
}

