import type { MetadataRoute } from "next";
import { products, site, updates } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/products",
    "/our-story",
    "/updates",
    "/contact",
    "/privacy",
    "/cookies",
    "/terms",
    ...products.map((product) => `/products/${product.slug}`),
    ...updates.map((update) => `/updates/${update.slug}`),
  ];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/products") ? 0.8 : 0.6,
  }));
}
