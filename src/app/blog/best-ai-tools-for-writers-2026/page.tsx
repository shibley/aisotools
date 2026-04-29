import Link from "next/link";
import type { Metadata } from "next";
import { getAffiliateUrl } from "@/data/affiliate-links";

export const metadata: Metadata = {
  title: "Best AI Tools for Writers in 2026 (Fiction, Blogging & Copywriting)",
  description:
    "The best AI tools for writers in 2026 — from fiction writers and novelists to bloggers, journalists, and copywriters. Tested on real writing workflows with honest comparisons.",
  keywords: [
    "best ai tools for writers",
    "ai writing tools 2026",
    "ai tools for writers",
    "best ai for writing",
    "ai writing assistant 2026",
    "ai tools for novelists",
    "ai tools for bloggers",
    "ai tools for journalists",
    "ai writing software",
    "best ai for creative writing",
  ],
  openGraph: {
    title: "Best AI Tools for Writers in 2026 (Fiction, Blogging & Copywriting)",
    description:
      "Claude, ChatGPT, Jasper, Sudowrite, Grammarly — the top AI tools for every type of writer. Find the right AI writing assistant for your workflow.",
    url: "https://aisotools.com/blog/best-ai-tools-for-writers-2026",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/blog/best-ai-tools-for-writers-2026",
  },
};

interface WritingTool {
  rank: number;
  name: string;
  slug: string;
  tagline: string;
  bestFor: string;
  pricingNote: string;
  strengths: string[];
  limitations: string[];
  badge?: string;
  writerType: string;
}

