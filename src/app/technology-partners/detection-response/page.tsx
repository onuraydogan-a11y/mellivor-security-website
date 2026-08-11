import { TechCategoryTemplate, getTechCategoryMetadata } from "@/components/templates/TechCategoryTemplate";

export const metadata = getTechCategoryMetadata("Detection & Response");

export default function DetectionResponsePage() {
  return <TechCategoryTemplate categoryName="Detection & Response" />;
}
