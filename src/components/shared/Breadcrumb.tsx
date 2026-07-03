import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  const allItems = [{ label: "Home", href: "/" }, ...items];

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center gap-1.5 text-[12px] text-black/45", className)}
    >
      {allItems.map((item, index) => (
        <div key={item.label} className="flex items-center gap-1.5">
          {index > 0 && <ChevronRight className="w-3 h-3 text-black/52" />}
          {item.href && index < allItems.length - 1 ? (
            <Link
              href={item.href}
              className="hover:text-black/55 transition-colors flex items-center gap-1"
            >
              {index === 0 && <Home className="w-3 h-3" />}
              {index > 0 && item.label}
            </Link>
          ) : (
            <span className="text-black/45">
              {index === 0 ? <Home className="w-3 h-3" /> : item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}
