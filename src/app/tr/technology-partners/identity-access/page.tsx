import { TechCategoryTemplate, getTechCategoryMetadata } from "@/components/templates/TechCategoryTemplate";

export const metadata = getTechCategoryMetadata("Kimlik ve Erişim", "tr");

export default function IdentityAccessPageTR() {
  return <TechCategoryTemplate categoryName="Kimlik ve Erişim" locale="tr" />;
}
