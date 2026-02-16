import { tools } from "@/data/tools";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grammarly Alternatives: 10 Best AI Writing Assistants 2026",
  description:
    "Discover the best Grammarly alternatives including Hemingway, ProWritingAid, Wordtune, QuillBot, and more. Compare features, pricing, and find the perfect AI writing assistant for your needs.",
  keywords: [
    "Grammarly alternatives",
    "best AI writing assistants",
    "grammar checker",
    "ProWritingAid vs Grammarly",
    "Hemingway Editor",
    "free grammar checker",
  ],
  openGraph: {
    title: "Grammarly Alternatives: 10 Best AI Writing Assistants 2026",
    description:
      "Compare the best Grammarly alternatives. In-depth reviews of Hemingway, ProWritingAid, Wordtune, QuillBot, and 6 more AI writing assistants.",
    url: "https://aisotools.com/grammarly-alternatives",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/grammarly-alternatives",
  },
};

interface WritingToolComparison {
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

const writingTools: WritingToolComparison[] = [
  {
    name: "ProWritingAid",
    slug: "prowritingaid",
    description: "Comprehensive writing assistant combining grammar checking, style improvement, and in-depth reports for serious writers.",
    pricing: "Freemium",
    pricingDetails: "Free (500 words), Premium $10/mo, Premium Pro $12/mo, Lifetime $399",
    strengths: [
      "20+ detailed writing reports",
      "Deep style and readability analysis",
      "Integration with Scrivener, Word, Google Docs",
      "Excellent for long-form content",
      "Strong contextual thesaurus",
      "Lifetime license available",
    ],
    weaknesses: [
      "Can be overwhelming for beginners",
      "Free version very limited",
      "Interface not as polished as Grammarly",
    ],
    bestFor: "Novelists, academic writers, long-form content creators, serious authors",
    features: ["Grammar checking", "Style reports", "Plagiarism checker", "Scrivener integration", "Readability scores"],
  },
  {
    name: "Hemingway Editor",
    slug: "hemingway",
    description: "Minimalist writing tool focused on clarity and readability by highlighting complex sentences and suggesting simpler alternatives.",
    pricing: "Freemium",
    pricingDetails: "Web version free, Desktop app $19.99 one-time",
    strengths: [
      "Simple, distraction-free interface",
      "Excellent readability analysis",
      "Color-coded complexity indicators",
      "One-time purchase for desktop",
      "No subscription required",
      "Great for clear, concise writing",
    ],
    weaknesses: [
      "Limited grammar checking",
      "No plagiarism detection",
      "Fewer features than competitors",
    ],
    bestFor: "Bloggers, journalists, anyone prioritizing clarity and simple prose",
    features: ["Readability analysis", "Sentence simplification", "Adverb detection", "Passive voice highlighting", "Export options"],
  },
  {
    name: "Wordtune",
    slug: "wordtune",
    description: "AI-powered rewriting tool that offers multiple ways to rephrase sentences for better clarity, tone, and impact.",
    pricing: "Freemium",
    pricingDetails: "Free (10 rewrites/day), Plus $9.99/mo, Unlimited $14.99/mo, Business $19.99/user/mo",
    strengths: [
      "Excellent AI rewriting suggestions",
      "Multiple tone options (casual/formal)",
      "Chrome extension",
      "Expands/shortens text intelligently",
      "Real-time rewriting",
      "Works across most platforms",
    ],
    weaknesses: [
      "Free tier very limited",
      "Not as comprehensive for grammar",
      "Can encourage over-editing",
    ],
    bestFor: "Non-native English speakers, business communications, email writing",
    features: ["AI rewriting", "Tone adjustment", "Text expansion", "Chrome extension", "Real-time suggestions"],
  },
  {
    name: "QuillBot",
    slug: "quillbot",
    description: "AI paraphrasing tool with grammar checking, summarization, and citation generation for students and writers.",
    pricing: "Freemium",
    pricingDetails: "Free (125 words), Premium $8.33/mo (annual), $19.95/mo (monthly)",
    strengths: [
      "Powerful paraphrasing engine",
      "Multiple writing modes",
      "Summarizer tool included",
      "Citation generator",
      "Competitive pricing",
      "Co-Writer mode for composition",
    ],
    weaknesses: [
      "Free version heavily limited",
      "Can sometimes change meaning",
      "Less comprehensive than Grammarly",
    ],
    bestFor: "Students, academic writing, paraphrasing, content repurposing",
    features: ["Paraphrasing", "Grammar checker", "Summarizer", "Citation generator", "Co-Writer"],
  },
  {
    name: "LanguageTool",
    slug: "languagetool",
    description: "Multilingual grammar and style checker supporting 30+ languages with strong privacy focus and open-source core.",
    pricing: "Freemium",
    pricingDetails: "Free (10K chars), Premium €4.99/mo (~$5.50), Team €7.50/user/mo",
    strengths: [
      "Supports 30+ languages",
      "Open-source foundation",
      "Strong privacy protections",
      "Browser extensions",
      "Affordable pricing",
      "Self-hosting option available",
    ],
    weaknesses: [
      "Not as sophisticated as Grammarly in English",
      "Fewer integrations",
      "Basic UI design",
    ],
    bestFor: "Multilingual writers, privacy-conscious users, European languages",
    features: ["30+ languages", "Grammar checking", "Style suggestions", "Browser extensions", "Privacy-focused"],
  },
  {
    name: "Ginger Software",
    slug: "ginger",
    description: "AI writing assistant with grammar checking, sentence rephrasing, and text-to-speech for language learners.",
    pricing: "Freemium",
    pricingDetails: "Free (limited), Premium $12.48/mo (annual), $20.97/mo (monthly)",
    strengths: [
      "Text-to-speech feature",
      "Personal trainer for English learning",
      "Sentence rephrase suggestions",
      "Translation feature (40+ languages)",
      "Works offline (desktop)",
      "Mobile keyboard app",
    ],
    weaknesses: [
      "Interface feels dated",
      "Free version very restrictive",
      "Less accurate than top competitors",
    ],
    bestFor: "ESL students, language learners, mobile writing",
    features: ["Grammar checker", "Sentence rephraser", "Text-to-speech", "Translation", "Mobile keyboard"],
  },
  {
    name: "WhiteSmoke",
    slug: "whitesmoke",
    description: "Writing enhancement software with grammar checking, style suggestions, and translation capabilities.",
    pricing: "Paid",
    pricingDetails: "Web $5/mo, Premium $6.66/mo, Business $11.50/mo (annual plans)",
    strengths: [
      "Affordable pricing",
      "Templates for documents",
      "Translation feature",
      "Plagiarism checker (Premium+)",
      "Video tutorials",
      "Mobile apps available",
    ],
    weaknesses: [
      "Older interface design",
      "Less advanced AI than competitors",
      "Limited browser integration",
    ],
    bestFor: "Budget-conscious users, business writing, basic grammar needs",
    features: ["Grammar checker", "Style checker", "Plagiarism detection", "Translation", "Templates"],
  },
  {
    name: "Sapling",
    slug: "sapling",
    description: "AI writing assistant built for customer-facing teams with autocomplete and quality suggestions for professional communications.",
    pricing: "Freemium",
    pricingDetails: "Free (individual), Pro $25/user/mo, Enterprise custom",
    strengths: [
      "Team collaboration features",
      "Autocomplete predictions",
      "CRM integration (Salesforce, Zendesk)",
      "Response quality scoring",
      "Team snippets and macros",
      "Analytics dashboard",
    ],
    weaknesses: [
      "Expensive for individuals",
      "Overkill for personal writing",
      "Limited free tier",
    ],
    bestFor: "Customer support teams, sales professionals, business communications",
    features: ["AI autocomplete", "CRM integration", "Team snippets", "Quality scoring", "Analytics"],
  },
  {
    name: "Writer",
    slug: "writer-ai",
    description: "Enterprise-grade AI writing platform with brand voice customization and content governance for teams.",
    pricing: "Paid",
    pricingDetails: "Team $18/user/mo, Enterprise custom pricing",
    strengths: [
      "Brand voice customization",
      "Style guide enforcement",
      "Team collaboration",
      "Compliance and governance",
      "API access",
      "Enterprise security",
    ],
    weaknesses: [
      "No free tier",
      "Expensive for individuals",
      "Requires team adoption for full value",
    ],
    bestFor: "Enterprises, marketing teams, brand consistency, regulated industries",
    features: ["Brand voice", "Style guides", "Compliance", "Team tools", "API access"],
  },
  {
    name: "Grammarly",
    slug: "grammarly",
    description: "The original AI writing assistant with comprehensive grammar, spelling, style, and tone suggestions used by millions.",
    pricing: "Freemium",
    pricingDetails: "Free (basic), Premium $12/mo, Business $15/user/mo",
    strengths: [
      "Most comprehensive error detection",
      "Excellent tone detector",
      "Works everywhere (browser extension)",
      "Large user base and resources",
      "Plagiarism checker (Premium)",
      "Generative AI features",
    ],
    weaknesses: [
      "Premium can be expensive",
      "Privacy concerns (uploads text to cloud)",
      "Some suggestions overly prescriptive",
    ],
    bestFor: "General writing, professional communications, students, established workflows",
    features: ["Grammar/spelling", "Tone detector", "Plagiarism checker", "Browser extension", "Generative AI"],
  },
];

export default function GrammarlyAlternativesPage() {
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
        <span className="text-gray-300">Grammarly Alternatives</span>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Grammarly Alternatives: 10 Best AI Writing Assistants 2026
        </h1>
        <p className="text-xl text-gray-400 max-w-4xl">
          Looking for Grammarly alternatives? Compare the best AI writing assistants including ProWritingAid,
          Hemingway, Wordtune, QuillBot, and more. Find the perfect grammar checker and writing tool for your
          specific needs, whether it's creative writing, academic work, or professional communications.
        </p>
        <div className="flex flex-wrap gap-2 mt-6">
          <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
            Updated February 2026
          </span>
          <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
            10 Writing Tools Compared
          </span>
        </div>
      </header>

      {/* Quick Navigation */}
      <section className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-12">
        <h2 className="text-lg font-semibold mb-3">Quick Navigation</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 text-sm">
          {writingTools.map((tool) => (
            <a
              key={tool.slug}
              href={`#${tool.slug}`}
              className="text-blue-400 hover:text-blue-300 transition"
            >
              {tool.name}
            </a>
          ))}
        </div>
      </section>

      {/* Introduction */}
      <section className="prose prose-invert max-w-none mb-16">
        <h2 className="text-3xl font-bold mb-4">Why Look for Grammarly Alternatives?</h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-4">
          While Grammarly is the most popular writing assistant with millions of users, it's not the only
          option—and depending on your needs, it might not be the best one for you.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed mb-4">
          ProWritingAid offers deeper style analysis perfect for novelists. Hemingway excels at clarity and
          readability with a one-time purchase. Wordtune provides superior AI rewriting for non-native speakers.
          LanguageTool supports 30+ languages with strong privacy protections. And options like QuillBot offer
          competitive pricing for students.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed">
          This guide compares 10 top Grammarly alternatives across features, pricing, strengths, and ideal
          use cases to help you find the right writing assistant.
        </p>
      </section>

      {/* Comparison Table */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Quick Comparison Table</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-gray-900 border border-gray-800 rounded-xl">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">Writing Tool</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Pricing</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Best For</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Key Feature</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {writingTools.map((tool) => (
                <tr key={tool.slug} className="hover:bg-gray-800/50 transition">
                  <td className="px-4 py-3">
                    <a href={`#${tool.slug}`} className="font-medium text-blue-400 hover:text-blue-300">
                      {tool.name}
                    </a>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-400">{tool.pricing}</td>
                  <td className="px-4 py-3 text-sm text-gray-400">{tool.bestFor.split(",")[0]}</td>
                  <td className="px-4 py-3 text-sm text-gray-400">{tool.strengths[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Detailed Reviews */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Detailed Grammarly Alternatives Reviews</h2>
        <div className="space-y-12">
          {writingTools.map((tool, index) => {
            const toolData = toolsBySlug.get(tool.slug);
            return (
              <article
                key={tool.slug}
                id={tool.slug}
                className="bg-gray-900 border border-gray-800 rounded-xl p-8 scroll-mt-24"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      {index + 1}. {tool.name}
                    </h3>
                    <p className="text-gray-400">{tool.description}</p>
                  </div>
                  {toolData && (
                    <Link
                      href={`/tool/${tool.slug}`}
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
                    <p className="text-gray-400 text-sm mb-1">{tool.pricing}</p>
                    <p className="text-gray-500 text-xs">{tool.pricingDetails}</p>
                  </div>

                  {/* Best For */}
                  <div>
                    <h4 className="font-semibold text-gray-300 mb-2">🎯 Best For</h4>
                    <p className="text-gray-400 text-sm">{tool.bestFor}</p>
                  </div>
                </div>

                {/* Strengths */}
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-300 mb-3">✅ Strengths</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {tool.strengths.map((strength, i) => (
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
                    {tool.weaknesses.map((weakness, i) => (
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
                    {tool.features.map((feature, i) => (
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
        <h2 className="text-3xl font-bold mb-6">Which Grammarly Alternative Should You Choose?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Novel & Book Writing</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>ProWritingAid:</strong> 20+ writing reports, Scrivener integration</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Hemingway:</strong> Clarity-focused, great for readable prose</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Grammarly:</strong> Comprehensive, reliable baseline</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Students & Academic Writing</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>QuillBot:</strong> Affordable, citation generator, paraphrasing</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>ProWritingAid:</strong> Academic mode, detailed reports</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Ginger:</strong> Good for ESL students learning English</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Business Communications</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Wordtune:</strong> Perfect for polishing emails and messages</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Sapling:</strong> Team features, CRM integration</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Writer:</strong> Enterprise-grade, brand voice consistency</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Multilingual Writers</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>LanguageTool:</strong> 30+ languages, open-source</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Ginger:</strong> Translation in 40+ languages</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>WhiteSmoke:</strong> Affordable multilingual support</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Budget-Conscious Users</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Hemingway:</strong> $19.99 one-time (desktop), free web version</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>LanguageTool:</strong> €4.99/mo (~$5.50)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>WhiteSmoke:</strong> Starting at $5/mo</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Non-Native English Speakers</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Wordtune:</strong> Excellent AI rewriting and tone options</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Ginger:</strong> Personal English trainer features</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>LanguageTool:</strong> Native language support</span>
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
            <h3 className="text-lg font-semibold mb-2">Is there a completely free Grammarly alternative?</h3>
            <p className="text-gray-400">
              Hemingway Editor's web version is completely free with full features. LanguageTool has a generous
              free tier (10,000 characters), and basic versions of ProWritingAid (500 words) and QuillBot
              (125 words) are available free but with significant limitations.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Which is better: ProWritingAid or Grammarly?</h3>
            <p className="text-gray-400">
              For long-form creative writing (novels, academic papers), ProWritingAid's 20+ detailed reports
              provide deeper analysis. For everyday writing and ease of use, Grammarly's interface is more
              polished and accessible. Many serious writers use both—Grammarly for quick checks, ProWritingAid
              for deep editing.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">What's the best grammar checker for students?</h3>
            <p className="text-gray-400">
              QuillBot offers the best value for students with affordable pricing ($8.33/mo annual), paraphrasing
              tools, and a citation generator. For ESL students, Ginger's personal trainer features are valuable.
              For serious academic writing, ProWritingAid's academic mode provides the most comprehensive analysis.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Can I use these tools offline?</h3>
            <p className="text-gray-400">
              Hemingway Editor (desktop version) works completely offline. Ginger Software also offers offline
              functionality with its desktop app. Most other alternatives require internet connection as they
              rely on cloud-based AI processing.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Which tool is best for privacy-conscious users?</h3>
            <p className="text-gray-400">
              LanguageTool has the strongest privacy protections with European data standards, open-source
              foundation, and self-hosting options. Hemingway Editor (desktop) processes everything locally.
              Both are excellent choices if you're concerned about uploading sensitive text to cloud servers.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Explore More AI Tools</h2>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Discover hundreds of AI tools across all categories—from chatbots to video generators and
          productivity tools.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Browse All Tools
          </Link>
          <Link
            href="/category/writing"
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            More Writing Tools →
          </Link>
        </div>
      </section>
    </div>
  );
}
