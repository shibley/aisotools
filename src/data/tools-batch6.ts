import { Tool } from "./tools";

export const toolsBatch6: Tool[] = [
  // ============================================
  // FRESH TOOLS — March 2026 Batch
  // ============================================

  // 1. Trupeer — AI Screen Recording & Video Documentation
  {
    name: "Trupeer",
    slug: "trupeer",
    description:
      "AI-powered screen recording tool that automatically transforms raw recordings into polished product videos and documentation. Trupeer generates professional scripts, voiceovers, zoom effects, and annotations from simple screen captures, with AI avatars and multi-language translation support.",
    shortDescription:
      "AI screen recording that auto-generates polished product videos and docs",
    url: "https://www.trupeer.ai",
    category: "video",
    subcategory: "Video Editing",
    tags: [
      "screen recording",
      "video editing",
      "documentation",
      "ai video",
      "product demo",
      "knowledge base",
    ],
    pricing: "freemium",
    pricingDetails:
      "Free trial (10 AI video mins). Pro $49/mo, Scale $249/mo, Enterprise custom",
    featured: false,
    sponsored: false,
    features: [
      "AI video generation from screen recordings",
      "Automated zoom effects and annotations",
      "AI avatar narration with custom personas",
      "Multi-language translation",
      "Knowledge base with AI video search",
      "Chrome extension for recording",
    ],
    alternatives: ["loom", "descript", "synthesia"],
    addedDate: "2026-03-18",
  },

  // 2. Granola — AI Meeting Notepad
  {
    name: "Granola",
    slug: "granola",
    description:
      "AI-powered meeting notepad that transcribes your meetings without bots and enhances the notes you write during calls. Granola works like Apple Notes but listens to your computer's audio directly, then uses AI to enrich your rough notes with full meeting context, action items, and summaries using customizable templates.",
    shortDescription:
      "AI notepad that transcribes meetings bot-free and enhances your notes",
    url: "https://www.granola.ai",
    category: "productivity",
    subcategory: "Note Taking",
    tags: [
      "meeting notes",
      "transcription",
      "note taking",
      "productivity",
      "ai assistant",
      "meetings",
    ],
    pricing: "freemium",
    pricingDetails:
      "Free (25 meetings/mo). Pro $18/mo ($14/mo annual). Business $35/seat/mo",
    featured: false,
    sponsored: false,
    features: [
      "Bot-free meeting transcription",
      "AI-enhanced note enrichment",
      "Customizable meeting templates",
      "Post-meeting AI chat for follow-ups",
      "Action item extraction",
      "Cross-platform support (no meeting bots)",
    ],
    alternatives: ["otter-ai", "fireflies-ai", "fathom"],
    addedDate: "2026-03-18",
  },

  // 3. Hume AI — Emotionally Intelligent Voice AI
  {
    name: "Hume AI",
    slug: "hume-ai",
    description:
      "The AI toolkit for voice and emotion. Hume AI builds emotionally intelligent voice models that can detect 600+ emotional and vocal characteristics, create custom voices from natural language descriptions, clone voices from seconds of audio, and deliver sub-250ms speech LLM latency. Used for content creation, customer service, and empathetic AI interactions.",
    shortDescription:
      "AI toolkit for emotionally intelligent voice creation and emotion detection",
    url: "https://www.hume.ai",
    category: "audio",
    subcategory: "Voice Cloning",
    tags: [
      "voice ai",
      "emotion detection",
      "voice cloning",
      "text-to-speech",
      "empathic ai",
      "voice creation",
    ],
    pricing: "freemium",
    pricingDetails:
      "Free to start with usage-based pricing. Enterprise plans available",
    featured: false,
    sponsored: false,
    features: [
      "Voice creation from natural language descriptions",
      "Instant voice cloning from audio samples",
      "600+ emotion and voice characteristic detection",
      "Cross-lingual voice in 100+ languages",
      "Acting instruction-guided delivery",
      "Sub-250ms speech LLM latency",
    ],
    alternatives: ["elevenlabs", "play-ht", "resemble-ai"],
    addedDate: "2026-03-18",
  },

  // 4. Dust — Custom AI Agents for Organizations
  {
    name: "Dust",
    slug: "dust",
    description:
      "The operating system for AI agents in organizations. Dust lets you deploy, orchestrate, and govern fleets of specialized AI agents that work alongside your team, safely connected to your company's knowledge and tools. Integrates with Slack, Google Drive, Notion, GitHub, Confluence and more with SOC 2 Type II compliance.",
    shortDescription:
      "Deploy and orchestrate custom AI agent fleets for your organization",
    url: "https://dust.tt",
    category: "business",
    subcategory: "Sales",
    tags: [
      "ai agents",
      "enterprise ai",
      "knowledge management",
      "team collaboration",
      "workflow automation",
      "data integration",
    ],
    pricing: "paid",
    pricingDetails:
      "Pro plan for small teams. Enterprise plan with custom pricing. 5,000+ organizations",
    featured: false,
    sponsored: false,
    features: [
      "No-code AI agent builder",
      "Company data connections (Slack, Drive, Notion, GitHub)",
      "Semantic search and data analysis tools",
      "SOC 2 Type II certified, GDPR compliant",
      "Fine-grained access control with Spaces",
      "Model-agnostic (works with multiple LLMs)",
    ],
    alternatives: ["chatgpt", "claude", "microsoft-copilot"],
    addedDate: "2026-03-18",
  },

  // 5. Docling — Open-Source Document Parser
  {
    name: "Docling",
    slug: "docling",
    description:
      "Open-source document processing library from IBM Research that parses diverse formats including PDF, DOCX, PPTX, XLSX, HTML, images, audio, and more. Docling provides advanced PDF understanding with page layout analysis, table structure recognition, code and formula extraction, and seamless integration with LangChain, LlamaIndex, CrewAI, and Haystack for RAG pipelines.",
    shortDescription:
      "IBM's open-source document parser for PDFs, DOCX, and 20+ formats",
    url: "https://github.com/docling-project/docling",
    category: "data",
    subcategory: "Data Analysis",
    tags: [
      "document parsing",
      "pdf",
      "open source",
      "rag",
      "data extraction",
      "ibm",
    ],
    pricing: "open-source",
    pricingDetails: "MIT licensed. Free and open-source",
    featured: false,
    sponsored: false,
    features: [
      "Parse PDF, DOCX, PPTX, XLSX, HTML, images, audio, and more",
      "Advanced PDF layout and table structure recognition",
      "OCR for scanned documents and images",
      "Export to Markdown, HTML, JSON, DocTags",
      "LangChain, LlamaIndex, CrewAI integrations",
      "Local execution for sensitive data / air-gapped environments",
    ],
    alternatives: ["unstructured", "llamaparse"],
    addedDate: "2026-03-18",
  },

  // 6. Genspark — AI Search & Agent Platform
  {
    name: "Genspark",
    slug: "genspark",
    description:
      "AI-powered search and agent platform that goes beyond chat to autonomously research, create content, build presentations, and automate workflows. Genspark generates Sparkpages (rich research reports), AI slides, spreadsheets, and can even make phone calls to verify information. Uses multiple LLMs and an orchestrator to break down complex tasks.",
    shortDescription:
      "AI search and agent platform with autonomous research and content creation",
    url: "https://www.genspark.ai",
    category: "search",
    subcategory: "AI Search",
    tags: [
      "ai search",
      "research",
      "ai agents",
      "presentations",
      "content creation",
      "automation",
    ],
    pricing: "freemium",
    pricingDetails:
      "Free tier (200 credits/day). Plus $19.99/mo, Pro $24.99/mo",
    featured: false,
    sponsored: false,
    features: [
      "Sparkpages — rich research reports with citations",
      "AI slide and spreadsheet generation",
      "Autonomous multi-step task execution",
      "Phone call agent for information verification",
      "Multiple LLM orchestration",
      "Scheduled workflow automation",
    ],
    alternatives: ["perplexity", "you-com", "kagi"],
    addedDate: "2026-03-18",
  },

  // 7. Fellou — Agentic AI Browser
  {
    name: "Fellou",
    slug: "fellou",
    description:
      "The world's first agentic AI browser that doesn't just display websites but actively takes actions on your behalf. Fellou automates complex multi-step web tasks including deep research, data entry, competitor analysis, and report generation. Built on the open-source Eko framework, it can handle logins, CAPTCHAs, and cross-platform workflows.",
    shortDescription:
      "Agentic AI browser that automates complex web tasks and deep research",
    url: "https://fellou.ai",
    category: "search",
    subcategory: "AI Search",
    tags: [
      "ai browser",
      "web automation",
      "research",
      "agentic ai",
      "deep search",
      "browser agent",
    ],
    pricing: "freemium",
    pricingDetails: "Free tier available. Premium plans with expanded capabilities",
    featured: false,
    sponsored: false,
    features: [
      "Autonomous multi-step web task execution",
      "Deep search across logged-in accounts",
      "Cross-platform workflow automation",
      "CAPTCHA and login handling",
      "Scheduled recurring task automation",
      "Open-source Eko 2.0 framework for custom agents",
    ],
    alternatives: ["perplexity", "arc-browser"],
    addedDate: "2026-03-18",
  },

  // 8. Wordware — AI Context Lab
  {
    name: "Wordware",
    slug: "wordware",
    description:
      "AI context lab building Sauna, an AI assistant designed for compounding context. Founded in San Francisco with $30M seed (largest in YC history) and the #1 Product Hunt launch of all time. Sauna learns your taste, detects hidden patterns, augments your brain's context, and works proactively to help you reclaim deep work time.",
    shortDescription:
      "AI context lab building Sauna — an assistant that compounds your knowledge",
    url: "https://www.wordware.ai",
    category: "productivity",
    subcategory: "Research",
    tags: [
      "ai assistant",
      "productivity",
      "context",
      "knowledge management",
      "deep work",
      "y combinator",
    ],
    pricing: "freemium",
    pricingDetails:
      "Free tier available. Paid plans for advanced features. $30M YC seed funded",
    featured: false,
    sponsored: false,
    features: [
      "Compounding context that learns your preferences",
      "Pattern detection across your work",
      "Proactive AI assistance",
      "Deep work optimization",
      "Brain context augmentation",
      "Natural language programming interface",
    ],
    alternatives: ["notion-ai", "mem", "obsidian-ai"],
    addedDate: "2026-03-18",
  },

  // 9. Mapify — AI Mind Map Summarizer
  {
    name: "Mapify",
    slug: "mapify",
    description:
      "AI mind map generator that summarizes YouTube videos, PDFs, documents, URLs, podcasts, and meeting recordings into structured mind maps in seconds. Powered by GPT, Gemini, and other top LLMs. Features one-click branch expansion, web-powered search enrichment, multi-format export (PPT, PDF, PNG, Markdown), and cross-platform access. Used by 5M+ learners.",
    shortDescription:
      "Turn YouTube, PDFs, and any content into AI-generated mind maps instantly",
    url: "https://mapify.so",
    category: "productivity",
    subcategory: "Summarization",
    tags: [
      "mind map",
      "summarization",
      "youtube",
      "pdf",
      "learning",
      "visualization",
    ],
    pricing: "freemium",
    pricingDetails: "Free tier available. Pro plans for advanced features",
    featured: false,
    sponsored: false,
    features: [
      "YouTube, PDF, URL, podcast to mind map",
      "AI-powered web search enrichment",
      "One-click branch expansion",
      "Multi-format export (PPT, PDF, PNG, SVG, Markdown)",
      "AI image generator for illustrations",
      "Cross-platform (Web, Mobile, Chrome Extension)",
    ],
    alternatives: ["napkin-ai", "notebooklm", "tome"],
    addedDate: "2026-03-18",
  },

  // 10. Dzine — AI Image & Video Studio
  {
    name: "Dzine",
    slug: "dzine",
    description:
      "All-in-one AI image and video studio (formerly Stylar AI) with 120+ visual effects and built-in top AI models. Dzine supports text-to-image, text-to-video, image-to-image, image-to-video generation, AI lip sync, face swap, virtual try-on, consistent character generation, and a chat-based editor. Trusted by 5M+ creators including professionals from major studios.",
    shortDescription:
      "All-in-one AI image and video studio with 120+ effects and top AI models",
    url: "https://www.dzine.ai",
    category: "image-generation",
    subcategory: "Art Generation",
    tags: [
      "image generation",
      "video generation",
      "ai art",
      "lip sync",
      "face swap",
      "design",
    ],
    pricing: "freemium",
    pricingDetails:
      "Free tier available. Paid subscription for all AI visual tools",
    featured: false,
    sponsored: false,
    features: [
      "Text-to-image and text-to-video generation",
      "AI lip sync and talking avatar",
      "120+ image effects and styles",
      "Chat-based image editor (no layers needed)",
      "Consistent character generation",
      "Virtual try-on and product photography",
    ],
    alternatives: ["midjourney", "leonardo-ai", "ideogram"],
    addedDate: "2026-03-18",
  },

  // 11. Jina AI — Search Embeddings & Reader API
  {
    name: "Jina AI",
    slug: "jina-ai",
    description:
      "Search AI foundation platform providing best-in-class embeddings, rerankers, web reader, deep search, and small language models. Jina Reader converts any URL into clean LLM-ready markdown, while their embedding and reranker APIs power multilingual and multimodal search. Includes ReaderLM-v2 for high-quality HTML-to-Markdown conversion.",
    shortDescription:
      "Search AI platform with embeddings, rerankers, web reader, and deep search",
    url: "https://jina.ai",
    category: "data",
    subcategory: "Data Analysis",
    tags: [
      "embeddings",
      "search",
      "web reader",
      "reranker",
      "api",
      "rag",
    ],
    pricing: "freemium",
    pricingDetails:
      "Free tier (100 RPM). Paid plans (500 RPM, 2M TPM). Premium and Enterprise available",
    featured: false,
    sponsored: false,
    features: [
      "Reader API — convert any URL to clean Markdown",
      "Best-in-class multilingual embeddings",
      "Reranker API for search result optimization",
      "ReaderLM-v2 for complex HTML parsing",
      "Deep search with multi-source aggregation",
      "Image captioning and link extraction",
    ],
    alternatives: ["exa-ai", "tavily"],
    addedDate: "2026-03-18",
  },

  // 12. Dia — AI-Powered Browser by Browser Company
  {
    name: "Dia",
    slug: "dia",
    description:
      "AI-native browser from The Browser Company (makers of Arc). Dia reimagines web browsing with built-in AI that can answer questions about what's currently on screen, assist with research, and provide contextual help without switching contexts. Features tab conversations, intelligent page understanding, and seamless integration of AI into everyday browsing.",
    shortDescription:
      "AI-native browser from Browser Company with contextual intelligence",
    url: "https://www.thebrowser.company",
    category: "search",
    subcategory: "AI Search",
    tags: [
      "ai browser",
      "web browsing",
      "contextual ai",
      "research",
      "tab conversations",
      "browser company",
    ],
    pricing: "free",
    pricingDetails: "Free to download and use",
    featured: false,
    sponsored: false,
    features: [
      "Tab conversations — ask questions about on-screen content",
      "Built-in AI without extensions or plugins",
      "Contextual page understanding",
      "Research assistance while browsing",
      "From the makers of Arc browser",
      "Weekly feature updates",
    ],
    alternatives: ["arc-browser", "fellou"],
    addedDate: "2026-03-18",
  },

  // 13. Bolt.new — AI Full-Stack App Builder
  {
    name: "Bolt.new",
    slug: "bolt-new",
    description:
      "The #1 professional vibe coding tool that lets you create full-stack applications and websites by chatting with AI. Bolt.new integrates frontier coding agents in a visual interface, handling projects 1,000x larger than before with built-in context management. Includes Bolt Cloud with hosting, databases, user authentication, SEO optimization, analytics, and custom domains.",
    shortDescription:
      "Create full-stack apps and websites by chatting with AI — the #1 vibe coding tool",
    url: "https://bolt.new",
    category: "coding",
    subcategory: "Code Generation",
    tags: [
      "app builder",
      "full stack",
      "vibe coding",
      "web development",
      "no code",
      "ai coding",
    ],
    pricing: "freemium",
    pricingDetails:
      "Free tier available. Paid plans for more usage and Bolt Cloud features",
    featured: false,
    sponsored: false,
    features: [
      "Chat-to-app full-stack generation",
      "98% less errors with auto-testing and refactoring",
      "Built-in hosting with custom domains",
      "Unlimited databases and user authentication",
      "SEO optimization built-in",
      "GitHub integration and one-click deploy",
    ],
    alternatives: ["lovable", "v0", "replit"],
    addedDate: "2026-03-18",
  },

  // 14. Mindgrasp — AI Learning Assistant
  {
    name: "Mindgrasp",
    slug: "mindgrasp",
    description:
      "AI learning assistant used by 5M+ students that turns lectures, videos, PDFs, and any study material into a complete science-backed learning system. Mindgrasp automatically generates structured notes, summaries, flashcards, quizzes, and provides a 24/7 AI tutor. Supports live lecture recording and processing of any uploaded content.",
    shortDescription:
      "AI study assistant turning lectures into notes, flashcards, quizzes, and an AI tutor",
    url: "https://mindgrasp.ai",
    category: "education",
    subcategory: "Study Aids",
    tags: [
      "education",
      "study",
      "flashcards",
      "notes",
      "ai tutor",
      "lectures",
    ],
    pricing: "freemium",
    pricingDetails:
      "Free study sessions available. Premium plans for unlimited access",
    featured: false,
    sponsored: false,
    features: [
      "Auto-generated notes from any material",
      "AI flashcard creation for active recall",
      "Quiz generation for self-testing",
      "24/7 AI tutor for explanations",
      "Live lecture recording and processing",
      "Multi-format upload (PDF, video, audio, links)",
    ],
    alternatives: ["quizlet-ai", "notebooklm", "scholarcy"],
    addedDate: "2026-03-18",
  },

  // 15. Saner AI — ADHD-Friendly AI Productivity Assistant
  {
    name: "Saner AI",
    slug: "saner-ai",
    description:
      "The first ADHD-friendly AI personal assistant that unifies notes, email, and calendar into one conversational interface. Just chat to search notes, manage emails, and schedule tasks. Saner proactively plans your day and checks in to help you stay on top of everything, designed specifically for people who struggle with executive function and task management.",
    shortDescription:
      "ADHD-friendly AI assistant for notes, email, and calendar in one chat",
    url: "https://www.saner.ai",
    category: "productivity",
    subcategory: "Task Management",
    tags: [
      "adhd",
      "productivity",
      "email",
      "calendar",
      "task management",
      "ai assistant",
    ],
    pricing: "freemium",
    pricingDetails: "Free plan available. Premium $8/mo. Early user discounts",
    featured: false,
    sponsored: false,
    features: [
      "Conversational note search and management",
      "AI email management and drafting",
      "Smart calendar scheduling and planning",
      "Proactive daily planning and check-ins",
      "ADHD-optimized workflow design",
      "Unified inbox for notes, email, and tasks",
    ],
    alternatives: ["notion-ai", "reclaim-ai", "motion"],
    addedDate: "2026-03-18",
  },

  // 16. Voicenotes — AI Voice Note-Taker & Meetings
  {
    name: "Voicenotes",
    slug: "voicenotes",
    description:
      "Intelligent voice note-taker that transcribes voice notes and meetings in 100+ languages. Voicenotes captures spoken ideas instantly and converts them into organized, searchable text. Works for both personal voice memos and team meetings with scalable pricing from individual to enterprise use.",
    shortDescription:
      "AI voice note-taker and meeting transcriber in 100+ languages",
    url: "https://voicenotes.com",
    category: "productivity",
    subcategory: "Note Taking",
    tags: [
      "voice notes",
      "transcription",
      "meetings",
      "note taking",
      "multilingual",
      "recording",
    ],
    pricing: "freemium",
    pricingDetails:
      "Free tier available. Teams start at $49 for 10,000 minutes. Unlimited individual plans available",
    featured: false,
    sponsored: false,
    features: [
      "Voice-to-text transcription in 100+ languages",
      "AI-powered note organization and search",
      "Meeting recording and transcription",
      "Auto-tagging and trigger actions",
      "Cross-platform mobile and web access",
      "Scalable team and enterprise plans",
    ],
    alternatives: ["otter-ai", "granola", "fireflies-ai"],
    addedDate: "2026-03-18",
  },

  // 17. OpenRouter — Unified LLM API Gateway
  {
    name: "OpenRouter",
    slug: "openrouter",
    description:
      "The unified interface for LLMs. OpenRouter provides a single API to access 290+ AI models including Claude, GPT, Gemini, DeepSeek, Llama, Mistral, and more with per-token pricing from each provider. Find the best models and prices for your prompts, compare performance, and switch between providers without changing your code.",
    shortDescription:
      "Unified API gateway for 290+ AI models — Claude, GPT, Gemini, DeepSeek, and more",
    url: "https://openrouter.ai",
    category: "coding",
    subcategory: "Code Generation",
    tags: [
      "llm api",
      "model gateway",
      "ai models",
      "developer tools",
      "api",
      "unified api",
    ],
    pricing: "freemium",
    pricingDetails:
      "Pay-as-you-go with provider pricing passthrough. Free models available. BYOK supported",
    featured: false,
    sponsored: false,
    features: [
      "Access 290+ AI models via single API",
      "Provider pricing passthrough (no markup)",
      "Bring your own API keys (BYOK)",
      "Model comparison and benchmarking",
      "Automatic fallback between providers",
      "Usage analytics and cost tracking",
    ],
    alternatives: ["together-ai", "replicate", "groq"],
    addedDate: "2026-03-18",
  },

  // 18. Browser Use — Open-Source AI Browser Automation
  {
    name: "Browser Use",
    slug: "browser-use",
    description:
      "Open-source framework for building AI web agents that can extract data, automate tasks, test websites, and monitor changes using natural language instructions. Browser Use enables LLMs to interact with real web pages, fill forms, click buttons, and navigate complex multi-step workflows programmatically via Python.",
    shortDescription:
      "Open-source AI browser automation — extract, automate, test, and monitor the web",
    url: "https://browser-use.com",
    category: "automation",
    subcategory: "Workflow Automation",
    tags: [
      "browser automation",
      "web agents",
      "open source",
      "testing",
      "scraping",
      "python",
    ],
    pricing: "open-source",
    pricingDetails:
      "Open-source and free. Cloud/managed plans available for enterprise",
    featured: false,
    sponsored: false,
    features: [
      "Natural language web task automation",
      "LLM-powered browser interaction",
      "Data extraction from any website",
      "Automated web testing and monitoring",
      "Python SDK for custom agent building",
      "Multi-step workflow orchestration",
    ],
    alternatives: ["composio", "bardeen", "make-com"],
    addedDate: "2026-03-18",
  },
];
