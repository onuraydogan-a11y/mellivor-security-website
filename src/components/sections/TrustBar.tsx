import { Container } from "@/components/ui/Container";
import { trustBadges } from "@/lib/site-content";
import { trTrustBadges } from "@/lib/i18n/tr-site-content";
import type { Locale } from "@/lib/i18n/locale";

/**
 * A quiet credibility strip beneath the hero — the kind of signal
 * international platform leaders lead with (Wiz's "Trusted by 65% of
 * Fortune 100", SentinelOne's analyst badges). Mellivor's version
 * uses claims the company can actually stand behind rather than
 * borrowed analyst recognition.
 */
export function TrustBar({ locale = "en" }: { locale?: Locale }) {
  const badges = locale === "tr" ? trTrustBadges : trustBadges;
  return (
    <div className="border-y border-border bg-surface/60">
      <Container className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 py-6">
        {badges.map((badge) => (
          <div key={badge.label} className="flex items-center gap-2.5">
            <badge.icon aria-hidden className="h-4 w-4 shrink-0 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              {badge.label}
            </span>
          </div>
        ))}
      </Container>
    </div>
  );
}
