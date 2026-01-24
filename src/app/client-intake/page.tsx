import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import IntakeForm from "@/components/forms/IntakeForm";

export const metadata: Metadata = {
  title: "Client Intake Form | Farida Law SD",
};

export default function ClientIntakePage() {
  return (
    <main className="relative bg-ink text-white">
      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_20%_10%,rgba(56,189,248,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_85%_0%,rgba(199,162,83,0.12),transparent_60%)]" />
      </div>

      <Container className="relative py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Client Intake"
            title="Tell us about your injury"
            description="Share initial details to help us review your case efficiently. Avoid confidential information until representation is confirmed."
            className="text-white"
          />

          {/* SINGLE dark glass card */}
          <div className="mt-10">
            <IntakeForm />
          </div>
        </div>
      </Container>
    </main>
  );
}
