import type { Metadata } from "next";
import { Database, Download, RefreshCw, CheckCircle, Clock } from "lucide-react";

export const metadata: Metadata = { title: "Backup Manager" };

const backups = [
  { id: "1", name: "Auto Backup — Jun 27, 2025", size: "24.3 MB", type: "AUTO", status: "SUCCESS", created: "Today 03:00 AM" },
  { id: "2", name: "Auto Backup — Jun 26, 2025", size: "24.1 MB", type: "AUTO", status: "SUCCESS", created: "Yesterday 03:00 AM" },
  { id: "3", name: "Manual Backup — Pre-deployment", size: "23.8 MB", type: "MANUAL", status: "SUCCESS", created: "Jun 25, 2025 11:32 AM" },
  { id: "4", name: "Auto Backup — Jun 25, 2025", size: "23.7 MB", type: "AUTO", status: "SUCCESS", created: "Jun 25, 2025 03:00 AM" },
  { id: "5", name: "Auto Backup — Jun 24, 2025", size: "23.5 MB", type: "AUTO", status: "FAILED", created: "Jun 24, 2025 03:00 AM" },
];

export default function BackupPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-[#0a0a08]">Backup Manager</h1>
          <p className="text-sm text-slate-500">Database and media backups</p>
        </div>
        <button className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#0a0a08] rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all">
          <Database className="w-3.5 h-3.5" /> Create Backup
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
          <CheckCircle className="w-4 h-4 text-emerald-400 mb-2" />
          <p className="text-sm font-semibold text-[#0a0a08]">Last Successful</p>
          <p className="text-xs text-slate-400">Today 03:00 AM</p>
        </div>
        <div className="p-4 rounded-2xl bg-black/[0.02] border border-black/[0.08]">
          <Clock className="w-4 h-4 text-indigo-400 mb-2" />
          <p className="text-sm font-semibold text-[#0a0a08]">Next Scheduled</p>
          <p className="text-xs text-slate-400">Tomorrow 03:00 AM</p>
        </div>
        <div className="p-4 rounded-2xl bg-black/[0.02] border border-black/[0.08]">
          <Database className="w-4 h-4 text-purple-400 mb-2" />
          <p className="text-sm font-semibold text-[#0a0a08]">Total Backups</p>
          <p className="text-xs text-slate-400">{backups.length} backups stored</p>
        </div>
      </div>

      <div className="rounded-2xl bg-black/[0.02] border border-black/[0.08] overflow-hidden">
        <div className="px-5 py-3 border-b border-black/[0.08]">
          <h3 className="text-sm font-semibold text-[#0a0a08]">Backup History</h3>
        </div>
        <div className="divide-y divide-white/[0.04]">
          {backups.map((b) => (
            <div key={b.id} className="flex items-center justify-between px-5 py-3 hover:bg-black/[0.02] transition-colors">
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full flex-shrink-0 ${b.status === "SUCCESS" ? "bg-emerald-500" : "bg-red-500"}`} />
                <div>
                  <p className="text-sm font-medium text-[#0a0a08]">{b.name}</p>
                  <p className="text-xs text-slate-500">{b.created} · {b.size}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 ml-4">
                <span className="text-[10px] font-medium text-slate-600 hidden sm:block">{b.type}</span>
                {b.status === "SUCCESS" && (
                  <>
                    <button className="p-1.5 rounded-lg text-slate-500 hover:text-indigo-400 hover:bg-black/[0.06] transition-all"><Download className="w-3.5 h-3.5" /></button>
                    <button className="p-1.5 rounded-lg text-slate-500 hover:text-emerald-400 hover:bg-black/[0.06] transition-all"><RefreshCw className="w-3.5 h-3.5" /></button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
