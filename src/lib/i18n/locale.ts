export type Locale = "en" | "tr";

/** Derives the active locale from a pathname. Every Turkish route lives under /tr. */
export function localeFromPathname(pathname: string | null | undefined): Locale {
  return pathname?.startsWith("/tr") ? "tr" : "en";
}

/** Maps the current pathname to its equivalent path in the other locale, for the EN|TR switcher. */
export function toggleLocalePath(pathname: string): string {
  if (pathname.startsWith("/tr")) {
    const rest = pathname.slice(3);
    return rest === "" ? "/" : rest;
  }
  return `/tr${pathname === "/" ? "" : pathname}`;
}

/** Prefixes an English-locale href with /tr when building Turkish content data (nav, related links, etc). */
export function trHref(href: string): string {
  if (href.startsWith("mailto:") || href.startsWith("http")) return href;
  return `/tr${href === "/" ? "" : href}`;
}
