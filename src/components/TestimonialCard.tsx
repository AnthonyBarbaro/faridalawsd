export default function TestimonialCard({
  quote,
  name,
}: {
  quote: string;
  name: string;
}) {
  return (
    <figure
      className="
        h-full
        rounded-3xl
        border border-white/15
        bg-white/10
        p-7
        shadow-card
        backdrop-blur
      "
    >
      {/* Stars */}
      <div className="text-gold text-sm tracking-wide">
        ★★★★★
      </div>

      {/* Quote */}
      <blockquote className="mt-4 text-sm leading-relaxed text-white/85">
        “{quote}”
      </blockquote>

      {/* Divider */}
      <div className="mt-6 h-px w-full bg-gold/40" />

      {/* Author */}
      <figcaption className="mt-4 text-sm font-medium text-white">
        — {name}
      </figcaption>
    </figure>
  );
}
