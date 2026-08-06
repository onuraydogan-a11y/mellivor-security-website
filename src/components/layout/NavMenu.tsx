import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import type { NavItem } from "@/lib/navigation";

type NavMenuProps = {
  item: NavItem;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
};

export function NavMenu({ item, isOpen, onToggle, onClose }: NavMenuProps) {
  if (!item.columns) {
    return (
      <Link
        href={item.href}
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={cn(
          "flex items-center gap-1 text-sm font-medium transition-colors hover:text-foreground",
          isOpen ? "text-foreground" : "text-muted-foreground"
        )}
      >
        {item.label}
        <ChevronDown
          aria-hidden
          className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")}
        />
      </button>

      <div
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={cn(
          "fixed inset-x-0 top-16 z-40 border-b border-border bg-background shadow-lg transition-all duration-200 ease-out sm:top-18",
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        )}
      >
        <Container className="py-10">
          {item.description && (
            <p className="mb-6 text-sm text-muted-foreground">{item.description}</p>
          )}

          <div className="flex flex-wrap gap-x-12 gap-y-8">
            {item.columns.map((column, index) => (
              <div key={column.heading ?? index} className="w-56">
                {column.heading && (
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {column.heading}
                  </h4>
                )}
                <ul className={cn("space-y-3", column.heading && "mt-3")}>
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} onClick={onClose} className="group block">
                        <span className="text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                          {link.label}
                        </span>
                        {link.description && (
                          <span className="mt-0.5 block text-xs leading-5 text-muted-foreground">
                            {link.description}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Link
            href={item.href}
            onClick={onClose}
            className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-hover"
          >
            Explore {item.label}
            <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
        </Container>
      </div>
    </div>
  );
}
