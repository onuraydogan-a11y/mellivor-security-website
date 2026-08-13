import { LayoutGrid, Radar, BrainCircuit } from "lucide-react";
import { FeatureSection } from "@/components/ui/FeatureSection";
import { MellivorOneVisual, Behind24Visual, AIPlatformVisual } from "@/components/ui/ProductVisuals";
import type { Locale } from "@/lib/i18n/locale";

const STRINGS = {
  en: {
    mellivorOneTitle: "The control plane for everything Mellivor",
    mellivorOneDescription: "Mellivor One is the unified command center for your security program — bringing platform data, workflows, and reporting into a single place your team actually wants to use.",
    mellivorOneFeatures: [
      "Unified dashboard across detection, response, and risk data",
      "Single pane of glass for Behind24 and Mellivor AI Kernel findings",
      "Role-based views for SOC analysts, IT, and executives",
      "Centralized case management and audit trail",
    ],
    behind24Title: "Always-on monitoring, detection, and response",
    behind24Description: "Behind24 watches your environment continuously, correlating signal across endpoints, network, cloud, and identity to catch what point tools miss.",
    behind24Features: [
      "24/7 monitoring across your technology stack",
      "Correlated detections, not isolated alerts",
      "Guided and automated response playbooks",
      "Backed by Mellivor's managed security team",
    ],
    aiKernelTitle: "The intelligence layer behind every product",
    aiKernelDescription: "The Mellivor AI Kernel prioritizes signal, reduces noise, and gives analysts context — so time goes to real risk, not investigation busywork.",
    aiKernelFeatures: [
      "Machine learning models trained on real detection data",
      "Automated triage and alert prioritization",
      "Natural-language summaries for faster investigation",
      "Continuously retrained as new threats emerge",
    ],
  },
  tr: {
    mellivorOneTitle: "Her şey için Mellivor kontrol düzlemi",
    mellivorOneDescription: "Mellivor One, güvenlik programınız için birleşik komuta merkezidir — platform verilerini, iş akışlarını ve raporlamayı ekibinizin gerçekten kullanmak isteyeceği tek bir yerde toplar.",
    mellivorOneFeatures: [
      "Tespit, müdahale ve risk verisi genelinde birleşik pano",
      "Behind24 ve Mellivor AI Kernel bulguları için tek bir görünüm",
      "SOC analistleri, BT ve yöneticiler için role özel görünümler",
      "Merkezi vaka yönetimi ve denetim izi",
    ],
    behind24Title: "Sürekli izleme, tespit ve müdahale",
    behind24Description: "Behind24, nokta araçların kaçırdığını yakalamak için uç noktalar, ağ, bulut ve kimlik genelindeki sinyali ilişkilendirerek ortamınızı sürekli izler.",
    behind24Features: [
      "Teknoloji yığınınız genelinde 7/24 izleme",
      "İzole uyarılar değil, ilişkilendirilmiş tespitler",
      "Yönlendirilen ve otomatikleştirilen müdahale playbook'ları",
      "Mellivor'un yönetilen güvenlik ekibi tarafından destekleniyor",
    ],
    aiKernelTitle: "Her ürünün arkasındaki zeka katmanı",
    aiKernelDescription: "Mellivor AI Kernel, sinyali önceliklendirir, gürültüyü azaltır ve analistlere bağlam sağlar — böylece zaman, araştırma angaryasına değil gerçek riske gider.",
    aiKernelFeatures: [
      "Gerçek tespit verisiyle eğitilmiş makine öğrenimi modelleri",
      "Otomatik triyaj ve uyarı önceliklendirmesi",
      "Daha hızlı soruşturma için doğal dil özetleri",
      "Yeni tehditler ortaya çıktıkça sürekli olarak yeniden eğitiliyor",
    ],
  },
};

export function Products({ locale = "en" }: { locale?: Locale }) {
  const strings = STRINGS[locale];
  return (
    <>
      <FeatureSection
        icon={LayoutGrid}
        logo="/brand/logo-transparent.svg"
        eyebrow="Mellivor One"
        title={strings.mellivorOneTitle}
        description={strings.mellivorOneDescription}
        features={strings.mellivorOneFeatures}
        visual={<MellivorOneVisual />}
        className="bg-muted/40"
      />

      <FeatureSection
        icon={Radar}
        logo="/products/behind24-logo.png"
        eyebrow="Behind24"
        title={strings.behind24Title}
        description={strings.behind24Description}
        features={strings.behind24Features}
        visual={<Behind24Visual />}
        reverse
      />

      <FeatureSection
        icon={BrainCircuit}
        logo="/brand/logo-transparent.svg"
        eyebrow="Mellivor AI Kernel"
        title={strings.aiKernelTitle}
        description={strings.aiKernelDescription}
        features={strings.aiKernelFeatures}
        visual={<AIPlatformVisual />}
        className="bg-muted/40"
      />
    </>
  );
}
