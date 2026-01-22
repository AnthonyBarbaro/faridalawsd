import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reviews",
};

export default function ReviewsPage() {
  return (
    <main className="bg-black text-black">
      <Container className="py-20">
        {/* Header */}
        <SectionHeading
          eyebrow="Reputation"
          title="Client Reviews"
          description="Verified feedback from clients who value professionalism, clarity, and trust."
          className="text-white"
        />

        {/* Reviews grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {site.testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/15 bg-white/10 p-1"
            >
              <TestimonialCard name={t.name} quote={t.quote} />
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}