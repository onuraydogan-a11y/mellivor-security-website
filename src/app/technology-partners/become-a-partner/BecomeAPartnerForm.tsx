"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { buildMailtoUrl, HONEYPOT_FIELD_NAME } from "@/lib/leadCapture";
import { technologyCategories } from "@/lib/technology-partners";

/**
 * No email-sending service, CRM, or API route exists in this project
 * (verified before implementing). Submitting builds a real, addressed
 * mailto: draft in the visitor's own mail client. partners@ is already
 * the existing, verified address for "technology partner inquiries"
 * per the Contact page — reused here, not invented.
 */
const PARTNER_APPLICATION_EMAIL = "partners@mellivorsecurity.com";

const LABEL_CLASSES = "text-sm font-medium text-foreground";

const FIELD_CLASSES =
  "mt-1.5 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60";

type Status = "idle" | "submitting" | "success" | "error";

export function BecomeAPartnerForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);

    if (String(data.get(HONEYPOT_FIELD_NAME) ?? "").length > 0) {
      setStatus("success");
      return;
    }

    setStatus("submitting");

    try {
      const companyName = String(data.get("companyName") ?? "");
      const url = buildMailtoUrl(
        PARTNER_APPLICATION_EMAIL,
        `Partner application — ${companyName}`,
        [
          { label: "Contact name", value: String(data.get("contactName") ?? "") },
          { label: "Work email", value: String(data.get("workEmail") ?? "") },
          { label: "Company name", value: companyName },
          { label: "Company website", value: String(data.get("website") ?? "") },
          { label: "Category", value: String(data.get("category") ?? "") },
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
          We&apos;ve pre-filled a message with your details to {PARTNER_APPLICATION_EMAIL}. Send
          it from there to reach our team — nothing is sent until you do.
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
          <label htmlFor="contactName" className={LABEL_CLASSES}>
            Contact name
          </label>
          <input
            id="contactName"
            name="contactName"
            type="text"
            required
            disabled={status === "submitting"}
            placeholder="Jane Cooper"
            className={FIELD_CLASSES}
          />
        </div>

        <div>
          <label htmlFor="workEmail" className={LABEL_CLASSES}>
            Work email
          </label>
          <input
            id="workEmail"
            name="workEmail"
            type="email"
            required
            disabled={status === "submitting"}
            placeholder="jane@company.com"
            className={FIELD_CLASSES}
          />
        </div>

        <div>
          <label htmlFor="companyName" className={LABEL_CLASSES}>
            Company name
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            required
            disabled={status === "submitting"}
            placeholder="Company name"
            className={FIELD_CLASSES}
          />
        </div>

        <div>
          <label htmlFor="website" className={LABEL_CLASSES}>
            Company website
          </label>
          <input
            id="website"
            name="website"
            type="url"
            disabled={status === "submitting"}
            placeholder="https://"
            className={FIELD_CLASSES}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="category" className={LABEL_CLASSES}>
            Which category fits your technology?
          </label>
          <select
            id="category"
            name="category"
            defaultValue=""
            disabled={status === "submitting"}
            className={FIELD_CLASSES}
          >
            <option value="" disabled>
              Select an option
            </option>
            {technologyCategories.map((category) => (
              <option key={category.name}>{category.name}</option>
            ))}
            <option>Not sure yet</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="details" className={LABEL_CLASSES}>
            Tell us about your technology
          </label>
          <textarea
            id="details"
            name="details"
            rows={4}
            disabled={status === "submitting"}
            placeholder="What it does, who it's for, and what integration with Mellivor would look like..."
            className={FIELD_CLASSES}
          />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-6 text-sm text-red-600" role="alert">
          Something went wrong preparing your application. Please try again, or email us directly
          at {PARTNER_APPLICATION_EMAIL}.
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
          {status === "submitting" ? "Preparing your application…" : "Apply to Partner"}
        </Button>
      </div>
    </form>
  );
}
