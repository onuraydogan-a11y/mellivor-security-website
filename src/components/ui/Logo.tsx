import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  imgClassName?: string;
};

/**
 * The official Mellivor logo (public/brand/logo-transparent.svg) — icon
 * + wordmark + tagline with no background card, so it sits directly on
 * the header instead of reading as a pasted-on navy box. The full
 * brand-card version (with navy background) still lives at
 * public/brand/logo.svg for contexts that want the card treatment
 * (e.g. social previews).
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
        src="/brand/logo-transparent.svg"
        alt="Mellivor Security"
        width={103}
        height={40}
        className={cn("h-10 w-auto", imgClassName)}
      />
    </Link>
  );
}