const tools: WritingTool[] = [
  {
    rank: 1,
    name: "Claude",
    slug: "claude",
    tagline: "Best all-around AI writing assistant — nuanced, safe, long context",
    bestFor: "Long-form content, nuanced prose, character development, technical writing",
    pricingNote: "Free tier (Sonnet 3.7) · $20/mo Pro",
    strengths: [
      "200K context window — can hold entire manuscripts in one session",
      "Best-in-class writing quality: nuanced, human-like, not generic",
      "Excellent at character voice, dialogue, and narrative flow",
      "Strong editorial feedback mode — will critique your draft honestly",
      "Follows complex style instructions precisely",
    ],
    limitations: [
      "Free tier rate limits hit fast for heavy daily writing",
      "No built-in web search for research (unlike Perplexity)",
      "Doesn't export directly to Google Docs or Word",
    ],
    badge: "Best Overall",
    writerType: "All writer types",
  },
  {
    rank: 2,
    name: "ChatGPT",
    slug: "chatgpt",
    tagline: "Most versatile AI for writers — plugins, templates, image generation",
    bestFor: "Blogs, outlines, repurposing content, marketing copy, GPT workflows",
    pricingNote: "Free tier (GPT-4o mini) · $20/mo Plus",
    strengths: [
      "Huge library of custom GPTs for specific writing niches (screenplay, poetry, etc.)",
      "DALL-E 3 image generation for blog post visuals",
      "Code interpreter for data-driven writing (charts, stats)",
      "Voice input — great for dictating first drafts",
      "Strong at following structured content templates",
    ],
    limitations: [
      "Free tier uses GPT-4o mini, not the full GPT-4o",
      "Can produce slightly formulaic writing without careful prompting",
      "Context window shorter than Claude (128K vs 200K)",
    ],
    badge: "Most Popular",
    writerType: "Bloggers, content marketers",
  },
  {
    rank: 3,
    name: "Jasper",
    slug: "jasper",
    tagline: "Best dedicated AI writing platform for marketing teams",
    bestFor: "Marketing copy, ad content, social posts, brand voice consistency",
    pricingNote: "From $49/mo Creator · $125/mo Pro",
    strengths: [
      "Brand voice feature — learns and replicates your specific writing style",
      "50+ templates for blog intros, product descriptions, email subject lines",
      "Built-in SEO mode with keyword integration",
      "Team collaboration features — share templates, workflows",
      "Integrates with Surfer SEO for content optimization",
    ],
    limitations: [
      "Most expensive on this list — best for professional/agency use",
      "Less creative than Claude or ChatGPT for fiction",
      "Overkill for individual writers not focused on marketing",
    ],
    badge: "Best for Marketing",
    writerType: "Copywriters, marketers",
  },
  {
    rank: 4,
    name: "Sudowrite",
    slug: "sudowrite",
    tagline: "Best AI for fiction writers — purpose-built for novels and stories",
    bestFor: "Fiction writing, novels, short stories, screenplays, creative writing",
    pricingNote: "From $19/mo Hobby · $29/mo Professional",
    strengths: [
      "Story Engine — built specifically for long-form narrative fiction",
      "Canvas mode shows story structure visually",
      "Sensory writing tool: adds taste, smell, sound, texture to scenes",
      "Character consistency tracking across long manuscripts",
      "Understands narrative pacing, tension, and story arcs",
    ],
    limitations: [
      "Only for creative fiction — not useful for business or technical writing",
      "Smaller model than Claude/ChatGPT (less general capability)",
      "More limited outside of the specific fiction workflow",
    ],
    badge: "Best for Fiction",
    writerType: "Novelists, fiction writers",
  },
  {
    rank: 5,
    name: "Grammarly",
    slug: "grammarly",
    tagline: "Best AI for editing and polish — not generation, but perfection",
    bestFor: "Editing, proofreading, tone analysis, clarity improvements",
    pricingNote: "Free basic · $30/mo Pro",
    strengths: [
      "Real-time editing in any browser or app (Google Docs, Word, email)",
      "Tone detector — flags passive voice, wordiness, formality mismatches",
      "Plagiarism checker included in Pro",
      "Inline rewrites for individual sentences without rewriting the whole piece",
      "Most reliable for grammar — fewer false positives than competitors",
    ],
    limitations: [
      "Not a content generator — it edits, it doesn't write from scratch",
      "AI Rewrite suggestions can over-sanitize distinctive voice",
      "Premium price for features available free in other tools",
    ],
    badge: "Best for Editing",
    writerType: "All writers (editing phase)",
  },
  {
    rank: 6,
    name: "Copy.ai",
    slug: "copy-ai",
    tagline: "Best for high-volume content production with AI workflows",
    bestFor: "Blog post factories, product descriptions, email sequences, GTM content",
    pricingNote: "Free 2,000 words/mo · $49/mo Pro",
    strengths: [
      "Workflows automate entire content pipelines end-to-end",
      "Brand voice capture from existing content",
      "Long-form blog wizard handles research, outline, and draft",
      "Strong for e-commerce: product descriptions at scale",
      "Free tier is more generous than Jasper",
    ],
    limitations: [
      "Output quality varies — requires more editing than Claude or ChatGPT",
      "Workflow setup has a learning curve",
      "Less suitable for literary or narrative writing",
    ],
    writerType: "Content teams, e-commerce writers",
  },
  {
    rank: 7,
    name: "Perplexity",
    slug: "perplexity",
    tagline: "Best for research-first writing — every fact cited, real-time data",
    bestFor: "Research-backed articles, journalism, fact-heavy technical writing",
    pricingNote: "Free (5 Pro/day) · $20/mo Pro",
    strengths: [
      "Every answer includes numbered source citations — no hallucination risk",
      "Real-time web search — current events and statistics always fresh",
      "Academic mode searches PubMed, arXiv, academic journals",
      "Good for finding stats, studies, quotes to support writing",
      "Pro mode uses Claude Sonnet or GPT-4o for drafting",
    ],
    limitations: [
      "Not a writing assistant — best for research, not prose generation",
      "Doesn't follow custom style guides or brand voice",
      "Free tier Pro searches limited to 5/day",
    ],
    badge: "Best for Research",
    writerType: "Journalists, researchers, technical writers",
  },
  {
    rank: 8,
    name: "Hemingway Editor",
    slug: "hemingway-editor",
    tagline: "Free readability tool — forces clarity and removes clutter",
    bestFor: "Plain-language writing, simplifying complex text, readability scoring",
    pricingNote: "Free web app · $19.99 desktop (one-time)",
    strengths: [
      "Highlights adverbs, passive voice, complex sentences in real time",
      "Grade-level readability score instantly visible",
      "Forces you to write tighter, more direct sentences",
      "Completely free web version — no account needed",
      "Integrates with Medium for bloggers",
    ],
    limitations: [
      "Not an AI generator — only analyzes and edits existing text",
      "No collaboration features",
      "Very basic compared to Grammarly's feature set",
    ],
    writerType: "Journalists, bloggers, technical writers",
  },
];

