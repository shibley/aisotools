import { tools } from "@/data/tools";
import { categories } from "@/data/categories";
import { getAllComparisonPairs } from "@/lib/comparisons";
import { getToolsWithAlternatives } from "@/lib/alternatives";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://aisotools.com";
  const now = new Date().toISOString();

  const staticPages = [
    { url: base, lastModified: now, changeFrequency: "daily" as const, priority: 1 },
    { url: `${base}/compare`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${base}/alternatives`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/submit`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${base}/advertise`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/pricing/tools`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
  ];

  // Standalone comparison pages (not generated dynamically)
  const standaloneComparisons = [
    { url: `${base}/chatgpt-vs-gemini`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/chatgpt-vs-claude`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/midjourney-vs-dall-e`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/cursor-vs-github-copilot`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/grok-vs-chatgpt`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/deepseek-vs-chatgpt`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/copilot-vs-chatgpt`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/perplexity-vs-chatgpt`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/grok-vs-chatgpt-vs-gemini`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${base}/grammarly-vs-quillbot`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/midjourney-vs-runway`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/midjourney-vs-stable-diffusion`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/jasper-vs-copyai`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/claude-vs-gemini`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/cursor-vs-windsurf`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/sora-vs-runway`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/kling-vs-runway`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/github-copilot-vs-claude-code`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/flux-vs-midjourney`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/deepseek-vs-claude`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/claude-code-vs-cursor`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/perplexity-vs-gemini`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/v0-vs-lovable`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/bolt-vs-lovable`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/bolt-vs-v0`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/synthesia-vs-heygen`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/sora-vs-kling`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/notebooklm-vs-chatgpt`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    // Standalone alternatives pages
    { url: `${base}/chatgpt-alternatives`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/midjourney-alternatives`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/canva-alternatives`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${base}/copilot-alternatives`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${base}/dall-e-alternatives`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${base}/elevenlabs-alternatives`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${base}/github-copilot-alternatives`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${base}/grammarly-alternatives`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${base}/hugging-face-alternatives`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${base}/jasper-alternatives`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${base}/notion-ai-alternatives`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${base}/perplexity-alternatives`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${base}/replicate-alternatives`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${base}/runway-alternatives`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${base}/synthesia-alternatives`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${base}/copyai-alternatives`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${base}/writesonic-alternatives`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${base}/quillbot-alternatives`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${base}/wordtune-alternatives`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.85 },
    // Standalone pricing pages
    { url: `${base}/chatgpt-plus-pricing`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/midjourney-pricing`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/jasper-ai-pricing`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${base}/notion-ai-pricing`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${base}/copyai-pricing`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${base}/grammarly-pricing`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${base}/synthesia-pricing`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${base}/runway-ml-pricing`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${base}/elevenlabs-pricing`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${base}/perplexity-pro-pricing`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.85 },
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

  const alternativesPages = getToolsWithAlternatives().map((tool) => ({
    url: `${base}/alternatives/${tool.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [...staticPages, ...standaloneComparisons, ...categoryPages, ...toolPages, ...pricingPages, ...comparisonPages, ...alternativesPages];
}
