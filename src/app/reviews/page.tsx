import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/lib/site";

const CANONICAL_PATH = "/reviews/";

export const metadata: Metadata = {
  title: "Client Reviews",
  description:
    "Read client reviews for Farida Law SD. Feedback from clients who value professionalism, clarity, and trust. Results vary and reviews are not a guarantee of a similar outcome.",
  alternates: {
    canonical: CANONICAL_PATH,
  },
  openGraph: {
    title: "Client Reviews | Farida Law SD",
    description:
      "Read client reviews for Farida Law SD. Feedback from clients who value professionalism, clarity, and trust.",
    url: CANONICAL_PATH,
    siteName: "Farida Law SD",
    type: "website",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Farida Law SD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Reviews | Farida Law SD",
    description:
      "Read client reviews for Farida Law SD. Feedback from clients who value professionalism, clarity, and trust.",
    images: ["/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function ReviewsPage() {
  const baseUrl = site.url; // absolute like "https://faridalawsd.com"
  const canonicalUrl = new URL(CANONICAL_PATH, baseUrl).toString();

  // If your testimonials are placeholders, consider setting robots to noindex until real reviews are live.
  // For now, we keep index:true because you asked for indexing.
  const testimonials = site.testimonials ?? [];

  // JSON-LD: Page + a simple list representation of the testimonials shown on page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": canonicalUrl,
    name: "Client Reviews | Farida Law SD",
    url: canonicalUrl,
    isPartOf: {
      "@type": "WebSite",
      name: "Farida Law SD",
      url: baseUrl,
    },
    about: {
      "@type": "LegalService",
      name: "Farida Law SD",
      url: baseUrl,
    },
    mainEntity: {
      "@type": "ItemList",
      name: "Client Reviews",
      itemListElement: testimonials.map((t: any, idx: number) => ({
        "@type": "ListItem",
        position: idx + 1,
        item: {
          "@type": "Review",
          reviewBody: t.quote,
          author: {
            "@type": "Person",
            name: t.name,
          },
        },
      })),
    },
  };

  return (
    <main className="bg-black text-white">
      <JsonLd data={jsonLd} />

      <Container className="py-20">
        {/* Header */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Reputation"
            title="Client Reviews"
            description="Verified feedback from clients who value professionalism, clarity, and trust."
            className="text-white"
          />

          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/consultation-request/" variant="primary" size="md">
              Request Consultation
            </ButtonLink>
            <ButtonLink
              href="/client-intake/"
              variant="secondary"
              size="md"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Client Intake
            </ButtonLink>
          </div>
        </div>

        {/* Summary strip */}
        <div className="mt-10 rounded-3xl border border-white/12 bg-white/8 p-7 backdrop-blur">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs tracking-[0.22em] text-white/65 font-semibold">
                CLIENT SATISFACTION
              </p>
              <div className="mt-3 flex items-center gap-3">
                <div className="text-gold text-lg tracking-wide">★★★★★</div>
                <p className="text-sm text-white/80">
                  Reviews shown are examples — replace with real feedback before launch.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
                <p className="text-xs text-white/60">Communication</p>
                <p className="mt-1 text-sm text-white/90">Clear & Responsive</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
                <p className="text-xs text-white/60">Strategy</p>
                <p className="mt-1 text-sm text-white/90">Prepared & Precise</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
                <p className="text-xs text-white/60">Experience</p>
                <p className="mt-1 text-sm text-white/90">Professional</p>
              </div>
            </div>
          </div>

          <div className="premium-divider mt-7 opacity-60" />

          <p className="mt-5 text-xs text-white/65">
            Note: Results vary and reviews are not a guarantee of a similar outcome.
          </p>
        </div>

        {/* Reviews grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {site.testimonials.map((t, i) => (
            <TestimonialCard key={i} name={t.name} quote={t.quote} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h3 className="font-serif text-2xl text-white">
                Ready to talk through your situation?
              </h3>
              <p className="mt-2 text-sm text-white/75">
                Request a consultation or submit intake details for an efficient initial review.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/consultation-request/" variant="primary" size="lg">
                Request Consultation
              </ButtonLink>
              <ButtonLink
                href="/client-intake/"
                variant="secondary"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Submit Intake
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
