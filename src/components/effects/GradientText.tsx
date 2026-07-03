import { cn } from "@/lib/utils/cn";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: "brand" | "warm" | "cool" | "white";
  animate?: boolean;
}

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span className={cn("text-[#0a0a08] inline", className)}>
      {children}
    </span>
  );
}
