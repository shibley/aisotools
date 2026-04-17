import Link from "next/link";
import type { Metadata } from "next";

const year = 2026;

export const metadata: Metadata = {
  title: `Best Runway ML Alternatives (${year}) — Top 12 AI Video Generators | AISO Tools`,
  description: `Looking for Runway ML alternatives? Compare the 12 best AI video generators including Kling, Pika, Sora, and Veo with pricing and pros & cons in ${year}.`,
  alternates: {
    canonical: "https://aisotools.com/alternatives/runway",
  },
  openGraph: {
    title: `Best Runway ML Alternatives (${year}) — Top 12 AI Video Generators`,
    description: `Compare the best alternatives to Runway ML for cinematic video, social content, and corporate avatars.`,
    url: "https://aisotools.com/alternatives/runway",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Runway ML Alternatives (${year})`,
    description: `Top 12 Runway ML alternatives for AI video generation.`,
  },
};

const alternatives = [
  {
    rank: 1,
    name: "Kling AI",
    slug: "kling",
    url: "https://klingai.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free. Standard $6.99/mo",
    tagline: "Best value with the longest AI video generation",
    description:
      "Kling AI is the definitive choice for creators who need maximum output for minimum cost. It leads the market with video generation up to 3 minutes and high-fidelity physics, making it a powerhouse for short films and commercial content.",
    features: [
      "Industry-leading 3-minute video generation",
      "Lowest entry price point ($6.99/mo)",
      "Native audio generation (Kling 2.6)",
      "Video O1 Chain of Thought reasoning",
      "Daily free credits for consistent testing",
      "Strong lip-syncing and action physics",
    ],
    whySwitchReasons: [
      "Need significantly longer clips than Runway's 10-second limit",
      "Want a more affordable monthly subscription",
      "Need daily free credits instead of a one-time allowance",
    ],
    bestFor: "High-volume creators and indie filmmakers on a budget.",
    compareUrl: "/compare/runway-vs-kling",
  },
  {
    rank: 2,
    name: "Pika",
    slug: "pika",
    url: "https://pika.art",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free. Standard $8/mo",
    tagline: "The speed king of AI video for social media",
    description:
      "Pika is optimized for rapid iteration and viral content. With generation times 3-6x faster than most competitors and unique 'Pikaffects' like Melt and Inflate, it's the best tool for TikTok, Reels, and YouTube Shorts.",
    features: [
      "Ultra-fast generation (30-90 seconds)",
      "Viral Pikaffects (Inflate, Melt, Explode)",
      "Advanced dynamic camera control",
      "PikaFrames for morph transitions",
      "Native sound generation (Pika 2.5)",
      "Preset social media aspect ratios",
    ],
    whySwitchReasons: [
      "Need a faster workflow for rapid social media posting",
      "Want unique stylized effects that Runway lacks",
      "Prefer a more intuitive, beginner-friendly interface",
    ],
    bestFor: "Social media influencers and short-form content creators.",
    compareUrl: "/compare/runway-vs-pika",
  },
  {
    rank: 3,
    name: "OpenAI Sora 2",
    slug: "sora",
    url: "https://openai.com/sora",
    pricing: "Paid",
    pricingColor: "bg-orange-500/10 text-orange-400",
    freeTier: false,
    startingPrice: "Plus $20/mo. Pro $200/mo",
    tagline: "The gold standard for cinematic realism",
    description:
      "Sora 2 is for creators where quality is non-negotiable. It delivers unmatched human motion and character consistency across multi-shot sequences, creating immersive scenes that feel like real-world footage.",
    features: [
      "Highest level of visual realism in the industry",
      "Consistent characters across different shots",
      "Synchronized dialogue and sound effects",
      "Longer single clips (up to 25 seconds in Pro)",
      "Complex multi-shot narrative capability",
      "Exclusive Disney character partnerships",
    ],
    whySwitchReasons: [
      "Need the highest possible visual fidelity for a professional project",
      "Require character consistency across a sequence of clips",
      "Budget allows for the premium $200/mo Pro plan",
    ],
    bestFor: "Professional studios and high-end commercial filmmakers.",
    compareUrl: "/compare/runway-vs-sora",
  },
  {
    rank: 4,
    name: "Google Veo 3.1",
    slug: "veo",
    url: "https://deepmind.google/technologies/veo",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (via Gemini). Advanced $19.99/mo",
    tagline: "Native 4K quality with perfect audio sync",
    description:
      "Google's Veo 3.1 is the resolution champion, offering native 4K output that surpasses almost every other AI generator. It excels at atmospheric lighting and complex reflections, integrated directly into the Google ecosystem.",
    features: [
      "Native 4K output for maximum crispness",
      "Industry-leading audio synchronization",
      "Deep integration with Gemini and Google Cloud",
      "Exceptional cinematic lighting and shadows",
      "Fast generation times via Google infrastructure",
      "Available for free through the Gemini tier",
    ],
    whySwitchReasons: [
      "Need native 4K resolution instead of upscaled 1080p",
      "Want the best possible audio-to-video synchronization",
      "Already heavily invested in the Google AI ecosystem",
    ],
    bestFor: "Creators needing ultra-high-res assets for 4K displays.",
    compareUrl: "/compare/runway-vs-veo",
  },
  {
    rank: 5,
    name: "Synthesia",
    slug: "synthesia",
    url: "https://synthesia.io",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (3 min/mo). Starter $18/mo",
    tagline: "The enterprise standard for AI avatars",
    description:
      "Synthesia isn't for cinematic art; it's for scalable communication. It allows you to create hour-long professional presentations using 230+ AI avatars in 140+ languages, making it the top choice for corporate training.",
    features: [
      "Massive library of 230+ professional avatars",
      "Support for 140+ languages with natural voices",
      "Ability to generate videos up to 60 minutes long",
      "250+ professional corporate templates",
      "Enterprise-grade SSO and collaboration tools",
      "Zero camera/studio equipment required",
    ],
    whySwitchReasons: [
      "Need talking-head videos instead of creative b-roll",
      "Creating training or onboarding content for a large company",
      "Need to produce videos in dozens of different languages",
    ],
    bestFor: "L&D managers, corporate trainers, and HR professionals.",
    compareUrl: "/compare/runway-vs-synthesia",
  },
  {
    rank: 6,
    name: "HeyGen",
    slug: "heygen",
    url: "https://heygen.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (3 videos). Creator $24/mo",
    tagline: "Ultra-realistic lip-syncing and personalization",
    description:
      "HeyGen specializes in the 'uncanny valley'—conquering it with the most convincing lip-syncing in the market. Its Avatar IV technology and Voice Doctor allow for emotive, personalized video outreach at scale.",
    features: [
      "Market-leading lip-sync quality (Avatar IV)",
      "Avatar Memory for consistent character details",
      "Voice Doctor for emotional tone and pacing control",
      "Support for 175+ languages",
      "High-resolution 4K output on premium plans",
      "Personalized video generation for sales",
    ],
    whySwitchReasons: [
      "Need a talking-head AI that actually looks and sounds natural",
      "Doing personalized sales outreach to thousands of leads",
      "Need more precise control over the emotion of the AI voice",
    ],
    bestFor: "Sales teams and digital marketers doing personalized video.",
    compareUrl: "/compare/runway-vs-heygen",
  },
  {
    rank: 7,
    name: "Luma Labs Ray3",
    slug: "luma",
    url: "https://lumalabs.ai",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free. Standard $9.99/mo",
    tagline: "Cinematic 4K aesthetics for filmmakers",
    description:
      "Luma Labs Ray3 focuses on the 'look' of cinema. It produces a distinctly professional, high-end camera aesthetic that makes AI video feel less like a simulation and more like a movie, all at a very aggressive price point.",
    features: [
      "Distinctly cinematic 4K output",
      "Professional-grade lighting and textures",
      "Aggressively affordable $9.99 entry price",
      "Native sound generation included",
      "Clean, minimal interface for focused creation",
      "Strong image-to-video consistency",
    ],
    whySwitchReasons: [
      "Want a 'film look' without expensive prompt engineering",
      "Looking for the best quality-to-price ratio in 4K",
      "Prefer a simple tool that just generates beautiful video",
    ],
    bestFor: "Indie filmmakers and cinematic artists.",
    compareUrl: "/compare/runway-vs-luma",
  },
  {
    rank: 8,
    name: "Adobe Firefly",
    slug: "firefly",
    url: "https://firefly.adobe.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free (25 credits). Premium $9.99/mo",
    tagline: "The safe, IP-indemnified choice for pros",
    description:
      "Firefly is the only choice for teams that require legal certainty. Trained on licensed data, it provides IP-indemnified output. Its biggest advantage is the multi-model marketplace, letting you use Sora, Veo, and Luma in one app.",
    features: [
      "Commercially safe, IP-indemnified output",
      "Multi-model marketplace (Sora, Veo, Luma, Pika)",
      "Deep integration with Premiere Pro and After Effects",
      "Trained on licensed Adobe Stock imagery",
      "Professional-grade masking and editing tools",
      "Credits bundled with Creative Cloud subscriptions",
    ],
    whySwitchReasons: [
      "Need a guarantee that the AI video won't cause legal issues",
      "Want to access multiple AI models without 5 different bills",
      "Use Adobe Creative Cloud for your final post-production",
    ],
    bestFor: "Agency professionals and corporate design teams.",
    compareUrl: "/compare/runway-vs-firefly",
  },
  {
    rank: 9,
    name: "Hailuo Minimax",
    slug: "hailuo",
    url: "https://hailuoai.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Credit packs from $5",
    tagline: "Smooth, stylized animation with pay-as-you-go",
    description:
      "Hailuo is the alternative for artists who prefer a stylized, atmospheric look over raw realism. It's also the only major player offering a truly flexible pay-as-you-go model with credit packs starting at $5.",
    features: [
      "Distinctive, smooth stylized animation",
      "Flexible credit packs (no monthly subscription required)",
      "High-quality lip-sync capabilities",
      "Strong storytelling and framing logic",
      "Competitive quality vs. industry giants",
      "Fast generation for experimental art",
    ],
    whySwitchReasons: [
      "Don't want a monthly subscription for occasional use",
      "Prefer an artistic/animated style over a photo-real style",
      "Want to try premium AI video for just a few dollars",
    ],
    bestFor: "Digital artists and occasional AI experimenters.",
    compareUrl: "/compare/runway-vs-hailuo",
  },
  {
    rank: 10,
    name: "Descript",
    slug: "descript",
    url: "https://descript.com",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free. Hobbyist $12/mo",
    tagline: "Edit video by editing a text transcript",
    description:
      "Descript is a paradigm shift in editing. Instead of a timeline, you edit a transcript. Delete a word in the text, and the video is automatically cut. It's the fastest way to polish a podcast or a YouTube talking-head video.",
    features: [
      "Text-based video editing (edit like a Word doc)",
      "Overdub voice cloning for fixing speech errors",
      "One-click filler word removal (um, uh, like)",
      "Studio Sound for professional audio enhancement",
      "Underlord AI assistant for automated editing",
      "Seamless transcription and captioning",
    ],
    whySwitchReasons: [
      "Working with existing footage instead of generating from scratch",
      "Spend too much time manually cutting 'ums' and 'ahs'",
      "Need to quickly repurpose long-form video into shorts",
    ],
    bestFor: "Podcasters, YouTubers, and content repurposers.",
    compareUrl: "/compare/runway-vs-descript",
  },
  {
    rank: 11,
    name: "PixVerse",
    slug: "pixverse",
    url: "https://pixverse.ai",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free. Pro ~$10/mo",
    tagline: "The most generous free tier in AI video",
    description:
      "PixVerse is the best entry point for AI video. It provides a massive amount of free daily credits, allowing beginners to experiment without a credit card. The quality rivals tools 3x the price.",
    features: [
      "Most generous free credit system in the market",
      "Built-in audio and speech generation",
      "Fusion and Swap features for creative flexibility",
      "Clean, stable motion with the V5 model",
      "Quick rendering and intuitive interface",
      "Active community-driven prompt library",
    ],
    whySwitchReasons: [
      "Want to learn AI video without spending money",
      "Tired of 'one-time' free credits that run out instantly",
      "Need a fast, free way to generate B-roll for social media",
    ],
    bestFor: "Hobbyists, students, and AI video beginners.",
    compareUrl: "/compare/runway-vs-pixverse",
  },
  {
    rank: 12,
    name: "Seedance",
    slug: "seedance",
    url: "https://seedance.ai",
    pricing: "Freemium",
    pricingColor: "bg-blue-500/10 text-blue-400",
    freeTier: true,
    startingPrice: "Free trial. Standard $29.99/mo",
    tagline: "Multi-shot prototyping for storyboard artists",
    description:
      "Seedance solves the biggest problem in AI video: consistency across cuts. Its multi-shot system allows you to generate a series of connected shots that maintain characters and settings, perfect for pre-visualization.",
    features: [
      "Native multi-shot sequence generation",
      "Strong character and scene consistency across cuts",
      "1080p resolution for professional prototyping",
      "Integrated image-to-video and text-to-video",
      "Post-generation editing for refined sequences",
      "Ideal for rapid storyboarding and previz",
    ],
    whySwitchReasons: [
      "Need to create a coherent scene with multiple camera angles",
      "Prototyping a film before committing to a full production",
      "Tired of characters changing appearance between clips",
    ],
    bestFor: "Storyboard artists and pre-production teams.",
    compareUrl: "/compare/runway-vs-seedance",
  },
];

const faqs = [
  {
    question: "What is the best overall alternative to Runway ML?",
    answer:
      "It depends on your goal. For value and length, Kling AI is unbeatable. For absolute realism, Sora 2 is the leader. For corporate training, Synthesia is the standard. If you need 4K quality, Google Veo 3.1 is the top choice.",
  },
  {
    question: "Is there a free alternative to Runway ML?",
    answer:
      "Yes. PixVerse has the most generous free tier. Kling AI and Pika also offer daily or ongoing free credits. Google Veo 3.1 is available for free through the Gemini interface.",
  },
  {
    question: "Which AI video generator is best for social media?",
    answer:
      "Pika is the best for social media due to its extremely fast generation speed and viral 'Pikaffects.' Kling AI is also excellent for high-volume social content due to its low cost.",
  },
  {
    question: "Can I get 4K video from an AI generator?",
    answer:
      "Yes. Google Veo 3.1 and Luma Labs Ray3 both offer native 4K output. Most other tools, including Runway, typically cap at 1080p on their standard plans, requiring Pro subscriptions for higher resolutions.",
  },
  {
    question: "Which tool is best for talking-head videos?",
    answer:
      "Synthesia and HeyGen are the leaders here. Synthesia is better for corporate scale and training, while HeyGen is superior for personalized sales outreach and ultra-realistic lip-syncing.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Best Runway ML Alternatives (${year})`,
    description: `Top 12 alternatives to Runway ML for AI video generation, cinematic clips, and corporate avatars.`,
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
      { "@type": "ListItem", position: 3, name: "Runway Alternatives", item: "https://aisotools.com/alternatives/runway" },
    ],
  },
];

