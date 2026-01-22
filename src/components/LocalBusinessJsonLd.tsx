import { getLegalServiceJsonLd } from "@/lib/schema";

export default function LocalBusinessJsonLd() {
  const jsonLd = getLegalServiceJsonLd();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
