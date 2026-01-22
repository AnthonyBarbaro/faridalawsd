import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reviews",
};

export default function ReviewsPage() {
  return (
    <main className="bg-black text-white">
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