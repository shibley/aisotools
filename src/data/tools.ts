import { toolsBatch1 } from "./tools-batch1";
import { toolsBatch2 } from "./tools-batch2";
import { toolsBatch3 } from "./tools-batch3";
import { toolsBatch4 } from "./tools-batch4";
import { toolsBatch5 } from "./tools-batch5";
import { toolsBatch6 } from "./tools-batch6";
import { toolsBatch7 } from "./tools-batch7";
import { toolsBatch8 } from "./tools-batch8";
import { toolsBatch9 } from "./tools-batch9";
import { toolsBatch10 } from "./tools-batch10";
import { toolsBatch11 } from "./tools-batch11";
import { toolsBatch12 } from "./tools-batch12";
import { toolsBatch13 } from "./tools-batch13";
import { toolsBatch14 } from "./tools-batch14";
import { toolsBatch15 } from "./tools-batch15";
import { toolsBatch16 } from "./tools-batch16";
import { toolsBatch17 } from "./tools-batch17";
import { toolsBatch18 } from "./tools-batch18";
import { toolsBatch19 } from "./tools-batch19";
import { toolsBatch20 } from "./tools-batch20";
import { toolsBatch21 } from "./tools-batch21";
import { toolsBatch22 } from "./tools-batch22";
import { toolsBatch23 } from "./tools-batch23";
import { toolsBatch25 } from "./tools-batch25";
import { toolsBatch26 } from "./tools-batch26";
import { toolsBatch27 } from "./tools-batch27";
import { toolsBatch28 } from "./tools-batch28";
import { toolsBatch29 } from "./tools-batch29";
import { toolsBatch30 } from "./tools-batch30";
import { toolsBatch31 } from "./tools-batch31";
import { toolsBatch32 } from "./tools-batch32";
import { getAffiliateUrl } from "./affiliate-links";
import { toolUseCaseScenarios } from "./use-case-enrichments";

export interface Tool {
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  url: string;
  category: string;
  subcategory: string;
  tags: string[];
  pricing: "free" | "freemium" | "paid" | "open-source";
  pricingDetails?: string;
  featured: boolean;
  sponsored: boolean;
  logoUrl?: string;
  screenshotUrl?: string;
  features: string[];
  alternatives?: string[]; // slugs of alternative tools
  launchDate?: string;
  addedDate: string;
  rating?: number; // 1-5
  reviewCount?: number;
  pricingTiers?: { name: string; price: string; features: string[] }[];
  lastVerified?: string;
  websiteStatus?: "active" | "dead" | "redirect";
  affiliateUrl?: string; // Affiliate/referral tracking URL (use instead of url for CTAs)
  pros?: string[]; // Key advantages / strengths
  cons?: string[]; // Limitations / drawbacks
  bestFor?: string[]; // Who benefits most from this tool
  useCaseScenarios?: { title: string; description: string }[]; // Deeper real-world use-case scenarios
}

