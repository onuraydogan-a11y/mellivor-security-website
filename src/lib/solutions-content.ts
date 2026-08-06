export type SolutionPageContent = {
  eyebrow: string;
  title: string;
  summary: string;
  overview: string[];
  whyItMatters: string[];
  challenge: string[];
  approach: string[];
};

/**
 * Keyed by the same slug used in navigation.ts's Solutions links
 * (e.g. "ai-security" -> /solutions/ai-security). Every solution in
 * the nav has a real, distinct entry here — no generic filler text
 * reused across items.
 */
export const solutionContent: Record<string, SolutionPageContent> = {
  "ai-security": {
    eyebrow: "AI & Application Risk",
    title: "AI Security",
    summary:
      "Secure the AI systems your business is already shipping — models, pipelines, and the data behind them.",
    overview: [
      "AI adoption inside the enterprise moved faster than security teams could build controls for it. Models are trained on sensitive data, exposed through new APIs, and embedded directly into customer-facing products — often with none of the guardrails applied to traditional software.",
      "Mellivor AI Security gives you visibility into where AI is running in your environment and a consistent way to secure it, without slowing down the teams building it.",
    ],
    whyItMatters: [
      "A single exposed model or leaked training set can put customer data, intellectual property, and regulatory standing at risk simultaneously — and unlike a typical breach, the damage can be baked into a model's behavior long before anyone notices.",
      "Boards and regulators are starting to ask direct questions about AI governance. Being able to answer them with real visibility, not a slide deck, is quickly becoming a competitive requirement, not a nice-to-have.",
    ],
    challenge: [
      "Shadow AI usage across teams with no central visibility",
      "Sensitive data exposure through model training and prompts",
      "New attack surface: prompt injection, model theft, data poisoning",
      "No consistent policy for how AI systems are reviewed before launch",
    ],
    approach: [
      "Discovery of AI models, pipelines, and APIs across your environment",
      "Continuous monitoring for model and data exposure",
      "Policy guardrails applied consistently across teams",
      "Integration with Behind24 for AI-specific detection and response",
    ],
  },

  "api-security": {
    eyebrow: "AI & Application Risk",
    title: "API Security",
    summary:
      "Discover, test, and protect the APIs connecting your applications, partners, and AI systems.",
    overview: [
      "APIs are now the primary way applications, partners, and AI systems exchange data — which also makes them the primary way attackers get in. Traditional web application firewalls were never built to understand API-specific logic like broken object-level authorization or excessive data exposure.",
      "Mellivor API Security maps your API footprint, including the APIs teams forgot they shipped, and applies controls that understand how APIs actually get abused.",
    ],
    whyItMatters: [
      "Most API breaches don't involve exotic exploits — they involve an endpoint that returned more data than it should have, or an authorization check that only worked for the happy path. Those are the failures that scale silently until a researcher or attacker finds them first.",
      "Undocumented and shadow APIs are frequently the ones causing the most exposure, precisely because no one is watching them.",
    ],
    challenge: [
      "Shadow and undocumented APIs outside the inventory security teams maintain",
      "Broken object-level and function-level authorization between API calls",
      "Excessive data exposure in API responses built for convenience, not least privilege",
      "Bot and credential-stuffing traffic that looks like normal API usage",
    ],
    approach: [
      "Continuous discovery of first-party, third-party, and shadow APIs",
      "Runtime analysis of API behavior to catch logic-based abuse, not just malformed requests",
      "Schema and specification validation to catch data over-exposure before release",
      "Behind24 integration for real-time detection of anomalous API traffic",
    ],
  },

  "web-application-security": {
    eyebrow: "AI & Application Risk",
    title: "Web Application Security",
    summary:
      "Continuous testing and runtime protection for the applications your customers actually use.",
    overview: [
      "Web applications remain the most direct path attackers have into the systems that matter — customer records, payment flows, internal tools. Point-in-time scans catch yesterday's vulnerabilities; they don't catch what changes with every deploy.",
      "Mellivor Web Application Security combines continuous testing with runtime protection, so coverage doesn't have gaps between release cycles.",
    ],
    whyItMatters: [
      "A single injection flaw or authentication bypass in a customer-facing application can expose the same volume of data as a full network breach, but it's discoverable by anyone with a browser — no privileged access required.",
      "Application-layer risk is also the risk regulators and customers see first, since it usually shows up as data actually leaving the organization.",
    ],
    challenge: [
      "Vulnerabilities introduced between infrequent scan or pen test cycles",
      "Business logic flaws that automated scanners routinely miss",
      "Third-party scripts and dependencies expanding the attack surface silently",
      "Security testing treated as a release blocker instead of part of the pipeline",
    ],
    approach: [
      "Continuous application testing integrated into the development lifecycle",
      "Runtime protection that adapts as application behavior changes",
      "Dependency and third-party script risk assessment",
      "Prioritized remediation guidance tied to actual exploitability, not just CVSS score",
    ],
  },

  "threat-intelligence": {
    eyebrow: "Threat & Exposure",
    title: "Threat Intelligence",
    summary: "Contextual, timely intelligence your team can act on the same day it arrives.",
    overview: [
      "Most security teams have more threat data than they can use and not enough that's actually relevant to them. Generic feeds full of indicators with no context create noise, not decisions.",
      "Mellivor Threat Intelligence focuses on what's relevant to your industry, geography, and technology stack, and delivers it in a form your team can act on the same day.",
    ],
    whyItMatters: [
      "Defending against threats you can't see coming is a losing position. Organizations with contextual, timely intelligence consistently detect and contain incidents faster than those relying on generic indicator feeds.",
      "Attribution and context also change the response: a targeted campaign against your sector deserves a different posture than opportunistic scanning noise.",
    ],
    challenge: [
      "Threat feeds full of indicators with no relevance to your environment",
      "No clear link between intelligence and the controls that should act on it",
      "Limited visibility into threat actors specifically targeting your industry",
      "Intelligence arriving too late to change the outcome of an active incident",
    ],
    approach: [
      "Curated intelligence scoped to your industry, geography, and technology footprint",
      "Direct feed into Behind24 detection rules and SOAR playbooks",
      "Regular briefings translating raw intelligence into operational guidance",
      "Dark web and closed-source monitoring for targeted chatter",
    ],
  },

  "attack-surface-management": {
    eyebrow: "Threat & Exposure",
    title: "Attack Surface Management",
    summary: "See your environment the way an attacker does — continuously, not once a year.",
    overview: [
      "Enterprise attack surfaces grow every time a team spins up a new cloud account, forgotten subdomain, or shadow SaaS integration — usually without security ever finding out. You can't secure what you don't know exists.",
      "Mellivor Attack Surface Management continuously maps everything exposed to the outside world, from your perspective and an attacker's.",
    ],
    whyItMatters: [
      "The assets attackers find first are rarely the ones security teams are watching closely — they're the forgotten staging server, the expired certificate, the subdomain nobody remembers provisioning.",
      "An accurate, current asset inventory is the foundation every other control depends on; without it, vulnerability management and detection are both working from an incomplete picture.",
    ],
    challenge: [
      "Shadow IT and unmanaged cloud assets outside existing inventories",
      "M&A activity introducing unknown infrastructure overnight",
      "Expired certificates, exposed admin panels, and forgotten subdomains",
      "No single view of what's actually exposed to the internet at any given time",
    ],
    approach: [
      "Continuous, outside-in discovery of internet-facing assets",
      "Automated risk scoring based on exposure and exploitability",
      "Alerts on newly discovered or newly exposed assets, not just periodic reports",
      "Integration with vulnerability management for prioritized remediation",
    ],
  },

  "exposure-management": {
    eyebrow: "Threat & Exposure",
    title: "Exposure Management (CTEM)",
    summary: "A continuous program for finding, prioritizing, and closing the exposures that matter most.",
    overview: [
      "Continuous Threat Exposure Management shifts security from periodic point-in-time assessments to an ongoing cycle of scoping, discovery, prioritization, validation, and mobilization — matching how fast environments actually change.",
      "Mellivor's CTEM program ties together asset discovery, vulnerability data, and threat intelligence into one prioritized view of exposure, instead of three separate reports that never quite agree.",
    ],
    whyItMatters: [
      "Most organizations have thousands of open findings and no reliable way to know which ten actually matter this week. Exposure management exists precisely to answer that question continuously, not once a quarter.",
      "Boards increasingly expect a program, not a scan — CTEM gives security leaders a defensible, repeatable way to show exposure is actively managed down over time.",
    ],
    challenge: [
      "Vulnerability and exposure data spread across disconnected tools and reports",
      "No consistent way to prioritize thousands of findings against real business risk",
      "Point-in-time assessments that go stale within weeks",
      "Difficulty proving exposure is trending down, not just being logged",
    ],
    approach: [
      "Continuous scoping and discovery across cloud, on-premises, and third-party assets",
      "Risk-based prioritization combining exploitability, asset value, and threat intelligence",
      "Validation of exposures through safe, controlled testing",
      "Structured mobilization workflows to close the loop with remediation owners",
    ],
  },

  "vulnerability-management": {
    eyebrow: "Threat & Exposure",
    title: "Vulnerability Management",
    summary: "Prioritize remediation by real-world exploitability, not raw severity score.",
    overview: [
      "Scanning is the easy part — most programs already generate more findings than any team can remediate. The hard part is knowing which vulnerabilities actually create risk in your specific environment.",
      "Mellivor Vulnerability Management prioritizes by exploitability and business context, not raw CVSS score, so remediation effort goes where it actually reduces risk.",
    ],
    whyItMatters: [
      "The gap between 'vulnerable' and 'actually exploitable in your environment' is where most remediation effort is wasted. Closing that gap is often the single biggest efficiency gain a security program can make.",
      "Unpatched, internet-facing vulnerabilities remain one of the most common initial access vectors in real breaches — the risk is well understood, but rarely managed with the urgency it deserves.",
    ],
    challenge: [
      "Scan results outpacing the team's capacity to remediate",
      "Prioritization based on severity score alone, ignoring real-world exploitability",
      "Patch cycles that lag behind active exploitation timelines",
      "No clear ownership for remediation across IT and application teams",
    ],
    approach: [
      "Continuous scanning across cloud, on-premises, and application layers",
      "Risk-based prioritization weighted by exploitability and asset criticality",
      "Automated ticketing and ownership routing to close the remediation loop",
      "Reporting that shows real risk reduction over time, not just finding counts",
    ],
  },

  "digital-risk-protection": {
    eyebrow: "Threat & Exposure",
    title: "Digital Risk Protection",
    summary: "Monitor the open, deep, and dark web for exposure tied to your organization.",
    overview: [
      "Your digital footprint extends well past the assets IT manages — leaked credentials, impersonating domains, and exposed data on forums and marketplaces all create risk with no traditional perimeter to defend.",
      "Mellivor Digital Risk Protection monitors the open, deep, and dark web for exposure tied to your organization, and acts before it turns into a real incident.",
    ],
    whyItMatters: [
      "By the time leaked credentials or exposed data show up in a breach notification, they've often been circulating for months. Early detection is frequently the difference between a contained incident and a public one.",
      "Digital risk doesn't respect org charts — it affects brand, customers, and executives simultaneously, which makes it a business risk, not just a technical one.",
    ],
    challenge: [
      "Leaked credentials and sensitive data circulating on forums and marketplaces with no visibility",
      "Impersonating domains and social profiles used for phishing and fraud",
      "Executive and employee exposure through public data aggregation",
      "No early warning before exposed data is actively exploited",
    ],
    approach: [
      "Continuous monitoring across open, deep, and dark web sources",
      "Automated detection of leaked credentials tied to your domains",
      "Takedown support for impersonating domains and fraudulent profiles",
      "Executive-specific monitoring for high-risk individuals",
    ],
  },

  "brand-protection": {
    eyebrow: "Threat & Exposure",
    title: "Brand Protection",
    summary: "Find and shut down phishing sites, counterfeits, and impersonation before they scale.",
    overview: [
      "Phishing kits, counterfeit storefronts, and impersonating social accounts trade on your brand's trust — and every one of them is a problem your customers experience before your security team even sees it.",
      "Mellivor Brand Protection finds and acts on brand abuse across domains, social platforms, and app stores before it reaches meaningful scale.",
    ],
    whyItMatters: [
      "Customers rarely distinguish between 'the company was breached' and 'someone impersonated the company' — the reputational damage lands the same way either way.",
      "Brand abuse also tends to be the first sign of a broader phishing campaign; catching it early can prevent the credential theft that follows.",
    ],
    challenge: [
      "Lookalike domains and typosquatting used for phishing campaigns",
      "Counterfeit products and storefronts trading on brand recognition",
      "Impersonating social media accounts targeting customers directly",
      "Slow, manual takedown processes that let abuse run for weeks",
    ],
    approach: [
      "Continuous monitoring for domain, social, and marketplace impersonation",
      "Automated detection tied to your actual brand assets and trademarks",
      "Managed takedown process across registrars, platforms, and marketplaces",
      "Trend reporting to identify recurring abuse patterns and sources",
    ],
  },

  "deception-technology": {
    eyebrow: "Threat & Exposure",
    title: "Deception Technology",
    summary: "Turn any attacker interaction with a decoy into a high-confidence alert.",
    overview: [
      "Traditional detection waits for an attacker to trigger a rule. Deception technology gives attackers something to interact with that has no legitimate reason to be touched — turning any interaction into a high-confidence alert.",
      "Mellivor Deception Technology deploys decoys and lures across your environment that blend in with real assets, catching lateral movement long before it reaches anything real.",
    ],
    whyItMatters: [
      "Deception produces some of the lowest false-positive-rate alerts available, because there's no legitimate reason for a decoy to be touched. That signal quality is rare and valuable in a SOC drowning in noise.",
      "It's also one of the few controls that works just as well against attackers already inside the network as it does against those still trying to get in.",
    ],
    challenge: [
      "Attackers who have already bypassed perimeter and endpoint controls",
      "Lateral movement that goes undetected until data is already being exfiltrated",
      "High false-positive rates from traditional detection drowning out real signal",
      "Limited visibility into attacker behavior once inside the network",
    ],
    approach: [
      "Decoy assets and credentials deployed across cloud and on-premises environments",
      "Realistic lures designed to blend into your actual environment",
      "High-fidelity alerting the moment a decoy is touched",
      "Direct integration with Behind24 for immediate response",
    ],
  },

  mdr: {
    eyebrow: "Detection & Response",
    title: "MDR",
    summary: "24/7 detection and response, delivered through Behind24, without building a SOC from scratch.",
    overview: [
      "Managed Detection and Response gives you a 24/7 SOC without having to build, staff, and retain one yourself — one of the hardest and most expensive parts of a modern security program.",
      "Mellivor MDR, delivered through Behind24, combines continuous monitoring with analysts who actually respond, not just forward alerts back to your team.",
    ],
    whyItMatters: [
      "Attacks don't happen on business hours, and the median time to detect a breach is still measured in days, not minutes, for organizations without continuous coverage.",
      "The security talent shortage makes round-the-clock in-house SOC coverage impractical for most organizations outside the largest enterprises — MDR is often the only realistic path to real 24/7 coverage.",
    ],
    challenge: [
      "No practical way to staff a 24/7 SOC with in-house talent",
      "Alert volume outpacing the internal team's ability to triage",
      "Detection without the follow-through to actually contain an incident",
      "Skills gaps in emerging attack techniques and threat actor behavior",
    ],
    approach: [
      "24/7 monitoring and triage delivered through Behind24",
      "Analysts empowered to take direct containment action, not just alert",
      "Regular threat hunting beyond automated detection rules",
      "Transparent reporting so your team always knows what happened and why",
    ],
  },

  ndr: {
    eyebrow: "Detection & Response",
    title: "NDR",
    summary: "Catch lateral movement and anomalous behavior traditional tools miss.",
    overview: [
      "Network Detection and Response watches traffic patterns for the kind of anomalous behavior that endpoint and perimeter tools miss — especially once an attacker is already inside and moving laterally.",
      "Mellivor NDR analyzes network behavior continuously, flagging the traffic patterns that don't match how your environment normally operates.",
    ],
    whyItMatters: [
      "Attackers who evade endpoint detection still have to move across the network to reach anything valuable — which makes network behavior one of the few signals that's genuinely hard to hide from.",
      "NDR is also one of the few controls effective against unmanaged and IoT devices that can't run traditional endpoint agents at all.",
    ],
    challenge: [
      "Lateral movement that bypasses endpoint detection entirely",
      "Unmanaged and IoT devices that can't run traditional agents",
      "Encrypted traffic limiting visibility into actual payloads",
      "East-west traffic inside the network going largely unmonitored",
    ],
    approach: [
      "Continuous behavioral analysis of east-west and north-south traffic",
      "Detection tuned to your environment's actual traffic baseline, not generic signatures",
      "Coverage for unmanaged and IoT devices without requiring agents",
      "Correlation with endpoint and identity signal through Behind24",
    ],
  },

  edr: {
    eyebrow: "Detection & Response",
    title: "EDR",
    summary: "Detect and contain compromised endpoints before an incident spreads.",
    overview: [
      "Endpoint Detection and Response is the last line of defense once an attacker has a foothold on a device — and increasingly the first place sophisticated attacks are actually caught.",
      "Mellivor EDR combines behavioral detection with the response actions needed to contain a compromised endpoint immediately, not after a ticket is filed.",
    ],
    whyItMatters: [
      "Ransomware and most modern intrusions eventually touch an endpoint — the question isn't whether that happens, it's whether it's caught in the first minutes or discovered days later.",
      "The speed of containment at the endpoint often determines whether an incident stays isolated to one machine or spreads across the network.",
    ],
    challenge: [
      "Fileless and living-off-the-land techniques that evade signature-based tools",
      "Endpoints that go unmonitored outside the managed device fleet",
      "Detection without the ability to immediately isolate a compromised device",
      "Alert fatigue from endpoint tools tuned too loosely or too strictly",
    ],
    approach: [
      "Behavioral detection tuned to living-off-the-land and fileless techniques",
      "One-click isolation and remediation actions available directly to responders",
      "Coverage extended to unmanaged and BYOD endpoints where possible",
      "Continuous tuning informed by Behind24 threat intelligence",
    ],
  },

  xdr: {
    eyebrow: "Detection & Response",
    title: "XDR",
    summary: "Correlate signal across endpoint, network, identity, and cloud into one incident view.",
    overview: [
      "Extended Detection and Response correlates signal across endpoint, network, identity, and cloud instead of leaving analysts to manually piece together fragments from separate consoles.",
      "Mellivor XDR is the correlation layer that ties Behind24's detection sources together into a single, prioritized incident view.",
    ],
    whyItMatters: [
      "The average enterprise SOC juggles a dozen or more security tools, each with its own alerts. XDR exists because the real story of an attack is almost always spread across several of them at once.",
      "Faster correlation directly translates into faster containment — the time analysts spend manually connecting alerts is time an active attacker spends moving deeper.",
    ],
    challenge: [
      "Security signal scattered across a dozen disconnected tools and consoles",
      "Analysts manually correlating alerts that should already be connected",
      "Slower containment because the full attack story isn't visible in one place",
      "Tool sprawl increasing cost without improving detection outcomes",
    ],
    approach: [
      "Correlation of endpoint, network, identity, and cloud signal into one incident view",
      "Automated prioritization based on the full attack chain, not isolated alerts",
      "Native integration with existing tools rather than forcing a rip-and-replace",
      "Unified investigation workflow inside Mellivor One",
    ],
  },

  siem: {
    eyebrow: "Detection & Response",
    title: "SIEM",
    summary: "A managed SIEM that stays tuned, current, and actually useful.",
    overview: [
      "Security Information and Event Management is still the backbone of most compliance and detection programs — the challenge has always been keeping it tuned, current, and actually useful rather than a log archive nobody queries.",
      "Mellivor's managed SIEM keeps detection content current and correlates log data with the same intelligence feeding Behind24.",
    ],
    whyItMatters: [
      "A SIEM full of untuned rules generates so many false positives that real alerts get lost in the noise — which means an under-managed SIEM can create a false sense of security rather than actual protection.",
      "Compliance frameworks routinely require centralized logging and monitoring; a well-run SIEM often satisfies audit requirements and real detection needs at the same time.",
    ],
    challenge: [
      "Detection rules that go stale as the environment and threat landscape change",
      "Alert volume too high for the team to triage effectively",
      "Log sources onboarded inconsistently, leaving blind spots",
      "SIEM treated as a compliance checkbox rather than an active detection tool",
    ],
    approach: [
      "Managed onboarding and normalization of log sources across the environment",
      "Continuously updated detection content informed by current threat intelligence",
      "Tuning to reduce false positives without losing real signal",
      "Direct handoff into Behind24 for triage and response",
    ],
  },

  soar: {
    eyebrow: "Detection & Response",
    title: "SOAR",
    summary: "Automate the repeatable response work so analysts can focus on real decisions.",
    overview: [
      "Security Orchestration, Automation, and Response turns repeatable analyst work — enrichment, containment, notification — into automated playbooks, so analyst time goes to the decisions that actually need a human.",
      "Mellivor SOAR runs the playbooks behind Behind24's response actions, automating the steps that don't need to wait for a person.",
    ],
    whyItMatters: [
      "The time between detection and containment is often dominated by manual, repetitive steps — automating them is one of the most direct ways to shrink mean time to respond.",
      "It also reduces the burden on already-stretched analysts, letting a smaller team handle a larger volume of incidents without burning out.",
    ],
    challenge: [
      "Manual, repetitive response steps consuming analyst time on every incident",
      "Inconsistent response quality depending on which analyst is on shift",
      "Slow containment while analysts manually gather context across tools",
      "Difficulty scaling response capacity without scaling headcount",
    ],
    approach: [
      "Automated playbooks for common enrichment and containment actions",
      "Consistent response execution regardless of which analyst is on call",
      "Human-in-the-loop approval steps for higher-risk automated actions",
      "Continuous playbook refinement based on real incident outcomes",
    ],
  },

  "cloud-security": {
    eyebrow: "Infrastructure & Data",
    title: "Cloud Security",
    summary: "Continuous posture management across every cloud account and workload you run.",
    overview: [
      "Cloud environments change by the hour — new services, new permissions, new misconfigurations — which makes point-in-time cloud reviews obsolete almost as soon as they're finished.",
      "Mellivor Cloud Security continuously assesses posture across your cloud accounts and workloads, catching drift as it happens rather than at the next audit.",
    ],
    whyItMatters: [
      "Misconfiguration, not novel exploits, remains a leading cause of cloud security incidents — an open storage bucket or overly permissive role is far more common than a zero-day.",
      "Multi-cloud and hybrid environments multiply this risk, since consistent policy enforcement gets harder with every additional platform in play.",
    ],
    challenge: [
      "Misconfigurations introduced faster than manual reviews can catch them",
      "Overly permissive identity and access roles across cloud accounts",
      "Inconsistent security posture across multi-cloud and hybrid environments",
      "Workload vulnerabilities discovered only after deployment",
    ],
    approach: [
      "Continuous cloud security posture management across accounts and providers",
      "Least-privilege access analysis and remediation guidance",
      "Workload scanning integrated into CI/CD pipelines",
      "Unified posture view across multi-cloud and hybrid environments",
    ],
  },

  "identity-security": {
    eyebrow: "Infrastructure & Data",
    title: "Identity Security",
    summary: "Govern who and what has access to what, continuously.",
    overview: [
      "Identity has become a primary attack path into most enterprises — compromised credentials, over-provisioned access, and unmanaged service accounts routinely outpace any perimeter control.",
      "Mellivor Identity Security governs who and what has access to what, continuously, instead of relying on periodic access reviews that are stale the day they're completed.",
    ],
    whyItMatters: [
      "Credential-based attacks remain one of the most common paths to initial access in real-world breaches, precisely because a valid login doesn't trigger the same suspicion as an exploit.",
      "Over-provisioned access turns a single compromised account into a much larger blast radius than it needs to be — identity hygiene directly limits how far an attacker can get.",
    ],
    challenge: [
      "Over-provisioned access accumulated over years with no regular review",
      "Unmanaged and orphaned service accounts with standing privileged access",
      "Credential theft and reuse across personal and corporate accounts",
      "Inconsistent enforcement of multi-factor authentication across systems",
    ],
    approach: [
      "Continuous access review and least-privilege enforcement",
      "Discovery and governance of service and machine identities",
      "Privileged access management for the accounts that matter most",
      "Behavioral detection of anomalous authentication and access patterns",
    ],
  },

  "data-security": {
    eyebrow: "Infrastructure & Data",
    title: "Data Security",
    summary: "Know where sensitive data lives and protect it based on what it actually is.",
    overview: [
      "Most enterprises can't confidently answer where their sensitive data actually lives, who can access it, or where it's already been copied — which makes every other control built on top of that uncertainty weaker than it looks.",
      "Mellivor Data Security discovers and classifies sensitive data across your environment, then applies protection based on what the data actually is, not just where it sits.",
    ],
    whyItMatters: [
      "Regulators and customers increasingly judge incidents by what data was exposed, not how the attacker got in — data protection is often the difference between a contained incident and a reportable breach.",
      "Data has a way of spreading into places security never planned for — spreadsheets, chat exports, shadow SaaS tools — and each copy is a new place it can be lost.",
    ],
    challenge: [
      "Sensitive data spread across sanctioned and unsanctioned tools with no inventory",
      "Inconsistent classification leading to inconsistent protection",
      "Data exfiltration through channels outside traditional DLP coverage",
      "Regulatory requirements outpacing the organization's actual data visibility",
    ],
    approach: [
      "Automated discovery and classification of sensitive data at scale",
      "Protection policies applied based on data sensitivity, not location alone",
      "Monitoring for exfiltration across cloud, email, and endpoint channels",
      "Reporting mapped directly to relevant regulatory requirements",
    ],
  },

  "network-security": {
    eyebrow: "Infrastructure & Data",
    title: "Network Security",
    summary: "Consistent segmentation and monitoring across an environment with no clean edge.",
    overview: [
      "The network perimeter has dissolved into a mix of cloud, remote work, and third-party connections, but network-layer controls remain essential — they just have to work across an environment that no longer has a single edge.",
      "Mellivor Network Security applies consistent segmentation, filtering, and monitoring across that reality, rather than a diagram of how the network used to look.",
    ],
    whyItMatters: [
      "Flat, unsegmented networks turn a single compromised device into unrestricted access to everything else — segmentation is one of the highest-leverage controls for limiting how far an incident can spread.",
      "As environments become more distributed, consistent network policy enforcement becomes harder and more important at the same time.",
    ],
    challenge: [
      "Flat network architectures that let a single compromise spread unchecked",
      "Inconsistent policy enforcement across data centers, cloud, and remote sites",
      "Legacy infrastructure that can't support modern segmentation approaches",
      "Limited visibility into east-west traffic between segments",
    ],
    approach: [
      "Segmentation strategy design and implementation across environments",
      "Consistent policy enforcement across on-premises, cloud, and remote access",
      "Continuous monitoring of east-west and perimeter traffic",
      "Integration with NDR and Behind24 for unified network visibility",
    ],
  },

  "email-security": {
    eyebrow: "Infrastructure & Data",
    title: "Email Security",
    summary: "Advanced filtering and awareness training that close the gap phishing exploits.",
    overview: [
      "Email remains one of the most common ways attackers get an initial foothold — phishing, business email compromise, and malicious attachments still work because they target people, not just systems.",
      "Mellivor Email Security combines advanced filtering with the awareness training that closes the gap technology alone can't.",
    ],
    whyItMatters: [
      "Phishing consistently ranks among the top initial access vectors in breach investigations — it's cheap for attackers to run and only needs to work once.",
      "Business email compromise in particular causes direct financial loss, not just data exposure, which puts it squarely in front of finance and executive leadership, not just IT.",
    ],
    challenge: [
      "Phishing and business email compromise bypassing native email filtering",
      "Malicious attachments and links evading signature-based detection",
      "Employees remaining the deciding factor in whether an attack succeeds",
      "Executive impersonation targeting finance and HR workflows specifically",
    ],
    approach: [
      "Advanced filtering that goes beyond native email platform protections",
      "Business email compromise detection tuned to executive and finance targeting",
      "Ongoing phishing simulation and awareness training",
      "Rapid takedown support for phishing infrastructure targeting your domain",
    ],
  },

  "zero-trust": {
    eyebrow: "Infrastructure & Data",
    title: "Zero Trust",
    summary: "Continuous verification in place of implicit, location-based trust.",
    overview: [
      "Zero Trust replaces implicit trust based on network location with continuous verification of every user, device, and request — a meaningful shift for most organizations still operating on a castle-and-moat model.",
      "Mellivor helps design and implement a Zero Trust architecture matched to your actual environment, not a theoretical reference diagram.",
    ],
    whyItMatters: [
      "Once inside a traditional trusted network, attackers move with little friction. Zero Trust removes that assumption of trust at every step, which is precisely what limits lateral movement after an initial compromise.",
      "It's also increasingly a compliance and insurance expectation, not just a best practice — many frameworks now reference Zero Trust principles directly.",
    ],
    challenge: [
      "Legacy architectures built entirely on implicit network-based trust",
      "Inconsistent identity and device verification across applications",
      "Segmentation gaps that let lateral movement continue unchecked",
      "Zero Trust initiatives that stall as theoretical frameworks with no implementation plan",
    ],
    approach: [
      "Zero Trust architecture design matched to your existing environment",
      "Phased implementation prioritized by risk, not a single disruptive rollout",
      "Continuous verification of identity, device, and context for every request",
      "Integration with existing identity and network investments",
    ],
  },

  "ot-iot-security": {
    eyebrow: "Infrastructure & Data",
    title: "OT / IoT Security",
    summary: "Visibility and protection built around the constraints of operational technology.",
    overview: [
      "Operational technology and IoT devices were built for uptime and reliability, not security — many can't run agents, can't be patched during operation, and were never meant to be internet-connected in the first place.",
      "Mellivor OT/IoT Security provides visibility and protection designed around those constraints, not a repurposed IT security playbook.",
    ],
    whyItMatters: [
      "An incident in OT doesn't just risk data — it can risk physical safety and operational continuity, which changes the risk calculus and the acceptable response time entirely.",
      "These environments are also frequently the least visible part of the enterprise, making them an attractive path for attackers looking to move from IT into systems that matter physically.",
    ],
    challenge: [
      "Devices that can't support traditional agents or frequent patching",
      "IT and OT networks converging faster than security controls can adapt",
      "Limited visibility into device inventory and communication patterns",
      "Legacy protocols with no built-in authentication or encryption",
    ],
    approach: [
      "Passive discovery and monitoring that doesn't disrupt operational systems",
      "Segmentation between IT and OT environments to limit blast radius",
      "Protocol-aware detection tuned to industrial and IoT communication patterns",
      "Risk assessments that account for safety and uptime, not just data",
    ],
  },

  "fraud-prevention": {
    eyebrow: "Risk & Compliance",
    title: "Fraud Prevention",
    summary: "Catch fraud in real time without adding friction for legitimate customers.",
    overview: [
      "Fraud increasingly moves at the speed of automation — account takeover, synthetic identities, and payment fraud all scale far faster than manual review processes can keep up with.",
      "Mellivor Fraud Prevention applies behavioral analysis and identity signal to catch fraudulent activity without adding friction for legitimate customers.",
    ],
    whyItMatters: [
      "Fraud losses hit the balance sheet directly and immediately, unlike many security risks that are harder to quantify — which tends to get it executive attention fast, usually after the fact.",
      "The same controls that stop fraud often improve the legitimate customer experience too, by reducing false declines and unnecessary friction.",
    ],
    challenge: [
      "Account takeover using credentials stolen from unrelated breaches",
      "Synthetic identities designed to pass standard verification checks",
      "Payment fraud patterns that evolve faster than static rule sets",
      "Fraud controls that create friction for legitimate customers",
    ],
    approach: [
      "Behavioral analytics tuned to distinguish fraud from legitimate anomalies",
      "Identity verification calibrated to risk level, not applied uniformly",
      "Real-time transaction monitoring with adaptive rule sets",
      "Continuous model tuning based on confirmed fraud outcomes",
    ],
  },

  "third-party-risk-management": {
    eyebrow: "Risk & Compliance",
    title: "Third-Party Risk Management",
    summary: "Continuous visibility into vendor security posture, not a point-in-time questionnaire.",
    overview: [
      "Every vendor, contractor, and integration partner extends your attack surface into an environment you don't control — and most third-party risk programs still rely on point-in-time questionnaires that go stale within months.",
      "Mellivor Third-Party Risk Management provides continuous visibility into vendor security posture, not just a checkbox at contract signing.",
    ],
    whyItMatters: [
      "A growing share of major breaches originate through a third party, not a direct attack — your security posture is only as strong as the weakest vendor with access to your systems or data.",
      "Regulatory frameworks increasingly hold organizations accountable for vendor security failures, not just their own — third-party risk is now a direct compliance concern.",
    ],
    challenge: [
      "Vendor risk assessments based on stale, point-in-time questionnaires",
      "No continuous visibility into vendor security posture after onboarding",
      "Fourth-party risk hidden within vendors' own supply chains",
      "Difficulty prioritizing which vendor relationships carry the most risk",
    ],
    approach: [
      "Continuous monitoring of vendor security posture, not just onboarding review",
      "Risk-based tiering focused on actual access and data exposure",
      "Ongoing reassessment triggered by real posture changes, not fixed calendars",
      "Clear escalation paths when a vendor's risk profile changes",
    ],
  },

  "supply-chain-security": {
    eyebrow: "Risk & Compliance",
    title: "Supply Chain Security",
    summary: "Visibility into the components and pipelines that produce your software.",
    overview: [
      "Software supply chains now include open-source dependencies, build pipelines, and third-party components that most organizations never directly inspect — any one of which can become the actual point of compromise.",
      "Mellivor Supply Chain Security extends visibility into the components and processes that produce your software, not just the software itself.",
    ],
    whyItMatters: [
      "A handful of high-profile supply chain compromises have shown how a single trusted update can reach thousands of downstream organizations simultaneously — the blast radius is structurally different from a typical breach.",
      "Regulatory attention on software supply chains, including requirements like software bills of materials, is accelerating — visibility here is quickly becoming a baseline expectation.",
    ],
    challenge: [
      "Open-source dependencies with unknown or unpatched vulnerabilities",
      "Build and deployment pipelines with insufficient integrity controls",
      "Limited visibility into what's actually inside deployed software",
      "Vendor and supplier software updates trusted without verification",
    ],
    approach: [
      "Software bill of materials generation and continuous dependency monitoring",
      "Build pipeline integrity checks and access controls",
      "Vendor software risk assessment before and after deployment",
      "Rapid response processes for newly disclosed supply chain vulnerabilities",
    ],
  },

  "managed-security-services": {
    eyebrow: "Risk & Compliance",
    title: "Managed Security Services",
    summary: "Mellivor's platform and expertise, operating as an extension of your team.",
    overview: [
      "Not every organization needs — or can staff — a full in-house security operation. Managed Security Services extend Mellivor's platform and expertise as an operational extension of your team, scaled to what you actually need.",
      "This spans day-to-day monitoring through Behind24, incident response when things go wrong, and technical account management to keep everything running as your environment evolves.",
    ],
    whyItMatters: [
      "The cost and difficulty of hiring and retaining security talent make fully in-house coverage impractical for most mid-market and even many enterprise organizations — managed services are often the difference between having real coverage and having a gap.",
      "Consistent operational coverage, not sporadic in-house effort, is what actually determines whether a security program holds up under sustained pressure.",
    ],
    challenge: [
      "Security team headcount that can't keep pace with operational demands",
      "Gaps in coverage during nights, weekends, and holidays",
      "Incident response capability that only gets tested during a real incident",
      "Platform management competing with other IT and security priorities",
    ],
    approach: [
      "Managed monitoring and response delivered through Behind24",
      "On-call incident response when you need expert help immediately",
      "Dedicated technical account management for ongoing platform health",
      "Flexible engagement models that scale with your internal team's capacity",
    ],
  },
};
