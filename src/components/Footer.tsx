import Container from "@/components/Container";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-white">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-lg">
              Farida Law SD<span className="text-gold">.</span>
            </p>
            <p className="mt-3 text-sm text-white/70">
              Professional legal guidance with a client‑first approach.
            </p>
          </div>

          <div>
            <p className="font-semibold text-sm">Contact</p>
            <p className="mt-3 text-sm text-white/70">
              Phone: {site.contact.phoneDisplay}
            </p>
            <p className="text-sm text-white/70">
              Email: {site.contact.email}
            </p>
            <p className="text-sm text-white/70">
              {site.contact.address.streetAddress},{" "}
              {site.contact.address.addressLocality}
            </p>
          </div>

          <div>
            <p className="font-semibold text-sm">Legal</p>
            <p className="mt-3 text-xs text-white/60">
              Attorney Advertising. Submitting information does not create an
              attorney‑client relationship.
            </p>
          </div>
        </div>

        <div className="mt-10 text-xs text-white/50">
          © {new Date().getFullYear()} Farida Law SD. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
