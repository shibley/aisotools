/**
 * tools-batch-enrichments.ts
 * Applies use-case scenario enrichments to existing high-traffic tools.
 * Batch 28 — Apr 8, 2026
 * Tools enriched: chatgpt, claude, midjourney, cursor, perplexity,
 *   github-copilot, notion-ai, jasper, elevenlabs, runway, synthesia,
 *   descript, heygen, stable-diffusion, otter-ai, langchain, figma,
 *   zapier, figma-ai, fireflies-ai
 */

import { Tool } from "./tools";
import { toolUseCaseScenarios } from "./use-case-enrichments";

/**
 * Apply use-case scenario enrichments to a list of tools.
 * Merges useCaseScenarios into tools that have matching slugs.
 */
export function applyUseCaseEnrichments(tools: Tool[]): Tool[] {
  return tools.map((tool) => {
    const scenarios = toolUseCaseScenarios[tool.slug];
    if (scenarios && !tool.useCaseScenarios) {
      return { ...tool, useCaseScenarios: scenarios };
    }
    return tool;
  });
}
