import { TechCategoryTemplate, getTechCategoryMetadata } from "@/components/templates/TechCategoryTemplate";

export const metadata = getTechCategoryMetadata("Network & Perimeter");

export default function NetworkPerimeterPage() {
  return <TechCategoryTemplate categoryName="Network & Perimeter" />;
}
