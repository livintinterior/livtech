"use client";

import { motion } from "framer-motion";

const clients = [
  "TechCorp India",
  "MediCare Solutions",
  "EduTech Pro",
  "FinanceHub",
  "RetailMax",
  "CloudBase Systems",
  "StartupLab",
  "GovConnect",
  "ManufacturePro",
  "LogiTrack",
  "BuildSmart",
  "HealthFirst",
];

const MarqueeRow = ({ items, reverse = false }: { items: string[]; reverse?: boolean }) => (
  <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
    <motion.div
      className={`flex flex-none gap-6 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      style={{ minWidth: "max-content" }}
    >
      {[...items, ...items].map((client, i) => (
        <div
          key={`${client}-${i}`}
          className="flex items-center justify-center px-6 py-2.5 rounded-xl bg-black/[0.02] border border-black/[0.07] flex-none"
        >
          <span className="text-[13px] font-medium text-black/62 whitespace-nowrap">
            {client}
          </span>
        </div>
      ))}
    </motion.div>
  </div>
);

export function TrustedBy() {
  const firstRow  = clients.slice(0, 6);
  const secondRow = clients.slice(6);

  return (
    <section className="relative py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5">
        <p className="text-center text-[11px] font-medium text-black/60 uppercase tracking-widest">
          Trusted by innovative companies across industries
        </p>
      </div>

      <div className="space-y-4">
        <MarqueeRow items={firstRow} />
        <MarqueeRow items={secondRow} reverse />
      </div>

      <div className="mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent" />
      </div>
    </section>
  );
}
