import { cn } from "@/lib/cn";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-[0.22em] text-gold/90">
          {eyebrow.toUpperCase()}
        </p>
      ) : null}
      <h2 className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-relaxed text-ink/70 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
