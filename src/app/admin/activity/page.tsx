import type { Metadata } from "next";
import { Activity, Users, FileText, Image, Settings, MessageSquare } from "lucide-react";

export const metadata: Metadata = { title: "Activity Logs" };

const logs = [
  { id: "1", user: "Sumanth V.", action: "Published blog post", entity: "Top Web Development Trends", type: "blog", time: "5 min ago" },
  { id: "2", user: "Anika R.", action: "Approved testimonial", entity: "Rajesh Kumar — MediCare", type: "testimonial", time: "32 min ago" },
  { id: "3", user: "Vikram N.", action: "Added portfolio project", entity: "GovConnect Citizen Portal", type: "portfolio", time: "2 hr ago" },
  { id: "4", user: "Sumanth V.", action: "Updated settings", entity: "Site configuration", type: "settings", time: "4 hr ago" },
  { id: "5", user: "Anika R.", action: "Responded to lead", entity: "Arun Sharma — Web Dev", type: "lead", time: "5 hr ago" },
  { id: "6", user: "Deepa S.", action: "Uploaded media", entity: "portfolio-medicare-1.jpg", type: "media", time: "6 hr ago" },
  { id: "7", user: "Vikram N.", action: "Created blog post", entity: "SEO Technical Guide 2025 (Draft)", type: "blog", time: "1 day ago" },
  { id: "8", user: "Sumanth V.", action: "Invited user", entity: "deepa@livetech.in", type: "user", time: "2 days ago" },
];

const typeIcons: Record<string, { icon: typeof Activity; color: string }> = {
  blog: { icon: FileText, color: "text-blue-400" },
  testimonial: { icon: MessageSquare, color: "text-amber-400" },
  portfolio: { icon: Image, color: "text-emerald-400" },
  settings: { icon: Settings, color: "text-purple-400" },
  lead: { icon: Users, color: "text-indigo-400" },
  media: { icon: Image, color: "text-cyan-400" },
  user: { icon: Users, color: "text-pink-400" },
};

export default function ActivityPage() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-[#0a0a08]">Activity Logs</h1>
        <p className="text-sm text-slate-500">Recent actions across the admin panel</p>
      </div>
      <div className="rounded-2xl bg-black/[0.02] border border-black/[0.08] divide-y divide-white/[0.04]">
        {logs.map((log) => {
          const { icon: Icon, color } = typeIcons[log.type] || { icon: Activity, color: "text-slate-400" };
          return (
            <div key={log.id} className="flex items-center gap-4 px-5 py-3.5 hover:bg-black/[0.02] transition-colors">
              <div className="w-8 h-8 rounded-xl bg-black/[0.04] flex items-center justify-center flex-shrink-0">
                <Icon className={`w-3.5 h-3.5 ${color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-300">
                  <span className="font-medium text-[#0a0a08]">{log.user}</span>{" "}
                  <span className="text-slate-400">{log.action}</span>
                </p>
                <p className="text-xs text-slate-600 truncate">{log.entity}</p>
              </div>
              <span className="text-xs text-slate-600 flex-shrink-0">{log.time}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
