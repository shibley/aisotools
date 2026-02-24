import { tools } from "@/data/tools";
import { categories } from "@/data/categories";
import { getAllComparisonPairs } from "@/lib/comparisons";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://aisotools.com";
  const now = new Date().toISOString();

  const staticPages = [
    { url: base, lastModified: now, changeFrequency: "daily" as const, priority: 1 },
    { url: `${base}/compare`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${base}/submit`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/pricing/tools`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
  ];

  const toolPages = tools.map((tool) => ({
    url: `${base}/tool/${tool.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const categoryPages = categories.map((cat) => ({
    url: `${base}/category/${cat.slug}`,
    lastModified: now,
    changeFrequency: "daily" as const,
    priority: 0.9,
  }));

  const comparisonPages = getAllComparisonPairs().map((pair) => ({
    url: `${base}/compare/${pair.slugA}-vs-${pair.slugB}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  const pricingPages = tools.map((tool) => ({
    url: `${base}/pricing/${tool.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [...staticPages, ...categoryPages, ...toolPages, ...pricingPages, ...comparisonPages];
}