const writerTypeGuide = [
  {
    type: "Fiction Writers & Novelists",
    topPick: "Sudowrite + Claude",
    why: "Sudowrite's Story Engine for structure; Claude for scene-level prose quality",
  },
  {
    type: "Bloggers",
    topPick: "ChatGPT or Copy.ai",
    why: "Templates, outlines, and SEO integration make blog production 3-5x faster",
  },
  {
    type: "Journalists",
    topPick: "Perplexity + Claude",
    why: "Perplexity for cited research; Claude for drafting long-form pieces",
  },
  {
    type: "Copywriters",
    topPick: "Jasper or Copy.ai",
    why: "Brand voice, templates, and workflow automation built for copy production",
  },
  {
    type: "Academic & Technical Writers",
    topPick: "Claude",
    why: "Handles complex documents, maintains precision, follows citation styles",
  },
  {
    type: "Screenwriters",
    topPick: "Claude + Sudowrite",
    why: "Claude for dialogue and structure; Sudowrite for creative beats",
  },
  {
    type: "Social Media Writers",
    topPick: "ChatGPT or Copy.ai",
    why: "Fast, platform-specific templates — Twitter, LinkedIn, Instagram",
  },
  {
    type: "All Writers (Editing Phase)",
    topPick: "Grammarly",
    why: "Real-time editing in any writing surface — final polish layer",
  },
];

