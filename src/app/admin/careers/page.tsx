import type { Metadata } from "next";
import { Plus, Edit, Trash2, Users } from "lucide-react";

export const metadata: Metadata = { title: "Careers" };

const jobs = [
  { id: "1", title: "Senior Full-Stack Developer", department: "Engineering", location: "Hyderabad / Remote", type: "Full-Time", applications: 12, status: "OPEN" },
  { id: "2", title: "UI/UX Designer", department: "Design", location: "Hyderabad / Remote", type: "Full-Time", applications: 8, status: "OPEN" },
  { id: "3", title: "Digital Marketing Specialist", department: "Marketing", location: "Hyderabad", type: "Full-Time", applications: 5, status: "OPEN" },
  { id: "4", title: "Flutter Developer", department: "Engineering", location: "Remote", type: "Contract", applications: 14, status: "OPEN" },
  { id: "5", title: "DevOps Engineer", department: "Infrastructure", location: "Hyderabad / Remote", type: "Full-Time", applications: 3, status: "CLOSED" },
];

const statusColors: Record<string, string> = {
  OPEN: "bg-emerald-500/10 text-emerald-400",
  CLOSED: "bg-slate-500/10 text-slate-400",
  PAUSED: "bg-amber-500/10 text-amber-400",
};

export default function CareersAdminPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-[#0a0a08]">Careers</h1>
          <p className="text-sm text-slate-500">{jobs.filter(j => j.status === "OPEN").length} open positions</p>
        </div>
        <button className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#0a0a08] rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all">
          <Plus className="w-3.5 h-3.5" /> Add Job
        </button>
      </div>
      <div className="rounded-2xl bg-black/[0.02] border border-black/[0.08] overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-black/[0.08]">
              <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Position</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider hidden md:table-cell">Applicants</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
              <th className="px-5 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.04]">
            {jobs.map((j) => (
              <tr key={j.id} className="hover:bg-black/[0.02] transition-colors">
                <td className="px-5 py-3">
                  <p className="font-medium text-[#0a0a08] text-sm">{j.title}</p>
                  <p className="text-xs text-slate-500">{j.department} · {j.type} · {j.location}</p>
                </td>
                <td className="px-5 py-3 hidden md:table-cell">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Users className="w-3.5 h-3.5" />{j.applications}
                  </div>
                </td>
                <td className="px-5 py-3">
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold ${statusColors[j.status]}`}>{j.status}</span>
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
