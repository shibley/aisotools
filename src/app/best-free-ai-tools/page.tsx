import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Free AI Tools 2026 — 40+ Tools That Cost Nothing",
  description:
    "Discover 40+ completely free AI tools for chatbots, image generation, writing, video, code, audio, and productivity. No credit card required. Updated February 2026.",
  keywords: [
    "best free AI tools",
    "free AI tools",
    "free AI software",
    "no cost AI tools",
    "free ChatGPT alternatives",
    "free AI image generator",
    "free AI writing tools",
  ],
  openGraph: {
    title: "Best Free AI Tools 2026 — 40+ Tools That Cost Nothing",
    description:
      "Complete guide to 40+ genuinely free AI tools. Includes chatbots, image generators, writing assistants, video tools, code helpers, and more.",
    url: "https://aisotools.com/best-free-ai-tools",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/best-free-ai-tools",
  },
};

interface FreeTool {
  name: string;
  slug?: string;
  description: string;
  whatsFree: string;
  limitations: string;
  url: string;
  highlight?: boolean;
}

interface ToolCategory {
  category: string;
  icon: string;
  description: string;
  tools: FreeTool[];
}

const freeAITools: ToolCategory[] = [
  {
    category: "AI Chatbots",
    icon: "💬",
    description: "Conversational AI assistants for questions, writing, and problem-solving",
    tools: [
      {
        name: "ChatGPT Free",
        slug: "chatgpt",
        description: "OpenAI's flagship chatbot with GPT-4o mini access",
        whatsFree: "Unlimited messages with GPT-4o mini, basic features",
        limitations: "No GPT-4 access, limited during peak times, no plugins",
        url: "https://chat.openai.com",
        highlight: true,
      },
      {
        name: "Google Gemini",
        slug: "gemini",
        description: "Google's multimodal AI with Workspace integration",
        whatsFree: "Full Gemini Pro access, real-time search, Google integration",
        limitations: "Advanced features require Google One, limited file uploads",
        url: "https://gemini.google.com",
        highlight: true,
      },
      {
        name: "Claude Free",
        slug: "claude",
        description: "Anthropic's AI known for reasoning and long-context understanding",
        whatsFree: "Access to Claude 3.5 Sonnet, long context windows",
        limitations: "Message limits during peak times, slower responses",
        url: "https://claude.ai",
        highlight: true,
      },
      {
        name: "Microsoft Copilot",
        slug: "microsoft-copilot",
        description: "Microsoft's GPT-4 powered assistant",
        whatsFree: "GPT-4 access, DALL-E 3 image generation, Bing integration",
        limitations: "Conversation limits, best features need Microsoft 365",
        url: "https://copilot.microsoft.com",
      },
      {
        name: "HuggingChat",
        slug: "huggingchat",
        description: "Open-source chatbot from Hugging Face",
        whatsFree: "Completely free, multiple models, web search, no account needed",
        limitations: "Less powerful than commercial models, slower responses",
        url: "https://huggingface.co/chat",
      },
      {
        name: "Perplexity AI",
        slug: "perplexity",
        description: "AI search engine with cited sources",
        whatsFree: "Unlimited searches, source citations, follow-up questions",
        limitations: "Limited Pro searches, no file uploads on free tier",
        url: "https://perplexity.ai",
      },
      {
        name: "Meta AI",
        slug: "meta-ai",
        description: "Meta's Llama-powered assistant",
        whatsFree: "Completely free, WhatsApp/Instagram integration, image generation",
        limitations: "Privacy concerns, limited context, basic features",
        url: "https://meta.ai",
      },
      {
        name: "Pi AI",
        slug: "pi-ai",
        description: "Conversational AI focused on empathy",
        whatsFree: "Unlimited conversations, voice chat, mobile apps",
        limitations: "Not suitable for technical tasks, no coding",
        url: "https://pi.ai",
      },
    ],
  },
  {
    category: "AI Image Generation",
    icon: "🎨",
    description: "Create images, art, and graphics with AI",
    tools: [
      {
        name: "Craiyon",
        description: "Simple AI art generator (formerly DALL-E mini)",
        whatsFree: "Unlimited image generation, multiple styles",
        limitations: "Lower quality, ads, watermarks, slower generation",
        url: "https://craiyon.com",
        highlight: true,
      },
      {
        name: "Bing Image Creator",
        description: "Microsoft's DALL-E 3 powered generator",
        whatsFree: "15 boosts daily for fast generation, DALL-E 3 quality",
        limitations: "Slower after boosts used, content filters",
        url: "https://bing.com/create",
        highlight: true,
      },
      {
        name: "Leonardo.ai Free",
        description: "Professional AI image generator",
        whatsFree: "150 credits daily, multiple models, upscaling",
        limitations: "Credit system, some premium models restricted",
        url: "https://leonardo.ai",
      },
      {
        name: "Canva AI Free",
        description: "Design platform with AI image generation",
        whatsFree: "50 AI image generations, design templates, basic editing",
        limitations: "Limited AI credits, watermark on some features",
        url: "https://canva.com",
      },
      {
        name: "Playground AI",
        description: "Creative AI image generator",
        whatsFree: "100 images daily, multiple models, editing tools",
        limitations: "Daily limit, lower resolution on free tier",
        url: "https://playgroundai.com",
      },
      {
        name: "Ideogram",
        description: "AI image generator with text rendering",
        whatsFree: "100 prompts daily, text-in-image capability",
        limitations: "Daily limit, slow mode, public generation",
        url: "https://ideogram.ai",
      },
      {
        name: "Pixlr AI",
        description: "Photo editor with AI tools",
        whatsFree: "AI image generation, background removal, basic editing",
        limitations: "Ads, limited AI credits, watermarks",
        url: "https://pixlr.com",
      },
    ],
  },
  {
    category: "AI Writing & Content",
    icon: "✍️",
    description: "Writing assistance, grammar checking, and content generation",
    tools: [
      {
        name: "Grammarly Free",
        description: "Grammar and spelling checker",
        whatsFree: "Grammar checking, tone detection, basic suggestions",
        limitations: "No advanced suggestions, limited style guide",
        url: "https://grammarly.com",
        highlight: true,
      },
      {
        name: "QuillBot Free",
        description: "Paraphrasing and summarization tool",
        whatsFree: "125 words paraphrasing, basic summarizer, grammar check",
        limitations: "Word limits, limited modes, ads",
        url: "https://quillbot.com",
      },
      {
        name: "Rytr Free",
        description: "AI writing assistant",
        whatsFree: "10,000 characters per month, 40+ use cases, 30+ languages",
        limitations: "Monthly character limit, basic tone options",
        url: "https://rytr.me",
      },
      {
        name: "Copy.ai Free",
        description: "Marketing copy and content generator",
        whatsFree: "2,000 words monthly, 90+ templates, blog post wizard",
        limitations: "Monthly word limit, limited projects",
        url: "https://copy.ai",
      },
      {
        name: "Notion AI Trial",
        description: "AI writing assistant in Notion workspace",
        whatsFree: "Free trial (20 responses), then limited free AI responses",
        limitations: "Very limited on free plan after trial",
        url: "https://notion.so",
      },
      {
        name: "HemingwayApp",
        description: "Readability and clarity checker",
        whatsFree: "Completely free web version, readability analysis",
        limitations: "Desktop app costs $19.99 (one-time)",
        url: "https://hemingwayapp.com",
      },
    ],
  },
  {
    category: "AI Video Tools",
    icon: "🎬",
    description: "Video editing, generation, and enhancement with AI",
    tools: [
      {
        name: "CapCut",
        description: "Video editor with AI features",
        whatsFree: "AI video editing, auto-captions, background removal, effects",
        limitations: "Watermark on exports, limited cloud storage",
        url: "https://capcut.com",
        highlight: true,
      },
      {
        name: "Clipchamp",
        description: "Microsoft's video editor with AI tools",
        whatsFree: "AI video editing, templates, screen recording, 1080p export",
        limitations: "Limited stock media, watermark on some features",
        url: "https://clipchamp.com",
      },
      {
        name: "Pika Free",
        description: "Text-to-video AI generator",
        whatsFree: "30 credits monthly for video generation",
        limitations: "Monthly credit limit, watermark, public generations",
        url: "https://pika.art",
      },
      {
        name: "Runway Free",
        description: "AI video and image editing suite",
        whatsFree: "125 credits for AI video tools, image editing",
        limitations: "Credit system, watermarks, limited resolution",
        url: "https://runwayml.com",
      },
      {
        name: "Descript Free",
        description: "Video editor with transcription",
        whatsFree: "1 hour transcription monthly, basic editing, screen recording",
        limitations: "Monthly transcription limit, watermark, limited AI voices",
        url: "https://descript.com",
      },
    ],
  },
  {
    category: "AI Code Assistants",
    icon: "💻",
    description: "Coding help, code completion, and programming assistance",
    tools: [
      {
        name: "GitHub Copilot Free",
        description: "AI pair programmer from GitHub",
        whatsFree: "Free for students, teachers, and open-source maintainers",
        limitations: "Requires verification, not free for commercial use",
        url: "https://github.com/features/copilot",
        highlight: true,
      },
      {
        name: "Codeium",
        description: "Free AI code completion",
        whatsFree: "Completely free unlimited autocomplete, chat, 70+ languages",
        limitations: "None for individual developers",
        url: "https://codeium.com",
        highlight: true,
      },
      {
        name: "Continue.dev",
        description: "Open-source AI code assistant",
        whatsFree: "Completely free, works with VS Code, multiple models",
        limitations: "Requires API keys for some models, setup needed",
        url: "https://continue.dev",
      },
      {
        name: "Replit AI Free",
        description: "AI coding assistant in Replit IDE",
        whatsFree: "Basic AI suggestions, code explanation, debugging help",
        limitations: "Limited compared to paid tier, usage caps",
        url: "https://replit.com",
      },
      {
        name: "Tabnine Free",
        description: "AI code completion tool",
        whatsFree: "Basic code completion, short suggestions",
        limitations: "Limited context, no premium models, basic features only",
        url: "https://tabnine.com",
      },
      {
        name: "Cody Free",
        description: "AI coding assistant by Sourcegraph",
        whatsFree: "500 autocompletions/month, 20 chats/month",
        limitations: "Monthly limits, limited context",
        url: "https://sourcegraph.com/cody",
      },
    ],
  },
  {
    category: "AI Audio & Voice",
    icon: "🎙️",
    description: "Voice generation, transcription, and audio editing",
    tools: [
      {
        name: "ElevenLabs Free",
        description: "Realistic AI voice generation",
        whatsFree: "10,000 characters monthly, voice cloning, 30+ voices",
        limitations: "Monthly character limit, attribution required",
        url: "https://elevenlabs.io",
        highlight: true,
      },
      {
        name: "Otter.ai Free",
        description: "AI meeting transcription and notes",
        whatsFree: "300 monthly transcription minutes, live transcription, basic search",
        limitations: "Monthly minute limit, 30 min per conversation",
        url: "https://otter.ai",
      },
      {
        name: "Descript Free",
        description: "Audio/video editing with transcription",
        whatsFree: "1 hour transcription monthly, overdub (10 mins), basic editing",
        limitations: "Monthly limits, watermark on video exports",
        url: "https://descript.com",
      },
      {
        name: "Audacity",
        description: "Open-source audio editor with AI plugins",
        whatsFree: "Completely free, AI noise reduction, OpenVINO plugins",
        limitations: "Steeper learning curve, requires manual plugin setup",
        url: "https://audacityteam.org",
      },
      {
        name: "Krisp Free",
        description: "AI noise cancellation",
        whatsFree: "60 minutes daily noise cancellation, background blur",
        limitations: "Daily limit, meeting transcription only on paid",
        url: "https://krisp.ai",
      },
    ],
  },
  {
    category: "AI Productivity & Organization",
    icon: "📊",
    description: "Task management, note-taking, and workflow automation",
    tools: [
      {
        name: "Notion AI Free",
        description: "AI features in Notion workspace",
        whatsFree: "Limited AI responses after free trial",
        limitations: "Very limited free AI usage, trial only",
        url: "https://notion.so",
      },
      {
        name: "Taskade Free",
        description: "AI-powered task management and collaboration",
        whatsFree: "Unlimited tasks, AI assistant (limited), templates, collaboration",
        limitations: "AI usage limits, storage limits",
        url: "https://taskade.com",
        highlight: true,
      },
      {
        name: "Motion App Trial",
        description: "AI calendar and task manager",
        whatsFree: "7-day free trial of premium features",
        limitations: "Not truly free, trial only",
        url: "https://usemotion.com",
      },
      {
        name: "Mem Free",
        description: "AI note-taking app",
        whatsFree: "Basic note-taking, limited AI features",
        limitations: "Most AI features require paid plan",
        url: "https://mem.ai",
      },
      {
        name: "Reflect Notes Free",
        description: "Note-taking with AI features",
        whatsFree: "Free during beta, AI summaries, backlinking",
        limitations: "May become paid after beta",
        url: "https://reflect.app",
      },
    ],
  },
  {
    category: "AI Search & Research",
    icon: "🔍",
    description: "Enhanced search, research assistants, and information discovery",
    tools: [
      {
        name: "Perplexity AI",
        slug: "perplexity",
        description: "AI-powered answer engine with citations",
        whatsFree: "Unlimited searches, source citations, collections",
        limitations: "Limited Pro searches (GPT-4), no file uploads",
        url: "https://perplexity.ai",
        highlight: true,
      },
      {
        name: "You.com Free",
        description: "AI search engine with chat",
        whatsFree: "Unlimited searches, AI chat, code execution",
        limitations: "Limited advanced AI modes, ads",
        url: "https://you.com",
      },
      {
        name: "Phind",
        description: "AI search for developers",
        whatsFree: "Unlimited searches, code-focused answers",
        limitations: "Limited advanced models, search limits",
        url: "https://phind.com",
      },
    ],
  },
  {
    category: "AI Design & Presentation",
    icon: "🎨",
    description: "Design tools, presentation makers, and visual creation",
    tools: [
      {
        name: "Canva Free",
        description: "Design platform with AI features",
        whatsFree: "Templates, basic design tools, 50 AI image generations",
        limitations: "Limited templates, AI credit limits, watermarks",
        url: "https://canva.com",
        highlight: true,
      },
      {
        name: "Gamma AI",
        description: "AI presentation and document creator",
        whatsFree: "400 AI credits for presentations, docs, and webpages",
        limitations: "Credit system, watermark on free tier",
        url: "https://gamma.app",
      },
      {
        name: "Beautiful.ai Free",
        description: "AI-powered presentation maker",
        whatsFree: "Unlimited presentations, smart templates, basic export",
        limitations: "Limited templates, watermark, basic features",
        url: "https://beautiful.ai",
      },
      {
        name: "Tome",
        description: "AI storytelling and presentation tool",
        whatsFree: "500 AI credits, presentation generation",
        limitations: "Credit limits, watermark",
        url: "https://tome.app",
      },
    ],
  },
];

