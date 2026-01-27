import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/lib/site";
import {
  BadgeCheck,
  Shield,
  Scale,
  HeartPulse,
  Car,
  Bike,
  PersonStanding,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Attorney Crystal Farida | Farida Law SD",
  description:
    "Learn about Attorney Crystal Farida and Farida Law SD’s personal injury practice serving San Diego County, including car accidents, motorcycle accidents, slip and fall injuries, and more.",
  alternates: { canonical: "/about/" },
  openGraph: {
    title: "About Attorney Crystal Farida | Farida Law SD",
    description:
      "Personal injury representation in San Diego County — car accidents, motorcycle accidents, and serious injury claims.",
    type: "website",
    images: [{ url: "/images/city.jpg", alt: "Farida Law SD" }],
  },
};

export default function AboutPage() {
  const a = site.contact.address;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Farida Law SD",
    url: "https://faridalawsd.com/about/",
    image: "https://faridalawsd.com/images/crystal.png",
    telephone: site.contact.phoneE164,
    email: site.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: a.streetAddress,
      addressLocality: a.addressLocality,
      addressRegion: a.addressRegion,
      postalCode: a.postalCode,
      addressCountry: "US",
    },
    founder: {
      "@type": "Person",
      name: "Crystal Farida",
      jobTitle: "Attorney",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "San Diego County" },
      { "@type": "City", name: "El Cajon" },
      { "@type": "City", name: "San Diego" },
    ],
  };

  return (
    <main className="bg-ink text-white">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Background atmosphere */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_20%_10%,rgba(56,189,248,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_85%_0%,rgba(199,162,83,0.12),transparent_60%)]" />
      </div>

      <Container className="py-16 sm:py-20">
        {/* Page header */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="About"
            title="About Attorney Crystal Farida"
            description="Personal injury representation built on clear communication, strong advocacy, and practical next steps."
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

        {/* Main section (image on the side) */}
        <section className="mt-12 rounded-3xl border border-white/12 bg-white/10 backdrop-blur">
          <div className="h-px w-full bg-gradient-to-r from-gold/80 via-sky-300/70 to-transparent" />

          <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.2fr,0.8fr] lg:items-start">
            {/* LEFT: Bio */}
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] text-gold/95">
                FARIDA LAW SD • SAN DIEGO COUNTY
              </p>

              <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
                Advocacy for people who’ve been injured — with clarity and care.
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
                Attorney <span className="font-semibold text-white">Crystal Farida</span> focuses on{" "}
                <span className="font-semibold text-white">Personal Injury</span> — helping clients after
                car accidents, motorcycle collisions, slip-and-fall injuries, and other harm caused by negligence.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
                The goal is simple: handle your claim with professionalism and urgency, keep you informed,
                and pursue the best outcome while you focus on recovery.
              </p>

              {/* Chips */}
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-3 py-1 text-xs text-white/80">
                  <BadgeCheck size={14} className="text-gold" />
                  Clear communication
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs text-white/80">
                  <Shield size={14} className="text-sky-300" />
                  Strong advocacy
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-3 py-1 text-xs text-white/80">
                  <Scale size={14} className="text-gold" />
                  Practical strategy
                </span>
              </div>

              <div className="premium-divider mt-8 opacity-60" />

              {/* Value cards */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "You’ll know what’s next",
                    desc: "Clear timelines, expectations, and practical next steps.",
                  },
                  {
                    title: "Prepared and organized",
                    desc: "We gather the right facts and documents early.",
                  },
                  {
                    title: "Respectful support",
                    desc: "Professional approach throughout your recovery.",
                  },
                  {
                    title: "Outcome-focused",
                    desc: "Disciplined follow-through for fair compensation.",
                  },
                ].map((b) => (
                  <div key={b.title} className="rounded-2xl border border-white/10 bg-black/25 p-5">
                    <p className="font-medium text-white">{b.title}</p>
                    <p className="mt-2 text-sm text-white/75">{b.desc}</p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-xs text-white/60">
                Attorney Advertising. Information on this site is not legal advice and does not create an
                attorney–client relationship.
              </p>
            </div>

            {/* RIGHT: Portrait + Practice Focus */}
            <aside className="space-y-5">
              {/* Portrait card */}
              <div className="rounded-3xl border border-white/12 bg-black/25 p-5">
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/8 via-white/5 to-transparent">
                  {/* soft glow */}
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(420px_300px_at_55%_25%,rgba(56,189,248,0.16),transparent_70%)]" />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(420px_300px_at_45%_20%,rgba(199,162,83,0.14),transparent_75%)]" />

                  {/* KEY: fixed frame + object-cover + top anchor */}

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                <div className="mt-4">
                  <p className="text-xs font-semibold tracking-[0.22em] text-white/65">
                    PERSONAL INJURY ATTORNEY
                  </p>
                  <p className="mt-2 font-serif text-2xl text-white">Crystal Farida</p>
                  <p className="mt-2 text-sm text-white/75">
                    Serving El Cajon & San Diego County
                  </p>
                </div>
              </div>

              {/* Practice focus list */}
              <div className="rounded-3xl border border-white/12 bg-black/25 p-6">
                <p className="text-xs font-semibold tracking-[0.22em] text-white/65">
                  PRACTICE FOCUS
                </p>

                <div className="mt-4 grid gap-3">
                  {[
                    { icon: <Car size={16} className="text-sky-300" />, label: "Car Accidents" },
                    { icon: <Bike size={16} className="text-gold" />, label: "Motorcycle Accidents" },
                    { icon: <PersonStanding size={16} className="text-sky-300" />, label: "Slip & Fall / Premises" },
                    { icon: <HeartPulse size={16} className="text-gold" />, label: "Injury Claims & Recovery" },
                  ].map((x) => (
                    <div
                      key={x.label}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                    >
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-black/35 ring-1 ring-white/10">
                        {x.icon}
                      </span>
                      <span className="text-sm text-white/85">{x.label}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <ButtonLink href="/practice-areas/" variant="ghost" size="md" className="w-full">
                    View Practice Areas <ArrowRight size={16} />
                  </ButtonLink>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section className="mt-12">
          <SectionHeading
            eyebrow="How it works"
            title="A straightforward process"
            description="Quick steps designed for clarity and momentum."
            className="text-white"
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {[
              {
                step: "01",
                title: "Send a request",
                desc: "Submit the consultation form with basic details (avoid confidential information).",
                pill: "bg-sky-400/10 border-sky-400/20 text-sky-200",
              },
              {
                step: "02",
                title: "We review and respond",
                desc: "We’ll follow up with next steps, availability, and what documents may help.",
                pill: "bg-white/10 border-white/12 text-white/80",
              },
              {
                step: "03",
                title: "Move forward with a plan",
                desc: "If we take the matter, you’ll get clear expectations and structured follow-through.",
                pill: "bg-gold/10 border-gold/20 text-gold/90",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="rounded-3xl border border-white/12 bg-white/10 p-7 backdrop-blur"
              >
                <span
                  className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide ${s.pill}`}
                >
                  STEP {s.step}
                </span>
                <h3 className="mt-4 font-serif text-2xl text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 via-white/6 to-sky-400/10 p-8 backdrop-blur">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h3 className="font-serif text-2xl text-white">
                  Ready to talk through your injury claim?
                </h3>
                <p className="mt-2 text-sm text-white/75">
                  Request a consultation and we’ll follow up with next steps.
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
        </section>
      </Container>
    </main>
  );
}
