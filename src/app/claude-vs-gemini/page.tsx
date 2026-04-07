import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Claude vs Gemini (2026): Which AI Assistant Should You Choose?",
  description: "Comprehensive comparison of Claude vs Gemini. Compare reasoning, coding, writing, context windows, pricing, and integrations to find the best AI for your needs.",
  keywords: ["Claude vs Gemini", "Gemini vs Claude", "best AI assistant 2026", "Anthropic vs Google AI", "AI comparison"],
  openGraph: {
    title: "Claude vs Gemini: Detailed AI Assistant Comparison 2026",
    description: "In-depth Claude vs Gemini comparison covering reasoning, coding, pricing, and real-world performance.",
    url: "https://aisotools.com/claude-vs-gemini",
    type: "article",
  },
  alternates: { canonical: "https://aisotools.com/claude-vs-gemini" },
};

export default function ClaudeVsGeminiPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-white">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/compare" className="hover:text-white">Compare</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Claude vs Gemini</span>
      </nav>

      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Claude vs Gemini: Which AI Assistant is Better in 2026?</h1>
        <p className="text-xl text-gray-400 max-w-4xl">
          Anthropic's Claude and Google's Gemini represent two of the most capable AI assistants available.
          This comparison covers reasoning, coding, writing, integrations, context windows, and pricing 
          to help you choose the right one.
        </p>
        <div className="flex flex-wrap gap-2 mt-6">
          <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">Updated April 2026</span>
          <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">12 min read</span>
        </div>
      </header>

      {/* Quick Answer */}
      <section className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-bold mb-3">⚡ Quick Answer</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          <strong>Claude</strong> wins for complex reasoning, coding, long-form writing, and handling detailed instructions.
          <strong> Gemini</strong> wins for Google Workspace integration, multimodal capabilities, real-time information, and value for Google ecosystem users.
        </p>
        <p className="text-gray-400">
          Choose Claude if you need deep analytical work. Choose Gemini if you live in Google's ecosystem and need real-time search.
        </p>
      </section>

      {/* Comparison Grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Side-by-Side Comparison</h2>
        <div className="space-y-4">
          {[
            { category: "Reasoning & Analysis", claude: "⭐ Superior — best-in-class for complex reasoning, logic, and multi-step analysis", gemini: "Good — improving with Gemini 2.0 but Claude leads", winner: "Claude" },
            { category: "Coding", claude: "⭐ Excellent — top-tier code generation, debugging, and refactoring", gemini: "Good — solid coding but less reliable for complex tasks", winner: "Claude" },
            { category: "Context Window", claude: "200K tokens — handles long documents well", gemini: "⭐ 2M tokens (1.5 Pro) — largest context window available", winner: "Gemini" },
            { category: "Writing Quality", claude: "⭐ Natural, nuanced writing with less 'AI voice'", gemini: "Decent but can be generic and formulaic", winner: "Claude" },
            { category: "Real-time Information", claude: "Limited — web search available but not the focus", gemini: "⭐ Excellent — deep Google Search integration", winner: "Gemini" },
            { category: "Multimodal Input", claude: "Images and documents (text + vision)", gemini: "⭐ Images, video, audio, code, documents — most multimodal", winner: "Gemini" },
            { category: "Image Generation", claude: "None", gemini: "⭐ Built-in via Imagen 3", winner: "Gemini" },
            { category: "Workspace Integration", claude: "Limited — API and Projects feature", gemini: "⭐ Deep Gmail, Docs, Sheets, Drive, Calendar integration", winner: "Gemini" },
            { category: "Free Tier", claude: "Limited usage with Sonnet", gemini: "Generous with Gemini 1.5 Flash", winner: "Gemini" },
            { category: "Pricing", claude: "Pro $20/mo, Team $25/user/mo", gemini: "Advanced $19.99/mo (Google One AI Premium)", winner: "Tie" },
            { category: "Privacy & Safety", claude: "⭐ Constitutional AI, strong safety focus", gemini: "Google data practices, more permissive", winner: "Claude" },
            { category: "Instruction Following", claude: "⭐ Best-in-class — follows complex, multi-part instructions precisely", gemini: "Good but less reliable on complex instructions", winner: "Claude" },
          ].map((row) => (
            <div key={row.category} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold">{row.category}</h3>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  row.winner === "Claude" ? "bg-purple-500/20 text-purple-400" :
                  row.winner === "Gemini" ? "bg-blue-500/20 text-blue-400" :
                  "bg-gray-700 text-gray-400"
                }`}>
                  {row.winner === "Tie" ? "Tie" : `${row.winner} wins`}
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-purple-500/5 border border-purple-500/10 rounded-lg p-3">
                  <span className="text-purple-400 text-xs font-medium">Claude</span>
                  <p className="text-sm text-gray-300 mt-1">{row.claude}</p>
                </div>
                <div className="bg-blue-500/5 border border-blue-500/10 rounded-lg p-3">
                  <span className="text-blue-400 text-xs font-medium">Gemini</span>
                  <p className="text-sm text-gray-300 mt-1">{row.gemini}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* When to choose each */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">When to Choose Each</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-purple-500/5 border border-purple-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">Choose Claude When...</h3>
            <ul className="space-y-3">
              {[
                "You need complex reasoning and analytical work",
                "Code generation, review, and debugging are priorities",
                "You value natural, high-quality writing output",
                "You work with detailed, multi-step instructions",
                "Privacy and safety are top concerns",
                "You're doing research or academic work",
                "You need to process long documents (up to 200K tokens)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-300">
                  <span className="text-purple-400 mt-0.5">✓</span> {item}
                </li>
              ))}
            </ul>
            <Link href="/tool/claude" className="inline-block mt-6 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-lg font-medium transition">Try Claude →</Link>
          </div>
          <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Choose Gemini When...</h3>
            <ul className="space-y-3">
              {[
                "You're deep in the Google ecosystem (Gmail, Docs, Sheets)",
                "You need real-time information and web search",
                "Multimodal input (video, audio, images) matters",
                "You want built-in image generation",
                "You need the largest context window (2M tokens)",
                "Budget is a factor — slightly cheaper with more Google features",
                "You want AI integrated into your existing Google workflow",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-300">
                  <span className="text-blue-400 mt-0.5">✓</span> {item}
                </li>
              ))}
            </ul>
            <Link href="/tool/gemini" className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition">Try Gemini →</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Is Claude smarter than Gemini?</h3>
            <p className="text-gray-400">For reasoning, coding, and following complex instructions, Claude consistently outperforms Gemini. Gemini has advantages in multimodal understanding and real-time information. "Smarter" depends on the task.</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Can I use both Claude and Gemini?</h3>
            <p className="text-gray-400">Absolutely — many professionals use both. Claude for deep work (coding, analysis, writing) and Gemini for Google-integrated tasks and quick research. Tools like Poe also let you access both through one subscription.</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Which has a better free tier?</h3>
            <p className="text-gray-400">Gemini's free tier is more generous, offering Gemini 1.5 Flash with decent capabilities. Claude's free tier limits usage more aggressively but gives access to the more capable Sonnet model.</p>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "Is Claude smarter than Gemini?", acceptedAnswer: { "@type": "Answer", text: "For reasoning, coding, and following complex instructions, Claude outperforms Gemini. Gemini has advantages in multimodal understanding and real-time information." } },
              { "@type": "Question", name: "Can I use both Claude and Gemini?", acceptedAnswer: { "@type": "Answer", text: "Absolutely — many professionals use both. Claude for deep work and Gemini for Google-integrated tasks and quick research." } },
              { "@type": "Question", name: "Which has a better free tier?", acceptedAnswer: { "@type": "Answer", text: "Gemini's free tier is more generous with Gemini 1.5 Flash. Claude's free tier limits usage more aggressively but gives access to the more capable Sonnet model." } },
            ],
          }),
        }}
      />

      {/* Related */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Related Comparisons</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/chatgpt-vs-claude" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/40 transition group">
            <h3 className="font-semibold group-hover:text-blue-400 transition mb-2">ChatGPT vs Claude</h3>
            <p className="text-gray-500 text-sm">The two leading AI assistants compared head-to-head.</p>
          </Link>
          <Link href="/chatgpt-vs-gemini" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/40 transition group">
            <h3 className="font-semibold group-hover:text-blue-400 transition mb-2">ChatGPT vs Gemini</h3>
            <p className="text-gray-500 text-sm">OpenAI vs Google — which is better for you?</p>
          </Link>
          <Link href="/perplexity-vs-chatgpt" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/40 transition group">
            <h3 className="font-semibold group-hover:text-blue-400 transition mb-2">Perplexity vs ChatGPT</h3>
            <p className="text-gray-500 text-sm">AI search vs AI chat — different approaches compared.</p>
          </Link>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Not Sure Which AI to Choose?</h2>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">Explore our full comparison hub to find the perfect AI tool for your needs.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/compare" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition">All Comparisons</Link>
          <Link href="/alternatives" className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition">View Alternatives →</Link>
        </div>
      </section>
    </div>
  );
}
