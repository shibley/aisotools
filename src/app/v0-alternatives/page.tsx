import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best v0 Alternatives in 2026: 7 Top AI UI Generators",
  description:
    "Looking for v0 alternatives? Compare the best AI UI generators including Lovable, Bolt.new, and Framer AI. Find the best tool to turn prompts into production-ready React UIs.",
  keywords: [
    "v0 alternatives",
    "best v0 competitors",
    "AI UI generators",
    "Lovable vs v0",
    "Bolt.new vs v0",
    "AI frontend generator",
    "generative UI tools",
  ],
  openGraph: {
    title: "Best v0 Alternatives in 2026: 7 Top AI UI Generators",
    description:
      "Comparing the best v0 alternatives with pricing, features, and export options. Whether you need a rapid prototype or a full-stack app.",
    url: "https://aisotools.com/v0-alternatives",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/v0-alternatives",
  },
};

interface V0Alternative {
  name: string;
  slug: string;
  description: string;
  pricing: string;
  pricingComparison: string;
  strengths: string[];
  weaknesses: string[];
  vsV0: string;
  bestFor: string;
  features: string[];
  exportOptions: string;
  privacy: string;
}

const alternatives: V0Alternative[] = [
  {
    name: "Lovable",
    slug: "lovable",
    description:
      "The most powerful 'full-stack' alternative to v0, capable of building complete apps with databases and auth, not just UI.",
    pricing: "Freemium",
    pricingComparison: "Free tier available. Pro plans typically $20-50/mo (comparable to v0 Pro).",
    strengths: [
      "Full-stack capabilities (DB, Auth, API)",
      "Superior code quality for complex logic",
      "GitHub synchronization for seamless dev handoff",
      "Iterative editing via natural language",
      "Fast deployment to Netlify/Vercel",
      "Deep integration with Supabase",
    ],
    weaknesses: [
      "Slightly steeper learning curve than v0",
      "Slower initial generation for extremely complex apps",
      "Premium features gated behind subscription",
    ],
    vsV0:
      "v0 is a master of the 'UI snapshot'; Lovable is a master of the 'app'. If you just need a component, v0 is faster. If you need a working product, Lovable wins.",
    bestFor: "Entrepreneurs, full-stack developers, MVP builders",
    features: [
      "Full-stack app generation",
      "GitHub Sync",
      "Supabase integration",
      "Real-time preview",
      "Natural language iteration",
      "Deployment pipeline",
    ],
    exportOptions: "Full GitHub repo export, direct deployment",
    privacy: "Good — enterprise-grade data handling, opt-out of training",
  },
  {
    name: "Bolt.new",
    slug: "bolt",
    description:
      "StackBlitz's AI-powered web container that lets you prompt, run, and deploy full-stack apps entirely in the browser.",
    pricing: "Freemium",
    pricingComparison: "Free tier available. Pro plans for higher token limits (~$20/mo).",
    strengths: [
      "Runs full Node.js environment in-browser (WebContainers)",
      "Instant setup — no local environment needed",
      "Direct deployment to Netlify/Vercel",
      "Extremely fast iteration loops",
      "Supports full npm ecosystem",
      "Excellent for rapid prototyping",
    ],
    weaknesses: [
      "Limited by browser resources for massive apps",
      "Less focus on 'pixel-perfect' design than v0",
      "Can occasionally hallucinate npm package versions",
    ],
    vsV0:
      "Bolt.new is essentially 'v0 with a terminal'. While v0 gives you a preview, Bolt gives you a running development environment. Better for developers who want to tweak the code immediately.",
    bestFor: "Rapid prototyping, hackathons, developers who hate local setup",
    features: [
      "In-browser WebContainers",
      "Full npm support",
      "One-click deployment",
      "AI-driven file creation",
      "Terminal access",
      "Real-time hot reloading",
    ],
    exportOptions: "Download as ZIP, push to GitHub",
    privacy: "Moderate — based on StackBlitz privacy policies",
  },
  {
    name: "Create.xyz",
    slug: "create-xyz",
    description:
      "A powerful AI app builder that blends the ease of v0 with a more intuitive visual editor and integrated backend logic.",
    pricing: "Freemium",
    pricingComparison: "Free tier available. Pro plans for advanced components and more generations.",
    strengths: [
      "Hybrid approach: Prompting + Visual Editing",
      "Integrated basic backend logic (no separate DB needed for simple apps)",
      "Very low barrier to entry",
      "Fast iteration on UI components",
      "Strong community templates",
      "Good support for custom API integrations",
    ],
    weaknesses: [
      "Code export is less 'industry standard' than Lovable/v0",
      "Scaling to complex enterprise apps can be limiting",
      "Less robust version control",
    ],
    vsV0:
      "Create.xyz feels more like a 'No-Code' tool with AI, whereas v0 feels like a 'Code' tool with AI. Create is better for non-technical founders.",
    bestFor: "Non-technical founders, rapid MVP testing, internal tool builders",
    features: [
      "Prompt-to-App",
      "Visual Component Editor",
      "Integrated Logic",
      "Custom API Connectors",
      "One-click Publish",
      "Collaborative Editing",
    ],
    exportOptions: "Hosted by Create.xyz, some code export options",
    privacy: "Moderate — standard SaaS data policies",
  },
  {
    name: "Framer AI",
    slug: "framer-ai",
    description:
      "The gold standard for high-fidelity, design-first AI website generation. Turns prompts into stunning, animated landing pages.",
    pricing: "Freemium",
    pricingComparison: "Free for hobbyists. Paid plans for custom domains and advanced features ($15-30/mo).",
    strengths: [
      "Unmatched visual polish and aesthetics",
      "Built-in advanced animations and interactions",
      "Professional-grade design tools (Figma-like)",
      "Direct publishing to the web",
      "Best-in-class CMS integration",
      "Responsive design is handled automatically",
    ],
    weaknesses: [
      "Not for 'apps' (logic/databases) — strictly for websites",
      "No React code export (proprietary format)",
      "Steeper learning curve for the visual editor",
    ],
    vsV0:
      "v0 builds components for developers; Framer builds sites for designers. If you need a React component for an app, use v0. If you need a landing page that looks like a million dollars, use Framer.",
    bestFor: "Marketers, designers, agency owners, landing page optimization",
    features: [
      "AI Page Generation",
      "Advanced Animation Engine",
      "Visual CMS",
      "Responsive Breakpoints",
      "Figma Import",
      "Direct Hosting",
    ],
    exportOptions: "Hosted only (proprietary)",
    privacy: "Excellent — professional design tool standards",
  },
  {
    name: "Webflow AI",
    slug: "webflow-ai",
    description:
      "Enterprise-grade visual development with AI that helps build structures, style elements, and generate content at scale.",
    pricing: "Freemium",
    pricingComparison: "Free starter plan. Paid plans for hosting and CMS ($14-35/mo+).",
    strengths: [
      "Industry-standard for visual development",
      "Deep control over CSS and DOM structure",
      "Powerful CMS for large-scale sites",
      "Enterprise-grade security and hosting",
      "AI helps with styling and layout optimization",
      "Strong ecosystem of plugins",
    ],
    weaknesses: [
      "Much slower to 'prompt' a full page than v0",
      "Complexity can be overwhelming for beginners",
      "Not focused on generative React components",
    ],
    vsV0:
      "Webflow is a professional development platform; v0 is a generative tool. Webflow AI enhances the workflow of a pro dev; v0 creates the starting point for a dev.",
    bestFor: "Professional web developers, agencies, corporate marketing sites",
    features: [
      "AI Style Generation",
      "Visual CSS Control",
      "Advanced CMS",
      "Enterprise Hosting",
      "Custom Code Blocks",
      "Team Collaboration",
    ],
    exportOptions: "Code export available on higher-tier plans",
    privacy: "Excellent — enterprise-level compliance",
  },
  {
    name: "Uizard",
    slug: "uizard",
    description:
      "AI-powered prototyping tool that turns hand-drawn sketches or prompts into high-fidelity wireframes and mockups.",
    pricing: "Freemium",
    pricingComparison: "Free tier available. Pro plans for more projects and AI credits (~$12-19/mo).",
    strengths: [
      "Screenshot-to-UI conversion (amazing for cloning features)",
      "Sketch-to-UI conversion",
      "Fastest way to create a multi-screen prototype",
      "Low friction for non-designers",
      "Collaboration tools for feedback",
      "Huge library of pre-built components",
    ],
    weaknesses: [
      "Not for production code — strictly for prototyping",
      "Less control over the final 'code' output",
      "Visuals can sometimes feel generic",
    ],
    vsV0:
      "Uizard is for the 'Design' phase; v0 is for the 'Build' phase. Use Uizard to map out the user journey and v0 to actually code the components.",
    bestFor: "Product managers, UX designers, early-stage ideation",
    features: [
      "Autodesigner (Prompt-to-UI)",
      "Screenshot-to-Design",
      "Sketch-to-UI",
      "Interactive Prototypes",
      "Collaborative Canvas",
      "UI Theme Generator",
    ],
    exportOptions: "Design files, no production code export",
    privacy: "Good — standard prototyping tool policies",
  },
  {
    name: "Relume",
    slug: "relume",
    description:
      "AI-powered sitemap and wireframe builder that generates the structural blueprint of a site before you move to high-fidelity design.",
    pricing: "Freemium",
    pricingComparison: "Free tier available. Pro plans for advanced AI features (~$20/mo).",
    strengths: [
      "Best for planning the 'Information Architecture'",
      "Generates full sitemaps from a single prompt",
      "AI wireframes that map perfectly to Figma/Webflow",
      "Saves hours of structural planning",
      "Huge library of proven layout patterns",
      "Seamless export to design tools",
    ],
    weaknesses: [
      "Does not generate final styled UI or code",
      "Focuses on structure, not the 'look and feel'",
      "Limited use case compared to a general AI UI generator",
    ],
    vsV0:
      "Relume is the 'Architect'; v0 is the 'Builder'. Relume tells you where the buttons should go and what the pages should be; v0 actually writes the code for those buttons.",
    bestFor: "UX Strategists, Agency owners, Site planners",
    features: [
      "AI Sitemap Generator",
      "AI Wireframe Builder",
      "Figma Sync",
      "Webflow Export",
      "Component Library",
      "Content Generation",
    ],
    exportOptions: "Export to Figma and Webflow",
    privacy: "Good — focused on professional agency workflows",
  },
];

