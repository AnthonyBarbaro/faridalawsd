import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import IntakeForm from "@/components/forms/IntakeForm";

export const metadata: Metadata = {
  title: "Client Intake Form",
};

export default function ClientIntakePage() {
  return (
    <Container className="py-16">
      <SectionHeading
        eyebrow="Intake"
        title="Client Intake Form"
        description="Share initial case details to help us review efficiently. Avoid confidential information until engagement is confirmed."
      />

      <div className="mt-10 max-w-2xl rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
        <IntakeForm />
      </div>
    </Container>
  );
}
