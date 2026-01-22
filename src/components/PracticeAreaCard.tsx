import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  title: string;
  description: string;
  href: string;
  icon?: ReactNode;
};

export default function PracticeAreaCard({
  title,
  description,
  href,
  icon,
}: Props) {
  return (
    <Link
      href={href}
      className="
        group
        block
        rounded-3xl
        border border-white/15
        bg-white/10
        p-7
        backdrop-blur
        transition
        hover:border-gold/50
        hover:bg-white/15
        hover:shadow-glow
      "
    >
      <div className="flex items-start gap-4">
        {icon ? (
          <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-gold/20 text-gold">
            {icon}
          </div>
        ) : null}

        <div>
          <h3 className="font-serif text-xl text-white group-hover:text-gold transition">
            {title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-white/75">
            {description}
          </p>

          <p className="mt-4 text-xs font-semibold tracking-wide text-gold/80 group-hover:text-gold">
            View details →
          </p>
        </div>
      </div>
    </Link>
  );
}
