import type { LucideIcon } from "lucide-react";
import { Cloud, Fingerprint, Activity, Network } from "lucide-react";

export type PartnerVendor = {
  slug: string;
  name: string;
  summary: string;
  overview: string[];
  portfolio: string[];
  supportedSolutions: string[];
  integrations: string[];
};

export type TechnologyCategory = {
  icon: LucideIcon;
  name: string;
  description: string;
  /**
   * Vendor entries populate here as partnerships are confirmed. Left
   * empty rather than filled with placeholder or invented names — the
   * homepage and nav render by category, not by vendor, so this list
   * can grow to any number of vendors without touching the UI. The
   * vendor page template (src/components/templates/VendorTemplate.tsx)
   * and getVendorBySlug() below are already wired to render whatever
   * gets added here.
   */
  vendors: PartnerVendor[];
};

export const technologyCategories: TechnologyCategory[] = [
  {
    icon: Cloud,
    name: "Cloud & Infrastructure",
    description:
      "Cloud security posture, workload protection, and infrastructure monitoring technologies.",
    vendors: [],
  },
  {
    icon: Fingerprint,
    name: "Identity & Access",
    description:
      "Identity governance, privileged access, and authentication technologies.",
    vendors: [],
  },
  {
    icon: Activity,
    name: "Detection & Response",
    description:
      "SIEM, XDR, and threat detection technologies integrated into Behind24.",
    vendors: [],
  },
  {
    icon: Network,
    name: "Network & Perimeter",
    description:
      "Firewalls, network detection, and perimeter defense technologies.",
    vendors: [],
  },
];

export function getVendorBySlug(
  slug: string
): { vendor: PartnerVendor; category: TechnologyCategory } | undefined {
  for (const category of technologyCategories) {
    const vendor = category.vendors.find((v) => v.slug === slug);
    if (vendor) return { vendor, category };
  }
  return undefined;
}
