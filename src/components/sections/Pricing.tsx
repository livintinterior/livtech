"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/constants/animations";
import { cn } from "@/lib/utils/cn";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses and startups",
    monthly: 15000,
    annual: 12000,
    features: [
      "Business Website (up to 10 pages)",
      "Responsive Design",
      "Basic SEO Setup",
      "Contact Form",
      "3 Months Free Maintenance",
      "Email Support",
      "Google Analytics Setup",
    ],
    cta: "Get Started",
    highlighted: false,
    badge: null,
  },
  {
    name: "Professional",
    description: "For growing businesses that need more power",
    monthly: 45000,
    annual: 36000,
    features: [
      "Everything in Starter",
      "Custom Web Application",
      "CMS Integration",
      "Advanced SEO",
      "Performance Optimization",
      "6 Months Free Maintenance",
      "Priority Email & Chat Support",
      "Social Media Integration",
      "Analytics Dashboard",
    ],
    cta: "Start Building",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex requirements",
    monthly: 0,
    annual: 0,
    features: [
      "Everything in Professional",
      "Custom ERP/CRM Development",
      "AI/ML Integration",
      "Cloud Architecture",
      "Dedicated Project Manager",
      "12 Months Free Maintenance",
      "24/7 Priority Support",
      "SLA Guarantees",
      "White-Label Solutions",
      "Custom Integrations",
    ],
    cta: "Contact Sales",
    highlighted: false,
    badge: "Custom",
  },
];

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const formatPrice = (price: number) => {
    if (price === 0) return "Custom";
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="relative py-8 lg:py-12">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.10] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3d5230]/5 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Pricing"
          title="Transparent "
          highlight="Pricing Plans"
          subtitle="No hidden fees. No surprises. Just clear, value-driven pricing for every stage of your business."
          className="mb-6"
        />

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className={cn("text-[13px] font-medium", !isAnnual ? "text-[#0a0a08]" : "text-black/50")}>Monthly</span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={cn(
              "relative w-12 h-6 rounded-full transition-colors duration-300",
              isAnnual ? "bg-[#86a372]" : "bg-black/[0.10]"
            )}
          >
            <div
              className={cn(
                "absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform duration-300",
                isAnnual ? "translate-x-7" : "translate-x-1"
              )}
            />
          </button>
          <div className="flex items-center gap-1.5">
            <span className={cn("text-[13px] font-medium", isAnnual ? "text-[#0a0a08]" : "text-black/50")}>Annual</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#86a372]/12 text-[#3d5a2e] border border-[#3d5a2e]/20">
              SAVE 20%
            </span>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {plans.map((plan) => (
            <motion.div key={plan.name} variants={fadeUp}>
              <div
                className={cn(
                  "relative h-full rounded-2xl border transition-all duration-300",
                  plan.highlighted
                    ? "bg-[#86a372]/8 border-[#3d5a2e]/25 shadow-xl shadow-[#86a372]/5"
                    : "bg-black/[0.02] border-black/[0.09] hover:border-black/[0.17]"
                )}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div
                      className={cn(
                        "flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold",
                        plan.highlighted
                          ? "bg-[#0a0a08] text-white shadow-lg"
                          : "bg-black/[0.05] border border-black/[0.12] text-black/62"
                      )}
                    >
                      {plan.highlighted && <Zap className="w-3 h-3 fill-[#080808]" />}
                      {plan.badge}
                    </div>
                  </div>
                )}

                <div className="p-5">
                  <h3 className="text-[14px] font-bold text-[#0a0a08] mb-1">{plan.name}</h3>
                  <p className="text-[11.5px] text-black/50 mb-4">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-4">
                    {plan.monthly === 0 ? (
                      <div className="text-[24px] font-bold text-[#0a0a08]">Custom</div>
                    ) : (
                      <div className="flex items-baseline gap-1">
                        <span className="text-[24px] font-bold text-[#0a0a08]">
                          {formatPrice(isAnnual ? plan.annual : plan.monthly)}
                        </span>
                        <span className="text-black/50 text-[12px]">/ project</span>
                      </div>
                    )}
                    {plan.monthly > 0 && isAnnual && (
                      <p className="text-[11px] text-[#3d5a2e]/80 mt-1">
                        Save {formatPrice(plan.monthly - plan.annual)} annually
                      </p>
                    )}
                  </div>

                  {/* CTA */}
                  <Link
                    href={plan.monthly === 0 ? "/contact" : "/request-quote"}
                    className={cn(
                      "block w-full py-2 text-[12.5px] font-semibold text-center rounded-full transition-all duration-200 mb-4",
                      plan.highlighted
                        ? "bg-[#0a0a08] text-white hover:bg-[#0a0a08]/85"
                        : "border border-black/[0.15] text-[#0a0a08] hover:bg-black/[0.05]"
                    )}
                  >
                    {plan.cta}
                  </Link>

                  {/* Features */}
                  <ul className="space-y-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-[12px] text-black/58">
                        <Check className="w-3.5 h-3.5 text-[#3d5a2e]/80 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-center text-[12px] text-black/45 mt-8">
          All prices are indicative. Final pricing depends on project scope and requirements.{" "}
          <Link href="/contact" className="text-[#3d5a2e]/55 hover:text-[#3d5a2e] transition-colors">
            Contact us for a custom quote.
          </Link>
        </p>
      </div>
    </section>
  );
}
