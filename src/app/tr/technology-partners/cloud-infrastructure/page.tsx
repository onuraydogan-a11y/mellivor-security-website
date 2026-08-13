import { TechCategoryTemplate, getTechCategoryMetadata } from "@/components/templates/TechCategoryTemplate";

export const metadata = getTechCategoryMetadata("Bulut ve Altyapı", "tr");

export default function CloudInfrastructurePageTR() {
  return <TechCategoryTemplate categoryName="Bulut ve Altyapı" locale="tr" />;
}
