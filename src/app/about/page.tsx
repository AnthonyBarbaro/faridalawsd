import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About Attorney",
};

export default function AboutPage() {
  return (
    <Container className="py-16">
      <SectionHeading
        eyebrow="About"
        title="About the Attorney"
        description="Replace this with Farida’s biography, credentials, bar admissions, and professional photo."
      />

      <div className="mt-10 rounded-2xl border border-ink/10 bg-white p-6 shadow-sm bg-black text-black">
        <p className="text-sm leading-relaxed text-ink/75">
          Farida Law SD is built on a client-first approach: clear communication, meticulous preparation,
          and steady advocacy. This is placeholder copy intended to be replaced with real attorney details.
        </p>

        <div className="premium-divider mt-6 opacity-40" />

        <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-ink/75">
          <li>Education (add)</li>
          <li>Bar admissions (add)</li>
          <li>Practice focus (add)</li>
          <li>Languages (add)</li>
        </ul>
      </div>
    </Container>
  );
}
