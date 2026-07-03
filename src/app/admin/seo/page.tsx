import type { Metadata } from "next";
import { Save, Globe, Search, Share2 } from "lucide-react";

export const metadata: Metadata = { title: "SEO Settings" };

export default function SeoSettingsPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-[#0a0a08]">SEO Settings</h1>
          <p className="text-sm text-slate-500">Configure meta tags, Open Graph, and structured data</p>
        </div>
        <button className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#0a0a08] rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all">
          <Save className="w-3.5 h-3.5" /> Save Changes
        </button>
      </div>

      {[
        {
          icon: Globe, title: "Default Meta Tags",
          fields: [
            { label: "Site Title", value: "Livetech.in — Digital Transformation Experts", type: "text" },
            { label: "Meta Description", value: "Livetech.in provides expert web development, mobile apps, UI/UX design, digital marketing, AI solutions, and more for businesses across 16 industries.", type: "textarea" },
            { label: "Default Keywords", value: "web development, mobile app development, UI/UX design, digital marketing, SEO, cloud solutions", type: "text" },
          ],
        },
        {
          icon: Share2, title: "Open Graph",
          fields: [
            { label: "OG Image URL", value: "/images/og-image.png", type: "text" },
            { label: "OG Site Name", value: "Livetech.in", type: "text" },
            { label: "Twitter Handle", value: "@livetech_in", type: "text" },
          ],
        },
        {
          icon: Search, title: "Search Console",
          fields: [
            { label: "Google Verification Code", value: "", type: "text" },
            { label: "Bing Verification Code", value: "", type: "text" },
          ],
        },
      ].map(({ icon: Icon, title, fields }) => (
        <div key={title} className="p-5 rounded-2xl bg-black/[0.02] border border-black/[0.08]">
          <div className="flex items-center gap-2 mb-4">
            <Icon className="w-4 h-4 text-indigo-400" />
            <h3 className="text-sm font-semibold text-[#0a0a08]">{title}</h3>
          </div>
          <div className="space-y-4">
            {fields.map((f) => (
              <div key={f.label}>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">{f.label}</label>
                {f.type === "textarea" ? (
                  <textarea defaultValue={f.value} rows={3} className="w-full px-3 py-2 rounded-lg bg-black/[0.04] border border-black/[0.10] text-sm text-[#0a0a08] placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 resize-none" />
                ) : (
                  <input type="text" defaultValue={f.value} className="w-full px-3 py-2 rounded-lg bg-black/[0.04] border border-black/[0.10] text-sm text-[#0a0a08] placeholder-slate-600 focus:outline-none focus:border-indigo-500/50" />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
