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
  BookOpen,
  FlaskConical,
  FileText,
  Quote,
  BookOpenCheck,
  CalendarDays,
  Download,
  Newspaper,
  ShieldCheck,
  ScrollText,
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
      "The Mellivor AI Kernel sits at the core of every product, not bolted on as an afterthought.",
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

/** Shared with the Solution page template's "Related Resources" section. */
export const FEATURED_RESOURCE_LABELS = ["Blog", "Research", "Whitepapers", "Case Studies"];

export const RESOURCE_ICONS: Record<string, LucideIcon> = {
  Blog: BookOpen,
  Research: FlaskConical,
  Whitepapers: FileText,
  "Case Studies": Quote,
  Documentation: BookOpenCheck,
  Events: CalendarDays,
  Downloads: Download,
  News: Newspaper,
};

/**
 * Credibility signals shown beneath the hero. Deliberately limited to
 * claims Mellivor can stand behind today (framework alignment, actual
 * partner/client counts already used elsewhere on the site) rather
 * than analyst-award badges (Gartner/Forrester/IDC) the company
 * hasn't earned — borrowing a competitor's trust badge is worse than
 * having none.
 */
export type TrustBadge = {
  icon: LucideIcon;
  label: string;
};

export const trustBadges: TrustBadge[] = [
  { icon: ShieldCheck, label: "ISO 27001-aligned controls" },
  { icon: ScrollText, label: "KVKK-compliant reporting" },
  { icon: Building2, label: "340+ enterprise clients" },
  { icon: Network, label: "22 technology partners" },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "We consolidated four vendor tools into Mellivor's platform in under a quarter. Our exposure window dropped from weeks to days.",
    name: "Deputy CISO",
    role: "Financial Services",
    company: "NorthPeak Bank",
  },
  {
    quote:
      "The AI triage alone paid for the platform — our team stopped drowning in low-signal alerts within the first month.",
    name: "Head of Security",
    role: "Energy & Utilities",
    company: "Voltra Energy",
  },
  {
    quote:
      "KVKK-compliant reporting out of the box meant our audit prep time was cut by more than half.",
    name: "IT Director",
    role: "Logistics",
    company: "Ferrum Logistics",
  },
];
