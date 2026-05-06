import Link from "next/link";
import type { Metadata } from "next";
import { getAffiliateUrl } from "@/data/affiliate-links";

export const metadata: Metadata = {
  title: "Best Runway ML Alternatives in 2026 (Free & Cheaper AI Video)",
  description:
    "The best Runway alternatives in 2026 — free and affordable AI video generators. Compare Kling AI, Sora, Luma Dream Machine, Pika, Hailuo, and more.",
  keywords: [
    "runway alternatives",
    "runway ml alternatives",
    "ai video generator alternatives",
    "free runway alternative",
    "cheaper than runway",
    "best runway ml alternative 2026",
    "runway gen 3 alternative",
    "kling ai vs runway",
    "sora vs runway",
    "luma dream machine alternative",
  ],
  openGraph: {
    title: "Best Runway ML Alternatives in 2026 (Free & Cheaper AI Video)",
    description:
      "Runway costs $15-76/mo for serious video work. These 8 alternatives offer comparable quality at lower prices — several with generous free tiers.",
    url: "https://aisotools.com/blog/runway-alternatives-2026",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/blog/runway-alternatives-2026",
  },
};

interface VideoAlternative {
  rank: number;
  name: string;
  slug: string;
  tagline: string;
  freeTier: string;
  paidFrom?: string;
  bestFor: string;
  strengths: string[];
  limitations: string[];
  badge?: string;
  maxLength?: string;
}

