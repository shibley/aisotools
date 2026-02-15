import { tools } from "@/data/tools";
import { categories } from "@/data/categories";
import type { MetadataRoute } from "next";

const comparisons = [
  ["chatgpt", "claude"],
  ["midjourney", "dall-e-3"],
  ["cursor", "github-copilot"],
  ["runway", "pika"],
  ["jasper", "copy-ai"],
  ["elevenlabs", "murf-ai"],
  ["notion-ai", "taskade"],
  ["gemini", "chatgpt"],
  ["stable-diffusion", "leonardo-ai"],
  ["surfer-seo", "semrush-ai"],
  ["perplexity", "you-com"],
  ["synthesia", "heygen"],
  ["suno", "udio"],
  ["figma-ai", "framer-ai"],
  ["make-com", "zapier-ai"],
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://aisotools.com";
  const now = new Date().toISOString();

  const staticPages = [
    { url: base, lastModified: now, changeFrequency: "daily" as const, priority: 1 },
    { url: `${base}/compare`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${base}/submit`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
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

  const comparisonPages = comparisons.map(([a, b]) => ({
    url: `${base}/compare/${a}-vs-${b}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...categoryPages, ...toolPages, ...comparisonPages];
}
