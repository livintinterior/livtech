import type { Metadata } from "next";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import { ConsultationForm } from "./ConsultationForm";
import { Clock, CheckCircle, Users, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Free Consultation",
  description:
    "Schedule a free 30-minute consultation with Livetech.in's technology experts. Discuss your project, get expert advice, and learn how we can help.",
};

const benefits = [
  { icon: Clock, text: "30-minute focused session" },
  { icon: CheckCircle, text: "No obligation, completely free" },
  { icon: Users, text: "Dedicated expert for your industry" },
  { icon: Calendar, text: "Flexible scheduling" },
];

export default function BookConsultationPage() {
  return (
    <>
      <section className="relative pt-24 pb-10 overflow-hidden">
        <AuroraBackground intensity="low" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.09] mb-6">
                <span className="text-[11px] font-semibold text-black/62 uppercase tracking-wider">Free Consultation</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#0a0a08] mb-4 leading-tight tracking-tight">
                Book Your Free<br />
                <span className="gradient-text-static">30-Minute Call</span>
              </h1>
              <p className="text-[15px] text-black/60 leading-relaxed mb-8">
                Talk directly with our technology experts. We&apos;ll discuss your project,
                answer your questions, and give you a roadmap — completely free, no strings attached.
              </p>

              <div className="space-y-3 mb-8">
                {benefits.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-[13px] text-black/45">
                    <Icon className="w-4 h-4 text-[#3d5a2e]/75 flex-shrink-0" />
                    {text}
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-black/[0.02] border border-black/[0.07]">
                <h3 className="text-[13px] font-semibold text-[#0a0a08] mb-3">What we&apos;ll cover:</h3>
                <ul className="space-y-2">
                  {[
                    "Your business goals and challenges",
                    "Technology recommendations",
                    "Realistic timelines and costs",
                    "How we approach projects like yours",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[12px] text-black/60">
                      <CheckCircle className="w-3.5 h-3.5 text-[#3d5a2e]/80 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <ConsultationForm />
          </div>
        </div>
      </section>
    </>
  );
}
