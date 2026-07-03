"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2, Calendar, CheckCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone required"),
  company: z.string().optional(),
  industry: z.string().min(1, "Please select your industry"),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().optional(),
  preferredDate: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const industries = [
  "Healthcare", "Education", "Finance", "Retail", "Manufacturing",
  "Real Estate", "Travel", "Hospitality", "Construction", "Government",
  "Startup", "Enterprise", "NGO", "Logistics", "Other",
];

const projectTypes = [
  "Website Development", "Mobile App", "UI/UX Design", "Digital Marketing",
  "Cloud Solutions", "AI Solutions", "Custom Software", "Cybersecurity",
  "IT Infrastructure", "Other",
];

const inputClass = "w-full px-3.5 py-2.5 rounded-xl bg-black/[0.04] border border-black/[0.09] text-[#0a0a08] placeholder:text-black/60 text-[13px] focus:outline-none focus:border-[#3d5a2e]/40 transition-all";

const labelClass = "block text-[11px] font-medium text-black/58 mb-1.5";

export function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      await new Promise((r) => setTimeout(r, 1000));
      setSubmitted(true);
      reset();
      toast.success("Consultation booked! We'll confirm your slot via email.");
    } catch {
      toast.error("Failed to book. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="p-8 rounded-2xl bg-black/[0.02] border border-black/[0.07] text-center">
        <div className="w-14 h-14 rounded-2xl bg-[#86a372]/12 border border-[#3d5a2e]/20 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-7 h-7 text-[#3d5a2e]" />
        </div>
        <h3 className="text-[17px] font-semibold text-[#0a0a08] mb-2">Consultation Booked!</h3>
        <p className="text-[13px] text-black/60">
          We&apos;ll send you a calendar invite and confirmation email within 2 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 rounded-2xl bg-black/[0.02] border border-black/[0.07] space-y-4">
      <h2 className="text-[15px] font-semibold text-[#0a0a08]">Schedule Your Call</h2>

      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 sm:col-span-1">
          <label className={labelClass}>Full Name *</label>
          <input {...register("name")} placeholder="John Doe" className={inputClass} />
          {errors.name && <p className="mt-1 text-[11px] text-red-400">{errors.name.message}</p>}
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label className={labelClass}>Email *</label>
          <input {...register("email")} type="email" placeholder="john@company.com" className={inputClass} />
          {errors.email && <p className="mt-1 text-[11px] text-red-400">{errors.email.message}</p>}
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label className={labelClass}>Phone *</label>
          <input {...register("phone")} placeholder="+91 9XXXXXXXXX" className={inputClass} />
          {errors.phone && <p className="mt-1 text-[11px] text-red-400">{errors.phone.message}</p>}
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label className={labelClass}>Company</label>
          <input {...register("company")} placeholder="Your Company" className={inputClass} />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label className={labelClass}>Industry *</label>
          <select {...register("industry")} className={`${inputClass} text-[#0a0a08]`}>
            <option value="" className="bg-[#f5f5f3]">Select industry</option>
            {industries.map((i) => <option key={i} value={i} className="bg-[#f5f5f3] text-[#0a0a08]">{i}</option>)}
          </select>
          {errors.industry && <p className="mt-1 text-[11px] text-red-400">{errors.industry.message}</p>}
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label className={labelClass}>Project Type *</label>
          <select {...register("projectType")} className={`${inputClass} text-[#0a0a08]`}>
            <option value="" className="bg-[#f5f5f3]">Select project type</option>
            {projectTypes.map((p) => <option key={p} value={p} className="bg-[#f5f5f3] text-[#0a0a08]">{p}</option>)}
          </select>
          {errors.projectType && <p className="mt-1 text-[11px] text-red-400">{errors.projectType.message}</p>}
        </div>
        <div className="col-span-2">
          <label className={labelClass}>Preferred Date</label>
          <input {...register("preferredDate")} type="date" className={inputClass} style={{ colorScheme: "dark" }} />
        </div>
        <div className="col-span-2">
          <label className={labelClass}>Additional Notes</label>
          <textarea {...register("message")} rows={3} placeholder="Briefly describe your project or questions..." className={`${inputClass} resize-none`} />
        </div>
      </div>

      <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center gap-2 py-3 text-[13px] font-semibold text-white rounded-full bg-[#0a0a08] hover:bg-[#0a0a08]/85 disabled:opacity-50 transition-all">
        {isSubmitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Booking...</> : <><Calendar className="w-4 h-4" /> Book Free Consultation</>}
      </button>
    </form>
  );
}
