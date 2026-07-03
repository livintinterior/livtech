"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { industries } from "@/lib/constants/industries";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/constants/animations";

export function Industries() {
  const featured = industries.slice(0, 8);

  return (
    <section className="relative py-8 lg:py-12">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Industries"
          title="Built for Every "
          highlight="Industry"
          subtitle="We have deep domain expertise across 16 industries. Whatever your sector, we have the experience and solutions to drive your digital transformation."
          className="mb-6"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {featured.map(({ slug, name, image, icon: Icon, description, solutions, color }) => (
            <motion.div key={slug} variants={fadeUp}>
              <Link href={`/industries/${slug}`} className="block h-full group">
                <div className="rounded-2xl overflow-hidden bg-white border border-black/[0.07] hover:border-black/[0.14] hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] transition-all duration-300 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-[130px] overflow-hidden flex-shrink-0">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                    {/* Icon badge */}
                    <div className={`absolute bottom-3 left-3 w-8 h-8 rounded-[10px] bg-gradient-to-br ${color} flex items-center justify-center shadow-md`}>
                      <Icon size={15} color="white" strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-[13px] font-semibold text-black/90 mb-1.5 group-hover:text-[#0a0a08] transition-colors">
                      {name}
                    </h3>
                    <p className="text-[11px] text-black/50 mb-3 leading-relaxed flex-1">{description}</p>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {solutions.slice(0, 2).map((s) => (
                        <span
                          key={s}
                          className="px-2 py-0.5 rounded-md bg-black/[0.03] text-[10px] text-black/45 border border-black/[0.07]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-1 text-[11px] text-[#3d5a2e]/75 group-hover:text-[#3d5a2e] transition-colors">
                      Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          className="mt-10 text-center"
        >
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-medium text-black/70 rounded-full border border-black/[0.12] hover:bg-black/[0.04] hover:border-black/[0.22] transition-all duration-200"
          >
            View All 16 Industries <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
