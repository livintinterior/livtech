import type { Metadata } from "next";
import Image from "next/image";
import { Upload, Grid3x3, List, Trash2 } from "lucide-react";

export const metadata: Metadata = { title: "Media Library" };

const files = [
  { id: "1", name: "hero-banner.jpg", type: "image", size: "234 KB", url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&q=70", uploaded: "Jun 20, 2025" },
  { id: "2", name: "portfolio-medicare.jpg", type: "image", size: "189 KB", url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&q=70", uploaded: "Jun 18, 2025" },
  { id: "3", name: "portfolio-edulearn.jpg", type: "image", size: "156 KB", url: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=300&q=70", uploaded: "Jun 16, 2025" },
  { id: "4", name: "about-team.jpg", type: "image", size: "210 KB", url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&q=70", uploaded: "Jun 14, 2025" },
  { id: "5", name: "blog-webdev.jpg", type: "image", size: "178 KB", url: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&q=70", uploaded: "Jun 12, 2025" },
  { id: "6", name: "tech-stack.jpg", type: "image", size: "143 KB", url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&q=70", uploaded: "Jun 10, 2025" },
];

export default function MediaPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-[#0a0a08]">Media Library</h1>
          <p className="text-sm text-slate-500">{files.length} files</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg text-slate-500 hover:text-[#0a0a08] hover:bg-black/[0.06] transition-all"><Grid3x3 className="w-4 h-4" /></button>
          <button className="p-2 rounded-lg text-slate-500 hover:text-[#0a0a08] hover:bg-black/[0.06] transition-all"><List className="w-4 h-4" /></button>
          <button className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#0a0a08] rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all">
            <Upload className="w-3.5 h-3.5" /> Upload
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {files.map((f) => (
          <div key={f.id} className="group relative rounded-xl overflow-hidden bg-black/[0.02] border border-black/[0.08] hover:border-black/[0.15] transition-all">
            <div className="relative h-36">
              <Image src={f.url} alt={f.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/40 transition-all">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="p-2.5">
              <p className="text-xs font-medium text-[#0a0a08] truncate">{f.name}</p>
              <p className="text-[10px] text-slate-500">{f.size} · {f.uploaded}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
