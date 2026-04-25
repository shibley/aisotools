import { tools } from "@/data/tools";
import { getAffiliateUrl } from "@/data/affiliate-links";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Tools for Architects in 2026: Design Faster, Win More Bids",
  description:
    "Discover the best AI tools for architects and architectural designers in 2026. From AI floor plan generation and 3D rendering to bid writing, code compliance checking, and client presentations.",
  keywords: [
    "best ai tools for architects",
    "ai tools for architecture",
    "ai architecture design",
    "ai floor plan generator",
    "ai rendering tools architects",
    "ai for architectural design",
    "ai building design",
    "ai for architects 2026",
  ],
  openGraph: {
    title: "Best AI Tools for Architects in 2026: Design Faster, Win More Bids",
    description:
      "Complete guide to AI tools for architects. Compare floor plan generation, 3D rendering, code compliance, and client presentation tools.",
    url: "https://aisotools.com/blog/best-ai-tools-for-architects-2026",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/blog/best-ai-tools-for-architects-2026",
  },
};

interface AToolCategory {
  category: string;
  icon: string;
  description: string;
  tools: ATool[];
}

interface ATool {
  name: string;
  slug: string;
  description: string;
  pricing: string;
  pricingDetails: string;
  strengths: string[];
  bestFor: string;
  rating: number;
}

