import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import dashboardScreenshot from "../../../public/images/mellivor-one-dashboard.png";

/**
 * Turkish-locale mirror of Hero.tsx. Hero.tsx itself is locked (approved
 * design) and must not be modified, so this renders the identical layout,
 * image, and structure with translated text for the /tr homepage only.
 */
function DashboardPreview() {
  return (
    <div className="w-full max-w-[560px] overflow-hidden rounded-2xl border border-border bg-[#0B0F1A] shadow-2xl">
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-[#0B0F1A] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-3 text-[11px] text-white/40">app.mellivorsecurity.com</span>
      </div>
      <Image
        src={dashboardScreenshot}
        alt="Saldırı yüzeyini, risk maruziyetini, tehdit istihbaratını ve olay metriklerini gösteren Mellivor One panosu"
        placeholder="blur"
        className="h-auto w-full"
        sizes="(min-width: 1024px) 560px, 100vw"
        priority
      />
    </div>
  );
}

export function HeroTR() {
  return (
    <PageHero
      eyebrow="Platform · Çözümler · Hizmetler"
      title="Modern kurumlar için güvenlik altyapısı"
      description="Mellivor; tespit, müdahale ve risk yönetimini tek bir platformda birleştirir — güvenliğinizi daha etkin yönetmeniz için ihtiyaç duyduğunuz teknoloji ve uzmanlığı bir araya getirir."
      primaryCta={{ label: "Demo Talep Edin", href: "/tr/request-demo" }}
      secondaryCta={{ label: "Platformu Görüntüle", href: "/tr/platform" }}
      visual={<DashboardPreview />}
    />
  );
}
