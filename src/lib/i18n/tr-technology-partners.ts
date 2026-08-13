import { Cloud, Fingerprint, Activity, Network, Sparkles, Webhook, ScanSearch, Ghost } from "lucide-react";
import type { TechnologyCategory } from "@/lib/technology-partners";

/**
 * Turkish mirror of src/lib/technology-partners.ts. Same categories,
 * same vendors, same slugs/logos/icons — only category descriptions and
 * vendor summary/overview/portfolio/supportedSolutions/integrations are
 * translated. Vendor and company names are kept exactly as in English
 * per the localization brief.
 */
export const trTechnologyCategories: TechnologyCategory[] = [
  {
    icon: Cloud,
    name: "Bulut ve Altyapı",
    description:
      "Bulut güvenlik duruşu, iş yükü koruması ve altyapı izleme teknolojileri.",
    vendors: [
      {
        slug: "nanitor",
        name: "Nanitor",
        logo: "/partners/nanitor.png",
        summary:
          "Varlık keşfi, güvenlik açığı, yapılandırma ve yama yönetimi için Sürekli Tehdit Maruziyeti Yönetimi (CTEM) platformu.",
        overview: [
          "Nanitor, kurumlara şirket içi ve bulut altyapısında varlık odaklı görünürlük sağlayan, İzlanda merkezli bir Sürekli Tehdit Maruziyeti Yönetimi (CTEM) platformudur.",
          "Platform, Güvenlik Yapılandırması, Güvenlik Açığı Yönetimi ve Yama Yönetimi olmak üzere üç temel bileşen üzerine kuruludur ve uyumluluk çerçevelerine ve sektör en iyi uygulamalarına göre sorunları ortaya çıkarmak için BT varlıklarını otomatik olarak keşfeder.",
        ],
        portfolio: [
          "Varlık keşfi ve envanteri",
          "Güvenlik Yapılandırması Yönetimi",
          "Güvenlik Açığı Yönetimi",
          "Yama Yönetimi",
        ],
        supportedSolutions: ["Maruziyet Yönetimi (CTEM)", "Güvenlik Açığı Yönetimi"],
        integrations: [
          "Nanitor'un CTEM platformunu Mellivor'un Bulut ve Altyapı teknoloji kategorisine ekler.",
        ],
      },
      {
        slug: "aikido-security",
        name: "Aikido Security",
        logo: "/partners/aikido.svg",
        logoOnDark: true,
        summary:
          "Kod, bulut ve çalışma zamanı güvenliğini tek bir panelden kapsayan hepsi bir arada uygulama güvenliği platformu.",
        overview: [
          "Aikido Security, 2022 yılında kurulmuş, Belçika'nın Ghent şehrinde bulunan bir uygulama güvenliği şirketidir.",
          "Birleşik platformu; Statik Uygulama Güvenlik Testi (SAST), Yazılım Bileşim Analizi (SCA) ve gizli bilgi tespitini, çalışma zamanı güvenliği için Aikido Protect ile birleştirerek kod, bulut ve çalışma zamanı güvenliğini tek bir panelde kapsar.",
        ],
        portfolio: [
          "Statik Uygulama Güvenlik Testi (SAST)",
          "Yazılım Bileşim Analizi (SCA)",
          "Gizli bilgi tespiti",
          "Aikido Protect (çalışma zamanı güvenliği)",
        ],
        supportedSolutions: ["AI Security", "API Security", "Web Uygulama Güvenliği"],
        integrations: [
          "Aikido'nun uygulama güvenliği platformunu Mellivor'un Bulut ve Altyapı teknoloji kategorisine ekler.",
        ],
      },
      {
        slug: "transferchain",
        name: "TransferChain",
        logo: "/partners/transferchain.png",
        summary:
          "Güvenli dosya transferi ve bulut depolama için sıfır bilgi (zero-knowledge), uçtan uca şifrelenmiş platform.",
        overview: [
          "TransferChain, merkezi İsviçre'nin Zug şehrinde bulunur ve TransferChain Drive ile TransferChain Send aracılığıyla istemci tarafında uçtan uca şifrelenmiş dosya paylaşımı ve bulut depolama sağlar.",
          "Sıfır bilgi mimarisi, her dosyayı otomatik olarak şifreler ve Google Cloud, AWS ve Azure gibi depolama sağlayıcıları arasında dağıtılmış parçalara böler; böylece TransferChain'in kendisi bile depolanan veya aktarılan içeriği okuyamaz, göremez veya erişemez.",
        ],
        portfolio: [
          "TransferChain Drive (şifrelenmiş bulut depolama)",
          "TransferChain Send (şifrelenmiş dosya paylaşımı)",
          "Sıfır bilgi, parçalanmış, dağıtık şifreleme",
        ],
        supportedSolutions: ["Veri Güvenliği"],
        integrations: [
          "TransferChain'in şifrelenmiş dosya transferi ve depolama platformunu Mellivor'un Bulut ve Altyapı teknoloji kategorisine ekler.",
        ],
      },
    ],
  },
  {
    icon: Fingerprint,
    name: "Kimlik ve Erişim",
    description:
      "Kimlik yönetişimi, ayrıcalıklı erişim ve kimlik doğrulama teknolojileri.",
    vendors: [
      {
        slug: "securden",
        name: "Securden",
        logo: "/partners/securden.svg",
        summary:
          "Ayrıcalıklı erişim yönetimini, uç nokta ayrıcalık yönetimini ve kimlik yönetişimini birleştiren birleşik kimlik güvenliği platformu.",
        overview: [
          "Securden; Ayrıcalıklı Erişim Yönetimi (PAM), Uç Nokta Ayrıcalık Yönetimi (EPM) ve Kimlik Yönetişimi ve Yönetimi'ni (IGA) kapsayan birleşik bir kimlik güvenliği platformu sunar.",
          "Ürün ailesi; şirket içinde veya özel bulutta (AWS/Azure) devreye alınabilen Securden Unified PAM, Kurumlar için Parola Kasası ve Uç Nokta Ayrıcalık Yönetimi ve Uygulama Kontrolü'nü içerir.",
        ],
        portfolio: [
          "Securden Unified PAM",
          "Kurumlar için Parola Kasası",
          "Uç Nokta Ayrıcalık Yönetimi ve Uygulama Kontrolü",
          "Ayrıcalıklı oturum yönetimi",
        ],
        supportedSolutions: ["Kimlik Güvenliği", "Zero Trust"],
        integrations: [
          "Securden'in birleşik PAM platformunu Mellivor'un Kimlik ve Erişim teknoloji kategorisine ekler.",
        ],
      },
    ],
  },
  {
    icon: Activity,
    name: "Tespit ve Müdahale",
    description:
      "Behind24'e entegre edilmiş SIEM, XDR ve tehdit tespiti teknolojileri.",
    vendors: [
      {
        slug: "gatewatcher",
        name: "Gatewatcher",
        logo: "/partners/gatewatcher.png",
        summary:
          "Gerçek zamanlı ağ görünürlüğü ve hızlı tehdit müdahalesi sunan Ağ Tespit ve Müdahale (NDR) platformu.",
        overview: [
          "Gatewatcher, 2015 yılında kurulmuş, Paris, Fransa merkezli bir Ağ Tespit ve Müdahale (NDR) tedarikçisidir.",
          "NDR platformu; AI tabanlı çok yönlü tespit motoru AIonIQ, sürekli pasif ağ gözlemi için SENSOR ve SOC ekipleri için üretken yapay zeka asistanı GAIA üzerine kuruludur.",
        ],
        portfolio: [
          "AIonIQ (AI tabanlı ağ tespit motoru)",
          "SENSOR (ağ gözlemi)",
          "GAIA (üretken yapay zeka SOC asistanı)",
          "Siber tehdit istihbaratı (CTI)",
        ],
        supportedSolutions: ["NDR", "Tehdit İstihbaratı"],
        integrations: [
          "Gatewatcher'ın NDR platformunu, Behind24 ile birlikte Mellivor'un Tespit ve Müdahale teknoloji kategorisine ekler.",
        ],
      },
      {
        slug: "labyrinth",
        name: "Labyrinth",
        logo: "/partners/labyrinth.png",
        summary:
          "Hedefli saldırıları, gelişmiş kalıcı tehditleri ve yanal hareketi tespit etmek için tuzaklar kullanan siber aldatma (deception) platformu.",
        overview: [
          "Labyrinth, 2019'da kurulmuş, merkezi Polonya'nın Zabrze şehrinde bulunan; Polonya, Ukrayna ve Almanya'da mühendisleri olan bir aldatma teknolojisi tedarikçisidir.",
          "Labyrinth Deception Platform; hedefli saldırıları, gelişmiş kalıcı tehditleri, botnet'leri, sıfırıncı gün saldırılarını ve kötü niyetli içeridekileri tespit etmek için gerçek ağ segmentlerinin hizmet ve içeriğini taklit eden akıllı sahte sunucular olan Points'i kullanır.",
        ],
        portfolio: [
          "Labyrinth Deception Platform",
          "Points (taklit sunucu tuzakları)",
          "APT'ler ve yanal hareket için erken tespit",
        ],
        supportedSolutions: ["Deception (Aldatma Teknolojisi)"],
        integrations: [
          "Labyrinth'in aldatma platformunu, Behind24 ile birlikte Mellivor'un Tespit ve Müdahale teknoloji kategorisine ekler.",
        ],
      },
      {
        slug: "cybereason",
        name: "Cybereason",
        logo: "/partners/cybereason.png",
        summary:
          "Uç nokta, kimlik, bulut ve ağ genelinde operasyon odaklı tehdit tespiti ve müdahalesi sağlayan AI destekli XDR platformu.",
        overview: [
          "Cybereason, merkezi Boston'da bulunan ve 40'tan fazla ülkede müşterilere hizmet veren bir XDR tedarikçisidir; şirket bugün LevelBlue'nun bir parçası olarak faaliyet göstermektedir.",
          "Defense Platform; EDR, XDR ve yeni nesil antivirüsü (NGAV) birleştirerek uç nokta, kimlik, bulut ve ağ genelindeki etkinliği, izole uyarılar yerine tek bir MalOp (kötü amaçlı operasyon) görünümünde ilişkilendirir.",
        ],
        portfolio: [
          "Cybereason EDR",
          "Cybereason XDR Platform",
          "Yeni nesil antivirüs (NGAV)",
          "MalOp tabanlı tehdit avcılığı",
        ],
        supportedSolutions: ["EDR", "XDR", "MDR"],
        integrations: [
          "Cybereason'ın XDR platformunu, Behind24 ile birlikte Mellivor'un Tespit ve Müdahale teknoloji kategorisine ekler.",
        ],
      },
      {
        slug: "soteryan",
        name: "Soteryan",
        logo: "/partners/soteryan.svg",
        logoOnDark: true,
        summary:
          "Çalıntı kimlik bilgilerini tespit eden ve dolandırıcılığı gerçek zamanlı olarak durduran ihlal istihbaratı ve dolandırıcılık önleme platformu.",
        overview: [
          "Soteryan; kurumları, devlet kurumlarını ve bankaları ihlal istihbaratı ve dolandırıcılık önleme teknolojisiyle donatırken CISO-as-a-Service, SOC ve olay müdahalesi gibi yönetilen güvenlik hizmetleri de sunar.",
          "Ürün ailesi; ihlal istihbaratı için BreachShield, bankacılık dolandırıcılığı yönetimi için FraudShield, bir Fraud SDK ve DNS düzeyinde tehdit koruması için DNSShield'i içerir.",
        ],
        portfolio: [
          "BreachShield (ihlal istihbaratı)",
          "FraudShield (bankacılık dolandırıcılığı yönetimi)",
          "Fraud SDK",
          "DNSShield (DNS tehdit koruması)",
        ],
        supportedSolutions: ["Dolandırıcılık Önleme", "Tehdit İstihbaratı"],
        integrations: [
          "Soteryan'ın ihlal istihbaratı ve dolandırıcılık önleme ürünlerini, Behind24 ile birlikte Mellivor'un Tespit ve Müdahale teknoloji kategorisine ekler.",
        ],
      },
    ],
  },
  {
    icon: Network,
    name: "Ağ ve Çevre Güvenliği",
    description:
      "Güvenlik duvarları, ağ tespiti ve çevre savunma teknolojileri.",
    vendors: [
      {
        slug: "surf-security",
        name: "SURF Security",
        logo: "/partners/surf.png",
        summary:
          "Web erişimini, uzaktan çalışmayı ve üretken yapay zeka kullanımını uç noktada güvence altına alan Zero Trust kurumsal tarayıcı.",
        overview: [
          "SURF Security, Chromium tabanlı bir Zero Trust kurumsal tarayıcı ile Chrome ve Edge'e aynı kontrolleri getiren bir tarayıcı uzantısı sunar.",
          "Platform, üretken yapay zeka kullanımını, web tehditlerini ve uzaktan erişimi tek bir kontrol noktasından güvence altına almak için Zero Trust kontrollerini uç noktada uygular.",
        ],
        portfolio: [
          "SURF Full Browser (Zero Trust kurumsal tarayıcı)",
          "SURF Extension (Chrome/Edge)",
          "Güvenli Agentic AI",
          "Shadow AI Extension",
        ],
        supportedSolutions: ["Zero Trust", "Ağ Güvenliği"],
        integrations: [
          "SURF'ün Zero Trust kurumsal tarayıcısını Mellivor'un Ağ ve Çevre Güvenliği teknoloji kategorisine ekler.",
        ],
      },
      {
        slug: "cyberserval",
        name: "CyberServal",
        logo: "/partners/cyberserval.svg",
        logoOnDark: true,
        summary:
          "Ağ güvenliği, veri güvenliği ve AI destekli güvenlik ürünleri sunan yapay zeka destekli siber güvenlik şirketi.",
        overview: [
          "CyberServal, Ağ Güvenliği, Veri Güvenliği ve AI İnovasyonu olmak üzere üç ana eksen etrafında düzenlenmiş siber güvenlik ürünleri sunar.",
          "Ağ Güvenliği hattı; Ağ Tespit ve Müdahale (NDR), bir Web Uygulama Güvenlik Duvarı (WAF), Bulut İş Yükü Koruma Platformu (CWPP) ve Dinamik Tehdit Aldatması'nı içerirken, Veri Güvenliği hattı Veri Tespit ve Müdahale (DDR), Ağ ve E-posta Veri Kaybı Önleme ile Veritabanı Güvenlik Denetimi'ni içerir.",
        ],
        portfolio: [
          "Ağ Tespit ve Müdahale (NDR)",
          "Veri Tespit ve Müdahale (DDR)",
          "Veri Kaybı Önleme (ağ ve e-posta)",
          "Web Uygulama Güvenlik Duvarı (WAF)",
        ],
        supportedSolutions: ["Ağ Güvenliği", "Veri Güvenliği"],
        integrations: [
          "CyberServal'ın ağ ve veri güvenliği ürünlerini Mellivor'un Ağ ve Çevre Güvenliği teknoloji kategorisine ekler.",
        ],
      },
    ],
  },
  {
    icon: Sparkles,
    name: "AI Security",
    description: "Mellivor ekosistemindeki yapay zeka ve üretken yapay zeka platformları ve hizmetleri.",
    vendors: [
      {
        slug: "metalore",
        name: "Metalore",
        logo: "/partners/metalore.png",
        summary:
          "LLM destekli iş platformları ve tahmine dayalı analitik sunan üretken yapay zeka ve veri mühendisliği danışmanlığı.",
        overview: [
          "Metalore, kurumsal dijital dönüşüm için üretken yapay zeka ve veri mühendisliğine odaklanan, Türkiye merkezli bir danışmanlık ve yazılım şirketidir.",
          "GPTHouse platformu; veri platformu danışmanlığı, üretken BI ve tahmine dayalı analitiğin yanı sıra LLM ve RAG destekli akıllı ajan çözümleri sunar.",
        ],
        portfolio: [
          "GPTHouse (üretken yapay zeka platformu)",
          "LLM ve RAG tabanlı ajan çözümleri",
          "Veri platformu danışmanlığı",
          "Tahmine dayalı analitik ve modelleme",
        ],
        supportedSolutions: ["AI Security"],
        integrations: [
          "Metalore'un üretken yapay zeka ve veri platformunu Mellivor'un AI Security teknoloji kategorisine ekler.",
        ],
      },
    ],
  },
  {
    icon: Webhook,
    name: "API Security",
    description: "API keşfi, testi ve çalışma zamanı koruma teknolojileri.",
    vendors: [
      {
        slug: "wallarm",
        name: "Wallarm",
        logo: "/partners/wallarm.svg",
        summary:
          "REST, GraphQL ve diğer API protokollerini kapsayan bulut tabanlı Web Uygulama ve API Koruması (WAAP) platformu.",
        overview: [
          "Wallarm; bulut, Kubernetes ve API ağ geçidi ortamlarında uygulamaları ve API'leri koruyan bulut tabanlı bir WAAP (Web Uygulama ve API Koruması) platformu sunar.",
          "Platform, OWASP Top 10 ve API'ye özel tehditleri kapsamak için derin paket incelemesi yapar ve REST, GraphQL ve diğer API protokollerini destekler.",
        ],
        portfolio: [
          "Web Uygulama ve API Koruması (WAAP)",
          "API keşfi ve envanteri",
          "OWASP Top 10 kapsamı",
          "Kubernetes ve API ağ geçidi entegrasyonu",
        ],
        supportedSolutions: ["API Security", "Web Uygulama Güvenliği"],
        integrations: [
          "Wallarm'ın WAAP platformunu Mellivor'un API Security teknoloji kategorisine ekler.",
        ],
      },
    ],
  },
  {
    icon: ScanSearch,
    name: "Saldırı Yüzeyi Yönetimi (ASM)",
    description: "Dış saldırı yüzeyi keşfi, izleme ve maruziyet değerlendirme teknolojileri.",
    vendors: [
      {
        slug: "outpost24",
        name: "Outpost24",
        logo: "/partners/outpost24.png",
        summary:
          "İnternete açık varlıkların sürekli keşfini, izlenmesini ve risk değerlendirmesini sağlayan Dış Saldırı Yüzeyi Yönetimi platformu.",
        overview: [
          "Outpost24, bir kurumun internete açık varlıklarını ve güvenlik açıklarını sürekli olarak keşfeden, izleyen ve değerlendiren bir Dış Saldırı Yüzeyi Yönetimi (EASM) platformu sunar.",
          "Outpost24 Exposure Management Platform, bunu EASM'yi, güvenlik açığı yönetimini ve uygulama güvenliğini birleştiren modüler bir çerçeveye genişletir.",
        ],
        portfolio: [
          "Dış Saldırı Yüzeyi Yönetimi (EASM)",
          "Exposure Management Platform",
          "CompassDRP (EASM + tehdit istihbaratı)",
          "CyberFlex (ASM + PTaaS)",
        ],
        supportedSolutions: ["Saldırı Yüzeyi Yönetimi", "Maruziyet Yönetimi (CTEM)"],
        integrations: [
          "Outpost24'ün saldırı yüzeyi yönetimi platformunu Mellivor'un Saldırı Yüzeyi Yönetimi teknoloji kategorisine ekler.",
        ],
      },
    ],
  },
  {
    icon: Ghost,
    name: "Deception (Aldatma Teknolojisi)",
    description: "Saldırganları imzalar yerine tuzaklarla tespit eden siber aldatma platformları.",
    vendors: [
      {
        slug: "acalvio",
        name: "Acalvio",
        logo: "/partners/acalvio.svg",
        summary:
          "İhlallerin ve içeriden gelen tehditlerin erken ve doğru şekilde tespitini sağlayan yapay zeka destekli siber aldatma platformu.",
        overview: [
          "Acalvio, ShadowPlex platformu kendi patentli Deception 2.0 teknolojisi üzerine kurulu bir siber aldatma teknolojisi tedarikçisidir.",
          "ShadowPlex; tehdit istihbaratı sağlamak için önceden kurulmuş SIEM entegrasyonuyla birlikte şirket içi, özel bulut ve genel bulut ortamlarında aldatma tuzakları ve honeytoken'lar dağıtır.",
        ],
        portfolio: [
          "ShadowPlex Distributed Deception Platform",
          "ShadowPlex Cloud Security (IAM ve bulut yerli aldatma)",
          "ShadowPlex Targeted Threat Intel",
          "SIEM entegrasyonu",
        ],
        supportedSolutions: ["Deception (Aldatma Teknolojisi)"],
        integrations: [
          "Acalvio'nun aldatma platformunu Mellivor'un Deception (Aldatma Teknolojisi) kategorisine ekler.",
        ],
      },
    ],
  },
];

