import type { Metadata } from "next";
import { Search, Mail, Star, Trash2 } from "lucide-react";

export const metadata: Metadata = { title: "Messages" };

const messages = [
  { id: "1", name: "Arun Sharma", email: "arun@techco.in", subject: "Website development inquiry", preview: "Hi, I'm looking for a team to build a corporate website for our company...", date: "5 min ago", read: false, starred: false },
  { id: "2", name: "Priya Kumar", email: "priya@medcare.in", subject: "Mobile app development for healthcare", preview: "We need a patient management mobile app with telemedicine features...", date: "1 hr ago", read: false, starred: true },
  { id: "3", name: "Vikram Reddy", email: "vikram@startup.io", subject: "AI chatbot integration quote", preview: "Can you provide a quote for integrating an AI chatbot into our existing...", date: "3 hr ago", read: true, starred: false },
  { id: "4", name: "Deepa Singh", email: "deepa@retail.com", subject: "E-commerce redesign project", preview: "Our e-commerce website needs a complete redesign and performance...", date: "6 hr ago", read: true, starred: false },
  { id: "5", name: "Mohammed Ali", email: "ali@logistics.in", subject: "Cloud migration inquiry", preview: "We want to migrate our on-premise servers to AWS. Looking for experienced...", date: "1 day ago", read: true, starred: true },
];

export default function MessagesPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-[#0a0a08]">Messages</h1>
          <p className="text-sm text-slate-500">2 unread messages</p>
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
        <input type="search" placeholder="Search messages..." className="w-full max-w-xs pl-9 pr-4 py-2 rounded-lg bg-black/[0.04] border border-black/[0.10] text-sm text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/30 transition-all" />
      </div>

      <div className="rounded-2xl bg-black/[0.02] border border-black/[0.08] overflow-hidden divide-y divide-white/[0.04]">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex items-start gap-4 px-5 py-4 hover:bg-black/[0.02] transition-colors cursor-pointer ${!msg.read ? "bg-indigo-500/[0.03]" : ""}`}>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xs font-bold text-[#0a0a08] flex-shrink-0 mt-0.5">
              {msg.name[0]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-0.5">
                <p className={`text-sm font-medium ${!msg.read ? "text-[#0a0a08]" : "text-slate-400"}`}>{msg.name}</p>
                <span className="text-[10px] text-slate-600 flex-shrink-0 ml-2">{msg.date}</span>
              </div>
              <p className={`text-sm truncate mb-0.5 ${!msg.read ? "text-slate-300 font-medium" : "text-slate-500"}`}>{msg.subject}</p>
              <p className="text-xs text-slate-600 truncate">{msg.preview}</p>
            </div>
            <div className="flex items-center gap-1.5 flex-shrink-0">
              {!msg.read && <div className="w-2 h-2 rounded-full bg-indigo-500" />}
              <button className={`p-1 rounded transition-colors ${msg.starred ? "text-amber-400" : "text-slate-700 hover:text-slate-400"}`}><Star className="w-3.5 h-3.5" /></button>
              <button className="p-1 rounded text-slate-700 hover:text-red-400 transition-colors"><Trash2 className="w-3.5 h-3.5" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