const alternatives: VideoAlternative[] = [
  {
    rank: 1,
    name: "Kling AI",
    slug: "kling-ai",
    tagline: "Best Runway alternative overall — longer clips and lower cost",
    freeTier: "Free: 66 credits/day (~33 short videos)",
    paidFrom: "$9.99/mo Standard",
    bestFor: "Text-to-video, image-to-video, commercial video content",
    maxLength: "3-5 min (Pro)",
    strengths: [
      "Generates up to 3-minute videos vs Runway Gen 3's 10-second limit",
      "Significantly more generous free tier than Runway",
      "Motion quality rivals Runway Gen 3 on many prompt types",
      "Image-to-video with natural movement of still subjects",
      "Lip sync mode for AI avatar talking head videos",
    ],
    limitations: [
      "Chinese product — data privacy concerns for sensitive corporate content",
      "English prompt support improved but still better in Chinese",
      "Consistency across shots is harder than Runway's professional controls",
    ],
    badge: "Best Overall",
  },
  {
    rank: 2,
    name: "Sora",
    slug: "sora",
    tagline: "OpenAI's Sora — most cinematic video quality available",
    freeTier: "Limited free tier (Sora Explore on ChatGPT free)",
    paidFrom: "Included with ChatGPT Plus $20/mo",
    bestFor: "High-quality short-form video, product demos, creative content",
    maxLength: "20 seconds (Plus) · 1 min (Pro)",
    strengths: [
      "Best video quality for certain styles — cinematic realism is unmatched",
      "Storyboard mode for creating multi-shot video sequences",
      "Remix: upload a video and transform its style or content",
      "Included with ChatGPT Plus — no separate subscription needed",
      "OpenAI's research momentum means rapid quality improvements",
    ],
    limitations: [
      "ChatGPT Plus limits to 20-second clips with watermarks",
      "Pro ($200/mo) needed for 1-minute clips and commercial use",
      "Less consistent than Runway for professional production use cases",
    ],
    badge: "Best Quality",
  },
  {
    rank: 3,
    name: "Luma AI",
    slug: "luma-ai",
    tagline: "Dream Machine — fast generation and excellent free tier",
    freeTier: "Free: 30 generations/month",
    paidFrom: "$29.99/mo Plus",
    bestFor: "Quick concept videos, product visualization, creative short clips",
    maxLength: "9 seconds",
    strengths: [
      "30 free generations/month — the most generous major free tier",
      "Very fast generation speed (2-3 min vs Runway's 4-5 min)",
      "Strong at object and camera motion realism",
      "Keyframe control: set start and end frames for precise video composition",
      "Works well for e-commerce product visualization",
    ],
    limitations: [
      "Maximum 9 seconds per clip — short even by AI video standards",
      "Character consistency across scenes isn't as strong as Runway",
      "Text-to-video prompt following is less precise than newer models",
    ],
    badge: "Best Free Tier",
  },
  {
    rank: 4,
    name: "Pika Labs",
    slug: "pika-labs",
    tagline: "Best Runway alternative for editing existing video with AI",
    freeTier: "Free: 150 credits/month",
    paidFrom: "$8/mo Basic",
    bestFor: "AI video effects, existing video transformation, quick social clips",
    maxLength: "10 seconds",
    strengths: [
      "Pikadditions: add realistic AI-generated objects to existing footage",
      "Inflate: turn a 2D image into a morphing 3D video",
      "Text effects: animate text with specific video themes (fire, water, etc.)",
      "Pikaffects: add trending effects (melting, breaking, growing) to any image",
      "Very active in trending social media video effects",
    ],
    limitations: [
      "Better for social media effects than professional production",
      "Motion consistency across a longer scene isn't Runway-level",
      "Free tier 150 credits depletes fast if experimenting",
    ],
    badge: "Best for Effects",
  },
  {
    rank: 5,
    name: "Hailuo AI",
    slug: "hailuo-ai",
    tagline: "Best free Runway alternative from MiniMax — no signup needed for demos",
    freeTier: "Free trial with watermark",
    paidFrom: "$9.99/mo Basic",
    bestFor: "Realistic human motion, talking heads, demo videos",
    maxLength: "10 seconds",
    strengths: [
      "MiniMax's video-01 model excels at realistic human movement",
      "Very fast generation — some of the fastest inference in AI video",
      "Strong at portrait and face animation for avatar content",
      "Consistent character appearance across multiple generations",
      "Low pricing for Chinese market — same quality at lower global price",
    ],
    limitations: [
      "Chinese company — same data considerations as Kling AI",
      "Less control over camera movement vs Runway",
      "Free tier has watermarks on output",
    ],
  },
  {
    rank: 6,
    name: "Veo 2",
    slug: "veo",
    tagline: "Google's Veo 2 — best for photorealistic scenes and precise prompting",
    freeTier: "Access via Google VideoFX / AI Studio waitlist",
    paidFrom: "API pricing (preview)",
    bestFor: "Photorealistic video, nature scenes, documentary-style footage",
    maxLength: "8 seconds (current)",
    strengths: [
      "Veo 2 outperforms Runway Gen 3 on photorealism benchmarks",
      "Excellent understanding of camera terminology (pan, dolly, bokeh)",
      "Built-in watermarking with SynthID for provenance tracking",
      "Google's infrastructure means fast and reliable generation",
      "Long-form video generation capabilities in development",
    ],
    limitations: [
      "Very limited access — waitlist only as of mid-2026",
      "Maximum 8 seconds per clip currently",
      "No multi-shot consistency features yet (Runway's key advantage)",
    ],
    badge: "Best Realism",
  },
  {
    rank: 7,
    name: "PixVerse",
    slug: "pixverse",
    tagline: "Best free Runway alternative with anime and stylized video",
    freeTier: "Free: unlimited with daily credit refresh",
    paidFrom: "$19.9/mo Premium",
    bestFor: "Anime-style video, stylized content, social media shorts",
    maxLength: "8 seconds",
    strengths: [
      "Genuinely unlimited free tier with daily credit refresh",
      "Best-in-class anime and illustrated style video generation",
      "Character animation from uploaded images",
      "Fast generation speed and clean UI",
      "Community templates for specific video styles",
    ],
    limitations: [
      "Stylized output — not for photorealistic professional video",
      "Less control over camera motion than Runway",
      "Free tier has lower resolution than paid",
    ],
    badge: "Best Free + Anime",
  },
  {
    rank: 8,
    name: "Haiper AI",
    slug: "haiper",
    tagline: "Former Google DeepMind team — fast and technically impressive",
    freeTier: "Free: 100 credits/week",
    paidFrom: "$15/mo Explorer",
    bestFor: "Quick drafts, image animation, video looping effects",
    maxLength: "4-8 seconds",
    strengths: [
      "DeepMind alumni — strong technical foundation for future quality",
      "Fast generation speed — useful for rapid iteration",
      "Video looping: creates perfect loops from any generated clip",
      "100 free credits per week — enough for regular casual use",
      "Strong at dynamic motion and physics simulation",
    ],
    limitations: [
      "Still catching up to Runway on overall quality and consistency",
      "Limited clip length (4-8 seconds max)",
      "Fewer editing and customization features than Runway",
    ],
  },
];

