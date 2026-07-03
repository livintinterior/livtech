import type { Metadata } from "next";
import Link from "next/link";
import { Plus, Search, Edit, Trash2, Eye } from "lucide-react";

export const metadata: Metadata = { title: "Blog" };

const posts = [
  { id: "1", title: "Top Web Development Trends Shaping 2025", category: "Web Development", author: "Livetech Team", status: "PUBLISHED", views: 1248, date: "Jan 15, 2025" },
  { id: "2", title: "Flutter vs React Native: Which to Choose in 2025?", category: "Mobile Dev", author: "Livetech Team", status: "PUBLISHED", views: 987, date: "Jan 8, 2025" },
  { id: "3", title: "How AI Chatbots Are Transforming Business Automation", category: "AI Solutions", author: "Livetech Team", status: "PUBLISHED", views: 756, date: "Dec 20, 2024" },
  { id: "4", title: "AWS vs Azure vs Google Cloud: Which Cloud Platform?", category: "Cloud", author: "Livetech Team", status: "PUBLISHED", views: 634, date: "Dec 10, 2024" },
  { id: "5", title: "The Complete Technical SEO Guide for 2025", category: "SEO", author: "Livetech Team", status: "DRAFT", views: 0, date: "Draft" },
  { id: "6", title: "Cybersecurity Essentials Every Startup Must Know", category: "Cybersecurity", author: "Livetech Team", status: "PUBLISHED", views: 412, date: "Nov 15, 2024" },
];

export default function AdminBlogPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-[#0a0a08]">Blog</h1>
          <p className="text-sm text-slate-500">{posts.length} posts total</p>
        </div>
        <button className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#0a0a08] rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all">
          <Plus className="w-3.5 h-3.5" /> New Post
        </button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
        <input type="search" placeholder="Search posts..." className="w-full max-w-xs pl-9 pr-4 py-2 rounded-lg bg-black/[0.04] border border-black/[0.10] text-sm text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/30 transition-all" />
      </div>

      <div className="rounded-2xl bg-black/[0.02] border border-black/[0.08] overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-black/[0.08]">
              <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Title</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider hidden md:table-cell">Category</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider hidden lg:table-cell">Views</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider hidden lg:table-cell">Date</th>
              <th className="px-5 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.04]">
            {posts.map((post) => (
              <tr key={post.id} className="hover:bg-black/[0.02] transition-colors">
                <td className="px-5 py-3">
                  <p className="font-medium text-[#0a0a08] text-sm line-clamp-1">{post.title}</p>
                  <p className="text-xs text-slate-500">{post.author}</p>
                </td>
                <td className="px-5 py-3 hidden md:table-cell">
                  <span className="px-2 py-0.5 rounded-md bg-indigo-500/10 text-[10px] font-medium text-indigo-400">{post.category}</span>
                </td>
                <td className="px-5 py-3">
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold ${
                    post.status === "PUBLISHED" ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"
                  }`}>{post.status}</span>
                </td>
                <td className="px-5 py-3 text-sm text-slate-400 hidden lg:table-cell">{post.views > 0 ? post.views.toLocaleString() : "—"}</td>
                <td className="px-5 py-3 text-xs text-slate-500 hidden lg:table-cell">{post.date}</td>
                <td className="px-5 py-3">
                  <div className="flex items-center gap-1.5 justify-end">
                    <button className="p-1.5 rounded-lg text-slate-500 hover:text-[#0a0a08] hover:bg-black/[0.06] transition-all"><Eye className="w-3.5 h-3.5" /></button>
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