/**
 * Turkish genitive suffix for each vendor name, keyed by the vendor's
 * exact `name` string. Turkish vowel harmony on loanwords follows
 * pronunciation, not spelling, so this can't be derived from the name
 * algorithmically — it's a lookup rather than a rule. Used wherever a
 * vendor name needs a possessive/genitive suffix (e.g. "Nanitor'un",
 * not the vowel-harmony-incorrect "Nanitor'in").
 */
export const trVendorPossessiveSuffix: Record<string, string> = {
  Nanitor: "'un",
  "Aikido Security": "'nin",
  TransferChain: "'in",
  Securden: "'in",
  Gatewatcher: "'ın",
  Labyrinth: "'in",
  Cybereason: "'ın",
  Soteryan: "'ın",
  "SURF Security": "'nin",
  CyberServal: "'ın",
  Metalore: "'un",
  Wallarm: "'ın",
  Outpost24: "'ün",
  Acalvio: "'nun",
};

export function getTrVendorBySlug(
  slug: string
): { vendor: (typeof trTechnologyCategories)[number]["vendors"][number]; category: TechnologyCategory } | undefined {
  for (const category of trTechnologyCategories) {
    const vendor = category.vendors.find((v) => v.slug === slug);
    if (vendor) return { vendor, category };
  }
  return undefined;
}
