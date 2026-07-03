import type { Metadata } from "next";
import { Plus, Search, Edit, Trash2, Eye, Star } from "lucide-react";

export const metadata: Metadata = { title: "Portfolio" };

const projects = [
  { id: "1", title: "MediCare Patient Portal", category: "Healthcare", client: "MediCare Solutions", status: "PUBLISHED", featured: true, views: 1234, date: "Dec 2024" },
  { id: "2", title: "EduLearn LMS Platform", category: "Education", client: "EduTech Pro", status: "PUBLISHED", featured: true, views: 987, date: "Nov 2024" },
  { id: "3", title: "RetailMax E-Commerce", category: "Retail", client: "RetailMax", status: "PUBLISHED", featured: true, views: 854, date: "Oct 2024" },
  { id: "4", title: "FinanceHub Dashboard", category: "Finance", client: "FinanceHub", status: "PUBLISHED", featured: false, views: 623, date: "Sep 2024" },
  { id: "5", title: "LogiTrack Fleet System", category: "Logistics", client: "LogiTrack", status: "PUBLISHED", featured: false, views: 412, date: "Aug 2024" },
  { id: "6", title: "BuildSmart Construction ERP", category: "Construction", client: "BuildSmart", status: "DRAFT", featured: false, views: 0, date: "Draft" },
];

export default function AdminPortfolioPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-[#0a0a08]">Portfolio</h1>
          <p className="text-sm text-slate-500">{projects.length} projects total</p>
        </div>
        <button className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#0a0a08] rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all">
          <Plus className="w-3.5 h-3.5" /> Add Project
        </button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
        <input type="search" placeholder="Search projects..." className="w-full max-w-xs pl-9 pr-4 py-2 rounded-lg bg-black/[0.04] border border-black/[0.10] text-sm text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/30 transition-all" />
      </div>

      <div className="rounded-2xl bg-black/[0.02] border border-black/[0.08] overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-black/[0.08]">
              <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Project</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider hidden md:table-cell">Category</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider hidden lg:table-cell">Featured</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider hidden lg:table-cell">Views</th>
              <th className="px-5 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.04]">
            {projects.map((p) => (
              <tr key={p.id} className="hover:bg-black/[0.02] transition-colors">
                <td className="px-5 py-3">
                  <p className="font-medium text-[#0a0a08] text-sm">{p.title}</p>
                  <p className="text-xs text-slate-500">{p.client}</p>
                </td>
                <td className="px-5 py-3 hidden md:table-cell">
                  <span className="px-2 py-0.5 rounded-md bg-indigo-500/10 text-[10px] font-medium text-indigo-400">{p.category}</span>
                </td>
                <td className="px-5 py-3">
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold ${p.status === "PUBLISHED" ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"}`}>{p.status}</span>
                </td>
                <td className="px-5 py-3 hidden lg:table-cell">
                  <Star className={`w-3.5 h-3.5 ${p.featured ? "text-amber-400 fill-amber-400" : "text-slate-700"}`} />
                </td>
                <td className="px-5 py-3 text-sm text-slate-400 hidden lg:table-cell">{p.views > 0 ? p.views.toLocaleString() : "—"}</td>
                <td className="px-5 py-3">
                  <div className="flex items-center gap-1.5 justify-end">
                    <button className="p-1.5 rounded-lg text-slate-500 hover:text-[#0a0a08] hover:bg-black/[0.06] transition-all"><Eye className="w-3.5 h-3.5" /></button>
                    <button className="p-1.5 rounded-lg text-slate-500 hover:text-indigo-400 hover:bg-black/[0.06] transition-all"><Edit className="w-3.5 h-3.5" /></button>
                    <button className="p-1.5 rounded-lg text-slate-500 hover:text-red-400 hover:bg-black/[0.06] transition-all"><Trash2 className="w-3.5 h-3.5" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
