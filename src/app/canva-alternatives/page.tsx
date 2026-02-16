import { tools } from "@/data/tools";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Canva Alternatives: 12 Best AI Design Tools 2026",
  description:
    "Discover the best Canva alternatives including Adobe Express, Figma AI, Piktochart, Visme, and more. Compare features, pricing, and find the perfect AI design tool for your creative needs.",
  keywords: [
    "Canva alternatives",
    "best AI design tools",
    "graphic design software",
    "Adobe Express vs Canva",
    "Figma AI",
    "free design tools",
  ],
  openGraph: {
    title: "Canva Alternatives: 12 Best AI Design Tools 2026",
    description:
      "Compare the best Canva alternatives. In-depth reviews of Adobe Express, Figma, Piktochart, Visme, and 8 more AI-powered design tools.",
    url: "https://aisotools.com/canva-alternatives",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/canva-alternatives",
  },
};

interface DesignToolComparison {
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

const designTools: DesignToolComparison[] = [
  {
    name: "Adobe Express",
    slug: "adobe-express",
    description: "Adobe's simplified design platform combining AI-powered creation with professional-grade Adobe tools and assets.",
    pricing: "Freemium",
    pricingDetails: "Free tier, Premium $9.99/mo, Creative Cloud All Apps $59.99/mo",
    strengths: [
      "Adobe Firefly AI integration",
      "Access to Adobe Stock (Premium)",
      "Professional templates",
      "Seamless Creative Cloud integration",
      "Brand kit and fonts",
      "Remove backgrounds with one click",
    ],
    weaknesses: [
      "Less intuitive than Canva for beginners",
      "Free tier more limited",
      "Requires Adobe account",
    ],
    bestFor: "Professionals already in Adobe ecosystem, high-quality outputs, brand consistency",
    features: ["AI image generation", "Adobe Stock", "Brand kit", "Quick actions", "Animation"],
  },
  {
    name: "Figma",
    slug: "figma",
    description: "Collaborative design platform with AI features, primarily used for UI/UX but expanding to general design work.",
    pricing: "Freemium",
    pricingDetails: "Free (3 projects), Professional $12/editor/mo, Organization $45/editor/mo",
    strengths: [
      "Best-in-class collaboration",
      "Real-time multiplayer editing",
      "Powerful prototyping",
      "FigJam for brainstorming",
      "AI design tools",
      "Developer handoff features",
    ],
    weaknesses: [
      "Steeper learning curve",
      "Less template variety than Canva",
      "Primarily designed for UI/UX work",
    ],
    bestFor: "UI/UX designers, product teams, collaborative design work, prototyping",
    features: ["Real-time collaboration", "Prototyping", "AI tools", "FigJam", "Dev mode"],
  },
  {
    name: "Piktochart",
    slug: "piktochart",
    description: "Infographic and visual content creation platform with AI assistance, focused on data visualization and presentations.",
    pricing: "Freemium",
    pricingDetails: "Free tier, Pro $29/mo, Business $99/mo",
    strengths: [
      "Excellent for infographics",
      "Data visualization tools",
      "AI-powered chart creation",
      "Presentation mode",
      "Professional templates",
      "Map and chart builders",
    ],
    weaknesses: [
      "Less versatile than general design tools",
      "Fewer social media templates",
      "Higher pricing for teams",
    ],
    bestFor: "Infographics, presentations, data visualization, reports, educators",
    features: ["Infographic templates", "Data visualization", "AI tools", "Presentations", "Maps"],
  },
  {
    name: "Visme",
    slug: "visme",
    description: "All-in-one visual content creation platform with strong presentation and data visualization capabilities.",
    pricing: "Freemium",
    pricingDetails: "Free tier, Starter $29/mo, Pro $59/mo, Enterprise custom",
    strengths: [
      "Comprehensive content types",
      "Advanced data visualization",
      "Video and animation creation",
      "Brand kit features",
      "Interactive content",
      "Analytics dashboard",
    ],
    weaknesses: [
      "Can be overwhelming for beginners",
      "Premium pricing",
      "Performance issues with complex projects",
    ],
    bestFor: "Professional presentations, marketing teams, data-heavy content, interactive media",
    features: ["Presentations", "Infographics", "Video", "Data widgets", "Brand kit"],
  },
  {
    name: "Snappa",
    slug: "snappa",
    description: "Streamlined graphic design tool optimized for social media and marketing content with quick creation workflows.",
    pricing: "Freemium",
    pricingDetails: "Free tier (3 downloads/mo), Pro $15/mo, Team $30/user/mo",
    strengths: [
      "Very fast workflow",
      "Unlimited downloads (Pro)",
      "Buffer/Hootsuite integration",
      "Pre-sized templates",
      "Graphics library included",
      "Simple, clean interface",
    ],
    weaknesses: [
      "Fewer features than Canva",
      "Smaller template library",
      "Limited free tier (3 downloads/mo)",
    ],
    bestFor: "Social media managers, quick content creation, marketers on a budget",
    features: ["Social templates", "Scheduler integration", "Graphics library", "Effects", "Background remover"],
  },
  {
    name: "Crello (VistaCreate)",
    slug: "vistacreate",
    description: "Design platform from Vista (formerly Crello) with animation capabilities and video creation tools.",
    pricing: "Freemium",
    pricingDetails: "Free tier, Pro $10/mo, Business $20/mo",
    strengths: [
      "Affordable pricing",
      "Strong animation features",
      "Video creation tools",
      "Large template library",
      "Background remover",
      "Format resizing",
    ],
    weaknesses: [
      "Less known brand",
      "Fewer integrations",
      "Smaller community than Canva",
    ],
    bestFor: "Animated content, video creation, budget-conscious creators, social media",
    features: ["Animation", "Video editor", "Templates", "Background remover", "Resize tool"],
  },
  {
    name: "Designs.ai",
    slug: "designs-ai",
    description: "AI-powered design suite with automated logo, video, and graphic creation using machine learning.",
    pricing: "Paid",
    pricingDetails: "Basic $29/mo, Pro $69/mo, Enterprise custom",
    strengths: [
      "Full AI automation",
      "Logo maker included",
      "Video creation suite",
      "Speech synthesis",
      "Multiple AI tools in one",
      "Color palette generator",
    ],
    weaknesses: [
      "No free tier",
      "Less control than manual tools",
      "AI results can be generic",
    ],
    bestFor: "Quick automated designs, startups needing logos, AI-first workflows",
    features: ["AI logo maker", "Video creator", "Design maker", "Speech synthesis", "Color matcher"],
  },
  {
    name: "Glorify",
    slug: "glorify",
    description: "Design tool built specifically for e-commerce and product marketing with advanced product mockup features.",
    pricing: "Paid",
    pricingDetails: "Pro $49/mo (annual $29/mo), Business $149/mo (annual $99/mo)",
    strengths: [
      "E-commerce focus",
      "Advanced product mockups",
      "Background removal",
      "Smart shadows and reflections",
      "Brand kit features",
      "Template library for e-commerce",
    ],
    weaknesses: [
      "No free tier",
      "Expensive compared to alternatives",
      "Limited outside e-commerce use",
    ],
    bestFor: "E-commerce businesses, product photography, Amazon sellers, Shopify stores",
    features: ["Product mockups", "Background removal", "Smart shadows", "E-commerce templates", "Brand kit"],
  },
  {
    name: "Easil",
    slug: "easil",
    description: "Brand-focused design platform with template locking and brand control features for teams and agencies.",
    pricing: "Freemium",
    pricingDetails: "Free tier, Plus $7.50/mo, Pro $59/mo",
    strengths: [
      "Brand template locking",
      "Agency-friendly features",
      "Affordable pricing",
      "Drag-and-drop simplicity",
      "Team collaboration",
      "Template marketplace",
    ],
    weaknesses: [
      "Smaller feature set",
      "Less AI capabilities",
      "Smaller user community",
    ],
    bestFor: "Agencies, franchises, teams needing brand consistency, template creators",
    features: ["Brand locking", "Team templates", "Collaboration", "Marketplace", "Social media"],
  },
  {
    name: "Kittl",
    slug: "kittl",
    description: "Design platform focused on typography and text effects with AI-powered image generation for creators and designers.",
    pricing: "Freemium",
    pricingDetails: "Free tier, Pro $15/mo, Expert $30/mo",
    strengths: [
      "Outstanding typography tools",
      "AI image generation",
      "Text effects and warping",
      "Vintage and retro styles",
      "Vector editing",
      "Commercial license included",
    ],
    weaknesses: [
      "Focused primarily on text/logo design",
      "Smaller template variety",
      "Less general-purpose than Canva",
    ],
    bestFor: "Logo designers, t-shirt creators, print-on-demand, typography enthusiasts",
    features: ["Typography", "AI images", "Text effects", "Vector tools", "Commercial use"],
  },
  {
    name: "Desygner",
    slug: "desygner",
    description: "Multi-platform design tool with strong mobile apps and print-on-demand integration for creators.",
    pricing: "Freemium",
    pricingDetails: "Free tier, Pro $9.95/mo, Business $39/mo",
    strengths: [
      "Excellent mobile apps",
      "Affordable pricing",
      "Print-on-demand integration",
      "Smart resize feature",
      "Large template library",
      "Cross-platform sync",
    ],
    weaknesses: [
      "Less polish than major competitors",
      "Fewer AI features",
      "Limited free tier",
    ],
    bestFor: "Mobile designers, print-on-demand sellers, multi-device users, budget creators",
    features: ["Mobile apps", "Smart resize", "Print integration", "Templates", "Cloud sync"],
  },
  {
    name: "Canva",
    slug: "canva",
    description: "The world's most popular design platform with comprehensive AI tools, massive template library, and intuitive interface.",
    pricing: "Freemium",
    pricingDetails: "Free tier, Pro $14.99/mo, Teams $29.99/mo for 5 users",
    strengths: [
      "Largest template library (600K+)",
      "Most intuitive interface",
      "Magic Studio AI suite",
      "Huge community and resources",
      "Print-on-demand integration",
      "Video and presentation tools",
    ],
    weaknesses: [
      "Can be expensive for teams",
      "Performance issues with complex designs",
      "Some templates feel overused",
    ],
    bestFor: "General design work, social media, presentations, teams, non-designers",
    features: ["Magic Studio", "Templates", "Brand kit", "Video editor", "AI tools", "Print"],
  },
];

export default function CanvaAlternativesPage() {
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
        <span className="text-gray-300">Canva Alternatives</span>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Canva Alternatives: 12 Best AI Design Tools 2026
        </h1>
        <p className="text-xl text-gray-400 max-w-4xl">
          Looking for Canva alternatives? Compare the best AI-powered design tools including Adobe Express,
          Figma, Piktochart, Visme, and more. Find the perfect graphic design platform for your specific
          needs, whether it's social media, infographics, UI/UX, or professional branding.
        </p>
        <div className="flex flex-wrap gap-2 mt-6">
          <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
            Updated February 2026
          </span>
          <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
            12 Design Tools Compared
          </span>
        </div>
      </header>

      {/* Quick Navigation */}
      <section className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-12">
        <h2 className="text-lg font-semibold mb-3">Quick Navigation</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-sm">
          {designTools.map((tool) => (
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
        <h2 className="text-3xl font-bold mb-4">Why Look for Canva Alternatives?</h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-4">
          While Canva dominates the online design space with its user-friendly interface and massive template
          library, it's not the only option—and depending on your needs, you might find better alternatives.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed mb-4">
          Adobe Express offers professional-grade tools for creatives already in the Adobe ecosystem. Figma
          excels for UI/UX and collaborative design work. Piktochart and Visme specialize in data visualization.
          Glorify is purpose-built for e-commerce. And options like Snappa and Desygner offer more affordable
          pricing for specific use cases.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed">
          This guide compares 12 top Canva alternatives across features, pricing, strengths, and ideal use
          cases to help you find the right design tool.
        </p>
      </section>

      {/* Comparison Table */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Quick Comparison Table</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-gray-900 border border-gray-800 rounded-xl">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">Design Tool</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Pricing</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Best For</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Key Feature</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {designTools.map((tool) => (
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
        <h2 className="text-3xl font-bold mb-8">Detailed Canva Alternatives Reviews</h2>
        <div className="space-y-12">
          {designTools.map((tool, index) => {
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
        <h2 className="text-3xl font-bold mb-6">Which Canva Alternative Should You Choose?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Professional Designers</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Adobe Express:</strong> Adobe ecosystem integration, professional outputs</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Figma:</strong> UI/UX design, collaboration, prototyping</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Canva:</strong> Quickest workflow for social/marketing</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Data & Infographics</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Piktochart:</strong> Best for infographics and data viz</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Visme:</strong> Interactive content and presentations</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Canva:</strong> Quick charts and simple infographics</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For E-commerce & Products</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Glorify:</strong> Purpose-built for product marketing</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Desygner:</strong> Print-on-demand integration</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Canva:</strong> General e-commerce templates</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Social Media Managers</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Snappa:</strong> Fast workflow, scheduler integration</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>VistaCreate:</strong> Animation and video features</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Canva:</strong> Most templates, scheduling built-in</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Budget-Conscious Users</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Easil:</strong> $7.50/mo with team features</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Desygner:</strong> $9.95/mo with mobile apps</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>VistaCreate:</strong> $10/mo with animation</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Logos & Typography</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Kittl:</strong> Outstanding typography and text effects</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Designs.ai:</strong> AI-powered logo generator</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Adobe Express:</strong> Professional quality outputs</span>
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
            <h3 className="text-lg font-semibold mb-2">Is there a completely free Canva alternative?</h3>
            <p className="text-gray-400">
              Yes! Adobe Express has a capable free tier, Figma offers 3 free projects, and many alternatives
              like Desygner, Easil, and Snappa have free tiers with limitations. However, Canva's free tier
              is still one of the most generous with extensive templates and features.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Which is better: Adobe Express or Canva?</h3>
            <p className="text-gray-400">
              For beginners and general use, Canva is more intuitive with a larger template library. For
              professionals already using Adobe tools, Express integrates seamlessly with Creative Cloud and
              offers higher-quality outputs. Express is better for brand consistency with Adobe Stock access,
              while Canva excels at speed and ease of use.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">What's the best Canva alternative for UI/UX design?</h3>
            <p className="text-gray-400">
              Figma is the clear winner for UI/UX work with its prototyping capabilities, developer handoff
              features, and real-time collaboration. It's the industry standard for product design teams.
              Canva is not designed for UI/UX work despite recent improvements.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Can I use these tools for commercial projects?</h3>
            <p className="text-gray-400">
              Most tools offer commercial licenses with paid plans. Kittl includes commercial use even on
              free tiers. Always check specific licensing—Canva Pro and Adobe Express Premium both include
              full commercial rights, while free tiers may have restrictions.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Which tool is best for creating infographics?</h3>
            <p className="text-gray-400">
              Piktochart is purpose-built for infographics with excellent data visualization tools and chart
              builders. Visme is also strong for data-heavy content with interactive features. For simpler
              infographics, Canva's massive template library makes it very fast to create good-looking results.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Explore More AI Tools</h2>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Discover hundreds of AI tools across all categories—from video generators to writing assistants
          and productivity tools.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Browse All Tools
          </Link>
          <Link
            href="/category/design"
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            More Design Tools →
          </Link>
        </div>
      </section>
    </div>
  );
}
