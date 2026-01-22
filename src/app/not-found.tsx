import Container from "@/components/Container";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="py-24">
      <h1 className="font-serif text-3xl text-ink">Page not found</h1>
      <p className="mt-3 text-sm text-ink/70">
        The page you’re looking for doesn’t exist.
      </p>
      <div className="mt-8">
        <ButtonLink href="/" variant="primary" size="md">
          Back to Home
        </ButtonLink>
      </div>
    </Container>
  );
}
