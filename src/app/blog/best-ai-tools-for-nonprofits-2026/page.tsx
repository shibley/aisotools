import { tools } from "@/data/tools";
import { getAffiliateUrl } from "@/data/affiliate-links";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Tools for Nonprofits in 2026: Do More with Less",
  description:
    "The best free and affordable AI tools for nonprofits in 2026. From grant writing automation and donor outreach to volunteer coordination, impact reporting, and social media content.",
  keywords: [
    "best ai tools for nonprofits",
    "ai tools for nonprofits",
    "free ai tools nonprofits",
    "ai grant writing tools",
    "ai for nonprofit fundraising",
    "ai nonprofit management",
    "chatgpt for nonprofits",
    "ai donor outreach",
    "nonprofit ai 2026",
  ],
  openGraph: {
    title: "Best AI Tools for Nonprofits in 2026: Do More with Less",
    description:
      "Guide to free and affordable AI tools for nonprofits. Compare grant writing, donor outreach, volunteer management, and impact reporting tools.",
    url: "https://aisotools.com/blog/best-ai-tools-for-nonprofits-2026",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/blog/best-ai-tools-for-nonprofits-2026",
  },
};

interface NPToolCategory {
  category: string;
  icon: string;
  description: string;
  tools: NPTool[];
}

interface NPTool {
  name: string;
  slug: string;
  description: string;
  pricing: string;
  pricingDetails: string;
  nonprofitDiscount?: string;
  strengths: string[];
  bestFor: string;
  rating: number;
}

