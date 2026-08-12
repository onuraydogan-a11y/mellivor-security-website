/**
 * Zero-infrastructure lead delivery: builds a mailto: URL so the
 * submission opens as a real, addressed email draft in the visitor's
 * own mail client. This repo has no backend, no email-sending
 * service, and no CRM integration configured (verified: no API
 * routes, no server actions, no env vars, no email/CRM packages) —
 * mailto is the only mechanism that delivers a real message without
 * inventing credentials or an endpoint that doesn't exist.
 */

/**
 * Deliberately plain, plausible-looking field name for a hidden
 * honeypot input. Real visitors never see or fill it (it's visually
 * hidden); simple bots that auto-fill every input often do.
 */
export const HONEYPOT_FIELD_NAME = "company_url_backup";

export type MailtoField = {
  label: string;
  value: string;
};

/** Builds a mailto: URL with a readable subject and body from the given fields. */
export function buildMailtoUrl(to: string, subject: string, fields: MailtoField[]): string {
  const body = fields
    .filter((field) => field.value && field.value.trim().length > 0)
    .map((field) => `${field.label}: ${field.value}`)
    .join("\n");

  const params = new URLSearchParams({ subject, body });
  return `mailto:${to}?${params.toString().replace(/\+/g, "%20")}`;
}
