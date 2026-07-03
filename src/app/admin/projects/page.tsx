import type { Metadata } from "next";
import { Plus, Star, Edit, Trash2 } from "lucide-react";

export const metadata: Metadata = { title: "Portfolio Projects" };

const projects = [
  { id: "1", title: "MediCare Patient Portal", client: "MediCare Solutions", category: "Healthcare", status: "PUBLISHED", featured: true, views: 1240 },
  { id: "2", title: "EduLearn LMS Platform", client: "EduTech Pro", category: "Education", status: "PUBLISHED", featured: true, views: 890 },
  { id: "3", title: "RetailMax E-Commerce", client: "RetailMax", category: "Retail", status: "PUBLISHED", featured: false, views: 670 },
  { id: "4", title: "LogiTrack Fleet System", client: "LogiTrack", category: "Logistics", status: "DRAFT", featured: false, views: 0 },
];

const statusColors: Record<string, string> = {
  PUBLISHED: "bg-emerald-500/10 text-emerald-400",
  DRAFT: "bg-amber-500/10 text-amber-400",
  ARCHIVED: "bg-slate-500/10 text-slate-400",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-[#0a0a08]">Portfolio Projects</h1>
          <p className="text-sm text-slate-500">{projects.length} projects</p>
        </div>
        <button className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#0a0a08] rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all">
          <Plus className="w-3.5 h-3.5" /> Add Project
        </button>
      </div>
      <div className="rounded-2xl bg-black/[0.02] border border-black/[0.08] overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-black/[0.08]">
              <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Project</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider hidden md:table-cell">Category</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
              <th className="px-5 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.04]">
            {projects.map((p) => (
              <tr key={p.id} className="hover:bg-black/[0.02] transition-colors">
                <td className="px-5 py-3">
                  <div className="flex items-center gap-2">
                    {p.featured && <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 flex-shrink-0" />}
                    <div>
                      <p className="font-medium text-[#0a0a08] text-sm">{p.title}</p>
                      <p className="text-xs text-slate-500">{p.client}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3 text-xs text-slate-500 hidden md:table-cell">{p.category}</td>
                <td className="px-5 py-3">
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold ${statusColors[p.status]}`}>{p.status}</span>
                </td>
                <td className="px-5 py-3">
                  <div className="flex items-center gap-1.5 justify-end">
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
