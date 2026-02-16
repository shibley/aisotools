import { tools } from "@/data/tools";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Synthesia Alternatives: Best AI Video Avatar Tools 2026",
  description:
    "Discover the best Synthesia alternatives including HeyGen, D-ID, Colossyan, Elai, and more. Compare features, pricing, and find the perfect AI video avatar generator for your content needs.",
  keywords: [
    "Synthesia alternatives",
    "best AI video tools",
    "AI avatar generators",
    "HeyGen vs Synthesia",
    "D-ID video",
    "AI video creation",
  ],
  openGraph: {
    title: "Synthesia Alternatives: Best AI Video Avatar Tools 2026",
    description:
      "Compare the best Synthesia alternatives. In-depth reviews of HeyGen, D-ID, Colossyan, Elai, DeepBrain AI, and more AI video avatar platforms.",
    url: "https://aisotools.com/synthesia-alternatives",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/synthesia-alternatives",
  },
};

interface VideoToolComparison {
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

const videoTools: VideoToolComparison[] = [
  {
    name: "HeyGen",
    slug: "heygen",
    description: "Leading AI video platform with ultra-realistic avatars, voice cloning, and video translation capabilities.",
    pricing: "Freemium",
    pricingDetails: "Free trial (1 credit), Creator $29/mo, Business $89/mo, Enterprise custom",
    strengths: [
      "Most realistic avatar quality",
      "Excellent voice cloning",
      "Video translation (40+ languages)",
      "Custom avatar creation",
      "Fast rendering speed",
      "User-friendly interface",
    ],
    weaknesses: [
      "Credit-based system can be confusing",
      "Custom avatars require additional payment",
      "Limited free tier",
    ],
    bestFor: "Marketing videos, product demos, training content, multilingual videos",
    features: ["AI avatars", "Voice cloning", "Video translation", "Custom avatars", "Templates"],
  },
  {
    name: "D-ID",
    slug: "d-id",
    description: "AI video generation platform specializing in turning photos into talking videos with natural expressions.",
    pricing: "Freemium",
    pricingDetails: "Free trial (20 credits), Lite $5.90/mo, Pro $29.70/mo, Advanced $196/mo, Enterprise custom",
    strengths: [
      "Photo-to-video technology",
      "Natural facial expressions",
      "API access on all plans",
      "Fast generation speed",
      "Multiple language support",
      "Affordable entry pricing",
    ],
    weaknesses: [
      "Fewer preset avatars than competitors",
      "Limited template library",
      "Lower video resolution on basic plans",
    ],
    bestFor: "Personalized videos, customer engagement, presentations, API integration",
    features: ["Photo animation", "AI presenters", "Voice cloning", "API", "Video editor"],
  },
  {
    name: "Colossyan",
    slug: "colossyan",
    description: "Enterprise-focused AI video platform with strong L&D features, compliance tools, and team collaboration.",
    pricing: "Paid",
    pricingDetails: "Starter $28/mo, Pro $88/mo, Enterprise custom",
    strengths: [
      "Built for learning & development",
      "Scenario-based training features",
      "Compliance and branching",
      "Translation and localization",
      "Team collaboration tools",
      "SCORM export for LMS",
    ],
    weaknesses: [
      "No free tier",
      "Higher learning curve",
      "More expensive than alternatives",
    ],
    bestFor: "Corporate training, e-learning, HR content, compliance videos",
    features: ["L&D templates", "Branching scenarios", "SCORM export", "Translation", "Team workspace"],
  },
  {
    name: "Elai.io",
    slug: "elai",
    description: "AI video generator with extensive template library and article-to-video capabilities for content creators.",
    pricing: "Freemium",
    pricingDetails: "Free tier (1 min), Basic $29/mo, Advanced $99/mo, Enterprise custom",
    strengths: [
      "Large template library",
      "Article/blog to video conversion",
      "PPT to video feature",
      "Voice cloning included",
      "Multiple avatar styles",
      "Interactivity options",
    ],
    weaknesses: [
      "Free tier very limited (1 min)",
      "Watermark on lower tiers",
      "Avatar quality varies",
    ],
    bestFor: "Content repurposing, training videos, marketing content, course creators",
    features: ["Templates", "Article to video", "PPT import", "Voice cloning", "Interactive videos"],
  },
  {
    name: "DeepBrain AI",
    slug: "deepbrain-ai",
    description: "Korean AI video platform with highly realistic avatars and AI Studios for professional video production.",
    pricing: "Paid",
    pricingDetails: "Starter $30/mo, Pro $225/mo, Enterprise custom",
    strengths: [
      "Exceptional avatar realism",
      "AI Studios pro features",
      "Multi-language support",
      "Custom avatar options",
      "Conversational AI integration",
      "High-quality outputs",
    ],
    weaknesses: [
      "No free tier",
      "Expensive for individuals",
      "Steeper learning curve",
    ],
    bestFor: "Professional productions, corporate communications, high-end marketing",
    features: ["Realistic avatars", "AI Studios", "Custom avatars", "Multi-language", "Conversational AI"],
  },
  {
    name: "Rephrase.ai",
    slug: "rephrase-ai",
    description: "AI video generation platform focused on personalized videos at scale for marketing and sales teams.",
    pricing: "Paid",
    pricingDetails: "Custom pricing (contact sales)",
    strengths: [
      "Personalization at scale",
      "CRM integrations",
      "Campaign analytics",
      "Digital human technology",
      "Enterprise security",
      "API for automation",
    ],
    weaknesses: [
      "No transparent pricing",
      "Enterprise-only focus",
      "Not suitable for individuals",
    ],
    bestFor: "Enterprise sales, personalized marketing campaigns, large-scale outreach",
    features: ["Personalization", "CRM integration", "Analytics", "Digital humans", "API"],
  },
  {
    name: "Hour One",
    slug: "hour-one",
    description: "AI video platform with virtual presenters and learning & development focus for business communications.",
    pricing: "Freemium",
    pricingDetails: "Free trial, Lite $30/mo, Business $112/mo, Enterprise custom",
    strengths: [
      "Reallusion partnership for quality",
      "Learning templates",
      "Broadcast-quality avatars",
      "Teleprompter feature",
      "Team collaboration",
      "Fast rendering",
    ],
    weaknesses: [
      "Smaller avatar library",
      "Limited customization on lower tiers",
      "Fewer integrations",
    ],
    bestFor: "Business communications, internal training, news-style videos",
    features: ["Virtual presenters", "Learning templates", "Teleprompter", "Team features", "Video editor"],
  },
  {
    name: "Pictory",
    slug: "pictory",
    description: "AI video creation platform that transforms long-form content into short, shareable social videos.",
    pricing: "Freemium",
    pricingDetails: "Free trial (3 videos), Standard $23/mo, Premium $47/mo, Teams $119/mo",
    strengths: [
      "Article/blog to video",
      "Auto video highlights",
      "Auto captions and subtitles",
      "Stock footage library",
      "Text-based video editing",
      "Affordable pricing",
    ],
    weaknesses: [
      "No AI avatars (uses stock footage)",
      "Different focus than avatar tools",
      "Limited customization",
    ],
    bestFor: "Content repurposing, social media clips, blog to video, YouTube creators",
    features: ["Article to video", "Auto highlights", "Auto captions", "Stock library", "Text editing"],
  },
  {
    name: "Tavus",
    slug: "tavus",
    description: "AI video personalization platform creating unique videos for each recipient using digital twin technology.",
    pricing: "Paid",
    pricingDetails: "Custom pricing (starts ~$500/mo for scale)",
    strengths: [
      "1:1 personalization",
      "Digital twin technology",
      "Dynamic variables",
      "Landing page generation",
      "Analytics and tracking",
      "API-first approach",
    ],
    weaknesses: [
      "Very expensive",
      "Requires scale to justify cost",
      "Complex setup",
    ],
    bestFor: "High-value sales outreach, personalized campaigns at scale, agencies",
    features: ["1:1 personalization", "Digital twins", "Variables", "Landing pages", "Analytics"],
  },
  {
    name: "Virbo (Wondershare)",
    slug: "virbo",
    description: "AI video generator from Wondershare with talking photos and avatar creation for marketing content.",
    pricing: "Freemium",
    pricingDetails: "Free tier (2 min), Monthly $9.99/mo, Yearly $19.99/mo, Essential $49.99/mo",
    strengths: [
      "Very affordable pricing",
      "Talking photo feature",
      "Mobile app available",
      "Stock footage included",
      "Easy to use",
      "Multiple export formats",
    ],
    weaknesses: [
      "Lower avatar quality",
      "Limited advanced features",
      "Smaller avatar library",
    ],
    bestFor: "Budget users, social media content, simple marketing videos",
    features: ["Talking photos", "AI avatars", "Templates", "Mobile app", "Stock media"],
  },
  {
    name: "Synthesia",
    slug: "synthesia",
    description: "The original AI video platform with extensive avatar library, professional features, and enterprise adoption.",
    pricing: "Paid",
    pricingDetails: "Starter $29/mo, Creator $89/mo, Enterprise custom",
    strengths: [
      "Largest avatar library (150+)",
      "Enterprise-grade security",
      "Custom avatar creation",
      "70+ languages supported",
      "Professional templates",
      "Established market leader",
    ],
    weaknesses: [
      "No free tier",
      "Expensive for individuals",
      "Credit limits on lower tiers",
    ],
    bestFor: "Enterprise training, professional videos, multilingual content, established workflows",
    features: ["150+ avatars", "Custom avatars", "70+ languages", "Templates", "Screen recording", "API"],
  },
];

export default function SynthesiaAlternativesPage() {
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
        <span className="text-gray-300">Synthesia Alternatives</span>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Synthesia Alternatives: Best AI Video Avatar Tools 2026
        </h1>
        <p className="text-xl text-gray-400 max-w-4xl">
          Looking for Synthesia alternatives? Compare the best AI video avatar platforms including HeyGen,
          D-ID, Colossyan, Elai, DeepBrain AI, and more. Find the perfect AI video generator for training
          content, marketing videos, or personalized communications.
        </p>
        <div className="flex flex-wrap gap-2 mt-6">
          <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
            Updated February 2026
          </span>
          <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
            11 AI Video Tools Compared
          </span>
        </div>
      </header>

      {/* Quick Navigation */}
      <section className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-12">
        <h2 className="text-lg font-semibold mb-3">Quick Navigation</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-sm">
          {videoTools.map((tool) => (
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
        <h2 className="text-3xl font-bold mb-4">Why Look for Synthesia Alternatives?</h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-4">
          While Synthesia pioneered AI video avatar technology and remains the market leader with enterprise
          adoption, it's not the only option—and depending on your needs and budget, you might find better
          alternatives.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed mb-4">
          HeyGen offers more realistic avatars with superior voice cloning. D-ID excels at turning photos into
          talking videos. Colossyan is purpose-built for corporate training. Elai provides better content
          repurposing tools. And options like Virbo offer more affordable pricing for small businesses and
          content creators.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed">
          This guide compares 11 top Synthesia alternatives across features, pricing, avatar quality, and
          ideal use cases to help you find the right AI video platform.
        </p>
      </section>

      {/* Comparison Table */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Quick Comparison Table</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-gray-900 border border-gray-800 rounded-xl">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">Video Tool</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Pricing</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Best For</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Key Feature</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {videoTools.map((tool) => (
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
        <h2 className="text-3xl font-bold mb-8">Detailed Synthesia Alternatives Reviews</h2>
        <div className="space-y-12">
          {videoTools.map((tool, index) => {
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
        <h2 className="text-3xl font-bold mb-6">Which Synthesia Alternative Should You Choose?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Best Avatar Quality</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>HeyGen:</strong> Most realistic avatars and voice cloning</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>DeepBrain AI:</strong> Exceptional realism, professional quality</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Synthesia:</strong> Largest library, proven quality</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Corporate Training & L&D</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Colossyan:</strong> Built for L&D, SCORM export, branching</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Synthesia:</strong> Enterprise features, security</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Hour One:</strong> Learning templates, team features</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Personalized Marketing</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Tavus:</strong> 1:1 personalization at scale</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Rephrase.ai:</strong> Enterprise personalization, CRM integration</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>HeyGen:</strong> Custom avatars, voice cloning</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Content Repurposing</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Elai:</strong> Article/blog to video, PPT import</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Pictory:</strong> Auto highlights, text-based editing</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Virbo:</strong> Talking photos, mobile app</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Budget-Conscious Users</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Virbo:</strong> $9.99/mo with talking photos</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>D-ID:</strong> $5.90/mo lite plan with API</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Pictory:</strong> $23/mo for content repurposing</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Multilingual Content</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>HeyGen:</strong> Video translation in 40+ languages</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Synthesia:</strong> 70+ languages, proven translations</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Colossyan:</strong> Translation with L&D focus</span>
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
            <h3 className="text-lg font-semibold mb-2">Is there a free Synthesia alternative?</h3>
            <p className="text-gray-400">
              HeyGen, D-ID, Elai, Hour One, and Virbo all offer free trials or limited free tiers. However,
              free versions typically have strict limitations (watermarks, minute caps, or few credits). For
              serious use, paid plans start around $5-10/month for basic tools like Virbo or D-ID Lite.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Which has the most realistic AI avatars?</h3>
            <p className="text-gray-400">
              HeyGen and DeepBrain AI are widely considered to have the most realistic avatar quality with
              natural expressions and movements. HeyGen's voice cloning technology is particularly impressive.
              Synthesia's avatars are also high-quality and benefit from years of refinement, though some
              users find HeyGen's newer models more lifelike.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Can I create a custom AI avatar of myself?</h3>
            <p className="text-gray-400">
              Yes! HeyGen, Synthesia, DeepBrain AI, and Colossyan all offer custom avatar creation where you
              can record yourself and create a digital twin. This typically requires higher-tier plans and
              additional fees ($300-1000+ one-time). HeyGen is known for having the most accessible and
              realistic custom avatar process.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">What's the best tool for converting articles to videos?</h3>
            <p className="text-gray-400">
              Elai.io specializes in article-to-video conversion with PPT import capabilities. Pictory is
              excellent for turning long-form content into short social clips with auto-captioning. Both are
              more affordable than full avatar platforms if content repurposing is your primary need.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Which platform is best for enterprise use?</h3>
            <p className="text-gray-400">
              Synthesia remains the market leader for enterprise with proven security, compliance, and the
              largest avatar library. Colossyan is excellent specifically for L&D and training. DeepBrain AI
              offers premium quality for high-end productions. Rephrase.ai excels for personalized marketing
              at scale. Choose based on your primary use case: training vs. marketing vs. communications.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Explore More AI Tools</h2>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Discover hundreds of AI tools across all categories—from image generators to writing assistants
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
            href="/category/video"
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            More Video Tools →
          </Link>
        </div>
      </section>
    </div>
  );
}
