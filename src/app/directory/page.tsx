import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Tools Directory — Browse 300+ AI Tools by Category | AISO Tools",
  description:
    "Complete directory of 300+ AI tools organized by category. Find chatbots, image generators, writing assistants, video tools, code helpers, and more. Updated daily.",
  keywords: [
    "AI tools directory",
    "AI tools catalog",
    "AI tools list",
    "find AI tools",
    "AI software directory",
    "artificial intelligence tools",
  ],
  openGraph: {
    title: "AI Tools Directory — Browse 300+ AI Tools by Category",
    description:
      "Comprehensive directory of AI tools. Compare prices, features, and find the perfect AI tool for your needs.",
    url: "https://aisotools.com/directory",
    type: "website",
  },
  alternates: {
    canonical: "https://aisotools.com/directory",
  },
};

interface DirectoryCategory {
  name: string;
  slug: string;
  icon: string;
  description: string;
  toolCount: number;
  featured: string[];
  bgGradient: string;
}

const categories: DirectoryCategory[] = [
  {
    name: "AI Chatbots",
    slug: "chatbots",
    icon: "💬",
    description: "Conversational AI assistants for questions, writing, and problem-solving",
    toolCount: 24,
    featured: ["ChatGPT", "Claude", "Gemini", "Perplexity"],
    bgGradient: "from-blue-600/20 to-blue-800/20",
  },
  {
    name: "AI Image Generators",
    slug: "image-generation",
    icon: "🎨",
    description: "Create stunning images, art, and graphics with AI",
    toolCount: 32,
    featured: ["Midjourney", "DALL-E 3", "Stable Diffusion", "Leonardo.ai"],
    bgGradient: "from-purple-600/20 to-pink-600/20",
  },
  {
    name: "AI Writing Tools",
    slug: "writing",
    icon: "✍️",
    description: "Writing assistants, content generators, and grammar checkers",
    toolCount: 28,
    featured: ["Jasper", "Copy.ai", "Grammarly", "QuillBot"],
    bgGradient: "from-green-600/20 to-emerald-600/20",
  },
  {
    name: "AI Video Tools",
    slug: "video",
    icon: "🎬",
    description: "Video editing, generation, and enhancement with AI",
    toolCount: 19,
    featured: ["Runway", "Descript", "Synthesia", "CapCut"],
    bgGradient: "from-red-600/20 to-orange-600/20",
  },
  {
    name: "AI Code Assistants",
    slug: "code",
    icon: "💻",
    description: "Coding help, code completion, and programming assistance",
    toolCount: 16,
    featured: ["GitHub Copilot", "Cursor", "Codeium", "Replit AI"],
    bgGradient: "from-cyan-600/20 to-blue-600/20",
  },
  {
    name: "AI Audio & Voice",
    slug: "audio",
    icon: "🎙️",
    description: "Voice generation, transcription, and audio editing",
    toolCount: 15,
    featured: ["ElevenLabs", "Descript", "Otter.ai", "Murf"],
    bgGradient: "from-indigo-600/20 to-purple-600/20",
  },
  {
    name: "AI Design Tools",
    slug: "design",
    icon: "🎨",
    description: "Design assistance, logo creation, and UI/UX tools",
    toolCount: 21,
    featured: ["Canva AI", "Figma AI", "Uizard", "Galileo AI"],
    bgGradient: "from-pink-600/20 to-rose-600/20",
  },
  {
    name: "AI Productivity",
    slug: "productivity",
    icon: "📊",
    description: "Task management, note-taking, and workflow automation",
    toolCount: 18,
    featured: ["Notion AI", "Motion", "Taskade", "Mem"],
    bgGradient: "from-yellow-600/20 to-orange-600/20",
  },
  {
    name: "AI Marketing",
    slug: "marketing",
    icon: "📈",
    description: "Marketing automation, SEO, and social media tools",
    toolCount: 22,
    featured: ["Jasper", "Surfer SEO", "Buffer AI", "Simplified"],
    bgGradient: "from-blue-600/20 to-cyan-600/20",
  },
  {
    name: "AI Research",
    slug: "research",
    icon: "🔍",
    description: "Research assistants, data analysis, and information discovery",
    toolCount: 12,
    featured: ["Perplexity", "Elicit", "Consensus", "You.com"],
    bgGradient: "from-teal-600/20 to-green-600/20",
  },
  {
    name: "AI Sales & CRM",
    slug: "sales",
    icon: "💼",
    description: "Sales automation, lead generation, and customer relationship management",
    toolCount: 14,
    featured: ["HubSpot AI", "Apollo.ai", "Clay", "Instantly"],
    bgGradient: "from-green-600/20 to-lime-600/20",
  },
  {
    name: "AI Customer Support",
    slug: "customer-support",
    icon: "💬",
    description: "Chatbots, help desk automation, and customer service AI",
    toolCount: 11,
    featured: ["Intercom Fin", "Zendesk AI", "Ada", "Tidio"],
    bgGradient: "from-violet-600/20 to-purple-600/20",
  },
  {
    name: "AI Presentation",
    slug: "presentation",
    icon: "📊",
    description: "Presentation makers, slide generators, and deck design",
    toolCount: 9,
    featured: ["Gamma", "Beautiful.ai", "Tome", "Pitch"],
    bgGradient: "from-orange-600/20 to-red-600/20",
  },
  {
    name: "AI Education",
    slug: "education",
    icon: "📚",
    description: "Learning tools, tutoring, and educational AI",
    toolCount: 13,
    featured: ["Khanmigo", "Duolingo Max", "Quizlet AI", "Gradescope"],
    bgGradient: "from-blue-600/20 to-indigo-600/20",
  },
  {
    name: "AI Data Analysis",
    slug: "data",
    icon: "📊",
    description: "Data visualization, analytics, and business intelligence",
    toolCount: 10,
    featured: ["Julius", "Tableau AI", "DataRobot", "Obviously AI"],
    bgGradient: "from-cyan-600/20 to-teal-600/20",
  },
  {
    name: "AI SEO",
    slug: "seo",
    icon: "🔍",
    description: "SEO tools, content optimization, and keyword research",
    toolCount: 8,
    featured: ["Surfer SEO", "Frase", "MarketMuse", "Clearscope"],
    bgGradient: "from-emerald-600/20 to-green-600/20",
  },
];

