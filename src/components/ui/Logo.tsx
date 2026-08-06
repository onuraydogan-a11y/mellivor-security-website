import Link from "next/link";
import { cn } from "@/lib/cn";

// Official logo.svg viewBox is 1436 x 556.751 — width is derived from
// height to keep that exact aspect ratio, never stretched or cropped.
const LOGO_HEIGHT = 40;
const LOGO_WIDTH = Math.round((1436 / 556.751) * LOGO_HEIGHT);

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex flex-shrink-0 items-center", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/logo.svg"
        alt="Mellivor Security"
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        className="h-10 w-auto"
      />
    </Link>
  );
}
