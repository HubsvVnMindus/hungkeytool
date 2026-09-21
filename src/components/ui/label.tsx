import type { LabelHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Label({ className, ...props }: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn("font-display text-xs font-semibold tracking-wider text-muted", className)}
      {...props}
    />
  );
}
