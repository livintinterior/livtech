"use client";

import { useState } from "react";
import { Zap, Eye, EyeOff, Lock, Mail } from "lucide-react";

export default function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#030712] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2.5 mb-8">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <Zap className="w-5 h-5 text-[#0a0a08] fill-white" />
          </div>
          <div>
            <p className="text-lg font-bold text-[#0a0a08]">Livetech.in</p>
            <p className="text-xs text-slate-500">Admin Dashboard</p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-black/[0.03] border border-black/[0.10] shadow-xl">
          <h1 className="text-xl font-bold text-[#0a0a08] mb-1">Welcome back</h1>
          <p className="text-sm text-slate-500 mb-6">Sign in to your admin account</p>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="email"
                  placeholder="admin@livetech.in"
                  className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-black/[0.04] border border-black/[0.10] text-[#0a0a08] text-sm placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:bg-black/[0.06] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-10 py-2.5 rounded-lg bg-black/[0.04] border border-black/[0.10] text-[#0a0a08] text-sm placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:bg-black/[0.06] transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-[#0a0a08] text-sm font-semibold transition-all shadow-lg shadow-indigo-500/20"
            >
              Sign In
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-slate-600 mt-6">
          © {new Date().getFullYear()} Livetech.in — All rights reserved
        </p>
      </div>
    </div>
  );
}
