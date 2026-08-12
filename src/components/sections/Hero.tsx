import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import dashboardScreenshot from "../../../public/images/mellivor-one-dashboard.png";

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
        alt="Mellivor One dashboard showing attack surface, risk exposure, threat intelligence, and incident metrics"
        placeholder="blur"
        className="h-auto w-full"
        sizes="(min-width: 1024px) 560px, 100vw"
        priority
      />
    </div>
  );
}

export function Hero() {
  return (
    <PageHero
      eyebrow="Platform · Solutions · Services"
      title="Security infrastructure for the modern enterprise"
      description="Mellivor unifies detection, response, and risk management on one platform — backed by the people who know how to run it."
      primaryCta={{ label: "Request Demo", href: "/request-demo" }}
      secondaryCta={{ label: "Explore Platform", href: "/platform" }}
      visual={<DashboardPreview />}
    />
  );
}
