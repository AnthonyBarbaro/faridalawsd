export default function TestimonialCard({
  quote,
  name,
}: {
  quote: string;
  name: string;
}) {
  return (
    <figure className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
      <div className="text-gold" aria-label="Five star rating">
        ★★★★★
      </div>
      <blockquote className="mt-3 text-sm leading-relaxed text-ink/80">
        “{quote}”
      </blockquote>
      <figcaption className="mt-5 text-sm font-medium text-ink">— {name}</figcaption>
    </figure>
  );
}
