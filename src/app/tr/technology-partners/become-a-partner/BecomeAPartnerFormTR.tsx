"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { buildMailtoUrl, HONEYPOT_FIELD_NAME } from "@/lib/leadCapture";
import { trTechnologyCategories } from "@/lib/i18n/tr-technology-partners";

/**
 * Turkish-locale mirror of BecomeAPartnerForm.tsx. Same mechanism, same
 * field names, same recipient — the English form is locked, so this is a
 * translated duplicate rather than a modification of it.
 */
const PARTNER_APPLICATION_EMAIL = "partners@mellivorsecurity.com";

const LABEL_CLASSES = "text-sm font-medium text-foreground";

const FIELD_CLASSES =
  "mt-1.5 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60";

type Status = "idle" | "submitting" | "success" | "error";

export function BecomeAPartnerFormTR() {
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
        `Ortaklık başvurusu — ${companyName}`,
        [
          { label: "İletişim adı", value: String(data.get("contactName") ?? "") },
          { label: "İş e-postası", value: String(data.get("workEmail") ?? "") },
          { label: "Şirket adı", value: companyName },
          { label: "Şirket web sitesi", value: String(data.get("website") ?? "") },
          { label: "Kategori", value: String(data.get("category") ?? "") },
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
          Bilgilerinizle {PARTNER_APPLICATION_EMAIL} adresine önceden doldurulmuş bir mesaj hazırladık.
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
            İletişim adı
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
            İş e-postası
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
            Şirket adı
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            required
            disabled={status === "submitting"}
            placeholder="Şirket adı"
            className={FIELD_CLASSES}
          />
        </div>

        <div>
          <label htmlFor="website" className={LABEL_CLASSES}>
            Şirket web sitesi
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
            Teknolojiniz hangi kategoriye uyuyor?
          </label>
          <select
            id="category"
            name="category"
            defaultValue=""
            disabled={status === "submitting"}
            className={FIELD_CLASSES}
          >
            <option value="" disabled>
              Bir seçenek belirleyin
            </option>
            {trTechnologyCategories.map((category) => (
              <option key={category.name}>{category.name}</option>
            ))}
            <option>Henüz emin değilim</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="details" className={LABEL_CLASSES}>
            Bize teknolojinizden bahsedin
          </label>
          <textarea
            id="details"
            name="details"
            rows={4}
            disabled={status === "submitting"}
            placeholder="Ne yaptığı, kimin için olduğu ve Mellivor ile entegrasyonun nasıl görüneceği..."
            className={FIELD_CLASSES}
          />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-6 text-sm text-red-600" role="alert">
          Başvurunuz hazırlanırken bir sorun oluştu. Lütfen tekrar deneyin veya doğrudan{" "}
          {PARTNER_APPLICATION_EMAIL} adresinden bize e-posta gönderin.
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
          {status === "submitting" ? "Başvurunuz hazırlanıyor…" : "Ortaklık Başvurusu Yapın"}
        </Button>
      </div>
    </form>
  );
}
