"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { buildMailtoUrl, HONEYPOT_FIELD_NAME } from "@/lib/leadCapture";

/**
 * Turkish-locale mirror of RequestDemoForm.tsx. Same mechanism, same
 * field names, same recipient — the English form is locked, so this is a
 * translated duplicate rather than a modification of it.
 */
const DEMO_REQUEST_EMAIL = "sales@mellivorsecurity.com";

const LABEL_CLASSES = "text-sm font-medium text-foreground";

const FIELD_CLASSES =
  "mt-1.5 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60";

type Status = "idle" | "submitting" | "success" | "error";

export function RequestDemoFormTR() {
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
        `Demo talebi — ${company || name}`,
        [
          { label: "Ad Soyad", value: name },
          { label: "İş e-postası", value: String(data.get("email") ?? "") },
          { label: "Şirket", value: company },
          { label: "Şirket büyüklüğü", value: String(data.get("companySize") ?? "") },
          { label: "Değerlendirilen", value: String(data.get("interest") ?? "") },
          { label: "Detaylar", value: String(data.get("details") ?? "") },
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
        <h3 className="text-lg font-semibold text-foreground">E-posta uygulamanız şimdi açılmış olmalı</h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Bilgilerinizle {DEMO_REQUEST_EMAIL} adresine önceden doldurulmuş bir mesaj hazırladık.
          Ekibimize ulaşmak için oradan gönderin — siz göndermeden hiçbir şey iletilmez.
        </p>
        <div className="mt-6">
          <Button variant="outline" size="md" onClick={() => setStatus("idle")}>
            Formu tekrar doldurun
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
            Ad Soyad
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
            İş e-postası
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
            Şirket
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            disabled={status === "submitting"}
            placeholder="Şirket adı"
            className={FIELD_CLASSES}
          />
        </div>

        <div>
          <label htmlFor="companySize" className={LABEL_CLASSES}>
            Şirket büyüklüğü
          </label>
          <select
            id="companySize"
            name="companySize"
            defaultValue=""
            disabled={status === "submitting"}
            className={FIELD_CLASSES}
          >
            <option value="" disabled>
              Bir seçenek belirleyin
            </option>
            <option>1–200 çalışan</option>
            <option>201–1.000 çalışan</option>
            <option>1.001–5.000 çalışan</option>
            <option>5.000+ çalışan</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="interest" className={LABEL_CLASSES}>
            Neyi değerlendiriyorsunuz?
          </label>
          <select
            id="interest"
            name="interest"
            defaultValue=""
            disabled={status === "submitting"}
            className={FIELD_CLASSES}
          >
            <option value="" disabled>
              Bir seçenek belirleyin
            </option>
            <option>Mellivor One</option>
            <option>Behind24</option>
            <option>Mellivor AI Kernel</option>
            <option>Platformun tamamı</option>
            <option>Henüz emin değilim</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="details" className={LABEL_CLASSES}>
            Bilmemiz gereken başka bir şey var mı?
          </label>
          <textarea
            id="details"
            name="details"
            rows={4}
            disabled={status === "submitting"}
            placeholder="Dağıtım modeli, zaman çizelgesi, bağlamak istediğiniz mevcut araçlar..."
            className={FIELD_CLASSES}
          />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-6 text-sm text-red-600" role="alert">
          Talebiniz hazırlanırken bir sorun oluştu. Lütfen tekrar deneyin veya doğrudan{" "}
          {DEMO_REQUEST_EMAIL} adresinden bize e-posta gönderin.
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
          {status === "submitting" ? "Talebiniz hazırlanıyor…" : "Demo Talep Edin"}
        </Button>
      </div>
    </form>
  );
}
