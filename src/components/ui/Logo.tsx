import Link from "next/link";
import { cn } from "@/lib/cn";

// Both are official assets, each viewBox-cropped to the content
// bounds the file itself already defines (its own clipPath rect) —
// no path, shape, or color touched. Width is always derived from
// height so neither is ever stretched or distorted.
const LOGO_HEIGHT = 40;
const MARK_ASPECT = 1436 / 556.751;
const HORIZONTAL_ASPECT = 794.8 / 104.92;

type LogoProps = {
  className?: string;
  variant?: "mark" | "horizontal";
};

export function Logo({ className, variant = "mark" }: LogoProps) {
  const isHorizontal = variant === "horizontal";
  const width = Math.round((isHorizontal ? HORIZONTAL_ASPECT : MARK_ASPECT) * LOGO_HEIGHT);

  return (
    <Link href="/" className={cn("flex flex-shrink-0 items-center", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={isHorizontal ? "/brand/logo-horizontal.svg" : "/brand/logo.svg"}
        alt="Mellivor Security"
        width={width}
        height={LOGO_HEIGHT}
        className="h-10 w-auto"
      />
    </Link>
  );
}
