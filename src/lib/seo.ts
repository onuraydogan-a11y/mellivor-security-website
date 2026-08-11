import type { Metadata } from "next";

export const SITE_NAME = "Mellivor Security";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mellivorsecurity.com";

/** Same tagline already used in the footer — the site's one existing description. */
export const DEFAULT_DESCRIPTION =
  "Mellivor Security helps enterprises detect, respond to, and get ahead of the risks that matter — through a proprietary platform, a technology ecosystem, and the people behind both.";

/** Only existing raster-adjacent brand asset in the repo (public/brand/logo.svg) — reused as-is, no new asset created. */
export const OG_IMAGE = "/brand/logo.svg";

type BuildMetadataInput = {
  title: string;
  description?: string;
  path: string;
};

/**
 * Single source of truth for per-page metadata. Every page passes its own
 * (already-existing) title and description; this fills in the canonical
 * URL, Open Graph, and Twitter card fields consistently so no page has to
 * repeat that structure. Relies on metadataBase (set in the root layout)
 * to resolve the relative `path`/image into absolute URLs.
 */
export function buildMetadata({ title, description, path }: BuildMetadataInput): Metadata {
  const desc = description ?? DEFAULT_DESCRIPTION;

  return {
    title,
    description: desc,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description: desc,
      url: path,
      siteName: SITE_NAME,
      type: "website",
      images: [{ url: OG_IMAGE }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: [OG_IMAGE],
    },
  };
}
