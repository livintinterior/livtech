import type { Metadata } from "next";
import { Edit, Eye } from "lucide-react";
import { services } from "@/lib/constants/services";

export const metadata: Metadata = { title: "Services" };

export default function AdminServicesPage() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-[#0a0a08]">Services</h1>
        <p className="text-sm text-slate-500">{services.length} services configured</p>
      </div>
      <div className="rounded-2xl bg-black/[0.02] border border-black/[0.08] overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-black/[0.08]">
              <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Service</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider hidden md:table-cell">Features</th>
              <th className="px-5 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.04]">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <tr key={s.slug} className="hover:bg-black/[0.02] transition-colors">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br ${s.color} flex-shrink-0`}>
                        <Icon className="w-4 h-4 text-[#0a0a08]" />
                      </div>
                      <div>
                        <p className="font-medium text-[#0a0a08] text-sm">{s.title}</p>
                        <p className="text-xs text-slate-500 truncate max-w-xs">{s.shortDesc}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-xs text-slate-500 hidden md:table-cell">{s.features.length} features</td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-1.5 justify-end">
                      <a href={`/services/${s.slug}`} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg text-slate-500 hover:text-emerald-400 hover:bg-black/[0.06] transition-all"><Eye className="w-3.5 h-3.5" /></a>
                      <button className="p-1.5 rounded-lg text-slate-500 hover:text-indigo-400 hover:bg-black/[0.06] transition-all"><Edit className="w-3.5 h-3.5" /></button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
