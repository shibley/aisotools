import { Tool } from "./tools";

export const toolsBatch19: Tool[] = [
  // ============================================
  // TAAFT GAP CLOSER — Batch 19
  // PearAI, SearchGPT + enrichment sprint tools
  // ============================================
  {
    name: "PearAI",
    slug: "pearai",
    description: "Open-source AI code editor forked from VSCode with integrated AI chat, inline editing, and multi-model support. PearAI bundles Claude, GPT-4, and open-source models into a familiar VS Code interface with context-aware code generation, refactoring, and debugging. Free to use with bring-your-own API keys or their hosted credits system.",
    shortDescription: "Open-source AI code editor built on VS Code with multi-model support",
    url: "https://trypear.ai",
    category: "coding",
    subcategory: "Code Generation",
    tags: ["code editor", "open-source", "ai coding", "vscode", "code generation", "developer tools"],
    pricing: "freemium",
    pricingDetails: "Free with own API keys. Pro $15/mo with bundled credits",
    featured: false,
    sponsored: false,
    features: ["VS Code-based editor", "Multi-model support (Claude, GPT-4, Llama)", "Inline code editing", "AI chat sidebar", "Context-aware completions", "Open-source codebase"],
    alternatives: ["cursor", "windsurf", "github-copilot", "codeium"],
    addedDate: "2026-04-07",
    rating: 4.1,
    reviewCount: 312,
    pros: ["Fully open-source — inspect and modify everything", "Bring-your-own API key keeps costs transparent", "Familiar VS Code UX with zero learning curve", "Multi-model flexibility (switch between Claude, GPT-4, local models)"],
    cons: ["Smaller community than Cursor or Copilot", "Extension ecosystem less mature than mainstream editors", "Hosted credit pricing less competitive than Windsurf", "Some features lag behind Cursor's agent mode"],
    bestFor: ["Developers who prefer open-source tooling", "Teams wanting API key cost transparency", "VS Code power users wanting native AI integration", "Privacy-conscious devs who want to audit their tools"],
  },
  {
    name: "SearchGPT",
    slug: "searchgpt",
    description: "OpenAI's AI-powered search experience integrated into ChatGPT that combines real-time web search with conversational AI. SearchGPT provides direct answers with inline citations, follow-up questions, and visual results — aiming to replace traditional search engines with a conversational interface backed by GPT-4.",
    shortDescription: "OpenAI's AI search engine with real-time web results and citations",
    url: "https://chatgpt.com/search",
    category: "search",
    subcategory: "AI Search",
    tags: ["search engine", "ai search", "web search", "openai", "citations", "research"],
    pricing: "freemium",
    pricingDetails: "Available in ChatGPT Free (limited), Plus $20/mo, Pro $200/mo",
    featured: false,
    sponsored: false,
    features: ["Real-time web search", "Inline source citations", "Conversational follow-ups", "Visual search results", "News and shopping integration", "GPT-4 powered answers"],
    alternatives: ["perplexity", "genspark", "you-com", "brave-search"],
    addedDate: "2026-04-07",
    rating: 4.3,
    reviewCount: 1523,
    pros: ["Seamless integration with ChatGPT ecosystem", "Strong citation quality with clickable sources", "Conversational follow-up queries feel natural", "Free tier available for basic searches"],
    cons: ["Less transparent about source ranking than Perplexity", "Requires ChatGPT account (no anonymous search)", "Search quality inconsistent for niche queries", "No standalone search page — embedded in ChatGPT"],
    bestFor: ["ChatGPT Plus/Pro subscribers wanting search", "Users who prefer conversational research over link lists", "Content researchers needing cited answers", "Anyone already in the OpenAI ecosystem"],
  },
];
