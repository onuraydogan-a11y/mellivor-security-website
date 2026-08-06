export type SolutionPageContent = {
  eyebrow: string;
  title: string;
  summary: string;
  overview: string[];
  challenge: string[];
  approach: string[];
};

/**
 * Keyed by the same slug used in navigation.ts's Solutions links
 * (e.g. "ai-security" -> /solutions/ai-security). Only one entry is
 * populated this sprint — the template is proven with a single real
 * page rather than generating all 27 solution pages at once.
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
};
