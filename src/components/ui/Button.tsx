import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "whatsapp" | "white";
type Size = "md" | "lg";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
  size?: Size;
}

const variantClasses: Record<Variant, string> = {
  primary: "gradient-main text-white hover:brightness-110 shadow-lg shadow-brand-red/20",
  secondary: "bg-surface-2 text-text border border-border hover:bg-border/60",
  whatsapp: "bg-[#25d366] text-white hover:brightness-110 shadow-lg shadow-[#25d366]/25",
  white: "bg-white text-brand-red hover:brightness-95 shadow-lg shadow-black/10",
};

const sizeClasses: Record<Size, string> = {
  md: "text-sm px-5 py-2.5 rounded-xl",
  lg: "text-base px-7 py-3.5 rounded-2xl",
};

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-150",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
