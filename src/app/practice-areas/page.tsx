import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Personal Injury Practice Areas | Farida Law SD",
  description:
    "Personal Injury practice areas served by Farida Law SD in El Cajon and San Diego County: car accidents, motorcycle accidents, truck collisions, slip and fall, pedestrian/bicycle injuries, and wrongful death.",
  alternates: { canonical: "/practice-areas/" },
};

type PIArea = {
  slug: string;
  title: string;
  description: string;
  typical: string[];
  evidence: string[];
};

const piAreas: PIArea[] = [
  {
    slug: "car-accidents",
    title: "Car Accidents",
    description:
      "Injury claims arising from rear-end collisions, intersection crashes, distracted driving, and unsafe lane changes.",
    typical: [
      "Whiplash and soft-tissue injuries",
      "Back/neck injuries",
      "Fractures",
      "Concussions and head injuries",
    ],
    evidence: [
      "Photos, dashcam, and scene documentation",
      "Police report number and witness info",
      "Medical records and treatment timeline",
      "Insurance correspondence",
    ],
  },
  {
    slug: "motorcycle-accidents",
    title: "Motorcycle Accidents",
    description:
      "High-impact crashes with serious injuries requiring careful investigation and a strong presentation of damages.",
    typical: [
      "Road rash and scarring",
      "Broken bones",
      "Traumatic brain injury (TBI)",
      "Surgical and long-term treatment needs",
    ],
    evidence: [
      "Helmet/gear condition and photos",
      "Scene review + roadway hazards",
      "Medical treatment records",
      "Insurance policy details",
    ],
  },
  {
    slug: "truck-accidents",
    title: "Truck Collisions",
    description:
      "Complex claims involving commercial carriers, higher insurance limits, and multiple potentially responsible parties.",
    typical: [
      "Severe injury claims",
      "Multiple defendant cases",
      "Commercial policy disputes",
      "Serious damages evaluation",
    ],
    evidence: [
      "Carrier/driver info and policy details",
      "Evidence preservation requests (as needed)",
      "Medical records and wage loss docs",
      "Crash reporting information",
    ],
  },
  {
    slug: "slip-and-fall",
    title: "Slip & Fall",
    description:
      "Premises liability matters involving unsafe conditions on property, including poor lighting, wet floors, and hazards.",
    typical: [
      "Falls in stores or parking lots",
      "Apartment/common area hazards",
      "Unsafe stairs/handrails",
      "Inadequate warning signage",
    ],
    evidence: [
      "Photos of the hazard (if possible)",
      "Incident reports and witness info",
      "Medical treatment documentation",
      "Proof of property condition and notice",
    ],
  },
  {
    slug: "pedestrian-bicycle",
    title: "Pedestrian & Bicycle Injuries",
    description:
      "Claims involving crosswalk impacts, roadway negligence, and unsafe driving that leads to serious injury.",
    typical: [
      "Crosswalk incidents",
      "Bike lane collisions",
      "Dooring incidents",
      "Hit-and-run claims (case dependent)",
    ],
    evidence: [
      "Location details and photos",
      "Medical documentation",
      "Witness contact details",
      "Insurance information and communications",
    ],
  },
  {
    slug: "trusts-wills",
    title: "Trusts & Wills",
    description:
      "Professional estate planning services focused on protecting your assets, honoring your wishes, and providing clarity for your family.",
    typical: [
      "Wills and revocable living trusts",
      "Beneficiary designations and asset distribution",
      "Powers of attorney and healthcare directives",
      "Estate planning updates after life changes",
    ],
    evidence: [
      "Asset and property information",
      "Beneficiary and fiduciary details",
      "Advance healthcare and financial preferences",
      "Relevant family or financial documents",
    ],
  }
];

export default function PracticeAreasPage() {
  return (
    <main className="bg-black text-white">
      <Container className="py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Personal Injury"
            title="Practice Areas"
            description="Focused representation for personal injury claims across El Cajon and San Diego County."
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

        {/* Quick note banner */}
        <div className="mt-10 rounded-3xl border border-white/12 bg-white/10 p-7 backdrop-blur">
          <p className="text-sm text-white/85">
            If you were injured, it helps to document the basics early: accident type, date/location,
            photos if available, and medical treatment. Avoid sending confidential information through this website.
          </p>
          <p className="mt-3 text-xs text-white/60">
            Attorney Advertising. Results vary. Past outcomes do not guarantee future results.
          </p>
        </div>

        {/* Practice area sections */}
        <div className="mt-12 grid gap-6">
          {piAreas.map((p) => (
            <section
              key={p.slug}
              id={p.slug}
              className="scroll-mt-24 rounded-3xl border border-white/15 bg-white/10 p-7 shadow-card backdrop-blur"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                  <h2 className="font-serif text-2xl sm:text-3xl text-white">
                    {p.title}
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
                    {p.description}
                  </p>

                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                      <p className="text-xs tracking-[0.22em] text-white/60 font-semibold">
                        COMMONLY INVOLVES
                      </p>
                      <ul className="mt-4 grid gap-2">
                        {p.typical.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-white/80">
                            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-gold" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                      <p className="text-xs tracking-[0.22em] text-white/60 font-semibold">
                        HELPFUL INFORMATION
                      </p>
                      <ul className="mt-4 grid gap-2">
                        {p.evidence.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-white/80">
                            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-300" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
                    <p className="text-xs text-white/70">
                      For an efficient initial review, request a consultation or submit intake details.
                      Avoid sending confidential information until engagement is confirmed.
                    </p>
                  </div>
                </div>

                <div className="w-full lg:w-[320px]">
                  <div className="rounded-2xl border border-white/10 bg-black/35 p-5">
                    <p className="text-xs tracking-[0.22em] text-white/65 font-semibold">
                      NEXT STEP
                    </p>
                    <p className="mt-3 text-sm text-white/85">
                      Request a consultation to discuss your incident and options.
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
                Not sure where your situation fits?
              </h3>
              <p className="mt-2 text-sm text-white/75">
                Share a brief overview and we’ll help identify appropriate next steps.
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