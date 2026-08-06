import { Container } from "@/components/ui/Container";
import { LogoPlaceholder } from "@/components/ui/LogoPlaceholder";

const PLACEHOLDER_COUNT = 5;

export function TrustedBy() {
  return (
    <section className="border-y border-border bg-muted/40">
      <Container className="py-10">
        <p className="text-center text-sm font-medium text-muted-foreground">
          Trusted by security teams at leading enterprises
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
          {Array.from({ length: PLACEHOLDER_COUNT }).map((_, index) => (
            <LogoPlaceholder key={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
