import { tools } from "@/data/tools";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Midjourney Alternatives: 12 Best AI Image Generators in 2026",
  description:
    "Discover the best Midjourney alternatives including DALL-E 3, Stable Diffusion, Adobe Firefly, Leonardo.ai, and more. Compare features, pricing, and image quality.",
  keywords: [
    "Midjourney alternatives",
    "best AI image generators",
    "AI art generators",
    "DALL-E 3",
    "Stable Diffusion",
    "free AI image tools",
  ],
  openGraph: {
    title: "Midjourney Alternatives: 12 Best AI Image Generators in 2026",
    description:
      "Compare the best Midjourney alternatives. In-depth reviews of DALL-E 3, Stable Diffusion, Adobe Firefly, Leonardo.ai, and 8 more AI image generators.",
    url: "https://aisotools.com/midjourney-alternatives",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/midjourney-alternatives",
  },
};

interface ImageGeneratorComparison {
  name: string;
  slug: string;
  description: string;
  pricing: string;
  pricingDetails: string;
  strengths: string[];
  weaknesses: string[];
  bestFor: string;
  features: string[];
  imageQuality: string;
}

const generators: ImageGeneratorComparison[] = [
  {
    name: "DALL-E 3",
    slug: "dall-e-3",
    description: "OpenAI's latest image generation model integrated into ChatGPT, known for prompt accuracy and photorealistic results.",
    pricing: "Freemium",
    pricingDetails: "ChatGPT Plus $20/mo, API pricing varies",
    strengths: [
      "Exceptional prompt understanding",
      "Photorealistic quality",
      "Integrated with ChatGPT",
      "Strong text rendering in images",
      "Built-in content policy safety",
    ],
    weaknesses: [
      "Requires ChatGPT Plus for full access",
      "Limited style control",
      "No fine-tuning options",
      "Slower generation than some alternatives",
    ],
    bestFor: "Photorealistic images, marketing materials, users already subscribed to ChatGPT Plus",
    features: ["ChatGPT integration", "High resolution", "Prompt refinement", "Safety filters", "Commercial use"],
    imageQuality: "Excellent - Photorealistic, accurate prompt interpretation",
  },
  {
    name: "Stable Diffusion",
    slug: "stable-diffusion",
    description: "Open-source AI image generator with unlimited customization through models, LoRAs, and community extensions.",
    pricing: "Free (self-hosted) / Paid platforms",
    pricingDetails: "Free open-source, cloud platforms $10-50/mo",
    strengths: [
      "Completely open-source",
      "Unlimited generation (self-hosted)",
      "Extensive model library",
      "Full customization with LoRAs",
      "Active community",
      "Commercial use allowed",
    ],
    weaknesses: [
      "Requires technical knowledge",
      "Hardware requirements for local use",
      "Inconsistent quality without fine-tuning",
      "Steeper learning curve",
    ],
    bestFor: "Advanced users, developers, unlimited generation, custom models, full creative control",
    features: ["Open-source", "LoRA support", "Img2img", "Inpainting", "ControlNet", "Community models"],
    imageQuality: "Excellent with proper settings - Highly customizable",
  },
  {
    name: "Adobe Firefly",
    slug: "adobe-firefly",
    description: "Adobe's AI image generator trained only on licensed content, integrated seamlessly into Creative Cloud apps.",
    pricing: "Freemium",
    pricingDetails: "Free tier (25 credits/mo), Premium $4.99/mo, Creative Cloud included",
    strengths: [
      "Commercially safe (trained on licensed content)",
      "Adobe Creative Cloud integration",
      "Generative fill in Photoshop",
      "Professional-grade results",
      "Legal indemnity for enterprise",
    ],
    weaknesses: [
      "Credit limits on free tier",
      "Less artistic styles than competitors",
      "Newer with smaller feature set",
      "Best value requires Creative Cloud subscription",
    ],
    bestFor: "Professional designers, Creative Cloud users, commercial work requiring legal safety",
    features: ["Creative Cloud integration", "Generative Fill", "Text effects", "Recolor", "Commercial safe"],
    imageQuality: "Very Good - Professional, commercially safe",
  },
  {
    name: "Leonardo.ai",
    slug: "leonardo-ai",
    description: "AI image generator focused on game assets, concept art, and consistent character generation with powerful editing tools.",
    pricing: "Freemium",
    pricingDetails: "Free tier (150 tokens/day), Apprentice $10/mo, Artisan $24/mo",
    strengths: [
      "Excellent for game assets",
      "Character consistency features",
      "Powerful canvas editor",
      "Fast generation speed",
      "Great community models",
      "Generous free tier",
    ],
    weaknesses: [
      "Interface can be overwhelming",
      "Less photorealistic than DALL-E 3",
      "Token system can be confusing",
    ],
    bestFor: "Game developers, concept artists, character design, consistent style generation",
    features: ["Canvas editor", "Character reference", "AI models library", "Prompt generation", "Community training"],
    imageQuality: "Excellent - Strong for illustrations and concept art",
  },
  {
    name: "Ideogram",
    slug: "ideogram",
    description: "AI image generator specializing in accurate text rendering within images, perfect for logos and graphics with words.",
    pricing: "Freemium",
    pricingDetails: "Free tier (100 prompts/day), Plus $8/mo, Pro $20/mo",
    strengths: [
      "Best text rendering in images",
      "Great for logos and graphics",
      "High-quality outputs",
      "Simple, clean interface",
      "Fast generation",
      "Generous free tier",
    ],
    weaknesses: [
      "Less artistic style variety",
      "Smaller community than others",
      "Fewer customization options",
      "Limited editing tools",
    ],
    bestFor: "Logos, posters, graphics with text, marketing materials, social media graphics",
    features: ["Text rendering", "Magic Prompt", "Remix", "High resolution", "Style presets"],
    imageQuality: "Excellent - Best-in-class text rendering",
  },
  {
    name: "Flux",
    slug: "flux",
    description: "Next-generation open image model from Black Forest Labs (former Stability AI team) with stunning realism.",
    pricing: "Freemium",
    pricingDetails: "Free tier, Pro $10/mo (via platforms like Replicate)",
    strengths: [
      "Exceptional photorealism",
      "Excellent prompt adherence",
      "Open weights available",
      "Fast generation",
      "Multiple model variants (Dev, Schnell, Pro)",
    ],
    weaknesses: [
      "Newer with smaller ecosystem",
      "Requires platform subscription or self-hosting",
      "Limited official tools",
      "Still building community resources",
    ],
    bestFor: "Cutting-edge photorealism, users wanting latest technology, developers",
    features: ["Open weights", "Multiple variants", "High resolution", "Fast inference", "Commercial use"],
    imageQuality: "Outstanding - State-of-the-art photorealism",
  },
  {
    name: "Playground AI",
    slug: "playground-ai",
    description: "User-friendly AI image platform with powerful canvas editing, mixing, and collaborative features.",
    pricing: "Freemium",
    pricingDetails: "Free tier (500 images/day), Pro $15/mo",
    strengths: [
      "Very generous free tier",
      "Intuitive canvas interface",
      "Image mixing and editing",
      "Multiple models available",
      "Great for beginners",
      "Collaborative features",
    ],
    weaknesses: [
      "Lower resolution on free tier",
      "Less control than Stable Diffusion",
      "Can be slower during peak times",
    ],
    bestFor: "Beginners, rapid ideation, mixed media, social media content, collaborative projects",
    features: ["Canvas editor", "Image mixing", "Model selection", "Filters", "Collaborative boards"],
    imageQuality: "Very Good - User-friendly with solid results",
  },
  {
    name: "Bing Image Creator (DALL-E)",
    slug: "bing-image-creator",
    description: "Microsoft's free access to DALL-E 3 through Bing and Microsoft Designer, no subscription required.",
    pricing: "Free",
    pricingDetails: "Completely free with Microsoft account",
    strengths: [
      "Completely free DALL-E 3 access",
      "No subscription required",
      "Good daily generation limits",
      "Designer integration",
      "Boosts for faster generation",
    ],
    weaknesses: [
      "Daily limits (replenished weekly)",
      "Slower after boost credits used",
      "Less control than paid DALL-E",
      "Microsoft account required",
    ],
    bestFor: "Budget users wanting DALL-E quality, casual creators, students",
    features: ["DALL-E 3", "Microsoft Designer", "Free access", "Boost credits", "Commercial use"],
    imageQuality: "Excellent - Same DALL-E 3 engine",
  },
  {
    name: "Artbreeder",
    slug: "artbreeder",
    description: "Collaborative AI art platform using genetic algorithms for character creation, portraits, and landscapes.",
    pricing: "Freemium",
    pricingDetails: "Free tier, Starter $8.99/mo, Advanced $18.99/mo",
    strengths: [
      "Unique genetic mixing approach",
      "Excellent for character design",
      "Collaborative community",
      "Portrait specialization",
      "Consistent character generation",
    ],
    weaknesses: [
      "Different paradigm from prompt-based tools",
      "Limited to specific styles",
      "Slower iteration than modern tools",
      "Smaller feature set",
    ],
    bestFor: "Character design, portraits, iterative refinement, consistent characters across images",
    features: ["Genetic mixing", "Character creation", "Portraits", "Landscapes", "Collaboration"],
    imageQuality: "Good - Specialized for characters and portraits",
  },
  {
    name: "NightCafe",
    slug: "nightcafe",
    description: "Community-focused AI art platform with multiple algorithms, daily challenges, and social features.",
    pricing: "Freemium",
    pricingDetails: "Free tier (5 credits/day), AI Beginner $5.99/mo, Hobbyist $9.99/mo",
    strengths: [
      "Multiple AI models (Stable Diffusion, DALL-E, etc.)",
      "Strong community features",
      "Daily challenges",
      "Print-on-demand integration",
      "Evolution/iteration tools",
    ],
    weaknesses: [
      "Credit system can be limiting",
      "Interface can feel cluttered",
      "Lower quality than specialized tools",
    ],
    bestFor: "Community engagement, artistic exploration, print products, daily creative practice",
    features: ["Multiple models", "Community challenges", "Print shop", "Evolution", "Social features"],
    imageQuality: "Good - Varies by model selection",
  },
  {
    name: "Craiyon (formerly DALL-E mini)",
    slug: "craiyon",
    description: "Free, accessible AI image generator that went viral, perfect for quick experimentation and memes.",
    pricing: "Freemium",
    pricingDetails: "Free with ads, Supporter $5/mo, Professional $24/mo",
    strengths: [
      "Completely free basic access",
      "No account required",
      "Fast generation",
      "Simple interface",
      "Good for memes and quick ideas",
    ],
    weaknesses: [
      "Lower quality than modern tools",
      "Ads on free tier",
      "Limited resolution",
      "Less realistic results",
    ],
    bestFor: "Quick experimentation, memes, casual use, testing ideas before using premium tools",
    features: ["Free access", "No account needed", "Multiple images", "Simple prompts", "Ad-supported"],
    imageQuality: "Fair - Lower quality but adequate for ideation",
  },
  {
    name: "Midjourney",
    slug: "midjourney",
    description: "Premium AI art generator known for exceptional artistic quality, operated through Discord.",
    pricing: "Paid",
    pricingDetails: "Basic $10/mo, Standard $30/mo, Pro $60/mo",
    strengths: [
      "Exceptional artistic quality",
      "Unique aesthetic styles",
      "Strong community",
      "Regular model updates",
      "Professional-grade results",
      "Excellent at artistic interpretation",
    ],
    weaknesses: [
      "No free tier",
      "Discord-only interface",
      "Steeper learning curve",
      "Can be expensive for heavy use",
      "Less photorealistic than DALL-E",
    ],
    bestFor: "Professional artists, marketing agencies, high-quality artistic work, stylized imagery",
    features: ["Discord bot", "Multiple aspect ratios", "Remix mode", "High resolution", "Variations", "Upscaling"],
    imageQuality: "Outstanding - Industry-leading artistic quality",
  },
];

