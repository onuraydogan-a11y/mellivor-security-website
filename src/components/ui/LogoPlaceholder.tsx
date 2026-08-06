import { cn } from "@/lib/cn";

/**
 * Neutral placeholder tile for logo strips (customers, technology
 * partners). Deliberately carries no brand name or certification
 * claim — swap in real logos/badges once they're confirmed rather
 * than asserting relationships or compliance status that don't
 * exist yet.
 */
export function LogoPlaceholder({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "flex h-12 w-32 items-center justify-center rounded-md border border-border bg-muted",
        className
      )}
    >
      <div className="h-2 w-16 rounded-full bg-border" />
    </div>
  );
}
