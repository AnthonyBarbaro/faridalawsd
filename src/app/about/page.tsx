import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Attorney Crystal Farida",
};

export default function AboutPage() {
  return (
    <main className="bg-black text-white">
      <Container className="py-20">
        {/* Header */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="About"
            title="About Attorney Crystal Farida"
            description="Professional background, credentials, and a client-first legal approach."
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

        {/* Main content */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {/* Bio */}
          <div className="lg:col-span-2 rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur">
            <h2 className="font-serif text-2xl text-white">
              A Client-First Legal Practice
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
              Attorney <strong className="text-white">Crystal Farida</strong> founded Farida Law SD
              with a clear mission: to provide thoughtful, prepared, and client-focused legal
              representation. Every matter is handled with professionalism, discretion,
              and respect for the individual circumstances of each client.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
              Crystal Farida believes that strong advocacy begins with clear communication.
              Clients are kept informed, prepared, and supported throughout every stage
              of their legal matter, with an emphasis on practical strategy and realistic
              expectations.
            </p>

            <div className="premium-divider mt-8 opacity-60" />

            <p className="mt-6 text-sm text-white/75">
              Clients can expect:
            </p>

            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                "Clear and timely communication",
                "Thoughtful, detail-driven legal strategy",
                "Organized and well-prepared representation",
                "Respectful, professional advocacy",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-white/80"
                >
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Credentials */}
          <aside className="rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur">
            <h3 className="font-serif text-xl text-white">
              Credentials & Background
            </h3>

            <ul className="mt-6 space-y-3 text-sm text-white/80">
              <li>
                <span className="font-medium text-white">Attorney:</span>{" "}
                Crystal Farida
              </li>
              <li>
                <span className="font-medium text-white">Bar Admissions:</span>{" "}
                State of California
              </li>
              <li>
                <span className="font-medium text-white">Practice Focus:</span>{" "}
                Immigration, Family Law, Estate Planning, Business & Contracts
              </li>
              <li>
                <span className="font-medium text-white">Languages:</span>{" "}
                Add languages spoken
              </li>
            </ul>

            <div className="premium-divider mt-8 opacity-60" />

            <p className="mt-6 text-xs text-white/65">
              Attorney Advertising. This website is for informational purposes only
              and does not create an attorney-client relationship.
            </p>
          </aside>
        </div>
      </Container>
    </main>
  );
}
