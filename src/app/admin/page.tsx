import type { Metadata } from "next";
import {
  Users,
  DollarSign,
  TrendingUp,
  Eye,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  MessageSquare,
  Star,
  Globe,
} from "lucide-react";

export const metadata: Metadata = { title: "Dashboard" };

const kpis = [
  {
    title: "Total Leads",
    value: "284",
    change: "+12.5%",
    trend: "up",
    icon: Users,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
  {
    title: "Revenue (MTD)",
    value: "₹12.4L",
    change: "+8.2%",
    trend: "up",
    icon: DollarSign,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    title: "Active Projects",
    value: "23",
    change: "+3",
    trend: "up",
    icon: TrendingUp,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    title: "Site Visitors",
    value: "18.4K",
    change: "-2.1%",
    trend: "down",
    icon: Eye,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
];

const recentLeads = [
  { name: "Arun Sharma", email: "arun@techco.in", service: "Web Development", status: "NEW", time: "5 min ago" },
  { name: "Priya Kumar", email: "priya@medcare.in", service: "Mobile App", status: "CONTACTED", time: "1 hr ago" },
  { name: "Vikram Reddy", email: "vikram@startup.io", service: "AI Solutions", status: "QUALIFIED", time: "3 hr ago" },
  { name: "Deepa Singh", email: "deepa@retail.com", service: "Digital Marketing", status: "PROPOSAL", time: "6 hr ago" },
  { name: "Mohammed Ali", email: "ali@logistics.in", service: "Cloud Solutions", status: "NEW", time: "1 day ago" },
];

const statusColors: Record<string, string> = {
  NEW: "bg-blue-500/20 text-blue-400",
  CONTACTED: "bg-yellow-500/20 text-yellow-400",
  QUALIFIED: "bg-purple-500/20 text-purple-400",
  PROPOSAL: "bg-indigo-500/20 text-indigo-400",
  WON: "bg-emerald-500/20 text-emerald-400",
  LOST: "bg-red-500/20 text-red-400",
};

const recentActivity = [
  { icon: MessageSquare, text: "New contact form submission from Arun Sharma", time: "5 min ago", color: "text-blue-400" },
  { icon: Star, text: "New testimonial submitted by Priya Kumar (5★)", time: "2 hr ago", color: "text-amber-400" },
  { icon: Globe, text: "Portfolio project 'MediCare Portal' published", time: "4 hr ago", color: "text-emerald-400" },
  { icon: Users, text: "New newsletter subscriber: vikram@startup.io", time: "6 hr ago", color: "text-purple-400" },
  { icon: Activity, text: "Server uptime check passed — all systems normal", time: "1 day ago", color: "text-cyan-400" },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl font-bold text-[#0a0a08]">Dashboard</h1>
        <p className="text-sm text-slate-500">Welcome back. Here's what's happening today.</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map(({ title, value, change, trend, icon: Icon, color, bg }) => (
          <div key={title} className="p-5 rounded-2xl bg-black/[0.02] border border-black/[0.08]">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-9 h-9 rounded-xl ${bg} flex items-center justify-center`}>
                <Icon className={`w-4.5 h-4.5 ${color}`} />
              </div>
              <div className={`flex items-center gap-1 text-xs font-medium ${
                trend === "up" ? "text-emerald-400" : "text-red-400"
              }`}>
                {trend === "up" ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
                {change}
              </div>
            </div>
            <div className="text-2xl font-bold text-[#0a0a08] mb-0.5">{value}</div>
            <div className="text-xs text-slate-500">{title}</div>
          </div>
        ))}
      </div>

      {/* Content grid */}
      <div className="grid lg:grid-cols-5 gap-6">
        {/* Recent Leads */}
        <div className="lg:col-span-3 rounded-2xl bg-black/[0.02] border border-black/[0.08] overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-black/[0.08]">
            <h2 className="text-sm font-semibold text-[#0a0a08]">Recent Leads</h2>
            <a href="/admin/leads" className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors">
              View all →
            </a>
          </div>
          <div className="divide-y divide-white/[0.04]">
            {recentLeads.map((lead) => (
              <div key={lead.email} className="flex items-center gap-4 px-5 py-3 hover:bg-black/[0.02] transition-colors">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xs font-bold text-[#0a0a08] flex-shrink-0">
                  {lead.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[#0a0a08] truncate">{lead.name}</p>
                  <p className="text-xs text-slate-500 truncate">{lead.service}</p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold ${statusColors[lead.status]}`}>
                    {lead.status}
                  </span>
                  <span className="text-[10px] text-slate-600">{lead.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-2 rounded-2xl bg-black/[0.02] border border-black/[0.08] overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-black/[0.08]">
            <h2 className="text-sm font-semibold text-[#0a0a08]">Activity</h2>
            <a href="/admin/activity" className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors">
              View all →
            </a>
          </div>
          <div className="p-4 space-y-4">
            {recentActivity.map(({ icon: Icon, text, time, color }) => (
              <div key={time + text} className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-black/[0.04] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon className={`w-3.5 h-3.5 ${color}`} />
                </div>
                <div>
                  <p className="text-xs text-slate-300 leading-relaxed">{text}</p>
                  <p className="text-[10px] text-slate-600 mt-0.5">{time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Blog Posts", value: "24", sub: "18 published" },
          { label: "Portfolio Items", value: "45", sub: "38 live" },
          { label: "Testimonials", value: "67", sub: "52 approved" },
          { label: "Newsletter", value: "1.2K", sub: "subscribers" },
        ].map(({ label, value, sub }) => (
          <div key={label} className="p-4 rounded-xl bg-black/[0.02] border border-black/[0.08]">
            <div className="text-xl font-bold text-[#0a0a08] mb-0.5">{value}</div>
            <div className="text-xs font-medium text-slate-400">{label}</div>
            <div className="text-[10px] text-slate-600">{sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
