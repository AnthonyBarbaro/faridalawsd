import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import PracticeAreaCard from "@/components/PracticeAreaCard";
import { ButtonExternal, ButtonLink } from "@/components/ui/Button";
import { site } from "@/lib/site";
import {
  Scale,
  FileText,
  Shield,
  Landmark,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  BadgeCheck,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  metadataBase: new URL("https://faridalawsd.com"),
  title: "Farida Law SD | Attorney Crystal Farida | El Cajon, CA",
  description: site.description,
  keywords: [
    "Attorney El Cajon",
    "Lawyer El Cajon",
    "San Diego County attorney",
    "Crystal Farida attorney",
    "Farida Law SD",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://faridalawsd.com/",
    siteName: "Farida Law SD",
    title: "Farida Law SD | Attorney Crystal Farida | El Cajon, CA",
    description: site.description,
    images: [
      {
        url: "/images/city.jpg",
        alt: "Farida Law SD - El Cajon, CA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Farida Law SD | Attorney Crystal Farida | El Cajon, CA",
    description: site.description,
    images: ["/images/city.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const icons = [
  <Scale key="i1" size={18} />,
  <FileText key="i2" size={18} />,
  <Shield key="i3" size={18} />,
  <Landmark key="i4" size={18} />,
];

// Accent color note:
// We’re using Sapphire/Blue as the secondary accent (trust / authority).
// If you want a different accent later, search for "sky-" and "#0b2240".
export default function HomePage() {
  const a = site.contact.address;

  const mapsQuery = encodeURIComponent(
    `${a.streetAddress}, ${a.addressLocality}, ${a.addressRegion} ${a.postalCode}`
  );

  // LegalService schema (LocalBusiness-style) for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Farida Law SD",
    url: "https://faridalawsd.com",
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
    areaServed: [
      { "@type": "AdministrativeArea", name: "San Diego County" },
      { "@type": "City", name: "El Cajon" },
    ],
    founder: {
      "@type": "Person",
      name: "Crystal Farida",
      jobTitle: "Attorney",
    },
  };

  return (
    <main className="bg-ink text-white">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/city.jpg"
            alt="El Cajon / San Diego County skyline"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          {/* Dark overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/90" />

          {/* Sapphire wash (NEW accent) */}
          <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_70%_20%,rgba(56,189,248,0.18),transparent_60%)]" />

          {/* Gold/white glow */}
          <div className="absolute inset-0 opacity-[0.18]">
            <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-white blur-3xl" />
            <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-gold blur-3xl" />
          </div>

          {/* Bottom vignette */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />
        </div>

        <Container className="relative py-16 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left */}
            <div className="max-w-xl">
              <p className="text-xs font-semibold tracking-[0.22em] text-gold/95">
                FARIDA LAW SD • EL CAJON, CA
              </p>

              <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-6xl">
                {site.tagline}
              </h1>

              <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
                Professional, client-focused legal support with clear communication and practical next steps.
              </p>

              {/* Accent chips (NEW color pop) */}
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-3 py-1 text-xs text-white/80">
                  <BadgeCheck size={14} className="text-gold" />
                  Professional & Discreet
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs text-white/80">
                  <Sparkles size={14} className="text-sky-300" />
                  Clear Strategy
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-3 py-1 text-xs text-white/80">
                  <MapPin size={14} className="text-gold" />
                  San Diego County
                </span>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href="/consultation-request/" variant="primary" size="lg">
                  Request a Consultation
                </ButtonLink>

                <ButtonLink href="/client-intake/" variant="secondary" size="lg">
                  Client Intake Form
                </ButtonLink>

                {site.calendlyUrl ? (
                  <ButtonExternal href={site.calendlyUrl} variant="ghost" size="lg">
                    Schedule
                  </ButtonExternal>
                ) : null}
              </div>

              {/* Trust row */}
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Client-first", value: "Clear communication", accent: "gold" },
                  { label: "Prepared", value: "Detail-driven strategy", accent: "sky" },
                  { label: "Local", value: "San Diego County", accent: "gold" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/12 bg-white/10 p-5 backdrop-blur"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={
                          item.accent === "sky"
                            ? "h-2 w-2 rounded-full bg-sky-300"
                            : "h-2 w-2 rounded-full bg-gold"
                        }
                        aria-hidden="true"
                      />
                      <p className="text-xs font-semibold tracking-wide text-white/85">
                        {item.label}
                      </p>
                    </div>
                    <p className="mt-2 text-sm text-white/75">{item.value}</p>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-xs text-white/60">
                Submitting information through this website does not create an attorney–client relationship.
              </p>
            </div>

            {/* Right: Attorney + Contact */}
            <div className="relative">
              <div className="rounded-3xl border border-white/12 bg-white/10 p-7 shadow-glow backdrop-blur">
                {/* Subtle top accent line */}
                <div className="h-px w-full bg-gradient-to-r from-gold/80 via-sky-300/70 to-transparent" />

                <div className="mt-6 grid gap-6 sm:grid-cols-2 sm:items-center">
                  {/* Attorney image */}
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

                  {/* Attorney details */}
                  <div>
                    <p className="text-xs font-semibold tracking-[0.22em] text-white/70">
                      ATTORNEY
                    </p>
                    <h2 className="mt-2 font-serif text-2xl text-white">
                      Crystal Farida
                    </h2>
                    <p className="mt-2 text-sm text-white/75">
                      Serving El Cajon and San Diego County with a premium, professional client experience.
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
                Attorney Advertising. This website is for informational purposes only.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* PRACTICE AREAS */}
      <section className="relative py-16 sm:py-20">
        {/* Subtle sapphire section background */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_500px_at_20%_10%,rgba(56,189,248,0.10),transparent_60%)]" />
        <Container className="relative">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Practice Areas"
              title="Focused support with clear next steps"
              description="Update the practice areas below to match Crystal Farida’s exact services before launch."
              className="text-white"
            />
            <ButtonLink href="/practice-areas/" variant="primary" size="md">
              View All Practice Areas
            </ButtonLink>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {site.practiceAreas.map((p, idx) => (
              <PracticeAreaCard
                key={p.slug}
                title={p.title}
                description={p.description}
                href={`/practice-areas/#${p.slug}`}
                icon={icons[idx % icons.length]}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* WHY US */}
      <section className="border-t border-white/10 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Approach"
            title="Professional representation, handled with care"
            description="A premium experience built on communication, preparation, and disciplined follow-through."
            className="text-white"
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Clear Communication",
                desc: "You’ll know what’s happening, what’s next, and what to expect.",
                icon: <Mail size={16} className="text-sky-300" />,
              },
              {
                title: "Thorough Preparation",
                desc: "Detail-driven review to reduce surprises and strengthen outcomes.",
                icon: <FileText size={16} className="text-gold" />,
              },
              {
                title: "Strategic Next Steps",
                desc: "Practical guidance focused on what matters most to your situation.",
                icon: <Scale size={16} className="text-sky-300" />,
              },
              {
                title: "Respectful Advocacy",
                desc: "Professional representation with discretion and care.",
                icon: <Shield size={16} className="text-gold" />,
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-3xl border border-white/12 bg-white/10 p-6 backdrop-blur"
              >
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-black/30 ring-1 ring-white/10">
                    {c.icon}
                  </span>
                  <h3 className="font-serif text-xl text-white">{c.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{c.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* PROCESS */}
      <section className="relative py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_70%_0%,rgba(199,162,83,0.10),transparent_60%)]" />
        <Container className="relative">
          <SectionHeading
            eyebrow="Process"
            title="A simple, professional way to get started"
            description="Use the consultation request for a quick message, or submit intake details for a more efficient initial review."
            className="text-white"
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {[
              {
                step: "01",
                title: "Request a consultation",
                desc: "Send your contact details and a brief overview. Avoid confidential information until engagement is confirmed.",
                pill: "bg-sky-400/10 border-sky-400/20 text-sky-200",
              },
              {
                step: "02",
                title: "Submit your intake (optional)",
                desc: "Provide case type and key details for a more organized first review and faster next steps.",
                pill: "bg-white/10 border-white/12 text-white/80",
              },
              {
                step: "03",
                title: "Receive next steps",
                desc: "We’ll respond with availability, required documents, and a clear plan to move forward.",
                pill: "bg-gold/10 border-gold/20 text-gold/90",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="rounded-3xl border border-white/12 bg-white/10 p-7 backdrop-blur"
              >
                <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide ${s.pill}`}>
                  STEP {s.step}
                </span>
                <h3 className="mt-4 font-serif text-2xl text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* TESTIMONIALS (custom markup so it always looks good on dark) */}
      <section className="border-t border-white/10 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Client Experience"
            title="Trusted by clients who value professionalism"
            description="Replace these placeholders with real reviews once approved for use."
            className="text-white"
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {site.testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-3xl border border-white/12 bg-white/10 p-7 backdrop-blur"
              >
                <div className="flex items-center justify-between">
                  <p className="text-gold text-sm tracking-wide">★★★★★</p>
                  <span className="text-xs text-sky-200/80">Verified</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/80">
                  “{t.quote}”
                </p>
                <p className="mt-5 text-sm font-semibold text-white">{t.name}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="relative py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_500px_at_25%_25%,rgba(56,189,248,0.10),transparent_60%)]" />
        <Container className="relative">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions"
            description="Quick answers for prospective clients. Customize as needed."
            className="text-white"
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {[
              {
                q: "Do you offer consultations?",
                a: "Yes. Use the consultation request page to submit your information and we’ll follow up with next steps and availability.",
              },
              {
                q: "What information should I include?",
                a: "Include a brief timeline and what outcome you’re seeking. Avoid confidential details until an engagement is confirmed.",
              },
              {
                q: "How quickly will I hear back?",
                a: "We aim to respond promptly during business hours. If your matter is time-sensitive, mention that in your message.",
              },
              {
                q: "Where are you located?",
                a: "Our office is in El Cajon, CA. We serve clients throughout San Diego County.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group rounded-3xl border border-white/12 bg-white/10 p-6 backdrop-blur transition hover:border-sky-300/30"
              >
                <summary className="cursor-pointer list-none font-medium text-white">
                  <span className="text-white">{item.q}</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{item.a}</p>
              </details>
            ))}
          </div>

          <p className="mt-8 text-xs text-white/55">
            Attorney Advertising. Information on this site is not legal advice and does not create an attorney–client relationship.
          </p>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16">
        <Container>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 via-white/6 to-sky-400/10 p-10 backdrop-blur">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="font-serif text-3xl sm:text-4xl text-white">
                  Ready to discuss your situation?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
                  Request a consultation or submit your intake details for an efficient initial review.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/consultation-request/" variant="primary" size="lg">
                  Request Consultation
                </ButtonLink>
                <ButtonLink href="/client-intake/" variant="secondary" size="lg">
                  Submit Intake
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer safety micro-line (optional) */}
      <div className="pb-10">
        <Container>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </Container>
      </div>
    </main>
  );
}