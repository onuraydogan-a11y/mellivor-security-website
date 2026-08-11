import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  imgClassName?: string;
};

/**
 * The official Mellivor logo (public/brand/logo.svg), used unmodified
 * everywhere the brand mark appears. The source file is a full brand
 * card (navy background, wordmark, tagline) — the SVG's viewBox is
 * cropped to that card's own content bounds so it renders as a
 * self-contained lockup rather than a mostly-empty canvas. No path,
 * shape, or color inside the artwork is altered.
 */
export function Logo({ className, imgClassName }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Mellivor Security home"
      className={cn("flex flex-shrink-0 items-center", className)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/logo.svg"
        alt="Mellivor Security"
        width={103}
        height={40}
        className={cn("h-10 w-auto rounded-md", imgClassName)}
      />
    </Link>
  );
}
