import type { Metadata } from "next";
import { Mail, Users, TrendingUp, Download } from "lucide-react";

export const metadata: Metadata = { title: "Newsletter" };

const subscribers = [
  { id: "1", email: "priya@example.com", name: "Priya Sharma", subscribed: "Jun 20, 2025", status: "ACTIVE" },
  { id: "2", email: "arun@techcorp.in", name: "Arun Patel", subscribed: "Jun 18, 2025", status: "ACTIVE" },
  { id: "3", email: "sunita@medicorp.in", name: "Sunita Reddy", subscribed: "Jun 15, 2025", status: "ACTIVE" },
  { id: "4", email: "vikram@startup.io", name: "Vikram Singh", subscribed: "Jun 10, 2025", status: "UNSUBSCRIBED" },
  { id: "5", email: "deepa@edutechpro.in", name: "Deepa Iyer", subscribed: "Jun 5, 2025", status: "ACTIVE" },
];

const stats = [
  { icon: Users, label: "Total Subscribers", value: "1,248", trend: "+23 this week" },
  { icon: Mail, label: "Last Campaign Open Rate", value: "42%", trend: "Industry avg: 21%" },
  { icon: TrendingUp, label: "Click Rate", value: "8.4%", trend: "+1.2% vs last" },
];

export default function NewsletterPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-[#0a0a08]">Newsletter</h1>
          <p className="text-sm text-slate-500">Manage subscribers and campaigns</p>
        </div>
        <button className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#0a0a08] rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all">
          <Mail className="w-3.5 h-3.5" /> New Campaign
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map(({ icon: Icon, label, value, trend }) => (
          <div key={label} className="p-4 rounded-2xl bg-black/[0.02] border border-black/[0.08]">
            <div className="flex items-center gap-2 mb-2">
              <Icon className="w-4 h-4 text-indigo-400" />
              <span className="text-xs text-slate-500">{label}</span>
            </div>
            <p className="text-2xl font-bold text-[#0a0a08]">{value}</p>
            <p className="text-xs text-slate-600 mt-1">{trend}</p>
          </div>
        ))}
      </div>
      <div className="rounded-2xl bg-black/[0.02] border border-black/[0.08] overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3 border-b border-black/[0.08]">
          <h3 className="text-sm font-semibold text-[#0a0a08]">Subscribers</h3>
          <button className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-[#0a0a08] transition-colors">
            <Download className="w-3.5 h-3.5" /> Export CSV
          </button>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-black/[0.06]">
              <th className="text-left px-5 py-2.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">Subscriber</th>
              <th className="text-left px-5 py-2.5 text-xs font-semibold text-slate-500 uppercase tracking-wider hidden md:table-cell">Joined</th>
              <th className="text-left px-5 py-2.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.04]">
            {subscribers.map((s) => (
              <tr key={s.id} className="hover:bg-black/[0.02] transition-colors">
                <td className="px-5 py-3">
                  <p className="font-medium text-[#0a0a08] text-sm">{s.name}</p>
                  <p className="text-xs text-slate-500">{s.email}</p>
                </td>
                <td className="px-5 py-3 text-xs text-slate-500 hidden md:table-cell">{s.subscribed}</td>
                <td className="px-5 py-3">
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold ${s.status === "ACTIVE" ? "bg-emerald-500/10 text-emerald-400" : "bg-slate-500/10 text-slate-400"}`}>{s.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
