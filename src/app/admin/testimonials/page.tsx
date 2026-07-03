import type { Metadata } from "next";
import { Star, Check, X, Trash2 } from "lucide-react";

export const metadata: Metadata = { title: "Testimonials" };

const testimonials = [
  { id: "1", name: "Rajesh Kumar", role: "CEO", company: "MediCare Solutions", content: "Livetech built our entire hospital management system in just 4 months...", rating: 5, status: "APPROVED", date: "Jan 10, 2025" },
  { id: "2", name: "Priya Sharma", role: "CTO", company: "EduTech Pro", content: "Our e-learning platform now serves 50,000+ students seamlessly...", rating: 5, status: "APPROVED", date: "Jan 5, 2025" },
  { id: "3", name: "Arun Patel", role: "Founder", company: "RetailMax", content: "Our e-commerce conversion rate increased by 47% after the redesign...", rating: 5, status: "PENDING", date: "Jan 15, 2025" },
];

export default function TestimonialsPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-[#0a0a08]">Testimonials</h1>
          <p className="text-sm text-slate-500">1 pending approval</p>
        </div>
      </div>
      <div className="grid gap-4">
        {testimonials.map((t) => (
          <div key={t.id} className="p-5 rounded-2xl bg-black/[0.02] border border-black/[0.08]">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-sm font-semibold text-[#0a0a08]">{t.name}</p>
                <p className="text-xs text-slate-500">{t.role} · {t.company}</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">{Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />)}</div>
                <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold ${t.status === "APPROVED" ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"}`}>{t.status}</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 italic mb-4">"{t.content}"</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-600">{t.date}</span>
              <div className="flex gap-2">
                {t.status === "PENDING" && (
                  <button className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 text-xs hover:bg-emerald-500/20 transition-colors"><Check className="w-3 h-3" /> Approve</button>
                )}
                <button className="p-1.5 rounded-lg text-slate-500 hover:text-red-400 hover:bg-black/[0.06] transition-all"><Trash2 className="w-3.5 h-3.5" /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
