import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

function styles(variant: Variant, size: Size) {
  const base =
    "inline-flex items-center justify-center rounded-xl font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-60";

  const sizes: Record<Size, string> = {
    sm: "h-10 px-4 text-sm",
    md: "h-11 px-5 text-sm",
    lg: "h-12 px-6 text-base",
  };

  const variants: Record<Variant, string> = {
    primary: "bg-gold text-ink shadow-glow hover:brightness-110 active:brightness-95",
    secondary:
      "bg-white/10 text-white border border-white/15 hover:bg-white/15 hover:border-gold/40",
    ghost:
      "bg-transparent text-white hover:bg-white/10 border border-transparent hover:border-white/15",
  };

  return cn(base, sizes[size], variants[variant]);
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
}) {
  return <button className={cn(styles(variant, size), className)} {...props} />;
}

export function ButtonLink({
  href,
  className,
  variant = "primary",
  size = "md",
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  size?: Size;
}) {
  return (
    <Link href={href} className={cn(styles(variant, size), className)} {...props} />
  );
}

export function ButtonExternal({
  href,
  className,
  variant = "primary",
  size = "md",
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  size?: Size;
}) {
  return (
    <a
      href={href}
      className={cn(styles(variant, size), className)}
      target="_blank"
      rel="noreferrer"
      {...props}
    />
  );
}
