import Link from "next/link";
import type { Metadata } from "next";

const year = 2026;

export const metadata: Metadata = {
  title: `Best Figma Alternatives (${year}) — Top 10 UI/UX Design Tools | AISO Tools`,
  description: `Looking for Figma alternatives? Compare the 10 best UI/UX design and prototyping tools with pricing, pros & cons, and which fits your team in ${year}.`,
  alternates: {
    canonical: "https://aisotools.com/alternatives/figma",
  },
  openGraph: {
    title: `Best Figma Alternatives (${year}) — Top 10 UI/UX Design Tools`,
    description: `Compare the 10 best Figma alternatives for UI design, prototyping, and design systems.`,
    url: "https://aisotools.com/alternatives/figma",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Figma Alternatives (${year})`,
    description: `Top 10 Figma alternatives for UI/UX design and prototyping.`,
  },
};

const alternatives = [
  {
    rank: 1,
    name: "Penpot",
    slug: "penpot",
    url: "https://penpot.app",
    pricing: "Free / Open Source",
    pricingColor: "bg-green-500/10 text-green-400",
    freeTier: true,
    startingPrice: "Free forever (self-hosted or cloud)",
    tagline: "Open-source Figma alternative with full design and prototyping",
    description:
      "Penpot is the most complete open-source Figma alternative, built for cross-functional design and development teams. Unlike Figma, Penpot uses web-native SVG and CSS standards, meaning developer handoff uses real CSS values rather than proprietary translations. Its self-hosting option gives security-conscious teams full data control. The core feature set — vector editing, components, interactive prototyping, design tokens — matches Figma for most day-to-day work.",
    features: [
      "Web-native SVG/CSS-first rendering for accurate dev handoff",
      "Full component and design system support",
      "Interactive prototyping with transitions",
      "Self-hosted on your own infrastructure",
      "Real-time collaboration like Figma",
      "Design tokens (CSS variables native support)",
    ],
    whySwitchReasons: [
      "Figma's pricing jumped 300% after the Adobe acquisition blocked — Penpot is permanently free",
      "Self-hosted deployment gives enterprises full data sovereignty with no third-party access",
      "CSS-native output means dev handoff shows real CSS values, not approximations",
    ],
    bestFor: "Teams wanting full Figma feature parity at zero cost, especially those with compliance or self-hosting requirements.",
    compareUrl: "/compare/figma-vs-penpot",
  },
  {
    rank: 2,
    name: "Framer",
    slug: "framer",
    url: "https://framer.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (1 site). Mini $5/mo, Basic $15/mo",
    tagline: "AI-powered design-to-publish tool for marketing sites and portfolios",
    description:
      "Framer has evolved from a pure prototyping tool into an AI-first design-and-publish platform. Where Figma stops at design, Framer publishes live websites directly — making it the choice for marketing teams and agencies who want design fidelity without engineering handoff friction. Its AI landing page generator can produce styled pages from a prompt, and the responsive layout engine handles breakpoints automatically. For teams building marketing sites and landing pages, Framer eliminates the design→dev handoff entirely.",
    features: [
      "AI website generator from text prompt",
      "Design-to-publish (no engineering handoff needed)",
      "Responsive breakpoints with smart layout engine",
      "CMS for blog and content-driven pages",
      "Component library with interactive states",
      "Real-time collaboration and commenting",
    ],
    whySwitchReasons: [
      "Figma designs still need a developer to build — Framer publishes the website directly from your design",
      "AI page generation can produce a working layout in seconds from a description",
      "Marketing teams skip the engineering backlog entirely for landing pages and campaigns",
    ],
    bestFor: "Marketing teams, agencies, and founders who need pixel-perfect websites without an engineering bottleneck.",
    compareUrl: "/compare/figma-vs-framer",
  },
  {
    rank: 3,
    name: "Sketch",
    slug: "sketch",
    url: "https://sketch.com",
    pricing: "Paid",
    pricingColor: "bg-orange-500/10 text-orange-400",
    freeTier: false,
    startingPrice: "$12/mo per editor (web). $99/yr (Mac app license)",
    tagline: "The original Mac design tool that pioneered the modern design workflow",
    description:
      "Sketch was the tool Figma was built to replace — but it's held on through a cloud-first pivot and remains the preferred choice for Mac-heavy design teams who value its native performance and ecosystem of third-party plugins. Sketch's component system (Symbols) and design token support are mature. Its Smart Layout and Smart Distribute features remain powerful. The cloud version added real-time collaboration, making the Mac-only limitation less impactful for teams where most designers are on Apple hardware.",
    features: [
      "Native Mac app with GPU-accelerated rendering",
      "Symbols and nested components with overrides",
      "Smart Layout for adaptive components",
      "Cloud collaboration and design review",
      "Massive plugin ecosystem (3,000+ plugins)",
      "Shared Libraries for design system distribution",
    ],
    whySwitchReasons: [
      "Figma runs in a browser — Sketch's native Mac app is faster with no internet dependency",
      "Plugin ecosystem (3,000+) includes specialized tools that don't exist in Figma's ecosystem",
      "Some studios prefer the $99/yr Mac license model over Figma's per-editor subscription",
    ],
    bestFor: "Mac-centric design studios and product teams who value native performance, extensive plugins, and a mature component system.",
    compareUrl: "/compare/figma-vs-sketch",
  },
  {
    rank: 4,
    name: "Adobe XD",
    slug: "adobe-xd",
    url: "https://adobe.com/products/xd.html",
    pricing: "Included with Creative Cloud",
    pricingColor: "bg-red-500/10 text-red-400",
    freeTier: false,
    startingPrice: "Included in Adobe Creative Cloud ($55/mo)",
    tagline: "Adobe's design and prototyping tool, integrated with Photoshop and Illustrator",
    description:
      "Adobe XD ships with Creative Cloud subscriptions and offers the deepest integration with Adobe's ecosystem — Photoshop assets, Illustrator components, and After Effects animations flow into XD natively. While Adobe paused active feature development to focus on integrating Figma (before the deal collapsed), XD remains a capable tool for teams already paying for Creative Cloud who need design-to-prototype workflow within Adobe's suite. Note: Adobe has not officially discontinued XD, but the future roadmap remains unclear.",
    features: [
      "Native integration with Photoshop, Illustrator, After Effects",
      "Repeat Grid for rapid data-driven layouts",
      "Auto-animate for micro-interaction prototyping",
      "Voice prototyping (Alexa skill design)",
      "Coediting and shared specs for developer handoff",
      "Creative Cloud Libraries for asset management",
    ],
    whySwitchReasons: [
      "Teams on Creative Cloud can use XD at no additional cost vs. Figma's per-editor fees",
      "After Effects integration enables motion design handoff that Figma cannot match natively",
      "Photoshop/Illustrator assets sync instantly without export/import friction",
    ],
    bestFor: "Adobe Creative Cloud subscribers and design teams deeply invested in the Photoshop/Illustrator workflow.",
    compareUrl: "/compare/figma-vs-adobe-xd",
  },
  {
    rank: 5,
    name: "Webflow",
    slug: "webflow",
    url: "https://webflow.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (staging only). Basic $14/mo to publish",
    tagline: "Visual web builder that produces clean HTML/CSS without code",
    description:
      "Webflow sits between design tool and web development framework — it's where designers go when they're tired of handing off Figma files and want to build the production site themselves. Webflow generates semantic HTML, CSS, and JavaScript directly from visual design work, with a CMS, hosting, and ecommerce built in. For product marketing sites, campaign pages, and content-driven sites, Webflow replaces both Figma and the engineering team.",
    features: [
      "Production-ready HTML/CSS output from visual design",
      "Built-in CMS for content management",
      "Hosting with global CDN included",
      "Ecommerce capabilities",
      "Logic (no-code site logic and conditions)",
      "Client-friendly editor mode for content updates",
    ],
    whySwitchReasons: [
      "Figma is design-only — Webflow designs become live websites without a developer",
      "CMS + hosting in one tool eliminates the WordPress/Squarespace dependency for content sites",
      "Non-technical stakeholders can update content via the Webflow Editor without touching design",
    ],
    bestFor: "Designers who want to ship production websites without engineering help and agencies building client sites.",
    compareUrl: "/compare/figma-vs-webflow",
  },
  {
    rank: 6,
    name: "Lunacy",
    slug: "lunacy",
    url: "https://icons8.com/lunacy",
    pricing: "Free",
    pricingColor: "bg-green-500/10 text-green-400",
    freeTier: true,
    startingPrice: "Free forever",
    tagline: "Free offline Figma/Sketch alternative with built-in assets",
    description:
      "Lunacy by Icons8 is a free, offline-capable design tool that opens Figma and Sketch files natively. Its killer advantage: built-in access to 180,000+ icons, photos, illustrations, and UI kits without leaving the app. For designers who work in low-connectivity environments or want a no-cost alternative with professional asset libraries, Lunacy delivers everything needed for UI design without a subscription or internet dependency.",
    features: [
      "Opens Figma and Sketch files natively",
      "180,000+ built-in icons, photos, and illustrations",
      "Offline mode — works without internet",
      "AI background removal and image tools",
      "Components, auto-layout, prototyping",
      "Windows and macOS support",
    ],
    whySwitchReasons: [
      "Figma requires internet — Lunacy works offline and syncs when connected",
      "Built-in Icons8 asset library eliminates trips to stock sites for icons and images",
      "Completely free with no per-seat pricing, no restrictions on commercial projects",
    ],
    bestFor: "Freelancers and small teams who want a capable, fully offline design tool with built-in professional assets at zero cost.",
    compareUrl: "/compare/figma-vs-lunacy",
  },
  {
    rank: 7,
    name: "Whimsical",
    slug: "whimsical",
    url: "https://whimsical.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (limited). Pro $10/mo per user",
    tagline: "Fast wireframing and flowcharts with AI generation",
    description:
      "Whimsical isn't a full Figma replacement but fills a specific gap: rapid wireframing and flow diagramming at the concept stage, before you're ready for high-fidelity design. Its AI feature generates wireframes from a text description, making it the fastest way to get a layout on screen for stakeholder review. For product managers, UX researchers, and early-stage founders who need quick visual communication without the overhead of a full design tool, Whimsical is the right layer.",
    features: [
      "AI wireframe generator from text prompt",
      "Flowcharts, mind maps, and sticky notes",
      "Pre-built UI wireframe components",
      "Real-time collaboration with multiplayer cursors",
      "Embed in Notion, Confluence, and Linear",
      "One-click export to Figma for hi-fi handoff",
    ],
    whySwitchReasons: [
      "Figma has a steep learning curve — Whimsical generates a wireframe from a prompt in 30 seconds",
      "Product managers and non-designers can create usable wireframes without design tool expertise",
      "Embeds directly into Notion docs and Linear issues for in-context design reference",
    ],
    bestFor: "Product teams, PMs, and UX researchers who need fast lo-fi wireframes and user flows without full design tool complexity.",
    compareUrl: "/compare/figma-vs-whimsical",
  },
  {
    rank: 8,
    name: "Axure RP",
    slug: "axure-rp",
    url: "https://axure.com",
    pricing: "Paid",
    pricingColor: "bg-orange-500/10 text-orange-400",
    freeTier: false,
    startingPrice: "$29/mo per user",
    tagline: "Enterprise-grade prototyping with conditional logic and dynamic content",
    description:
      "Axure occupies a unique niche: high-fidelity interactive prototypes with conditional logic, dynamic panels, and data-driven interactions that no visual design tool can match. Enterprise UX teams and consultancies use Axure when the prototype needs to behave exactly like the production app — showing different content based on user inputs, simulating complex form flows, or demonstrating role-based access. Figma prototyping is powerful but ultimately click-through; Axure's prototypes are functionally interactive.",
    features: [
      "Conditional logic (if/else flows in prototypes)",
      "Dynamic panels and variables",
      "Repeater widgets for data-driven UI simulation",
      "Team sharing with password-protected URLs",
      "Annotations and redlines for specification",
      "Enterprise SSO and SAML support",
    ],
    whySwitchReasons: [
      "Figma prototypes are click-through — Axure prototypes respond to data input like a real app",
      "Complex form flows, conditional branches, and multi-state UIs require Axure's logic capabilities",
      "Enterprise procurement teams prefer Axure's established vendor status and enterprise compliance",
    ],
    bestFor: "Enterprise UX teams, government contractors, and consultancies requiring functionally interactive prototype specifications.",
    compareUrl: "/compare/figma-vs-axure",
  },
  {
    rank: 9,
    name: "Marvel",
    slug: "marvel",
    url: "https://marvelapp.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (1 project). Pro $12/mo",
    tagline: "Simple prototyping from static screens with user testing built in",
    description:
      "Marvel targets the user research and testing workflow that Figma treats as secondary. Its built-in user testing panel lets you recruit participants, share prototypes, and collect structured feedback without leaving the platform. For UX researchers who need quick click-through prototypes from Sketch or Figma imports and want integrated usability testing, Marvel removes the need for separate tools like UserTesting or Maze.",
    features: [
      "Import from Figma and Sketch for quick prototyping",
      "Built-in user testing panel with participant recruitment",
      "Hotspot-based click-through prototyping",
      "Design handoff with specs and assets",
      "In-app user interviews and feedback collection",
      "Team collaboration with annotation comments",
    ],
    whySwitchReasons: [
      "Figma requires a separate tool for usability testing — Marvel combines prototype and testing in one workflow",
      "User testing panel recruits participants directly, eliminating UserTesting.com dependency",
      "Non-designers can build testable prototypes from imported Figma/Sketch screens",
    ],
    bestFor: "UX researchers and product teams who want integrated prototype-to-usability-testing workflow without stitching tools together.",
    compareUrl: "/compare/figma-vs-marvel",
  },
  {
    rank: 10,
    name: "Canva",
    slug: "canva",
    url: "https://canva.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free. Canva Pro $15/mo",
    tagline: "AI-powered design for non-designers — presentations, social, and marketing",
    description:
      "Canva is not a UX design tool, but it's a legitimate Figma alternative for teams whose design work is marketing-focused: presentations, social media graphics, documents, and brand collateral. Its AI text-to-image, background removal, and Magic Design features are genuinely powerful, and the template library removes the blank-canvas paralysis for non-designers. For teams where 80% of 'design' is really marketing production work, Canva's template-first approach is faster than Figma.",
    features: [
      "50,000+ templates for social, presentations, and marketing",
      "AI text-to-image and image editing",
      "Magic Design generates layouts from a prompt",
      "Brand kit with logo, fonts, and color management",
      "Presentation mode with presenter notes",
      "One-click background removal",
    ],
    whySwitchReasons: [
      "Figma has no templates — Canva starts with 50,000+ so non-designers can produce on-brand work immediately",
      "Marketing teams can own design production without a dedicated UI/UX designer",
      "AI features (Magic Write, Magic Design, text-to-image) reduce creative work to minutes",
    ],
    bestFor: "Marketing teams, small businesses, and content creators who need polished marketing assets without design expertise.",
    compareUrl: "/alternatives/canva",
  },
];

const faqs = [
  {
    question: "What is the best free Figma alternative?",
    answer:
      "Penpot is the strongest free Figma alternative with full feature parity — components, prototyping, auto-layout, and real-time collaboration, all at zero cost. It's open-source and can be self-hosted. Lunacy is another strong free option, particularly for Windows users, with the added benefit of working offline. For marketing-focused teams, Canva's free tier covers most non-UI design needs.",
  },
  {
    question: "Can Figma alternatives open .fig files?",
    answer:
      "Lunacy directly opens Figma (.fig) and Sketch (.sketch) files without conversion. Most other alternatives (Penpot, Framer, Sketch) don't natively open .fig files — you'd need to export from Figma as SVG or use the Figma API to migrate assets. If file compatibility is critical, Lunacy is the most seamless migration path from Figma.",
  },
  {
    question: "Is Figma still free in 2026?",
    answer:
      "Figma offers a free Starter plan limited to 3 files and 1 project, with unlimited collaborators in view-only mode. The full professional plan starts at $15/editor/month (Professional) or $45/editor/month (Organization). After the planned Adobe acquisition fell through in 2024, Figma raised prices significantly and reduced the free tier. This pricing change drove many teams to evaluate alternatives.",
  },
  {
    question: "Which Figma alternative is best for web design?",
    answer:
      "Framer and Webflow are the best Figma alternatives for web design specifically, because both tools publish production websites directly — eliminating the design-to-dev handoff entirely. Framer excels for marketing sites and portfolios; Webflow is better for CMS-driven sites and ecommerce. For teams who want to design AND ship, these tools replace both Figma and the developer.",
  },
  {
    question: "What do enterprise teams use instead of Figma?",
    answer:
      "Enterprise teams that can't use cloud-based tools often self-host Penpot for full data control. Teams needing enterprise security features (SSO, SAML, audit logs) look at Sketch (Team plan) or self-hosted Penpot. For prototyping with complex logic, Axure RP is the preferred enterprise tool. Adobe XD, included with Creative Cloud enterprise licenses, is also common in Adobe-heavy organizations.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Best Figma Alternatives (${year})`,
    description: `Top 10 alternatives to Figma for UI/UX design, prototyping, and web design.`,
    numberOfItems: alternatives.length,
    itemListElement: alternatives.map((alt, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: alt.name,
      url: `https://aisotools.com/tool/${alt.slug}`,
      description: alt.tagline,
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://aisotools.com" },
      { "@type": "ListItem", position: 2, name: "Alternatives", item: "https://aisotools.com/alternatives" },
      { "@type": "ListItem", position: 3, name: "Figma Alternatives", item: "https://aisotools.com/alternatives/figma" },
    ],
  },
];

export default function FigmaAlternativesPage() {
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/alternatives" className="hover:text-white transition">Alternatives</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-300">Figma Alternatives</span>
        </nav>

        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-xl bg-purple-600/20 flex items-center justify-center text-2xl font-bold text-purple-400 mx-auto mb-6">
            F
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Best Figma Alternatives in {year}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Compare the {alternatives.length} best alternatives to Figma for UI/UX design, prototyping, and web publishing.
          </p>
          <div className="flex items-center justify-center gap-3 mt-4 flex-wrap">
            <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
              Figma: Free → $15/editor/mo
            </span>
            <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
              🎨 UI/UX Design
            </span>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Why Look for Figma Alternatives?</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Figma is the dominant collaborative design tool, but its pricing has significantly increased since the Adobe acquisition attempt. Per-editor costs, reduced free tiers, and enterprise compliance concerns have pushed many teams to evaluate alternatives. Whether the driver is cost, data sovereignty, offline access, or wanting a tool that publishes directly to web — there are strong Figma alternatives for every use case.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { reason: "💰 Rising Per-Editor Costs", detail: "Figma Professional costs $15/editor/month. Teams of 10 pay $1,800/yr just for the design tool. Penpot and Lunacy deliver comparable functionality at zero cost." },
              { reason: "🔒 Data Sovereignty", detail: "Figma stores all design files on US-based cloud servers. Teams in regulated industries (healthcare, finance, government) often need self-hosted alternatives like Penpot." },
              { reason: "📴 Offline Access", detail: "Figma requires an internet connection to function. Sketch and Lunacy are native desktop apps that work offline — critical for designers who travel or work in secure environments." },
              { reason: "🚀 Design-to-Production", detail: "Figma stops at design files — a developer still needs to code the site. Framer and Webflow publish the design as a live website, eliminating the handoff entirely." },
            ].map((item, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="font-semibold text-lg mb-2">{item.reason}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Quick Comparison: Figma vs Alternatives</h2>
          <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-800/50 text-left">
                  <th className="p-4 font-medium text-gray-400">#</th>
                  <th className="p-4 font-medium text-gray-400">Tool</th>
                  <th className="p-4 font-medium text-gray-400">Pricing</th>
                  <th className="p-4 font-medium text-gray-400">Free Tier?</th>
                  <th className="p-4 font-medium text-gray-400">Key Differentiator</th>
                </tr>
              </thead>
              <tbody>
                {alternatives.map((alt) => (
                  <tr key={alt.slug} className="border-t border-gray-800 hover:bg-gray-800/30 transition">
                    <td className="p-4 text-gray-500">{alt.rank}</td>
                    <td className="p-4">
                      <Link href={`#${alt.slug}`} className="font-medium text-white hover:text-purple-400 transition">
                        {alt.name}
                      </Link>
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${alt.pricingColor}`}>
                        {alt.pricing}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={alt.freeTier ? "text-green-400" : "text-gray-500"}>
                        {alt.freeTier ? "✓ Yes" : "✗ No"}
                      </span>
                    </td>
                    <td className="p-4 text-gray-400 max-w-xs">{alt.tagline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Detailed Look at Each Figma Alternative</h2>
          <div className="space-y-8">
            {alternatives.map((alt) => (
              <div key={alt.slug} id={alt.slug} className="bg-gray-900 border border-gray-800 rounded-xl p-6 sm:p-8 scroll-mt-20">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center text-xl font-bold text-purple-400 flex-shrink-0">
                    {alt.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-xl font-bold">{alt.rank}. {alt.name}</h3>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${alt.pricingColor}`}>
                        {alt.pricing}
                      </span>
                      {alt.freeTier && (
                        <span className="bg-green-500/10 text-green-400 px-2 py-0.5 rounded-full text-xs font-medium">
                          Free tier
                        </span>
                      )}
                    </div>
                    <p className="text-gray-500 text-sm mt-1">{alt.tagline}</p>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed mb-6">{alt.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-300 mb-3 uppercase tracking-wide">Key Features</h4>
                    <ul className="space-y-2">
                      {alt.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="text-purple-400 mt-0.5 flex-shrink-0">✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-300 mb-3 uppercase tracking-wide">Why Switch from Figma?</h4>
                    <ul className="space-y-2">
                      {alt.whySwitchReasons.map((r, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="text-orange-400 mt-0.5 flex-shrink-0">→</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 flex-wrap pt-4 border-t border-gray-800">
                  <div>
                    <span className="text-xs text-gray-500 uppercase tracking-wide">Best For</span>
                    <p className="text-sm text-gray-300 mt-0.5">{alt.bestFor}</p>
                  </div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <div className="text-right">
                      <span className="text-xs text-gray-500">Starting price</span>
                      <p className="text-sm font-medium text-white">{alt.startingPrice}</p>
                    </div>
                    <a
                      href={alt.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition flex-shrink-0"
                    >
                      Try {alt.name} →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Which Figma Alternative Should You Choose?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "For UI/UX Teams Wanting Free", items: [{ name: "Penpot", detail: "Full feature parity, open-source, self-hostable — the most complete free Figma replacement" }, { name: "Lunacy", detail: "Offline-capable, opens Figma files, built-in asset library" }] },
              { title: "For Web/Marketing Teams", items: [{ name: "Framer", detail: "AI website builder that publishes directly from design — no dev handoff" }, { name: "Webflow", detail: "Design + CMS + hosting for content-driven sites" }] },
              { title: "For Mac-Native Teams", items: [{ name: "Sketch", detail: "Native Mac performance, mature plugin ecosystem, $99/yr flat pricing" }, { name: "Lunacy", detail: "Works on Mac and Windows with offline capability" }] },
              { title: "For Enterprise / Regulated", items: [{ name: "Penpot (self-hosted)", detail: "Full data sovereignty on your own infrastructure" }, { name: "Axure RP", detail: "Complex interactive prototypes with enterprise compliance features" }] },
            ].map((section, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">{section.title}</h3>
                <ul className="space-y-2 text-gray-400">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start">
                      <span className="text-purple-400 mr-2">→</span>
                      <span><strong className="text-gray-300">{item.name}:</strong> {item.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Explore More</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/alternatives/canva" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-purple-500/50 transition">
              <h3 className="font-semibold mb-1">🎨 Canva Alternatives</h3>
              <p className="text-gray-400 text-sm">Best design tools for non-designers</p>
            </Link>
            <Link href="/best-ai-design-tools-2026" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-purple-500/50 transition">
              <h3 className="font-semibold mb-1">✨ AI Design Tools</h3>
              <p className="text-gray-400 text-sm">Best AI-powered design tools in 2026</p>
            </Link>
            <Link href="/alternatives/notion-ai" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-purple-500/50 transition">
              <h3 className="font-semibold mb-1">📝 Notion AI Alternatives</h3>
              <p className="text-gray-400 text-sm">Best AI writing and workspace tools</p>
            </Link>
            <Link href="/tool/framer" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-purple-500/50 transition">
              <h3 className="font-semibold mb-1">🚀 Framer</h3>
              <p className="text-gray-400 text-sm">AI website builder for designers</p>
            </Link>
            <Link href="/tool/webflow" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-purple-500/50 transition">
              <h3 className="font-semibold mb-1">🌐 Webflow</h3>
              <p className="text-gray-400 text-sm">Visual web builder with CMS</p>
            </Link>
            <Link href="/alternatives" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-purple-500/50 transition">
              <h3 className="font-semibold mb-1">🔄 All Alternatives</h3>
              <p className="text-gray-400 text-sm">Browse alternatives for 280+ AI tools</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
