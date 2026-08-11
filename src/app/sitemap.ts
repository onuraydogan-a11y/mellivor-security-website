import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { mainNav } from "@/lib/navigation";
import { solutionContent } from "@/lib/solutions-content";
import { technologyCategories } from "@/lib/technology-partners";
import { CATEGORY_SLUGS } from "@/components/templates/TechCategoryTemplate";

/**
 * Bespoke pages with no shared data array to derive them from — every
 * other route below is generated from the same structured content
 * (navigation.ts, solutions-content.ts, technology-partners.ts) that
 * already drives the site, so the sitemap can't drift out of sync
 * with what actually exists.
 */
const STATIC_PAGES = [
  "/",
  "/about",
  "/careers",
  "/contact",
  "/leadership",
  "/partners",
  "/press",
  "/platform",
  "/platform/mellivor-one",
  "/platform/behind24",
  "/platform/ai-platform",
  "/platform/overview",
  "/platform/integrations",
  "/platform/deployment-models",
  "/resources",
  "/services",
  "/solutions",
  "/technology-partners",
  "/technology-partners/become-a-partner",
  "/technology-partners/vendors",
  "/technology-partners/integrations",
  "/technology-partners/featured",
  "/request-demo",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const solutionPaths = Object.keys(solutionContent).map((slug) => `/solutions/${slug}`);

  const servicesNav = mainNav.find((item) => item.label === "Services");
  const servicePaths = servicesNav?.columns?.flatMap((column) => column.links.map((link) => link.href)) ?? [];

  const resourcesNav = mainNav.find((item) => item.label === "Resources");
  const resourcePaths = resourcesNav?.columns?.[0]?.links.map((link) => link.href) ?? [];

  const techCategoryPaths = Object.values(CATEGORY_SLUGS).map(
    (slug) => `/technology-partners/${slug}`
  );

  // Empty today (no vendors exist yet) — included so the sitemap picks up
  // real vendor pages automatically once technology-partners.ts is populated,
  // without ever listing a vendor that doesn't exist.
  const vendorPaths = technologyCategories.flatMap((category) =>
    category.vendors.map((vendor) => `/technology-partners/${vendor.slug}`)
  );

  const allPaths = [
    ...STATIC_PAGES,
    ...solutionPaths,
    ...servicePaths,
    ...resourcePaths,
    ...techCategoryPaths,
    ...vendorPaths,
  ];

  return allPaths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));
}