const toolCategories: NPToolCategory[] = [
  {
    category: "Grant Writing & Fundraising",
    icon: "📝",
    description: "AI tools that help nonprofits write better grant proposals, faster — and develop stronger donor communications",
    tools: [
      {
        name: "Claude",
        slug: "claude",
        description:
          "The best AI for grant writing and long-form nonprofit communications. Claude's 200K context window lets you upload your organization's program data, past grants, and logic model — then draft new proposals that are contextually accurate and compelling. Unlike generic templates, Claude drafts in your organization's voice.",
        pricing: "Freemium",
        pricingDetails: "Free tier, Pro $20/mo",
        strengths: [
          "Upload program data, outcomes, and logic models for accurate drafts",
          "Draft narrative sections, budget justifications, and evaluation plans",
          "200K context handles entire grant applications",
          "Adapt the same program story for different funders",
          "Write acknowledgment letters and donor impact reports",
          "Translate program outcomes into compelling funder language",
        ],
        bestFor: "Grant narrative writing, funder-specific customization, donor impact reports, annual reports",
        rating: 4.8,
      },
      {
        name: "ChatGPT",
        slug: "chatgpt",
        description:
          "Versatile AI for nonprofits — draft appeal letters, create donor thank-you templates, research potential funders, generate social proof stories, and write board meeting materials. The nonprofit-specific Custom GPTs from the community are particularly useful.",
        pricing: "Freemium",
        pricingDetails: "Free tier, Plus $20/mo",
        nonprofitDiscount: "OpenAI offers nonprofit pricing — check openai.com/nonprofit",
        strengths: [
          "Draft personalized donor appeal letters at scale",
          "Research potential funders and their priorities",
          "Create volunteer recruitment and onboarding materials",
          "Generate social media content from program stories",
          "Draft board member orientation materials",
          "Write press releases and community announcements",
        ],
        bestFor: "Donor appeals, volunteer materials, board communications, social media content",
        rating: 4.7,
      },
    ],
  },
  {
    category: "Content & Social Media",
    icon: "📱",
    description: "AI tools that help nonprofits create compelling content, social media posts, and fundraising campaigns with minimal staff time",
    tools: [
      {
        name: "Canva",
        slug: "canva",
        description:
          "Canva for Nonprofits is completely free for registered nonprofits — full Canva Pro with all AI features. Create donation campaign graphics, social media posts, event flyers, annual report layouts, and presentation decks.",
        pricing: "Free for Nonprofits",
        pricingDetails: "100% free via Canva for Nonprofits program (requires verification)",
        nonprofitDiscount: "Completely free via Canva for Nonprofits (canva.com/canva-for-nonprofits)",
        strengths: [
          "Free Canva Pro for verified nonprofits",
          "AI image generation and Magic Write included",
          "500,000+ nonprofit-friendly templates",
          "Donation campaign graphics and social media kits",
          "Annual report and impact report layouts",
          "Team collaboration for distributed staff",
        ],
        bestFor: "Social media graphics, campaign materials, annual reports, event flyers, presentations",
        rating: 4.9,
      },
      {
        name: "Jasper",
        slug: "jasper",
        description:
          "AI writing platform for consistent, on-brand nonprofit communications at scale. Create appeal email sequences, newsletter content, social media posts, and website copy that maintains your mission voice across all channels.",
        pricing: "Paid",
        pricingDetails: "Creator $39/mo, Pro $59/mo — nonprofit discount may be available",
        strengths: [
          "Maintain consistent brand voice across communications",
          "Multi-channel content: email, social, web, print",
          "Appeal sequence writing with escalating urgency",
          "Year-end giving campaign content packages",
          "Team templates for consistent messaging",
          "Blog content for SEO and donor education",
        ],
        bestFor: "Year-end appeals, newsletter content, website copy, multi-channel campaigns",
        rating: 4.4,
      },
    ],
  },
  {
    category: "Operations & Administration",
    icon: "⚙️",
    description: "AI tools that reduce the administrative burden on lean nonprofit teams",
    tools: [
      {
        name: "Notion AI",
        slug: "notion",
        description:
          "Free for nonprofits via the Notion for Nonprofits program — a full workspace for managing programs, volunteers, donors, board communications, and organizational knowledge. AI features summarize meeting notes and auto-fill documents.",
        pricing: "Free for Nonprofits",
        pricingDetails: "Free via Notion for Nonprofits (notion.so/nonprofits)",
        nonprofitDiscount: "Free Plus plan via Notion for Nonprofits program",
        strengths: [
          "Volunteer database and coordination tracking",
          "Program management with custom fields",
          "Board meeting agendas and minute templates",
          "Grant tracking and reporting deadlines",
          "AI summarizes lengthy funder reports",
          "Searchable organizational knowledge base",
        ],
        bestFor: "Program management, volunteer coordination, grant tracking, board operations",
        rating: 4.6,
      },
      {
        name: "Otter.ai",
        slug: "otter-ai",
        description:
          "AI transcription for board meetings, funder calls, community listening sessions, and staff meetings. Generates searchable minutes automatically — critical for governance documentation and funder accountability.",
        pricing: "Freemium",
        pricingDetails: "Free tier (300 min/mo), Pro $8.33/mo",
        strengths: [
          "Automatic board meeting minutes",
          "Community listening session transcription",
          "Funder call documentation for accountability",
          "Searchable archive of all meetings",
          "Action item extraction for follow-through",
          "Integrates with Zoom for remote board meetings",
        ],
        bestFor: "Board meeting minutes, funder calls, community listening, governance documentation",
        rating: 4.4,
      },
    ],
  },
  {
    category: "Impact Measurement & Reporting",
    icon: "📊",
    description: "AI tools that help nonprofits analyze program data, measure impact, and communicate results to funders and donors",
    tools: [
      {
        name: "Julius AI",
        slug: "julius-ai",
        description:
          "AI data analyst that lets nonprofits analyze program data, participant outcomes, and operational metrics without needing a data analyst on staff. Upload spreadsheets and ask questions in plain language — get charts for your annual report.",
        pricing: "Freemium",
        pricingDetails: "Free tier, Pro $22/mo",
        strengths: [
          "Analyze program outcome data without technical skills",
          "Create charts and visualizations for funder reports",
          "Identify trends in participant demographics and outcomes",
          "Generate comparative data for grant applications",
          "Automate routine data analysis and reporting",
          "Export publication-ready charts for annual reports",
        ],
        bestFor: "Program evaluation, impact visualization, funder data reports, outcome tracking",
        rating: 4.4,
      },
    ],
  },
];

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.3;
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-lg">
          {i < fullStars ? "⭐" : i === fullStars && hasHalf ? "⭐" : "☆"}
        </span>
      ))}
      <span className="ml-1 text-sm font-medium text-gray-600">{rating}/5</span>
    </div>
  );
}

