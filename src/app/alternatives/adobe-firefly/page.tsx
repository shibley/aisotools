import Link from "next/link";
import type { Metadata } from "next";

const year = 2026;

export const metadata: Metadata = {
  title: `Best Adobe Firefly Alternatives (${year}) — Top 10 AI Image Generators | AISO Tools`,
  description: `Looking for Adobe Firefly alternatives? Compare the 10 best AI image generators — from free open-source options to professional tools that don't require an Adobe subscription.`,
  alternates: {
    canonical: "https://aisotools.com/alternatives/adobe-firefly",
  },
  openGraph: {
    title: `Best Adobe Firefly Alternatives (${year}) — Top 10 AI Image Generators`,
    description: `Compare the top 10 alternatives to Adobe Firefly for AI image generation without the Adobe subscription requirement.`,
    url: "https://aisotools.com/alternatives/adobe-firefly",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Adobe Firefly Alternatives (${year})`,
    description: `Top 10 Adobe Firefly alternatives for AI image generation — free, paid, and open-source options compared.`,
  },
};

const alternatives = [
  {
    rank: 1,
    name: "Midjourney",
    slug: "midjourney",
    url: "https://midjourney.com",
    pricing: "Paid",
    pricingColor: "bg-purple-500/10 text-purple-400",
    freeTier: false,
    startingPrice: "Basic $10/mo",
    tagline: "The gold standard for artistic, high-quality AI imagery",
    description:
      "Midjourney produces some of the most visually stunning AI images available, with a distinctive aesthetic that consistently wins design competitions and dominates creative communities. While Firefly is optimized for commercial safety and Adobe integration, Midjourney is optimized for one thing: making images that stop people in their tracks.",
    features: [
      "Unmatched artistic quality and visual appeal",
      "Consistent style coherence across generations",
      "Active community via Discord for prompt inspiration",
      "Powerful --style and --sref reference features",
      "Regular model updates (V6.1 and beyond)",
      "Character reference for consistent subject generation",
    ],
    whySwitchReasons: [
      "Want the highest-quality artistic output, not just commercially safe images",
      "Building a creative brand that needs stunning visuals",
      "Don't need Adobe CC integration and want a focused tool",
    ],
    bestFor: "Artists, designers, and marketers who prioritize visual quality above all else.",
    compareUrl: "/compare/adobe-firefly-vs-midjourney",
  },
  {
    rank: 2,
    name: "DALL-E 3",
    slug: "chatgpt",
    url: "https://chatgpt.com",
    pricing: "Freemium",
    pricingColor: "bg-green-500/10 text-green-400",
    freeTier: true,
    startingPrice: "Free / Plus $20/mo",
    tagline: "Best for prompt-following accuracy and text-in-image generation",
    description:
      "DALL-E 3 (accessible via ChatGPT) excels where Firefly sometimes struggles: complex prompt understanding. It accurately renders multiple subjects, precise relationships, and detailed text within images. For those who want AI images with good text rendering and nuanced scene composition, DALL-E 3 is the most reliable option.",
    features: [
      "Industry-leading prompt adherence and understanding",
      "Strong text-in-image rendering accuracy",
      "Integrated with ChatGPT for conversational editing",
      "Iterative refinement through natural language",
      "Commercial use rights on generated images",
      "Free tier via ChatGPT with daily limits",
    ],
    whySwitchReasons: [
      "Need images that precisely follow complex, detailed prompts",
      "Want text rendered accurately inside images",
      "Already use ChatGPT and want an all-in-one workflow",
    ],
    bestFor: "Content creators and marketers who need accurate, prompt-faithful image generation.",
    compareUrl: "/compare/adobe-firefly-vs-dall-e",
  },
  {
    rank: 3,
    name: "Ideogram",
    slug: "ideogram",
    url: "https://ideogram.ai",
    pricing: "Freemium",
    pricingColor: "bg-green-500/10 text-green-400",
    freeTier: true,
    startingPrice: "Free / Basic $8/mo",
    tagline: "The #1 choice for AI images with readable text",
    description:
      "Ideogram solves the hardest problem in AI image generation: legible text. While Adobe Firefly improved text rendering, Ideogram makes it a core feature with near-perfect accuracy. It's the go-to tool for thumbnails, posters, social media graphics, and any image where the text has to be right.",
    features: [
      "Best-in-class text rendering inside images",
      "Poster and typography-focused generation modes",
      "Canvas editor for iterative refinement",
      "Magic Prompt enhancement for better results",
      "Generous free tier (10 free generations/day)",
      "Strong community with public prompt gallery",
    ],
    whySwitchReasons: [
      "Create social media graphics, thumbnails, or posters with text overlays",
      "Tired of misspelled or distorted text in AI-generated images",
      "Want a free tier that's actually generous enough for regular use",
    ],
    bestFor: "YouTubers, social media managers, and graphic designers who need readable text in images.",
    compareUrl: "/compare/adobe-firefly-vs-ideogram",
  },
  {
    rank: 4,
    name: "Leonardo AI",
    slug: "leonardo",
    url: "https://leonardo.ai",
    pricing: "Freemium",
    pricingColor: "bg-green-500/10 text-green-400",
    freeTier: true,
    startingPrice: "Free / Apprentice $12/mo",
    tagline: "The most complete creative platform for game and character art",
    description:
      "Leonardo AI started as a game asset generator and evolved into a full creative suite with fine-tuned models, motion generation, and a powerful API. Unlike Firefly's focus on commercial-safe stock imagery, Leonardo lets you train custom models on your own style — making it ideal for brand consistency and game development workflows.",
    features: [
      "Custom model training on your own images",
      "Specialized models for characters, landscapes, and concepts",
      "Motion generation for video from static images",
      "Real-time canvas for interactive generation",
      "150 free generation tokens per day",
      "API access for developers",
    ],
    whySwitchReasons: [
      "Need a consistent visual style across multiple images",
      "Work in game design, concept art, or character illustration",
      "Want to train a custom model on your brand's aesthetic",
    ],
    bestFor: "Game developers, concept artists, and brands needing custom-trained AI visual styles.",
    compareUrl: "/compare/adobe-firefly-vs-leonardo",
  },
  {
    rank: 5,
    name: "Flux (Black Forest Labs)",
    slug: "flux",
    url: "https://blackforestlabs.ai",
    pricing: "Freemium",
    pricingColor: "bg-green-500/10 text-green-400",
    freeTier: true,
    startingPrice: "Free via Replicate / API pay-per-use",
    tagline: "The fastest-improving open-weight model with photorealistic output",
    description:
      "Flux by Black Forest Labs has quickly become the benchmark for photorealistic AI image generation, outperforming Stable Diffusion in realism and increasingly rivaling Midjourney on quality. As an open-weight model, it can be run locally, integrated via API, or accessed through numerous platforms — making it the most flexible alternative for technical users.",
    features: [
      "State-of-the-art photorealism in the open-weight space",
      "Available on Replicate, Fal.ai, and via API",
      "Flux Pro, Dev, and Schnell variants for speed/quality tradeoffs",
      "Open weights for local deployment",
      "Strong text rendering (on par with Ideogram)",
      "No subscription lock-in — pure pay-per-use or free tiers on host platforms",
    ],
    whySwitchReasons: [
      "Want photorealistic output without paying for Midjourney or Adobe CC",
      "Need API access to integrate image gen into your own app",
      "Prefer open-weight models you can run locally or on your own infra",
    ],
    bestFor: "Developers, technical creatives, and anyone who wants photorealistic output with flexible deployment.",
    compareUrl: "/compare/adobe-firefly-vs-flux",
  },
  {
    rank: 6,
    name: "Stable Diffusion",
    slug: "stable-diffusion",
    url: "https://stability.ai",
    pricing: "Free",
    pricingColor: "bg-green-500/10 text-green-400",
    freeTier: true,
    startingPrice: "Free (open source)",
    tagline: "The ultimate free, uncensored, self-hosted option",
    description:
      "Stable Diffusion is the benchmark open-source image generation model. Through interfaces like AUTOMATIC1111, ComfyUI, or Forge, you get unlimited generations for free on your own hardware. It has the largest ecosystem of custom models (LoRAs, checkpoints), extensions, and community support. If Adobe Firefly's generative credits or content policies frustrate you, Stable Diffusion is the escape hatch.",
    features: [
      "Completely free with no usage limits on local hardware",
      "Massive community of custom models and LoRAs on CivitAI",
      "ComfyUI for node-based workflow automation",
      "img2img, inpainting, outpainting built-in",
      "No content filtering or generative credit system",
      "Extensions for ControlNet, IP-Adapter, FaceSwap, and more",
    ],
    whySwitchReasons: [
      "Want unlimited free generations without credits or subscriptions",
      "Need full control over model behavior and content policies",
      "Already have a capable GPU and want to maximize it",
    ],
    bestFor: "Technical users, hobbyists, and power users who want maximum control and zero cost.",
    compareUrl: "/compare/adobe-firefly-vs-stable-diffusion",
  },
  {
    rank: 7,
    name: "Canva AI",
    slug: "canva",
    url: "https://canva.com",
    pricing: "Freemium",
    pricingColor: "bg-green-500/10 text-green-400",
    freeTier: true,
    startingPrice: "Free / Pro $15/mo",
    tagline: "Best for non-designers who want AI images inside ready-made templates",
    description:
      "Canva's Dream Lab image generator is built for non-designers who need images in context — already inside a social media post, presentation, or document. Unlike Adobe Firefly's standalone focus, Canva AI is part of a complete design tool. You generate an image and immediately drag it into a polished template. It's the lowest barrier path from idea to finished design.",
    features: [
      "AI image generation inside a full design editor",
      "Thousands of templates for social, print, and web",
      "Magic Edit for in-context image manipulation",
      "Magic Eraser for background removal",
      "One-click background removal with BG Remover",
      "No design experience required",
    ],
    whySwitchReasons: [
      "Need finished designs, not just raw images",
      "Not a trained designer and want templates + AI together",
      "Create social media posts, presentations, or ads regularly",
    ],
    bestFor: "Small business owners, marketers, and non-designers who want end-to-end design, not just image gen.",
    compareUrl: "/compare/adobe-firefly-vs-canva",
  },
  {
    rank: 8,
    name: "Krea AI",
    slug: "krea",
    url: "https://krea.ai",
    pricing: "Freemium",
    pricingColor: "bg-green-500/10 text-green-400",
    freeTier: true,
    startingPrice: "Free / Starter $35/mo",
    tagline: "Real-time AI generation and video for creative professionals",
    description:
      "Krea AI pioneered real-time AI image generation — you sketch or position elements and the AI renders a high-quality image in milliseconds as you work. It also offers video generation and upscaling that makes it a serious alternative to the Adobe suite for motion designers. If Adobe Firefly feels slow and rigid, Krea's live canvas feels like drawing with the future.",
    features: [
      "Real-time generation: image updates as you draw",
      "AI video generation with strong motion quality",
      "AI upscaling with detail enhancement",
      "Live Canvas for interactive creative workflows",
      "Style transfer and image enhancement tools",
      "Flux-based models for photorealistic output",
    ],
    whySwitchReasons: [
      "Want a live, interactive image generation workflow",
      "Need both image and video AI in one platform",
      "Create concept art or mood boards where speed matters",
    ],
    bestFor: "Motion designers, concept artists, and creatives who want a fast, interactive AI canvas.",
    compareUrl: "/compare/adobe-firefly-vs-krea",
  },
  {
    rank: 9,
    name: "Playground AI",
    slug: "playground",
    url: "https://playgroundai.com",
    pricing: "Freemium",
    pricingColor: "bg-green-500/10 text-green-400",
    freeTier: true,
    startingPrice: "Free (500 images/day) / Pro $15/mo",
    tagline: "Most generous free tier for semi-professional AI image creation",
    description:
      "Playground AI is the most accessible professional-grade alternative to Adobe Firefly, offering 500 free image generations per day — far more than any competitor at this tier. Built on a mix of Stable Diffusion and proprietary models, it bridges the gap between free hobbyist tools and expensive subscriptions with a clean interface and community features.",
    features: [
      "500 free generations per day (unmatched free tier)",
      "Inpainting and outpainting tools on free plan",
      "Mixed Image Editing for powerful compositing",
      "Canvas for layout-driven creation",
      "Community feed for discovering styles and prompts",
      "Commercial license on all generated images",
    ],
    whySwitchReasons: [
      "Hit Adobe Firefly's monthly generative credit limit",
      "Want a generous free tier while building a portfolio",
      "Need inpainting and editing features without extra cost",
    ],
    bestFor: "Hobbyists, students, and budget-conscious creatives who need high volume without high cost.",
    compareUrl: "/compare/adobe-firefly-vs-playground",
  },
  {
    rank: 10,
    name: "Recraft",
    slug: "recraft",
    url: "https://recraft.ai",
    pricing: "Freemium",
    pricingColor: "bg-green-500/10 text-green-400",
    freeTier: true,
    startingPrice: "Free / Full $25/mo",
    tagline: "Purpose-built for brand design and vector/SVG generation",
    description:
      "Recraft is the design-first AI image tool and the only serious alternative for generating vector graphics, SVGs, and brand-consistent icon sets. While Adobe Firefly integrates with Illustrator for vectors, Recraft generates vector-quality content natively as a standalone web tool — no Creative Cloud subscription required. It's become the go-to for UI designers and brand teams who need scalable assets.",
    features: [
      "Native vector/SVG generation — rare in AI tools",
      "Brand kit for consistent color and style across assets",
      "Recraft V3 model ranked #1 on prompt following benchmarks",
      "Icon sets and UI element generation",
      "Mockup generation for brand presentations",
      "Direct export to scalable vector formats",
    ],
    whySwitchReasons: [
      "Need scalable vector graphics, not just rasterized PNGs",
      "Building a brand identity system that needs consistent icon styles",
      "Want Adobe-level design output without the Adobe price tag",
    ],
    bestFor: "UI/UX designers, brand designers, and teams who need vectors and brand-consistent icon generation.",
    compareUrl: "/compare/adobe-firefly-vs-recraft",
  },
];

const faqs = [
  {
    question: "Why are people looking for Adobe Firefly alternatives in 2026?",
    answer:
      "The main reasons are the generative credits system (paid plans still have monthly limits), the Adobe Creative Cloud subscription requirement for full access, and the fact that competitors now match or exceed Firefly's output quality at lower cost. Midjourney leads on artistic quality, Ideogram leads on text-in-image, Flux leads on photorealism, and all three are available without an Adobe CC subscription.",
  },
  {
    question: "What is the best free alternative to Adobe Firefly?",
    answer:
      "For most users, DALL-E 3 (free via ChatGPT) or Ideogram (10 free generations/day) are the best free alternatives. If you have a GPU, Stable Diffusion provides unlimited free local generation. Playground AI is the most generous free cloud option with 500 images per day.",
  },
  {
    question: "Which alternative produces the best image quality?",
    answer:
      "For artistic, stylized images, Midjourney is still the leader in visual quality. For photorealism, Flux (Black Forest Labs) is the current benchmark. For text-in-image accuracy, Ideogram is the best. DALL-E 3 has the best prompt adherence for complex scenes. Quality is use-case dependent — there's no single winner.",
  },
  {
    question: "Can I use Adobe Firefly alternatives for commercial projects?",
    answer:
      "Yes — most major alternatives offer commercial use rights. Midjourney includes commercial rights on paid plans. DALL-E 3 grants commercial rights. Ideogram's paid plans include commercial use. Stable Diffusion is open source with no commercial restrictions. Always check the specific terms for your chosen plan, especially the free tiers.",
  },
  {
    question: "What is the best Adobe Firefly alternative for text inside images?",
    answer:
      "Ideogram is the clear winner for text-in-images. It was built specifically to solve this problem and consistently renders legible, correctly-spelled text in posters, thumbnails, and social graphics. DALL-E 3 and Flux also perform well, but Ideogram's text generation is specifically optimized for this use case.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Best Adobe Firefly Alternatives (${year})`,
    description: `Top 10 alternatives to Adobe Firefly for AI image generation.`,
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
      { "@type": "ListItem", position: 3, name: "Adobe Firefly Alternatives", item: "https://aisotools.com/alternatives/adobe-firefly" },
    ],
  },
];

