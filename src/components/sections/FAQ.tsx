"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { viewportConfig } from "@/lib/constants/animations";

const faqs = [
  { question: "How long does it take to build a website?", answer: "A basic business website typically takes 2-4 weeks. A complex web application or e-commerce platform can take 6-16 weeks depending on features and scope. We provide a detailed timeline after our initial discovery call." },
  { question: "What technologies do you use?", answer: "We work with 50+ technologies across the stack. For web, we primarily use Next.js, React, TypeScript, and Node.js. For mobile, Flutter and React Native. For backend, Node.js, Python, Java, and .NET. We choose the best technology for your specific project requirements." },
  { question: "Do you provide post-launch support?", answer: "Yes. All our projects include a free maintenance period (3-12 months depending on the plan). After that, we offer flexible maintenance packages starting at ₹5,000/month, covering security updates, bug fixes, performance monitoring, and technical support." },
  { question: "How much does a project cost?", answer: "Project costs vary based on scope, complexity, and technology requirements. Business websites start from ₹15,000. Custom web applications from ₹50,000. Mobile apps from ₹75,000. Enterprise software from ₹2,00,000. We provide detailed quotes after understanding your requirements." },
  { question: "Do you sign NDAs and protect our IP?", answer: "Absolutely. We sign NDAs before any sensitive discussions and all custom code/designs are owned 100% by you upon project completion and full payment. Our contracts explicitly protect your intellectual property." },
  { question: "Can you work with our existing team?", answer: "Yes, we regularly collaborate with in-house development teams, providing specialized expertise for specific parts of a project, augmenting team capacity, or leading technical architecture decisions." },
  { question: "Do you only work with businesses in India?", answer: "No. While we are based in India, we serve clients across the USA, UK, UAE, Singapore, Australia, and other countries. We work across time zones and have processes optimized for remote collaboration." },
  { question: "What is your development process?", answer: "We follow a 6-step process: Discovery → Strategy & Planning → Design & Prototyping → Development & Testing → QA → Launch & Support. You get regular updates and demo sessions throughout so there are never any surprises." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-8 lg:py-12">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="FAQ"
          title="Frequently Asked "
          highlight="Questions"
          subtitle="Everything you need to know before working with us."
          className="mb-6"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          className="space-y-2"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border overflow-hidden transition-all duration-200"
              style={{
                borderColor: open === index ? "rgba(61,90,46,0.20)" : "rgba(0,0,0,0.07)",
                backgroundColor: open === index ? "rgba(134,163,114,0.06)" : "rgba(0,0,0,0.02)",
              }}
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="flex items-center justify-between w-full p-4 text-left group"
                aria-expanded={open === index}
              >
                <span className="text-[13px] font-medium text-black/80 group-hover:text-[#0a0a08] transition-colors pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {open === index
                    ? <Minus className="w-3.5 h-3.5 text-[#3d5a2e]/80" />
                    : <Plus  className="w-3.5 h-3.5 text-black/45" />
                  }
                </div>
              </button>

              <AnimatePresence initial={false}>
                {open === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-4 pb-4 text-[12.5px] text-black/58 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
