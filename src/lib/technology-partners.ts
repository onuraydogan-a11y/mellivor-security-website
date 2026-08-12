import type { LucideIcon } from "lucide-react";
import { Cloud, Fingerprint, Activity, Network } from "lucide-react";

export type PartnerVendor = {
  slug: string;
  name: string;
  /** Path under /public, e.g. "/partners/vendor.svg". Optional — omit until an asset is sourced. */
  logo?: string;
  /** Set when the logo asset is white/light-only and needs a dark chip behind it to stay visible. */
  logoOnDark?: boolean;
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
    vendors: [
      {
        slug: "nanitor",
        name: "Nanitor",
        logo: "/partners/nanitor.png",
        summary:
          "Continuous Threat Exposure Management (CTEM) platform for asset discovery, vulnerability, configuration, and patch management.",
        overview: [
          "Nanitor is an Iceland-headquartered Continuous Threat Exposure Management (CTEM) platform giving enterprises asset-centric visibility across on-premises and cloud infrastructure.",
          "The platform is built around three core components — Security Configuration, Vulnerability Management, and Patch Management — and automatically discovers IT assets to surface issues against compliance frameworks and industry best practices.",
        ],
        portfolio: [
          "Asset discovery and inventory",
          "Security Configuration Management",
          "Vulnerability Management",
          "Patch Management",
        ],
        supportedSolutions: ["Exposure Management (CTEM)", "Vulnerability Management"],
        integrations: [
          "Adds Nanitor's CTEM platform to Mellivor's Cloud & Infrastructure technology category.",
        ],
      },
      {
        slug: "aikido-security",
        name: "Aikido Security",
        logo: "/partners/aikido.svg",
        logoOnDark: true,
        summary:
          "All-in-one application security platform covering code, cloud, and runtime security from a single dashboard.",
        overview: [
          "Aikido Security is an application security company based in Ghent, Belgium, founded in 2022.",
          "Its unified platform covers code, cloud, and runtime security — combining Static Application Security Testing (SAST), Software Composition Analysis (SCA), and secrets detection with Aikido Protect for runtime security in a single dashboard.",
        ],
        portfolio: [
          "Static Application Security Testing (SAST)",
          "Software Composition Analysis (SCA)",
          "Secrets detection",
          "Aikido Protect (runtime security)",
        ],
        supportedSolutions: ["AI Security", "API Security", "Web Application Security"],
        integrations: [
          "Adds Aikido's application security platform to Mellivor's Cloud & Infrastructure technology category.",
        ],
      },
      {
        slug: "transferchain",
        name: "TransferChain",
        logo: "/partners/transferchain.png",
        summary:
          "Zero-knowledge, end-to-end encrypted platform for secure file transfer and cloud storage.",
        overview: [
          "TransferChain is headquartered in Zug, Switzerland, and provides client-side end-to-end encrypted file sharing and cloud storage through TransferChain Drive and TransferChain Send.",
          "Its zero-knowledge architecture automatically encrypts and splits each file into chunks distributed across storage providers such as Google Cloud, AWS, and Azure, so TransferChain itself cannot read, access, or see stored or transferred content.",
        ],
        portfolio: [
          "TransferChain Drive (encrypted cloud storage)",
          "TransferChain Send (encrypted file sharing)",
          "Zero-knowledge, chunked, distributed encryption",
        ],
        supportedSolutions: ["Data Security"],
        integrations: [
          "Adds TransferChain's encrypted file transfer and storage platform to Mellivor's Cloud & Infrastructure technology category.",
        ],
      },
    ],
  },
  {
    icon: Fingerprint,
    name: "Identity & Access",
    description:
      "Identity governance, privileged access, and authentication technologies.",
    vendors: [
      {
        slug: "securden",
        name: "Securden",
        logo: "/partners/securden.svg",
        summary:
          "Unified identity security platform combining privileged access management, endpoint privilege management, and identity governance.",
        overview: [
          "Securden offers a unified identity security platform spanning Privileged Access Management (PAM), Endpoint Privilege Management (EPM), and Identity Governance & Administration (IGA).",
          "Its product line includes Securden Unified PAM, Password Vault for Enterprises, and Endpoint Privilege Management & Application Control, deployable on-premises or in private cloud (AWS/Azure).",
        ],
        portfolio: [
          "Securden Unified PAM",
          "Password Vault for Enterprises",
          "Endpoint Privilege Management & Application Control",
          "Privileged session management",
        ],
        supportedSolutions: ["Identity Security", "Zero Trust"],
        integrations: [
          "Adds Securden's unified PAM platform to Mellivor's Identity & Access technology category.",
        ],
      },
    ],
  },
  {
    icon: Activity,
    name: "Detection & Response",
    description:
      "SIEM, XDR, and threat detection technologies integrated into Behind24.",
    vendors: [
      {
        slug: "gatewatcher",
        name: "Gatewatcher",
        logo: "/partners/gatewatcher.png",
        summary:
          "Network Detection and Response (NDR) platform delivering real-time network visibility and rapid threat response.",
        overview: [
          "Gatewatcher is a Paris, France-based Network Detection and Response (NDR) vendor, founded in 2015.",
          "Its NDR platform is built around AIonIQ, an AI-based multi-vector detection engine; SENSOR, for continuous passive network observation; and GAIA, a generative AI assistant for SOC teams.",
        ],
        portfolio: [
          "AIonIQ (AI-based network detection engine)",
          "SENSOR (network observation)",
          "GAIA (generative AI SOC assistant)",
          "Cyber threat intelligence (CTI)",
        ],
        supportedSolutions: ["NDR", "Threat Intelligence"],
        integrations: [
          "Adds Gatewatcher's NDR platform to Mellivor's Detection & Response technology category, alongside Behind24.",
        ],
      },
      {
        slug: "labyrinth",
        name: "Labyrinth",
        logo: "/partners/labyrinth.png",
        summary:
          "Cyber deception platform that uses decoys to detect targeted attacks, advanced persistent threats, and lateral movement.",
        overview: [
          "Labyrinth is a deception technology vendor headquartered in Zabrze, Poland, founded in 2019, with engineers across Poland, Ukraine, and Germany.",
          "The Labyrinth Deception Platform deploys Points — smart imitation hosts that reproduce the services and content of real network segments — to detect targeted attacks, advanced persistent threats, botnets, zero-day attacks, and malicious insiders.",
        ],
        portfolio: [
          "Labyrinth Deception Platform",
          "Points (imitation host decoys)",
          "Early detection for APTs and lateral movement",
        ],
        supportedSolutions: ["Deception Technology"],
        integrations: [
          "Adds Labyrinth's deception platform to Mellivor's Detection & Response technology category, alongside Behind24.",
        ],
      },
      {
        slug: "cybereason",
        name: "Cybereason",
        logo: "/partners/cybereason.png",
        summary:
          "AI-driven XDR platform providing operation-centric threat detection and response across endpoint, identity, cloud, and network.",
        overview: [
          "Cybereason is an XDR vendor headquartered in Boston, serving customers in more than 40 countries; the company operates today as part of LevelBlue.",
          "Its Defense Platform combines EDR, XDR, and next-gen antivirus (NGAV), correlating activity across endpoint, identity, cloud, and network into a single MalOp (malicious operation) view rather than isolated alerts.",
        ],
        portfolio: [
          "Cybereason EDR",
          "Cybereason XDR Platform",
          "Next-gen antivirus (NGAV)",
          "MalOp-based threat hunting",
        ],
        supportedSolutions: ["EDR", "XDR", "MDR"],
        integrations: [
          "Adds Cybereason's XDR platform to Mellivor's Detection & Response technology category, alongside Behind24.",
        ],
      },
      {
        slug: "soteryan",
        name: "Soteryan",
        logo: "/partners/soteryan.svg",
        logoOnDark: true,
        summary:
          "Breach intelligence and fraud prevention platform that detects stolen credentials and stops fraud in real time.",
        overview: [
          "Soteryan equips enterprises, governments, and banks with breach intelligence and fraud prevention technology, alongside managed security services such as CISO-as-a-Service, SOC, and incident response.",
          "Its product line includes BreachShield for breach intelligence, FraudShield for banking fraud management, a Fraud SDK, and DNSShield for DNS-level threat protection.",
        ],
        portfolio: [
          "BreachShield (breach intelligence)",
          "FraudShield (fraud management for banking)",
          "Fraud SDK",
          "DNSShield (DNS threat protection)",
        ],
        supportedSolutions: ["Fraud Prevention", "Threat Intelligence"],
        integrations: [
          "Adds Soteryan's breach intelligence and fraud prevention products to Mellivor's Detection & Response technology category, alongside Behind24.",
        ],
      },
    ],
  },
  {
    icon: Network,
    name: "Network & Perimeter",
    description:
      "Firewalls, network detection, and perimeter defense technologies.",
    vendors: [
      {
        slug: "surf-security",
        name: "SURF Security",
        logo: "/partners/surf.png",
        summary:
          "Zero Trust enterprise browser that secures web access, remote work, and generative AI use at the endpoint.",
        overview: [
          "SURF Security offers a Chromium-based Zero Trust enterprise browser plus a browser extension that brings the same controls to Chrome and Edge without switching browsers.",
          "The platform applies Zero Trust controls at the endpoint to secure generative AI use, web threats, and remote access from a single point of control.",
        ],
        portfolio: [
          "SURF Full Browser (Zero Trust enterprise browser)",
          "SURF Extension (Chrome/Edge)",
          "Secure Agentic AI",
          "Shadow AI Extension",
        ],
        supportedSolutions: ["Zero Trust", "Network Security"],
        integrations: [
          "Adds SURF's Zero Trust enterprise browser to Mellivor's Network & Perimeter technology category.",
        ],
      },
      {
        slug: "cyberserval",
        name: "CyberServal",
        logo: "/partners/cyberserval.svg",
        logoOnDark: true,
        summary:
          "AI-powered cybersecurity company delivering network security, data security, and AI-driven security products.",
        overview: [
          "CyberServal delivers cybersecurity products organized around three pillars: Network Security, Data Security, and AI Innovation.",
          "Its Network Security line includes Network Detection and Response (NDR), a Web Application Firewall (WAF), Cloud Workload Protection Platform (CWPP), and Dynamic Threat Deception, while its Data Security line includes Data Detection and Response (DDR), Network and Email Data Loss Prevention, and Database Security Audit.",
        ],
        portfolio: [
          "Network Detection and Response (NDR)",
          "Data Detection and Response (DDR)",
          "Data Loss Prevention (network and email)",
          "Web Application Firewall (WAF)",
        ],
        supportedSolutions: ["Network Security", "Data Security"],
        integrations: [
          "Adds CyberServal's network and data security products to Mellivor's Network & Perimeter technology category.",
        ],
      },
    ],
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
