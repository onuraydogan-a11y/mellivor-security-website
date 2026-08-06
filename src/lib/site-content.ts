import type { LucideIcon } from "lucide-react";
import {
  BrainCircuit,
  Building2,
  Network,
  Boxes,
  Users,
  Globe,
  Landmark,
  Umbrella,
  Factory,
  HeartPulse,
  ShoppingCart,
  Zap,
  Radio,
} from "lucide-react";

export type ValuePillar = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const valuePillars: ValuePillar[] = [
  {
    icon: BrainCircuit,
    title: "AI Native",
    description:
      "The Mellivor AI Platform sits at the core of every product, not bolted on as an afterthought.",
  },
  {
    icon: Building2,
    title: "Enterprise Ready",
    description:
      "Built to deploy across cloud, on-premises, and hybrid environments at enterprise scale and reliability.",
  },
  {
    icon: Network,
    title: "Vendor Neutral",
    description:
      "Integrates the technologies you already run instead of forcing a single-vendor stack.",
  },
  {
    icon: Boxes,
    title: "Technology Ecosystem",
    description:
      "A growing portfolio of technology partners extends the platform without locking you in.",
  },
  {
    icon: Users,
    title: "Professional Services",
    description:
      "Expert teams design, deploy, and operate the platform alongside your own.",
  },
  {
    icon: Globe,
    title: "Global Partnerships",
    description:
      "A partner network that extends Mellivor's reach, delivery, and support worldwide.",
  },
];

export type Industry = {
  icon: LucideIcon;
  name: string;
};

export const industries: Industry[] = [
  { icon: Landmark, name: "Financial Services" },
  { icon: Umbrella, name: "Insurance" },
  { icon: Building2, name: "Government" },
  { icon: Factory, name: "Manufacturing" },
  { icon: HeartPulse, name: "Healthcare" },
  { icon: ShoppingCart, name: "Retail" },
  { icon: Zap, name: "Energy" },
  { icon: Radio, name: "Telecommunications" },
];
