import type { Metadata } from "next";
import { Shield, Edit } from "lucide-react";

export const metadata: Metadata = { title: "Roles & Permissions" };

const roles = [
  {
    name: "Super Admin",
    slug: "SUPER_ADMIN",
    color: "text-purple-400 bg-purple-500/10",
    users: 1,
    permissions: ["All permissions", "Delete data", "Manage users", "Billing access", "System settings"],
  },
  {
    name: "Admin",
    slug: "ADMIN",
    color: "text-indigo-400 bg-indigo-500/10",
    users: 2,
    permissions: ["Manage leads", "Manage blog", "Manage portfolio", "Manage testimonials", "View analytics"],
  },
  {
    name: "Editor",
    slug: "EDITOR",
    color: "text-cyan-400 bg-cyan-500/10",
    users: 2,
    permissions: ["Create/edit blog posts", "Upload media", "Edit portfolio", "View leads (read only)"],
  },
  {
    name: "Viewer",
    slug: "VIEWER",
    color: "text-slate-400 bg-slate-500/10",
    users: 0,
    permissions: ["View dashboard", "View reports", "View leads (read only)"],
  },
];

export default function RolesPage() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-[#0a0a08]">Roles & Permissions</h1>
        <p className="text-sm text-slate-500">Manage access levels for your team</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {roles.map((r) => (
          <div key={r.slug} className="p-5 rounded-2xl bg-black/[0.02] border border-black/[0.08]">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <Shield className={`w-5 h-5 ${r.color.split(" ")[0]}`} />
                <div>
                  <h3 className="text-sm font-bold text-[#0a0a08]">{r.name}</h3>
                  <p className="text-xs text-slate-500">{r.users} {r.users === 1 ? "user" : "users"}</p>
                </div>
              </div>
              <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold ${r.color}`}>{r.slug}</span>
            </div>
            <ul className="space-y-1.5 mb-4">
              {r.permissions.map((p) => (
                <li key={p} className="text-xs text-slate-400 flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-indigo-500/60" />{p}
                </li>
              ))}
            </ul>
            {r.slug !== "SUPER_ADMIN" && (
              <button className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-indigo-400 transition-colors">
                <Edit className="w-3.5 h-3.5" /> Edit permissions
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
