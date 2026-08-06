import { cn } from "@/lib/cn";

type BrowserFrameProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Generic "product screenshot" chrome — a window frame with traffic-
 * light dots. Used to house abstract dashboard/UI mockups so product
 * sections read as software, without using any real screenshot or
 * stock imagery.
 */
export function BrowserFrame({ children, className }: BrowserFrameProps) {
  return (
    <div className={cn("overflow-hidden rounded-2xl border border-border bg-surface shadow-lg", className)}>
      <div className="flex items-center gap-1.5 border-b border-border bg-muted/60 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
      </div>
      <div className="bg-background p-5">{children}</div>
    </div>
  );
}
