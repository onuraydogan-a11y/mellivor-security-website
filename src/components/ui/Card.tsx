import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

type CardProps = {
  icon?: LucideIcon;
  title: string;
  description?: string;
  href?: string;
  className?: string;
};

export function Card({ icon: Icon, title, description, href, className }: CardProps) {
  const content = (
    <>
      {Icon && (
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon aria-hidden className="h-5 w-5" />
        </span>
      )}
      <h3 className="mt-4 text-base font-semibold text-foreground">{title}</h3>
      {description && (
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
      )}
    </>
  );

  const classes = cn(
    "rounded-2xl border border-border bg-surface p-7 shadow-sm transition-all duration-200",
    href &&
      "hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return <div className={classes}>{content}</div>;
}