const comparisonTable = [
  { useCase: "Longest videos (minutes, not seconds)", winner: "Kling AI", why: "Up to 3+ minute videos — Runway is limited to 10 seconds" },
  { useCase: "Best cinematic quality", winner: "Sora / Veo 2", why: "OpenAI and Google's research muscle shows in photorealism" },
  { useCase: "Most free generations", winner: "Luma Dream Machine", why: "30 free/month vs Runway's very limited free tier" },
  { useCase: "Existing video transformation", winner: "Pika Labs", why: "Pikadditions and effects layer AI onto real footage" },
  { useCase: "Anime / stylized video", winner: "PixVerse", why: "Unlimited free tier, purpose-built for stylized content" },
  { useCase: "Realistic human motion", winner: "Hailuo AI", why: "MiniMax model excels at human character animation" },
  { useCase: "Multi-shot professional production", winner: "Runway Gen 3", why: "Consistency controls, Act-One, and lip sync are unmatched" },
];

export default function RunwayAlternativesPage() {
  const year = 2026;

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-950 border-b border-gray-800 py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-violet-500/20 text-violet-400 text-xs font-medium px-2.5 py-1 rounded-full">
              AI Video
            </span>
            <span className="bg-blue-500/20 text-blue-400 text-xs font-medium px-2.5 py-1 rounded-full">
              Alternatives Guide
            </span>
            <span className="bg-gray-800 text-gray-400 text-xs font-medium px-2.5 py-1 rounded-full">
              Updated May {year}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Runway ML Alternatives in {year}
          </h1>
          <p className="text-xl text-gray-400 mb-6 max-w-3xl">
            Runway Gen 3 is a professional-grade AI video tool, but at $15-76/mo
            it&apos;s not for everyone — and its 10-second clip limit frustrates
            creators. These {alternatives.length} alternatives deliver competitive
            quality, often with more generous free tiers.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>✓ {alternatives.length} alternatives compared</span>
            <span>✓ Free options highlighted</span>
            <span>✓ Max clip length listed</span>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Quick Answer */}
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 mb-12">
          <h2 className="font-bold text-blue-400 text-sm uppercase tracking-wider mb-3">
            Quick Answer
          </h2>
          <p className="text-gray-300 mb-4">
            The best Runway alternative depends on what frustrates you most:
          </p>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <span className="text-white font-medium">10-second limit feels too short:</span>{" "}
              Kling AI — up to 3+ minute videos at comparable quality
            </li>
            <li>
              <span className="text-white font-medium">Cost is too high:</span>{" "}
              Luma Dream Machine (30 free/month) or Kling AI ($9.99/mo)
            </li>
            <li>
              <span className="text-white font-medium">Best raw quality:</span>{" "}
              Sora (ChatGPT Plus) or Veo 2 (Google, waitlist)
            </li>
            <li>
              <span className="text-white font-medium">Stylized/anime video:</span>{" "}
              PixVerse — unlimited free tier, best anime output
            </li>
            <li>
              <span className="text-white font-medium">Transform existing footage:</span>{" "}
              Pika Labs — AI effects on real video
            </li>
          </ul>
        </div>

        {/* Why Switch */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Why Look for Runway Alternatives?</h2>
          <p className="text-gray-300 mb-4">
            Runway Gen 3 Alpha is still the most feature-complete AI video tool for professional
            production — Act-One lip sync, multi-shot consistency, and detailed motion controls
            are genuinely ahead of competition. But there are clear reasons creators switch:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {[
              { issue: "Short clip limit", detail: "Gen 3 maxes at 10 seconds. For YouTube, TikTok, or ads needing 30-60 second segments, you need to stitch dozens of clips — painful workflow." },
              { issue: "Expensive for casual use", detail: "Standard ($15/mo) gives 625 credits — roughly 62 basic 5-second videos. Power users need Unlimited ($76/mo) which is a significant spend." },
              { issue: "Kling AI quality gap closed", detail: "Kling 1.6 has caught up to Gen 3 on many prompt types while offering much longer clips at lower cost." },
              { issue: "Free tier is nearly useless", detail: "Runway's free trial is very limited. Luma and PixVerse offer 30+ generations free per month — much better for testing." },
            ].map((item, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                <h3 className="font-semibold text-amber-400 mb-1">{item.issue}</h3>
                <p className="text-sm text-gray-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Alternatives List */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            Top {alternatives.length} Runway Alternatives Ranked
          </h2>
          <div className="space-y-8">
            {alternatives.map((alt) => (
              <div
                key={alt.slug}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="bg-gray-800 text-gray-400 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {alt.rank}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-xl font-bold">{alt.name}</h3>
                        {alt.badge && (
                          <span className="bg-violet-500/20 text-violet-400 text-xs font-medium px-2 py-0.5 rounded-full">
                            {alt.badge}
                          </span>
                        )}
                        {alt.maxLength && (
                          <span className="bg-gray-800 text-gray-400 text-xs px-2 py-0.5 rounded-full">
                            Max: {alt.maxLength}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-400 text-sm mt-0.5">
                        {alt.tagline}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg px-4 py-2.5 mb-4 text-sm">
                  <span className="text-blue-400 font-medium">Free tier: </span>
                  <span className="text-gray-300">{alt.freeTier}</span>
                  {alt.paidFrom && (
                    <span className="text-gray-500 ml-2">· Paid from {alt.paidFrom}</span>
                  )}
                </div>

                <p className="text-gray-400 text-sm mb-4">
                  <span className="text-gray-300 font-medium">Best for:</span>{" "}
                  {alt.bestFor}
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-sm font-semibold text-green-400 mb-2">✓ Strengths</h4>
                    <ul className="space-y-1">
                      {alt.strengths.map((s, i) => (
                        <li key={i} className="text-sm text-gray-300 flex gap-2">
                          <span className="text-green-500 flex-shrink-0">•</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-red-400 mb-2">✗ Limitations</h4>
                    <ul className="space-y-1">
                      {alt.limitations.map((l, i) => (
                        <li key={i} className="text-sm text-gray-300 flex gap-2">
                          <span className="text-red-500 flex-shrink-0">•</span>
                          {l}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-3 flex-wrap items-center">
                  {(() => {
                    const affiliateUrl = getAffiliateUrl(alt.slug);
                    return affiliateUrl ? (
                      <a
                        href={affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                      >
                        Try {alt.name} →
                      </a>
                    ) : null;
                  })()}
                  <Link
                    href={`/tool/${alt.slug}`}
                    className="text-sm text-blue-400 hover:text-blue-300 transition"
                  >
                    View tool details →
                  </Link>
                  <Link
                    href={`/alternatives/${alt.slug}`}
                    className="text-sm text-gray-500 hover:text-gray-400 transition"
                  >
                    More {alt.name} alternatives →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Best Runway Alternative by Use Case</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Use Case</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Best Option</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Why</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row, i) => (
                  <tr key={i} className="border-b border-gray-800/50 hover:bg-gray-900/50 transition">
                    <td className="py-3 px-4 text-sm text-gray-300">{row.useCase}</td>
                    <td className="py-3 px-4 text-sm font-medium text-violet-400">{row.winner}</td>
                    <td className="py-3 px-4 text-sm text-gray-400">{row.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "Is Kling AI better than Runway?",
                a: "It depends on the use case. Kling AI generates longer clips (up to 3+ minutes vs Runway's 10 seconds) and is significantly cheaper ($9.99/mo vs $15-76/mo). On pure quality for 5-10 second clips, Runway Gen 3 still has an edge for professional production work — especially multi-shot consistency and Act-One lip sync. For social media content, short films, and general creative work, Kling AI is now a legitimate Runway replacement.",
              },
              {
                q: "What is the best free Runway alternative?",
                a: "Luma Dream Machine (30 free generations/month) and PixVerse (unlimited daily credits) are the most generous free alternatives. Hailuo AI offers 100 credits per week. All three produce competitive AI video quality on the free tier. Runway's free trial is comparatively very limited, making these alternatives significantly better for testing or casual use.",
              },
              {
                q: "Is Sora better than Runway?",
                a: "Sora (OpenAI) produces stunning cinematic quality that exceeds Runway for specific use cases — particularly photorealistic scenes. But Sora via ChatGPT Plus is limited to 20-second watermarked clips, and full commercial production requires ChatGPT Pro ($200/mo), which is more expensive than Runway. For professional production workflows, Runway's consistency controls and editing features are more mature. For raw visual quality on short clips, Sora wins.",
              },
              {
                q: "What is the cheapest AI video generator comparable to Runway?",
                a: "Kling AI at $9.99/mo is the best combination of quality and price — cheaper than Runway Standard ($15/mo) with longer clip lengths and comparable quality. Luma Dream Machine at $29.99/mo is pricier but offers the best quality-to-credit ratio for high-volume creators. For the absolute cheapest serious option, PixVerse's free tier handles many basic AI video tasks without payment.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-400 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: `Best Runway ML Alternatives in ${year}`,
              description: "The best Runway alternatives in 2026 — free and cheaper AI video generators. Kling AI, Sora, Luma, Pika, and more compared on quality, pricing, and clip length.",
              datePublished: "2026-05-06",
              dateModified: "2026-05-06",
              author: { "@type": "Organization", name: "AISO Tools" },
              publisher: { "@type": "Organization", name: "AISO Tools", url: "https://aisotools.com" },
              mainEntityOfPage: { "@type": "WebPage", "@id": "https://aisotools.com/blog/runway-alternatives-2026" },
              FAQPage: {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Is Kling AI better than Runway?",
                    acceptedAnswer: { "@type": "Answer", text: "Kling AI generates longer clips and costs less. Runway still leads on multi-shot consistency and professional production controls. For social media and general creative work, Kling AI is a legitimate Runway replacement." },
                  },
                  {
                    "@type": "Question",
                    name: "What is the best free Runway alternative?",
                    acceptedAnswer: { "@type": "Answer", text: "Luma Dream Machine (30 free/month) and PixVerse (unlimited daily credits) are the most generous free alternatives. Both produce competitive AI video quality vs Runway's very limited free trial." },
                  },
                ],
              },
            }),
          }}
        />

        {/* CTA */}
        <section className="bg-gradient-to-r from-violet-600/20 to-purple-600/20 border border-violet-500/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Compare All AI Video Tools</h2>
          <p className="text-gray-400 mb-6">
            Browse the full AI video generator category — pricing, features, and
            side-by-side comparisons for Runway, Kling, Sora, and 50+ more tools.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/alternatives/runway"
              className="bg-violet-600 hover:bg-violet-700 text-white px-5 py-3 rounded-lg font-medium transition text-sm"
            >
              All Runway Alternatives
            </Link>
            <Link
              href="/blog/best-ai-video-generators-2026"
              className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-3 rounded-lg font-medium transition text-sm"
            >
              Best AI Video Generators →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
