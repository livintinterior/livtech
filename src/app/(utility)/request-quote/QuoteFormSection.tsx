"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2, Send, CheckCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  company: z.string().optional(),
  projectType: z.string().min(1, "Select a project type"),
  budget: z.string().min(1, "Select a budget range"),
  timeline: z.string().min(1, "Select a timeline"),
  description: z.string().min(50, "Please provide at least 50 characters describing your project"),
});

type FormData = z.infer<typeof schema>;

const projectTypes = ["Website Development", "Mobile App", "Web Application", "E-Commerce", "UI/UX Design", "Digital Marketing", "Cloud Solutions", "AI/ML Solutions", "Custom Software", "Cybersecurity", "Other"];
const budgets = ["Under ₹25,000", "₹25,000 – ₹1,00,000", "₹1,00,000 – ₹5,00,000", "₹5,00,000 – ₹20,00,000", "₹20,00,000+", "Not sure yet"];
const timelines = ["ASAP", "Within 1 month", "1-3 months", "3-6 months", "6+ months", "Flexible"];

export function QuoteFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
      reset();
    } catch {
      toast.error("Failed to submit. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="p-8 rounded-2xl bg-black/[0.02] border border-black/[0.07] text-center">
        <div className="w-14 h-14 rounded-2xl bg-[#86a372]/12 border border-[#3d5a2e]/20 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-7 h-7 text-[#3d5a2e]" />
        </div>
        <h3 className="text-[17px] font-semibold text-[#0a0a08] mb-2">Quote Request Received!</h3>
        <p className="text-[13px] text-black/60 leading-relaxed">
          Thank you! We&apos;ll review your requirements and send you a detailed proposal within 24 hours.
        </p>
      </div>
    );
  }

  const inputClass = "w-full px-3.5 py-2.5 rounded-xl bg-black/[0.04] border border-black/[0.09] text-[#0a0a08] placeholder:text-black/60 text-[13px] focus:outline-none focus:border-[#3d5a2e]/40 transition-all";
  const selectClass = `${inputClass} text-[#0a0a08]`;
  const labelClass = "block text-[11px] font-medium text-black/58 mb-1.5";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 rounded-2xl bg-black/[0.02] border border-black/[0.07] space-y-4">
      <h2 className="text-[15px] font-semibold text-[#0a0a08]">Project Details</h2>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Full Name *</label>
          <input {...register("name")} placeholder="John Doe" className={inputClass} />
          {errors.name && <p className="mt-1 text-[11px] text-red-400">{errors.name.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Email *</label>
          <input {...register("email")} type="email" placeholder="john@company.com" className={inputClass} />
          {errors.email && <p className="mt-1 text-[11px] text-red-400">{errors.email.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Phone *</label>
          <input {...register("phone")} placeholder="+91 9XXXXXXXXX" className={inputClass} />
          {errors.phone && <p className="mt-1 text-[11px] text-red-400">{errors.phone.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Company</label>
          <input {...register("company")} placeholder="Your Company" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Project Type *</label>
          <select {...register("projectType")} className={selectClass}>
            <option value="" className="bg-[#f5f5f3]">Select type</option>
            {projectTypes.map((t) => <option key={t} value={t} className="bg-[#f5f5f3] text-[#0a0a08]">{t}</option>)}
          </select>
          {errors.projectType && <p className="mt-1 text-[11px] text-red-400">{errors.projectType.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Budget Range *</label>
          <select {...register("budget")} className={selectClass}>
            <option value="" className="bg-[#f5f5f3]">Select budget</option>
            {budgets.map((b) => <option key={b} value={b} className="bg-[#f5f5f3] text-[#0a0a08]">{b}</option>)}
          </select>
          {errors.budget && <p className="mt-1 text-[11px] text-red-400">{errors.budget.message}</p>}
        </div>
        <div className="col-span-2">
          <label className={labelClass}>Timeline *</label>
          <select {...register("timeline")} className={selectClass}>
            <option value="" className="bg-[#f5f5f3]">When do you need this?</option>
            {timelines.map((t) => <option key={t} value={t} className="bg-[#f5f5f3] text-[#0a0a08]">{t}</option>)}
          </select>
          {errors.timeline && <p className="mt-1 text-[11px] text-red-400">{errors.timeline.message}</p>}
        </div>
        <div className="col-span-2">
          <label className={labelClass}>Project Description *</label>
          <textarea {...register("description")} rows={5} placeholder="Describe your project in detail — goals, features needed, target audience, any existing systems, and anything else that&apos;s important..." className={`${inputClass} resize-none`} />
          {errors.description && <p className="mt-1 text-[11px] text-red-400">{errors.description.message}</p>}
        </div>
      </div>

      <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center gap-2 py-3 text-[13px] font-semibold text-white rounded-full bg-[#0a0a08] hover:bg-[#0a0a08]/85 disabled:opacity-50 transition-all">
        {isSubmitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</> : <><Send className="w-4 h-4" /> Request Quote</>}
      </button>
    </form>
  );
}
