"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils/cn";

interface AuroraBackgroundProps {
  className?: string;
  intensity?: "low" | "medium" | "high";
}

export function AuroraBackground({ className, intensity = "medium" }: AuroraBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const opacities = {
    low:    { p: "opacity-25", s: "opacity-18", t: "opacity-12" },
    medium: { p: "opacity-35", s: "opacity-22", t: "opacity-15" },
    high:   { p: "opacity-50", s: "opacity-35", t: "opacity-22" },
  };

  const o = opacities[intensity];

  return (
    <div
      ref={containerRef}
      className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}
      aria-hidden="true"
    >
      {/* Primary blob — forest sage */}
      <div
        className={cn("absolute -top-64 -left-48 w-[900px] h-[900px] rounded-full blur-[140px] animate-pulse", o.p)}
        style={{
          background: "radial-gradient(circle, rgba(75,98,55,0.40) 0%, rgba(55,72,38,0.15) 60%, transparent 100%)",
          animationDuration: "10s",
        }}
      />

      {/* Secondary blob — warm olive */}
      <div
        className={cn("absolute -top-32 right-0 w-[700px] h-[700px] rounded-full blur-[120px] animate-pulse", o.s)}
        style={{
          background: "radial-gradient(circle, rgba(95,85,48,0.30) 0%, rgba(70,62,35,0.12) 60%, transparent 100%)",
          animationDuration: "14s",
          animationDelay: "3s",
        }}
      />

      {/* Tertiary blob — deep forest */}
      <div
        className={cn("absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full blur-[100px] animate-pulse", o.t)}
        style={{
          background: "radial-gradient(circle, rgba(55,78,42,0.22) 0%, transparent 70%)",
          animationDuration: "18s",
          animationDelay: "6s",
        }}
      />

      {/* Bottom warmth */}
      <div
        className={cn("absolute bottom-0 right-1/4 w-[600px] h-[400px] rounded-full blur-[130px]", o.t)}
        style={{
          background: "radial-gradient(circle, rgba(100,88,52,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Edge fade — white sides */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-white/40" />

      {/* Very subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)
          `,
          backgroundSize: "52px 52px",
        }}
      />
    </div>
  );
}
