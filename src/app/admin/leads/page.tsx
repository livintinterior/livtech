import type { Metadata } from "next";
import { Search, Filter, Download, Plus } from "lucide-react";

export const metadata: Metadata = { title: "Leads" };

const leads = [
  { id: "1", name: "Arun Sharma", email: "arun@techco.in", phone: "+91 98765 43210", service: "Website Development", budget: "₹25,000 - ₹50,000", status: "NEW", source: "CONTACT_FORM", date: "Jun 27, 2025" },
  { id: "2", name: "Priya Kumar", email: "priya@medcare.in", phone: "+91 87654 32109", service: "Mobile App", budget: "₹1L - ₹3L", status: "CONTACTED", source: "QUOTE_REQUEST", date: "Jun 26, 2025" },
  { id: "3", name: "Vikram Reddy", email: "vikram@startup.io", phone: "+91 76543 21098", service: "AI Solutions", budget: "₹50,000 - ₹1L", status: "QUALIFIED", source: "CONSULTATION", date: "Jun 25, 2025" },
  { id: "4", name: "Deepa Singh", email: "deepa@retail.com", phone: "+91 65432 10987", service: "Digital Marketing", budget: "₹10,000/mo", status: "PROPOSAL", source: "ORGANIC", date: "Jun 24, 2025" },
  { id: "5", name: "Mohammed Ali", email: "ali@logistics.in", phone: "+91 54321 09876", service: "Cloud Solutions", budget: "₹2L+", status: "NEW", source: "CONTACT_FORM", date: "Jun 23, 2025" },
  { id: "6", name: "Sunita Patel", email: "sunita@edu.org", phone: "+91 43210 98765", service: "Custom Software", budget: "₹5L+", status: "WON", source: "REFERRAL", date: "Jun 20, 2025" },
  { id: "7", name: "Rajan Mehta", email: "rajan@finance.com", phone: "+91 32109 87654", service: "Cybersecurity", budget: "₹75,000 - ₹1.5L", status: "LOST", source: "ORGANIC", date: "Jun 18, 2025" },
];

const statusColors: Record<string, string> = {
  NEW: "bg-blue-500/20 text-blue-400 border-blue-500/20",
  CONTACTED: "bg-yellow-500/20 text-yellow-400 border-yellow-500/20",
  QUALIFIED: "bg-purple-500/20 text-purple-400 border-purple-500/20",
  PROPOSAL: "bg-indigo-500/20 text-indigo-400 border-indigo-500/20",
  NEGOTIATING: "bg-orange-500/20 text-orange-400 border-orange-500/20",
  WON: "bg-emerald-500/20 text-emerald-400 border-emerald-500/20",
  LOST: "bg-red-500/20 text-red-400 border-red-500/20",
};

export default function LeadsPage() {
  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-[#0a0a08]">Leads</h1>
          <p className="text-sm text-slate-500">{leads.length} total leads</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-400 border border-black/[0.10] rounded-lg hover:bg-black/[0.04] transition-colors">
            <Download className="w-3.5 h-3.5" /> Export
          </button>
          <button className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#0a0a08] rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all">
            <Plus className="w-3.5 h-3.5" /> Add Lead
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
          <input
            type="search"
            placeholder="Search leads..."
            className="w-full pl-9 pr-4 py-2 rounded-lg bg-black/[0.04] border border-black/[0.10] text-sm text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/30 transition-all"
          />
        </div>
        <button className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-400 border border-black/[0.10] rounded-lg hover:bg-black/[0.04] transition-colors">
          <Filter className="w-3.5 h-3.5" /> Filter
        </button>
      </div>

      {/* Table */}
      <div className="rounded-2xl bg-black/[0.02] border border-black/[0.08] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-black/[0.08]">
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Name</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider hidden md:table-cell">Service</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider hidden lg:table-cell">Budget</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider hidden sm:table-cell">Source</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider hidden lg:table-cell">Date</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04]">
              {leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-black/[0.02] transition-colors">
                  <td className="px-4 py-3">
                    <div>
                      <p className="font-medium text-[#0a0a08] text-sm">{lead.name}</p>
                      <p className="text-xs text-slate-500">{lead.email}</p>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-slate-400 hidden md:table-cell">{lead.service}</td>
                  <td className="px-4 py-3 text-slate-400 hidden lg:table-cell">{lead.budget}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold border ${statusColors[lead.status]}`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-500 hidden sm:table-cell">{lead.source.replace("_", " ")}</td>
                  <td className="px-4 py-3 text-xs text-slate-500 hidden lg:table-cell">{lead.date}</td>
                  <td className="px-4 py-3">
                    <button className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors font-medium">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
