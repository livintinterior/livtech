import type { Metadata } from "next";
import { Database, Table, RefreshCw, AlertCircle } from "lucide-react";

export const metadata: Metadata = { title: "Database" };

const tables = [
  { name: "User", rows: 4, size: "64 KB" },
  { name: "Lead", rows: 47, size: "128 KB" },
  { name: "BlogPost", rows: 6, size: "512 KB" },
  { name: "Portfolio", rows: 9, size: "256 KB" },
  { name: "Testimonial", rows: 12, size: "96 KB" },
  { name: "NewsletterSubscriber", rows: 1248, size: "1.2 MB" },
  { name: "Service", rows: 14, size: "48 KB" },
  { name: "PricingPlan", rows: 3, size: "16 KB" },
  { name: "Career", rows: 5, size: "32 KB" },
  { name: "MediaFile", rows: 34, size: "48 KB" },
  { name: "ActivityLog", rows: 892, size: "768 KB" },
  { name: "SiteSetting", rows: 1, size: "8 KB" },
];

export default function DatabasePage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-[#0a0a08]">Database</h1>
          <p className="text-sm text-slate-500">PostgreSQL via Prisma ORM</p>
        </div>
        <button className="flex items-center gap-1.5 px-3 py-2 text-xs text-slate-400 hover:text-[#0a0a08] border border-black/[0.10] hover:border-white/[0.16] rounded-lg transition-all">
          <RefreshCw className="w-3.5 h-3.5" /> Refresh
        </button>
      </div>

      <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3">
        <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-amber-300">Database connection is not yet configured. Set <code className="bg-black/30 px-1 rounded">DATABASE_URL</code> in your <code className="bg-black/30 px-1 rounded">.env.local</code> file and run <code className="bg-black/30 px-1 rounded">npx prisma db push</code>.</p>
      </div>

      <div className="rounded-2xl bg-black/[0.02] border border-black/[0.08] overflow-hidden">
        <div className="flex items-center gap-2 px-5 py-3 border-b border-black/[0.08]">
          <Database className="w-4 h-4 text-indigo-400" />
          <h3 className="text-sm font-semibold text-[#0a0a08]">Schema Tables</h3>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-black/[0.06]">
              <th className="text-left px-5 py-2.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">Table</th>
              <th className="text-left px-5 py-2.5 text-xs font-semibold text-slate-500 uppercase tracking-wider hidden sm:table-cell">Rows (estimated)</th>
              <th className="text-left px-5 py-2.5 text-xs font-semibold text-slate-500 uppercase tracking-wider hidden md:table-cell">Size</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.04]">
            {tables.map((t) => (
              <tr key={t.name} className="hover:bg-black/[0.02] transition-colors">
                <td className="px-5 py-2.5">
                  <div className="flex items-center gap-2">
                    <Table className="w-3.5 h-3.5 text-indigo-400" />
                    <span className="font-mono text-sm text-[#0a0a08]">{t.name}</span>
                  </div>
                </td>
                <td className="px-5 py-2.5 text-xs text-slate-500 hidden sm:table-cell">{t.rows.toLocaleString()}</td>
                <td className="px-5 py-2.5 text-xs text-slate-500 hidden md:table-cell">{t.size}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
