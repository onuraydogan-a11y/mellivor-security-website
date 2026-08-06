export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavColumn = {
  heading?: string;
  links: NavLink[];
};

export type NavItem = {
  label: string;
  href: string;
  description?: string;
  columns?: NavColumn[];
};

/**
 * Single source of truth for the site IA. Consumed by the header
 * (mega menus + mobile accordion) and by homepage teaser sections
 * (Platform/Solutions/Services/Resources), so the nav taxonomy and
 * the homepage content can't silently drift apart.
 */
export const mainNav: NavItem[] = [
  {
    label: "Platform",
    href: "/platform",
    description: "Mellivor's own technology ecosystem.",
    columns: [
      {
        heading: "Products",
        links: [
          {
            label: "Mellivor One",
            href: "/platform/mellivor-one",
            description: "The unified control plane for the Mellivor ecosystem.",
          },
          {
            label: "Behind24",
            href: "/platform/behind24",
            description: "Always-on monitoring, detection, and response.",
          },
          {
            label: "AI Platform",
            href: "/platform/ai-platform",
            description: "The intelligence layer behind every Mellivor product.",
          },
        ],
      },
      {
        heading: "Platform",
        links: [
          { label: "Platform Architecture", href: "/platform/architecture" },
          { label: "Integrations", href: "/platform/integrations" },
          { label: "Deployment Models", href: "/platform/deployment-models" },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    description: "The problems Mellivor helps enterprises solve.",
    columns: [
      {
        heading: "AI & Application Risk",
        links: [
          { label: "AI Security", href: "/solutions/ai-security" },
          { label: "API Security", href: "/solutions/api-security" },
          { label: "Web Application Security", href: "/solutions/web-application-security" },
        ],
      },
      {
        heading: "Threat & Exposure",
        links: [
          { label: "Threat Intelligence", href: "/solutions/threat-intelligence" },
          { label: "Attack Surface Management", href: "/solutions/attack-surface-management" },
          { label: "Exposure Management (CTEM)", href: "/solutions/exposure-management" },
          { label: "Vulnerability Management", href: "/solutions/vulnerability-management" },
          { label: "Digital Risk Protection", href: "/solutions/digital-risk-protection" },
          { label: "Brand Protection", href: "/solutions/brand-protection" },
          { label: "Deception Technology", href: "/solutions/deception-technology" },
        ],
      },
      {
        heading: "Detection & Response",
        links: [
          { label: "MDR", href: "/solutions/mdr" },
          { label: "NDR", href: "/solutions/ndr" },
          { label: "EDR", href: "/solutions/edr" },
          { label: "XDR", href: "/solutions/xdr" },
          { label: "SIEM", href: "/solutions/siem" },
          { label: "SOAR", href: "/solutions/soar" },
        ],
      },
      {
        heading: "Infrastructure & Data",
        links: [
          { label: "Cloud Security", href: "/solutions/cloud-security" },
          { label: "Identity Security", href: "/solutions/identity-security" },
          { label: "Data Security", href: "/solutions/data-security" },
          { label: "Network Security", href: "/solutions/network-security" },
          { label: "Email Security", href: "/solutions/email-security" },
          { label: "Zero Trust", href: "/solutions/zero-trust" },
          { label: "OT / IoT Security", href: "/solutions/ot-iot-security" },
        ],
      },
      {
        heading: "Risk & Compliance",
        links: [
          { label: "Fraud Prevention", href: "/solutions/fraud-prevention" },
          { label: "Third-Party Risk Management", href: "/solutions/third-party-risk-management" },
          { label: "Supply Chain Security", href: "/solutions/supply-chain-security" },
          { label: "Managed Security Services", href: "/solutions/managed-security-services" },
        ],
      },
    ],
  },
  {
    label: "Technology Partners",
    href: "/technology-partners",
    description: "Vendor technologies Mellivor distributes, integrates, and supports.",
  },
  {
    label: "Services",
    href: "/services",
    description: "Expert delivery, from design through steady-state operations.",
    columns: [
      {
        heading: "Professional Services",
        links: [
          { label: "Consulting", href: "/services/consulting" },
          { label: "Architecture Design", href: "/services/architecture-design" },
          { label: "Implementation", href: "/services/implementation" },
          { label: "Deployment", href: "/services/deployment" },
          { label: "Integration", href: "/services/integration" },
          { label: "Migration", href: "/services/migration" },
          { label: "Training", href: "/services/training" },
          { label: "Support", href: "/services/support" },
        ],
      },
      {
        heading: "Managed Security Services",
        links: [
          { label: "Incident Response", href: "/services/incident-response" },
          { label: "Technical Account Management", href: "/services/technical-account-management" },
        ],
      },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    columns: [
      {
        links: [
          { label: "Blog", href: "/resources/blog" },
          { label: "Research", href: "/resources/research" },
          { label: "Whitepapers", href: "/resources/whitepapers" },
          { label: "Case Studies", href: "/resources/case-studies" },
          { label: "Documentation", href: "/resources/documentation" },
          { label: "Events", href: "/resources/events" },
          { label: "Downloads", href: "/resources/downloads" },
          { label: "News", href: "/resources/news" },
        ],
      },
    ],
  },
  {
    label: "Company",
    href: "/about",
    columns: [
      {
        links: [
          { label: "About", href: "/about" },
          { label: "Leadership", href: "/leadership" },
          { label: "Partners", href: "/partners" },
          { label: "Careers", href: "/careers" },
          { label: "Press", href: "/press" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ],
  },
];

export type FooterColumn = {
  title: string;
  links: NavLink[];
};

export const footerNav: FooterColumn[] = [
  {
    title: "Platform",
    links: [
      { label: "Mellivor One", href: "/platform/mellivor-one" },
      { label: "Behind24", href: "/platform/behind24" },
      { label: "AI Platform", href: "/platform/ai-platform" },
      { label: "Technology Partners", href: "/technology-partners" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "AI Security", href: "/solutions/ai-security" },
      { label: "Cloud Security", href: "/solutions/cloud-security" },
      { label: "Identity Security", href: "/solutions/identity-security" },
      { label: "Exposure Management (CTEM)", href: "/solutions/exposure-management" },
      { label: "View all solutions", href: "/solutions" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Professional Services", href: "/services" },
      { label: "Incident Response", href: "/services/incident-response" },
      { label: "Technical Account Management", href: "/services/technical-account-management" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/resources/blog" },
      { label: "Research", href: "/resources/research" },
      { label: "Case Studies", href: "/resources/case-studies" },
      { label: "Documentation", href: "/resources/documentation" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Leadership", href: "/leadership" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
