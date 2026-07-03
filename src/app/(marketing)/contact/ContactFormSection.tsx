"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2, Send, CheckCircle } from "lucide-react";

const contactSchema = z.object({
  name:    z.string().min(2, "Name must be at least 2 characters"),
  email:   z.string().email("Please enter a valid email address"),
  phone:   z.string().optional(),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const services = [
  "Website Development", "Mobile App Development", "UI/UX Design",
  "Digital Marketing", "SEO Services", "Cloud Solutions",
  "AI Solutions", "Custom Software", "Cybersecurity", "Other",
];

const inputCls = "w-full px-3.5 py-2.5 rounded-xl bg-black/[0.04] border border-black/[0.09] text-black/90 placeholder:text-black/62 text-[13px] focus:outline-none focus:border-[#3d5a2e]/40 focus:bg-black/[0.06] transition-all";
const labelCls = "block text-[11px] font-medium text-black/58 mb-1.5";

export function ContactFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error();
      setIsSubmitted(true);
      reset();
      toast.success("Message sent! We'll get back to you within 24 hours.");
    } catch {
      toast.error("Failed to send message. Please try again or email us directly.");
    }
  };

  if (isSubmitted) {
    return (
      <div className="p-8 rounded-2xl bg-black/[0.02] border border-black/[0.07] text-center">
        <div className="w-14 h-14 rounded-full bg-[#86a372]/10 border border-[#3d5a2e]/20 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-7 h-7 text-[#3d5a2e]" />
        </div>
        <h3 className="text-[17px] font-semibold text-[#0a0a08] mb-2">Message Received!</h3>
        <p className="text-[13px] text-black/60 mb-6 leading-relaxed">
          Thank you for reaching out. Our team will review your message and get back to you within 24 hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="px-5 py-2.5 text-[13px] font-medium text-black/70 rounded-full border border-black/[0.12] hover:bg-black/[0.04] transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 rounded-2xl bg-black/[0.02] border border-black/[0.07] space-y-4">
      <h2 className="text-[15px] font-semibold text-[#0a0a08] mb-2">Send us a Message</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Full Name <span className="text-red-400/80">*</span></label>
          <input {...register("name")} type="text" placeholder="John Doe" className={inputCls} />
          {errors.name && <p className="mt-1 text-[11px] text-red-400/80">{errors.name.message}</p>}
        </div>
        <div>
          <label className={labelCls}>Email Address <span className="text-red-400/80">*</span></label>
          <input {...register("email")} type="email" placeholder="john@company.com" className={inputCls} />
          {errors.email && <p className="mt-1 text-[11px] text-red-400/80">{errors.email.message}</p>}
        </div>
        <div>
          <label className={labelCls}>Phone</label>
          <input {...register("phone")} type="tel" placeholder="+91 9XXXXXXXXX" className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Company</label>
          <input {...register("company")} type="text" placeholder="Your Company" className={inputCls} />
        </div>
      </div>

      <div>
        <label className={labelCls}>Service Interested In</label>
        <select {...register("service")} className={inputCls} style={{ background: "rgba(0,0,0,0.04)" }}>
          <option value="" className="bg-[#f5f5f3] text-black/62">Select a service</option>
          {services.map((s) => (
            <option key={s} value={s} className="bg-[#f5f5f3] text-[#0a0a08]">{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelCls}>Message <span className="text-red-400/80">*</span></label>
        <textarea {...register("message")} rows={5} placeholder="Tell us about your project, goals, timeline, and budget..." className={inputCls + " resize-none"} />
        {errors.message && <p className="mt-1 text-[11px] text-red-400/80">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 py-2.5 px-6 text-[13px] font-semibold text-white bg-[#0a0a08] rounded-full hover:bg-[#0a0a08]/85 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        {isSubmitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> : <><Send className="w-4 h-4" /> Send Message</>}
      </button>

      <p className="text-[11px] text-black/60 text-center">
        By submitting, you agree to our{" "}
        <a href="/privacy-policy" className="text-black/58 hover:text-black/80 transition-colors">Privacy Policy</a>.
        No spam, ever.
      </p>
    </form>
  );
}
