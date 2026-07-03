import type { Metadata } from "next";
import { Download, TrendingUp, Users, FileText, DollarSign } from "lucide-react";

export const metadata: Metadata = { title: "Reports" };

const reports = [
  { title: "Monthly Lead Report", desc: "All leads, status, and conversion rates for June 2025", period: "Jun 2025" },
  { title: "Blog Performance Report", desc: "Page views, read time, and top posts for June 2025", period: "Jun 2025" },
  { title: "Traffic Analytics Report", desc: "Sessions, bounce rate, and top pages for Q2 2025", period: "Q2 2025" },
  { title: "Newsletter Performance", desc: "Open rates, click rates, and subscriber growth", period: "Jun 2025" },
];

const kpis = [
  { icon: Users, label: "Total Leads (June)", value: "47", change: "+12%", up: true },
  { icon: FileText, label: "Blog Views (June)", value: "8,240", change: "+28%", up: true },
  { icon: TrendingUp, label: "Site Traffic (June)", value: "24,500", change: "+18%", up: true },
  { icon: DollarSign, label: "Quote Requests", value: "23", change: "+5%", up: true },
];

export default function ReportsPage() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-[#0a0a08]">Reports</h1>
        <p className="text-sm text-slate-500">Business intelligence and performance reports</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map(({ icon: Icon, label, value, change, up }) => (
          <div key={label} className="p-4 rounded-2xl bg-black/[0.02] border border-black/[0.08]">
            <div className="flex items-center gap-2 mb-2">
              <Icon className="w-4 h-4 text-indigo-400" />
              <span className="text-xs text-slate-500">{label}</span>
            </div>
            <p className="text-xl font-bold text-[#0a0a08]">{value}</p>
            <p className={`text-xs mt-1 ${up ? "text-emerald-400" : "text-red-400"}`}>{change} vs last month</p>
          </div>
        ))}
      </div>
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-[#0a0a08]">Available Reports</h3>
        {reports.map((r) => (
          <div key={r.title} className="flex items-center justify-between p-4 rounded-xl bg-black/[0.02] border border-black/[0.08] hover:border-black/[0.12] transition-all">
            <div>
              <p className="text-sm font-medium text-[#0a0a08]">{r.title}</p>
              <p className="text-xs text-slate-500">{r.desc}</p>
            </div>
            <div className="flex items-center gap-3 ml-4">
              <span className="text-xs text-slate-600 hidden sm:block">{r.period}</span>
              <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-400 hover:text-[#0a0a08] border border-black/[0.10] hover:border-white/[0.16] rounded-lg transition-all">
                <Download className="w-3.5 h-3.5" /> Export
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
