import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";

type EmptyStateProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: { label: string; href: string };
};

/**
 * Shared "nothing here yet" treatment — dashed border and a muted
 * tint distinguish it from real content panels (solid border,
 * shadow, white surface), so an empty state never reads as broken.
 */
export function EmptyState({ icon: Icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-border bg-muted/30 px-6 py-16 text-center">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon aria-hidden className="h-6 w-6" />
      </span>
      <div>
        <h3 className="text-base font-semibold text-foreground">{title}</h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground">
          {description}
        </p>
      </div>
      {action && (
        <Button href={action.href} variant="outline" size="md">
          {action.label}
        </Button>
      )}
    </div>
  );
}
