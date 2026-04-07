import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Claude vs Microsoft Copilot (2026): Which AI Assistant is Better?",
  description: "Compare Claude vs Microsoft Copilot side by side. Reasoning, writing, Office integration, pricing, and use cases to pick the right AI for your workflow.",
  keywords: ["Claude vs Copilot", "Copilot vs Claude", "Anthropic vs Microsoft AI", "best AI assistant 2026"],
  openGraph: {
    title: "Claude vs Microsoft Copilot: AI Assistant Comparison 2026",
    description: "Claude vs Copilot — reasoning power vs Microsoft 365 integration compared.",
    url: "https://aisotools.com/claude-vs-copilot",
    type: "article",
  },
  alternates: { canonical: "https://aisotools.com/claude-vs-copilot" },
};

export default function ClaudeVsCopilotPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-white">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/compare" className="hover:text-white">Compare</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Claude vs Copilot</span>
      </nav>

      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Claude vs Microsoft Copilot: Which AI Fits Your Workflow?</h1>
        <p className="text-xl text-gray-400 max-w-4xl">
          Anthropic's Claude excels at deep reasoning and writing, while Microsoft Copilot integrates AI directly into Office 365, Windows, and Edge. This comparison helps you decide which serves your needs better.
        </p>
        <div className="flex flex-wrap gap-2 mt-6">
          <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">Updated April 2026</span>
          <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">9 min read</span>
        </div>
      </header>

      <section className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-500/20 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-bold mb-3">⚡ Quick Answer</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          <strong>Claude</strong> wins for complex reasoning, writing quality, coding, and long document analysis.
          <strong> Copilot</strong> wins for Microsoft 365 integration, web search, image generation, and Windows ecosystem.
        </p>
        <p className="text-gray-400">
          Choose Claude for deep analytical work. Choose Copilot if you live in Microsoft's ecosystem and need AI in Office apps.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Side-by-Side Comparison</h2>
        <div className="space-y-4">
          {[
            { category: "Reasoning", a: "⭐ Best-in-class complex reasoning and analysis", b: "Good — GPT-4 powered, solid general reasoning", winner: "Claude" },
            { category: "Writing Quality", a: "⭐ Natural, nuanced — best for professional content", b: "Good — can feel generic or formulaic", winner: "Claude" },
            { category: "Office Integration", a: "None — standalone platform only", b: "⭐ Deep Word, Excel, PowerPoint, Outlook, Teams integration", winner: "Copilot" },
            { category: "Web Search", a: "Limited web access", b: "⭐ Built-in Bing search — real-time information", winner: "Copilot" },
            { category: "Image Generation", a: "None", b: "⭐ DALL-E 3 built-in for free", winner: "Copilot" },
            { category: "Coding", a: "⭐ Excellent — top-tier code generation and debugging", b: "Good — GitHub Copilot is separate product", winner: "Claude" },
            { category: "Context Window", a: "⭐ 200K tokens — handles very long documents", b: "Limited — shorter context in Copilot chat", winner: "Claude" },
            { category: "Free Tier", a: "Limited usage with Sonnet", b: "⭐ Generous free tier with GPT-4, DALL-E, search", winner: "Copilot" },
            { category: "Pricing", a: "Pro $20/mo", b: "Free, Pro $20/mo, M365 Copilot $30/user/mo", winner: "Copilot" },
            { category: "Privacy", a: "⭐ Strong data handling, Constitutional AI", b: "Microsoft data practices, enterprise compliance", winner: "Claude" },
            { category: "Instruction Following", a: "⭐ Best-in-class multi-step instruction following", b: "Good but less precise on complex prompts", winner: "Claude" },
          ].map((row) => (
            <div key={row.category} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold">{row.category}</h3>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  row.winner === "Claude" ? "bg-purple-500/20 text-purple-400" :
                  row.winner === "Copilot" ? "bg-blue-500/20 text-blue-400" :
                  "bg-gray-700 text-gray-400"
                }`}>
                  {`${row.winner} wins`}
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-purple-500/5 border border-purple-500/10 rounded-lg p-3">
                  <span className="text-purple-400 text-xs font-medium">Claude</span>
                  <p className="text-sm text-gray-300 mt-1">{row.a}</p>
                </div>
                <div className="bg-blue-500/5 border border-blue-500/10 rounded-lg p-3">
                  <span className="text-blue-400 text-xs font-medium">Copilot</span>
                  <p className="text-sm text-gray-300 mt-1">{row.b}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">When to Choose Each</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-purple-500/5 border border-purple-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">Choose Claude When...</h3>
            <ul className="space-y-3">
              {["Complex reasoning and analysis tasks", "Professional writing requiring nuance", "Code generation and debugging", "Processing long documents (200K tokens)", "Privacy-focused enterprise use"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-300"><span className="text-purple-400 mt-0.5">✓</span> {item}</li>
              ))}
            </ul>
            <Link href="/tool/claude" className="inline-block mt-6 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-lg font-medium transition">Try Claude →</Link>
          </div>
          <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Choose Copilot When...</h3>
            <ul className="space-y-3">
              {["You use Microsoft 365 daily (Word, Excel, Outlook)", "Real-time web search and current info needed", "Free image generation with DALL-E 3", "You want AI built into Windows", "Budget-conscious — generous free tier"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-300"><span className="text-blue-400 mt-0.5">✓</span> {item}</li>
              ))}
            </ul>
            <Link href="/tool/microsoft-copilot" className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition">Try Copilot →</Link>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            { q: "Is Claude smarter than Copilot?", a: "For reasoning, writing, and coding, Claude is more capable. Copilot's strength is integration — AI that lives inside your existing Microsoft workflow." },
            { q: "Is Microsoft Copilot free?", a: "Yes — Copilot offers a generous free tier with GPT-4, DALL-E 3, and Bing search. The M365 Copilot add-on ($30/user/mo) adds deep Office integration." },
            { q: "Can I use both?", a: "Absolutely. Many professionals use Claude for deep work (analysis, writing, coding) and Copilot for daily productivity within Microsoft apps." },
          ].map((faq) => (
            <div key={faq.q} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
              <p className="text-gray-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "Is Claude smarter than Copilot?", acceptedAnswer: { "@type": "Answer", text: "For reasoning, writing, and coding, Claude is more capable. Copilot's strength is integration with Microsoft apps." } },
          { "@type": "Question", name: "Is Microsoft Copilot free?", acceptedAnswer: { "@type": "Answer", text: "Yes — Copilot has a generous free tier with GPT-4, DALL-E 3, and Bing search." } },
          { "@type": "Question", name: "Can I use both?", acceptedAnswer: { "@type": "Answer", text: "Many professionals use Claude for deep work and Copilot for daily productivity within Microsoft apps." } },
        ],
      }) }} />

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Related Comparisons</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { href: "/chatgpt-vs-claude", title: "ChatGPT vs Claude", desc: "The two leading AI assistants compared." },
            { href: "/copilot-vs-chatgpt", title: "Copilot vs ChatGPT", desc: "Microsoft vs OpenAI's consumer products." },
            { href: "/claude-vs-gemini", title: "Claude vs Gemini", desc: "Anthropic vs Google AI showdown." },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/40 transition group">
              <h3 className="font-semibold group-hover:text-blue-400 transition mb-2">{link.title}</h3>
              <p className="text-gray-500 text-sm">{link.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Not Sure Which AI to Choose?</h2>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">Explore our full comparison hub to find the perfect AI tool.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/compare" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition">All Comparisons</Link>
          <Link href="/alternatives" className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition">View Alternatives →</Link>
        </div>
      </section>
    </div>
  );
}
