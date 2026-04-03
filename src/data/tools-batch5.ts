import { Tool } from "./tools";

export const toolsBatch5: Tool[] = [
  // ============================================
  // HIGH-TRAFFIC MISSING TOOLS (Top Exploding Topics)
  // ============================================

  // 1. Grok — 265M/mo
  {
    name: "Grok",
    slug: "grok",
    description:
      "xAI's conversational AI chatbot with real-time access to X (Twitter) data. Grok offers witty, uncensored responses, image generation, and deep integration with the X platform for up-to-the-minute information.",
    shortDescription: "xAI's chatbot with real-time X integration",
    url: "https://x.ai",
    category: "chatbots",
    subcategory: "General Chat",
    tags: ["chatbot", "xai", "real-time", "twitter", "conversational", "image generation"],
    pricing: "freemium",
    pricingDetails:
      "Free tier with limited usage. Premium via X Premium+ $16/mo or SuperGrok $30/mo",
    featured: true,
    sponsored: false,
    features: [
      "Real-time X/Twitter data",
      "Image generation (Aurora)",
      "Deep research mode",
      "Uncensored responses",
      "Think mode for reasoning",
      "DeepSearch web access",
    ],
    alternatives: ["chatgpt", "claude", "gemini", "deepseek"],
    addedDate: "2026-02-23",
  },

  // 2. DeepSeek — 262M/mo
  {
    name: "DeepSeek",
    slug: "deepseek",
    description:
      "Chinese AI lab's open-source chatbot known for strong reasoning, coding, and math capabilities. DeepSeek offers competitive performance with GPT-4 at significantly lower costs, with models available for local deployment.",
    shortDescription: "Open-source AI chatbot with strong reasoning and coding",
    url: "https://chat.deepseek.com",
    category: "chatbots",
    subcategory: "General Chat",
    tags: ["chatbot", "open-source", "reasoning", "coding", "math", "chinese ai"],
    pricing: "freemium",
    pricingDetails:
      "Free web chat. API: $0.14/million input tokens, $0.28/million output tokens (DeepSeek-V3)",
    featured: true,
    sponsored: false,
    features: [
      "DeepThink reasoning mode",
      "Code generation",
      "Math problem solving",
      "Open-source models",
      "128K context window",
      "API access",
    ],
    alternatives: ["chatgpt", "claude", "gemini", "grok"],
    addedDate: "2026-02-23",
  },

  // 3. DeepL — 169M/mo
  {
    name: "DeepL",
    slug: "deepl",
    description:
      "AI-powered translation service widely regarded as the most accurate machine translator. DeepL supports 30+ languages with nuanced, natural-sounding translations for documents, websites, and real-time communication.",
    shortDescription: "AI translation with best-in-class accuracy",
    url: "https://deepl.com",
    category: "writing",
    subcategory: "Translation",
    tags: ["translation", "languages", "writing", "documents", "api", "localization"],
    pricing: "freemium",
    pricingDetails:
      "Free tier with character limits. Starter $10.49/mo, Advanced $34.49/mo, Ultimate $68.99/mo",
    featured: true,
    sponsored: false,
    features: [
      "30+ languages",
      "Document translation (PDF, Word, PPT)",
      "DeepL Write for grammar/style",
      "Glossary for terminology",
      "API access",
      "Browser extension",
    ],
    alternatives: ["grammarly", "wordtune", "writesonic"],
    addedDate: "2026-02-23",
  },

  // 4. Janitor AI — 136M/mo
  {
    name: "Janitor AI",
    slug: "janitor-ai",
    description:
      "AI character chatbot platform for creating and interacting with customizable AI personas. Janitor AI offers a wide library of user-created characters for roleplay, storytelling, and creative conversation.",
    shortDescription: "AI character chatbot platform for roleplay and storytelling",
    url: "https://janitorai.com",
    category: "chatbots",
    subcategory: "Character AI",
    tags: ["chatbot", "roleplay", "characters", "storytelling", "entertainment", "creative"],
    pricing: "freemium",
    pricingDetails:
      "Free tier with ads. Premium removes ads and unlocks advanced features",
    featured: true,
    sponsored: false,
    features: [
      "Thousands of user-created characters",
      "Custom character creation",
      "Multiple AI backends",
      "Roleplay conversations",
      "NSFW content options",
      "Community sharing",
    ],
    alternatives: ["character-ai", "replika", "poe"],
    addedDate: "2026-02-23",
  },

  // 5. Microsoft Copilot — already exists as slug "copilot" in batch1, skipping

  // 6. Google AI Studio — 69M/mo
  {
    name: "Google AI Studio",
    slug: "google-ai-studio",
    description:
      "Google's free web-based IDE for prototyping and testing with Gemini models. Google AI Studio lets developers experiment with prompts, fine-tune models, and generate API keys for building AI-powered applications.",
    shortDescription: "Google's free IDE for prototyping with Gemini models",
    url: "https://aistudio.google.com",
    category: "coding",
    subcategory: "Developer Tools",
    tags: ["developer tools", "google", "gemini", "api", "prototyping", "llm"],
    pricing: "free",
    pricingDetails:
      "Free to use. API usage via Google AI has generous free tier, then pay-as-you-go",
    featured: true,
    sponsored: false,
    features: [
      "Free Gemini API access",
      "Prompt engineering IDE",
      "Model fine-tuning",
      "Structured output",
      "Multi-modal testing",
      "API key generation",
    ],
    alternatives: ["hugging-face", "replit", "together-ai"],
    addedDate: "2026-02-23",
  },

  // 7. Lovable — 39M/mo
  {
    name: "Lovable",
    slug: "lovable",
    description:
      "AI-powered full-stack web application builder that turns natural language into production-ready apps. Lovable generates React frontends with Supabase backends, handles authentication, databases, and deployment.",
    shortDescription: "AI web app builder from natural language prompts",
    url: "https://lovable.dev",
    category: "coding",
    subcategory: "Code Generation",
    tags: ["coding", "web development", "full-stack", "ai builder", "react", "no-code"],
    pricing: "freemium",
    pricingDetails:
      "Free tier with limited messages. Starter $20/mo, Launch $50/mo, Scale $100/mo",
    featured: true,
    sponsored: false,
    features: [
      "Natural language to full-stack apps",
      "React + Supabase stack",
      "Authentication built-in",
      "Database integration",
      "One-click deployment",
      "GitHub sync",
    ],
    alternatives: ["bolt", "v0", "replit"],
    addedDate: "2026-02-23",
  },

  // 8. Hugging Face — 37M/mo
  {
    name: "Hugging Face",
    slug: "hugging-face",
    description:
      "The leading open-source machine learning platform and community hub. Hugging Face hosts 500K+ models, 100K+ datasets, and provides tools for training, fine-tuning, and deploying ML models across NLP, vision, and audio.",
    shortDescription: "Open-source ML platform with 500K+ models and datasets",
    url: "https://huggingface.co",
    category: "data",
    subcategory: "Machine Learning",
    tags: ["machine learning", "open-source", "models", "datasets", "nlp", "community"],
    pricing: "freemium",
    pricingDetails:
      "Free tier with community features. Pro $9/mo, Enterprise Hub from $20/user/mo",
    featured: true,
    sponsored: false,
    features: [
      "500K+ pre-trained models",
      "100K+ datasets",
      "Spaces for demos",
      "Inference API",
      "AutoTrain",
      "Transformers library",
    ],
    alternatives: ["google-ai-studio", "kaggle", "together-ai"],
    addedDate: "2026-02-23",
  },

  // 9. NotebookLM — 33M/mo
  {
    name: "NotebookLM",
    slug: "notebooklm",
    description:
      "Google's AI-powered research and note-taking tool that synthesizes information from your sources. NotebookLM creates audio overviews, answers questions, and generates summaries from uploaded documents, PDFs, and websites.",
    shortDescription: "Google's AI research tool that synthesizes your sources",
    url: "https://notebooklm.google.com",
    category: "education",
    subcategory: "Research",
    tags: ["research", "note-taking", "google", "summarization", "audio", "education"],
    pricing: "free",
    pricingDetails:
      "Free for all users. NotebookLM Plus $20/mo for enterprise features",
    featured: true,
    sponsored: false,
    features: [
      "Audio Overview podcasts",
      "Source-grounded answers",
      "Document analysis",
      "Study guides generation",
      "FAQ generation",
      "Multi-source synthesis",
    ],
    alternatives: ["elicit", "consensus", "scispace"],
    addedDate: "2026-02-23",
  },

  // 10. Manus — 22M/mo
  {
    name: "Manus",
    slug: "manus",
    description:
      "General-purpose AI agent platform that autonomously completes complex tasks. Manus can browse the web, write code, manage files, and coordinate multi-step workflows with minimal human guidance.",
    shortDescription: "Autonomous AI agent for complex multi-step tasks",
    url: "https://manus.im",
    category: "automation",
    subcategory: "AI Agents",
    tags: ["ai agent", "automation", "autonomous", "workflow", "multi-step", "productivity"],
    pricing: "freemium",
    pricingDetails:
      "Free tier with limited credits. Plus $39/mo, Team pricing available",
    featured: true,
    sponsored: false,
    features: [
      "Autonomous task execution",
      "Web browsing",
      "Code execution",
      "File management",
      "Multi-step workflows",
      "Tool use coordination",
    ],
    alternatives: ["zapier-ai", "make-com", "n8n"],
    addedDate: "2026-02-23",
  },

  // 11. Kimi — 18.5M/mo
  {
    name: "Kimi",
    slug: "kimi",
    description:
      "Moonshot AI's chatbot featuring an industry-leading 2 million token context window. Kimi excels at processing long documents, complex analysis, and multi-turn conversations in both Chinese and English.",
    shortDescription: "Moonshot AI chatbot with 2M token context window",
    url: "https://kimi.moonshot.cn",
    category: "chatbots",
    subcategory: "General Chat",
    tags: ["chatbot", "long context", "chinese ai", "document analysis", "moonshot"],
    pricing: "freemium",
    pricingDetails:
      "Free tier. API pricing based on token usage",
    featured: true,
    sponsored: false,
    features: [
      "2M token context window",
      "Long document processing",
      "Web search integration",
      "File analysis",
      "Multi-turn conversation",
      "Chinese and English",
    ],
    alternatives: ["chatgpt", "deepseek", "claude"],
    addedDate: "2026-02-23",
  },

  // 12. DeepAI — 13M/mo
  {
    name: "DeepAI",
    slug: "deepai",
    description:
      "AI tools suite offering image generation, text processing, and various AI utilities. DeepAI provides easy-to-use generators for images, art, logos, and text with both web interface and API access.",
    shortDescription: "AI tools suite for image generation and text processing",
    url: "https://deepai.org",
    category: "image-generation",
    subcategory: "Art Generation",
    tags: ["image generation", "ai tools", "text-to-image", "api", "art", "utilities"],
    pricing: "freemium",
    pricingDetails:
      "Free tier with limits. Pro $4.99/mo with higher limits and no watermarks",
    featured: true,
    sponsored: false,
    features: [
      "Text-to-image generation",
      "AI art generator",
      "Image editing tools",
      "API access",
      "Multiple art styles",
      "Logo generator",
    ],
    alternatives: ["dall-e", "stable-diffusion", "leonardo-ai"],
    addedDate: "2026-02-23",
  },

  // 13. OpusClip — 9.1M/mo
  {
    name: "OpusClip",
    slug: "opusclip",
    description:
      "AI video clipping tool that turns long videos into viral short clips. OpusClip uses AI to identify the most engaging moments, auto-reframe for vertical, and add dynamic captions for social media.",
    shortDescription: "AI turns long videos into viral short clips",
    url: "https://opus.pro",
    category: "video",
    subcategory: "Video Editing",
    tags: ["video editing", "clips", "social media", "short-form", "captions", "repurposing"],
    pricing: "freemium",
    pricingDetails:
      "Free tier with watermark. Starter $15/mo, Pro $29/mo, Business custom",
    featured: false,
    sponsored: false,
    features: [
      "AI clip selection",
      "Auto-reframing for vertical",
      "Dynamic captions",
      "Virality score",
      "Brand templates",
      "Multi-platform export",
    ],
    alternatives: ["descript", "capcut"],
    addedDate: "2026-02-23",
  },

  // 14. Filmora — 2.4M/mo
  {
    name: "Filmora",
    slug: "filmora",
    description:
      "Wondershare's AI-powered video editor combining professional features with beginner-friendly interface. Filmora offers AI tools for text-to-video, smart cutout, motion tracking, and auto-captioning.",
    shortDescription: "AI video editor with professional features for beginners",
    url: "https://filmora.wondershare.com",
    category: "video",
    subcategory: "Video Editing",
    tags: ["video editing", "ai tools", "beginners", "motion tracking", "captions"],
    pricing: "freemium",
    pricingDetails:
      "Free with watermark. Annual $49.99/yr, Perpetual $79.99 one-time, Cross-platform $69.99/yr",
    featured: false,
    sponsored: false,
    features: [
      "AI text-to-video",
      "Smart cutout",
      "Motion tracking",
      "Auto captions",
      "AI music generator",
      "1000+ templates",
    ],
    alternatives: ["capcut", "descript", "invideo"],
    addedDate: "2026-02-23",
  },

  // 15. Groq — 1.9M/mo
  {
    name: "Groq",
    slug: "groq",
    description:
      "Ultra-fast AI inference platform powered by custom LPU (Language Processing Unit) hardware. Groq delivers the fastest token generation speeds in the industry, making real-time AI applications practical.",
    shortDescription: "Ultra-fast AI inference with custom LPU hardware",
    url: "https://groq.com",
    category: "coding",
    subcategory: "Developer Tools",
    tags: ["inference", "fast", "api", "hardware", "llm", "developer tools"],
    pricing: "freemium",
    pricingDetails:
      "Free tier on GroqCloud. Pay-as-you-go from $0.05/million tokens for smaller models",
    featured: false,
    sponsored: false,
    features: [
      "Fastest inference speeds",
      "Custom LPU hardware",
      "Multiple open-source models",
      "GroqCloud API",
      "OpenAI-compatible API",
      "Low latency responses",
    ],
    alternatives: ["hugging-face", "together-ai", "google-ai-studio"],
    addedDate: "2026-02-23",
  },

  // 16. Microsoft Designer — 1.5M/mo
  {
    name: "Microsoft Designer",
    slug: "microsoft-designer",
    description:
      "Microsoft's AI-powered graphic design tool for creating social media posts, invitations, and marketing materials. Designer uses DALL-E for image generation and offers templates with AI-assisted editing.",
    shortDescription: "Microsoft's AI design tool for social media and marketing",
    url: "https://designer.microsoft.com",
    category: "design",
    subcategory: "Web Design",
    tags: ["design", "microsoft", "social media", "templates", "ai design", "marketing"],
    pricing: "freemium",
    pricingDetails:
      "Free tier with 15 boosts/day. Copilot Pro $20/mo for more boosts and features",
    featured: false,
    sponsored: false,
    features: [
      "AI image generation (DALL-E)",
      "Social media templates",
      "Background removal",
      "Text effects",
      "Brand kit",
      "Animation",
    ],
    alternatives: ["canva-ai", "figma-ai", "adobe-firefly"],
    addedDate: "2026-02-23",
  },

  // 17. SlidesAI — 449K/mo
  {
    name: "SlidesAI",
    slug: "slidesai",
    description:
      "AI presentation generator that creates Google Slides from text input. SlidesAI transforms documents, articles, or plain text into professional presentations with appropriate layouts, images, and design.",
    shortDescription: "AI generates Google Slides presentations from text",
    url: "https://slidesai.io",
    category: "design",
    subcategory: "Presentations",
    tags: ["presentations", "google slides", "ai design", "automation", "productivity"],
    pricing: "freemium",
    pricingDetails:
      "Free tier 3 presentations/mo. Starter $10/mo, Premium $20/mo",
    featured: false,
    sponsored: false,
    features: [
      "Text to presentation",
      "Google Slides integration",
      "Multiple themes",
      "Image suggestions",
      "Multi-language",
      "Custom branding",
    ],
    alternatives: ["gamma", "beautiful-ai", "tome"],
    addedDate: "2026-02-23",
  },

  // 18. Lumen5 — 387K/mo
  {
    name: "Lumen5",
    slug: "lumen5",
    description:
      "AI video creation platform that turns blog posts and articles into engaging videos. Lumen5 uses AI to summarize content, match visuals, and create professional marketing videos in minutes.",
    shortDescription: "AI turns blog posts into engaging marketing videos",
    url: "https://lumen5.com",
    category: "video",
    subcategory: "Video Generation",
    tags: ["video creation", "marketing", "content repurposing", "ai video", "social media"],
    pricing: "freemium",
    pricingDetails:
      "Free tier with watermark. Basic $29/mo, Starter $79/mo, Professional $199/mo, Enterprise custom",
    featured: false,
    sponsored: false,
    features: [
      "Blog-to-video conversion",
      "AI scene matching",
      "Stock media library",
      "Brand templates",
      "Auto-summarization",
      "Multi-format export",
    ],
    alternatives: ["invideo", "pictory", "synthesia"],
    addedDate: "2026-02-23",
  },

  // 19. HyperWrite — 369K/mo
  {
    name: "HyperWrite",
    slug: "hyperwrite",
    description:
      "AI writing assistant that helps create content, emails, and documents with real-time suggestions. HyperWrite learns your style and offers autocomplete, rewriting, and generation across any website.",
    shortDescription: "AI writing assistant with personalized style learning",
    url: "https://hyperwriteai.com",
    category: "writing",
    subcategory: "Copywriting",
    tags: ["writing", "ai assistant", "autocomplete", "content", "email", "personalized"],
    pricing: "freemium",
    pricingDetails:
      "Free tier 15 generations/mo. Premium $19.99/mo, Ultra $44.99/mo",
    featured: false,
    sponsored: false,
    features: [
      "Style learning",
      "Autocomplete anywhere",
      "Content generation",
      "Email writer",
      "Chrome extension",
      "Summarizer",
    ],
    alternatives: ["jasper", "copy-ai", "writesonic"],
    addedDate: "2026-02-23",
  },

  // ============================================
  // IMPORTANT MISSING TOOLS (Developer & Infrastructure)
  // ============================================

  // 20. Anthropic API
  {
    name: "Anthropic API",
    slug: "anthropic-api",
    description:
      "Developer platform for accessing Claude models via API. Anthropic's API provides access to Claude Opus, Sonnet, and Haiku models with tool use, vision, and extended context capabilities for building AI applications.",
    shortDescription: "API access to Claude models for developers",
    url: "https://console.anthropic.com",
    category: "coding",
    subcategory: "Developer Tools",
    tags: ["api", "developer tools", "llm", "anthropic", "claude", "ai platform"],
    pricing: "paid",
    pricingDetails:
      "Pay-as-you-go. Claude Sonnet $3/$15 per million tokens (input/output), Opus $15/$75, Haiku $0.25/$1.25",
    featured: false,
    sponsored: false,
    features: [
      "Claude model family access",
      "Tool use / function calling",
      "Vision capabilities",
      "200K context window",
      "Streaming responses",
      "Batches API for bulk",
    ],
    alternatives: ["openai-api", "google-ai-studio", "together-ai"],
    addedDate: "2026-02-23",
  },

  // 21. OpenAI API
  {
    name: "OpenAI API",
    slug: "openai-api",
    description:
      "Developer platform for accessing GPT-4, DALL-E, Whisper, and other OpenAI models via API. The OpenAI API powers thousands of applications with chat, embedding, image generation, and speech capabilities.",
    shortDescription: "API access to GPT-4, DALL-E, and OpenAI models",
    url: "https://platform.openai.com",
    category: "coding",
    subcategory: "Developer Tools",
    tags: ["api", "developer tools", "llm", "openai", "gpt-4", "ai platform"],
    pricing: "paid",
    pricingDetails:
      "Pay-as-you-go. GPT-4o $2.50/$10 per million tokens, GPT-4o mini $0.15/$0.60, o1 models from $15/$60",
    featured: false,
    sponsored: false,
    features: [
      "GPT-4 and o1 models",
      "DALL-E image generation",
      "Whisper transcription",
      "Embeddings",
      "Function calling",
      "Fine-tuning",
    ],
    alternatives: ["anthropic-api", "google-ai-studio", "together-ai"],
    addedDate: "2026-02-23",
  },

  // 22. Mistral
  {
    name: "Mistral",
    slug: "mistral",
    description:
      "European AI company offering powerful open-source and commercial language models. Mistral's models provide strong multilingual capabilities, coding, and reasoning with competitive performance at efficient price points.",
    shortDescription: "European AI lab with powerful open-source language models",
    url: "https://mistral.ai",
    category: "chatbots",
    subcategory: "General Chat",
    tags: ["chatbot", "open-source", "llm", "european ai", "multilingual", "api"],
    pricing: "freemium",
    pricingDetails:
      "Free chat on Le Chat. API: Mistral Small $0.1/$0.3, Large $2/$6 per million tokens",
    featured: false,
    sponsored: false,
    features: [
      "Le Chat free chatbot",
      "Open-source models",
      "Strong multilingual support",
      "Code generation",
      "Function calling",
      "Fine-tuning support",
    ],
    alternatives: ["chatgpt", "claude", "deepseek", "llama"],
    addedDate: "2026-02-23",
  },

  // 23. Llama (Meta AI)
  {
    name: "Llama (Meta AI)",
    slug: "llama",
    description:
      "Meta's open-source large language model family powering thousands of AI applications. Llama models are free to use and modify, offering competitive performance with proprietary models for research and commercial use.",
    shortDescription: "Meta's open-source LLM for research and commercial use",
    url: "https://llama.meta.com",
    category: "chatbots",
    subcategory: "General Chat",
    tags: ["open-source", "llm", "meta", "research", "self-hosted", "customizable"],
    pricing: "open-source",
    pricingDetails:
      "Free to download and use. Available on cloud providers at various inference costs",
    featured: false,
    sponsored: false,
    features: [
      "Fully open-source weights",
      "Multiple model sizes",
      "Commercial license",
      "Fine-tuning support",
      "Community ecosystem",
      "Multi-modal capabilities",
    ],
    alternatives: ["mistral", "deepseek", "gemini"],
    addedDate: "2026-02-23",
  },

  // 24. Cohere
  {
    name: "Cohere",
    slug: "cohere",
    description:
      "Enterprise AI platform specializing in text understanding, generation, and retrieval-augmented generation (RAG). Cohere provides models optimized for business use cases with enterprise-grade security and deployment options.",
    shortDescription: "Enterprise AI platform for text and RAG applications",
    url: "https://cohere.com",
    category: "business",
    subcategory: "Enterprise AI",
    tags: ["enterprise", "rag", "embeddings", "nlp", "api", "search"],
    pricing: "freemium",
    pricingDetails:
      "Free trial tier. Production pricing from $1/million tokens, Enterprise custom",
    featured: false,
    sponsored: false,
    features: [
      "Command models for generation",
      "Embed models for search",
      "Rerank for relevance",
      "RAG-optimized",
      "Private deployment",
      "Multi-language support",
    ],
    alternatives: ["openai-api", "anthropic-api", "mistral"],
    addedDate: "2026-02-23",
  },

  // 25. Together AI
  {
    name: "Together AI",
    slug: "together-ai",
    description:
      "AI inference and fine-tuning platform offering 100+ open-source models at fast speeds. Together AI provides a unified API for running Llama, Mistral, and other models with competitive pricing and low latency.",
    shortDescription: "Fast inference platform for 100+ open-source AI models",
    url: "https://together.ai",
    category: "coding",
    subcategory: "Developer Tools",
    tags: ["inference", "api", "open-source models", "fine-tuning", "developer tools", "llm"],
    pricing: "paid",
    pricingDetails:
      "Pay-as-you-go. From $0.10/million tokens for small models, $0.90 for Llama 3 70B. Free $5 credit to start",
    featured: false,
    sponsored: false,
    features: [
      "100+ open-source models",
      "Fast inference",
      "Fine-tuning platform",
      "OpenAI-compatible API",
      "Dedicated instances",
      "Custom model hosting",
    ],
    alternatives: ["groq", "hugging-face", "anthropic-api"],
    addedDate: "2026-02-23",
  },

  // 28. Claude Code
  {
    name: "Claude Code",
    slug: "claude-code",
    description:
      "Anthropic's agentic CLI tool for coding directly in the terminal. Claude Code understands your entire codebase, makes multi-file edits, runs commands, and handles complex software engineering tasks autonomously.",
    shortDescription: "Anthropic's agentic CLI coding tool for the terminal",
    url: "https://docs.anthropic.com/en/docs/claude-code",
    category: "coding",
    subcategory: "Code Generation",
    tags: ["coding", "cli", "terminal", "ai agent", "anthropic", "automation"],
    pricing: "paid",
    pricingDetails:
      "Requires Anthropic API key. Usage-based on Claude model pricing (Sonnet ~$3/$15 per million tokens)",
    featured: false,
    sponsored: false,
    features: [
      "Full codebase understanding",
      "Multi-file editing",
      "Terminal command execution",
      "Git integration",
      "Autonomous task completion",
      "Project-wide refactoring",
    ],
    alternatives: ["cursor", "aider", "cline"],
    addedDate: "2026-02-23",
  },

  // 29. Codex (OpenAI)
  {
    name: "Codex",
    slug: "codex-openai",
    description:
      "OpenAI's cloud-based coding agent that runs in a sandboxed environment. Codex can read your codebase, write and edit code, run tests, and submit pull requests as an autonomous software engineer.",
    shortDescription: "OpenAI's autonomous cloud-based coding agent",
    url: "https://openai.com/index/introducing-codex",
    category: "coding",
    subcategory: "Code Generation",
    tags: ["coding", "ai agent", "openai", "autonomous", "cloud", "pull requests"],
    pricing: "paid",
    pricingDetails:
      "Included with ChatGPT Pro $200/mo. Uses API credits on o3/o4-mini models",
    featured: false,
    sponsored: false,
    features: [
      "Sandboxed execution environment",
      "Parallel task execution",
      "PR generation",
      "Test running",
      "Codebase reading",
      "GitHub integration",
    ],
    alternatives: ["claude-code", "devin", "cursor"],
    addedDate: "2026-02-23",
  },

  // 30. Kling AI
  {
    name: "Kling AI",
    slug: "kling-ai",
    description:
      "Kuaishou's AI video generation platform creating high-quality videos from text and image prompts. Kling AI produces realistic motion, physics, and cinematic effects with up to 2-minute video generation.",
    shortDescription: "AI video generation with realistic motion and physics",
    url: "https://klingai.com",
    category: "video",
    subcategory: "Video Generation",
    tags: ["video generation", "text-to-video", "ai video", "cinematic", "motion"],
    pricing: "freemium",
    pricingDetails:
      "Free tier with daily credits. Pro $8/mo, Premier $28/mo with priority generation",
    featured: false,
    sponsored: false,
    features: [
      "Text-to-video generation",
      "Image-to-video animation",
      "Up to 2-minute videos",
      "Realistic physics",
      "Cinematic effects",
      "1080p output",
    ],
    alternatives: ["runway", "sora", "veo", "pika", "hailuo"],
    addedDate: "2026-02-23",
  },

  // 31. Hailuo
  {
    name: "Hailuo AI",
    slug: "hailuo",
    description:
      "MiniMax's AI video generator known for natural-looking motion and character consistency. Hailuo produces high-quality short videos from text prompts with impressive human motion and scene transitions.",
    shortDescription: "AI video generator with natural motion and character consistency",
    url: "https://hailuoai.video",
    category: "video",
    subcategory: "Video Generation",
    tags: ["video generation", "text-to-video", "ai video", "motion", "minimax"],
    pricing: "freemium",
    pricingDetails:
      "Free tier with limited generations. Paid credits for additional usage",
    featured: false,
    sponsored: false,
    features: [
      "Natural human motion",
      "Character consistency",
      "Text-to-video",
      "Scene transitions",
      "720p output",
      "Fast generation",
    ],
    alternatives: ["runway", "sora", "veo", "pika", "kling-ai"],
    addedDate: "2026-02-23",
  },

  // 34. Recraft
  {
    name: "Recraft",
    slug: "recraft",
    description:
      "AI design tool specializing in vector art, icons, and brand-consistent illustrations. Recraft generates and edits vector graphics, mockups, and design assets with fine-grained style control.",
    shortDescription: "AI vector art and design tool for brand assets",
    url: "https://recraft.ai",
    category: "design",
    subcategory: "UI Design",
    tags: ["design", "vector art", "icons", "illustrations", "branding", "ai design"],
    pricing: "freemium",
    pricingDetails:
      "Free tier with daily credits. Pro $25/mo, Team $30/user/mo",
    featured: false,
    sponsored: false,
    features: [
      "Vector illustration generation",
      "Icon generation",
      "Style consistency",
      "Color palette control",
      "SVG export",
      "Brand style sets",
    ],
    alternatives: ["canva-ai", "figma-ai", "microsoft-designer"],
    addedDate: "2026-02-23",
  },

  // 35. Napkin AI
  {
    name: "Napkin AI",
    slug: "napkin-ai",
    description:
      "AI-powered tool that transforms text into visual diagrams, infographics, and explanatory graphics. Napkin AI turns written content into professional visuals for presentations, blogs, and documentation.",
    shortDescription: "AI transforms text into diagrams and infographics",
    url: "https://napkin.ai",
    category: "design",
    subcategory: "Presentations",
    tags: ["design", "diagrams", "infographics", "visualization", "content", "ai design"],
    pricing: "freemium",
    pricingDetails:
      "Free tier with limited visuals. Pro $18/mo with unlimited generation",
    featured: false,
    sponsored: false,
    features: [
      "Text-to-visual conversion",
      "Diagram generation",
      "Infographic creation",
      "Multiple visual styles",
      "Export (PNG, SVG)",
      "One-click editing",
    ],
    alternatives: ["gamma", "canva-ai", "beautiful-ai"],
    addedDate: "2026-02-23",
  },

  // 38. Arc Browser
  {
    name: "Arc Browser",
    slug: "arc-browser",
    description:
      "The Browser Company's AI-powered web browser that reimagines browsing with built-in AI features. Arc includes AI page summaries, instant links, tab management, and a clean, customizable interface.",
    shortDescription: "AI-powered browser with smart summaries and tab management",
    url: "https://arc.net",
    category: "productivity",
    subcategory: "AI Browser",
    tags: ["browser", "productivity", "ai assistant", "tab management", "summaries"],
    pricing: "free",
    pricingDetails: "Free for all users",
    featured: false,
    sponsored: false,
    features: [
      "AI page summaries",
      "Instant Links preview",
      "Spaces for tab organization",
      "Split view",
      "Boosts for custom CSS",
      "Built-in ad blocking",
    ],
    alternatives: ["kagi", "you-com", "perplexity"],
    addedDate: "2026-02-23",
  },

  // 41. Cline
  {
    name: "Cline",
    slug: "cline",
    description:
      "AI coding agent for VS Code that autonomously creates, edits, and executes code. Cline can run terminal commands, browse the web, and complete multi-step development tasks with human-in-the-loop approval.",
    shortDescription: "Autonomous AI coding agent for VS Code",
    url: "https://cline.bot",
    category: "coding",
    subcategory: "Code Generation",
    tags: ["coding", "ai agent", "vs code", "autonomous", "terminal", "extension"],
    pricing: "open-source",
    pricingDetails:
      "Free and open-source. Bring your own API key (works with Anthropic, OpenAI, etc.)",
    featured: false,
    sponsored: false,
    features: [
      "Autonomous coding",
      "Terminal command execution",
      "File creation and editing",
      "Web browsing",
      "Human-in-the-loop approval",
      "Multi-model support",
    ],
    alternatives: ["claude-code", "aider", "roo-code"],
    addedDate: "2026-02-23",
  },

  // 42. Aider
  {
    name: "Aider",
    slug: "aider",
    description:
      "Open-source AI pair programming tool that works in your terminal. Aider connects to LLMs to help edit code in local git repos, with automatic commit messages and support for multiple AI models.",
    shortDescription: "Open-source AI pair programming in the terminal",
    url: "https://aider.chat",
    category: "coding",
    subcategory: "Code Generation",
    tags: ["coding", "open-source", "terminal", "pair programming", "git", "cli"],
    pricing: "open-source",
    pricingDetails:
      "Free and open-source. Bring your own API key for LLM usage",
    featured: false,
    sponsored: false,
    features: [
      "Multi-file editing",
      "Git integration",
      "Auto-commit messages",
      "Multiple LLM support",
      "Voice coding",
      "Linting and testing integration",
    ],
    alternatives: ["claude-code", "cline", "roo-code"],
    addedDate: "2026-02-23",
  },

  // 43. Roo Code
  {
    name: "Roo Code",
    slug: "roo-code",
    description:
      "AI coding agent for VS Code (fork of Cline) with customizable modes and enhanced features. Roo Code offers specialized coding, architect, and review modes for different development workflows.",
    shortDescription: "AI coding agent with customizable modes for VS Code",
    url: "https://roocode.com",
    category: "coding",
    subcategory: "Code Generation",
    tags: ["coding", "ai agent", "vs code", "customizable", "modes", "extension"],
    pricing: "open-source",
    pricingDetails:
      "Free and open-source. Bring your own API key",
    featured: false,
    sponsored: false,
    features: [
      "Multiple coding modes",
      "Architect mode for planning",
      "Code review mode",
      "Custom instructions",
      "Multi-model support",
      "MCP tool integration",
    ],
    alternatives: ["cline", "claude-code", "aider"],
    addedDate: "2026-02-23",
  },

  // 44. Amazon Q
  {
    name: "Amazon Q",
    slug: "amazon-q",
    description:
      "AWS's generative AI assistant for software development and business intelligence. Amazon Q Developer helps write, debug, and transform code while Amazon Q Business answers questions from enterprise data.",
    shortDescription: "AWS AI assistant for developers and business users",
    url: "https://aws.amazon.com/q",
    category: "coding",
    subcategory: "Code Generation",
    tags: ["coding", "aws", "ai assistant", "enterprise", "cloud", "business"],
    pricing: "freemium",
    pricingDetails:
      "Free tier for developers. Q Developer Pro $19/user/mo, Q Business $20/user/mo",
    featured: false,
    sponsored: false,
    features: [
      "Code generation",
      "Code transformation (Java upgrades)",
      "Security scanning",
      "AWS integration",
      "Business data Q&A",
      "IDE plugins",
    ],
    alternatives: ["github-copilot", "codewhisperer", "cursor"],
    addedDate: "2026-02-23",
  },

  // 45. Google Colab
  {
    name: "Google Colab",
    slug: "google-colab",
    description:
      "Google's hosted Jupyter notebook environment with free GPU/TPU access for machine learning. Colab lets you write and execute Python code in the browser with AI-powered code assistance and easy sharing.",
    shortDescription: "Free hosted notebooks with GPU for machine learning",
    url: "https://colab.research.google.com",
    category: "data",
    subcategory: "Data Science",
    tags: ["notebooks", "python", "gpu", "machine learning", "google", "free"],
    pricing: "freemium",
    pricingDetails:
      "Free tier with limited GPU. Colab Pro $11.99/mo, Pro+ $49.99/mo with better GPUs",
    featured: false,
    sponsored: false,
    features: [
      "Free GPU/TPU access",
      "Jupyter notebooks",
      "AI code assistance",
      "Google Drive integration",
      "Easy sharing",
      "Pre-installed ML libraries",
    ],
    alternatives: ["deepnote", "kaggle", "hugging-face"],
    addedDate: "2026-02-23",
  },

  // 46. Kaggle
  {
    name: "Kaggle",
    slug: "kaggle",
    description:
      "Google-owned data science and ML competition platform with free notebooks and datasets. Kaggle hosts competitions, provides free GPU notebooks, and offers one of the largest repositories of datasets and ML code.",
    shortDescription: "Data science competitions with free GPU notebooks and datasets",
    url: "https://kaggle.com",
    category: "data",
    subcategory: "Machine Learning",
    tags: ["machine learning", "competitions", "datasets", "notebooks", "google", "community"],
    pricing: "free",
    pricingDetails:
      "Free for all users. Free GPU/TPU quotas for notebooks",
    featured: false,
    sponsored: false,
    features: [
      "ML competitions with prizes",
      "Free GPU notebooks",
      "100K+ datasets",
      "Code sharing",
      "Discussion forums",
      "Leaderboards",
    ],
    alternatives: ["hugging-face", "google-colab", "deepnote"],
    addedDate: "2026-02-23",
  },

  // 47. Weights & Biases
  {
    name: "Weights & Biases",
    slug: "wandb",
    description:
      "ML experiment tracking and model management platform for AI teams. Weights & Biases (W&B) provides tools for tracking experiments, visualizing runs, managing datasets, and collaborating on ML projects.",
    shortDescription: "ML experiment tracking and model management platform",
    url: "https://wandb.ai",
    category: "data",
    subcategory: "Machine Learning",
    tags: ["machine learning", "experiment tracking", "mlops", "visualization", "collaboration"],
    pricing: "freemium",
    pricingDetails:
      "Free for personal use. Teams $50/user/mo, Enterprise custom",
    featured: false,
    sponsored: false,
    features: [
      "Experiment tracking",
      "Run visualization",
      "Model registry",
      "Dataset versioning",
      "Hyperparameter sweeps",
      "Report generation",
    ],
    alternatives: ["hugging-face", "datarobot", "google-colab"],
    addedDate: "2026-02-23",
  },

  // 48. Pinecone
  {
    name: "Pinecone",
    slug: "pinecone",
    description:
      "Managed vector database for building AI applications with similarity search. Pinecone provides serverless vector storage and retrieval, ideal for RAG, recommendation systems, and semantic search at scale.",
    shortDescription: "Managed vector database for AI similarity search",
    url: "https://pinecone.io",
    category: "data",
    subcategory: "Databases",
    tags: ["vector database", "search", "rag", "embeddings", "ai infrastructure", "serverless"],
    pricing: "freemium",
    pricingDetails:
      "Free tier with 2GB storage. Standard $70/mo, Enterprise custom",
    featured: false,
    sponsored: false,
    features: [
      "Serverless vector search",
      "Low-latency queries",
      "Metadata filtering",
      "Namespaces",
      "Hybrid search",
      "Automatic scaling",
    ],
    alternatives: ["weaviate", "neon", "mindsdb"],
    addedDate: "2026-02-23",
  },

  // 49. Weaviate
  {
    name: "Weaviate",
    slug: "weaviate",
    description:
      "Open-source vector database for building AI-native applications. Weaviate provides vector and hybrid search with built-in ML model integration, making it easy to build semantic search, RAG, and recommendation systems.",
    shortDescription: "Open-source vector database with built-in ML integration",
    url: "https://weaviate.io",
    category: "data",
    subcategory: "Databases",
    tags: ["vector database", "open-source", "search", "rag", "embeddings", "self-hosted"],
    pricing: "freemium",
    pricingDetails:
      "Free sandbox. Serverless from $25/mo, Enterprise self-hosted custom",
    featured: false,
    sponsored: false,
    features: [
      "Vector + keyword hybrid search",
      "Built-in ML modules",
      "GraphQL API",
      "Multi-tenancy",
      "Open-source self-hosted",
      "Generative search",
    ],
    alternatives: ["pinecone", "neon", "mindsdb"],
    addedDate: "2026-02-23",
  },

  // 50. LangChain
  {
    name: "LangChain",
    slug: "langchain",
    description:
      "Open-source framework for building applications with large language models. LangChain provides composable tools for chains, agents, RAG, and memory management, with LangSmith for observability and LangGraph for workflows.",
    shortDescription: "Open-source framework for building LLM applications",
    url: "https://langchain.com",
    category: "coding",
    subcategory: "Developer Tools",
    tags: ["framework", "llm", "open-source", "rag", "agents", "developer tools"],
    pricing: "open-source",
    pricingDetails:
      "Free and open-source. LangSmith: Free tier, Plus $39/seat/mo, Enterprise custom",
    featured: false,
    sponsored: false,
    features: [
      "Chain composition",
      "Agent frameworks",
      "RAG tooling",
      "LangSmith observability",
      "LangGraph workflows",
      "100+ integrations",
    ],
    alternatives: ["hugging-face", "together-ai", "openai-api"],
    addedDate: "2026-02-23",
  },

  // ============================================
  // ADDITIONAL HIGH-VALUE TOOLS (to reach 50+)
  // ============================================

  // 51. Suno AI (already exists? let me check) — skip, already in data

  // Perplexity Pro context
  // Tavily already exists in data, skipping

  // Stability AI
  {
    name: "Stability AI",
    slug: "stability-ai",
    description:
      "The company behind Stable Diffusion, offering a suite of open-source and commercial generative AI models. Stability AI provides image, video, audio, and 3D generation through APIs and self-hosted deployment.",
    shortDescription: "Company behind Stable Diffusion with multi-modal AI models",
    url: "https://stability.ai",
    category: "image-generation",
    subcategory: "Art Generation",
    tags: ["image generation", "open-source", "stable diffusion", "api", "multi-modal"],
    pricing: "freemium",
    pricingDetails:
      "Free open-source models. API: Membership $20/mo with 6000 credits, Enterprise custom",
    featured: false,
    sponsored: false,
    features: [
      "Stable Diffusion models",
      "Image generation API",
      "Video generation",
      "Audio generation",
      "3D model generation",
      "Open-source weights",
    ],
    alternatives: ["midjourney", "dall-e", "leonardo-ai"],
    addedDate: "2026-02-23",
  },

  // Ollama — local LLM runner
  {
    name: "Ollama",
    slug: "ollama",
    description:
      "Open-source tool for running large language models locally on your machine. Ollama makes it easy to download, run, and manage LLMs like Llama, Mistral, and Gemma with a simple CLI and API.",
    shortDescription: "Run open-source LLMs locally with a simple CLI",
    url: "https://ollama.com",
    category: "coding",
    subcategory: "Developer Tools",
    tags: ["local ai", "open-source", "llm", "self-hosted", "cli", "privacy"],
    pricing: "open-source",
    pricingDetails: "Free and open-source. Run on your own hardware",
    featured: false,
    sponsored: false,
    features: [
      "One-command model download",
      "Local inference",
      "OpenAI-compatible API",
      "Model library",
      "GPU acceleration",
      "Customizable models",
    ],
    alternatives: ["llama", "together-ai", "groq"],
    addedDate: "2026-02-23",
  },

  // Composio — tool integration for AI agents
  {
    name: "Composio",
    slug: "composio",
    description:
      "Integration platform that connects AI agents and LLMs to 250+ external tools and services. Composio handles authentication, API calls, and tool execution for building capable AI agents.",
    shortDescription: "Tool integration platform for AI agents with 250+ services",
    url: "https://composio.dev",
    category: "automation",
    subcategory: "Integration",
    tags: ["ai agents", "integrations", "automation", "api", "tools", "developer"],
    pricing: "freemium",
    pricingDetails:
      "Free tier with limits. Growth $29/mo, Enterprise custom",
    featured: false,
    sponsored: false,
    features: [
      "250+ tool integrations",
      "Auth management",
      "LangChain/CrewAI support",
      "Custom actions",
      "Execution logs",
      "Multiple agent frameworks",
    ],
    alternatives: ["langchain", "n8n", "zapier-ai"],
    addedDate: "2026-02-23",
  },

  // CrewAI — multi-agent framework
  {
    name: "CrewAI",
    slug: "crewai",
    description:
      "Framework for orchestrating autonomous AI agents that collaborate on complex tasks. CrewAI lets developers define agent roles, tools, and workflows for multi-agent systems that work together.",
    shortDescription: "Multi-agent orchestration framework for collaborative AI",
    url: "https://crewai.com",
    category: "coding",
    subcategory: "Developer Tools",
    tags: ["ai agents", "multi-agent", "framework", "automation", "open-source", "orchestration"],
    pricing: "open-source",
    pricingDetails:
      "Free and open-source framework. CrewAI Enterprise for managed deployment",
    featured: false,
    sponsored: false,
    features: [
      "Multi-agent orchestration",
      "Role-based agents",
      "Tool integration",
      "Sequential & parallel tasks",
      "Memory & context",
      "Human-in-the-loop",
    ],
    alternatives: ["langchain", "manus", "composio"],
    addedDate: "2026-02-23",
  },

  // Cursor alternatives — Zed editor
  {
    name: "Zed",
    slug: "zed-editor",
    description:
      "High-performance code editor with built-in AI assistance and real-time collaboration. Zed is built in Rust for speed, offering AI code generation, inline editing, and multiplayer coding features.",
    shortDescription: "Fast Rust-based code editor with AI and collaboration",
    url: "https://zed.dev",
    category: "coding",
    subcategory: "Code Generation",
    tags: ["code editor", "ide", "fast", "collaboration", "ai coding", "rust"],
    pricing: "free",
    pricingDetails:
      "Free and open-source. AI features use bring-your-own API key",
    featured: false,
    sponsored: false,
    features: [
      "Rust-based performance",
      "AI code generation",
      "Real-time collaboration",
      "Inline AI edits",
      "Multi-language support",
      "Extension system",
    ],
    alternatives: ["cursor", "windsurf", "cline"],
    addedDate: "2026-02-23",
  },

  // Dify — LLM app development
  {
    name: "Dify",
    slug: "dify",
    description:
      "Open-source platform for building LLM-powered applications with visual workflows. Dify provides RAG pipelines, agent frameworks, prompt management, and observability for production AI applications.",
    shortDescription: "Open-source platform for building LLM applications",
    url: "https://dify.ai",
    category: "coding",
    subcategory: "Developer Tools",
    tags: ["llm", "open-source", "rag", "ai apps", "workflow", "developer platform"],
    pricing: "freemium",
    pricingDetails:
      "Free open-source self-host. Cloud: Sandbox free, Professional $59/mo, Team $159/mo",
    featured: false,
    sponsored: false,
    features: [
      "Visual workflow builder",
      "RAG pipeline",
      "Agent framework",
      "Prompt management",
      "Model management",
      "Observability",
    ],
    alternatives: ["langchain", "hugging-face", "together-ai"],
    addedDate: "2026-02-23",
  },

  // Poe — already exists, skip

  // Replicate — model hosting
  {
    name: "Replicate",
    slug: "replicate",
    description:
      "Cloud platform for running open-source AI models via API. Replicate makes it easy to deploy and scale ML models including Stable Diffusion, Llama, and thousands of community models with pay-per-use pricing.",
    shortDescription: "Run open-source AI models via API with pay-per-use",
    url: "https://replicate.com",
    category: "coding",
    subcategory: "Developer Tools",
    tags: ["model hosting", "api", "open-source models", "inference", "developer tools", "ml"],
    pricing: "paid",
    pricingDetails:
      "Pay-per-second compute. CPU $0.000225/sec, GPU from $0.000225/sec. Free for first predictions",
    featured: false,
    sponsored: false,
    features: [
      "Thousands of models",
      "Push custom models",
      "Auto-scaling",
      "API access",
      "Streaming output",
      "Community models",
    ],
    alternatives: ["hugging-face", "together-ai", "groq"],
    addedDate: "2026-02-23",
  },

  // Vercel AI SDK
  {
    name: "Vercel AI SDK",
    slug: "vercel-ai-sdk",
    description:
      "Open-source TypeScript toolkit for building AI-powered applications with React, Next.js, and other frameworks. The Vercel AI SDK provides streaming UI, model routing, and tool calling abstractions.",
    shortDescription: "TypeScript toolkit for building AI apps with React/Next.js",
    url: "https://sdk.vercel.ai",
    category: "coding",
    subcategory: "Developer Tools",
    tags: ["typescript", "react", "nextjs", "ai sdk", "open-source", "streaming"],
    pricing: "open-source",
    pricingDetails: "Free and open-source",
    featured: false,
    sponsored: false,
    features: [
      "Streaming UI components",
      "Multi-provider support",
      "Tool calling",
      "Generative UI",
      "Model routing",
      "TypeScript-first",
    ],
    alternatives: ["langchain", "openai-api", "anthropic-api"],
    addedDate: "2026-02-23",
  },

  // Supabase — AI/vector
  {
    name: "Supabase",
    slug: "supabase",
    description:
      "Open-source Firebase alternative with built-in pgvector for AI applications. Supabase provides a PostgreSQL database, authentication, storage, and vector embeddings for building AI-powered apps.",
    shortDescription: "Open-source backend with vector DB for AI applications",
    url: "https://supabase.com",
    category: "data",
    subcategory: "Databases",
    tags: ["database", "backend", "vector database", "open-source", "postgres", "auth"],
    pricing: "freemium",
    pricingDetails:
      "Free tier. Pro $25/mo, Team $599/mo, Enterprise custom",
    featured: false,
    sponsored: false,
    features: [
      "PostgreSQL database",
      "pgvector embeddings",
      "Auth & row-level security",
      "Edge Functions",
      "Realtime subscriptions",
      "File storage",
    ],
    alternatives: ["pinecone", "weaviate", "neon"],
    addedDate: "2026-02-23",
  },

  // ElevenLabs Reader — already have elevenlabs, skip

  // Typeface — enterprise content
  {
    name: "Typeface",
    slug: "typeface",
    description:
      "Enterprise AI content platform for generating on-brand marketing materials at scale. Typeface creates personalized content across text, images, and video while maintaining brand consistency and compliance.",
    shortDescription: "Enterprise AI for on-brand content generation at scale",
    url: "https://typeface.ai",
    category: "marketing",
    subcategory: "Content Creation",
    tags: ["enterprise", "content", "branding", "marketing", "personalization", "ai"],
    pricing: "paid",
    pricingDetails: "Custom enterprise pricing",
    featured: false,
    sponsored: false,
    features: [
      "Brand-consistent content",
      "Multi-format generation",
      "Brand hub",
      "Template system",
      "Compliance controls",
      "Enterprise security",
    ],
    alternatives: ["jasper", "copy-ai", "writesonic"],
    addedDate: "2026-02-23",
  },

  // Antigravity (Google's multi-agent AI IDE)
  {
    name: "Antigravity",
    slug: "antigravity",
    description:
      "Google's multi-agent AI development platform powered by Gemini 3 Pro. Antigravity coordinates multiple specialized agents (Manager, Writer, Critic, Tester) to handle complex coding tasks with built-in browser testing, workflow automation, and human-in-the-loop verification through Artifacts.",
    shortDescription: "Google's multi-agent AI IDE with in-browser testing",
    url: "https://antigravity.google.com",
    category: "coding",
    subcategory: "Code Generation",
    tags: ["coding", "ai ide", "multi-agent", "google", "gemini", "web development"],
    pricing: "freemium",
    pricingDetails:
      "Free tier with rate limits. Pro $20/mo, Ultra $249.99/mo. Pay-as-you-go $25 for 2,500 AI credits",
    featured: false,
    sponsored: false,
    features: [
      "Multi-agent coordination (Manager View)",
      "In-browser testing environment",
      "Workflows and automation rules",
      "Artifacts for code review",
      "Supports Gemini 3.1 Pro, Claude models, GPT-OSS",
      "Web-based IDE interface",
    ],
    alternatives: ["cursor", "windsurf", "claude-code", "codex-openai", "bolt-new", "lovable"],
    addedDate: "2026-04-01",
  },
];

