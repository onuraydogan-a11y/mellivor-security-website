import { TechCategoryTemplate, getTechCategoryMetadata } from "@/components/templates/TechCategoryTemplate";

export const metadata = getTechCategoryMetadata("Tespit ve Müdahale", "tr");

export default function DetectionResponsePageTR() {
  return <TechCategoryTemplate categoryName="Tespit ve Müdahale" locale="tr" />;
}
