import Link from "next/link";
import type { Metadata } from "next";

const year = 2026;

export const metadata: Metadata = {
  title: `Best Sora Alternatives (${year}) — Top 5 AI Video Generators | AISO Tools`,
  description: `Looking for Sora alternatives? Compare the 5 best AI video generators available right now. Features, pricing, and pros & cons in ${year}.`,
  alternates: {
    canonical: "https://aisotools.com/alternatives/sora",
  },
  openGraph: {
    title: `Best Sora Alternatives (${year}) — Top 5 AI Video Generators`,
    description: `Compare the 5 best alternatives to OpenAI Sora for text-to-video, video editing, and AI video generation.`,
    url: "https://aisotools.com/alternatives/sora",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Sora Alternatives (${year})`,
    description: `Top 5 AI video generators as alternatives to Sora.`,
  },
};

const alternatives = [
  {
    rank: 1,
    name: "Runway Gen-3 Alpha",
    slug: "runway",
    url: "https://runwayml.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (125 credits). Standard $15/mo",
    tagline: "The most capable AI video generator with the richest feature set",
    description:
      "Runway Gen-3 Alpha is the closest competitor to Sora in terms of video quality and artistic control. Used extensively by Hollywood studios and creative agencies, Runway combines text-to-video, image-to-video, video-to-video transformation, inpainting, and green screen AI removal in one platform. While Sora focuses on raw generative quality, Runway provides the full production toolkit that working video professionals actually need.",
    features: [
      "Gen-3 Alpha: cinematic quality text-to-video",
      "Image-to-video with consistent subject motion",
      "Video-to-video style transfer and transformation",
      "AI green screen (background removal without chroma key)",
      "Inpainting: replace specific elements in existing video",
      "Motion brush for directional motion control",
    ],
    whySwitchReasons: [
      "Need a complete video AI toolkit, not just text-to-video generation",
      "Want proven platform used by professional studios and agencies",
      "Require video editing and post-production AI features beyond generation",
    ],
    bestFor: "Video editors, creative directors, and agencies needing professional-grade AI video tools.",
    compareUrl: "/tool/runway",
  },
  {
    rank: 2,
    name: "Luma Dream Machine",
    slug: "luma",
    url: "https://lumalabs.ai/dream-machine",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (30 generations/mo). Plus $29.99/mo",
    tagline: "The fastest high-quality text-to-video generator with a generous free tier",
    description:
      "Luma Dream Machine produces smooth, high-quality 5-second video clips with impressive physical realism — fluid motion, realistic lighting, and consistent character movement. It outperforms many competitors on generation speed (under 2 minutes per clip) and offers one of the better free tiers at 30 generations per month. For creators who need Sora-quality output without the waitlist or ChatGPT Pro subscription requirement, Dream Machine is the best available alternative.",
    features: [
      "30 free video generations per month",
      "Realistic motion with good physics simulation",
      "Image-to-video for animating still photos",
      "Fast generation (under 2 minutes for most clips)",
      "Extend video clips for longer sequences",
      "High-definition output up to 1080p",
    ],
    whySwitchReasons: [
      "Want Sora-class quality with an accessible free tier",
      "Need faster generation speeds without a waitlist",
      "Prefer a simple interface focused purely on video generation",
    ],
    bestFor: "Content creators, social media managers, and filmmakers testing AI video workflows.",
    compareUrl: "/tool/luma",
  },
  {
    rank: 3,
    name: "Kling AI",
    slug: "kling",
    url: "https://klingai.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (66 credits/day). Pro $10.99/mo",
    tagline: "The best free option for longer, more realistic AI video clips",
    description:
      "Kling AI from Kuaishou (the Chinese tech giant behind Kwai) has rapidly emerged as one of the most capable and accessible AI video generators globally. It generates up to 5-minute long videos (far exceeding Sora's typical output length), includes lip-sync capabilities, and offers a generous free tier that makes it the most accessible professional-quality option available. Kling's 1080p output quality competes directly with Runway and Luma at a lower price point.",
    features: [
      "Video generation up to 5 minutes in length",
      "AI lip-sync for talking head videos",
      "1080p output quality with consistent subjects",
      "Image-to-video and text-to-video modes",
      "Camera movement controls (pan, zoom, orbit)",
      "Generous free daily credit allocation",
    ],
    whySwitchReasons: [
      "Need longer video clips (beyond Sora's typical 20-second limit)",
      "Want a generous free tier for daily content creation",
      "Require lip-sync capabilities for presenter or avatar videos",
    ],
    bestFor: "Social media creators, faceless YouTube channel operators, and marketers needing long-form video.",
    compareUrl: "/tool/kling",
  },
  {
    rank: 4,
    name: "Pika",
    slug: "pika",
    url: "https://pika.art",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (basic). Basic $8/mo",
    tagline: "The most fun and accessible AI video generator for quick clips",
    description:
      "Pika became a viral sensation for its ability to take any image — a selfie, a product photo, a painting — and animate it with realistic motion in seconds. Pika 2.0 introduced 'Pikaffects' — creative effects that animate videos in stylized ways like melting, crushing, or exploding. While Sora focuses on cinematic realism, Pika leans into fun, shareable, creative expression that makes it perfect for social media content.",
    features: [
      "Pikaffects: creative animation effects (melt, explode, etc.)",
      "Realistic image animation with natural motion",
      "Fast generation for quick social media content",
      "Lip-sync for short presenter clips",
      "Sound effects and background audio generation",
      "Scene transitions for polished edit sequences",
    ],
    whySwitchReasons: [
      "Want quick, fun AI video content without complex controls",
      "Need viral-ready social media video from still images",
      "Prefer a lower price point and accessible free tier",
    ],
    bestFor: "Social media creators, marketers, and content creators making short-form video content.",
    compareUrl: "/tool/pika",
  },
  {
    rank: 5,
    name: "Hailuo AI",
    slug: "hailuo",
    url: "https://hailuoai.video",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (limited). Plus pricing varies",
    tagline: "The dark horse with impressive realism and consistent character motion",
    description:
      "Hailuo AI (MiniMax) has emerged as a surprise competitor, producing some of the most physically realistic human motion of any AI video generator. It excels particularly at consistent character appearance across frames — a major weakness of most AI video tools. Hailuo's output often looks more 'real' than Runway or Luma for human-centric videos, making it an underrated choice for talking head content, fitness videos, and any video featuring people.",
    features: [
      "Exceptional human motion realism",
      "Consistent character appearance across frames",
      "Text-to-video and image-to-video modes",
      "720p and 1080p output options",
      "Accessible free tier for testing",
      "Strong performance on realistic human subjects",
    ],
    whySwitchReasons: [
      "Need the most realistic human motion in AI-generated video",
      "Want consistent character identity across longer clips",
      "Looking for an underrated high-quality alternative with a free tier",
    ],
    bestFor: "Creators making human-centric content: fitness, tutorials, marketing videos, and talking head content.",
    compareUrl: "/tool/hailuo",
  },
];

const faqs = [
  {
    question: "What is Sora and why do people look for alternatives?",
    answer:
      "Sora is OpenAI's text-to-video AI model that generates high-quality, realistic video clips from text prompts. It produces some of the most cinematic AI video available, but requires a ChatGPT Pro subscription ($200/month) for unlimited access, making it expensive. People look for alternatives that offer similar quality at lower price points or with more generous free tiers.",
  },
  {
    question: "Which Sora alternative is completely free?",
    answer:
      "Luma Dream Machine offers 30 free video generations per month. Kling AI gives 66 free credits daily. Pika has a free tier for basic clips. All three allow meaningful usage without a paid subscription, making them the best starting points for creators testing AI video generation.",
  },
  {
    question: "Which Sora alternative produces the most realistic video?",
    answer:
      "Runway Gen-3 Alpha and Luma Dream Machine are generally considered closest to Sora in cinematic quality for general scenes. For human-centric video with realistic motion, Hailuo AI (MiniMax) often outperforms both. The 'best' depends heavily on your specific subject matter and use case.",
  },
  {
    question: "Can any of these alternatives generate longer videos than Sora?",
    answer:
      "Yes. Kling AI can generate videos up to 5 minutes long, which far exceeds Sora's typical output of 20-60 second clips. Runway also supports extended video through clip chaining. Sora's current consumer access focuses on shorter clips.",
  },
  {
    question: "Is Sora available to everyone?",
    answer:
      "As of 2026, Sora is available to ChatGPT Plus ($20/mo) and ChatGPT Pro ($200/mo) subscribers, with generation limits varying by tier. It launched in December 2024 after an extended preview period. Pro subscribers get priority access and higher generation limits.",
  },
];

export default function SoraAlternativesPage() {
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            🎬 Best Alternatives {year}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Best Sora Alternatives in {year}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Compare the {alternatives.length} best alternatives to OpenAI Sora for text-to-video generation.
          </p>
          <div className="flex items-center justify-center gap-3 mt-4 flex-wrap">
            <span className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm font-medium">
              Sora: ChatGPT Plus/Pro ($20-200/mo)
            </span>
            <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
              🎬 AI Video Generators
            </span>
          </div>
        </div>

        {/* Why Switch */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Why Look for Sora Alternatives?</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Sora produces stunning cinematic video but requires a ChatGPT Plus ($20/mo) or Pro ($200/mo) subscription, and generation limits can be restrictive. Many creators need more daily generations, longer video lengths, or specific features like lip-sync that Sora doesn&apos;t prioritize. The alternatives below deliver competitive quality at lower costs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { reason: "💰 Lower Cost", detail: "Sora requires ChatGPT Pro ($200/mo) for heavy use. Alternatives like Runway and Luma start at $15-30/mo with generous limits." },
              { reason: "⏱️ Longer Clips", detail: "Kling AI can generate up to 5-minute videos. Sora typically caps at shorter clips in its consumer tier." },
              { reason: "🎭 More Features", detail: "Runway offers green screen, video-to-video, and inpainting. Sora focuses purely on generation." },
              { reason: "🆓 Free Tiers", detail: "Luma, Kling, and Pika all offer meaningful free tiers. Sora requires a paid ChatGPT subscription." },
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
          <h2 className="text-2xl font-bold mb-6">Quick Comparison: Sora vs Alternatives</h2>
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
          <h2 className="text-2xl font-bold mb-6">Detailed Look at Each Sora Alternative</h2>
          <div className="space-y-8">
            {alternatives.map((alt) => (
              <div key={alt.slug} id={alt.slug} className="bg-gray-900 border border-gray-800 rounded-xl p-6 sm:p-8 scroll-mt-20">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-red-600/20 flex items-center justify-center text-xl font-bold text-red-400 flex-shrink-0">
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

                <div className="bg-gradient-to-r from-red-600/5 to-orange-600/5 border border-red-500/10 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-red-400 mb-2">Why choose {alt.name} over Sora?</h4>
                  <ul className="space-y-1">
                    {alt.whySwitchReasons.map((reason, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-red-400 mt-0.5 flex-shrink-0">→</span>
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
                    className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                  >
                    Try {alt.name} →
                  </a>
                  <Link href={`/tool/${alt.slug}`} className="text-red-400 hover:text-red-300 text-sm font-medium transition">
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
          <h2 className="text-2xl font-bold mb-4">Explore More</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/alternatives/runway" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-red-500/50 transition">
              <h3 className="font-semibold mb-1">🎬 Runway Alternatives</h3>
              <p className="text-gray-400 text-sm">Best alternatives to Runway Gen-3</p>
            </Link>
            <Link href="/tool/kling" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-red-500/50 transition">
              <h3 className="font-semibold mb-1">🎥 Kling AI</h3>
              <p className="text-gray-400 text-sm">Generate up to 5-minute AI videos</p>
            </Link>
            <Link href="/tool/luma" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-red-500/50 transition">
              <h3 className="font-semibold mb-1">✨ Luma Dream Machine</h3>
              <p className="text-gray-400 text-sm">Fast, high-quality text-to-video</p>
            </Link>
            <Link href="/compare/sora-vs-luma-dream-machine" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-red-500/50 transition">
              <h3 className="font-semibold mb-1">⚖️ Sora vs Luma</h3>
              <p className="text-gray-400 text-sm">Head-to-head comparison</p>
            </Link>
            <Link href="/blog/best-ai-video-generators-2026" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-red-500/50 transition">
              <h3 className="font-semibold mb-1">📋 Best AI Video Generators</h3>
              <p className="text-gray-400 text-sm">Full guide to AI video in {year}</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
