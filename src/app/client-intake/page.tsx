import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import IntakeForm from "@/components/forms/IntakeForm";
import { site } from "@/lib/site";

const CANONICAL_PATH = "/client-intake/";

export const metadata: Metadata = {
  title: "Client Intake Form",
  description:
    "Start the client intake process with Farida Law SD. Share initial details so we can review your case efficiently. Please avoid confidential information until representation is confirmed.",
  alternates: {
    canonical: CANONICAL_PATH,
  },
  openGraph: {
    title: "Client Intake Form | Farida Law SD",
    description:
      "Start the client intake process with Farida Law SD. Share initial details so we can review your case efficiently.",
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
    title: "Client Intake Form | Farida Law SD",
    description:
      "Start the client intake process with Farida Law SD. Share initial details so we can review your case efficiently.",
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

export default function ClientIntakePage() {
  const baseUrl = site.url; // must be absolute, e.g. https://faridalawsd.com
  const canonicalUrl = new URL(CANONICAL_PATH, baseUrl).toString();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": canonicalUrl,
    name: "Client Intake Form | Farida Law SD",
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
  };

  return (
    <main className="relative bg-ink text-white">
      <JsonLd data={jsonLd} />

      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_20%_10%,rgba(56,189,248,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_85%_0%,rgba(199,162,83,0.12),transparent_60%)]" />
      </div>

      <Container className="relative py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Client Intake"
            title="Tell us about your injury"
            description="Share initial details to help us review your case efficiently. Avoid confidential information until representation is confirmed."
            className="text-white"
          />

          <div className="mt-10">
            <IntakeForm />
          </div>

          <p className="mt-8 text-xs text-white/70">
            Attorney Advertising. This website is for informational purposes only.
          </p>
        </div>
      </Container>
    </main>
  );
}
