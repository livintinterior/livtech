import type { Metadata } from "next";
import { Mail, Edit, Eye } from "lucide-react";

export const metadata: Metadata = { title: "Email Templates" };

const templates = [
  { id: "1", name: "Contact Form Confirmation", trigger: "contact_form_submit", subject: "Thanks for reaching out — Livetech.in", lastUpdated: "Jun 10, 2025", status: "ACTIVE" },
  { id: "2", name: "Quote Request Acknowledgment", trigger: "quote_form_submit", subject: "Your quote request is in! — Livetech.in", lastUpdated: "Jun 8, 2025", status: "ACTIVE" },
  { id: "3", name: "Consultation Booking Confirmed", trigger: "consultation_booked", subject: "Consultation confirmed — Livetech.in", lastUpdated: "Jun 5, 2025", status: "ACTIVE" },
  { id: "4", name: "Newsletter Welcome", trigger: "newsletter_subscribe", subject: "Welcome to the Livetech newsletter!", lastUpdated: "May 30, 2025", status: "ACTIVE" },
  { id: "5", name: "Admin New Lead Alert", trigger: "admin_new_lead", subject: "🔔 New lead from [Name]", lastUpdated: "May 25, 2025", status: "ACTIVE" },
];

export default function EmailTemplatesPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-[#0a0a08]">Email Templates</h1>
          <p className="text-sm text-slate-500">{templates.length} templates configured</p>
        </div>
      </div>
      <div className="space-y-3">
        {templates.map((t) => (
          <div key={t.id} className="flex items-center justify-between p-4 rounded-xl bg-black/[0.02] border border-black/[0.08] hover:border-black/[0.12] transition-all">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4 text-indigo-400" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-[#0a0a08]">{t.name}</p>
                <p className="text-xs text-slate-500 truncate">Trigger: {t.trigger} · {t.subject}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0 ml-4">
              <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold hidden sm:inline-flex ${t.status === "ACTIVE" ? "bg-emerald-500/10 text-emerald-400" : "bg-slate-500/10 text-slate-400"}`}>{t.status}</span>
              <button className="p-1.5 rounded-lg text-slate-500 hover:text-sky-400 hover:bg-black/[0.06] transition-all"><Eye className="w-3.5 h-3.5" /></button>
              <button className="p-1.5 rounded-lg text-slate-500 hover:text-indigo-400 hover:bg-black/[0.06] transition-all"><Edit className="w-3.5 h-3.5" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