const popularAlternatives = [
  { name: "ChatGPT Alternatives", slug: "chatgpt-alternatives", count: 15 },
  { name: "Midjourney Alternatives", slug: "midjourney-alternatives", count: 12 },
  { name: "Jasper Alternatives", slug: "jasper-alternatives", count: 10 },
  { name: "Notion AI Alternatives", slug: "notion-ai-alternatives", count: 8 },
];

const popularComparisons = [
  { name: "ChatGPT vs Claude", slug: "chatgpt-vs-claude" },
  { name: "Midjourney vs DALL-E", slug: "midjourney-vs-dalle" },
  { name: "Jasper vs Copy.ai", slug: "jasper-vs-copyai" },
  { name: "Runway vs Synthesia", slug: "runway-vs-synthesia" },
];

const useCases = [
  { name: "Best Free AI Tools", slug: "best-free-ai-tools", icon: "💯" },
  { name: "AI for Small Business", slug: "best-ai-tools-for-small-business", icon: "💼" },
  { name: "AI for Content Creation", slug: "best-ai-tools-for-content-creation", icon: "✍️" },
  { name: "AI for Developers", slug: "best-ai-tools-for-developers", icon: "💻" },
  { name: "AI for Marketing", slug: "best-ai-tools-for-marketing", icon: "📈" },
  { name: "AI for Students", slug: "best-ai-tools-for-students", icon: "📚" },
];

