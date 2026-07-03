import type { Metadata } from "next";
import { Save, Globe, Mail, Shield, Bell } from "lucide-react";

export const metadata: Metadata = { title: "Settings" };

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-xl font-bold text-[#0a0a08]">Settings</h1>
        <p className="text-sm text-slate-500">Manage website and system configuration</p>
      </div>

      {/* General Settings */}
      <div className="rounded-2xl bg-black/[0.02] border border-black/[0.08] overflow-hidden">
        <div className="flex items-center gap-3 px-5 py-4 border-b border-black/[0.08]">
          <Globe className="w-4 h-4 text-indigo-400" />
          <h2 className="text-sm font-semibold text-[#0a0a08]">General Settings</h2>
        </div>
        <div className="p-5 space-y-4">
          {[
            { label: "Site Name", value: "Livetech.in", type: "text" },
            { label: "Site URL", value: "https://livetech.in", type: "url" },
            { label: "Tagline", value: "Transforming Ideas into Powerful Digital Solutions", type: "text" },
            { label: "Contact Email", value: "hello@livetech.in", type: "email" },
            { label: "Support Email", value: "support@livetech.in", type: "email" },
            { label: "Phone Number", value: "+91-9XXXXXXXXX", type: "tel" },
          ].map(({ label, value, type }) => (
            <div key={label} className="grid grid-cols-3 gap-4 items-center">
              <label className="text-sm text-slate-400 col-span-1">{label}</label>
              <input defaultValue={value} type={type} className="col-span-2 px-3.5 py-2 rounded-lg bg-black/[0.04] border border-black/[0.10] text-sm text-[#0a0a08] focus:outline-none focus:border-indigo-500/30 transition-all" />
            </div>
          ))}
        </div>
      </div>

      {/* Email Settings */}
      <div className="rounded-2xl bg-black/[0.02] border border-black/[0.08] overflow-hidden">
        <div className="flex items-center gap-3 px-5 py-4 border-b border-black/[0.08]">
          <Mail className="w-4 h-4 text-purple-400" />
          <h2 className="text-sm font-semibold text-[#0a0a08]">Email Settings (Resend)</h2>
        </div>
        <div className="p-5 space-y-4">
          {[
            { label: "From Name", value: "Livetech.in", type: "text" },
            { label: "From Email", value: "hello@livetech.in", type: "email" },
            { label: "Reply-To", value: "hello@livetech.in", type: "email" },
          ].map(({ label, value, type }) => (
            <div key={label} className="grid grid-cols-3 gap-4 items-center">
              <label className="text-sm text-slate-400">{label}</label>
              <input defaultValue={value} type={type} className="col-span-2 px-3.5 py-2 rounded-lg bg-black/[0.04] border border-black/[0.10] text-sm text-[#0a0a08] focus:outline-none focus:border-indigo-500/30 transition-all" />
            </div>
          ))}
        </div>
      </div>

      {/* Feature Toggles */}
      <div className="rounded-2xl bg-black/[0.02] border border-black/[0.08] overflow-hidden">
        <div className="flex items-center gap-3 px-5 py-4 border-b border-black/[0.08]">
          <Shield className="w-4 h-4 text-emerald-400" />
          <h2 className="text-sm font-semibold text-[#0a0a08]">Feature Toggles</h2>
        </div>
        <div className="p-5 space-y-3">
          {[
            { label: "Maintenance Mode", description: "Show maintenance page to visitors", enabled: false },
            { label: "Blog Comments", description: "Allow comments on blog posts", enabled: true },
            { label: "Cookie Banner", description: "Show GDPR cookie consent banner", enabled: true },
            { label: "Live Chat", description: "Show WhatsApp chat widget", enabled: true },
            { label: "Analytics", description: "Enable Google Analytics tracking", enabled: true },
          ].map(({ label, description, enabled }) => (
            <div key={label} className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm font-medium text-[#0a0a08]">{label}</p>
                <p className="text-xs text-slate-500">{description}</p>
              </div>
              <div className={`relative w-10 h-5 rounded-full cursor-pointer transition-colors ${enabled ? "bg-indigo-600" : "bg-white/[0.1]"}`}>
                <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${enabled ? "translate-x-5" : "translate-x-0.5"}`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Save */}
      <div className="flex justify-end">
        <button className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#0a0a08] rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-500/20">
          <Save className="w-4 h-4" /> Save Changes
        </button>
      </div>
    </div>
  );
}
