
import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Practice Areas",
};

function getTypicalMatters(slug: string): string[] {
  // You can customize these later in site.ts if you want.
  switch (slug) {
    case "immigration":
      return [
        "Family-based petitions",
        "Adjustment of status",
        "Naturalization and citizenship",
        "Waivers and consular processing",
      ];
    case "family-law":
      return [
        "Divorce and legal separation",
        "Child custody and visitation",
        "Child and spousal support",
        "Domestic violence restraining orders",
      ];
    case "estate-planning":
      return [
        "Wills and trusts",
        "Powers of attorney",
        "Advance healthcare directives",
        "Probate and administration guidance",
      ];
    case "business-contracts":
      return [
        "Contract review and drafting",
        "Business formation and compliance",
        "Demand letters and negotiation",
        "General counsel-style support",
      ];
    default:
      return [
        "Initial case review and goal-setting",
        "Document preparation and strategy",
        "Negotiation and communications",
        "Clear next steps and timelines",
      ];
  }
}

export default function PracticeAreasPage() {
  return (
    <main className="bg-black text-white">
      <Container className="py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Services"
            title="Practice Areas"
            description="Focused legal support with clear communication, meticulous preparation, and steady advocacy."
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

        {/* List */}
        <div className="mt-12 grid gap-6">
          {site.practiceAreas.map((p) => (
            <section
              key={p.slug}
              id={p.slug}
              className="scroll-mt-24 rounded-3xl border border-white/15 bg-white/10 p-7 shadow-card backdrop-blur"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-2xl">
                  <h2 className="font-serif text-2xl sm:text-3xl text-white">
                    {p.title}
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
                    {p.description}
                  </p>

                  <p className="mt-3 text-sm text-white/70">
                    Typical matters handled may include:
                  </p>

                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {getTypicalMatters(p.slug).map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-white/80"
                      >
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-gold" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
                    <p className="text-xs text-white/70">
                      For an efficient initial review, submit a consultation request or provide
                      intake details. Avoid sending confidential information until engagement is confirmed.
                    </p>
                  </div>
                </div>

                <div className="w-full lg:w-[320px]">
                  <div className="rounded-2xl border border-white/10 bg-black/35 p-5">
                    <p className="text-xs tracking-[0.22em] text-white/65 font-semibold">
                      NEXT STEP
                    </p>
                    <p className="mt-3 text-sm text-white/85">
                      Request a consultation to discuss your situation and options.
                    </p>

                    <div className="mt-5 grid gap-3">
                      <ButtonLink href="/consultation-request/" variant="primary" size="md">
                        Request Consultation
                      </ButtonLink>
                      <ButtonLink
                        href="/client-intake/"
                        variant="secondary"
                        size="md"
                        className="border-white/30 text-white hover:bg-white/10"
                      >
                        Submit Intake
                      </ButtonLink>
                    </div>

                    <p className="mt-4 text-xs text-white/60">
                      Serving El Cajon and San Diego County.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h3 className="font-serif text-2xl text-white">
                Not sure which practice area fits?
              </h3>
              <p className="mt-2 text-sm text-white/75">
                Share a brief overview and we’ll help identify next steps.
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
                Client Intake
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
