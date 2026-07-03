"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { GlowCard } from "@/components/effects/GlowCard";

interface ServiceCardProps {
  title: string;
  shortDesc: string;
  slug: string;
  iconElement?: ReactNode;
  color?: string;
  features?: readonly string[];
  className?: string;
  compact?: boolean;
}

export function ServiceCard({
  title,
  shortDesc,
  slug,
  features,
  className,
  compact = false,
}: ServiceCardProps) {
  return (
    <GlowCard className={cn("h-full", className)}>
      <Link href={`/services/${slug}`}>
        <div
          className={cn(
            "h-full rounded-2xl bg-[#f5f5f3]/80",
            "border border-black/[0.07] hover:border-black/[0.12] transition-all duration-300",
            "group relative overflow-hidden",
            compact ? "p-4" : "p-5"
          )}
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#86a372]/[0.03] to-transparent" />

          <h3 className={cn(
            "font-semibold text-black/90 mb-2 group-hover:text-[#0a0a08] transition-colors",
            compact ? "text-[12px]" : "text-[13px]"
          )}>
            {title}
          </h3>
          <p className="text-[12px] text-black/55 leading-relaxed mb-4">{shortDesc}</p>

          {features && !compact && (
            <ul className="space-y-1.5 mb-4">
              {features.slice(0, 3).map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-[11px] text-black/50">
                  <div className="w-1 h-1 rounded-full bg-[#a8c490]/50 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          )}

          <div className="flex items-center gap-1.5 text-[12px] font-medium text-[#3d5a2e]/75 group-hover:text-[#3d5a2e] transition-colors">
            Learn more
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </Link>
    </GlowCard>
  );
}