export default function BestAIToolsForWritersPage() {
  const year = 2026;

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-950 border-b border-gray-800 py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-orange-500/20 text-orange-400 text-xs font-medium px-2.5 py-1 rounded-full">
              Writing & Content
            </span>
            <span className="bg-purple-500/20 text-purple-400 text-xs font-medium px-2.5 py-1 rounded-full">
              AI Tools Guide
            </span>
            <span className="bg-gray-800 text-gray-400 text-xs font-medium px-2.5 py-1 rounded-full">
              Updated April {year}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best AI Tools for Writers in {year}
          </h1>
          <p className="text-xl text-gray-400 mb-6 max-w-3xl">
            Fiction, blogging, journalism, copywriting — every type of writer
            has different AI needs. This guide breaks down the best AI writing
            tools by use case, with honest comparisons on quality, pricing, and
            what each tool actually excels at.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>✓ {tools.length} tools compared</span>
            <span>✓ Organized by writer type</span>
            <span>✓ Honest pros &amp; cons</span>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Quick Answer */}
        <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6 mb-12">
          <h2 className="font-bold text-orange-400 text-sm uppercase tracking-wider mb-3">
            Quick Answer
          </h2>
          <p className="text-gray-300 mb-4">
            The best AI tool for writers depends on what kind of writing you do:
          </p>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <span className="text-white font-medium">Best overall AI writing assistant:</span>{" "}
              Claude — longest context, best prose quality, most nuanced output
            </li>
            <li>
              <span className="text-white font-medium">Best for fiction &amp; novels:</span>{" "}
              Sudowrite — purpose-built for narrative writing, story structure
            </li>
            <li>
              <span className="text-white font-medium">Best for bloggers &amp; content:</span>{" "}
              ChatGPT or Copy.ai — templates, SEO, fast content production
            </li>
            <li>
              <span className="text-white font-medium">Best for marketing copy:</span>{" "}
              Jasper — brand voice, team workflows, ad-copy templates
            </li>
            <li>
              <span className="text-white font-medium">Best for editing &amp; polish:</span>{" "}
              Grammarly — real-time grammar and tone checking in any writing app
            </li>
          </ul>
        </div>

        {/* How AI is Changing Writing */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            How AI is Changing Writing in {year}
          </h2>
          <p className="text-gray-300 mb-4">
            AI writing tools in {year} aren&apos;t replacing writers — they&apos;re
            eliminating the parts of writing that feel like work. First-draft
            paralysis, repetitive structural tasks, editing for grammar, doing
            keyword research. The best AI tools handle the scaffolding so
            writers can focus on the parts only humans can do: distinctive
            voice, emotional truth, original ideas.
          </p>
          <p className="text-gray-300 mb-4">
            The landscape has matured. Early AI writing tools produced robotic,
            generic output that needed heavy editing. Current models — Claude,
            GPT-4o, and specialized tools like Sudowrite — produce prose that
            reads as if a skilled writer drafted it. The gap is in how well the
            tool understands your specific writing context and goals.
          </p>
          <p className="text-gray-300">
            The right AI writing tool depends on your genre, workflow, and what
            you need the AI to do: generate, edit, research, or organize.
            Here&apos;s what each tool does best.
          </p>
        </section>

        {/* Tools List */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            Top {tools.length} AI Tools for Writers in {year}
          </h2>
          <div className="space-y-8">
            {tools.map((tool) => (
              <div
                key={tool.slug}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="bg-gray-800 text-gray-400 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {tool.rank}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-xl font-bold">{tool.name}</h3>
                        {tool.badge && (
                          <span className="bg-amber-500/20 text-amber-400 text-xs font-medium px-2 py-0.5 rounded-full">
                            {tool.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-400 text-sm mt-0.5">
                        {tool.tagline}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg px-4 py-2.5 mb-4 text-sm">
                  <span className="text-orange-400 font-medium">Pricing: </span>
                  <span className="text-gray-300">{tool.pricingNote}</span>
                </div>

                <div className="grid md:grid-cols-2 gap-4 text-sm mb-4">
                  <p className="text-gray-400">
                    <span className="text-gray-300 font-medium">Best for:</span>{" "}
                    {tool.bestFor}
                  </p>
                  <p className="text-gray-400">
                    <span className="text-gray-300 font-medium">Writer type:</span>{" "}
                    {tool.writerType}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-sm font-semibold text-green-400 mb-2">
                      ✓ Strengths
                    </h4>
                    <ul className="space-y-1">
                      {tool.strengths.map((s, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-300 flex gap-2"
                        >
                          <span className="text-green-500 flex-shrink-0">•</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-red-400 mb-2">
                      ✗ Limitations
                    </h4>
                    <ul className="space-y-1">
                      {tool.limitations.map((l, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-300 flex gap-2"
                        >
                          <span className="text-red-500 flex-shrink-0">•</span>
                          {l}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-3 flex-wrap items-center">
                  {(() => {
                    const affiliateUrl = getAffiliateUrl(tool.slug);
                    return affiliateUrl ? (
                      <a
                        href={affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="inline-flex items-center rounded-lg bg-orange-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-700"
                      >
                        Try {tool.name} →
                      </a>
                    ) : null;
                  })()}
                  <Link
                    href={`/tool/${tool.slug}`}
                    className="text-sm text-blue-400 hover:text-blue-300 transition"
                  >
                    View tool details →
                  </Link>
                  <Link
                    href={`/alternatives/${tool.slug}`}
                    className="text-sm text-gray-500 hover:text-gray-400 transition"
                  >
                    {tool.name} alternatives →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Writer Type Guide */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            Best AI Writing Tool by Writer Type
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">
                    Writer Type
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">
                    Top Pick
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">
                    Why
                  </th>
                </tr>
              </thead>
              <tbody>
                {writerTypeGuide.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-800/50 hover:bg-gray-900/50 transition"
                  >
                    <td className="py-3 px-4 text-sm text-gray-300">
                      {row.type}
                    </td>
                    <td className="py-3 px-4 text-sm font-medium text-orange-400">
                      {row.topPick}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-400">
                      {row.why}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* What to Look For */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            What Writers Should Look for in an AI Tool
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                label: "Writing Quality",
                note: "Does the output read like a skilled human wrote it, or like a template? Test it on your actual genre.",
              },
              {
                label: "Context Window",
                note: "For novelists and long-form writers, context matters enormously. Claude's 200K window holds entire manuscripts.",
              },
              {
                label: "Style Consistency",
                note: "Can you teach it your voice? Brand voice features (Jasper) or detailed prompting (Claude) are both valid approaches.",
              },
              {
                label: "Editing vs Generating",
                note: "Some tools generate better than they edit (ChatGPT), others excel at polish (Grammarly). Know which you need.",
              },
              {
                label: "Integration",
                note: "Does it work inside Google Docs or Word where you actually write? Grammarly and some ChatGPT integrations do.",
              },
              {
                label: "Price vs Volume",
                note: "For daily heavy writing, subscription tools beat per-word billing. Calculate your actual monthly word count first.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-900 border border-gray-800 rounded-xl p-4"
              >
                <div className="text-sm font-semibold text-white mb-1">
                  {item.label}
                </div>
                <div className="text-gray-400 text-sm">{item.note}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "What is the best AI tool for writers in 2026?",
                a: "For most writers, Claude is the best all-around AI writing assistant in 2026 — it produces the most nuanced, human-like prose, has a 200K token context window, and follows complex style instructions. For fiction writers specifically, Sudowrite is purpose-built for long-form narrative. For bloggers and marketing writers, ChatGPT or Jasper offer better templates and workflow integrations.",
              },
              {
                q: "Can AI write an entire novel or book?",
                a: "AI can draft substantial sections of a novel, but writing an entire publishable book with AI still requires significant human input, revision, and creative direction. Tools like Sudowrite are designed for novel-length projects and can help maintain story consistency across long manuscripts. Claude's 200K context window helps it stay coherent over very long sessions. Most AI-assisted novelists use AI for first drafts, scene generation, and dialogue — then revise heavily.",
              },
              {
                q: "Is AI writing detected by plagiarism checkers?",
                a: "AI detection tools (Turnitin, GPTZero, Originality.ai) can flag AI-written content with varying accuracy — typically 80-95% on raw AI output. Heavily edited or paraphrased AI content is harder to detect. For academic use, always check your institution's AI policy. For commercial writing, AI-generated content is generally legal and not plagiarism, but disclosure norms vary by platform.",
              },
              {
                q: "What AI tool is best for fiction writing?",
                a: "Sudowrite is the only AI writing tool built specifically for fiction — it includes a Story Engine, sensory writing tools, and character consistency tracking across long manuscripts. Claude is also excellent for scene-level fiction writing due to its nuanced understanding of narrative and dialogue. Many fiction writers use both: Sudowrite for structure, Claude for prose quality.",
              },
              {
                q: "How much do AI writing tools cost?",
                a: "Prices vary significantly: free tiers exist for Claude, ChatGPT, and Grammarly Basic. Paid plans range from $19/mo (Sudowrite Hobby, Hemingway desktop one-time) to $49/mo (Copy.ai, Jasper Creator) to $125/mo (Jasper Pro for teams). For individual writers, $20-30/mo for Claude Pro or ChatGPT Plus typically delivers the best value — you get top-tier models without the per-word billing of specialized tools.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-gray-900 border border-gray-800 rounded-xl p-5"
              >
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-400 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: `Best AI Tools for Writers in ${year}`,
              description:
                "The best AI tools for writers in 2026 — fiction, blogging, journalism, and copywriting. Claude, ChatGPT, Jasper, Sudowrite, Grammarly compared.",
              datePublished: "2026-04-29",
              dateModified: "2026-04-29",
              author: { "@type": "Organization", name: "AISO Tools" },
              publisher: {
                "@type": "Organization",
                name: "AISO Tools",
                url: "https://aisotools.com",
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id":
                  "https://aisotools.com/blog/best-ai-tools-for-writers-2026",
              },
              FAQPage: {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is the best AI tool for writers in 2026?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Claude is the best all-around AI writing assistant — nuanced prose, 200K context, follows complex style instructions. Sudowrite is best for fiction. ChatGPT or Jasper are best for bloggers and marketers.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What AI tool is best for fiction writing?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Sudowrite is purpose-built for fiction with a Story Engine, sensory writing tools, and character consistency tracking. Claude is also excellent for scene-level narrative writing.",
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* CTA */}
        <section className="bg-gradient-to-r from-orange-600/20 to-amber-600/20 border border-orange-500/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">
            Find the Right AI Writing Tool
          </h2>
          <p className="text-gray-400 mb-6">
            Browse 800+ AI tools with detailed pricing, features, and
            alternatives. Compare AI writing tools side by side.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/category/writing"
              className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-3 rounded-lg font-medium transition text-sm"
            >
              Browse AI Writing Tools
            </Link>
            <Link
              href="/alternatives/jasper"
              className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-3 rounded-lg font-medium transition text-sm"
            >
              Jasper Alternatives
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
