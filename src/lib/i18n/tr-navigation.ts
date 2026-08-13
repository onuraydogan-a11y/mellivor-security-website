import type { NavItem, FooterColumn } from "@/lib/navigation";

/**
 * Turkish mirror of src/lib/navigation.ts — same shape, same slugs
 * (prefixed with /tr), translated labels/descriptions. Product and
 * company names are kept exactly as in English per the localization brief.
 */
export const trMainNav: NavItem[] = [
  {
    label: "Platform",
    href: "/tr/platform",
    description: "Mellivor'un kendi teknoloji ekosistemi.",
    columns: [
      {
        heading: "Ürünler",
        links: [
          {
            label: "Mellivor One",
            href: "/tr/platform/mellivor-one",
            description: "Mellivor ekosistemi için birleşik kontrol düzlemi.",
          },
          {
            label: "Behind24",
            href: "/tr/platform/behind24",
            description: "Sürekli izleme, tespit ve müdahale.",
          },
          {
            label: "Mellivor AI Kernel",
            href: "/tr/platform/ai-platform",
            description: "Her Mellivor ürününün arkasındaki zeka katmanı.",
          },
        ],
      },
      {
        heading: "Platform Bileşenleri",
        links: [
          { label: "Platform Genel Bakış", href: "/tr/platform/overview" },
          { label: "Entegrasyonlar", href: "/tr/platform/integrations" },
          { label: "Dağıtım Modelleri", href: "/tr/platform/deployment-models" },
        ],
      },
    ],
  },
  {
    label: "Çözümler",
    href: "/tr/solutions",
    description: "Mellivor'un kurumların çözmesine yardımcı olduğu sorunlar.",
    columns: [
      {
        heading: "AI ve Uygulama Riski",
        links: [
          { label: "AI Security", href: "/tr/solutions/ai-security" },
          { label: "API Security", href: "/tr/solutions/api-security" },
          { label: "Web Uygulama Güvenliği", href: "/tr/solutions/web-application-security" },
        ],
      },
      {
        heading: "Tehdit ve Maruziyet",
        links: [
          { label: "Tehdit İstihbaratı", href: "/tr/solutions/threat-intelligence" },
          { label: "Saldırı Yüzeyi Yönetimi", href: "/tr/solutions/attack-surface-management" },
          { label: "Maruziyet Yönetimi (CTEM)", href: "/tr/solutions/exposure-management" },
          { label: "Güvenlik Açığı Yönetimi", href: "/tr/solutions/vulnerability-management" },
          { label: "Dijital Risk Koruması", href: "/tr/solutions/digital-risk-protection" },
          { label: "Marka Koruması", href: "/tr/solutions/brand-protection" },
          { label: "Aldatma (Deception) Teknolojisi", href: "/tr/solutions/deception-technology" },
        ],
      },
      {
        heading: "Tespit ve Müdahale",
        links: [
          { label: "MDR", href: "/tr/solutions/mdr" },
          { label: "NDR", href: "/tr/solutions/ndr" },
          { label: "EDR", href: "/tr/solutions/edr" },
          { label: "XDR", href: "/tr/solutions/xdr" },
          { label: "SIEM", href: "/tr/solutions/siem" },
          { label: "SOAR", href: "/tr/solutions/soar" },
        ],
      },
      {
        heading: "Altyapı ve Veri",
        links: [
          { label: "Bulut Güvenliği", href: "/tr/solutions/cloud-security" },
          { label: "Kimlik Güvenliği", href: "/tr/solutions/identity-security" },
          { label: "Veri Güvenliği", href: "/tr/solutions/data-security" },
          { label: "Ağ Güvenliği", href: "/tr/solutions/network-security" },
          { label: "E-posta Güvenliği", href: "/tr/solutions/email-security" },
          { label: "Zero Trust", href: "/tr/solutions/zero-trust" },
          { label: "OT / IoT Güvenliği", href: "/tr/solutions/ot-iot-security" },
        ],
      },
      {
        heading: "Risk ve Uyumluluk",
        links: [
          { label: "Dolandırıcılık Önleme", href: "/tr/solutions/fraud-prevention" },
          { label: "Üçüncü Taraf Risk Yönetimi", href: "/tr/solutions/third-party-risk-management" },
          { label: "Tedarik Zinciri Güvenliği", href: "/tr/solutions/supply-chain-security" },
          { label: "Yönetilen Güvenlik Hizmetleri", href: "/tr/solutions/managed-security-services" },
        ],
      },
    ],
  },
  {
    label: "Teknoloji Ortakları",
    href: "/tr/technology-partners",
    description: "Mellivor'un dağıttığı, entegre ettiği ve desteklediği tedarikçi teknolojileri.",
    columns: [
      {
        heading: "Teknoloji Portföyü",
        links: [
          { label: "Bulut ve Altyapı", href: "/tr/technology-partners/cloud-infrastructure" },
          { label: "Kimlik ve Erişim", href: "/tr/technology-partners/identity-access" },
          { label: "Tespit ve Müdahale", href: "/tr/technology-partners/detection-response" },
          { label: "Ağ ve Çevre Güvenliği", href: "/tr/technology-partners/network-perimeter" },
        ],
      },
      {
        heading: "Ekosistem",
        links: [
          {
            label: "Ortak Tedarikçiler",
            href: "/tr/technology-partners/vendors",
            description: "Mellivor ekosistemindeki her teknolojiye göz atın.",
          },
          {
            label: "Entegrasyon Ekosistemi",
            href: "/tr/technology-partners/integrations",
            description: "Mellivor'un zaten kullandığınız araçlara nasıl bağlandığı.",
          },
          {
            label: "Öne Çıkan Teknolojiler",
            href: "/tr/technology-partners/featured",
            description: "Portföydeki öne çıkan teknolojiler.",
          },
          {
            label: "Ortak Olun",
            href: "/tr/technology-partners/become-a-partner",
            description: "Teknolojinizi Mellivor platformuna dahil edin.",
          },
        ],
      },
    ],
  },
  {
    label: "Hizmetler",
    href: "/tr/services",
    description: "Tasarımdan kararlı durum operasyonlarına kadar uzman hizmet.",
    columns: [
      {
        heading: "Profesyonel Hizmetler",
        links: [
          {
            label: "Danışmanlık",
            href: "/tr/services/consulting",
            description: "Güvenlik yatırımını iş riskiyle uyumlu hale getirmek için stratejik rehberlik.",
          },
          {
            label: "Mimari Tasarım",
            href: "/tr/services/architecture-design",
            description: "Ortamınıza ve kısıtlarınıza özel referans mimariler.",
          },
          {
            label: "Uygulama",
            href: "/tr/services/implementation",
            description: "Mellivor platformunun ve bağlı teknolojilerin uygulamalı olarak devreye alınması.",
          },
          {
            label: "Dağıtım",
            href: "/tr/services/deployment",
            description: "Bulut, şirket içi veya hibrit ortamlarda devreye alma.",
          },
          {
            label: "Entegrasyon",
            href: "/tr/services/integration",
            description: "Mellivor'u zaten kullandığınız araç ve veri kaynaklarına bağlama.",
          },
          {
            label: "Geçiş",
            href: "/tr/services/migration",
            description: "Eski araçlardan Mellivor platformuna minimum kesintiyle geçiş.",
          },
          {
            label: "Eğitim",
            href: "/tr/services/training",
            description: "SOC, BT ve güvenlik ekipleriniz için yetkinlik kazandırma.",
          },
          {
            label: "Destek",
            href: "/tr/services/support",
            description: "Platformu sorunsuz çalışır durumda tutmak için sürekli teknik destek.",
          },
        ],
      },
      {
        heading: "Yönetilen Güvenlik Hizmetleri",
        links: [
          {
            label: "Olay Müdahale",
            href: "/tr/services/incident-response",
            description: "Bir güvenlik olayı yaşandığında talep üzerine uzman müdahalesi.",
          },
          {
            label: "Teknik Hesap Yönetimi",
            href: "/tr/services/technical-account-management",
            description: "Hesabınızın teknik ihtiyaçları için özel bir irtibat noktası.",
          },
        ],
      },
    ],
  },
  {
    label: "Kaynaklar",
    href: "/tr/resources",
    columns: [
      {
        links: [
          { label: "Blog", href: "/tr/resources/blog" },
          { label: "Araştırma", href: "/tr/resources/research" },
          { label: "Teknik Raporlar", href: "/tr/resources/whitepapers" },
          { label: "Vaka Analizleri", href: "/tr/resources/case-studies" },
          { label: "Dokümantasyon", href: "/tr/resources/documentation" },
          { label: "Etkinlikler", href: "/tr/resources/events" },
          { label: "İndirilebilir İçerikler", href: "/tr/resources/downloads" },
          { label: "Haberler", href: "/tr/resources/news" },
        ],
      },
    ],
  },
  {
    label: "Şirket",
    href: "/tr/about",
    columns: [
      {
        links: [
          { label: "Hakkımızda", href: "/tr/about" },
          { label: "Yönetim Ekibi", href: "/tr/leadership" },
          { label: "Ortaklar", href: "/tr/partners" },
          { label: "Kariyer", href: "/tr/careers" },
          { label: "Basın", href: "/tr/press" },
          { label: "İletişim", href: "/tr/contact" },
        ],
      },
    ],
  },
];

