import Link from "next/link";
import { cn } from "@/lib/cn";

export default function PracticeAreaCard({
  title,
  description,
  href,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-ink/10 bg-white p-6 shadow-sm transition",
        "hover:-translate-y-1 hover:shadow-soft"
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold/80 to-transparent opacity-70" />

      <div className="flex items-start gap-4">
        {icon ? (
          <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-xl border border-ink/10 bg-paper text-ink">
            {icon}
          </div>
        ) : null}

        <div>
          <h3 className="font-serif text-xl text-ink">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink/70">{description}</p>
          <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-ink">
            Learn more <span className="text-gold transition group-hover:translate-x-0.5">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
