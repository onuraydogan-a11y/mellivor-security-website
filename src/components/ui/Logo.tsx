import Link from "next/link";
import { cn } from "@/lib/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "flex flex-shrink-0 items-center gap-2 whitespace-nowrap text-lg font-semibold tracking-tight text-foreground",
        className
      )}
    >
      <span
        aria-hidden
        className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground"
      >
        M
      </span>
      Mellivor Security
    </Link>
  );
}
