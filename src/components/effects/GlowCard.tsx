"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils/cn";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  intensity?: "low" | "medium" | "high";
  border?: boolean;
}

export function GlowCard({
  children,
  className,
  glowColor = "rgba(105, 135, 85, 0.35)",
  intensity = "medium",
  border = true,
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const blurAmounts = {
    low: 60,
    medium: 80,
    high: 120,
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={cn(
        "relative rounded-2xl overflow-hidden transition-transform duration-300",
        isHovering && "scale-[1.01]",
        className
      )}
    >
      {/* Glow spotlight */}
      {isHovering && (
        <div
          className="pointer-events-none absolute transition-opacity duration-300"
          style={{
            left: position.x,
            top: position.y,
            width: blurAmounts[intensity] * 2,
            height: blurAmounts[intensity] * 2,
            transform: "translate(-50%, -50%)",
            background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
            zIndex: 1,
          }}
        />
      )}

      {/* Border glow */}
      {border && (
        <div
          className={cn(
            "absolute inset-0 rounded-2xl transition-opacity duration-300",
            isHovering ? "opacity-100" : "opacity-0"
          )}
          style={{
            background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${glowColor} 0%, transparent 60%)`,
            padding: "1px",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