const toolCategories: AToolCategory[] = [
  {
    category: "AI Design & Conceptual Generation",
    icon: "🏗️",
    description: "AI tools that generate floor plans, spatial layouts, and design concepts from prompts or sketches",
    tools: [
      {
        name: "Midjourney",
        slug: "midjourney",
        description:
          "The premier AI image generator for architectural visualization. Generate photorealistic renders, concept elevations, interior perspectives, and presentation visuals from text prompts. Used by architecture firms from boutique studios to SOM and Gensler for rapid concept visualization.",
        pricing: "Paid",
        pricingDetails: "Basic $10/mo, Standard $30/mo, Pro $60/mo",
        strengths: [
          "Photorealistic architectural renders in minutes",
          "Exterior and interior perspective generation",
          "Explore multiple design directions rapidly",
          "Client-ready conceptual imagery for early presentations",
          "Reference image blending for style matching",
          "Fast iteration during schematic design phase",
        ],
        bestFor: "Concept presentations, client mood boards, schematic visualization, competition boards",
        rating: 4.8,
      },
      {
        name: "Maket.ai",
        slug: "maket",
        description:
          "Purpose-built AI floor plan generator for architects and developers. Input site dimensions, number of rooms, and design preferences — Maket generates multiple floor plan options. Generate hundreds of permutations in minutes, not hours.",
        pricing: "Freemium",
        pricingDetails: "Free tier (limited), Pro $29/mo, Team $79/mo",
        strengths: [
          "Floor plan generation from brief and site constraints",
          "Generate multiple layout options simultaneously",
          "Adjust room sizes and relationships interactively",
          "Export to CAD formats for further development",
          "Multi-family, residential, and commercial layouts",
          "Code-checking integration for zoning compliance",
        ],
        bestFor: "Schematic floor plan options, developer presentations, residential design exploration",
        rating: 4.4,
      },
      {
        name: "Stable Diffusion",
        slug: "stable-diffusion",
        description:
          "Open-source image AI with ControlNet for architecture — generate renders from sketch inputs, site plans, and CAD drawings. ControlNet's 'scribble' and 'depth' modes let architects turn rough sketches into photorealistic visualizations.",
        pricing: "Free / API",
        pricingDetails: "Open source (free self-host), Automatic1111 UI free, API $0.002-0.04/image",
        strengths: [
          "ControlNet converts sketches to photorealistic renders",
          "Free and open source — no per-image cost when self-hosted",
          "Architectural-specific models (ArchitectureRealMix, etc.)",
          "Process entire elevations and site plans",
          "Inpainting to modify specific areas of a render",
          "Community of architectural prompt specialists",
        ],
        bestFor: "Sketch-to-render workflows, iterative design visualization, budget-conscious firms",
        rating: 4.5,
      },
    ],
  },
  {
    category: "3D Rendering & Visualization",
    icon: "🎨",
    description: "AI-enhanced rendering tools that produce client-ready visuals faster than traditional rendering pipelines",
    tools: [
      {
        name: "Enscape",
        slug: "enscape",
        description:
          "Real-time rendering plugin for Revit, SketchUp, Rhino, and ArchiCAD with AI-powered denoising and material generation. Walk through your model in VR or export cinematic renders directly from your design software.",
        pricing: "Paid",
        pricingDetails: "Fixed Seat $659/yr, Floating Seat $959/yr",
        strengths: [
          "Real-time rendering directly inside Revit/SketchUp/Rhino",
          "AI denoising for faster, cleaner outputs",
          "VR walkthrough for client presentations",
          "360° panorama export for online sharing",
          "Material library with 2,500+ ready assets",
          "No separate rendering machine required",
        ],
        bestFor: "Real-time design presentations, client VR walkthroughs, design development phase",
        rating: 4.7,
      },
    ],
  },
  {
    category: "Documentation & Specifications",
    icon: "📋",
    description: "AI tools that speed up the most time-consuming documentation tasks in architecture practice",
    tools: [
      {
        name: "ChatGPT",
        slug: "chatgpt",
        description:
          "Invaluable for architectural documentation — drafting specs, writing project narratives, creating bid documents, and generating design intent statements. Upload drawings and PDFs for context-aware document drafting.",
        pricing: "Freemium",
        pricingDetails: "Free tier, Plus $20/mo",
        strengths: [
          "Draft CSI MasterFormat specifications from product data",
          "Write project narratives and design intent statements",
          "Generate RFP responses and proposal sections",
          "Summarize lengthy code sections in plain language",
          "Create project closeout documentation",
          "Translate technical content for client presentations",
        ],
        bestFor: "Specifications drafting, proposal writing, project narratives, code research",
        rating: 4.7,
      },
      {
        name: "Claude",
        slug: "claude",
        description:
          "Claude's large context window makes it exceptional for analyzing lengthy building codes, reviewing contracts, and processing large specification sets. Upload entire IBC sections and ask targeted questions.",
        pricing: "Freemium",
        pricingDetails: "Free tier, Pro $20/mo",
        strengths: [
          "Process entire building codes (IBC, ADA, NFPA) in one session",
          "Extract specific requirements from lengthy specifications",
          "Review contracts for unusual clauses or liability issues",
          "Compare multiple code versions for changes",
          "Summarize lengthy environmental impact reports",
          "Generate accessibility compliance checklists",
        ],
        bestFor: "Building code research, contract review, specification analysis, compliance checking",
        rating: 4.7,
      },
    ],
  },
  {
    category: "Project Management & Communication",
    icon: "📊",
    description: "AI tools that streamline project coordination, client communications, and practice management",
    tools: [
      {
        name: "Notion AI",
        slug: "notion",
        description:
          "AI-powered project management workspace for architecture practices. Organize projects, client communications, consultant coordination, and firm knowledge. AI summarizes meeting notes and generates action items automatically.",
        pricing: "Freemium",
        pricingDetails: "Free tier, Plus $10/mo, Business $15/mo",
        strengths: [
          "Project database with phase tracking and team assignments",
          "AI meeting summary and action item extraction",
          "Client communication templates with AI drafting",
          "Specification and detail library management",
          "Consultant coordination logs",
          "Firm-wide knowledge base with semantic search",
        ],
        bestFor: "Project coordination, client communication, spec libraries, firm knowledge management",
        rating: 4.5,
      },
      {
        name: "Otter.ai",
        slug: "otter-ai",
        description:
          "AI transcription for the constant stream of architect meetings — design reviews, owner-architect-contractor meetings, code consultations. Automatically generates meeting minutes with action items for distribution.",
        pricing: "Freemium",
        pricingDetails: "Free tier (300 min/mo), Pro $8.33/mo",
        strengths: [
          "Automatic OAC meeting minutes",
          "Speaker identification for multi-party meetings",
          "Export to Word for AIA document records",
          "Integrates with Zoom for remote coordination",
          "Searchable archive of all project meetings",
          "Action item extraction for follow-up tracking",
        ],
        bestFor: "OAC meetings, design reviews, code consultations, meeting documentation",
        rating: 4.5,
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

export default function BestAIToolsForArchitects2026() {
  const totalTools = toolCategories.reduce((sum, cat) => sum + cat.tools.length, 0);

  return (
    <article className="mx-auto max-w-4xl px-4 py-8">
      <header className="mb-12">
        <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <span>→</span>
          <span>AI Tools for Architects</span>
        </div>
        <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
          Best AI Tools for Architects in 2026
        </h1>
        <p className="mb-6 text-xl leading-relaxed text-gray-600">
          {totalTools} AI tools that help architects design faster, render better,
          write specs quicker, and spend more time on creative work — from schematic
          concept to construction documents.
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
          <span>📅 Updated April 2026</span>
          <span>•</span>
          <span>⏱️ 14 min read</span>
          <span>•</span>
          <span>🏛️ {totalTools} tools reviewed</span>
        </div>
      </header>

      <section className="mb-12 rounded-lg bg-stone-50 p-6">
        <h2 className="mb-3 text-2xl font-bold text-gray-900">
          How AI Is Changing Architecture Practice in 2026
        </h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          Architecture firms are using AI at every phase — concept generation,
          code research, specification writing, rendering, and project
          documentation. Firms using AI tools report saving{" "}
          <strong>15-25% of project hours</strong> on documentation and visualization
          alone, freeing principals and project architects for higher-value design work.
        </p>
        <p className="leading-relaxed text-gray-700">
          The tools below are being used by practices from sole proprietors to global
          firms. They cover the full project lifecycle, not just the glamorous
          visualization work.
        </p>
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
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-sm font-bold text-stone-700">
                          {globalIndex}
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900">
                          <Link href={toolUrl} className="hover:text-blue-600">{tool.name}</Link>
                        </h3>
                      </div>
                      <StarRating rating={tool.rating} />
                    </div>
                    <div className="text-right">
                      <span className="inline-block rounded-full bg-stone-100 px-3 py-1 text-sm font-medium text-stone-800">
                        {tool.pricing}
                      </span>
                      <p className="mt-1 text-xs text-gray-500">{tool.pricingDetails}</p>
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
                          className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
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

      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">FAQs</h2>
        <div className="space-y-6">
          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">How is AI being used in architecture firms?</h3>
            <p className="leading-relaxed text-gray-700">
              AI is most commonly used for design visualization (Midjourney, Stable Diffusion), building code research (Claude, ChatGPT), specification drafting (ChatGPT), meeting documentation (Otter.ai), and project management (Notion AI). Leading firms also use AI for parametric design exploration and generative layout optimization.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">Will AI replace architects?</h3>
            <p className="leading-relaxed text-gray-700">
              No. Architecture requires synthesis of technical, functional, contextual, and human factors that AI cannot replicate. AI eliminates repetitive tasks (spec writing, rendering, documentation), freeing architects for the design judgment, stakeholder management, and creative synthesis that define the profession. AI makes architects more productive, not obsolete.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">What's the best AI tool for architectural visualization?</h3>
            <p className="leading-relaxed text-gray-700">
              For conceptual rendering: <strong>Midjourney</strong> (best image quality, easiest prompting). For real-time rendering in your existing workflow: <strong>Enscape</strong> (integrates with Revit, SketchUp, Rhino). For sketch-to-render with full control: <strong>Stable Diffusion + ControlNet</strong> (free, powerful, steep learning curve).
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-lg bg-gradient-to-r from-stone-700 to-gray-800 p-8 text-white">
        <h2 className="mb-4 text-3xl font-bold">Design More, Document Less</h2>
        <p className="mb-6 text-lg leading-relaxed text-stone-200">
          Start with the tool that saves the most time on your current project. Midjourney for client presentations, ChatGPT for spec drafts, or Otter.ai for meeting minutes — any one of these pays for itself in the first week.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/tools"
            className="inline-flex items-center rounded-lg bg-white px-6 py-3 font-semibold text-gray-900 transition-colors hover:bg-gray-100"
          >
            Explore All AI Tools →
          </Link>
          <Link
            href="/blog/best-ai-design-tools-2026"
            className="inline-flex items-center rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-gray-900"
          >
            AI Design Tools →
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Best AI Tools for Architects in 2026: Design Faster, Win More Bids",
            description: "Best AI tools for architects in 2026 — design generation, rendering, code research, specifications, and project management.",
            author: { "@type": "Organization", name: "AISOTools" },
            publisher: { "@type": "Organization", name: "AISOTools", logo: { "@type": "ImageObject", url: "https://aisotools.com/logo.png" } },
            datePublished: "2026-04-24",
            dateModified: "2026-04-24",
            mainEntityOfPage: { "@type": "WebPage", "@id": "https://aisotools.com/blog/best-ai-tools-for-architects-2026" },
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
              { "@type": "Question", name: "How is AI being used in architecture firms?", acceptedAnswer: { "@type": "Answer", text: "AI is most commonly used for design visualization (Midjourney), building code research (Claude), specification drafting (ChatGPT), meeting documentation (Otter.ai), and project management (Notion AI)." } },
              { "@type": "Question", name: "Will AI replace architects?", acceptedAnswer: { "@type": "Answer", text: "No. Architecture requires synthesis of technical, functional, contextual, and human factors AI cannot replicate. AI eliminates repetitive tasks, freeing architects for design judgment and creative synthesis." } },
              { "@type": "Question", name: "What is the best AI tool for architectural visualization?", acceptedAnswer: { "@type": "Answer", text: "For conceptual rendering: Midjourney. For real-time rendering in your workflow: Enscape. For sketch-to-render control: Stable Diffusion with ControlNet." } },
            ],
          }),
        }}
      />
    </article>
  );
}
