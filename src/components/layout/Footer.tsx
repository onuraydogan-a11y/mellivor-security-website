"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { footerNav } from "@/lib/navigation";
import { trFooterNav } from "@/lib/i18n/tr-navigation";
import { localeFromPathname } from "@/lib/i18n/locale";
import { t } from "@/lib/i18n/ui-strings";

export function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const nav = locale === "tr" ? trFooterNav : footerNav;
  const strings = t(locale).footer;

  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-16 sm:py-20">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            {strings.tagline}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {nav.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="rounded-sm text-sm text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col-reverse items-center gap-4 border-t border-border pt-8 sm:flex-row sm:justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {year} Mellivor Security. {strings.rights}
          </p>
        </div>
      </Container>
    </footer>
  );
}