export default function AdobeFireflyAlternativesPage() {
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
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/alternatives" className="hover:text-white transition">Alternatives</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-300">Adobe Firefly Alternatives</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-xl bg-orange-600/20 flex items-center justify-center text-2xl font-bold text-orange-400 mx-auto mb-6">
            🔥
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Best Adobe Firefly Alternatives in {year}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Compare the {alternatives.length} best alternatives to Adobe Firefly — from free open-source models to professional AI image generators that don&apos;t require an Adobe subscription.
          </p>
          <div className="flex items-center justify-center gap-3 mt-4 flex-wrap">
            <span className="bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-sm font-medium">
              Adobe Firefly: Subscription Required
            </span>
            <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
              🎨 AI Image Generation
            </span>
          </div>
        </div>

        {/* Why Switch */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Why Look for Adobe Firefly Alternatives?</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Adobe Firefly is technically impressive — it&apos;s the only major image generator trained exclusively on licensed content, making it the safest choice for commercial work. But its biggest strengths are also its limitations. Here&apos;s why people switch:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { reason: "💳 Adobe CC Required", detail: "Full Firefly features require an Adobe Creative Cloud subscription, which starts at $55/mo for all apps. For image generation alone, that's expensive compared to $10/mo Midjourney." },
              { reason: "🎟️ Generative Credits System", detail: "Even paid Creative Cloud plans come with monthly generative credit caps. Power users routinely hit limits, especially with Generative Fill in Photoshop." },
              { reason: "🎨 Quality Gap on Artistry", detail: "Firefly prioritizes commercial safety over artistic innovation. For visually striking, photorealistic, or highly stylized output, Midjourney and Flux consistently outperform it." },
              { reason: "🔒 Ecosystem Lock-in", detail: "Firefly is deeply integrated with Photoshop and Illustrator, which is great if you use Adobe — but a barrier for teams using Figma, Canva, or standalone workflows." },
            ].map((item, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="font-semibold text-lg mb-2">{item.reason}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Comparison Table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Quick Comparison: Adobe Firefly vs Alternatives</h2>
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
                      <Link href={`#${alt.slug}`} className="font-medium text-white hover:text-blue-400 transition">
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

        {/* Detailed Cards */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Detailed Look at Each Adobe Firefly Alternative</h2>
          <div className="space-y-8">
            {alternatives.map((alt) => (
              <div key={alt.slug} id={alt.slug} className="bg-gray-900 border border-gray-800 rounded-xl p-6 sm:p-8 scroll-mt-20">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center text-xl font-bold text-blue-400 flex-shrink-0">
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
                    <p className="text-gray-400 mt-1">{alt.description}</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-600/5 to-red-600/5 border border-orange-500/10 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-orange-400 mb-2">Why choose {alt.name} over Adobe Firefly?</h4>
                  <ul className="space-y-1">
                    {alt.whySwitchReasons.map((reason, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-orange-400 mt-0.5 flex-shrink-0">→</span>
                        {reason}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-300 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {alt.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-5">
                    <div>
                      <h4 className="font-semibold text-gray-300 mb-2">Pricing</h4>
                      <p className="text-gray-300 text-sm">{alt.startingPrice}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-300 mb-2">Best For</h4>
                      <p className="text-gray-400 text-sm">{alt.bestFor}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-800">
                  <a
                    href={alt.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                  >
                    Try {alt.name} →
                  </a>
                  <Link href={`/tool/${alt.slug}`} className="text-blue-400 hover:text-blue-300 text-sm font-medium transition">
                    📋 Full Review →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
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

        {/* Cross-links */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Learn More</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/tool/midjourney" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">✨ Midjourney</h3>
              <p className="text-gray-400 text-sm">The gold standard for artistic AI image generation</p>
            </Link>
            <Link href="/tool/ideogram" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">🔤 Ideogram</h3>
              <p className="text-gray-400 text-sm">Best AI image generator for text inside images</p>
            </Link>
            <Link href="/tool/flux" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">⚡ Flux</h3>
              <p className="text-gray-400 text-sm">Open-weight model with photorealistic output</p>
            </Link>
            <Link href="/alternatives/midjourney" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">🎨 Midjourney Alternatives</h3>
              <p className="text-gray-400 text-sm">Best alternatives to Midjourney for AI art</p>
            </Link>
            <Link href="/alternatives/dall-e" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">🖼️ DALL-E Alternatives</h3>
              <p className="text-gray-400 text-sm">Best alternatives to DALL-E for image generation</p>
            </Link>
            <Link href="/category/image-generation" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">🖼️ AI Image Generators</h3>
              <p className="text-gray-400 text-sm">Browse all AI image generation tools</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