const faqItems = [
  {
    question: "What is the best free alternative to v0?",
    answer:
      "Bolt.new is currently the best free alternative for developers who want a running environment. For a more 'design-first' free experience, Framer AI's free tier is excellent for landing pages.",
  },
  {
    question: "Can v0 alternatives build full apps with databases?",
    answer:
      "Yes, Lovable and Bolt.new are designed for this. While v0 focuses primarily on the frontend UI, Lovable integrates deeply with Supabase for databases and auth, and Bolt.new runs a full Node.js environment in the browser.",
  },
  {
    question: "Which AI UI generator has the best code export?",
    answer:
      "Lovable and Bolt.new provide the most 'production-ready' exports, often syncing directly to GitHub. v0 is also excellent as it produces clean Tailwind CSS and React code.",
  },
  {
    question: "Is there a v0 alternative for non-developers?",
    answer:
      "Yes, Create.xyz and Framer AI are much more accessible for non-technical users. Create.xyz allows you to build functional apps without knowing how to code, while Framer AI is perfect for creating stunning websites visually.",
  },
  {
    question: "How do I choose between v0, Lovable, and Bolt.new?",
    answer:
      "Use v0 for rapid UI component iteration and 'look and feel'. Use Lovable if you need a full-stack application with a database. Use Bolt.new if you want a full development environment in your browser without any local setup.",
  },
];

function generateJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best v0 Alternatives in 2026: 7 Top AI UI Generators",
    description:
      "Compare the best v0 alternatives — Lovable, Bolt.new, Create.xyz, Framer AI, Webflow AI, Uizard, and Relume. Pricing, features, and export options.",
    url: "https://aisotools.com/v0-alternatives",
    author: {
      "@type": "Organization",
      name: "AISO Tools",
    },
    publisher: {
      "@type": "Organization",
      name: "AISO Tools",
      url: "https://aisotools.com",
    },
    dateModified: "2026-04-14",
    mainEntity: {
      "@type": "ItemList",
      name: "Best v0 Alternatives",
      itemListElement: alternatives.map((alt, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: alt.name,
        description: alt.description,
        url: `https://aisotools.com/tool/${alt.slug}`,
      })),
    },
  };
}

function generateFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export default function V0AlternativesPage() {
  const jsonLd = generateJsonLd();
  const faqJsonLd = generateFaqJsonLd();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-white">
          Home
        </Link>
        <span className="mx-2">›</span>
        <Link href="/alternatives" className="hover:text-white">
          Alternatives
        </Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">v0 Alternatives</span>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Best v0 Alternatives in 2026
        </h1>
        <p className="text-xl text-gray-400 max-w-4xl">
          v0 changed how we build UIs — but the ecosystem has exploded. From full-stack AI app builders to high-fidelity design tools, here are the 7 best v0 alternatives for every workflow.
        </p>
        <div className="flex flex-wrap gap-2 mt-6">
          <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
            Updated April 2026
          </span>
          <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
            7 alternatives compared
          </span>
          <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
            12 min read
          </span>
        </div>
      </header>

      {/* Quick Summary Card */}
      <section className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-bold mb-3">⚡ Quick Pick Guide</h2>
        <ul className="space-y-2 text-gray-300">
          <li>
            <strong>Best for full-stack apps:</strong>{" "}
            <Link href="/tool/lovable" className="text-blue-400 hover:text-blue-300">
              Lovable
            </Link>{" "}
            — DB, Auth, and GitHub sync for production-ready apps
          </li>
          <li>
            <strong>Best for rapid prototyping:</strong>{" "}
            <Link href="/tool/bolt" className="text-blue-400 hover:text-blue-300">
              Bolt.new
            </Link>{" "}
            — Full Node.js environment running directly in your browser
          </li>
          <li>
            <strong>Best for non-coders:</strong>{" "}
            <Link href="/tool/create-xyz" className="text-blue-400 hover:text-blue-300">
              Create.xyz
            </Link>{" "}
            — Hybrid prompt-and-visual builder for fast MVPs
          </li>
          <li>
            <strong>Best for visual polish:</strong>{" "}
            <Link href="/tool/framer-ai" className="text-blue-400 hover:text-blue-300">
              Framer AI
            </Link>{" "}
            — The gold standard for high-end landing pages and animations
          </li>
          <li>
            <strong>Best for enterprise dev:</strong>{" "}
            <Link href="/tool/webflow-ai" className="text-blue-400 hover:text-blue-300">
              Webflow AI
            </Link>{" "}
            — Professional visual development with deep CSS control
          </li>
          <li>
            <strong>Best for prototyping:</strong>{" "}
            <Link href="/tool/uizard" className="text-blue-400 hover:text-blue-300">
              Uizard
            </Link>{" "}
            — Turn screenshots and sketches into interactive wireframes
          </li>
          <li>
            <strong>Best for site planning:</strong>{" "}
            <Link href="/tool/relume" className="text-blue-400 hover:text-blue-300">
              Relume
            </Link>{" "}
            — AI-powered sitemaps and wireframes before the build
          </li>
        </ul>
      </section>

      {/* Why switch section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Why Look for v0 Alternatives?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold mb-3 text-yellow-400">⚙️ Full-Stack Needs</h3>
            <p className="text-gray-400 text-sm">
              v0 is amazing for UI components, but a full app needs a database, authentication, and API logic. Tools like Lovable and Bolt.new bridge this gap by providing full-stack capabilities.
            </p>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold mb-3 text-yellow-400">🎨 Design Control</h3>
            <p className="text-gray-400 text-sm">
              While v0 is great for "code-first" design, some projects need "design-first" polish. Framer AI and Webflow provide a level of visual control and animation that purely generative code cannot yet match.
            </p>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold mb-3 text-yellow-400">🚀 Deployment Flow</h3>
            <p className="text-gray-400 text-sm">
              v0 is integrated with Vercel, but if you need a different hosting environment or a full GitHub repo synchronization, alternatives like Bolt.new and Lovable offer more flexible deployment pipelines.
            </p>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold mb-3 text-yellow-400">📐 Prototyping Speed</h3>
            <p className="text-gray-400 text-sm">
              Building production code is one thing, but mapping a user journey is another. Uizard and Relume are faster for the "ideation" phase where you need wireframes, not finished React components.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">v0 Alternatives at a Glance</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800 text-left">
                <th className="pb-3 pr-4 text-gray-400 font-medium">Tool</th>
                <th className="pb-3 pr-4 text-gray-400 font-medium">Starting Price</th>
                <th className="pb-3 pr-4 text-gray-400 font-medium">Core Focus</th>
                <th className="pb-3 text-gray-400 font-medium">Export Type</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {alternatives.map((alt) => (
                <tr key={alt.slug} className="hover:bg-gray-900/50 transition-colors">
                  <td className="py-3 pr-4 font-medium">
                    <Link
                      href={`/tool/${alt.slug}`}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      {alt.name}
                    </Link>
                  </td>
                  <td className="py-3 pr-4 text-gray-400">{alt.pricing}</td>
                  <td className="py-3 pr-4 text-gray-400">{alt.bestFor.split(",")[0]}</td>
                  <td className="py-3 text-gray-400">{alt.exportOptions.split(",")[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Individual Cards */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">
          The 7 Best v0 Alternatives — Detailed Breakdown
        </h2>
        <div className="space-y-8">
          {alternatives.map((alt, index) => (
            <div
              key={alt.slug}
              className="bg-gray-900 rounded-2xl border border-gray-800 p-8 hover:border-gray-700 transition-colors"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-2xl font-bold text-gray-500">#{index + 1}</span>
                    <h3 className="text-2xl font-bold">
                      <Link
                        href={`/tool/${alt.slug}`}
                        className="hover:text-blue-400 transition-colors"
                      >
                        {alt.name}
                      </Link>
                    </h3>
                  </div>
                  <p className="text-gray-400">{alt.description}</p>
                </div>
                <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium ml-4 flex-shrink-0">
                  {alt.pricing}
                </span>
              </div>

              {/* Pricing comparison */}
              <div className="bg-gray-800/50 rounded-lg p-3 mb-6 text-sm text-gray-300">
                <span className="text-gray-500">💰 Pricing: </span>
                {alt.pricingComparison}
              </div>

              {/* Pros/Cons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-green-400 mb-3">✅ Strengths</h4>
                  <ul className="space-y-1.5">
                    {alt.strengths.map((s) => (
                      <li key={s} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="text-green-500 mt-0.5 flex-shrink-0">+</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-400 mb-3">⚠️ Weaknesses</h4>
                  <ul className="space-y-1.5">
                    {alt.weaknesses.map((w) => (
                      <li key={w} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="text-red-500 mt-0.5 flex-shrink-0">−</span>
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* vs v0 */}
              <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-blue-400 mb-1 text-sm">
                  {alt.name} vs v0
                </h4>
                <p className="text-gray-300 text-sm">{alt.vsV0}</p>
              </div>

              {/* Meta details */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-gray-500 text-xs uppercase tracking-wide block mb-1">
                    Best For
                  </span>
                  <span className="text-gray-300">{alt.bestFor}</span>
                </div>
                <div>
                  <span className="text-gray-500 text-xs uppercase tracking-wide block mb-1">
                    Export Options
                  </span>
                  <span className="text-gray-300">{alt.exportOptions}</span>
                </div>
                <div>
                  <span className="text-gray-500 text-xs uppercase tracking-wide block mb-1">
                    Privacy
                  </span>
                  <span className="text-gray-300">{alt.privacy}</span>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6 flex gap-3">
                <Link
                  href={`/tool/${alt.slug}`}
                  className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Full {alt.name} Review →
                </Link>
                {alt.name === "Lovable" && (
                  <Link
                    href="/v0-vs-lovable"
                    className="border border-gray-700 hover:border-gray-600 text-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    v0 vs Lovable →
                  </Link>
                )}
                {alt.name === "Bolt.new" && (
                  <Link
                    href="/bolt-vs-v0"
                    className="border border-gray-700 hover:border-gray-600 text-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    v0 vs Bolt.new →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqItems.map((item) => (
            <div key={item.question} className="border-b border-gray-800 pb-6">
              <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
              <p className="text-gray-400">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
        <h2 className="text-2xl font-bold mb-3">
          Still comparing AI UI generators?
        </h2>
        <p className="text-gray-400 mb-6">
          Browse our full directory of {" "}
          <Link href="/category/coding" className="text-blue-400 hover:text-blue-300">
            AI coding tools
          </Link>{" "}
          or compare specific pairs:
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/v0-vs-lovable"
            className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            v0 vs Lovable
          </Link>
          <Link
            href="/bolt-vs-v0"
            className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            v0 vs Bolt.new
          </Link>
          <Link
            href="/lovable-vs-bolt"
            className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Lovable vs Bolt.new
          </Link>
          <Link
            href="/alternatives"
            className="border border-gray-600 hover:border-gray-500 text-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            All Alternatives →
          </Link>
        </div>
      </section>
    </div>
  );
}
