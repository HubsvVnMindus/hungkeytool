import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Accent = "primary" | "updating" | "done" | "error";

export function HudPanel({
  children,
  className,
  accent = "primary",
}: {
  children: ReactNode;
  className?: string;
  accent?: Accent;
}) {
  return (
    <div className={cn("hud-panel hud-accent-" + accent, className)}>
      {children}
    </div>
  );
}
