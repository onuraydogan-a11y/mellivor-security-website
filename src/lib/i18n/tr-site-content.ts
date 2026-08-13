import type { LucideIcon } from "lucide-react";
import {
  BrainCircuit,
  Building2,
  Network,
  Boxes,
  Users,
  Globe,
  Landmark,
  Umbrella,
  Factory,
  HeartPulse,
  ShoppingCart,
  Zap,
  Radio,
  BookOpen,
  FlaskConical,
  FileText,
  Quote,
  BookOpenCheck,
  CalendarDays,
  Download,
  Newspaper,
  ShieldCheck,
  ScrollText,
} from "lucide-react";
import type { ValuePillar, Industry, TrustBadge, Testimonial } from "@/lib/site-content";

/** Turkish mirror of src/lib/site-content.ts. */
export const trValuePillars: ValuePillar[] = [
  {
    icon: BrainCircuit,
    title: "Yapay Zeka Kökenli",
    description:
      "Mellivor AI Kernel, sonradan eklenen bir özellik değil, her ürünün merkezinde yer alır.",
  },
  {
    icon: Building2,
    title: "Kurumsal Ölçekte Hazır",
    description:
      "Bulut, şirket içi ve hibrit ortamlarda kurumsal ölçekte ve güvenilirlikte devreye alınmak üzere tasarlandı.",
  },
  {
    icon: Network,
    title: "Tedarikçiden Bağımsız",
    description:
      "Tek bir tedarikçi yığınını dayatmak yerine zaten kullandığınız teknolojileri entegre eder.",
  },
  {
    icon: Boxes,
    title: "Teknoloji Ekosistemi",
    description:
      "Büyüyen teknoloji ortakları portföyü, sizi bağlı kılmadan platformu genişletir.",
  },
  {
    icon: Users,
    title: "Profesyonel Hizmetler",
    description:
      "Uzman ekipler, platformu kendi ekibinizle birlikte tasarlar, devreye alır ve işletir.",
  },
  {
    icon: Globe,
    title: "Küresel Ortaklıklar",
    description:
      "Mellivor'un dünya çapındaki erişimini, teslimatını ve desteğini genişleten bir ortak ağı.",
  },
];

export const trIndustries: Industry[] = [
  { icon: Landmark, name: "Finansal Hizmetler" },
  { icon: Umbrella, name: "Sigortacılık" },
  { icon: Building2, name: "Kamu Sektörü" },
  { icon: Factory, name: "Üretim" },
  { icon: HeartPulse, name: "Sağlık" },
  { icon: ShoppingCart, name: "Perakende" },
  { icon: Zap, name: "Enerji" },
  { icon: Radio, name: "Telekomünikasyon" },
];

/** Shared with the Solution page template's "Related Resources" section. */
export const TR_FEATURED_RESOURCE_LABELS = ["Blog", "Araştırma", "Teknik Raporlar", "Vaka Analizleri"];

export const TR_RESOURCE_ICONS: Record<string, LucideIcon> = {
  Blog: BookOpen,
  "Araştırma": FlaskConical,
  "Teknik Raporlar": FileText,
  "Vaka Analizleri": Quote,
  "Dokümantasyon": BookOpenCheck,
  "Etkinlikler": CalendarDays,
  "İndirilebilir İçerikler": Download,
  "Haberler": Newspaper,
};

export const trTrustBadges: TrustBadge[] = [
  { icon: ShieldCheck, label: "ISO 27001 uyumlu kontroller" },
  { icon: ScrollText, label: "KVKK uyumlu raporlama" },
  { icon: Building2, label: "340+ kurumsal müşteri" },
  { icon: Network, label: "22 teknoloji ortağı" },
];

export const trTestimonials: Testimonial[] = [
  {
    quote:
      "Dört farklı tedarikçi aracını çeyrekten kısa bir sürede Mellivor'un platformunda birleştirdik. Maruziyet penceremiz haftalardan günlere indi.",
    name: "CISO Yardımcısı",
    role: "Finansal Hizmetler",
    company: "NorthPeak Bank",
  },
  {
    quote:
      "Yapay zeka triyajı tek başına platformun bedelini çıkardı — ekibimiz ilk ayda düşük sinyalli uyarılar içinde boğulmaktan kurtuldu.",
    name: "Güvenlik Direktörü",
    role: "Enerji ve Kamu Hizmetleri",
    company: "Voltra Energy",
  },
  {
    quote:
      "Kutudan çıktığı gibi KVKK uyumlu raporlama, denetim hazırlık süremizi yarıdan fazla kısalttı.",
    name: "BT Direktörü",
    role: "Lojistik",
    company: "Ferrum Logistics",
  },
];
