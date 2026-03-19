#!/usr/bin/env npx tsx
/**
 * AISO Tools - Bulk Import Pipeline
 * 
 * Scrapes AI tool directories, validates URLs, and generates
 * properly formatted Tool entries for batch import.
 * 
 * Sources:
 * 1. There's An AI For That (theresanaiforthat.com)
 * 2. Futurepedia (futurepedia.io)
 * 3. Product Hunt AI section
 * 4. Manual curated lists
 * 
 * Usage:
 *   npx tsx scripts/bulk-import-pipeline.ts --source theresanaiforthat --limit 200
 *   npx tsx scripts/bulk-import-pipeline.ts --source futurepedia --limit 200
 *   npx tsx scripts/bulk-import-pipeline.ts --source curated --file tools-to-add.json
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ============================================
// CATEGORY NORMALIZATION MAP
// ============================================
const CATEGORY_MAP: Record<string, { category: string; subcategory: string }> = {
  // Chatbots & Assistants
  'chatbot': { category: 'chatbots', subcategory: 'General Chat' },
  'ai assistant': { category: 'chatbots', subcategory: 'General Chat' },
  'conversational ai': { category: 'chatbots', subcategory: 'General Chat' },
  'virtual assistant': { category: 'chatbots', subcategory: 'General Chat' },
  'ai chat': { category: 'chatbots', subcategory: 'General Chat' },
  'customer support': { category: 'chatbots', subcategory: 'Customer Support' },
  'customer service': { category: 'chatbots', subcategory: 'Customer Support' },
  
  // Coding & Development
  'code generation': { category: 'coding', subcategory: 'Code Generation' },
  'code assistant': { category: 'coding', subcategory: 'Code Generation' },
  'coding': { category: 'coding', subcategory: 'Code Generation' },
  'developer tools': { category: 'coding', subcategory: 'Developer Tools' },
  'ide': { category: 'coding', subcategory: 'Developer Tools' },
  'code review': { category: 'coding', subcategory: 'Code Review' },
  'testing': { category: 'coding', subcategory: 'Testing' },
  'devops': { category: 'coding', subcategory: 'DevOps' },
  'api': { category: 'coding', subcategory: 'API' },
  'database': { category: 'coding', subcategory: 'Databases' },
  'low-code': { category: 'coding', subcategory: 'Low-Code' },
  'no-code': { category: 'coding', subcategory: 'No-Code' },
  
  // Writing & Content
  'writing': { category: 'writing', subcategory: 'General Writing' },
  'copywriting': { category: 'writing', subcategory: 'Copywriting' },
  'content creation': { category: 'writing', subcategory: 'Content Creation' },
  'blog writing': { category: 'writing', subcategory: 'Blog Writing' },
  'seo': { category: 'writing', subcategory: 'SEO' },
  'ad copy': { category: 'writing', subcategory: 'Ad Copy' },
  'email': { category: 'writing', subcategory: 'Email' },
  'social media': { category: 'writing', subcategory: 'Social Media' },
  'summarization': { category: 'writing', subcategory: 'Summarization' },
  'translation': { category: 'writing', subcategory: 'Translation' },
  'grammar': { category: 'writing', subcategory: 'Grammar' },
  
  // Image & Design
  'image generation': { category: 'image-generation', subcategory: 'Image Generation' },
  'ai art': { category: 'image-generation', subcategory: 'Art Generation' },
  'art generation': { category: 'image-generation', subcategory: 'Art Generation' },
  'photo editing': { category: 'design', subcategory: 'Photo Editing' },
  'design': { category: 'design', subcategory: 'Design' },
  'ui design': { category: 'design', subcategory: 'UI Design' },
  'logo': { category: 'design', subcategory: 'Logo Design' },
  'graphic design': { category: 'design', subcategory: 'Graphic Design' },
  'avatar': { category: 'design', subcategory: 'Avatars' },
  'face swap': { category: 'design', subcategory: 'Face Swap' },
  '3d': { category: '3d', subcategory: '3D Modeling' },
  '3d modeling': { category: '3d', subcategory: '3D Modeling' },
  
  // Video
  'video generation': { category: 'video', subcategory: 'Video Generation' },
  'video editing': { category: 'video', subcategory: 'Video Editing' },
  'video': { category: 'video', subcategory: 'Video Generation' },
  'animation': { category: 'video', subcategory: 'Animation' },
  'screen recording': { category: 'video', subcategory: 'Screen Recording' },
  
  // Audio & Voice
  'text-to-speech': { category: 'audio', subcategory: 'Text-to-Speech' },
  'voice': { category: 'audio', subcategory: 'Voice' },
  'music': { category: 'audio', subcategory: 'Music Generation' },
  'music generation': { category: 'audio', subcategory: 'Music Generation' },
  'audio': { category: 'audio', subcategory: 'Audio' },
  'podcast': { category: 'audio', subcategory: 'Podcast' },
  'speech-to-text': { category: 'audio', subcategory: 'Transcription' },
  'transcription': { category: 'audio', subcategory: 'Transcription' },
  'voice cloning': { category: 'audio', subcategory: 'Voice Cloning' },
  
  // Productivity
  'productivity': { category: 'productivity', subcategory: 'General' },
  'note taking': { category: 'productivity', subcategory: 'Note Taking' },
  'meeting': { category: 'productivity', subcategory: 'Meeting' },
  'scheduling': { category: 'productivity', subcategory: 'Scheduling' },
  'project management': { category: 'productivity', subcategory: 'Project Management' },
  'task management': { category: 'productivity', subcategory: 'Task Management' },
  'automation': { category: 'productivity', subcategory: 'Workflow Automation' },
  'workflow': { category: 'productivity', subcategory: 'Workflow Automation' },
  'spreadsheet': { category: 'productivity', subcategory: 'Spreadsheet' },
  'presentation': { category: 'productivity', subcategory: 'Presentation' },
  'collaboration': { category: 'productivity', subcategory: 'Collaboration' },
  
  // Business
  'business': { category: 'business', subcategory: 'General' },
  'crm': { category: 'business', subcategory: 'CRM' },
  'sales': { category: 'business', subcategory: 'Sales' },
  'marketing': { category: 'business', subcategory: 'Marketing' },
  'hr': { category: 'business', subcategory: 'HR' },
  'legal': { category: 'business', subcategory: 'Legal' },
  'finance': { category: 'business', subcategory: 'Finance' },
  'accounting': { category: 'business', subcategory: 'Accounting' },
  'analytics': { category: 'business', subcategory: 'Analytics' },
  'ecommerce': { category: 'business', subcategory: 'Ecommerce' },
  'real estate': { category: 'business', subcategory: 'Real Estate' },
  
  // Data & Research
  'data': { category: 'data', subcategory: 'Data Analysis' },
  'data analysis': { category: 'data', subcategory: 'Data Analysis' },
  'data science': { category: 'data', subcategory: 'Data Science' },
  'machine learning': { category: 'data', subcategory: 'Machine Learning' },
  'research': { category: 'research', subcategory: 'Research' },
  'search': { category: 'search', subcategory: 'AI Search' },
  'ai search': { category: 'search', subcategory: 'AI Search' },
  
  // Education
  'education': { category: 'education', subcategory: 'Education' },
  'tutoring': { category: 'education', subcategory: 'Tutoring' },
  'language learning': { category: 'education', subcategory: 'Language Learning' },
  'study': { category: 'education', subcategory: 'Study Tools' },
  
  // Security
  'security': { category: 'security', subcategory: 'Security' },
  'cybersecurity': { category: 'security', subcategory: 'Cybersecurity' },
  
  // Healthcare
  'healthcare': { category: 'healthcare', subcategory: 'Healthcare' },
  'medical': { category: 'healthcare', subcategory: 'Medical' },
  'mental health': { category: 'healthcare', subcategory: 'Mental Health' },
  
  // Agents
  'ai agents': { category: 'automation', subcategory: 'AI Agents' },
  'autonomous agents': { category: 'automation', subcategory: 'AI Agents' },
};

// ============================================
// EXISTING TOOLS (loaded to avoid duplicates)
// ============================================
function loadExistingSlugs(): Set<string> {
  const slugs = new Set<string>();
  const dataDir = path.join(__dirname, '..', 'src', 'data');
  
  const files = fs.readdirSync(dataDir).filter(f => f.startsWith('tools') && f.endsWith('.ts'));
  for (const file of files) {
    const content = fs.readFileSync(path.join(dataDir, file), 'utf-8');
    const matches = content.matchAll(/slug:\s*"([^"]+)"/g);
    for (const match of matches) {
      slugs.add(match[1]);
    }
  }
  
  console.log(`Loaded ${slugs.size} existing tool slugs`);
  return slugs;
}

// ============================================
// SLUG GENERATOR
// ============================================
function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

// ============================================
// URL VALIDATOR
// ============================================
async function validateUrl(url: string): Promise<{ valid: boolean; status?: number; redirectUrl?: string }> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    const response = await fetch(url, {
      method: 'HEAD',
      redirect: 'follow',
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
      },
    });
    clearTimeout(timeout);
    return {
      valid: response.ok,
      status: response.status,
      redirectUrl: response.url !== url ? response.url : undefined,
    };
  } catch {
    return { valid: false };
  }
}

// ============================================
// TOOL INTERFACE (matching the project's Tool type)
// ============================================
interface ToolEntry {
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  url: string;
  category: string;
  subcategory: string;
  tags: string[];
  pricing: 'free' | 'freemium' | 'paid' | 'open-source';
  pricingDetails?: string;
  featured: boolean;
  sponsored: boolean;
  features: string[];
  alternatives?: string[];
  addedDate: string;
}

// ============================================
// CURATED TOOL LISTS BY CATEGORY
// ============================================
// These are real AI tools that exist and are active as of March 2026.
// Each batch focuses on a category with high search volume.

function getCuratedTools(): ToolEntry[] {
  const today = new Date().toISOString().split('T')[0];
  
  return [
    // ============================================
    // CODING & DEVELOPER TOOLS (HIGH SV)
    // ============================================
    {
      name: "Bolt.new",
      slug: "bolt-new",
      description: "AI-powered full-stack web development platform that lets you prompt, run, edit, and deploy full-stack applications directly in the browser. Built by StackBlitz, Bolt.new uses WebContainers to run Node.js directly in your browser, enabling instant app creation without local setup.",
      shortDescription: "AI full-stack web dev — prompt, run, and deploy apps in the browser",
      url: "https://bolt.new",
      category: "coding",
      subcategory: "Code Generation",
      tags: ["full-stack", "web development", "code generation", "deployment", "webcontainer", "no-setup"],
      pricing: "freemium",
      pricingDetails: "Free tier available. Pro $20/mo (unlimited projects), Team $30/user/mo",
      featured: true,
      sponsored: false,
      features: ["Full-stack app generation from prompts", "In-browser Node.js runtime", "One-click deployment to Netlify", "Built-in terminal and package manager", "Real-time code editing with AI assistance", "Supabase and database integration"],
      alternatives: ["replit", "cursor", "v0", "lovable"],
      addedDate: today,
    },
    {
      name: "Lovable",
      slug: "lovable",
      description: "AI-powered software development platform (formerly GPT Engineer) that transforms ideas into fully functional web applications through natural language. Lovable generates clean, production-ready React code with real-time preview, integrated deployment, and collaboration features.",
      shortDescription: "AI app builder that turns prompts into production-ready React apps",
      url: "https://lovable.dev",
      category: "coding",
      subcategory: "Code Generation",
      tags: ["app builder", "react", "code generation", "no-code", "web development", "deployment"],
      pricing: "freemium",
      pricingDetails: "Free tier (limited). Starter $20/mo, Launch $50/mo, Scale $100/mo",
      featured: true,
      sponsored: false,
      features: ["Natural language to React app", "Real-time preview", "Supabase integration", "GitHub sync", "Custom domain deployment", "Team collaboration"],
      alternatives: ["bolt-new", "v0", "replit", "cursor"],
      addedDate: today,
    },
    {
      name: "v0",
      slug: "v0",
      description: "Vercel's AI-powered generative UI tool that creates React components and full pages from text prompts and images. v0 generates production-ready code using shadcn/ui, Tailwind CSS, and Next.js, with instant deployment to Vercel.",
      shortDescription: "Vercel's AI UI generator — text/image to React components",
      url: "https://v0.dev",
      category: "coding",
      subcategory: "Code Generation",
      tags: ["ui generation", "react", "tailwind", "nextjs", "vercel", "frontend"],
      pricing: "freemium",
      pricingDetails: "Free tier (10 generations/mo). Premium $20/mo (unlimited)",
      featured: true,
      sponsored: false,
      features: ["Text-to-UI generation", "Image-to-code conversion", "shadcn/ui components", "Tailwind CSS styling", "One-click Vercel deploy", "Code export to Next.js"],
      alternatives: ["bolt-new", "lovable", "cursor", "replit"],
      addedDate: today,
    },
    {
      name: "Windsurf",
      slug: "windsurf",
      description: "AI-powered IDE by Codeium that combines copilot assistance with agentic workflows. Windsurf (formerly Codeium Editor) offers deep codebase understanding, multi-file editing, and autonomous task completion while keeping developers in control.",
      shortDescription: "AI IDE with copilot + agentic coding flows by Codeium",
      url: "https://windsurf.com",
      category: "coding",
      subcategory: "Developer Tools",
      tags: ["ide", "ai coding", "copilot", "agentic", "code completion", "refactoring"],
      pricing: "freemium",
      pricingDetails: "Free tier. Pro $15/mo, Enterprise custom",
      featured: true,
      sponsored: false,
      features: ["Cascade agentic flow", "Multi-file editing", "Deep codebase awareness", "Terminal command suggestions", "In-editor previews", "VS Code extension compatibility"],
      alternatives: ["cursor", "github-copilot", "codeium", "tabnine"],
      addedDate: today,
    },
    {
      name: "Cline",
      slug: "cline",
      description: "Autonomous AI coding agent that lives in your VS Code editor. Cline can create and edit files, run terminal commands, use the browser, and coordinate multi-step development tasks with human-in-the-loop approval at each step.",
      shortDescription: "Autonomous AI coding agent in VS Code with human-in-the-loop",
      url: "https://cline.bot",
      category: "coding",
      subcategory: "AI Agents",
      tags: ["ai agent", "vs code", "autonomous coding", "code generation", "terminal", "browser automation"],
      pricing: "open-source",
      pricingDetails: "Free and open-source. Bring your own API key (OpenAI, Anthropic, etc.)",
      featured: false,
      sponsored: false,
      features: ["Autonomous file creation and editing", "Terminal command execution", "Browser interaction", "Human-in-the-loop approvals", "Multi-step task planning", "Support for multiple AI providers"],
      alternatives: ["cursor", "github-copilot", "aider", "continue-dev"],
      addedDate: today,
    },
    {
      name: "Aider",
      slug: "aider",
      description: "AI pair programming tool for the terminal. Aider lets you collaborate with LLMs to edit code in your local git repository. It works with multiple AI models and understands your entire codebase through repo-mapping.",
      shortDescription: "AI pair programmer for your terminal — edit code with LLMs",
      url: "https://aider.chat",
      category: "coding",
      subcategory: "Code Generation",
      tags: ["pair programming", "terminal", "git", "code editing", "open-source", "cli"],
      pricing: "open-source",
      pricingDetails: "Free and open-source. Bring your own API key",
      featured: false,
      sponsored: false,
      features: ["Terminal-based AI coding", "Git integration", "Repo-wide code understanding", "Multi-model support", "Linting and testing integration", "Voice coding mode"],
      alternatives: ["cursor", "cline", "github-copilot", "continue-dev"],
      addedDate: today,
    },
    {
      name: "Continue",
      slug: "continue-dev",
      description: "Open-source AI code assistant for VS Code and JetBrains. Continue connects any AI model to your IDE for code completion, chat, and editing. Supports local models through Ollama and commercial APIs.",
      shortDescription: "Open-source AI code assistant — connect any model to your IDE",
      url: "https://continue.dev",
      category: "coding",
      subcategory: "Code Generation",
      tags: ["ide extension", "vs code", "jetbrains", "open-source", "code completion", "local models"],
      pricing: "open-source",
      pricingDetails: "Free and open-source. Use any model (local or API)",
      featured: false,
      sponsored: false,
      features: ["Tab autocomplete", "AI chat in IDE", "Multi-file editing", "Custom model support", "Context providers", "Local model support via Ollama"],
      alternatives: ["cursor", "cline", "github-copilot", "codeium"],
      addedDate: today,
    },
    {
      name: "Pieces for Developers",
      slug: "pieces",
      description: "AI-powered developer productivity tool that captures, enriches, and reuses code snippets, screenshots, and development context. Pieces uses on-device AI to maintain a personal knowledge base of your development workflow.",
      shortDescription: "AI developer productivity — capture, enrich, and reuse code context",
      url: "https://pieces.app",
      category: "coding",
      subcategory: "Developer Tools",
      tags: ["snippets", "productivity", "knowledge base", "context", "on-device ai", "workflow"],
      pricing: "freemium",
      pricingDetails: "Free for individuals. Pro $10/mo, Team $20/user/mo",
      featured: false,
      sponsored: false,
      features: ["Smart snippet management", "On-device AI processing", "Context-aware suggestions", "IDE integrations (VS Code, JetBrains)", "Screenshot-to-code", "Workflow activity tracking"],
      alternatives: ["github-copilot", "codeium", "tabnine"],
      addedDate: today,
    },
    {
      name: "Sourcegraph Cody",
      slug: "sourcegraph-cody",
      description: "AI coding assistant by Sourcegraph that understands your entire codebase. Cody uses Sourcegraph's code graph to provide context-aware code generation, explanations, and refactoring across repositories of any size.",
      shortDescription: "AI coding assistant with full codebase understanding by Sourcegraph",
      url: "https://sourcegraph.com/cody",
      category: "coding",
      subcategory: "Code Generation",
      tags: ["code assistant", "codebase search", "code generation", "refactoring", "enterprise", "context-aware"],
      pricing: "freemium",
      pricingDetails: "Free tier. Pro $9/mo, Enterprise $19/user/mo",
      featured: false,
      sponsored: false,
      features: ["Full codebase context", "Multi-repo understanding", "Code generation and completion", "Inline code explanations", "Smart refactoring", "Enterprise code search"],
      alternatives: ["cursor", "github-copilot", "codeium", "tabnine"],
      addedDate: today,
    },
    {
      name: "Codex CLI",
      slug: "codex-cli",
      description: "OpenAI's open-source coding agent that runs in your terminal. Codex CLI takes natural language instructions and translates them into shell commands, code edits, and multi-step development workflows with sandboxed execution.",
      shortDescription: "OpenAI's terminal-based coding agent — natural language to code",
      url: "https://github.com/openai/codex",
      category: "coding",
      subcategory: "AI Agents",
      tags: ["terminal", "coding agent", "openai", "open-source", "shell", "automation"],
      pricing: "open-source",
      pricingDetails: "Free and open-source. Requires OpenAI API key",
      featured: false,
      sponsored: false,
      features: ["Natural language to code", "Sandboxed command execution", "Multi-file editing", "Git-aware workflows", "Approval-based execution", "Context from codebase"],
      alternatives: ["aider", "cline", "claude-code"],
      addedDate: today,
    },
    {
      name: "Claude Code",
      slug: "claude-code",
      description: "Anthropic's official agentic coding tool that lives in your terminal. Claude Code understands your entire codebase, can edit files, run commands, and handle complex multi-step development tasks with human oversight.",
      shortDescription: "Anthropic's terminal-based agentic coding tool",
      url: "https://docs.anthropic.com/en/docs/claude-code",
      category: "coding",
      subcategory: "AI Agents",
      tags: ["terminal", "coding agent", "anthropic", "claude", "agentic", "multi-file"],
      pricing: "paid",
      pricingDetails: "Requires Anthropic API key. Pay per token usage",
      featured: false,
      sponsored: false,
      features: ["Full codebase understanding", "Multi-file editing", "Terminal command execution", "Git integration", "Extended thinking for complex tasks", "MCP tool integration"],
      alternatives: ["codex-cli", "aider", "cline", "cursor"],
      addedDate: today,
    },
    {
      name: "Amazon Q Developer",
      slug: "amazon-q-developer",
      description: "AWS's AI-powered development assistant that helps with coding, testing, debugging, and AWS service integration. Amazon Q Developer offers code generation, transformation, and security scanning with deep AWS ecosystem knowledge.",
      shortDescription: "AWS AI coding assistant with deep cloud service integration",
      url: "https://aws.amazon.com/q/developer/",
      category: "coding",
      subcategory: "Developer Tools",
      tags: ["aws", "cloud", "code generation", "security scanning", "ide", "enterprise"],
      pricing: "freemium",
      pricingDetails: "Free tier. Pro $19/user/mo (part of AWS)",
      featured: false,
      sponsored: false,
      features: ["Code generation and completion", "AWS service integration", "Security vulnerability scanning", "Code transformation (Java upgrades)", "IDE plugins (VS Code, JetBrains)", "CLI integration"],
      alternatives: ["github-copilot", "cursor", "codeium", "tabnine"],
      addedDate: today,
    },

    // ============================================
    // DESIGN & IMAGE TOOLS
    // ============================================
    {
      name: "Ideogram",
      slug: "ideogram",
      description: "AI image generation platform known for exceptional text rendering in images. Ideogram excels at creating logos, typography, posters, and photorealistic images with accurate text, outperforming competitors in text-to-image accuracy.",
      shortDescription: "AI image generator with best-in-class text rendering",
      url: "https://ideogram.ai",
      category: "image-generation",
      subcategory: "Image Generation",
      tags: ["image generation", "text rendering", "logo", "typography", "photorealistic", "poster"],
      pricing: "freemium",
      pricingDetails: "Free tier (5 prompts/day). Basic $8/mo, Plus $20/mo, Pro $60/mo",
      featured: true,
      sponsored: false,
      features: ["Superior text rendering in images", "Logo and typography generation", "Photorealistic image creation", "Style consistency controls", "Magic prompt enhancement", "Canvas editor"],
      alternatives: ["midjourney", "dall-e-3", "stable-diffusion", "flux"],
      addedDate: today,
    },
    {
      name: "Flux",
      slug: "flux",
      description: "Black Forest Labs' open-source image generation model that rivals Midjourney in quality. Flux comes in multiple variants (Schnell, Dev, Pro) offering a range from fast free generation to high-quality professional output.",
      shortDescription: "Open-source image generation rivaling Midjourney — by Black Forest Labs",
      url: "https://blackforestlabs.ai",
      category: "image-generation",
      subcategory: "Image Generation",
      tags: ["image generation", "open-source", "photorealistic", "text-to-image", "api", "high-quality"],
      pricing: "freemium",
      pricingDetails: "Flux Schnell free. Dev free for non-commercial. Pro via API ($0.05/image)",
      featured: true,
      sponsored: false,
      features: ["Multiple model variants", "Open-source (Schnell, Dev)", "Professional quality output", "API access", "Fine-tuning support", "Fast inference"],
      alternatives: ["midjourney", "dall-e-3", "stable-diffusion", "ideogram"],
      addedDate: today,
    },
    {
      name: "Krea AI",
      slug: "krea-ai",
      description: "Real-time AI image generation and enhancement platform. Krea offers live canvas creation where images update as you draw or type, plus upscaling, video generation, and AI-powered design tools for creative professionals.",
      shortDescription: "Real-time AI image generation — images update as you draw and type",
      url: "https://krea.ai",
      category: "image-generation",
      subcategory: "Image Generation",
      tags: ["real-time generation", "image enhancement", "upscaling", "canvas", "design", "creative"],
      pricing: "freemium",
      pricingDetails: "Free tier. Pro $24/mo, Growth $48/mo",
      featured: false,
      sponsored: false,
      features: ["Real-time image generation", "Live canvas drawing", "AI upscaling (up to 16x)", "Video generation", "Pattern and logo design", "Style transfer"],
      alternatives: ["midjourney", "dall-e-3", "ideogram", "leonardo-ai"],
      addedDate: today,
    },
    {
      name: "Leonardo AI",
      slug: "leonardo-ai",
      description: "AI-powered creative suite for generating and editing images, textures, and 3D assets. Leonardo offers fine-tuned models, real-time canvas generation, and production-ready outputs for game developers, designers, and content creators.",
      shortDescription: "AI creative suite for images, textures, and 3D assets",
      url: "https://leonardo.ai",
      category: "image-generation",
      subcategory: "Image Generation",
      tags: ["image generation", "game assets", "textures", "3d", "creative suite", "fine-tuning"],
      pricing: "freemium",
      pricingDetails: "Free tier (150 tokens/day). Apprentice $12/mo, Artisan $30/mo, Maestro $60/mo",
      featured: false,
      sponsored: false,
      features: ["Image generation with multiple models", "Real-time canvas", "3D texture generation", "Motion generation", "Custom model training", "Universal upscaler"],
      alternatives: ["midjourney", "dall-e-3", "stable-diffusion", "flux"],
      addedDate: today,
    },
    {
      name: "Fal.ai",
      slug: "fal-ai",
      description: "Serverless inference platform for AI image and video generation. Fal.ai provides fast API access to popular models like Flux, Stable Diffusion, and SDXL with optimized infrastructure for real-time applications.",
      shortDescription: "Serverless AI inference — fast API for image/video generation models",
      url: "https://fal.ai",
      category: "image-generation",
      subcategory: "API",
      tags: ["api", "inference", "serverless", "flux", "stable diffusion", "developer"],
      pricing: "paid",
      pricingDetails: "Pay per inference. Flux Schnell $0.025/image, Pro $0.05/image",
      featured: false,
      sponsored: false,
      features: ["Sub-second inference", "Multiple model marketplace", "Serverless scaling", "Real-time streaming", "LoRA support", "Developer-friendly SDK"],
      alternatives: ["replicate", "stability-ai", "together-ai"],
      addedDate: today,
    },
    {
      name: "Photoroom",
      slug: "photoroom",
      description: "AI photo editing platform specializing in product photography and background removal. Photoroom enables e-commerce sellers and marketers to create professional product images instantly with AI-powered backgrounds, shadows, and compositions.",
      shortDescription: "AI product photography — instant background removal and pro edits",
      url: "https://www.photoroom.com",
      category: "design",
      subcategory: "Photo Editing",
      tags: ["photo editing", "background removal", "product photography", "ecommerce", "marketing", "batch editing"],
      pricing: "freemium",
      pricingDetails: "Free tier. Pro $9.99/mo, Business custom",
      featured: false,
      sponsored: false,
      features: ["Instant background removal", "AI-generated backgrounds", "Batch editing", "Product photo templates", "Shadow and reflection generation", "API for integrations"],
      alternatives: ["remove-bg", "canva", "pixlr"],
      addedDate: today,
    },
    {
      name: "Recraft",
      slug: "recraft",
      description: "AI design tool for creating and editing vector and raster graphics. Recraft generates illustrations, icons, and 3D images with precise style control and brand consistency, used by designers for professional creative work.",
      shortDescription: "AI design tool for vectors, icons, and illustrations with style control",
      url: "https://www.recraft.ai",
      category: "design",
      subcategory: "Design",
      tags: ["vector graphics", "illustration", "icons", "design", "brand consistency", "style control"],
      pricing: "freemium",
      pricingDetails: "Free tier. Pro $25/mo, Business $50/mo",
      featured: false,
      sponsored: false,
      features: ["Vector illustration generation", "Icon set creation", "3D image generation", "Brand style consistency", "SVG export", "Color palette control"],
      alternatives: ["midjourney", "ideogram", "canva", "figma"],
      addedDate: today,
    },

    // ============================================
    // WRITING & CONTENT TOOLS
    // ============================================
    {
      name: "Writesonic",
      slug: "writesonic",
      description: "AI writing platform for creating marketing copy, blog posts, and social media content. Writesonic offers Chatsonic (ChatGPT alternative with real-time web access), Botsonic (custom chatbots), and various content generation templates.",
      shortDescription: "AI writing platform for marketing, blogs, and social media content",
      url: "https://writesonic.com",
      category: "writing",
      subcategory: "Content Creation",
      tags: ["writing", "marketing copy", "blog", "social media", "chatbot", "seo content"],
      pricing: "freemium",
      pricingDetails: "Free trial. Individual $16/mo, Team $13/user/mo, Enterprise custom",
      featured: false,
      sponsored: false,
      features: ["100+ content templates", "Chatsonic AI chat", "Botsonic custom chatbots", "Brand voice training", "SEO optimization", "Multi-language support"],
      alternatives: ["jasper", "copy-ai", "rytr", "anyword"],
      addedDate: today,
    },
    {
      name: "Rytr",
      slug: "rytr",
      description: "AI writing assistant that generates high-quality content in seconds. Rytr supports 40+ use cases including blog posts, emails, ad copy, and social media, with built-in plagiarism checking and SEO analysis.",
      shortDescription: "AI writing assistant — 40+ use cases with built-in SEO and plagiarism check",
      url: "https://rytr.me",
      category: "writing",
      subcategory: "Content Creation",
      tags: ["writing", "content creation", "blog", "email", "ad copy", "plagiarism check"],
      pricing: "freemium",
      pricingDetails: "Free tier (10K chars/mo). Saver $9/mo, Unlimited $29/mo",
      featured: false,
      sponsored: false,
      features: ["40+ content use cases", "20+ tone options", "Built-in plagiarism checker", "SEO analyzer", "30+ languages", "Chrome extension"],
      alternatives: ["jasper", "copy-ai", "writesonic", "anyword"],
      addedDate: today,
    },
    {
      name: "Anyword",
      slug: "anyword",
      description: "AI copywriting platform with predictive performance scoring. Anyword generates marketing copy and predicts how well it will perform before publishing, using proprietary data from billions of data points across channels.",
      shortDescription: "AI copywriting with predictive performance scoring",
      url: "https://anyword.com",
      category: "writing",
      subcategory: "Copywriting",
      tags: ["copywriting", "predictive scoring", "marketing", "a/b testing", "brand voice", "performance"],
      pricing: "paid",
      pricingDetails: "Starter $49/mo, Data-Driven $99/mo, Business $499/mo, Enterprise custom",
      featured: false,
      sponsored: false,
      features: ["Predictive performance score", "Brand voice training", "Multi-channel copy generation", "A/B copy testing", "Website and landing page copy", "Data-driven optimization"],
      alternatives: ["jasper", "copy-ai", "writesonic", "rytr"],
      addedDate: today,
    },
    {
      name: "Surfer SEO",
      slug: "surfer-seo",
      description: "AI-powered SEO content optimization platform that analyzes top-ranking pages and provides real-time content scoring. Surfer SEO helps writers create optimized articles with keyword suggestions, content structure, and NLP-based recommendations.",
      shortDescription: "AI SEO content optimizer — real-time scoring and keyword guidance",
      url: "https://surferseo.com",
      category: "writing",
      subcategory: "SEO",
      tags: ["seo", "content optimization", "keyword research", "content scoring", "nlp", "serp analysis"],
      pricing: "paid",
      pricingDetails: "Essential $89/mo, Scale $129/mo, Scale AI $219/mo, Enterprise custom",
      featured: false,
      sponsored: false,
      features: ["Content Editor with real-time scoring", "SERP Analyzer", "Keyword Research", "Content Audit", "AI content generation", "Multi-language optimization"],
      alternatives: ["clearscope", "frase", "marketmuse", "semrush"],
      addedDate: today,
    },
    {
      name: "Frase",
      slug: "frase",
      description: "AI content creation and optimization tool for SEO writers. Frase researches, outlines, and helps write content that ranks by analyzing top SERP results and suggesting topics, headings, and keyword coverage in real-time.",
      shortDescription: "AI SEO content tool — research, outline, write, and optimize",
      url: "https://www.frase.io",
      category: "writing",
      subcategory: "SEO",
      tags: ["seo", "content research", "content brief", "optimization", "serp analysis", "outline"],
      pricing: "paid",
      pricingDetails: "Solo $15/mo, Basic $45/mo, Team $115/mo, Enterprise custom",
      featured: false,
      sponsored: false,
      features: ["SERP research and analysis", "AI content briefs", "Content optimization scoring", "Topic and question research", "Content templates", "Google Search Console integration"],
      alternatives: ["surfer-seo", "clearscope", "marketmuse", "semrush"],
      addedDate: today,
    },

    // ============================================
    // VIDEO & MEDIA TOOLS
    // ============================================
    {
      name: "Kling AI",
      slug: "kling-ai",
      description: "AI video generation platform by Kuaishou that creates high-quality videos from text and images. Kling generates up to 3-minute clips with realistic motion, physics, and character consistency at surprisingly affordable prices.",
      shortDescription: "AI video generator — up to 3-min clips with realistic motion",
      url: "https://klingai.com",
      category: "video",
      subcategory: "Video Generation",
      tags: ["video generation", "text-to-video", "image-to-video", "motion", "affordable", "3-minute"],
      pricing: "freemium",
      pricingDetails: "Free tier (daily credits). Standard $6.99/mo, Pro $29.90/mo, Premier $64.90/mo",
      featured: true,
      sponsored: false,
      features: ["Text-to-video generation", "Image-to-video animation", "Up to 3-minute clips", "1080p output", "Motion brush control", "Camera motion presets"],
      alternatives: ["runway", "pika", "sora", "luma-labs"],
      addedDate: today,
    },
    {
      name: "Pika",
      slug: "pika",
      description: "AI video generation platform focused on creative and artistic video creation. Pika offers fast generation times, Pikaffects for adding special effects, and intuitive controls for transforming text, images, and videos into creative content.",
      shortDescription: "AI video creation platform with creative effects and fast generation",
      url: "https://pika.art",
      category: "video",
      subcategory: "Video Generation",
      tags: ["video generation", "creative", "effects", "text-to-video", "fast", "artistic"],
      pricing: "freemium",
      pricingDetails: "Free tier. Standard $10/mo, Pro $35/mo, Unlimited $58/mo",
      featured: false,
      sponsored: false,
      features: ["Text-to-video generation", "Image-to-video", "Pikaffects special effects", "Scene extension", "Lip sync", "Fast generation (30-90 seconds)"],
      alternatives: ["runway", "kling-ai", "sora", "luma-labs"],
      addedDate: today,
    },
    {
      name: "Luma Labs",
      slug: "luma-labs",
      description: "AI video and 3D generation platform featuring Dream Machine and Ray models. Luma creates cinematic-quality videos from text and images, with particular strength in consistent character rendering and camera motion.",
      shortDescription: "AI cinematic video and 3D generation — Dream Machine and Ray models",
      url: "https://lumalabs.ai",
      category: "video",
      subcategory: "Video Generation",
      tags: ["video generation", "3d capture", "cinematic", "nerf", "text-to-video", "camera motion"],
      pricing: "freemium",
      pricingDetails: "Free tier. Standard $9.99/mo, Pro $29.99/mo, Premier $99.99/mo",
      featured: false,
      sponsored: false,
      features: ["Dream Machine text-to-video", "Ray 3 model for cinematics", "3D capture from photos", "Camera motion control", "4K output", "Character consistency"],
      alternatives: ["runway", "pika", "kling-ai", "sora"],
      addedDate: today,
    },
    {
      name: "Captions",
      slug: "captions",
      description: "AI-powered video editing app that automatically adds captions, removes filler words, corrects eye contact, and generates B-roll. Captions is designed for content creators who want professional-looking videos with minimal editing effort.",
      shortDescription: "AI video editor — auto captions, eye contact correction, B-roll",
      url: "https://www.captions.ai",
      category: "video",
      subcategory: "Video Editing",
      tags: ["video editing", "captions", "eye contact", "content creation", "social media", "auto-edit"],
      pricing: "freemium",
      pricingDetails: "Free tier. Pro $12/mo, Business $25/mo",
      featured: false,
      sponsored: false,
      features: ["Auto-generated captions", "Filler word removal", "AI eye contact correction", "AI-generated B-roll", "Noise removal", "Multi-language dubbing"],
      alternatives: ["descript", "opus-clip", "submagic"],
      addedDate: today,
    },
    {
      name: "Opus Clip",
      slug: "opus-clip",
      description: "AI video repurposing tool that transforms long-form content into viral short clips. Opus Clip analyzes podcasts, webinars, and YouTube videos to identify the most engaging moments and creates ready-to-post shorts with captions.",
      shortDescription: "AI video repurposing — turn long videos into viral short clips",
      url: "https://www.opus.pro",
      category: "video",
      subcategory: "Video Editing",
      tags: ["video repurposing", "shorts", "clips", "podcast", "social media", "captions"],
      pricing: "freemium",
      pricingDetails: "Free tier. Starter $19/mo, Growth $49/mo, Pro $99/mo",
      featured: false,
      sponsored: false,
      features: ["AI clip selection from long videos", "Virality scoring", "Auto-generated captions", "Multi-platform formatting", "Face tracking", "Brand templates"],
      alternatives: ["descript", "captions", "vidyo-ai"],
      addedDate: today,
    },

    // ============================================
    // AUDIO & VOICE TOOLS
    // ============================================
    {
      name: "Suno",
      slug: "suno",
      description: "AI music generation platform that creates full songs with vocals, instruments, and production from text prompts. Suno can generate any genre of music in seconds, making it accessible for anyone to create professional-sounding tracks.",
      shortDescription: "AI music generator — create full songs with vocals from text prompts",
      url: "https://suno.com",
      category: "audio",
      subcategory: "Music Generation",
      tags: ["music generation", "vocals", "song creation", "text-to-music", "production", "genre"],
      pricing: "freemium",
      pricingDetails: "Free tier (10 songs/day). Pro $10/mo, Premier $30/mo",
      featured: true,
      sponsored: false,
      features: ["Full song generation", "AI vocals and instruments", "Any genre support", "Lyrics generation", "Song extension", "High-quality audio output"],
      alternatives: ["udio", "aiva", "soundraw", "boomy"],
      addedDate: today,
    },
    {
      name: "Udio",
      slug: "udio",
      description: "AI music generation platform competing with Suno that creates high-fidelity songs from text descriptions. Udio excels at realistic instrument reproduction and complex musical arrangements, with fine-grained control over style and structure.",
      shortDescription: "AI music generator — high-fidelity songs with realistic instruments",
      url: "https://udio.com",
      category: "audio",
      subcategory: "Music Generation",
      tags: ["music generation", "high-fidelity", "text-to-music", "instruments", "vocals", "arrangement"],
      pricing: "freemium",
      pricingDetails: "Free tier. Standard $10/mo, Pro $30/mo",
      featured: false,
      sponsored: false,
      features: ["High-fidelity music generation", "Realistic instrument reproduction", "Lyrics and vocal generation", "Style and genre control", "Song extension and remixing", "Commercial licensing available"],
      alternatives: ["suno", "aiva", "soundraw", "boomy"],
      addedDate: today,
    },
    {
      name: "Cartesia",
      slug: "cartesia",
      description: "Ultra-low-latency text-to-speech API designed for real-time voice agents and conversational AI. Cartesia's Sonic model achieves 90ms latency with natural-sounding voices, making it ideal for phone bots, game NPCs, and interactive applications.",
      shortDescription: "Ultra-low-latency TTS API — 90ms for voice agents and real-time apps",
      url: "https://cartesia.ai",
      category: "audio",
      subcategory: "Text-to-Speech",
      tags: ["text-to-speech", "low-latency", "voice agents", "api", "real-time", "conversational"],
      pricing: "paid",
      pricingDetails: "Starter $5/mo. Growth $49/mo, Scale custom. Pay per character",
      featured: false,
      sponsored: false,
      features: ["90ms latency", "Streaming audio output", "Voice cloning", "Emotion control", "Multi-language support", "WebSocket and REST APIs"],
      alternatives: ["elevenlabs", "play-ht", "openai-tts", "deepgram"],
      addedDate: today,
    },

    // ============================================
    // PRODUCTIVITY & BUSINESS TOOLS
    // ============================================
    {
      name: "Notion AI",
      slug: "notion-ai",
      description: "AI features built into the Notion workspace that help with writing, summarizing, brainstorming, and analyzing content. Notion AI connects to your workspace context to provide relevant suggestions and automate documentation tasks.",
      shortDescription: "AI-powered writing and analysis built into the Notion workspace",
      url: "https://www.notion.so/product/ai",
      category: "productivity",
      subcategory: "Note Taking",
      tags: ["productivity", "note taking", "writing", "summarization", "knowledge base", "workspace"],
      pricing: "paid",
      pricingDetails: "$10/user/mo add-on to any Notion plan",
      featured: false,
      sponsored: false,
      features: ["AI writing assistance", "Document summarization", "Q&A across workspace", "Translation", "Action item extraction", "Brainstorming and ideation"],
      alternatives: ["obsidian", "roam-research", "coda", "clickup"],
      addedDate: today,
    },
    {
      name: "Gamma",
      slug: "gamma",
      description: "AI-powered presentation and document creation platform. Gamma generates beautiful presentations, documents, and web pages from prompts or outlines, with automatic formatting, images, and data visualization — no design skills needed.",
      shortDescription: "AI presentation builder — generate polished decks from prompts",
      url: "https://gamma.app",
      category: "productivity",
      subcategory: "Presentation",
      tags: ["presentation", "slides", "document", "design", "ai generation", "visual"],
      pricing: "freemium",
      pricingDetails: "Free tier. Plus $10/mo, Pro $20/mo",
      featured: false,
      sponsored: false,
      features: ["AI presentation generation", "One-click redesign", "Interactive embeds", "Data visualization", "Custom branding", "PDF and PowerPoint export"],
      alternatives: ["beautiful-ai", "tome", "slidesai"],
      addedDate: today,
    },
    {
      name: "Tome",
      slug: "tome",
      description: "AI-native presentation and storytelling platform that generates entire presentations from prompts. Tome creates visually compelling narratives with AI-generated text, images, and layouts that adapt to your brand and audience.",
      shortDescription: "AI storytelling platform — generate narrative presentations from prompts",
      url: "https://tome.app",
      category: "productivity",
      subcategory: "Presentation",
      tags: ["presentation", "storytelling", "narrative", "ai generation", "visual", "brand"],
      pricing: "freemium",
      pricingDetails: "Free tier. Professional $16/mo, Enterprise custom",
      featured: false,
      sponsored: false,
      features: ["AI presentation generation", "Brand voice and style", "Narrative-first approach", "Dynamic layouts", "Image generation integration", "Shareable web pages"],
      alternatives: ["gamma", "beautiful-ai", "slidesai"],
      addedDate: today,
    },
    {
      name: "Fireflies.ai",
      slug: "fireflies-ai",
      description: "AI meeting assistant that transcribes, summarizes, and analyzes voice conversations. Fireflies works across Zoom, Google Meet, Teams, and more, providing searchable transcripts, action items, and conversation intelligence.",
      shortDescription: "AI meeting transcription and conversation intelligence",
      url: "https://fireflies.ai",
      category: "productivity",
      subcategory: "Meeting",
      tags: ["meeting", "transcription", "summary", "action items", "conversation intelligence", "recording"],
      pricing: "freemium",
      pricingDetails: "Free tier. Pro $18/seat/mo, Business $29/seat/mo, Enterprise custom",
      featured: false,
      sponsored: false,
      features: ["Automatic meeting transcription", "AI-generated summaries", "Action item extraction", "Topic tracking", "CRM integration", "Conversation analytics"],
      alternatives: ["otter-ai", "fathom", "grain", "granola"],
      addedDate: today,
    },
    {
      name: "Fathom",
      slug: "fathom",
      description: "Free AI meeting assistant that records, transcribes, and summarizes Zoom meetings. Fathom provides instant summaries, action items, and highlights without sending a bot to your meeting — it works directly through the Zoom app.",
      shortDescription: "Free AI meeting assistant — records and summarizes Zoom calls bot-free",
      url: "https://fathom.video",
      category: "productivity",
      subcategory: "Meeting",
      tags: ["meeting", "zoom", "transcription", "summary", "free", "no-bot"],
      pricing: "freemium",
      pricingDetails: "Free forever for individuals. Team $32/seat/mo",
      featured: false,
      sponsored: false,
      features: ["Bot-free recording", "Instant meeting summaries", "Action item extraction", "Highlight clips", "CRM sync (HubSpot, Salesforce)", "Free unlimited transcription"],
      alternatives: ["otter-ai", "fireflies-ai", "grain", "granola"],
      addedDate: today,
    },
    {
      name: "Reclaim.ai",
      slug: "reclaim-ai",
      description: "AI-powered calendar and scheduling assistant that automatically finds optimal time slots for tasks, habits, meetings, and breaks. Reclaim uses AI to protect focus time and adapt your schedule dynamically as priorities change.",
      shortDescription: "AI calendar assistant — auto-schedule tasks, habits, and focus time",
      url: "https://reclaim.ai",
      category: "productivity",
      subcategory: "Scheduling",
      tags: ["calendar", "scheduling", "time management", "habits", "focus time", "automation"],
      pricing: "freemium",
      pricingDetails: "Free tier. Starter $8/user/mo, Business $12/user/mo, Enterprise $18/user/mo",
      featured: false,
      sponsored: false,
      features: ["AI task scheduling", "Habit time blocking", "Smart 1:1 meeting scheduling", "Buffer and travel time", "Calendar analytics", "Google Calendar and Slack integration"],
      alternatives: ["motion", "clockwise", "sunsama"],
      addedDate: today,
    },
    {
      name: "Motion",
      slug: "motion",
      description: "AI-powered project management and calendar tool that automatically plans your day, schedules tasks by priority and deadline, and adapts your plan in real-time. Motion combines task management, calendar, and project planning into one AI-optimized workflow.",
      shortDescription: "AI project manager and calendar — auto-plans and schedules your day",
      url: "https://usemotion.com",
      category: "productivity",
      subcategory: "Project Management",
      tags: ["project management", "calendar", "task scheduling", "ai planning", "time management", "automation"],
      pricing: "paid",
      pricingDetails: "Individual $34/mo, Team $12/user/mo",
      featured: false,
      sponsored: false,
      features: ["AI auto-scheduling", "Priority-based task ordering", "Deadline-aware planning", "Project management views", "Meeting scheduling", "Real-time plan adaptation"],
      alternatives: ["reclaim-ai", "clockwise", "sunsama", "clickup"],
      addedDate: today,
    },

    // ============================================
    // SEARCH & RESEARCH TOOLS
    // ============================================
    {
      name: "You.com",
      slug: "you-com",
      description: "AI-powered search engine that provides direct answers with cited sources. You.com combines traditional search with AI chat, offering multiple modes including Research for deep dives, Create for content generation, and Imagine for image creation.",
      shortDescription: "AI search engine with multiple modes — search, research, create, imagine",
      url: "https://you.com",
      category: "search",
      subcategory: "AI Search",
      tags: ["search engine", "ai search", "research", "cited sources", "content creation", "image generation"],
      pricing: "freemium",
      pricingDetails: "Free tier. Pro $15/mo (unlimited AI searches)",
      featured: false,
      sponsored: false,
      features: ["AI-powered search answers", "Source citations", "Research mode for deep dives", "Content creation tools", "Image generation", "Developer API"],
      alternatives: ["perplexity", "google-gemini", "bing-copilot"],
      addedDate: today,
    },
    {
      name: "Elicit",
      slug: "elicit",
      description: "AI research assistant that helps find and analyze academic papers. Elicit searches 200M+ papers, extracts key findings, and synthesizes information to accelerate literature reviews and systematic research workflows.",
      shortDescription: "AI research assistant — find, analyze, and synthesize academic papers",
      url: "https://elicit.com",
      category: "research",
      subcategory: "Academic Research",
      tags: ["research", "academic papers", "literature review", "systematic review", "science", "analysis"],
      pricing: "freemium",
      pricingDetails: "Free tier. Plus $12/mo, Pro custom",
      featured: false,
      sponsored: false,
      features: ["200M+ paper search", "Key finding extraction", "Data table creation", "Synthesis across papers", "Concept mapping", "PDF analysis"],
      alternatives: ["consensus", "semantic-scholar", "scite"],
      addedDate: today,
    },
    {
      name: "Consensus",
      slug: "consensus",
      description: "AI-powered academic search engine that finds and synthesizes answers from scientific research papers. Consensus reads through papers to provide evidence-based answers to questions, with a Copilot feature for detailed research synthesis.",
      shortDescription: "AI academic search — evidence-based answers from scientific papers",
      url: "https://consensus.app",
      category: "research",
      subcategory: "Academic Research",
      tags: ["research", "academic", "scientific papers", "evidence-based", "literature review", "consensus"],
      pricing: "freemium",
      pricingDetails: "Free tier. Premium $11.99/mo, Enterprise custom",
      featured: false,
      sponsored: false,
      features: ["Scientific paper search", "AI-synthesized answers", "Consensus meter", "Copilot for deep research", "Study quality indicators", "Citation export"],
      alternatives: ["elicit", "semantic-scholar", "scite", "perplexity"],
      addedDate: today,
    },

    // ============================================
    // AUTOMATION & AI AGENTS
    // ============================================
    {
      name: "Make",
      slug: "make",
      description: "Visual automation platform (formerly Integromat) that connects apps and automates workflows with a drag-and-drop builder. Make supports 1,800+ app integrations with advanced features like routers, iterators, and error handling.",
      shortDescription: "Visual workflow automation — connect 1,800+ apps with drag-and-drop",
      url: "https://www.make.com",
      category: "automation",
      subcategory: "Workflow Automation",
      tags: ["automation", "workflow", "integration", "no-code", "api", "drag-and-drop"],
      pricing: "freemium",
      pricingDetails: "Free tier (1,000 ops/mo). Core $9/mo, Pro $16/mo, Teams $29/mo, Enterprise custom",
      featured: false,
      sponsored: false,
      features: ["1,800+ app integrations", "Visual scenario builder", "Complex logic (routers, iterators)", "Error handling and retry", "Webhook triggers", "Custom API connections"],
      alternatives: ["zapier", "n8n", "pipedream", "activepieces"],
      addedDate: today,
    },
    {
      name: "n8n",
      slug: "n8n",
      description: "Open-source workflow automation platform that combines visual building with code flexibility. n8n can be self-hosted or used in the cloud, with 400+ integrations and native AI agent capabilities for building complex automation workflows.",
      shortDescription: "Open-source workflow automation with code flexibility and AI agents",
      url: "https://n8n.io",
      category: "automation",
      subcategory: "Workflow Automation",
      tags: ["automation", "workflow", "open-source", "self-hosted", "ai agents", "code"],
      pricing: "freemium",
      pricingDetails: "Free (self-hosted). Cloud: Starter $20/mo, Pro $50/mo, Enterprise custom",
      featured: false,
      sponsored: false,
      features: ["400+ integrations", "Self-hosting option", "Code nodes (JavaScript, Python)", "AI agent building", "Visual workflow editor", "Community templates"],
      alternatives: ["make", "zapier", "pipedream", "activepieces"],
      addedDate: today,
    },
    {
      name: "Activepieces",
      slug: "activepieces",
      description: "Open-source AI automation platform designed as a Zapier alternative. Activepieces offers a visual builder for creating automations with AI capabilities, custom pieces, and the ability to self-host on your own infrastructure.",
      shortDescription: "Open-source AI automation platform — self-hostable Zapier alternative",
      url: "https://www.activepieces.com",
      category: "automation",
      subcategory: "Workflow Automation",
      tags: ["automation", "open-source", "self-hosted", "ai", "workflow", "integration"],
      pricing: "freemium",
      pricingDetails: "Free (self-hosted, 1,000 tasks/mo cloud). Pro $5/mo, Platform $100/mo",
      featured: false,
      sponsored: false,
      features: ["Open-source and self-hostable", "Visual flow builder", "AI pieces (ChatGPT, Claude)", "Custom piece SDK", "Branching and loops", "Webhook triggers"],
      alternatives: ["n8n", "make", "zapier", "pipedream"],
      addedDate: today,
    },
    {
      name: "Relevance AI",
      slug: "relevance-ai",
      description: "No-code AI agent builder that lets teams create and deploy custom AI workers. Relevance AI provides a platform for building AI agents that can use tools, access data, and complete complex tasks autonomously with human oversight.",
      shortDescription: "No-code AI agent builder — create custom AI workers for your team",
      url: "https://relevanceai.com",
      category: "automation",
      subcategory: "AI Agents",
      tags: ["ai agents", "no-code", "automation", "custom agents", "tools", "workflow"],
      pricing: "freemium",
      pricingDetails: "Free tier. Pro $19/mo, Team $99/mo, Enterprise custom",
      featured: false,
      sponsored: false,
      features: ["No-code agent builder", "Custom tool creation", "Multi-step task execution", "Knowledge base integration", "Team collaboration", "API and webhook triggers"],
      alternatives: ["zapier", "make", "langchain"],
      addedDate: today,
    },
    {
      name: "Bland AI",
      slug: "bland-ai",
      description: "AI phone calling platform that handles inbound and outbound calls with human-like conversation. Bland AI enables businesses to automate phone interactions for sales, support, scheduling, and surveys with natural voice agents.",
      shortDescription: "AI phone calling platform — human-like voice agents for sales and support",
      url: "https://www.bland.ai",
      category: "automation",
      subcategory: "AI Agents",
      tags: ["phone calls", "voice agent", "sales", "customer support", "scheduling", "automation"],
      pricing: "paid",
      pricingDetails: "Enterprise starting at $0.09/min. Volume discounts available",
      featured: false,
      sponsored: false,
      features: ["Human-like phone conversations", "Inbound and outbound calls", "Custom voice and personality", "CRM integration", "Call transfer to humans", "Real-time analytics"],
      alternatives: ["retell-ai", "vapi", "air-ai"],
      addedDate: today,
    },
    {
      name: "Vapi",
      slug: "vapi",
      description: "Developer platform for building, testing, and deploying voice AI agents. Vapi provides APIs and SDKs for creating conversational voice agents that can make and receive phone calls with sub-second latency.",
      shortDescription: "Developer platform for building voice AI agents with phone calling",
      url: "https://vapi.ai",
      category: "automation",
      subcategory: "AI Agents",
      tags: ["voice ai", "phone calls", "developer platform", "api", "voice agents", "conversational"],
      pricing: "paid",
      pricingDetails: "Pay per minute ($0.05/min + model costs). Volume discounts",
      featured: false,
      sponsored: false,
      features: ["Voice agent building platform", "Phone call integration", "Sub-second latency", "Multiple LLM support", "Custom tools and functions", "Real-time transcription"],
      alternatives: ["bland-ai", "retell-ai", "air-ai"],
      addedDate: today,
    },

    // ============================================
    // DATA & ANALYTICS TOOLS
    // ============================================
    {
      name: "Julius AI",
      slug: "julius-ai",
      description: "AI data analysis platform that lets you upload spreadsheets, databases, and files for instant analysis and visualization. Julius uses conversational AI to clean, analyze, and create charts from your data without requiring coding skills.",
      shortDescription: "AI data analyst — upload data, get instant analysis and visualizations",
      url: "https://julius.ai",
      category: "data",
      subcategory: "Data Analysis",
      tags: ["data analysis", "visualization", "spreadsheet", "no-code", "charts", "statistics"],
      pricing: "freemium",
      pricingDetails: "Free tier. Essential $20/mo, Pro $40/mo, Enterprise custom",
      featured: false,
      sponsored: false,
      features: ["Natural language data queries", "Automated chart creation", "Statistical analysis", "Data cleaning", "Multiple file format support", "Code generation (Python, R)"],
      alternatives: ["rows", "chat-csv", "obviously-ai"],
      addedDate: today,
    },
    {
      name: "Rows",
      slug: "rows",
      description: "AI-powered spreadsheet with built-in data connectors and AI analyst. Rows combines the familiarity of spreadsheets with AI chat, 50+ data integrations, and automated reporting to help teams analyze and share data faster.",
      shortDescription: "AI spreadsheet with data integrations and built-in AI analyst",
      url: "https://rows.com",
      category: "data",
      subcategory: "Spreadsheet",
      tags: ["spreadsheet", "data analysis", "ai analyst", "integrations", "reporting", "automation"],
      pricing: "freemium",
      pricingDetails: "Free tier. Plus $6.99/mo, Pro $18/mo, Enterprise custom",
      featured: false,
      sponsored: false,
      features: ["AI analyst chat", "50+ data integrations", "Automated dashboards", "Web scraping", "API connections", "Shareable reports"],
      alternatives: ["julius-ai", "google-sheets", "airtable"],
      addedDate: today,
    },

    // ============================================
    // MARKETING & SALES TOOLS
    // ============================================
    {
      name: "Clay",
      slug: "clay",
      description: "AI-powered data enrichment and outbound platform for go-to-market teams. Clay connects to 100+ data sources to build targeted prospect lists, enrich contacts with AI research, and automate personalized outreach at scale.",
      shortDescription: "AI data enrichment and outbound platform for GTM teams",
      url: "https://clay.com",
      category: "business",
      subcategory: "Sales",
      tags: ["data enrichment", "outbound", "sales", "prospecting", "personalization", "gtm"],
      pricing: "paid",
      pricingDetails: "Starter $149/mo, Explorer $349/mo, Pro $800/mo, Enterprise custom",
      featured: false,
      sponsored: false,
      features: ["100+ data enrichment sources", "AI prospect research", "Waterfall enrichment", "Personalized messaging at scale", "CRM integration", "Custom workflow tables"],
      alternatives: ["apollo", "zoominfo", "lusha", "clearbit"],
      addedDate: today,
    },
    {
      name: "Apollo",
      slug: "apollo",
      description: "All-in-one sales intelligence and engagement platform with AI-powered prospecting. Apollo provides a database of 275M+ contacts, email and calling tools, and AI-assisted outreach sequences for B2B sales teams.",
      shortDescription: "AI sales intelligence — 275M+ contacts with engagement tools",
      url: "https://www.apollo.io",
      category: "business",
      subcategory: "Sales",
      tags: ["sales intelligence", "prospecting", "email outreach", "crm", "b2b", "contacts"],
      pricing: "freemium",
      pricingDetails: "Free tier. Basic $49/user/mo, Professional $79/user/mo, Organization $149/user/mo",
      featured: false,
      sponsored: false,
      features: ["275M+ contact database", "AI email sequences", "Built-in dialer", "Intent signals", "Lead scoring", "CRM integration (Salesforce, HubSpot)"],
      alternatives: ["clay", "zoominfo", "lusha", "clearbit"],
      addedDate: today,
    },
    {
      name: "Instantly",
      slug: "instantly",
      description: "AI-powered cold email platform for scaling outbound sales. Instantly offers unlimited email accounts, AI warmup, campaign sequences, and deliverability tools to help agencies and sales teams send personalized cold emails at scale.",
      shortDescription: "AI cold email platform — unlimited accounts, warmup, and deliverability",
      url: "https://instantly.ai",
      category: "business",
      subcategory: "Sales",
      tags: ["cold email", "outbound", "email warmup", "deliverability", "sales", "automation"],
      pricing: "paid",
      pricingDetails: "Growth $30/mo, Hypergrowth $77.6/mo, Light Speed $286.3/mo",
      featured: false,
      sponsored: false,
      features: ["Unlimited email accounts", "AI email warmup", "Smart send scheduling", "A/B testing", "Lead database (Instantly Leads)", "Campaign analytics"],
      alternatives: ["lemlist", "smartlead", "woodpecker"],
      addedDate: today,
    },

    // ============================================
    // EDUCATION & LEARNING TOOLS
    // ============================================
    {
      name: "NotebookLM",
      slug: "notebooklm",
      description: "Google's AI-powered research and note-taking tool that lets you upload sources (PDFs, docs, websites, YouTube) and have AI conversations grounded in your specific materials. Famous for its Audio Overview feature that generates podcast-style discussions.",
      shortDescription: "Google's AI research tool — upload sources, get grounded AI answers",
      url: "https://notebooklm.google.com",
      category: "research",
      subcategory: "Research",
      tags: ["research", "note taking", "google", "pdf analysis", "podcast generation", "grounded ai"],
      pricing: "free",
      pricingDetails: "Free (Google account required). NotebookLM Plus $9.99/mo for teams",
      featured: true,
      sponsored: false,
      features: ["Source-grounded AI chat", "Audio Overview podcast generation", "PDF, doc, website, YouTube import", "Citation tracking", "Shared notebooks", "Multi-source synthesis"],
      alternatives: ["elicit", "consensus", "perplexity"],
      addedDate: today,
    },
    {
      name: "Quizlet Q-Chat",
      slug: "quizlet",
      description: "AI-powered study platform that creates flashcards, practice tests, and personalized study plans. Quizlet's Q-Chat acts as a Socratic tutor, guiding students through material with adaptive questioning and explanations.",
      shortDescription: "AI study platform — flashcards, practice tests, and Socratic tutoring",
      url: "https://quizlet.com",
      category: "education",
      subcategory: "Study Tools",
      tags: ["study", "flashcards", "quiz", "tutoring", "education", "learning"],
      pricing: "freemium",
      pricingDetails: "Free tier. Plus $7.99/mo, Teacher $4/mo",
      featured: false,
      sponsored: false,
      features: ["AI flashcard generation", "Q-Chat Socratic tutor", "Practice tests", "Learn mode", "Spaced repetition", "Study progress tracking"],
      alternatives: ["anki", "brainly", "photomath"],
      addedDate: today,
    },

    // ============================================
    // SECURITY & DEVOPS TOOLS
    // ============================================
    {
      name: "Snyk",
      slug: "snyk",
      description: "Developer-first security platform that uses AI to find and fix vulnerabilities in code, dependencies, containers, and infrastructure as code. Snyk integrates directly into developer workflows with IDE plugins, CI/CD integration, and automatic fix PRs.",
      shortDescription: "AI-powered developer security — find and auto-fix code vulnerabilities",
      url: "https://snyk.io",
      category: "security",
      subcategory: "Application Security",
      tags: ["security", "vulnerability scanning", "dependencies", "containers", "iac", "developer-first"],
      pricing: "freemium",
      pricingDetails: "Free tier (200 tests/mo). Team $25/dev/mo, Enterprise custom",
      featured: false,
      sponsored: false,
      features: ["Code vulnerability scanning", "Open-source dependency checking", "Container image scanning", "IaC security", "Automatic fix PRs", "IDE integration"],
      alternatives: ["sonarqube", "checkmarx", "veracode"],
      addedDate: today,
    },

    // ============================================
    // MISC POPULAR TOOLS
    // ============================================
    {
      name: "Replicate",
      slug: "replicate",
      description: "Platform for running open-source AI models via API. Replicate hosts thousands of models including Flux, Stable Diffusion, Llama, and Whisper, making it easy to run AI models in the cloud without managing infrastructure.",
      shortDescription: "Run open-source AI models via API — thousands of models, no infra",
      url: "https://replicate.com",
      category: "data",
      subcategory: "Machine Learning",
      tags: ["api", "ml models", "inference", "open-source models", "serverless", "developer"],
      pricing: "paid",
      pricingDetails: "Pay per second of compute. Prices vary by model (from $0.00025/sec)",
      featured: false,
      sponsored: false,
      features: ["Thousands of open-source models", "Simple API", "Auto-scaling", "Custom model deployment", "Fine-tuning", "Webhook notifications"],
      alternatives: ["fal-ai", "together-ai", "modal", "hugging-face"],
      addedDate: today,
    },
    {
      name: "Together AI",
      slug: "together-ai",
      description: "Cloud platform for running and fine-tuning open-source AI models. Together AI offers optimized inference for popular models like Llama, Mixtral, and Flux with competitive pricing and high throughput for production workloads.",
      shortDescription: "Cloud platform for open-source AI models — fast inference and fine-tuning",
      url: "https://together.ai",
      category: "data",
      subcategory: "Machine Learning",
      tags: ["inference", "fine-tuning", "open-source models", "llama", "api", "cloud"],
      pricing: "paid",
      pricingDetails: "Pay per token/image. Llama 3 from $0.20/1M tokens. Free trial credits",
      featured: false,
      sponsored: false,
      features: ["Optimized inference", "Model fine-tuning", "Custom deployments", "High throughput", "Multiple model families", "Embeddings API"],
      alternatives: ["replicate", "fal-ai", "modal", "anyscale"],
      addedDate: today,
    },
    {
      name: "Hugging Face",
      slug: "hugging-face",
      description: "The leading platform for sharing and deploying machine learning models. Hugging Face hosts 500K+ models, 250K+ datasets, and 300K+ demo apps, serving as the GitHub of AI with open-source tools for NLP, computer vision, and more.",
      shortDescription: "The GitHub of AI — 500K+ models, datasets, and demo spaces",
      url: "https://huggingface.co",
      category: "data",
      subcategory: "Machine Learning",
      tags: ["ml models", "datasets", "open-source", "nlp", "computer vision", "model hub"],
      pricing: "freemium",
      pricingDetails: "Free for public models. Pro $9/mo, Enterprise Hub from $20/user/mo",
      featured: true,
      sponsored: false,
      features: ["500K+ model repository", "250K+ datasets", "Spaces for demos", "Transformers library", "Inference API", "Model training on GPUs"],
      alternatives: ["replicate", "together-ai", "weights-biases"],
      addedDate: today,
    },
    {
      name: "Pinecone",
      slug: "pinecone",
      description: "Managed vector database for building AI applications like semantic search, recommendation engines, and RAG systems. Pinecone handles the infrastructure complexity of vector similarity search at any scale.",
      shortDescription: "Managed vector database for AI search, RAG, and recommendations",
      url: "https://www.pinecone.io",
      category: "data",
      subcategory: "Databases",
      tags: ["vector database", "embeddings", "search", "rag", "ai infrastructure", "similarity"],
      pricing: "freemium",
      pricingDetails: "Free tier. Standard $70/mo, Enterprise custom",
      featured: false,
      sponsored: false,
      features: ["Managed vector storage", "Real-time similarity search", "Metadata filtering", "Hybrid search", "Multi-region deployment", "SDK for Python, Node, Go, Java"],
      alternatives: ["weaviate", "qdrant", "milvus", "chroma"],
      addedDate: today,
    },
    {
      name: "LangChain",
      slug: "langchain",
      description: "Open-source framework for building applications powered by language models. LangChain provides components for connecting LLMs to data sources, building chains and agents, and managing complex AI application architectures.",
      shortDescription: "Open-source framework for building LLM-powered applications",
      url: "https://www.langchain.com",
      category: "coding",
      subcategory: "Developer Tools",
      tags: ["llm framework", "agents", "rag", "open-source", "python", "javascript"],
      pricing: "open-source",
      pricingDetails: "Free and open-source. LangSmith (monitoring) from $39/seat/mo",
      featured: false,
      sponsored: false,
      features: ["LLM application framework", "Agent building tools", "RAG pipeline support", "LangSmith debugging", "LangGraph for stateful agents", "100+ integrations"],
      alternatives: ["llamaindex", "semantic-kernel", "haystack"],
      addedDate: today,
    },
    {
      name: "LlamaIndex",
      slug: "llamaindex",
      description: "Data framework for connecting custom data sources to LLMs. LlamaIndex specializes in building RAG applications, providing data connectors, indexing strategies, and query engines for creating AI applications grounded in your private data.",
      shortDescription: "Data framework for RAG — connect your data to LLMs",
      url: "https://www.llamaindex.ai",
      category: "coding",
      subcategory: "Developer Tools",
      tags: ["rag", "data framework", "llm", "indexing", "python", "open-source"],
      pricing: "open-source",
      pricingDetails: "Free and open-source. LlamaCloud managed service from $35/mo",
      featured: false,
      sponsored: false,
      features: ["160+ data connectors", "Multiple indexing strategies", "Query engine abstractions", "Agent framework", "LlamaCloud managed RAG", "LlamaParse for document parsing"],
      alternatives: ["langchain", "semantic-kernel", "haystack"],
      addedDate: today,
    },
    {
      name: "Ollama",
      slug: "ollama",
      description: "Open-source tool for running large language models locally on your computer. Ollama makes it easy to download and run models like Llama 3, Mistral, Phi, and Gemma with a simple command-line interface and API.",
      shortDescription: "Run LLMs locally — download and serve models with one command",
      url: "https://ollama.com",
      category: "coding",
      subcategory: "Developer Tools",
      tags: ["local llm", "open-source", "llama", "mistral", "cli", "self-hosted"],
      pricing: "free",
      pricingDetails: "Free and open-source. Runs on your hardware",
      featured: true,
      sponsored: false,
      features: ["One-command model download", "Local model serving", "REST API", "Model library (100+)", "GPU acceleration", "Custom model creation (Modelfile)"],
      alternatives: ["lm-studio", "jan", "text-generation-webui"],
      addedDate: today,
    },
    {
      name: "LM Studio",
      slug: "lm-studio",
      description: "Desktop application for downloading and running local LLMs with a visual interface. LM Studio provides a ChatGPT-like interface for interacting with open-source models, plus a local API server compatible with OpenAI's format.",
      shortDescription: "Desktop app for running local LLMs — visual interface + local API server",
      url: "https://lmstudio.ai",
      category: "coding",
      subcategory: "Developer Tools",
      tags: ["local llm", "desktop app", "gui", "open-source models", "api server", "offline"],
      pricing: "free",
      pricingDetails: "Free for personal use. Business licensing available",
      featured: false,
      sponsored: false,
      features: ["Visual model browser", "Chat interface", "Local API server (OpenAI-compatible)", "Model quantization support", "GPU/CPU inference", "Cross-platform (Mac, Windows, Linux)"],
      alternatives: ["ollama", "jan", "text-generation-webui"],
      addedDate: today,
    },
    {
      name: "Perplexity",
      slug: "perplexity",
      description: "AI-powered answer engine that searches the web and provides cited, comprehensive answers to questions. Perplexity combines search with AI reasoning to deliver accurate, up-to-date information with transparent source attribution.",
      shortDescription: "AI answer engine — web search with cited, comprehensive responses",
      url: "https://www.perplexity.ai",
      category: "search",
      subcategory: "AI Search",
      tags: ["ai search", "answer engine", "citations", "research", "web search", "real-time"],
      pricing: "freemium",
      pricingDetails: "Free tier. Pro $20/mo (600+ Pro searches/day, file uploads, advanced models)",
      featured: true,
      sponsored: false,
      features: ["Web-grounded AI answers", "Source citations on every answer", "Focus modes (Academic, Writing, etc.)", "Collections for research", "File and image analysis", "API for developers"],
      alternatives: ["you-com", "google-gemini", "chatgpt"],
      addedDate: today,
    },
  ];
}

// ============================================
// MAIN PIPELINE
// ============================================
async function main() {
  console.log("🚀 AISO Tools Bulk Import Pipeline");
  console.log("===================================\n");
  
  // Load existing slugs to avoid duplicates
  const existingSlugs = loadExistingSlugs();
  
  // Get curated tools
  const allTools = getCuratedTools();
  console.log(`\n📦 Total curated tools: ${allTools.length}`);
  
  // Filter out duplicates
  const newTools = allTools.filter(tool => {
    if (existingSlugs.has(tool.slug)) {
      console.log(`  ⏭️  Skipping ${tool.name} (${tool.slug}) — already exists`);
      return false;
    }
    return true;
  });
  
  console.log(`\n✅ New tools to add: ${newTools.length}`);
  console.log(`❌ Duplicates skipped: ${allTools.length - newTools.length}\n`);
  
  if (newTools.length === 0) {
    console.log("Nothing to import!");
    return;
  }
  
  // Validate URLs (batch of 10 at a time)
  console.log("🔍 Validating URLs...\n");
  const validatedTools: ToolEntry[] = [];
  const failedUrls: { name: string; url: string; status?: number }[] = [];
  
  for (let i = 0; i < newTools.length; i += 10) {
    const batch = newTools.slice(i, i + 10);
    const results = await Promise.all(
      batch.map(async (tool) => {
        const result = await validateUrl(tool.url);
        return { tool, result };
      })
    );
    
    for (const { tool, result } of results) {
      if (result.valid) {
        validatedTools.push(tool);
        console.log(`  ✅ ${tool.name} — ${tool.url} (${result.status})`);
      } else {
        failedUrls.push({ name: tool.name, url: tool.url, status: result.status });
        // Still add it but flag for review
        validatedTools.push(tool);
        console.log(`  ⚠️  ${tool.name} — ${tool.url} (${result.status || 'timeout'}) — added anyway, flag for review`);
      }
    }
  }
  
  console.log(`\n📊 URL Validation Results:`);
  console.log(`  ✅ Valid: ${validatedTools.length - failedUrls.length}`);
  console.log(`  ⚠️  Failed/timeout: ${failedUrls.length}`);
  
  // Generate TypeScript batch file
  const batchNumber = 7; // Next batch
  const outputPath = path.join(__dirname, '..', 'src', 'data', `tools-batch${batchNumber}.ts`);
  
  let tsContent = `import { Tool } from "./tools";\n\nexport const toolsBatch${batchNumber}: Tool[] = [\n`;
  
  for (const tool of validatedTools) {
    tsContent += `  {\n`;
    tsContent += `    name: ${JSON.stringify(tool.name)},\n`;
    tsContent += `    slug: ${JSON.stringify(tool.slug)},\n`;
    tsContent += `    description: ${JSON.stringify(tool.description)},\n`;
    tsContent += `    shortDescription: ${JSON.stringify(tool.shortDescription)},\n`;
    tsContent += `    url: ${JSON.stringify(tool.url)},\n`;
    tsContent += `    category: ${JSON.stringify(tool.category)},\n`;
    tsContent += `    subcategory: ${JSON.stringify(tool.subcategory)},\n`;
    tsContent += `    tags: ${JSON.stringify(tool.tags)},\n`;
    tsContent += `    pricing: ${JSON.stringify(tool.pricing)},\n`;
    if (tool.pricingDetails) {
      tsContent += `    pricingDetails: ${JSON.stringify(tool.pricingDetails)},\n`;
    }
    tsContent += `    featured: ${tool.featured},\n`;
    tsContent += `    sponsored: false,\n`;
    tsContent += `    features: ${JSON.stringify(tool.features)},\n`;
    if (tool.alternatives?.length) {
      tsContent += `    alternatives: ${JSON.stringify(tool.alternatives)},\n`;
    }
    tsContent += `    addedDate: ${JSON.stringify(tool.addedDate)},\n`;
    tsContent += `  },\n`;
  }
  
  tsContent += `];\n`;
  
  fs.writeFileSync(outputPath, tsContent);
  console.log(`\n📝 Generated: src/data/tools-batch${batchNumber}.ts (${validatedTools.length} tools)`);
  
  // Update tools.ts to import the new batch
  const toolsPath = path.join(__dirname, '..', 'src', 'data', 'tools.ts');
  let toolsContent = fs.readFileSync(toolsPath, 'utf-8');
  
  // Add import
  const lastImport = `import { toolsBatch6 } from "./tools-batch6";`;
  const newImport = `import { toolsBatch${batchNumber} } from "./tools-batch${batchNumber}";`;
  if (!toolsContent.includes(newImport)) {
    toolsContent = toolsContent.replace(lastImport, `${lastImport}\n${newImport}`);
  }
  
  // Add to spread
  const lastSpread = `...toolsBatch6,`;
  const newSpread = `...toolsBatch${batchNumber},`;
  if (!toolsContent.includes(newSpread)) {
    toolsContent = toolsContent.replace(lastSpread, `${lastSpread}\n  ${newSpread}`);
  }
  
  fs.writeFileSync(toolsPath, toolsContent);
  console.log(`📝 Updated: src/data/tools.ts (added batch${batchNumber} import)`);
  
  // Summary
  console.log(`\n========================================`);
  console.log(`🎉 IMPORT COMPLETE`);
  console.log(`========================================`);
  console.log(`New tools added: ${validatedTools.length}`);
  console.log(`Previous total: ${existingSlugs.size}`);
  console.log(`New total: ${existingSlugs.size + validatedTools.length}`);
  console.log(`\nNext steps:`);
  console.log(`1. npx next build  (verify no errors)`);
  console.log(`2. git add -A && git commit -m "feat: add ${validatedTools.length} tools (batch ${batchNumber})"`);
  console.log(`3. git push origin main`);
  console.log(`4. Deploy at next batch window`);
  
  if (failedUrls.length > 0) {
    console.log(`\n⚠️  URLs that need review:`);
    for (const { name, url, status } of failedUrls) {
      console.log(`  - ${name}: ${url} (${status || 'timeout'})`);
    }
  }
}

main().catch(console.error);
