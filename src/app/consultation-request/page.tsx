import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ConsultationForm from "@/components/forms/ConsultationForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Consultation Request",
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
