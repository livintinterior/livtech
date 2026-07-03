"use client";

import { useState } from "react";
import Link from "next/link";
import { Bell, Search, ExternalLink, Moon, Sun } from "lucide-react";

export function AdminTopbar() {
  const [notifications] = useState(3);

  return (
    <header className="flex items-center justify-between h-14 px-6 border-b border-black/[0.08] bg-[#030712]/80 backdrop-blur-sm flex-shrink-0">
      {/* Search */}
      <div className="relative hidden sm:block">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
        <input
          type="search"
          placeholder="Search..."
          className="pl-9 pr-4 py-1.5 rounded-lg bg-black/[0.04] border border-black/[0.08] text-sm text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/30 w-56 transition-all"
        />
      </div>

      <div className="flex items-center gap-3 ml-auto">
        {/* Live site link */}
        <Link
          href="/"
          target="_blank"
          className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-[#0a0a08] border border-black/[0.08] rounded-lg hover:border-black/[0.15] transition-all"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          View Site
        </Link>

        {/* Notifications */}
        <button className="relative p-2 rounded-lg text-slate-400 hover:text-[#0a0a08] hover:bg-black/[0.06] transition-all">
          <Bell className="w-4 h-4" />
          {notifications > 0 && (
            <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500" />
          )}
        </button>

        {/* User avatar */}
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-xs font-bold text-[#0a0a08] cursor-pointer">
          A
        </div>
      </div>
    </header>
  );
}
