import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ConsultationForm from "@/components/forms/ConsultationForm";
import { site } from "@/lib/site";

const CANONICAL_PATH = "/consultation-request/";
export const metadata: Metadata = {
  title: "Consultation Request",
  description:
    "Request a consultation with Farida Law SD. Send a brief message and your contact details. Please avoid confidential information until engagement is confirmed.",
  alternates: {
    canonical: CANONICAL_PATH,
  },
  openGraph: {
    title: "Request a Consultation | Farida Law SD",
    description:
      "Request a consultation with Farida Law SD. Send a brief message and your contact details.",
    url: CANONICAL_PATH,
    siteName: "Farida Law SD",
    type: "website",
    images: [
      {
        url: "/og-default.jpg", // put this in /public
        width: 1200,
        height: 630,
        alt: "Farida Law SD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Request a Consultation | Farida Law SD",
    description:
      "Request a consultation with Farida Law SD. Send a brief message and your contact details.",
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

export default function ConsultationRequestPage() {
  return (
    <main className="bg-black text-white">
      <Container className="py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* LEFT: Text */}
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Request a Consultation"
              description="Send a brief message and your contact details. Avoid confidential information until engagement is confirmed."
              className="text-white"
            />

            <div className="mt-8 rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur">
              <p className="text-sm text-white/85">
                Prefer to speak by phone? Call{" "}
                <a
                  className="underline underline-offset-4 hover:text-gold"
                  href={`tel:${site.contact.phoneE164}`}
                >
                  {site.contact.phoneDisplay}
                </a>.
              </p>

              <div className="premium-divider mt-6 opacity-60" />

              <p className="mt-4 text-xs text-white/70">
                Attorney Advertising. This website is for informational purposes only.
              </p>
            </div>
          </div>

          {/* RIGHT: FORM (white card) */}
          <div>
            <ConsultationForm />
          </div>
        </div>
      </Container>
    </main>
  );
}
