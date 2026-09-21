import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-11 w-full bg-bg px-3 text-sm text-fg shadow-[inset_0_0_0_1px_var(--color-border)] outline-none placeholder:text-muted",
        "focus-visible:shadow-[inset_0_0_0_1px_var(--color-primary),0_0_0_3px_color-mix(in_oklab,var(--color-primary)_30%,transparent)]",
        className,
      )}
      {...props}
    />
  );
}
