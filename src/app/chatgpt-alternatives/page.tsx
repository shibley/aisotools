import { tools } from "@/data/tools";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ChatGPT Alternatives: 15 Best AI Chatbots in 2026",
  description:
    "Discover the best ChatGPT alternatives including Claude, Gemini, Perplexity, Copilot, and more. Compare features, pricing, and find the perfect AI chatbot for your needs.",
  keywords: [
    "ChatGPT alternatives",
    "best AI chatbots",
    "AI chat assistants",
    "Claude vs ChatGPT",
    "Gemini AI",
    "free AI chatbots",
  ],
  openGraph: {
    title: "ChatGPT Alternatives: 15 Best AI Chatbots in 2026",
    description:
      "Compare the best ChatGPT alternatives. In-depth reviews of Claude, Gemini, Perplexity, Copilot, and 11 more AI chatbots.",
    url: "https://aisotools.com/chatgpt-alternatives",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/chatgpt-alternatives",
  },
};

interface ChatbotComparison {
  name: string;
  slug: string;
  description: string;
  pricing: string;
  pricingDetails: string;
  strengths: string[];
  weaknesses: string[];
  bestFor: string;
  features: string[];
}

const chatbots: ChatbotComparison[] = [
  {
    name: "Claude",
    slug: "claude",
    description: "Anthropic's AI assistant known for nuanced, thoughtful responses and strong reasoning capabilities.",
    pricing: "Freemium",
    pricingDetails: "Free tier, Pro $20/mo, Team $25/user/mo, Enterprise custom",
    strengths: [
      "200K+ token context window",
      "Superior reasoning and analysis",
      "Excellent at following complex instructions",
      "Strong coding capabilities",
      "Artifacts feature for interactive content",
    ],
    weaknesses: [
      "No image generation",
      "Slower response times on free tier",
      "Limited internet access compared to competitors",
    ],
    bestFor: "Complex analysis, long-form writing, coding projects, and detailed instructions",
    features: ["Document analysis", "Code generation", "Vision", "Artifacts", "Projects"],
  },
  {
    name: "Google Gemini",
    slug: "gemini",
    description: "Google's multimodal AI assistant with deep integration into Google Workspace and services.",
    pricing: "Freemium",
    pricingDetails: "Free tier, Advanced $19.99/mo (part of Google One AI Premium)",
    strengths: [
      "Deep Google Workspace integration",
      "Multimodal capabilities (text, image, video)",
      "Real-time information access",
      "Strong at research and fact-checking",
      "Native mobile apps",
    ],
    weaknesses: [
      "Less creative than ChatGPT",
      "Occasional inconsistencies in responses",
      "Advanced features require Google One subscription",
    ],
    bestFor: "Google Workspace users, research, real-time information needs",
    features: ["Google Workspace integration", "Multimodal input", "Real-time search", "Extensions", "Mobile apps"],
  },
  {
    name: "Perplexity AI",
    slug: "perplexity",
    description: "AI-powered search engine that combines LLM reasoning with real-time web search and source citations.",
    pricing: "Freemium",
    pricingDetails: "Free tier, Pro $20/mo",
    strengths: [
      "Excellent source citations",
      "Real-time web search",
      "Clean, focused interface",
      "Great for research",
      "Follow-up questions maintain context",
    ],
    weaknesses: [
      "Less conversational than ChatGPT",
      "Limited creative writing capabilities",
      "No image generation",
    ],
    bestFor: "Research, fact-checking, sourced answers, academic work",
    features: ["Web search integration", "Source citations", "Collections", "Pro search", "API access"],
  },
  {
    name: "Microsoft Copilot",
    slug: "microsoft-copilot",
    description: "Microsoft's AI assistant powered by GPT-4, integrated across Microsoft 365 and Windows.",
    pricing: "Freemium",
    pricingDetails: "Free tier, Pro $20/mo, Microsoft 365 Copilot $30/user/mo",
    strengths: [
      "Deep Microsoft ecosystem integration",
      "GPT-4 access on free tier",
      "Image generation with DALL-E 3",
      "Windows integration",
      "Office suite features",
    ],
    weaknesses: [
      "Conversation limits on free tier",
      "Less flexible than standalone ChatGPT",
      "Best features require Microsoft 365",
    ],
    bestFor: "Microsoft ecosystem users, Office productivity, Windows users",
    features: ["Microsoft 365 integration", "DALL-E 3", "GPT-4 access", "Windows integration", "Notebook mode"],
  },
  {
    name: "Meta AI (Llama)",
    slug: "meta-ai",
    description: "Meta's open-source AI models available through Meta.ai and WhatsApp integration.",
    pricing: "Free",
    pricingDetails: "Completely free",
    strengths: [
      "Completely free",
      "WhatsApp and Instagram integration",
      "Fast response times",
      "Image generation",
      "Open-source models",
    ],
    weaknesses: [
      "Limited context window",
      "Less sophisticated than paid alternatives",
      "Privacy concerns with Meta integration",
    ],
    bestFor: "Casual use, WhatsApp/Instagram users, budget-conscious users",
    features: ["WhatsApp integration", "Image generation", "Real-time info", "Voice input", "Free access"],
  },
  {
    name: "Mistral AI",
    slug: "mistral",
    description: "European AI company offering powerful open-source and commercial language models via chat interface.",
    pricing: "Freemium",
    pricingDetails: "Free tier, Pro €15/mo (~$16/mo)",
    strengths: [
      "Strong coding capabilities",
      "European privacy standards",
      "Competitive pricing",
      "Fast responses",
      "Open-source models available",
    ],
    weaknesses: [
      "Smaller ecosystem than competitors",
      "Limited integrations",
      "Less known brand",
    ],
    bestFor: "European users prioritizing privacy, developers, cost-effective AI access",
    features: ["Code generation", "Function calling", "JSON mode", "API access", "Open models"],
  },
  {
    name: "Poe",
    slug: "poe",
    description: "Quora's AI platform providing access to multiple AI models (ChatGPT, Claude, Gemini) in one interface.",
    pricing: "Freemium",
    pricingDetails: "Free tier, Poe Subscription $19.99/mo, $199.99/year",
    strengths: [
      "Access to multiple AI models",
      "Bot creation platform",
      "Cost-effective compared to multiple subscriptions",
      "Clean interface",
      "Mobile apps",
    ],
    weaknesses: [
      "Point-based system can be confusing",
      "Not all features of original models available",
      "Limited customization",
    ],
    bestFor: "Users wanting access to multiple AI models, bot creators, comparison shopping",
    features: ["Multi-model access", "Bot creation", "Mobile apps", "Point system", "Claude & GPT-4"],
  },
  {
    name: "You.com",
    slug: "you-com",
    description: "AI-powered search engine with chat interface, combining search results with AI responses.",
    pricing: "Freemium",
    pricingDetails: "Free tier, YouPro $9.99/mo, YouPro+ $19.99/mo",
    strengths: [
      "Integrated search and chat",
      "Research mode",
      "Lower pricing than competitors",
      "Code execution",
      "Multiple AI models",
    ],
    weaknesses: [
      "Interface can feel cluttered",
      "Less polished than major competitors",
      "Smaller user base",
    ],
    bestFor: "Research-heavy work, budget users, developers",
    features: ["AI search", "Research mode", "Code execution", "Multi-model", "YouImagine"],
  },
  {
    name: "Pi AI",
    slug: "pi-ai",
    description: "Personal AI assistant from Inflection AI, focused on conversational and empathetic interactions.",
    pricing: "Free",
    pricingDetails: "Completely free",
    strengths: [
      "Highly conversational",
      "Empathetic responses",
      "Voice chat capabilities",
      "Clean, simple interface",
      "Free unlimited access",
    ],
    weaknesses: [
      "Less powerful for technical tasks",
      "No coding capabilities",
      "Limited integrations",
    ],
    bestFor: "Casual conversations, personal support, voice chat, emotional intelligence",
    features: ["Voice chat", "Conversational AI", "Empathy-focused", "Mobile apps", "Free unlimited"],
  },
  {
    name: "Character.AI",
    slug: "character-ai",
    description: "AI platform for creating and chatting with AI characters for entertainment and roleplay.",
    pricing: "Freemium",
    pricingDetails: "Free tier, c.ai+ $9.99/mo",
    strengths: [
      "Character creation",
      "Roleplay capabilities",
      "Large community",
      "Entertainment focus",
      "Voice chat",
    ],
    weaknesses: [
      "Not suitable for serious work",
      "Can provide inconsistent information",
      "Limited productivity features",
    ],
    bestFor: "Entertainment, creative writing, roleplay, casual conversations",
    features: ["Character creation", "Roleplay", "Voice chat", "Community characters", "Image generation"],
  },
  {
    name: "HuggingChat",
    slug: "huggingchat",
    description: "Open-source AI chat interface from Hugging Face using various open-source models.",
    pricing: "Free",
    pricingDetails: "Completely free and open-source",
    strengths: [
      "Completely free",
      "Open-source",
      "Privacy-focused",
      "Multiple model options",
      "No account required",
    ],
    weaknesses: [
      "Less powerful than commercial models",
      "Can be slower",
      "Limited features",
    ],
    bestFor: "Privacy-conscious users, developers, open-source advocates",
    features: ["Open-source models", "Privacy-focused", "Web search", "No account needed", "Model selection"],
  },
  {
    name: "Chatsonic",
    slug: "chatsonic",
    description: "Writesonic's conversational AI with real-time web search and image generation capabilities.",
    pricing: "Freemium",
    pricingDetails: "Free trial, Unlimited $20/mo",
    strengths: [
      "Real-time web search",
      "Image generation",
      "Voice commands",
      "Chrome extension",
      "Brand voice",
    ],
    weaknesses: [
      "Usage limits on free tier",
      "Less known than major competitors",
      "Can be expensive for heavy use",
    ],
    bestFor: "Content creators, marketers, users needing current information",
    features: ["Web search", "Image generation", "Voice input", "Chrome extension", "API access"],
  },
  {
    name: "Khanmigo",
    slug: "khanmigo",
    description: "Khan Academy's AI tutor powered by GPT-4, designed specifically for education and learning.",
    pricing: "Paid",
    pricingDetails: "$9/mo (part of Khan Academy membership)",
    strengths: [
      "Education-focused",
      "Socratic teaching method",
      "Safe for students",
      "Curriculum aligned",
      "Trusted by educators",
    ],
    weaknesses: [
      "Limited to educational use",
      "Requires Khan Academy membership",
      "Not for general-purpose tasks",
    ],
    bestFor: "Students, teachers, parents, educational contexts",
    features: ["Socratic tutoring", "Homework help", "Curriculum support", "Safe for students", "Progress tracking"],
  },
  {
    name: "Bing Chat (deprecated - see Copilot)",
    slug: "bing-chat",
    description: "Microsoft's Bing Chat has been rebranded as Microsoft Copilot. See Copilot above for current features.",
    pricing: "Free",
    pricingDetails: "Redirects to Microsoft Copilot",
    strengths: ["Now part of Microsoft Copilot"],
    weaknesses: ["Deprecated"],
    bestFor: "Use Microsoft Copilot instead",
    features: ["Migrated to Copilot"],
  },
  {
    name: "ChatGPT",
    slug: "chatgpt",
    description: "OpenAI's flagship conversational AI assistant powered by GPT-4, the original that started it all.",
    pricing: "Freemium",
    pricingDetails: "Free tier, Plus $20/mo, Team $25/user/mo, Enterprise custom",
    strengths: [
      "Most widely used and tested",
      "Extensive plugin ecosystem",
      "Image generation (DALL-E)",
      "Code interpreter",
      "Custom GPTs",
      "Strong all-around performance",
    ],
    weaknesses: [
      "Can be at capacity during peak times",
      "Limited free tier access to GPT-4",
      "Knowledge cutoff date limitations",
    ],
    bestFor: "General-purpose use, writing, coding, creative projects, established workflows",
    features: ["GPT-4 access", "DALL-E 3", "Code interpreter", "Custom GPTs", "Plugins", "Vision"],
  },
];