export default function BestAIToolsForNonprofits2026() {
  const totalTools = toolCategories.reduce((sum, cat) => sum + cat.tools.length, 0);
  const freeTools = toolCategories
    .flatMap((c) => c.tools)
    .filter((t) => t.pricing === "Free for Nonprofits" || t.pricing === "Freemium").length;

  return (
    <article className="mx-auto max-w-4xl px-4 py-8">
      <header className="mb-12">
        <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <span>→</span>
          <span>AI Tools for Nonprofits</span>
        </div>
        <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
          Best AI Tools for Nonprofits in 2026
        </h1>
        <p className="mb-6 text-xl leading-relaxed text-gray-600">
          {totalTools} AI tools for nonprofits — {freeTools} with free or nonprofit
          pricing. From grant writing and donor outreach to impact reporting and
          volunteer coordination.
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
          <span>📅 Updated April 2026</span>
          <span>•</span>
          <span>⏱️ 13 min read</span>
          <span>•</span>
          <span>💚 {totalTools} tools reviewed</span>
        </div>
      </header>

      <section className="mb-12 rounded-lg bg-green-50 p-6">
        <h2 className="mb-3 text-2xl font-bold text-gray-900">
          The Good News: Most Major AI Tools Are Free or Discounted for Nonprofits
        </h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          Many leading AI companies offer significant nonprofit discounts or free
          programs. <strong>Canva for Nonprofits</strong> is completely free.
          <strong> Notion for Nonprofits</strong> gives full Plus access. OpenAI has
          a nonprofit pricing program. Google gives nonprofits free workspace and AI
          credits. The budget barrier is lower than most nonprofit leaders think.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg bg-white p-3 text-center shadow-sm">
            <div className="text-2xl font-bold text-green-600">Free</div>
            <div className="text-sm text-gray-600">Canva Pro for Nonprofits</div>
          </div>
          <div className="rounded-lg bg-white p-3 text-center shadow-sm">
            <div className="text-2xl font-bold text-green-600">Free</div>
            <div className="text-sm text-gray-600">Notion Plus for Nonprofits</div>
          </div>
          <div className="rounded-lg bg-white p-3 text-center shadow-sm">
            <div className="text-2xl font-bold text-green-600">~$0/mo</div>
            <div className="text-sm text-gray-600">Claude + ChatGPT free tiers</div>
          </div>
        </div>
      </section>

      <nav className="mb-12 rounded-lg border border-gray-200 bg-gray-50 p-6">
        <h2 className="mb-4 text-lg font-bold text-gray-900">Jump to Category</h2>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {toolCategories.map((cat) => (
            <a
              key={cat.category}
              href={`#${cat.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className="flex items-center gap-2 rounded-md p-2 text-sm transition-colors hover:bg-white hover:shadow-sm"
            >
              <span>{cat.icon}</span>
              <span className="text-blue-600 hover:underline">{cat.category}</span>
              <span className="text-gray-400">({cat.tools.length})</span>
            </a>
          ))}
        </div>
      </nav>

      {toolCategories.map((category, catIndex) => (
        <section
          key={category.category}
          id={category.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
          className="mb-16"
        >
          <div className="mb-8">
            <h2 className="mb-2 text-3xl font-bold text-gray-900">
              <span className="mr-2">{category.icon}</span>
              {category.category}
            </h2>
            <p className="text-lg text-gray-600">{category.description}</p>
          </div>

          <div className="space-y-8">
            {category.tools.map((tool, toolIndex) => {
              const globalIndex =
                toolCategories.slice(0, catIndex).reduce((sum, c) => sum + c.tools.length, 0) +
                toolIndex + 1;
              const toolData = tools.find(
                (t) => t.slug === tool.slug || t.name.toLowerCase() === tool.name.toLowerCase()
              );
              const affiliateUrl = getAffiliateUrl(tool.slug) || toolData?.affiliateUrl;
              const toolUrl = toolData ? `/tool/${toolData.slug}` : `/tools?q=${encodeURIComponent(tool.name)}`;

              return (
                <div key={tool.name} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="mb-1 flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700">
                          {globalIndex}
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900">
                          <Link href={toolUrl} className="hover:text-green-600">{tool.name}</Link>
                        </h3>
                      </div>
                      <StarRating rating={tool.rating} />
                    </div>
                    <div className="text-right">
                      <span className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${tool.pricing === "Free for Nonprofits" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}>
                        {tool.pricing}
                      </span>
                      <p className="mt-1 text-xs text-gray-500">{tool.pricingDetails}</p>
                      {tool.nonprofitDiscount && (
                        <p className="mt-1 text-xs font-medium text-green-600">💚 {tool.nonprofitDiscount}</p>
                      )}
                    </div>
                  </div>

                  <p className="mb-4 leading-relaxed text-gray-700">{tool.description}</p>

                  <div className="mb-4">
                    <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">Key Strengths</h4>
                    <ul className="grid gap-1 sm:grid-cols-2">
                      {tool.strengths.map((s) => (
                        <li key={s} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="mt-0.5 text-green-500">✓</span>{s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 border-t border-gray-100 pt-4">
                    <span className="text-sm text-gray-500">
                      <strong>Best for:</strong> {tool.bestFor}
                    </span>
                    <div className="ml-auto flex gap-2">
                      {affiliateUrl && (
                        <a
                          href={affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer sponsored"
                          className="inline-flex items-center rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700"
                        >
                          Try {tool.name} →
                        </a>
                      )}
                      <Link
                        href={toolUrl}
                        className="inline-flex items-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                      >
                        Full Review
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}

      <section className="mb-12 rounded-lg border border-green-200 bg-green-50 p-6">
        <h2 className="mb-3 text-xl font-bold text-gray-900">
          💚 The Zero-Budget Nonprofit AI Stack
        </h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          A nonprofit can build a powerful AI workflow at <strong>zero cost</strong>:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">1.</span>
            <span><strong>Canva for Nonprofits</strong> (free) — all design and social media content</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">2.</span>
            <span><strong>Notion for Nonprofits</strong> (free) — operations, programs, grants, volunteers</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">3.</span>
            <span><strong>Claude free tier</strong> — grant writing, donor communications, reports</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">4.</span>
            <span><strong>ChatGPT free tier</strong> — content drafts, volunteer materials, research</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">5.</span>
            <span><strong>Otter.ai free tier</strong> (300 min/mo) — board meeting minutes</span>
          </li>
        </ul>
        <p className="mt-4 text-sm text-gray-600">Total monthly cost: $0</p>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">FAQs</h2>
        <div className="space-y-6">
          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              Can nonprofits use AI for grant writing?
            </h3>
            <p className="leading-relaxed text-gray-700">
              Yes — AI is particularly valuable for grant writing because it can help
              staff who aren't professional writers produce compelling, well-structured
              narratives. The key is to upload your program data, outcomes, and logic
              model so the AI produces accurate (not generic) content. Always review
              and personalize AI-generated grants before submission.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              Do major AI companies offer nonprofit discounts?
            </h3>
            <p className="leading-relaxed text-gray-700">
              Yes — Canva (free Pro), Notion (free Plus), Google (Workspace + AI
              credits), and Microsoft (free nonprofit licenses including Copilot for
              some plans) all have verified nonprofit programs. OpenAI has a nonprofit
              pricing inquiry process. TechSoup (techsoup.org) is the best resource
              for a comprehensive list of nonprofit tech discounts.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              Is AI-generated grant content accepted by funders?
            </h3>
            <p className="leading-relaxed text-gray-700">
              Most funders don't explicitly prohibit AI use, but they do require
              accurate content that reflects your actual programs and outcomes. Use
              AI as a drafting aid — provide it with real data, review every claim
              for accuracy, and make sure the final narrative sounds like your
              organization, not a generic template.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-lg bg-gradient-to-r from-green-600 to-teal-600 p-8 text-white">
        <h2 className="mb-4 text-3xl font-bold">Amplify Your Mission with AI</h2>
        <p className="mb-6 text-lg leading-relaxed text-green-50">
          Start with the free nonprofit programs (Canva + Notion) and Claude's free
          tier for grant writing. Three tools, zero dollars, and you'll save your
          team hours every week that can go back into your programs.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/tools"
            className="inline-flex items-center rounded-lg bg-white px-6 py-3 font-semibold text-green-600 transition-colors hover:bg-gray-100"
          >
            Explore All AI Tools →
          </Link>
          <Link
            href="/blog/best-ai-tools-for-small-business-2026"
            className="inline-flex items-center rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-green-600"
          >
            AI Tools for Small Teams →
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Best AI Tools for Nonprofits in 2026: Do More with Less",
            description: "Best free and affordable AI tools for nonprofits in 2026 — grant writing, donor outreach, content creation, and impact reporting.",
            author: { "@type": "Organization", name: "AISOTools" },
            publisher: { "@type": "Organization", name: "AISOTools", logo: { "@type": "ImageObject", url: "https://aisotools.com/logo.png" } },
            datePublished: "2026-04-24",
            dateModified: "2026-04-24",
            mainEntityOfPage: { "@type": "WebPage", "@id": "https://aisotools.com/blog/best-ai-tools-for-nonprofits-2026" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "Can nonprofits use AI for grant writing?", acceptedAnswer: { "@type": "Answer", text: "Yes. AI is valuable for grant writing when you provide your program data and outcomes for accurate content. Always review AI-generated grants for accuracy before submission." } },
              { "@type": "Question", name: "Do major AI companies offer nonprofit discounts?", acceptedAnswer: { "@type": "Answer", text: "Yes — Canva (free Pro), Notion (free Plus), Google (Workspace + AI credits), and Microsoft all have verified nonprofit programs. TechSoup.org is the best resource for comprehensive nonprofit tech discounts." } },
              { "@type": "Question", name: "Is AI-generated grant content accepted by funders?", acceptedAnswer: { "@type": "Answer", text: "Most funders don't prohibit AI use but require accurate content reflecting your actual programs. Use AI as a drafting aid with real data, review every claim, and ensure the final narrative sounds like your organization." } },
            ],
          }),
        }}
      />
    </article>
  );
}
