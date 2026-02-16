import { tools } from "@/data/tools";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Design Tools 2026: 10 Tools Compared",
  description:
    "Compare the best AI design tools including Figma AI, Adobe Firefly, Canva AI, Framer AI, and more. Find the perfect AI design assistant for your creative workflow.",
  keywords: [
    "AI design tools",
    "best AI graphic design",
    "AI logo makers",
    "AI design generators",
    "Figma AI",
    "Adobe Firefly",
  ],
  openGraph: {
    title: "Best AI Design Tools 2026: 10 Tools Compared",
    description:
      "In-depth comparison of the top 10 AI design tools. Compare design types, output quality, pricing, and integrations.",
    url: "https://aisotools.com/ai-design-tools",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/ai-design-tools",
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
  designType: string;
  outputQuality: string;
  integrations: string;
}

const designTools: DesignToolComparison[] = [
  {
    name: "Figma AI",
    slug: "figma-ai",
    description: "AI-powered features integrated into Figma, the industry-standard collaborative design platform.",
    pricing: "Freemium",
    pricingDetails: "Free tier, Professional $12/editor/mo, Organization $45/editor/mo, Enterprise $75/editor/mo",
    strengths: [
      "Industry-standard platform",
      "Real-time collaboration",
      "Massive plugin ecosystem",
      "Design systems support",
      "Developer handoff tools",
      "Version control",
    ],
    weaknesses: [
      "AI features still limited compared to dedicated tools",
      "Steeper learning curve",
      "Requires design knowledge",
    ],
    bestFor: "Professional UI/UX design, product design teams, collaborative workflows",
    features: ["Auto Layout AI", "Content generation", "Image editing", "Smart suggestions", "Plugin marketplace"],
    designType: "UI/UX, product design, prototypes, design systems",
    outputQuality: "Professional-grade vector designs",
    integrations: "Slack, Jira, Notion, Miro, developer tools, 1000+ plugins",
  },
  {
    name: "Adobe Firefly",
    slug: "adobe-firefly",
    description: "Adobe's generative AI tool integrated across Creative Cloud for image generation and editing.",
    pricing: "Freemium",
    pricingDetails: "Free tier (25 credits/mo), Premium $4.99/mo, Creative Cloud included",
    strengths: [
      "Creative Cloud integration",
      "Commercial-safe training data",
      "Photoshop/Illustrator integration",
      "Text effects and styles",
      "High-quality outputs",
      "Professional features",
    ],
    weaknesses: [
      "Credit-based system",
      "Requires Adobe ecosystem",
      "Can be expensive",
    ],
    bestFor: "Professional designers, Adobe users, commercial projects",
    features: ["Text to image", "Generative fill", "Text effects", "Recolor", "Photoshop/Illustrator integration"],
    designType: "Marketing graphics, digital art, photo editing, illustrations",
    outputQuality: "Professional-grade, commercially safe",
    integrations: "Photoshop, Illustrator, Express, InDesign, entire Creative Cloud",
  },
  {
    name: "Canva AI",
    slug: "canva-ai",
    description: "AI-powered design features in Canva, the popular drag-and-drop design platform.",
    pricing: "Freemium",
    pricingDetails: "Free tier, Pro $12.99/mo, Teams $14.99/user/mo, Enterprise custom",
    strengths: [
      "Extremely user-friendly",
      "Massive template library",
      "Magic Design features",
      "Brand kit support",
      "Multi-platform (social, print, video)",
      "No design experience needed",
    ],
    weaknesses: [
      "Less precise than professional tools",
      "Template-heavy designs",
      "Limited customization depth",
    ],
    bestFor: "Non-designers, social media content, marketing materials, quick designs",
    features: ["Magic Design", "Magic Eraser", "Text to Image", "Background Remover", "Brand Kit"],
    designType: "Social media, presentations, marketing, logos, videos",
    outputQuality: "Good quality, template-based, beginner-friendly",
    integrations: "Social platforms, Google Drive, Dropbox, Mailchimp, HubSpot, Slack",
  },
  {
    name: "Framer AI",
    slug: "framer-ai",
    description: "AI website builder that generates complete, responsive websites from text descriptions.",
    pricing: "Freemium",
    pricingDetails: "Free tier, Mini $5/site/mo, Basic $15/site/mo, Pro $25/site/mo",
    strengths: [
      "Full website generation",
      "Production-ready code",
      "Responsive by default",
      "CMS integration",
      "SEO optimized",
      "Fast performance",
    ],
    weaknesses: [
      "Website-focused only",
      "Learning curve for advanced features",
      "Per-site pricing can add up",
    ],
    bestFor: "Website design, landing pages, portfolios, startups",
    features: ["AI site generation", "CMS", "Animations", "SEO tools", "Forms", "Analytics"],
    designType: "Websites, landing pages, portfolios, marketing sites",
    outputQuality: "High-quality, production-ready websites",
    integrations: "CMS, forms, analytics, custom code, API, Zapier",
  },
  {
    name: "Galileo AI",
    slug: "galileo-ai",
    description: "AI-powered UI design tool that generates editable UI designs from text descriptions.",
    pricing: "Paid",
    pricingDetails: "Waitlist, Pro $19/mo (estimated)",
    strengths: [
      "High-quality UI generation",
      "Editable designs",
      "Modern UI patterns",
      "Fast iteration",
      "Figma export",
    ],
    weaknesses: [
      "Limited availability",
      "Newer tool",
      "Focused on UI only",
    ],
    bestFor: "UI/UX designers, rapid prototyping, product teams",
    features: ["Text to UI", "Figma export", "Component library", "Design systems", "Iteration"],
    designType: "UI design, mobile apps, web apps, dashboards",
    outputQuality: "High-quality, modern UI designs",
    integrations: "Figma, design tools",
  },
  {
    name: "Uizard",
    slug: "uizard",
    description: "AI-powered design tool that converts sketches and screenshots into editable designs.",
    pricing: "Freemium",
    pricingDetails: "Free tier, Pro $12/mo, Business $39/mo, Enterprise custom",
    strengths: [
      "Sketch to design",
      "Screenshot to design",
      "Template library",
      "Collaboration features",
      "Mobile app mockups",
      "Easy to learn",
    ],
    weaknesses: [
      "Less control than professional tools",
      "Limited customization",
      "AI can be inconsistent",
    ],
    bestFor: "Non-designers, rapid prototyping, wireframing, mockups",
    features: ["Sketch conversion", "Screenshot scan", "Templates", "Collaboration", "Export"],
    designType: "Mobile apps, web apps, wireframes, prototypes",
    outputQuality: "Good for mockups and prototypes",
    integrations: "Export to Sketch, Figma, Adobe XD, PNG, PDF",
  },
  {
    name: "Looka",
    slug: "looka",
    description: "AI-powered logo and brand identity generator with complete brand kit creation.",
    pricing: "Paid",
    pricingDetails: "Logo $20 one-time, Brand Kit $96 one-time, Subscription $96/year",
    strengths: [
      "Fast logo generation",
      "Complete brand kits",
      "Business card designs",
      "Social media templates",
      "Professional quality",
      "Affordable",
    ],
    weaknesses: [
      "Logo-focused",
      "Limited uniqueness",
      "Not for complex branding",
    ],
    bestFor: "Startups, small businesses, entrepreneurs, quick branding",
    features: ["Logo design", "Brand kit", "Business cards", "Social templates", "Brand colors"],
    designType: "Logos, brand identity, business cards, social graphics",
    outputQuality: "Professional logos, good for small businesses",
    integrations: "Download high-res files, brand kit export",
  },
  {
    name: "Designify",
    slug: "designify",
    description: "AI-powered automatic design tool that creates professional designs from photos.",
    pricing: "Freemium",
    pricingDetails: "Free tier (limited), Pro $4.99/mo, Business $12.99/mo",
    strengths: [
      "Automatic background removal",
      "Smart shadows and effects",
      "Batch processing",
      "E-commerce focused",
      "Fast processing",
      "API available",
    ],
    weaknesses: [
      "Limited design types",
      "Photo-focused",
      "Less creative control",
    ],
    bestFor: "E-commerce, product photos, marketing images, batch editing",
    features: ["Background removal", "Smart shadows", "Effects", "Batch processing", "API"],
    designType: "Product photography, e-commerce images, marketing visuals",
    outputQuality: "High-quality product photos and graphics",
    integrations: "API, batch upload, e-commerce platforms",
  },
  {
    name: "Khroma",
    slug: "khroma",
    description: "AI color palette generator that learns your preferences and creates custom color schemes.",
    pricing: "Free",
    pricingDetails: "Completely free",
    strengths: [
      "Personalized color learning",
      "Unlimited palettes",
      "Save favorites",
      "Color combinations",
      "Free to use",
      "Great for inspiration",
    ],
    weaknesses: [
      "Color palettes only",
      "No design creation",
      "Limited functionality",
    ],
    bestFor: "Color selection, brand colors, design inspiration, developers",
    features: ["AI color learning", "Palette generation", "Favorites", "Combinations", "Search"],
    designType: "Color palettes, color schemes, brand colors",
    outputQuality: "Excellent color combinations",
    integrations: "Copy hex codes, export palettes",
  },
  {
    name: "Autodraw",
    slug: "autodraw",
    description: "Google's free AI tool that recognizes sketches and suggests professional illustrations.",
    pricing: "Free",
    pricingDetails: "Completely free from Google",
    strengths: [
      "Completely free",
      "Fast and simple",
      "No account needed",
      "Great for non-designers",
      "Instant results",
    ],
    weaknesses: [
      "Limited features",
      "Basic functionality",
      "Limited illustration library",
    ],
    bestFor: "Quick sketches, simple illustrations, presentations, non-designers",
    features: ["Sketch recognition", "Illustration suggestions", "Drawing tools", "Export"],
    designType: "Simple illustrations, diagrams, quick sketches",
    outputQuality: "Basic but clean illustrations",
    integrations: "Download PNG, basic export",
  },
];