export default function MidjourneyAlternativesPage() {
  const toolsBySlug = new Map(tools.map((t) => [t.slug, t]));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-white">
          Home
        </Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Midjourney Alternatives</span>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Midjourney Alternatives: 12 Best AI Image Generators in 2026
        </h1>
        <p className="text-xl text-gray-400 max-w-4xl">
          Looking for Midjourney alternatives? Compare the best AI image generators including
          DALL-E 3, Stable Diffusion, Adobe Firefly, Leonardo.ai, and more. Find the perfect tool
          for your creative needs, budget, and use case.
        </p>
        <div className="flex flex-wrap gap-2 mt-6">
          <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
            Updated February 2026
          </span>
          <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
            12 AI Image Generators Compared
          </span>
        </div>
      </header>

      {/* Quick Navigation */}
      <section className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-12">
        <h2 className="text-lg font-semibold mb-3">Quick Navigation</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-sm">
          {generators.slice(0, 11).map((gen) => (
            <a
              key={gen.slug}
              href={`#${gen.slug}`}
              className="text-blue-400 hover:text-blue-300 transition"
            >
              {gen.name}
            </a>
          ))}
        </div>
      </section>

      {/* Introduction */}
      <section className="prose prose-invert max-w-none mb-16">
        <h2 className="text-3xl font-bold mb-4">Why Look for Midjourney Alternatives?</h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-4">
          While Midjourney produces stunning artistic images, it's not the only option—and may not
          be the best choice for every use case. The AI image generation landscape has exploded
          with alternatives offering different strengths: photorealism, text accuracy, free tiers,
          open-source flexibility, and more.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed mb-4">
          DALL-E 3 excels at photorealistic images and prompt accuracy. Stable Diffusion offers
          unlimited free generation if you self-host. Adobe Firefly provides commercial safety for
          professional work. Leonardo.ai specializes in game assets and consistent characters.
          Ideogram handles text-in-images better than any other tool.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed">
          This guide compares 12 top Midjourney alternatives across image quality, pricing,
          features, and ideal use cases to help you find the right AI image generator.
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
                <th className="px-4 py-3 text-left text-sm font-semibold">Best For</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Image Quality</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {generators.map((gen) => (
                <tr key={gen.slug} className="hover:bg-gray-800/50 transition">
                  <td className="px-4 py-3">
                    <a href={`#${gen.slug}`} className="font-medium text-blue-400 hover:text-blue-300">
                      {gen.name}
                    </a>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-400">{gen.pricing}</td>
                  <td className="px-4 py-3 text-sm text-gray-400">{gen.bestFor.split(",")[0]}</td>
                  <td className="px-4 py-3 text-sm text-gray-400">{gen.imageQuality.split(" - ")[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Detailed Reviews */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Detailed Midjourney Alternatives Reviews</h2>
        <div className="space-y-12">
          {generators.map((gen, index) => {
            const toolData = toolsBySlug.get(gen.slug);
            return (
              <article
                key={gen.slug}
                id={gen.slug}
                className="bg-gray-900 border border-gray-800 rounded-xl p-8 scroll-mt-24"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      {index + 1}. {gen.name}
                    </h3>
                    <p className="text-gray-400">{gen.description}</p>
                  </div>
                  {toolData && (
                    <Link
                      href={`/tool/${gen.slug}`}
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
                    <p className="text-gray-400 text-sm mb-1">{gen.pricing}</p>
                    <p className="text-gray-500 text-xs">{gen.pricingDetails}</p>
                  </div>

                  {/* Image Quality */}
                  <div>
                    <h4 className="font-semibold text-gray-300 mb-2">🎨 Image Quality</h4>
                    <p className="text-gray-400 text-sm">{gen.imageQuality}</p>
                  </div>
                </div>

                {/* Best For */}
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-300 mb-2">🎯 Best For</h4>
                  <p className="text-gray-400 text-sm">{gen.bestFor}</p>
                </div>

                {/* Strengths */}
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-300 mb-3">✅ Strengths</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {gen.strengths.map((strength, i) => (
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
                    {gen.weaknesses.map((weakness, i) => (
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
                    {gen.features.map((feature, i) => (
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
        <h2 className="text-3xl font-bold mb-6">Which AI Image Generator Should You Choose?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Photorealistic Images</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>DALL-E 3:</strong> Best prompt accuracy and realism</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Flux:</strong> Cutting-edge photorealism</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Stable Diffusion:</strong> With right models/settings</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Artistic & Stylized Work</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Midjourney:</strong> Industry-leading artistic quality</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Leonardo.ai:</strong> Great for concept art</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>NightCafe:</strong> Multiple artistic styles</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Text in Images (Logos, Posters)</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Ideogram:</strong> Best text rendering available</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>DALL-E 3:</strong> Good text handling</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Adobe Firefly:</strong> Professional text effects</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Budget Users (Free)</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Bing Image Creator:</strong> Free DALL-E 3 access</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Stable Diffusion:</strong> Unlimited if self-hosted</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Craiyon:</strong> Free with ads for quick tests</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Commercial/Professional Work</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Adobe Firefly:</strong> Legally safe, licensed training</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Midjourney:</strong> Pro tier for commercial use</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>DALL-E 3:</strong> Commercial rights included</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Game Development</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Leonardo.ai:</strong> Built for game assets</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Stable Diffusion:</strong> Unlimited custom assets</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span><strong>Artbreeder:</strong> Consistent character design</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Pricing Comparison</h2>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-gray-800 pb-3">
              <span className="font-medium">Free Options</span>
              <span className="text-gray-400 text-sm">Bing Image Creator, Stable Diffusion (self-hosted), Craiyon</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-800 pb-3">
              <span className="font-medium">Under $10/mo</span>
              <span className="text-gray-400 text-sm">Adobe Firefly ($4.99), Ideogram ($8), NightCafe ($5.99)</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-800 pb-3">
              <span className="font-medium">$10-20/mo</span>
              <span className="text-gray-400 text-sm">Midjourney Basic ($10), Leonardo.ai ($10), Playground Pro ($15)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">$20+/mo</span>
              <span className="text-gray-400 text-sm">DALL-E 3 via ChatGPT Plus ($20), Midjourney Standard ($30)</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Is there a free alternative to Midjourney?</h3>
            <p className="text-gray-400">
              Yes! Bing Image Creator provides free access to DALL-E 3. Stable Diffusion is
              completely free if you self-host. Leonardo.ai and Ideogram offer generous free tiers
              with daily limits. Craiyon is free with ads.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Which is better: DALL-E 3 or Midjourney?</h3>
            <p className="text-gray-400">
              It depends on your needs. DALL-E 3 excels at photorealism and prompt accuracy, making
              it better for realistic images and marketing materials. Midjourney produces more
              artistic, stylized results and is preferred by artists and designers. Many
              professionals use both for different purposes.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Can I use AI-generated images commercially?</h3>
            <p className="text-gray-400">
              Most tools allow commercial use, but check specific terms. Adobe Firefly provides the
              strongest legal protection (trained only on licensed content). DALL-E 3, Midjourney
              (Pro tier), and Stable Diffusion explicitly allow commercial use. Always review the
              license for your specific use case.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Which AI image generator is best for logos?</h3>
            <p className="text-gray-400">
              Ideogram is specifically designed for text rendering and excels at logos, posters, and
              graphics with words. DALL-E 3 also handles text reasonably well. For professional logo
              work, many designers use AI for ideation but refine in Adobe Illustrator.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Do I need technical skills for Stable Diffusion?</h3>
            <p className="text-gray-400">
              For self-hosting, yes—you'll need to install software and understand concepts like
              models and LoRAs. However, platforms like Playground AI and Leonardo.ai provide
              user-friendly Stable Diffusion access without technical knowledge. There are also cloud
              services that handle the technical setup for you.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Explore More AI Tools</h2>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Discover hundreds of AI tools across all categories — from chatbots to video generators
          and coding assistants.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Browse All Tools
          </Link>
          <Link
            href="/chatgpt-alternatives"
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            AI Chatbots →
          </Link>
        </div>
      </section>
    </div>
  );
}
