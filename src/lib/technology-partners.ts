import type { LucideIcon } from "lucide-react";
import { Cloud, Fingerprint, Activity, Network } from "lucide-react";

export type PartnerVendor = {
  name: string;
};

export type TechnologyCategory = {
  icon: LucideIcon;
  name: string;
  description: string;
  /**
   * Vendor logos/names populate here as partnerships are confirmed.
   * Left empty rather than filled with placeholder or invented names —
   * the homepage renders by category count, not by vendor count, so
   * this can grow to any number of vendors without touching the UI.
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