export default function AIDesignToolsPage() {
  const toolsBySlug = new Map(tools.map((t) => [t.slug, t]));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-white">
          Home
        </Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">AI Design Tools</span>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Best AI Design Tools 2026: 10 Tools Compared
        </h1>
        <p className="text-xl text-gray-400 max-w-4xl">
          Compare the top AI design tools including Figma AI, Adobe Firefly, Canva AI, and more.
          Find the perfect AI design assistant for your creative workflow with detailed comparisons
          of design types, output quality, pricing, and integrations.
        </p>
        <div className="flex flex-wrap gap-2 mt-6">
          <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
            Updated February 2026
          </span>
          <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
            10 Design Tools Compared
          </span>
        </div>
      </header>

      {/* Quick Navigation */}
      <section className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-12">
        <h2 className="text-lg font-semibold mb-3">Quick Navigation</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 text-sm">
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
        <h2 className="text-3xl font-bold mb-4">The AI Design Revolution</h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-4">
          AI has democratized design. What once required years of Adobe expertise can now be
          accomplished with simple text descriptions. From complete website generation to logo
          creation and photo editing, AI design tools have transformed creative workflows.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed mb-4">
          Modern AI design tools serve different purposes: Figma AI and Galileo AI excel at UI/UX
          design, Adobe Firefly and Canva AI handle marketing graphics, while specialized tools like
          Looka focus on branding and Designify on product photography.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed">
          This guide compares 10 leading AI design tools across design types, output quality,
          pricing, and integrations to help you choose the right tool for your creative needs.
        </p>
      </section>

      {/* Comparison Table */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Quick Comparison Table</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-gray-900 border border-gray-800 rounded-xl">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">Tool</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Pricing</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Design Type</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Best For</th>
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
                  <td className="px-4 py-3 text-sm text-gray-400">{tool.designType.split(",")[0]}</td>
                  <td className="px-4 py-3 text-sm text-gray-400">{tool.bestFor.split(",")[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Detailed Reviews */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Detailed AI Design Tool Reviews</h2>
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

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                  {/* Pricing */}
                  <div>
                    <h4 className="font-semibold text-gray-300 mb-2">💰 Pricing</h4>
                    <p className="text-gray-400 text-sm mb-1">{tool.pricing}</p>
                    <p className="text-gray-500 text-xs">{tool.pricingDetails}</p>
                  </div>

                  {/* Design Type */}
                  <div>
                    <h4 className="font-semibold text-gray-300 mb-2">🎨 Design Type</h4>
                    <p className="text-gray-400 text-sm">{tool.designType}</p>
                  </div>

                  {/* Output Quality */}
                  <div>
                    <h4 className="font-semibold text-gray-300 mb-2">⭐ Output Quality</h4>
                    <p className="text-gray-400 text-sm">{tool.outputQuality}</p>
                  </div>

                  {/* Integrations */}
                  <div className="lg:col-span-2">
                    <h4 className="font-semibold text-gray-300 mb-2">🔌 Integrations</h4>
                    <p className="text-gray-400 text-sm">{tool.integrations}</p>
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
        <h2 className="text-3xl font-bold mb-6">Which AI Design Tool Should You Choose?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Professional Designers</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Figma AI:</strong> Industry standard, full design systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Adobe Firefly:</strong> Creative Cloud integration</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Galileo AI:</strong> Advanced UI generation</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Non-Designers</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Canva AI:</strong> Easiest to learn, templates</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Uizard:</strong> Sketch to design instantly</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Autodraw:</strong> Free, simple, fast</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Branding & Logos</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Looka:</strong> Complete brand kits, affordable</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Canva AI:</strong> Logo maker with brand tools</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Khroma:</strong> Perfect color palette generation</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Websites</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Framer AI:</strong> Full website generation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Figma AI:</strong> Professional UI/UX design</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Galileo AI:</strong> Modern web UI patterns</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For E-commerce</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Designify:</strong> Product photo perfection</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Adobe Firefly:</strong> Professional product images</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Canva AI:</strong> Marketing graphics at scale</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Social Media</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Canva AI:</strong> Purpose-built for social</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Adobe Firefly:</strong> High-quality graphics</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Looka:</strong> Consistent brand templates</span>
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
            <h3 className="text-lg font-semibold mb-2">What is the best AI design tool in 2026?</h3>
            <p className="text-gray-400">
              For professionals, <strong>Figma AI</strong> offers the most comprehensive platform.
              For beginners, <strong>Canva AI</strong> is the easiest to use. For branding,
              <strong>Looka</strong> provides excellent value. The "best" depends on your specific
              design needs and skill level.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Can AI design tools replace human designers?</h3>
            <p className="text-gray-400">
              No. AI design tools are powerful assistants, not replacements. They excel at generating
              initial concepts, templates, and routine work, but lack the strategic thinking, brand
              understanding, and creative nuance of experienced designers. They make designers more
              productive, not obsolete.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Are AI-generated designs copyright-free?</h3>
            <p className="text-gray-400">
              It depends on the tool. <strong>Adobe Firefly</strong> uses commercially safe training data.
              Most tools grant you commercial usage rights to generated content, but always check the
              specific terms. For critical commercial projects, verify licensing or add human
              modifications.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Which AI design tool is best for beginners?</h3>
            <p className="text-gray-400">
              <strong>Canva AI</strong> is the most beginner-friendly with its intuitive interface and
              massive template library. <strong>Autodraw</strong> is great for simple sketches.
              <strong>Uizard</strong> is excellent for app mockups without design experience.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Do I need design experience to use AI design tools?</h3>
            <p className="text-gray-400">
              Not for tools like Canva AI, Looka, or Autodraw — they're built for non-designers.
              Professional tools like Figma AI and Adobe Firefly benefit from design knowledge but are
              becoming increasingly accessible. Start with beginner-friendly tools and graduate to
              professional ones as needed.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">What's the most affordable AI design tool?</h3>
            <p className="text-gray-400">
              <strong>Khroma</strong> and <strong>Autodraw</strong> are completely free.
              <strong>Canva AI</strong> offers a generous free tier. <strong>Adobe Firefly</strong>
              provides 25 free credits monthly. <strong>Designify</strong> starts at just $4.99/month.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Explore More AI Tools</h2>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Discover hundreds of AI tools across all categories — from coding assistants to
          productivity tools and AI chatbots.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Browse All Tools
          </Link>
          <Link
            href="/ai-coding-tools"
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            AI Coding Tools →
          </Link>
        </div>
      </section>
    </div>
  );
}
