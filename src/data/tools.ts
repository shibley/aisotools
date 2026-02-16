import { toolsBatch1 } from "./tools-batch1";
import { toolsBatch2 } from "./tools-batch2";
import { toolsBatch3 } from "./tools-batch3";
import { toolsBatch4 } from "./tools-batch4";

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
    alternatives: ["claude", "gemini", "perplexity"],
    addedDate: "2026-02-14",
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
    alternatives: ["chatgpt", "gemini", "perplexity"],
    addedDate: "2026-02-14",
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
    alternatives: ["github-copilot", "windsurf", "supermaven"],
    addedDate: "2026-02-14",
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
  },
  ...toolsBatch1,
  ...toolsBatch2,
  ...toolsBatch3,
  ...toolsBatch4,
];
