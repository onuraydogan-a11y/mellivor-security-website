import { SolutionTemplate } from "@/components/templates/SolutionTemplate";
import { trSolutionContent } from "@/lib/i18n/tr-solutions-content";
import { buildMetadata } from "@/lib/seo";

const content = trSolutionContent["siem"];

export const metadata = buildMetadata({
  title: content.title,
  description: content.summary,
  path: "/tr/solutions/siem",
});

export default function SiemPageTR() {
  return (
    <SolutionTemplate
      content={content}
      locale="tr"
      requestDemoHref="/tr/request-demo"
      resourcesHref="/tr/resources"
    />
  );
}
