import type { Metadata } from "next";
import { Plus, Edit, Shield, Trash2 } from "lucide-react";

export const metadata: Metadata = { title: "Users" };

const users = [
  { id: "1", name: "Sumanth Varma", email: "admin@livetech.in", role: "SUPER_ADMIN", status: "ACTIVE", lastLogin: "Today, 10:23 AM" },
  { id: "2", name: "Anika Reddy", email: "anika@livetech.in", role: "ADMIN", status: "ACTIVE", lastLogin: "Today, 9:45 AM" },
  { id: "3", name: "Vikram Naidu", email: "vikram@livetech.in", role: "EDITOR", status: "ACTIVE", lastLogin: "Yesterday, 6:30 PM" },
  { id: "4", name: "Deepa Sharma", email: "deepa@livetech.in", role: "EDITOR", status: "ACTIVE", lastLogin: "Jun 25, 2025" },
];

const roleColors: Record<string, string> = {
  SUPER_ADMIN: "bg-purple-500/20 text-purple-400",
  ADMIN: "bg-indigo-500/20 text-indigo-400",
  EDITOR: "bg-cyan-500/20 text-cyan-400",
  VIEWER: "bg-slate-500/20 text-slate-400",
};

export default function UsersPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-[#0a0a08]">Users</h1>
          <p className="text-sm text-slate-500">{users.length} team members</p>
        </div>
        <button className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#0a0a08] rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all">
          <Plus className="w-3.5 h-3.5" /> Invite User
        </button>
      </div>
      <div className="rounded-2xl bg-black/[0.02] border border-black/[0.08] overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-black/[0.08]">
              <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">User</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Role</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider hidden md:table-cell">Last Login</th>
              <th className="px-5 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.04]">
            {users.map((u) => (
              <tr key={u.id} className="hover:bg-black/[0.02] transition-colors">
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xs font-bold text-[#0a0a08] flex-shrink-0">{u.name[0]}</div>
                    <div>
                      <p className="font-medium text-[#0a0a08] text-sm">{u.name}</p>
                      <p className="text-xs text-slate-500">{u.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3">
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold ${roleColors[u.role]}`}>{u.role.replace("_", " ")}</span>
                </td>
                <td className="px-5 py-3 text-xs text-slate-500 hidden md:table-cell">{u.lastLogin}</td>
                <td className="px-5 py-3">
                  <div className="flex items-center gap-1.5 justify-end">
                    <button className="p-1.5 rounded-lg text-slate-500 hover:text-indigo-400 hover:bg-black/[0.06] transition-all"><Edit className="w-3.5 h-3.5" /></button>
                    {u.role !== "SUPER_ADMIN" && <button className="p-1.5 rounded-lg text-slate-500 hover:text-red-400 hover:bg-black/[0.06] transition-all"><Trash2 className="w-3.5 h-3.5" /></button>}
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
