"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { buildMailtoUrl, HONEYPOT_FIELD_NAME } from "@/lib/leadCapture";

/**
 * TEST ONLY — temporary destination for RC3.1 end-to-end verification,
 * provided directly by the business. Not the final production address.
 * No email-sending service, CRM, or API route exists in this project
 * (verified before implementing), so submitting builds a real, addressed
 * mailto: draft in the visitor's own mail client rather than sending
 * anything server-side.
 */
const DEMO_REQUEST_EMAIL = "onur.aydogan@mellivorsecurity.com"; // TEST ONLY — not final

const LABEL_CLASSES = "text-sm font-medium text-foreground";

const FIELD_CLASSES =
  "mt-1.5 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60";

type Status = "idle" | "submitting" | "success" | "error";

export function RequestDemoForm() {
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);

    // Honeypot: real visitors never see or fill this field.
    if (String(data.get(HONEYPOT_FIELD_NAME) ?? "").length > 0) {
      setStatus("success");
      return;
    }

    setStatus("submitting");

    try {
      const name = String(data.get("name") ?? "");
      const company = String(data.get("company") ?? "");
      const url = buildMailtoUrl(
        DEMO_REQUEST_EMAIL,
        `Demo request — ${company || name}`,
        [
          { label: "Full name", value: name },
          { label: "Work email", value: String(data.get("email") ?? "") },
          { label: "Company", value: company },
          { label: "Company size", value: String(data.get("companySize") ?? "") },
          { label: "Evaluating", value: String(data.get("interest") ?? "") },
          { label: "Details", value: String(data.get("details") ?? "") },
        ]
      );
      window.location.href = url;
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-border bg-surface p-8 text-center shadow-sm sm:p-10">
        <h3 className="text-lg font-semibold text-foreground">Your email client should now be open</h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          We&apos;ve pre-filled a message with your details to {DEMO_REQUEST_EMAIL}. Send it from
          there to reach our team — nothing is sent until you do.
        </p>
        <div className="mt-6">
          <Button variant="outline" size="md" onClick={() => setStatus("idle")}>
            Fill out the form again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-surface p-8 shadow-sm sm:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <input
          type="text"
          name={HONEYPOT_FIELD_NAME}
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <div>
          <label htmlFor="name" className={LABEL_CLASSES}>
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            disabled={status === "submitting"}
            placeholder="Jane Cooper"
            className={FIELD_CLASSES}
          />
        </div>

        <div>
          <label htmlFor="email" className={LABEL_CLASSES}>
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            disabled={status === "submitting"}
            placeholder="jane@company.com"
            className={FIELD_CLASSES}
          />
        </div>

        <div>
          <label htmlFor="company" className={LABEL_CLASSES}>
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            disabled={status === "submitting"}
            placeholder="Company name"
            className={FIELD_CLASSES}
          />
        </div>

        <div>
          <label htmlFor="companySize" className={LABEL_CLASSES}>
            Company size
          </label>
          <select
            id="companySize"
            name="companySize"
            defaultValue=""
            disabled={status === "submitting"}
            className={FIELD_CLASSES}
          >
            <option value="" disabled>
              Select an option
            </option>
            <option>1–200 employees</option>
            <option>201–1,000 employees</option>
            <option>1,001–5,000 employees</option>
            <option>5,000+ employees</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="interest" className={LABEL_CLASSES}>
            What are you evaluating?
          </label>
          <select
            id="interest"
            name="interest"
            defaultValue=""
            disabled={status === "submitting"}
            className={FIELD_CLASSES}
          >
            <option value="" disabled>
              Select an option
            </option>
            <option>Mellivor One</option>
            <option>Behind24</option>
            <option>Mellivor AI Platform</option>
            <option>The full platform</option>
            <option>Not sure yet</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="details" className={LABEL_CLASSES}>
            Anything else we should know?
          </label>
          <textarea
            id="details"
            name="details"
            rows={4}
            disabled={status === "submitting"}
            placeholder="Deployment model, timeline, current tools you'd want to connect..."
            className={FIELD_CLASSES}
          />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-6 text-sm text-red-600" role="alert">
          Something went wrong preparing your request. Please try again, or email us directly at{" "}
          {DEMO_REQUEST_EMAIL}.
        </p>
      )}

      <div className="mt-8">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full sm:w-auto"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Preparing your request…" : "Request Demo"}
        </Button>
      </div>
    </form>
  );
}