// Seed data — initial tools to launch with
export const tools: Tool[] = [
  {
    name: "ChatGPT",
    slug: "chatgpt",
    description: "OpenAI's conversational AI assistant powered by GPT-4. ChatGPT can help with writing, coding, analysis, math, creative projects, and more. Available as a web app, mobile app, and API.",
    shortDescription: "OpenAI's conversational AI assistant powered by GPT-4",
    url: "https://chat.openai.com",
    category: "chatbots",
    subcategory: "General Chat",
    tags: ["chatbot", "gpt-4", "openai", "conversational", "writing", "coding"],
    pricing: "freemium",
    pricingDetails: "Free tier available. Plus $20/mo, Team $25/user/mo, Enterprise custom",
    featured: true,
    sponsored: false,
    features: ["Natural language conversation", "Code generation", "Image generation (DALL-E)", "File analysis", "Web browsing", "Custom GPTs"],
    alternatives: ["claude", "gemini", "perplexity", "grok", "deepseek"],
    addedDate: "2026-02-14",
    rating: 4.7,
    reviewCount: 2847,
    pros: ["Largest ecosystem of plugins and integrations", "Strong code generation with GPT-4o", "DALL-E image generation built-in", "Massive free tier capability", "Custom GPT builder for specialized workflows"],
    cons: ["Usage limits on free tier", "Can hallucinate facts confidently", "Memory limited across sessions", "No source citations by default"],
    bestFor: ["General-purpose AI assistance", "Developers and programmers", "Content creators and marketers", "Students and researchers"],
  },
  {
    name: "Claude",
    slug: "claude",
    description: "Anthropic's AI assistant known for nuanced, thoughtful responses and strong reasoning. Claude excels at analysis, writing, coding, and handling complex instructions with careful attention to detail.",
    shortDescription: "Anthropic's thoughtful AI assistant with strong reasoning",
    url: "https://claude.ai",
    category: "chatbots",
    subcategory: "General Chat",
    tags: ["chatbot", "anthropic", "reasoning", "writing", "coding", "analysis"],
    pricing: "freemium",
    pricingDetails: "Free tier. Pro $20/mo, Team $25/user/mo, Enterprise custom",
    featured: true,
    sponsored: false,
    features: ["200K+ token context", "Document analysis", "Code generation", "Vision/image understanding", "Artifacts", "Projects"],
    alternatives: ["chatgpt", "gemini", "perplexity", "grok", "deepseek"],
    addedDate: "2026-02-14",
    rating: 4.8,
    reviewCount: 1923,
    pros: ["Longest context window (200K tokens)", "Best for nuanced writing and analysis", "More careful and honest about uncertainty", "Strong at following complex multi-step instructions", "Projects feature for persistent context"],
    cons: ["Fewer integrations than ChatGPT", "No built-in image generation", "Rate limits can be frustrating on free tier", "Less plugin/tool ecosystem"],
    bestFor: ["Long document analysis", "Writers who want quality over speed", "Legal and compliance teams", "Anyone needing careful, precise reasoning"],
  },
  {
    name: "Midjourney",
    slug: "midjourney",
    description: "Leading AI image generation tool known for stunning, artistic outputs. Midjourney creates photorealistic and artistic images from text prompts via Discord or web interface.",
    shortDescription: "AI image generation with stunning artistic quality",
    url: "https://midjourney.com",
    category: "image-generation",
    subcategory: "Art Generation",
    tags: ["image generation", "art", "creative", "design", "text-to-image"],
    pricing: "paid",
    pricingDetails: "Basic $10/mo, Standard $30/mo, Pro $60/mo, Mega $120/mo",
    featured: true,
    sponsored: false,
    features: ["Text-to-image", "Image variations", "Upscaling", "Style control", "Web editor", "Describe feature"],
    alternatives: ["dall-e", "stable-diffusion", "leonardo-ai"],
    addedDate: "2026-02-14",
    rating: 4.6,
    reviewCount: 1654,
    pros: ["Best aesthetic quality of any AI image tool", "Highly stylizable with detailed prompting", "Active community and shared prompts", "New web interface (no Discord required)", "Consistent brand-safe outputs"],
    cons: ["No free tier", "Requires prompt engineering to get best results", "Limited control over exact compositions", "Cannot generate text in images reliably"],
    bestFor: ["Designers and illustrators", "Marketing teams creating visual assets", "Artists exploring AI-assisted creation", "Social media content creators"],
  },
  {
    name: "Cursor",
    slug: "cursor",
    description: "AI-first code editor built on VS Code. Cursor integrates powerful AI models directly into the development workflow for code generation, editing, debugging, and codebase understanding.",
    shortDescription: "AI-first code editor with powerful inline generation",
    url: "https://cursor.com",
    category: "coding",
    subcategory: "Code Generation",
    tags: ["coding", "ide", "code editor", "ai coding", "developer tools"],
    pricing: "freemium",
    pricingDetails: "Free tier. Pro $20/mo, Business $40/user/mo",
    featured: true,
    sponsored: false,
    features: ["AI code generation", "Codebase understanding", "Multi-file editing", "Chat with codebase", "Tab completion", "Bug detection"],
    alternatives: ["github-copilot", "windsurf", "claude-code", "cline", "trae"],
    addedDate: "2026-02-14",
    rating: 4.8,
    reviewCount: 1203,
    pros: ["Best-in-class codebase awareness", "Multi-file edits in one prompt", "Built on VS Code (familiar UX)", "Excellent tab completion (Cursor Tab)", "Works with any language or framework"],
    cons: ["Monthly subscription required for full power", "Can burn through fast requests on complex tasks", "Occasionally over-edits when asked for targeted changes", "Privacy mode required for sensitive code"],
    bestFor: ["Full-stack developers", "Teams building production software", "Developers working with large codebases", "Anyone transitioning from VS Code"],
  },
  {
    name: "Perplexity",
    slug: "perplexity",
    description: "AI-powered search engine that provides direct answers with cited sources. Perplexity combines LLM reasoning with real-time web search for research and fact-finding.",
    shortDescription: "AI search engine with cited, real-time answers",
    url: "https://perplexity.ai",
    category: "search",
    subcategory: "AI Search",
    tags: ["search", "research", "citations", "knowledge", "web search"],
    pricing: "freemium",
    pricingDetails: "Free tier. Pro $20/mo with unlimited Pro searches",
    featured: true,
    sponsored: false,
    features: ["Real-time web search", "Source citations", "Follow-up questions", "Collections", "File upload", "API access"],
    alternatives: ["chatgpt", "you-com", "phind"],
    addedDate: "2026-02-14",
    rating: 4.5,
    reviewCount: 987,
    pros: ["Every answer is sourced with clickable citations", "Real-time web data (not a training cutoff)", "Great for quick fact-checking", "Generous free tier", "Collections for organized research projects"],
    cons: ["Depth of reasoning less than Claude or GPT-4", "Sources can occasionally be low-quality", "Not ideal for creative tasks", "Pro required for image generation"],
    bestFor: ["Researchers and journalists", "Students writing papers", "Anyone who needs verified, sourced answers", "Replacing traditional Google searches"],
  },
  ...toolsBatch1,
  ...toolsBatch2,
  ...toolsBatch3,
  ...toolsBatch4,
  ...toolsBatch5,
  ...toolsBatch6,
  ...toolsBatch7,
  ...toolsBatch8,
  ...toolsBatch9,
  ...toolsBatch10,
  ...toolsBatch11,
  ...toolsBatch12,
  ...toolsBatch13,
  ...toolsBatch14,
  ...toolsBatch15,
  ...toolsBatch16,
  ...toolsBatch17,
  ...toolsBatch18,
  ...toolsBatch19,
  ...toolsBatch20,
  ...toolsBatch21,
  ...toolsBatch22,
  ...toolsBatch23,
  ...toolsBatch25,
  ...toolsBatch26,
  ...toolsBatch27,
  ...toolsBatch28,
  ...toolsBatch29,
  ...toolsBatch30,
  ...toolsBatch31,
  ...toolsBatch32,
].map((tool) => {
  // Apply centralized affiliate links (won't override manually set ones)
  const t = tool as Tool;
  let result = t;

  // Apply use-case scenario enrichments for high-traffic tools
  const useCaseScenarios = toolUseCaseScenarios[t.slug];
  if (useCaseScenarios && !t.useCaseScenarios) {
    result = { ...result, useCaseScenarios };
  }

  if (!result.affiliateUrl) {
    const affiliateUrl = getAffiliateUrl(result.slug);
    if (affiliateUrl) {
      return { ...result, affiliateUrl };
    }
  }
  return result;
});