export default function DirectoryPage() {
  const totalTools = categories.reduce((sum, cat) => sum + cat.toolCount, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "AI Tools Directory",
            "description": "Complete directory of 300+ AI tools organized by category",
            "url": "https://aisotools.com/directory"
          })
        }}
      />

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-white">
          Home
        </Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Directory</span>
      </nav>

      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          AI Tools Directory
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-6">
          Browse {totalTools}+ AI tools organized by category. Find chatbots, image generators,
          writing assistants, video tools, and more. Compare features, pricing, and reviews.
        </p>
        
        {/* Search Placeholder */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search AI tools... (e.g., chatbot, image generator, video editor)"
              className="w-full bg-gray-900 border border-gray-800 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
              disabled
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium transition">
              Search
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-2">🔮 Search functionality coming soon</p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mt-6">
          <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
            {totalTools}+ Tools
          </span>
          <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
            {categories.length} Categories
          </span>
          <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
            Updated Daily
          </span>
        </div>
      </header>

      {/* Browse by Use Case */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Browse by Use Case</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {useCases.map((useCase) => (
            <Link
              key={useCase.slug}
              href={`/${useCase.slug}`}
              className="bg-gray-900 border border-gray-800 hover:border-blue-500/50 rounded-xl p-4 text-center transition group"
            >
              <div className="text-3xl mb-2">{useCase.icon}</div>
              <div className="text-sm font-medium group-hover:text-blue-400 transition">
                {useCase.name}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Category Grid */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="group"
            >
              <div className={`bg-gradient-to-br ${category.bgGradient} border border-gray-800 hover:border-gray-700 rounded-xl p-6 h-full transition`}>
                <div className="flex items-start justify-between mb-3">
                  <span className="text-4xl">{category.icon}</span>
                  <span className="bg-black/30 text-gray-300 px-3 py-1 rounded-full text-sm font-medium">
                    {category.toolCount} tools
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition">
                  {category.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {category.featured.slice(0, 3).map((tool) => (
                    <span
                      key={tool}
                      className="bg-black/20 text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="mt-4 text-blue-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  View all {category.toolCount} tools
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Alternatives */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Popular Alternatives</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {popularAlternatives.map((alt) => (
            <Link
              key={alt.slug}
              href={`/${alt.slug}`}
              className="bg-gray-900 border border-gray-800 hover:border-blue-500/50 rounded-xl p-5 transition group"
            >
              <h3 className="font-semibold mb-1 group-hover:text-blue-400 transition">
                {alt.name}
              </h3>
              <p className="text-sm text-gray-500">
                {alt.count} alternatives compared
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Comparisons */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Popular Comparisons</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {popularComparisons.map((comp) => (
            <Link
              key={comp.slug}
              href={`/compare/${comp.slug}`}
              className="bg-gray-900 border border-gray-800 hover:border-blue-500/50 rounded-xl p-5 transition group flex items-center justify-between"
            >
              <h3 className="font-semibold group-hover:text-blue-400 transition">
                {comp.name}
              </h3>
              <span className="text-blue-400 opacity-0 group-hover:opacity-100 transition">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Directory Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">{totalTools}+</div>
              <div className="text-gray-400 text-sm">AI Tools</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">{categories.length}</div>
              <div className="text-gray-400 text-sm">Categories</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">100+</div>
              <div className="text-gray-400 text-sm">Free Tools</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">Daily</div>
              <div className="text-gray-400 text-sm">Updates</div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">How to Use This Directory</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <div className="text-3xl mb-3">🔍</div>
            <h3 className="text-lg font-semibold mb-2">1. Browse Categories</h3>
            <p className="text-gray-400 text-sm">
              Explore tools organized by category. Each category includes detailed descriptions,
              features, and pricing information.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <div className="text-3xl mb-3">⚖️</div>
            <h3 className="text-lg font-semibold mb-2">2. Compare Options</h3>
            <p className="text-gray-400 text-sm">
              Read detailed comparisons between similar tools. See side-by-side feature comparisons,
              pricing, and user reviews.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <div className="text-3xl mb-3">✅</div>
            <h3 className="text-lg font-semibold mb-2">3. Find Your Tool</h3>
            <p className="text-gray-400 text-sm">
              Filter by use case, budget, and features. Click through to official sites or read our
              in-depth reviews before deciding.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">How many AI tools are in this directory?</h3>
            <p className="text-gray-400">
              We currently list {totalTools}+ AI tools across {categories.length} major categories,
              from chatbots and image generators to specialized tools for coding, marketing, and
              business automation. The directory is updated daily with new tools and reviews.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Are these tools free?</h3>
            <p className="text-gray-400">
              We list both free and paid AI tools. Each tool page clearly indicates pricing, including
              free tiers, trial options, and subscription costs. Check out our{" "}
              <Link href="/best-free-ai-tools" className="text-blue-400 hover:underline">
                Best Free AI Tools
              </Link>{" "}
              page for 40+ completely free options.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">How do you choose which tools to list?</h3>
            <p className="text-gray-400">
              We evaluate tools based on features, user reviews, pricing, reliability, and overall
              value. Tools must be actively maintained, have real users, and provide genuine utility.
              We prioritize tools that are accessible to individuals and small businesses.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Can I suggest a tool to add?</h3>
            <p className="text-gray-400">
              Yes! If you know of an AI tool that should be in our directory, please reach out. We're
              always looking to expand our coverage and help users discover new and useful AI tools.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Do you have affiliate relationships?</h3>
            <p className="text-gray-400">
              Some tool listings may include affiliate links, meaning we earn a commission if you sign
              up through our links (at no extra cost to you). This helps us maintain the directory and
              create detailed reviews. Our recommendations are always based on merit, not commissions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Start browsing our directory of {totalTools}+ AI tools. Whether you're looking for free
          options, business tools, or specialized AI assistants, we've got you covered.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/best-free-ai-tools"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            View Free Tools
          </Link>
          <Link
            href="/best-ai-tools-for-small-business"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Business Tools →
          </Link>
          <Link
            href="/chatgpt-alternatives"
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Chatbot Alternatives →
          </Link>
        </div>
      </section>
    </div>
  );
}