const comparisonData = [
  { tool: "ChatGPT Free", category: "Chatbot", limit: "Unlimited", quality: "⭐⭐⭐⭐", restrictions: "No GPT-4" },
  { tool: "Google Gemini", category: "Chatbot", limit: "Unlimited", quality: "⭐⭐⭐⭐⭐", restrictions: "Limited uploads" },
  { tool: "Claude Free", category: "Chatbot", limit: "Rate limited", quality: "⭐⭐⭐⭐⭐", restrictions: "Peak time limits" },
  { tool: "Bing Image Creator", category: "Image", limit: "15 boosts/day", quality: "⭐⭐⭐⭐⭐", restrictions: "Slower after boosts" },
  { tool: "Leonardo.ai", category: "Image", limit: "150 credits/day", quality: "⭐⭐⭐⭐", restrictions: "Some models locked" },
  { tool: "Codeium", category: "Code", limit: "Unlimited", quality: "⭐⭐⭐⭐", restrictions: "None" },
  { tool: "ElevenLabs Free", category: "Audio", limit: "10k chars/mo", quality: "⭐⭐⭐⭐⭐", restrictions: "Attribution needed" },
  { tool: "CapCut", category: "Video", limit: "Unlimited", quality: "⭐⭐⭐⭐", restrictions: "Watermark" },
  { tool: "Grammarly Free", category: "Writing", limit: "Unlimited", quality: "⭐⭐⭐⭐", restrictions: "Basic features" },
  { tool: "Perplexity AI", category: "Search", limit: "Unlimited", quality: "⭐⭐⭐⭐", restrictions: "Limited Pro searches" },
];

