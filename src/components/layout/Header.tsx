"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { NavMenu } from "@/components/layout/NavMenu";
import { cn } from "@/lib/cn";
import { mainNav } from "@/lib/navigation";
import { trMainNav } from "@/lib/i18n/tr-navigation";
import { localeFromPathname, toggleLocalePath } from "@/lib/i18n/locale";
import { t } from "@/lib/i18n/ui-strings";

const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const nav = locale === "tr" ? trMainNav : mainNav;
  const strings = t(locale).header;
  const requestDemoHref = locale === "tr" ? "/tr/request-demo" : "/request-demo";

  useEffect(() => {
    if (!openMenu) return;

    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenMenu(null);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [openMenu]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between sm:h-18">
        <Logo />

        <nav ref={navRef} className="hidden items-center gap-7 xl:flex">
          {nav.map((item) => (
            <NavMenu
              key={item.label}
              item={item}
              isOpen={openMenu === item.label}
              onToggle={() =>
                setOpenMenu((current) => (current === item.label ? null : item.label))
              }
              onClose={() => setOpenMenu(null)}
              locale={locale}
            />
          ))}
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <Link
            href={toggleLocalePath(pathname ?? "/")}
            className={cn(
              "rounded-sm text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
              FOCUS_RING
            )}
            aria-label={locale === "tr" ? "Switch to English" : "Türkçeye geç"}
          >
            {locale === "tr" ? "EN" : "TR"}
          </Link>
          <Button href={requestDemoHref} variant="primary" size="sm">
            {strings.requestDemo}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileNavOpen((open) => !open)}
          aria-expanded={isMobileNavOpen}
          aria-label={strings.toggleNav}
          className={cn(
            "inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md text-foreground xl:hidden",
            FOCUS_RING
          )}
        >
          {isMobileNavOpen ? (
            <X aria-hidden className="h-6 w-6" />
          ) : (
            <Menu aria-hidden className="h-6 w-6" />
          )}
        </button>
      </Container>

      {isMobileNavOpen && (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-border bg-background xl:hidden">
          <Container className="flex flex-col gap-1 py-4">
            <Link
              href={toggleLocalePath(pathname ?? "/")}
              onClick={() => setIsMobileNavOpen(false)}
              className={cn(
                "self-start rounded-md px-2 py-2 text-sm font-semibold text-primary",
                FOCUS_RING
              )}
            >
              {locale === "tr" ? "English" : "Türkçe"}
            </Link>
            {nav.map((item) => {
              if (!item.columns) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileNavOpen(false)}
                    className={cn(
                      "rounded-md px-2 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground",
                      FOCUS_RING
                    )}
                  >
                    {item.label}
                  </Link>
                );
              }

              const isSectionOpen = openMobileSection === item.label;

              return (
                <div key={item.label}>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenMobileSection((current) =>
                        current === item.label ? null : item.label
                      )
                    }
                    aria-expanded={isSectionOpen}
                    className={cn(
                      "flex w-full items-center justify-between rounded-md px-2 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground",
                      FOCUS_RING
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      aria-hidden
                      className={cn("h-4 w-4 transition-transform", isSectionOpen && "rotate-180")}
                    />
                  </button>

                  {isSectionOpen && (
                    <div className="ml-2 flex flex-col gap-4 border-l border-border py-2 pl-4">
                      {item.columns.map((column, index) => (
                        <div key={column.heading ?? index}>
                          {column.heading && (
                            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                              {column.heading}
                            </p>
                          )}
                          <div className={cn("flex flex-col", column.heading && "mt-2")}>
                            {column.links.map((link) => (
                              <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMobileNavOpen(false)}
                                className={cn(
                                  "rounded-md px-2 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground",
                                  FOCUS_RING
                                )}
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="mt-3 px-2">
              <Button href={requestDemoHref} variant="primary" size="md" className="w-full">
                {strings.requestDemo}
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
