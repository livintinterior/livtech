"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BarChart3,
  Users,
  Briefcase,
  ImageIcon,
  FileText,
  Star,
  Package,
  DollarSign,
  UserCheck,
  Mail,
  MessageSquare,
  Search,
  Settings,
  Database,
  HardDrive,
  Activity,
  FileBarChart,
  Shield,
  Zap,
  ChevronLeft,
  ChevronRight,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils/cn";

const navItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { label: "Leads", href: "/admin/leads", icon: Users },
  { label: "Projects", href: "/admin/projects", icon: Briefcase },
  { label: "Portfolio", href: "/admin/portfolio", icon: ImageIcon },
  { label: "Blog", href: "/admin/blog", icon: FileText },
  { label: "Testimonials", href: "/admin/testimonials", icon: Star },
  { label: "Services", href: "/admin/services", icon: Package },
  { label: "Pricing", href: "/admin/pricing", icon: DollarSign },
  { label: "Careers", href: "/admin/careers", icon: UserCheck },
  { label: "Newsletter", href: "/admin/newsletter", icon: Mail },
  { label: "Messages", href: "/admin/messages", icon: MessageSquare },
  { label: "Media Library", href: "/admin/media", icon: ImageIcon },
  { label: "Users", href: "/admin/users", icon: Users },
  { label: "Roles", href: "/admin/roles", icon: Shield },
  { label: "SEO Settings", href: "/admin/seo", icon: Search },
  { label: "Settings", href: "/admin/settings", icon: Settings },
  { label: "Email Templates", href: "/admin/email-templates", icon: Mail },
  { label: "Backup Manager", href: "/admin/backup", icon: HardDrive },
  { label: "Database", href: "/admin/database", icon: Database },
  { label: "Reports", href: "/admin/reports", icon: FileBarChart },
  { label: "Activity Logs", href: "/admin/activity", icon: Activity },
];

export function AdminSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/admin" ? pathname === "/admin" : pathname.startsWith(href);

  return (
    <div
      className={cn(
        "relative flex flex-col bg-[#0a0f1e] border-r border-black/[0.08] transition-all duration-300 flex-shrink-0",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-5 border-b border-black/[0.08]">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
          <Zap className="w-4 h-4 text-[#0a0a08] fill-white" />
        </div>
        {!collapsed && (
          <div>
            <p className="text-sm font-bold text-[#0a0a08]">Livetech.in</p>
            <p className="text-[10px] text-slate-500">Admin Panel</p>
          </div>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-4 space-y-0.5 px-2 no-scrollbar">
        {navItems.map(({ label, href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-150 group",
              isActive(href)
                ? "bg-indigo-500/15 text-[#0a0a08] border border-indigo-500/20"
                : "text-slate-500 hover:text-slate-300 hover:bg-black/[0.04]"
            )}
            title={collapsed ? label : undefined}
          >
            <Icon className={cn("w-4 h-4 flex-shrink-0", isActive(href) ? "text-indigo-400" : "group-hover:text-slate-300")} />
            {!collapsed && <span className="truncate">{label}</span>}
            {!collapsed && isActive(href) && (
              <div className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-400" />
            )}
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-3 border-t border-black/[0.08]">
        {!collapsed && (
          <div className="flex items-center gap-3 p-2 mb-2 rounded-lg">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-xs font-bold text-[#0a0a08]">
              A
            </div>
            <div className="min-w-0">
              <p className="text-xs font-medium text-[#0a0a08] truncate">Admin User</p>
              <p className="text-[10px] text-slate-500">Super Admin</p>
            </div>
          </div>
        )}
        <button className={cn("flex items-center gap-2 text-xs text-slate-500 hover:text-slate-300 transition-colors px-2 py-1.5 rounded-lg hover:bg-black/[0.04] w-full", collapsed && "justify-center")}>
          <LogOut className="w-4 h-4" />
          {!collapsed && "Sign Out"}
        </button>
      </div>

      {/* Collapse Toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-24 w-6 h-6 rounded-full bg-[#0a0f1e] border border-white/[0.1] flex items-center justify-center text-slate-400 hover:text-[#0a0a08] transition-colors shadow-md"
      >
        {collapsed ? <ChevronRight className="w-3 h-3" /> : <ChevronLeft className="w-3 h-3" />}
      </button>
    </div>
  );
}
