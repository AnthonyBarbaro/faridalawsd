import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { ButtonExternal, ButtonLink } from "@/components/ui/Button";
import { site } from "@/lib/site";
import { ArrowRight, MapPin, Phone, Mail, Scale, Shield, FileText, Landmark } from "lucide-react";

const metaDescription =
  "Farida Law SD serves El Cajon and San Diego County with focused Personal Injury representation. Request a consultation or submit intake details to get started.";

export const metadata: Metadata = {
  metadataBase: new URL("https://faridalawsd.com"),
  title: "Farida Law SD | Personal Injury Attorney Crystal Farida | El Cajon, CA",
  description: metaDescription,
  keywords: [
    "Personal Injury Attorney El Cajon",
    "Car accident lawyer El Cajon",
    "Motorcycle accident attorney San Diego County",
    "Truck accident lawyer El Cajon",
    "Slip and fall attorney El Cajon",
    "Crystal Farida personal injury attorney",
    "Farida Law SD",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://faridalawsd.com/",
    siteName: "Farida Law SD",
    title: "Farida Law SD | Personal Injury Attorney Crystal Farida | El Cajon, CA",
    description: metaDescription,
    images: [
      {
        url: "/images/city.jpg",
        alt: "Farida Law SD - El Cajon, CA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Farida Law SD | Personal Injury Attorney Crystal Farida | El Cajon, CA",
    description: metaDescription,
    images: ["/images/city.jpg"],
  },
  robots: { index: true, follow: true },
};

type PracticeCard = {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
};

const practiceCards: PracticeCard[] = [
  {
    title: "Car Accidents",
    description: "Injury claims after rear-end impacts, distracted driving, and serious collisions.",
    href: "/practice-areas/#car-accidents",
    icon: <Shield size={18} />,
  },
  {
    title: "Motorcycle Accidents",
    description: "High-impact crashes that require careful investigation and strong advocacy.",
    href: "/practice-areas/#motorcycle-accidents",
    icon: <Scale size={18} />,
  },
  {
    title: "Truck Collisions",
    description: "Commercial vehicle cases involving complex coverage and multiple parties.",
    href: "/practice-areas/#truck-accidents",
    icon: <FileText size={18} />,
  },
  {
    title: "Slip & Fall",
    description: "Premises liability matters involving unsafe property conditions and negligence.",
    href: "/practice-areas/#slip-and-fall",
    icon: <Landmark size={18} />,
  },
  {
    title: "Pedestrian & Bicycle",
    description: "Crosswalk and roadway injury cases focused on liability and damages.",
    href: "/practice-areas/#pedestrian-bicycle",
    icon: <Shield size={18} />,
  },
  {
    title: "Trusts & Wills",
    description:
      "Thoughtful estate planning designed to protect your assets and provide clarity for your loved ones.",
    href: "/practice-areas/#trusts-wills",
    icon: <Landmark size={18} />,
  },
];

export default function HomePage() {
  const a = site.contact.address;

  const mapsQuery = encodeURIComponent(
    `${a.streetAddress}, ${a.addressLocality}, ${a.addressRegion} ${a.postalCode}`
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: site.name,
    url: "https://faridalawsd.com",
    image: "https://faridalawsd.com/images/crystal.png",
    description: metaDescription,
    serviceType: ["Personal Injury Law", "Estate Planning"],
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
    areaServed: [
      { "@type": "City", name: "El Cajon" },
      { "@type": "AdministrativeArea", name: "San Diego County" },
    ],
    founder: {
      "@type": "Person",
      name: "Crystal Farida",
      jobTitle: "Attorney",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Practice Areas",
      itemListElement: practiceCards.map((p) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: p.title,
          description: p.description,
        },
      })),
    },
  };

  return (
    <main className="bg-ink text-white">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO (simple, but keeps Crystal portrait card) */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/city.jpg"
            alt="El Cajon / San Diego County skyline"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/90" />
          <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_70%_20%,rgba(56,189,248,0.16),transparent_60%)]" />
        </div>

        <Container className="relative py-16 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left */}
            <div className="max-w-xl">
              <p className="text-xs font-semibold tracking-[0.22em] text-gold/95">
                FARIDA LAW • EL CAJON • SAN DIEGO COUNTY
              </p>

              <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-6xl">
                {site.tagline}
              </h1>

              <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
                Focused Personal Injury representation — with a clear, professional process from first review to next steps.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <ButtonLink href="/consultation-request/" variant="primary" size="lg">
                  Request a Consultation
                </ButtonLink>

                <ButtonLink href="/client-intake/" variant="secondary" size="lg">
                  Client Intake Form
                </ButtonLink>

                <ButtonLink href="/reviews/" variant="ghost" size="lg">
                  Reviews <ArrowRight size={16} />
                </ButtonLink>

                {site.calendlyUrl ? (
                  <ButtonExternal href={site.calendlyUrl} variant="ghost" size="lg">
                    Schedule
                  </ButtonExternal>
                ) : null}
              </div>

              <p className="mt-6 text-xs text-white/60">
                Attorney Advertising. Information on this site is not legal advice. Submitting information does not create an attorney–client relationship.
              </p>
            </div>

            {/* Right: Crystal portrait card (clean + compact) */}
            <div className="relative">
              <div className="rounded-3xl border border-white/12 bg-white/10 p-7 shadow-glow backdrop-blur">
                <div className="h-px w-full bg-gradient-to-r from-gold/80 via-sky-300/70 to-transparent" />

                <div className="mt-6 grid gap-6 sm:grid-cols-2 sm:items-center">
                  {/* Image */}
                  <div className="relative mx-auto w-full max-w-[300px]">
                    <div
                      className="absolute -inset-10 rounded-full bg-sky-400/15 blur-3xl"
                      aria-hidden="true"
                    />
                    <div
                      className="absolute -inset-8 rounded-full bg-gold/15 blur-3xl"
                      aria-hidden="true"
                    />

                    <div className="relative aspect-[3/4] w-full">
                      <Image
                        src="/images/crystal.png"
                        alt="Attorney Crystal Farida"
                        fill
                        sizes="(max-width: 640px) 70vw, 320px"
                        className="object-contain drop-shadow-[0_22px_70px_rgba(0,0,0,0.55)]"
                        priority
                      />
                    </div>
                  </div>

                  {/* Details */}
                  <div>
                    <p className="text-xs font-semibold tracking-[0.22em] text-white/70">
                      PERSONAL INJURY ATTORNEY
                    </p>
                    <h2 className="mt-2 font-serif text-2xl text-white">Crystal Farida</h2>

                    <p className="mt-2 text-sm text-white/75">
                      Professional representation for injury claims — from accident review to next steps.
                    </p>

                    <div className="premium-divider mt-5 opacity-60" />

                    <div className="mt-5 space-y-3 text-sm text-white/85">
                      <p className="flex items-center gap-2">
                        <Phone size={16} className="text-gold" />
                        <a className="hover:text-gold" href={`tel:${site.contact.phoneE164}`}>
                          {site.contact.phoneDisplay}
                        </a>
                      </p>

                      <p className="flex items-center gap-2">
                        <Mail size={16} className="text-sky-300" />
                        <a className="hover:text-sky-200" href={`mailto:${site.contact.email}`}>
                          {site.contact.email}
                        </a>
                      </p>

                      <p className="flex items-start gap-2">
                        <MapPin size={16} className="mt-0.5 text-gold" />
                        <a
                          className="hover:text-gold"
                          href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {a.streetAddress}, {a.addressLocality}, {a.addressRegion} {a.postalCode}
                        </a>
                      </p>
                    </div>

                    <div className="mt-6">
                      <ButtonLink href="/about/" variant="ghost" size="md">
                        Learn more <ArrowRight size={16} />
                      </ButtonLink>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-xs text-white/55">
                Results vary. Past outcomes do not guarantee future results.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* PRACTICE AREAS */}
      <section className="py-14 sm:py-16 border-t border-white/10">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Practice Areas"
              title="Get to the right page fast"
              description="Choose a category below to learn more about how we handle each type of case."
              className="text-white"
            />

            <ButtonLink href="/practice-areas/" variant="primary" size="md">
              View All <ArrowRight size={16} />
            </ButtonLink>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {practiceCards.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className="
                  group rounded-3xl border border-white/12 bg-white/10
                  p-7 backdrop-blur transition
                  hover:-translate-y-0.5 hover:border-sky-300/25 hover:bg-white/12
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/60
                  no-underline
                "
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-serif text-2xl text-white">{p.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-white/75">{p.description}</p>
                  </div>

                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-black/30 ring-1 ring-white/10">
                    <span className="text-gold">{p.icon}</span>
                  </span>
                </div>

                <div className="mt-6 inline-flex items-center gap-2 text-sm text-white/80">
                  <span className="text-gold group-hover:text-sky-200 transition">Learn more</span>
                  <ArrowRight size={16} className="text-sky-300 group-hover:translate-x-0.5 transition" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CONTACT STRIP */}
      <section className="py-14 sm:py-16 border-t border-white/10">
        <Container>
          <div className="rounded-3xl border border-white/12 bg-white/8 p-8 backdrop-blur">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="font-serif text-2xl text-white">Contact</h2>
                <p className="mt-2 text-sm text-white/75">
                  Call or email for next steps. You can also submit a consultation request or intake details online.
                </p>

                <div className="mt-6 grid gap-3 text-sm text-white/85">
                  <p className="flex items-center gap-2">
                    <Phone size={16} className="text-gold" />
                    <a className="hover:text-gold" href={`tel:${site.contact.phoneE164}`}>
                      {site.contact.phoneDisplay}
                    </a>
                  </p>

                  <p className="flex items-center gap-2">
                    <Mail size={16} className="text-sky-300" />
                    <a className="hover:text-sky-200" href={`mailto:${site.contact.email}`}>
                      {site.contact.email}
                    </a>
                  </p>

                  <p className="flex items-start gap-2">
                    <MapPin size={16} className="mt-0.5 text-gold" />
                    <a
                      className="hover:text-gold"
                      href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {a.streetAddress}, {a.addressLocality}, {a.addressRegion} {a.postalCode}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/consultation-request/" variant="primary" size="lg">
                  Request Consultation
                </ButtonLink>
                <ButtonLink href="/client-intake/" variant="secondary" size="lg">
                  Submit Intake
                </ButtonLink>
                <ButtonLink href="/about/" variant="ghost" size="lg">
                  About <ArrowRight size={16} />
                </ButtonLink>
              </div>
            </div>

            <p className="mt-6 text-xs text-white/60">
              Do not send confidential information through this website. Results vary and prior results do not guarantee a similar outcome.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
