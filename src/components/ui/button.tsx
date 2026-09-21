import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 min-h-11 px-4 font-display text-sm font-semibold tracking-wide transition-[opacity,transform,background-color,box-shadow] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-fg shadow-[0_0_18px_color-mix(in_oklab,var(--color-primary)_45%,transparent)] hover:opacity-90",
        ghost:
          "bg-transparent text-fg shadow-[inset_0_0_0_1px_color-mix(in_oklab,var(--color-primary)_55%,transparent)] hover:bg-primary/10",
        muted: "bg-surface-2 text-fg hover:bg-surface",
        danger: "bg-status-error text-fg hover:opacity-90",
      },
    },
    defaultVariants: { variant: "primary" },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, variant, type = "button", ...props }: ButtonProps) {
  return <button type={type} className={cn(buttonVariants({ variant }), className)} {...props} />;
}
