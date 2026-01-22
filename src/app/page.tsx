import Container from "@/components/Container";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="py-24 border-b border-white/10">
        <Container>
          <p className="text-xs tracking-premium text-gold">
            FARIDA LAW SD • EL CAJON, CA
          </p>

          <h1 className="mt-4 font-serif text-5xl leading-tight max-w-3xl">
            Trusted Counsel.
            <br />
            <span className="text-gold">Strong Advocacy.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-white/80 text-lg">
            Clear guidance, strategic advocacy, and a premium client experience
            from the first call to the final resolution.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/consultation-request/" size="lg">
              Request a Consultation
            </ButtonLink>
            <ButtonLink
              href="/client-intake/"
              variant="secondary"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Client Intake Form
            </ButtonLink>
          </div>

          {/* Credibility */}
          <div className="mt-14 grid gap-4 sm:grid-cols-3 max-w-3xl">
            {[
              ["Professional", "Clear communication"],
              ["Prepared", "Detail‑driven strategy"],
              ["Local", "San Diego County"],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="border border-white/15 rounded-xl p-5"
              >
                <p className="text-sm font-semibold">{title}</p>
                <p className="text-sm text-white/70 mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