export default function BestFreeAIToolsPage() {
  const totalTools = freeAITools.reduce((sum, cat) => sum + cat.tools.length, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Best Free AI Tools 2026 — 40+ Tools That Cost Nothing",
            "description": "Comprehensive guide to 40+ completely free AI tools across all categories including chatbots, image generation, writing, video, code, audio, and productivity.",
            "author": {
              "@type": "Organization",
              "name": "AISO Tools"
            },
            "datePublished": "2026-02-01",
            "dateModified": "2026-02-01"
          })
        }}
      />

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-white">
          Home
        </Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Best Free AI Tools</span>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Best Free AI Tools 2026 — {totalTools}+ Tools That Cost Nothing
        </h1>
        <p className="text-xl text-gray-400 max-w-4xl">
          Discover {totalTools} genuinely free AI tools that require no credit card and offer
          powerful features. From chatbots to image generators, writing assistants to code helpers —
          all completely free to use.
        </p>
        <div className="flex flex-wrap gap-2 mt-6">
          <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
            💯 100% Free
          </span>
          <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
            Updated February 2026
          </span>
          <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
            {totalTools} Free Tools
          </span>
          <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
            No Credit Card Required
          </span>
        </div>
      </header>

      {/* Quick Category Navigation */}
      <section className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-12">
        <h2 className="text-lg font-semibold mb-4">Jump to Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3">
          {freeAITools.map((cat) => (
            <a
              key={cat.category}
              href={`#${cat.category.toLowerCase().replace(/\s+/g, "-")}`}
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-3 rounded-lg transition text-sm"
            >
              <span className="text-2xl">{cat.icon}</span>
              <div>
                <div className="font-medium">{cat.category}</div>
                <div className="text-xs text-gray-500">{cat.tools.length} tools</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Introduction */}
      <section className="prose prose-invert max-w-none mb-16">
        <h2 className="text-3xl font-bold mb-4">The Best Free AI Tools in 2026</h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-4">
          AI tools don't have to cost a fortune. While premium subscriptions offer additional features,
          many of the best AI tools provide robust free tiers that are perfect for individuals,
          students, hobbyists, and small projects.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed mb-4">
          This comprehensive guide covers <strong>{totalTools}+ completely free AI tools</strong> across
          eight major categories. Each tool offers genuine value without requiring a credit card,
          though some may have usage limits or feature restrictions.
        </p>
        <div className="bg-blue-600/10 border border-blue-500/20 rounded-xl p-6 mb-6">
          <h3 className="text-xl font-semibold mb-3 text-blue-400">What "Free" Means Here</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-start">
              <span className="text-green-400 mr-2 mt-1">✓</span>
              <span><strong>No credit card required</strong> — Sign up without payment info</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 mt-1">✓</span>
              <span><strong>Genuinely useful</strong> — Free tier provides real value, not just a trial</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2 mt-1">⚠</span>
              <span><strong>Some limitations</strong> — May include usage caps, watermarks, or feature restrictions</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2 mt-1">⚠</span>
              <span><strong>Free forever</strong> — Not time-limited trials (we note when tools are trial-only)</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Quick Comparison: Top 10 Free AI Tools</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-gray-900 border border-gray-800 rounded-xl">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">Tool</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Category</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Usage Limit</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Quality</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Main Restriction</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {comparisonData.map((item, i) => (
                <tr key={i} className="hover:bg-gray-800/50 transition">
                  <td className="px-4 py-3 font-medium">{item.tool}</td>
                  <td className="px-4 py-3 text-sm text-gray-400">{item.category}</td>
                  <td className="px-4 py-3 text-sm text-gray-400">{item.limit}</td>
                  <td className="px-4 py-3 text-sm">{item.quality}</td>
                  <td className="px-4 py-3 text-sm text-gray-400">{item.restrictions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Tool Categories */}
      {freeAITools.map((category) => (
        <section
          key={category.category}
          id={category.category.toLowerCase().replace(/\s+/g, "-")}
          className="mb-16 scroll-mt-24"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">{category.icon}</span>
            <div>
              <h2 className="text-3xl font-bold">{category.category}</h2>
              <p className="text-gray-400">{category.description}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {category.tools.map((tool) => (
              <article
                key={tool.name}
                className={`bg-gray-900 border rounded-xl p-6 hover:border-gray-700 transition ${
                  tool.highlight ? "border-blue-500/30 ring-1 ring-blue-500/20" : "border-gray-800"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold">{tool.name}</h3>
                  {tool.highlight && (
                    <span className="bg-blue-600/20 text-blue-400 text-xs px-2 py-1 rounded-full font-medium">
                      Top Pick
                    </span>
                  )}
                </div>

                <p className="text-gray-400 mb-4">{tool.description}</p>

                <div className="space-y-3 mb-4">
                  <div>
                    <h4 className="text-sm font-semibold text-green-400 mb-1">✓ What's Free</h4>
                    <p className="text-sm text-gray-400">{tool.whatsFree}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-yellow-400 mb-1">⚠ Limitations</h4>
                    <p className="text-sm text-gray-400">{tool.limitations}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center px-4 py-2 rounded-lg text-sm font-medium transition"
                  >
                    Try Free →
                  </a>
                  {tool.slug && (
                    <Link
                      href={`/tool/${tool.slug}`}
                      className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                    >
                      Details
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      {/* How to Choose */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">How to Choose the Best Free AI Tool</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Consider Your Use Case</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">→</span>
                <span><strong>Casual use?</strong> Any chatbot works (ChatGPT, Gemini, Claude)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">→</span>
                <span><strong>Professional work?</strong> Focus on quality over quantity</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">→</span>
                <span><strong>Learning/experimenting?</strong> Try multiple free options</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">→</span>
                <span><strong>Specific need?</strong> Use specialized tools over general ones</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Understand the Limitations</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2 mt-1">⚠</span>
                <span><strong>Usage caps</strong> — Daily/monthly limits on generation</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2 mt-1">⚠</span>
                <span><strong>Watermarks</strong> — Some tools add branding to outputs</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2 mt-1">⚠</span>
                <span><strong>Speed limits</strong> — Slower generation vs paid tiers</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2 mt-1">⚠</span>
                <span><strong>Feature restrictions</strong> — Advanced features locked</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Best Free-to-Paid Upgrade Paths</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">↗</span>
                <span><strong>ChatGPT:</strong> Free → Plus $20/mo (best all-rounder)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">↗</span>
                <span><strong>Claude:</strong> Free → Pro $20/mo (reasoning & analysis)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">↗</span>
                <span><strong>Codeium:</strong> Free forever for individuals (coding)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">↗</span>
                <span><strong>Leonardo.ai:</strong> Free → $12/mo (image generation)</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Maximize Free Tiers</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2 mt-1">💡</span>
                <span><strong>Use multiple tools</strong> — Combine free tiers across tools</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2 mt-1">💡</span>
                <span><strong>Time your usage</strong> — Daily limits reset, plan accordingly</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2 mt-1">💡</span>
                <span><strong>Refine prompts</strong> — Better prompts = fewer generations needed</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2 mt-1">💡</span>
                <span><strong>Check for student discounts</strong> — Many offer free education tiers</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-3">Are these AI tools really free forever?</h3>
            <p className="text-gray-400">
              Yes! All tools listed have permanent free tiers, not time-limited trials. However, free
              tiers typically include usage limits (daily/monthly caps) or feature restrictions. Tools
              marked as "trial only" are clearly noted. Most companies maintain free tiers to let users
              try the product before upgrading.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-3">Do I need a credit card to sign up?</h3>
            <p className="text-gray-400">
              No! None of these tools require a credit card for their free tier. You can sign up with
              just an email address (or sometimes a Google/GitHub account). Only if you decide to
              upgrade to a paid plan will payment information be required.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-3">What's the best free AI chatbot in 2026?</h3>
            <p className="text-gray-400">
              It depends on your needs: <strong>Google Gemini</strong> offers the most generous free
              tier with full Gemini Pro access. <strong>ChatGPT Free</strong> has the best
              general-purpose performance. <strong>Claude Free</strong> excels at reasoning and
              analysis. <strong>HuggingChat</strong> is completely free with no limits but lower
              quality. Try a few and see which fits your workflow best.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-3">Can I use free AI tools for commercial projects?</h3>
            <p className="text-gray-400">
              Most allow commercial use on free tiers, but check the specific tool's terms of service.
              Some (like ElevenLabs Free) require attribution for commercial projects. Others
              (like GitHub Copilot) require paid subscriptions for commercial use. When in doubt,
              review the terms or contact the company.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-3">How do free AI tools make money?</h3>
            <p className="text-gray-400">
              Free tiers are typically "freemium" models — they offer basic features for free to
              attract users, then earn revenue from those who upgrade to paid plans for more features,
              higher limits, or commercial use. Some also show ads (like Craiyon) or use free tier
              data to improve their models.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-3">Will free AI tools stay free?</h3>
            <p className="text-gray-400">
              While companies can change their pricing anytime, most established tools have maintained
              free tiers for years. Free tiers are essential for user acquisition in the competitive
              AI market. That said, free tier limits may become stricter over time as companies
              balance costs and revenue.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-3">What's the catch with free AI tools?</h3>
            <p className="text-gray-400">
              Common limitations include: <strong>usage caps</strong> (X generations per day/month),
              <strong>watermarks</strong> on outputs, <strong>slower processing</strong> vs paid tiers,
              <strong>queue priority</strong> (paid users go first), <strong>limited features</strong>
              (basic models only), and <strong>no commercial use rights</strong>. But for personal use,
              learning, or small projects, free tiers are excellent.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-3">Can I combine multiple free AI tools?</h3>
            <p className="text-gray-400">
              Absolutely! In fact, that's a smart strategy. Use ChatGPT for general writing, Perplexity
              for research, Codeium for coding, Leonardo.ai for images, and CapCut for video. By
              combining free tiers across specialized tools, you can build a powerful AI workflow
              without paying anything.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Explore More AI Tools</h2>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Looking for more powerful features? Check out our complete directory of AI tools,
          including premium options, alternatives, and detailed comparisons.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/directory"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Browse Full Directory
          </Link>
          <Link
            href="/chatgpt-alternatives"
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            ChatGPT Alternatives →
          </Link>
          <Link
            href="/best-ai-tools-for-small-business"
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            AI for Business →
          </Link>
        </div>
      </section>
    </div>
  );
}
