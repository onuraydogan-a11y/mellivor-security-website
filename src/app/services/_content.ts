/** Capability bullets per service, keyed by the NavLink label in navigation.ts. */
export const SERVICE_CAPABILITIES: Record<string, string[]> = {
  Consulting: [
    "Security strategy and roadmap development",
    "Risk and maturity assessments",
    "Board- and executive-level advisory",
  ],
  "Architecture Design": [
    "Reference architecture tailored to your environment",
    "Vendor and technology selection support",
    "Blueprints that account for compliance requirements",
  ],
  Implementation: [
    "Hands-on platform and technology rollout",
    "Configuration aligned to your policies",
    "Validation testing before go-live",
  ],
  Deployment: [
    "Cloud, on-premises, and hybrid rollout planning",
    "Phased deployment to limit operational disruption",
    "Coordination across IT and security stakeholders",
  ],
  Integration: [
    "Connecting Mellivor to existing tools and data sources",
    "Custom API-based integrations where needed",
    "Workflow alignment across security and IT platforms",
  ],
  Migration: [
    "Legacy platform decommissioning planning",
    "Data and configuration migration",
    "Parallel-run validation before cutover",
  ],
  Training: [
    "SOC analyst enablement and runbooks",
    "Executive and board-level briefings",
    "Role-based training for IT and security teams",
  ],
  Support: [
    "Ongoing technical support across the platform",
    "Proactive health checks and tuning",
    "Escalation paths for critical issues",
  ],
  "Incident Response": [
    "On-demand response when an incident occurs",
    "Containment, eradication, and recovery support",
    "Post-incident reporting and lessons learned",
  ],
  "Technical Account Management": [
    "A named point of contact for your account",
    "Regular platform health and roadmap reviews",
    "Escalation ownership across Mellivor teams",
  ],
};
