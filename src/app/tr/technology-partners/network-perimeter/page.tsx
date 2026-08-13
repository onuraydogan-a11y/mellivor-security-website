import { TechCategoryTemplate, getTechCategoryMetadata } from "@/components/templates/TechCategoryTemplate";

export const metadata = getTechCategoryMetadata("Ağ ve Çevre Güvenliği", "tr");

export default function NetworkPerimeterPageTR() {
  return <TechCategoryTemplate categoryName="Ağ ve Çevre Güvenliği" locale="tr" />;
}
