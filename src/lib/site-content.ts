import type { LucideIcon } from "lucide-react";
import {
  Layers,
  BrainCircuit,
  Server,
  Users,
  Landmark,
  HeartPulse,
  Building2,
  ShoppingCart,
  Zap,
  Cpu,
} from "lucide-react";

export type ValueProp = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const valueProps: ValueProp[] = [
  {
    icon: Layers,
    title: "One platform, not a pile of tools",
    description:
      "Mellivor One unifies detection, response, and risk data instead of asking your team to stitch together another console.",
  },
  {
    icon: BrainCircuit,
    title: "Intelligence-led, not alert-led",
    description:
      "Behind24 and the Mellivor AI Platform prioritize what actually matters, so analysts spend time on real risk, not noise.",
  },
  {
    icon: Server,
    title: "Built for how enterprises actually deploy",
    description:
      "Cloud, on-premises, or hybrid — Mellivor's deployment models fit your architecture, not the other way around.",
  },
  {
    icon: Users,
    title: "Backed by people, not just software",
    description:
      "Professional and managed services teams sit behind the platform for the moments that need a human.",
  },
];

export type Industry = {
  icon: LucideIcon;
  name: string;
};

export const industries: Industry[] = [
  { icon: Landmark, name: "Financial Services" },
  { icon: HeartPulse, name: "Healthcare & Life Sciences" },
  { icon: Building2, name: "Government & Public Sector" },
  { icon: ShoppingCart, name: "Retail & E-commerce" },
  { icon: Zap, name: "Energy & Utilities" },
  { icon: Cpu, name: "Technology & SaaS" },
];
