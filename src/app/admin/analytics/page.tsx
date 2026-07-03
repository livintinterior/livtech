import type { Metadata } from "next";
import { TrendingUp, Users, Eye, Clock } from "lucide-react";

export const metadata: Metadata = { title: "Analytics" };

const metrics = [
  { label: "Total Visitors", value: "18,432", change: "+12.5%", icon: Eye, color: "text-blue-400", bg: "bg-blue-500/10" },
  { label: "New Users", value: "5,841", change: "+8.3%", icon: Users, color: "text-purple-400", bg: "bg-purple-500/10" },
  { label: "Avg. Session", value: "3m 42s", change: "+5.1%", icon: Clock, color: "text-cyan-400", bg: "bg-cyan-500/10" },
  { label: "Bounce Rate", value: "38.2%", change: "-4.5%", icon: TrendingUp, color: "text-emerald-400", bg: "bg-emerald-500/10" },
];

const topPages = [
  { page: "/", views: "4,821", change: "+15%" },
  { page: "/services", views: "2,341", change: "+8%" },
  { page: "/portfolio", views: "1,892", change: "+12%" },
  { page: "/contact", views: "1,234", change: "+22%" },
  { page: "/about", views: "987", change: "+5%" },
  { page: "/blog", views: "854", change: "+18%" },
  { page: "/pricing", views: "723", change: "+9%" },
];

const trafficSources = [
  { source: "Organic Search", percentage: 45, color: "bg-indigo-500" },
  { source: "Direct", percentage: 28, color: "bg-purple-500" },
  { source: "Social Media", percentage: 15, color: "bg-cyan-500" },
  { source: "Referral", percentage: 8, color: "bg-emerald-500" },
  { source: "Email", percentage: 4, color: "bg-amber-500" },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-[#0a0a08]">Analytics</h1>
        <p className="text-sm text-slate-500">Last 30 days performance overview</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map(({ label, value, change, icon: Icon, color, bg }) => (
          <div key={label} className="p-5 rounded-2xl bg-black/[0.02] border border-black/[0.08]">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-9 h-9 rounded-xl ${bg} flex items-center justify-center`}>
                <Icon className={`w-4.5 h-4.5 ${color}`} />
              </div>
              <span className={`text-xs font-medium ${change.startsWith("-") && label !== "Bounce Rate" ? "text-red-400" : "text-emerald-400"}`}>
                {change}
              </span>
            </div>
            <div className="text-2xl font-bold text-[#0a0a08] mb-0.5">{value}</div>
            <div className="text-xs text-slate-500">{label}</div>
          </div>
        ))}
      </div>

      {/* Chart placeholder */}
      <div className="rounded-2xl bg-black/[0.02] border border-black/[0.08] p-6">
        <h2 className="text-sm font-semibold text-[#0a0a08] mb-4">Visitor Trends (Last 30 Days)</h2>
        <div className="h-48 flex items-end gap-1">
          {Array.from({ length: 30 }).map((_, i) => {
            const height = Math.random() * 80 + 20;
            return (
              <div
                key={i}
                className="flex-1 rounded-sm bg-gradient-to-t from-indigo-600 to-purple-600 opacity-70 hover:opacity-100 transition-opacity"
                style={{ height: `${height}%` }}
                title={`Day ${i + 1}`}
              />
            );
          })}
        </div>
        <div className="flex justify-between mt-2 text-[10px] text-slate-600">
          <span>Jun 1</span>
          <span>Jun 15</span>
          <span>Jun 27</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Top Pages */}
        <div className="rounded-2xl bg-black/[0.02] border border-black/[0.08] overflow-hidden">
          <div className="px-5 py-4 border-b border-black/[0.08]">
            <h2 className="text-sm font-semibold text-[#0a0a08]">Top Pages</h2>
          </div>
          <div className="divide-y divide-white/[0.04]">
            {topPages.map(({ page, views, change }) => (
              <div key={page} className="flex items-center justify-between px-5 py-3">
                <span className="text-sm text-slate-400 font-mono">{page}</span>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-[#0a0a08] font-medium">{views}</span>
                  <span className="text-xs text-emerald-400">{change}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="rounded-2xl bg-black/[0.02] border border-black/[0.08] p-5">
          <h2 className="text-sm font-semibold text-[#0a0a08] mb-5">Traffic Sources</h2>
          <div className="space-y-4">
            {trafficSources.map(({ source, percentage, color }) => (
              <div key={source}>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-slate-400">{source}</span>
                  <span className="text-[#0a0a08] font-medium">{percentage}%</span>
                </div>
                <div className="h-1.5 bg-black/[0.05] rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${color}`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