export default function RunwayAlternativesPage() {
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
          <span className="text-gray-300">Runway Alternatives</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-xl bg-blue-600/20 flex items-center justify-center text-2xl font-bold text-blue-400 mx-auto mb-6">
            R
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Best Runway ML Alternatives in {year}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Compare the {alternatives.length} best alternatives to Runway ML for cinematic video, social content, and corporate avatars.
          </p>
          <div className="flex items-center justify-center gap-3 mt-4 flex-wrap">
            <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
              Runway: $12–$76/mo
            </span>
            <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
              🎥 AI Video Generators
            </span>
          </div>
        </div>

        {/* Why Switch */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Why Look for Runway ML Alternatives?</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Runway ML pioneered the space with Gen-3 and Gen-4, but it has real limitations that push creators elsewhere. Whether you need the massive clip lengths of Kling, the 4K precision of Veo, or the corporate scale of Synthesia, a specialized tool often outperforms a general-purpose one.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { reason: "⏳ Longer Clip Durations", detail: "Runway maxes out at 10 seconds. Alternatives like Kling AI offer up to 3 minutes of continuous generation." },
              { reason: "💰 Pricing & Credits", detail: "Runway's credit system can be costly. Pika and PixVerse offer more generous free tiers and cheaper entry plans." },
              { reason: "🖼️ Native 4K Resolution", detail: "While Runway is strong, Google Veo and Luma Ray3 deliver native 4K output for professional-grade cinematic work." },
              { reason: "👥 Talking-Head Avatars", detail: "Runway is for creative B-roll. For corporate training or sales, Synthesia and HeyGen are the purpose-built leaders." },
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
          <h2 className="text-2xl font-bold mb-6">Quick Comparison: Runway vs Alternatives</h2>
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
          <h2 className="text-2xl font-bold mb-6">Detailed Look at Each Runway Alternative</h2>
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

                <div className="bg-gradient-to-r from-blue-600/5 to-purple-600/5 border border-blue-500/10 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-blue-400 mb-2">Why choose {alt.name} over Runway?</h4>
                  <ul className="space-y-1">
                    {alt.whySwitchReasons.map((reason, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-blue-400 mt-0.5 flex-shrink-0">→</span>
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
            <Link href="/tool/runway" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">📋 Runway ML Review</h3>
              <p className="text-gray-400 text-sm">Full review with features, pros & cons</p>
            </Link>
            <Link href="/tool/kling" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">🎥 Kling AI</h3>
              <p className="text-gray-400 text-sm">The value leader for long AI videos</p>
            </Link>
            <Link href="/tool/sora" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">✨ OpenAI Sora</h3>
              <p className="text-gray-400 text-sm">The peak of cinematic AI realism</p>
            </Link>
            <Link href="/compare/runway-vs-kling" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">⚖️ Runway vs Kling</h3>
              <p className="text-gray-400 text-sm">Comparing cinematic power vs value</p>
            </Link>
            <Link href="/category/ai-video-generator" className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
              <h3 className="font-semibold mb-1">🎥 AI Video Tools</h3>
              <p className="text-gray-400 text-sm">Browse all video generation tools</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