export const trFooterNav: FooterColumn[] = [
  {
    title: "Platform",
    links: [
      { label: "Mellivor One", href: "/tr/platform/mellivor-one" },
      { label: "Behind24", href: "/tr/platform/behind24" },
      { label: "Mellivor AI Kernel", href: "/tr/platform/ai-platform" },
      { label: "Platform Genel Bakış", href: "/tr/platform/overview" },
    ],
  },
  {
    title: "Çözümler",
    links: [
      { label: "AI Security", href: "/tr/solutions/ai-security" },
      { label: "Bulut Güvenliği", href: "/tr/solutions/cloud-security" },
      { label: "Kimlik Güvenliği", href: "/tr/solutions/identity-security" },
      { label: "Maruziyet Yönetimi (CTEM)", href: "/tr/solutions/exposure-management" },
      { label: "Tüm çözümleri görüntüle", href: "/tr/solutions" },
    ],
  },
  {
    title: "Teknoloji Ortakları",
    links: [
      { label: "Bulut ve Altyapı", href: "/tr/technology-partners/cloud-infrastructure" },
      { label: "Kimlik ve Erişim", href: "/tr/technology-partners/identity-access" },
      { label: "Ortak Olun", href: "/tr/technology-partners/become-a-partner" },
    ],
  },
  {
    title: "Hizmetler",
    links: [
      { label: "Profesyonel Hizmetler", href: "/tr/services" },
      { label: "Olay Müdahale", href: "/tr/services/incident-response" },
      { label: "Teknik Hesap Yönetimi", href: "/tr/services/technical-account-management" },
    ],
  },
  {
    title: "Kaynaklar",
    links: [
      { label: "Blog", href: "/tr/resources/blog" },
      { label: "Araştırma", href: "/tr/resources/research" },
      { label: "Vaka Analizleri", href: "/tr/resources/case-studies" },
      { label: "Dokümantasyon", href: "/tr/resources/documentation" },
    ],
  },
  {
    title: "Şirket",
    links: [
      { label: "Hakkımızda", href: "/tr/about" },
      { label: "Yönetim Ekibi", href: "/tr/leadership" },
      { label: "Kariyer", href: "/tr/careers" },
      { label: "İletişim", href: "/tr/contact" },
    ],
  },
];