export default function ChatGPTAlternativesPage() {
  // Get actual tool data where available
  const toolsBySlug = new Map(tools.map((t) => [t.slug, t]));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-white">
          Home
        </Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">ChatGPT Alternatives</span>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          ChatGPT Alternatives: 15 Best AI Chatbots in 2026
        </h1>
        <p className="text-xl text-gray-400 max-w-4xl">
          Looking for ChatGPT alternatives? Compare the best AI chatbots including Claude, Gemini,
          Perplexity, and more. Find the perfect AI assistant for your specific needs, whether
          it's coding, research, creative writing, or conversation.
        </p>
        <div className="flex flex-wrap gap-2 mt-6">
          <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
            Updated February 2026
          </span>
          <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
            15 AI Chatbots Compared
          </span>
        </div>
      </header>

      {/* Quick Navigation */}
      <section className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-12">
        <h2 className="text-lg font-semibold mb-3">Quick Navigation</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 text-sm">
          {chatbots.slice(0, 10).map((bot) => (
            <a
              key={bot.slug}
              href={`#${bot.slug}`}
              className="text-blue-400 hover:text-blue-300 transition"
            >
              {bot.name}
            </a>
          ))}
        </div>
      </section>

      {/* Introduction */}
      <section className="prose prose-invert max-w-none mb-16">
        <h2 className="text-3xl font-bold mb-4">Why Look for ChatGPT Alternatives?</h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-4">
          While ChatGPT pioneered mainstream AI chatbot adoption, it's not the only game in town
          anymore. Depending on your specific needs, you might find better options among the
          growing ecosystem of AI assistants.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed mb-4">
          Some alternatives excel at specific tasks: Claude offers superior reasoning for complex
          analysis, Perplexity provides better cited research, and Gemini integrates seamlessly
          with Google Workspace. Others offer unique features like Poe's multi-model access or
          Character.AI's entertainment focus.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed">
          This guide compares 15 top ChatGPT alternatives across features, pricing, strengths, and
          ideal use cases to help you find the right AI chatbot.
        </p>
      </section>

      {/* Comparison Table */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Quick Comparison Table</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-gray-900 border border-gray-800 rounded-xl">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">Chatbot</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Pricing</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Best For</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Key Feature</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {chatbots.slice(0, 14).map((bot) => (
                <tr key={bot.slug} className="hover:bg-gray-800/50 transition">
                  <td className="px-4 py-3">
                    <a href={`#${bot.slug}`} className="font-medium text-blue-400 hover:text-blue-300">
                      {bot.name}
                    </a>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-400">{bot.pricing}</td>
                  <td className="px-4 py-3 text-sm text-gray-400">{bot.bestFor.split(",")[0]}</td>
                  <td className="px-4 py-3 text-sm text-gray-400">{bot.strengths[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Detailed Reviews */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Detailed ChatGPT Alternatives Reviews</h2>
        <div className="space-y-12">
          {chatbots.map((bot, index) => {
            const toolData = toolsBySlug.get(bot.slug);
            return (
              <article
                key={bot.slug}
                id={bot.slug}
                className="bg-gray-900 border border-gray-800 rounded-xl p-8 scroll-mt-24"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      {index + 1}. {bot.name}
                    </h3>
                    <p className="text-gray-400">{bot.description}</p>
                  </div>
                  {toolData && (
                    <Link
                      href={`/tool/${bot.slug}`}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition shrink-0"
                    >
                      View Tool →
                    </Link>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  {/* Pricing */}
                  <div>
                    <h4 className="font-semibold text-gray-300 mb-2">💰 Pricing</h4>
                    <p className="text-gray-400 text-sm mb-1">{bot.pricing}</p>
                    <p className="text-gray-500 text-xs">{bot.pricingDetails}</p>
                  </div>

                  {/* Best For */}
                  <div>
                    <h4 className="font-semibold text-gray-300 mb-2">🎯 Best For</h4>
                    <p className="text-gray-400 text-sm">{bot.bestFor}</p>
                  </div>
                </div>

                {/* Strengths */}
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-300 mb-3">✅ Strengths</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {bot.strengths.map((strength, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start">
                        <span className="text-green-400 mr-2 mt-0.5">•</span>
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Weaknesses */}
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-300 mb-3">⚠️ Weaknesses</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {bot.weaknesses.map((weakness, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start">
                        <span className="text-red-400 mr-2 mt-0.5">•</span>
                        {weakness}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Features */}
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-300 mb-3">🔧 Key Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {bot.features.map((feature, i) => (
                      <span
                        key={i}
                        className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Use Case Guide */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Which ChatGPT Alternative Should You Choose?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Coding & Development</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Claude:</strong> Superior reasoning and code analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>ChatGPT:</strong> Proven track record, large community</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Mistral:</strong> Strong coding, budget-friendly</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Research & Fact-Checking</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Perplexity:</strong> Best citations and sources</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>You.com:</strong> Research mode with search integration</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Gemini:</strong> Real-time Google search access</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Content Creation</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>ChatGPT:</strong> Most versatile, proven content quality</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Claude:</strong> Excellent for long-form writing</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Chatsonic:</strong> Built-in image generation</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Budget-Conscious Users</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Meta AI:</strong> Completely free, WhatsApp integration</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>HuggingChat:</strong> Free and open-source</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>You.com:</strong> $9.99/mo, cheaper than most</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Google/Microsoft Users</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Gemini:</strong> Deep Google Workspace integration</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Copilot:</strong> Microsoft 365 and Windows integration</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Education</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Khanmigo:</strong> Purpose-built for learning</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Claude:</strong> Socratic teaching style</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Perplexity:</strong> Research with citations</span>
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
            <h3 className="text-lg font-semibold mb-2">Is there a completely free ChatGPT alternative?</h3>
            <p className="text-gray-400">
              Yes! Meta AI (Llama), HuggingChat, and Pi AI are completely free. Microsoft Copilot and
              Google Gemini also offer free tiers with GPT-4 and advanced model access respectively.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Which is better: Claude or ChatGPT?</h3>
            <p className="text-gray-400">
              It depends on your use case. Claude excels at reasoning, analysis, and following complex
              instructions with its 200K+ token context. ChatGPT has a larger plugin ecosystem, image
              generation, and is more versatile for general use. Many users subscribe to both for
              different tasks.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Can I use multiple AI chatbots?</h3>
            <p className="text-gray-400">
              Absolutely! Many power users subscribe to 2-3 different AI chatbots for different purposes.
              Alternatively, Poe provides access to multiple models (ChatGPT, Claude, Gemini) through one
              subscription for $19.99/mo.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Which ChatGPT alternative is best for coding?</h3>
            <p className="text-gray-400">
              Claude and ChatGPT are both excellent for coding. Claude offers superior reasoning for
              complex code analysis, while ChatGPT has a proven track record and larger community
              support. For budget-conscious developers, Mistral offers strong coding capabilities at
              lower cost.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Are ChatGPT alternatives as good as the original?</h3>
            <p className="text-gray-400">
              Many are better for specific tasks. Perplexity provides better research with citations,
              Claude offers superior reasoning, and Gemini has better real-time information access.
              ChatGPT remains the most versatile all-around option, but alternatives often excel in
              specialized areas.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Explore More AI Tools</h2>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Discover hundreds of AI tools across all categories — from writing assistants to video
          generators and coding tools.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Browse All Tools
          </Link>
          <Link
            href="/category/chatbots"
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            More Chatbots →
          </Link>
        </div>
      </section>
    </div>
  );
}
