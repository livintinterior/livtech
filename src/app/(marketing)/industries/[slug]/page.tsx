import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import { industries } from "@/lib/constants/industries";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import { CTA } from "@/components/sections/CTA";

export async function generateStaticParams() {
  return industries.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return { title: "Industry Not Found" };
  return {
    title: `${industry.name} Technology Solutions`,
    description: `Livetech.in provides specialized digital solutions for the ${industry.name} sector. ${industry.description}`,
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#0a0a08] mb-4">Industry not found</h1>
          <Link href="/industries" className="text-[#3d5a2e] hover:text-[#3d5a2e]">← Back to Industries</Link>
        </div>
      </div>
    );
  }

  const Icon = industry.icon;
  const relatedIndustries = industries.filter((i) => i.slug !== slug).slice(0, 4);

  return (
    <>
      <section className="relative pt-24 pb-10 overflow-hidden">
        <AuroraBackground intensity="low" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/industries" className="inline-flex items-center gap-2 text-[13px] text-black/58 hover:text-[#0a0a08] transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> All Industries
          </Link>
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-black/[0.04] border border-black/[0.09] mb-6">
            <Icon className="w-6 h-6 text-[#3d5a2e]/80" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a0a08] mb-4 tracking-tight">
            {industry.name} <span className="gradient-text-static">Solutions</span>
          </h1>
          <p className="text-[15px] text-black/60 max-w-2xl leading-relaxed">{industry.description}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-[17px] font-bold text-[#0a0a08] mb-6">Solutions We Provide</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {industry.solutions.map((solution) => (
                  <div key={solution} className="flex items-start gap-3 p-4 rounded-xl bg-black/[0.02] border border-black/[0.07]">
                    <CheckCircle2 className="w-4 h-4 text-[#3d5a2e]/80 flex-shrink-0 mt-0.5" />
                    <span className="text-[12px] text-black/45">{solution}</span>
                  </div>
                ))}
              </div>
              <div className="p-5 rounded-2xl bg-[#86a372]/8 border border-[#86a372]/10">
                <h3 className="text-[14px] font-bold text-[#0a0a08] mb-2">Ready to transform your {industry.name} business?</h3>
                <p className="text-[12px] text-black/58 mb-4">Our team has deep expertise in {industry.name} technology. Let&apos;s discuss your project.</p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="px-4 py-2 rounded-full bg-[#0a0a08] text-white text-[12px] font-semibold hover:bg-[#0a0a08]/90 transition-colors">
                    Contact Us
                  </Link>
                  <Link href="/book-consultation" className="px-4 py-2 rounded-full border border-black/[0.18] text-[#0a0a08] text-[12px] font-medium hover:bg-black/[0.05] transition-colors">
                    Book Consultation
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-[12px] font-semibold text-black/62 uppercase tracking-widest mb-4">Other Industries</h3>
              <div className="space-y-2">
                {relatedIndustries.map(({ slug: rSlug, name, icon: RIcon }) => (
                  <Link key={rSlug} href={`/industries/${rSlug}`}>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-black/[0.02] border border-black/[0.07] hover:border-black/[0.12] hover:bg-black/[0.03] transition-all group">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-black/[0.04] border border-black/[0.08] flex-shrink-0">
                        <RIcon className="w-3.5 h-3.5 text-[#3d5a2e]/75" />
                      </div>
                      <span className="text-[12px] text-black/58 group-hover:text-[#0a0a08] transition-colors flex-1">{name}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-black/60 group-hover:text-[#3d5a2e] transition-colors" />
                    </div>
                  </Link>
                ))}
                <Link href="/industries" className="block text-center text-[11px] text-[#3d5a2e]/55 hover:text-[#3d5a2e] pt-2 transition-colors">
                  View all 16 industries →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
