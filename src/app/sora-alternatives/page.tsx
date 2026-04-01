import { tools } from "@/data/tools";
import { getAffiliateUrl } from "@/data/affiliate-links";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sora Alternatives: 12 Best AI Video Generators in 2026",
  description:
    "Discover the best Sora alternatives including Runway, Kling, Pika, HeyGen, Luma, and Veo. Compare features, pricing, and find the perfect AI video generator for your needs.",
  keywords: [
    "Sora alternatives",
    "best AI video generators",
    "AI video creation",
    "text to video AI",
    "Runway vs Sora",
    "Kling AI video",
    "free AI video generators",
  ],
  openGraph: {
    title: "Sora Alternatives: 12 Best AI Video Generators in 2026",
    description:
      "Compare the best Sora alternatives. In-depth reviews of Runway, Kling, Pika, HeyGen, Luma, Veo, and 6 more AI video generators.",
    url: "https://aisotools.com/sora-alternatives",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/sora-alternatives",
  },
};

interface VideoGeneratorComparison {
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

const videoGenerators: VideoGeneratorComparison[] = [
  {
    name: "Runway Gen-4.5",
    slug: "runway",
    description: "Industry-leading AI video generator with advanced motion control, camera movements, and professional-grade output quality.",
    pricing: "Freemium",
    pricingDetails: "Free tier (125 credits), Standard $12/mo (625 credits), Pro $28/mo (2,250 credits), Unlimited $76/mo, Enterprise custom",
    strengths: [
      "Best-in-class video quality and consistency",
      "Advanced camera controls (pan, zoom, rotate)",
      "Motion brush for selective animation",
      "Extend video feature for longer clips",
      "Professional filmmaker-focused tools",
      "Strong multi-shot consistency",
    ],
    weaknesses: [
      "Higher pricing than competitors",
      "Credit system can be limiting",
      "Steep learning curve for advanced features",
      "Queue times during peak hours",
    ],
    bestFor: "Professional content creators, filmmakers, agencies, and high-end video production",
    features: ["Text-to-video", "Image-to-video", "Motion brush", "Camera controls", "Video extend", "Multi-shot consistency"],
  },
  {
    name: "Kling AI 3.0",
    slug: "kling",
    description: "Kuaishou's AI video generator offering exceptional motion quality and physics at competitive pricing.",
    pricing: "Freemium",
    pricingDetails: "Free tier (66 credits daily), Standard $15/mo (3,300 credits), Pro $92/mo (23,000 credits)",
    strengths: [
      "Outstanding motion realism and physics",
      "Competitive pricing per video",
      "Fast generation times",
      "Up to 10-second clips",
      "Good human movement and expressions",
      "Strong value for volume creators",
    ],
    weaknesses: [
      "Less refined than Runway for cinematic work",
      "Limited camera control options",
      "Smaller community and resources",
      "Occasional consistency issues",
    ],
    bestFor: "Social media creators, marketers, and budget-conscious users needing volume",
    features: ["Text-to-video", "Image-to-video", "10-second clips", "Motion quality", "Fast generation", "Batch processing"],
  },
  {
    name: "Pika",
    slug: "pika",
    description: "User-friendly AI video platform focused on creative effects, social media content, and rapid iteration.",
    pricing: "Freemium",
    pricingDetails: "Free tier (150 credits/mo), Standard $10/mo (700 credits), Unlimited $35/mo, Pro $70/mo",
    strengths: [
      "Easiest to use interface",
      "Creative effects and filters",
      "Fast generation (under 1 minute)",
      "Great for social media formats",
      "Active Discord community",
      "Regular feature updates",
    ],
    weaknesses: [
      "Lower visual fidelity than Runway/Kling",
      "Shorter maximum clip length",
      "Less control over camera movements",
      "Can produce unexpected results",
    ],
    bestFor: "Social media content, quick iterations, TikTok/Instagram creators, and beginners",
    features: ["Text-to-video", "Image-to-video", "Creative effects", "Expand canvas", "Lip sync", "Sound effects"],
  },
  {
    name: "HeyGen",
    slug: "heygen",
    description: "AI video platform specializing in talking avatars, AI presenters, and professional video templates.",
    pricing: "Freemium",
    pricingDetails: "Free tier (1 min), Creator $29/mo (15 min), Business $89/mo (90 min), Enterprise custom",
    strengths: [
      "Best AI avatars and presenters",
      "90+ languages and voices",
      "Professional video templates",
      "Instant avatar creation from photos",
      "API for automation",
      "Enterprise-grade security",
    ],
    weaknesses: [
      "Focused on talking head videos only",
      "Not suitable for creative/cinematic content",
      "Avatar realism varies",
      "Limited style customization",
    ],
    bestFor: "Marketing videos, product demos, training content, explainer videos, and corporate communications",
    features: ["AI avatars", "90+ languages", "Video templates", "Avatar from photo", "Voice cloning", "API access"],
  },
  {
    name: "Luma Dream Machine",
    slug: "luma",
    description: "Luma AI's text-to-video model emphasizing photorealism, smooth motion, and natural camera movements.",
    pricing: "Freemium",
    pricingDetails: "Free tier (30 generations/mo), Standard $29.99/mo (120 gen), Plus $99.99/mo (400 gen), Pro $499.99/mo (2,000 gen)",
    strengths: [
      "Exceptional photorealism",
      "Smooth, natural motion",
      "Great lighting and textures",
      "Fast generation (2-3 minutes)",
      "Extend feature for longer clips",
      "Clean, intuitive interface",
    ],
    weaknesses: [
      "Limited advanced controls",
      "Occasional distortions with complex scenes",
      "Newer platform with smaller community",
      "Higher pricing for volume users",
    ],
    bestFor: "Realistic scenes, nature content, product visualization, and photorealistic narratives",
    features: ["Text-to-video", "Image-to-video", "Photorealism", "Extend video", "Smooth motion", "Natural lighting"],
  },
  {
    name: "Google Veo",
    slug: "veo",
    description: "Google's AI video model with native audio generation, high resolution, and strong prompt adherence.",
    pricing: "Free (limited access)",
    pricingDetails: "Currently in limited preview via Google Labs and Vertex AI. Pricing TBA for commercial use.",
    strengths: [
      "Native audio generation (no separate audio tool needed)",
      "High resolution output (1080p+)",
      "Strong prompt understanding",
      "Backed by Google's AI research",
      "Integration with Google Workspace planned",
      "Cinematic quality output",
    ],
    weaknesses: [
      "Limited public access (waitlist)",
      "Commercial pricing unknown",
      "Fewer control features than Runway",
      "Still in development",
    ],
    bestFor: "Early adopters, Google ecosystem users, and those needing audio-video sync",
    features: ["Text-to-video", "Native audio", "1080p output", "Long prompts", "Cinematic quality", "Google AI"],
  },
  {
    name: "Hedra",
    slug: "hedra",
    description: "AI video platform specializing in character animation, talking characters, and multi-model workflows.",
    pricing: "Freemium",
    pricingDetails: "Free tier, Creator $29/mo, Pro $99/mo, Enterprise custom",
    strengths: [
      "Excellent character animation",
      "Multi-model workflow support",
      "Brand consistency tools",
      "Custom character creation",
      "Fast iteration cycles",
      "Good for animated explainers",
    ],
    weaknesses: [
      "Not ideal for photorealistic content",
      "Smaller tool compared to Runway/Kling",
      "Limited live-action capabilities",
      "Niche use cases",
    ],
    bestFor: "Character animation, animated explainers, branded content, and stylized videos",
    features: ["Character animation", "Talking characters", "Multi-model", "Brand tools", "Custom characters", "Audio sync"],
  },
  {
    name: "Synthesia",
    slug: "synthesia",
    description: "Enterprise AI video platform for creating professional training videos, presentations, and corporate content with AI avatars.",
    pricing: "Paid",
    pricingDetails: "Starter $22/mo (10 min), Creator $67/mo (30 min), Enterprise custom",
    strengths: [
      "140+ AI avatars",
      "120+ languages and accents",
      "Enterprise security and compliance",
      "Custom avatar creation",
      "Video templates library",
      "PowerPoint-like editor",
    ],
    weaknesses: [
      "No free tier",
      "Limited creative/artistic options",
      "Focused on corporate use cases",
      "Avatar realism varies by model",
    ],
    bestFor: "Corporate training, e-learning, HR videos, product demos, and enterprise communications",
    features: ["140+ avatars", "120+ languages", "Custom avatars", "Video templates", "Screen recording", "Collaboration"],
  },
  {
    name: "LTX Studio",
    slug: "ltx-studio",
    description: "AI video production platform combining storyboarding, shot planning, and video generation for filmmakers.",
    pricing: "Freemium",
    pricingDetails: "Free desktop app, LTX Studio plans competitive for agencies (exact pricing varies by volume)",
    strengths: [
      "End-to-end production workflow",
      "Storyboard integration",
      "Shot consistency across scenes",
      "Filmmaker-focused interface",
      "Character continuity",
      "Project management built-in",
    ],
    weaknesses: [
      "Steeper learning curve",
      "Requires desktop app",
      "More complex than simple generators",
      "Better suited for longer projects",
    ],
    bestFor: "Filmmakers, agencies, and multi-shot video projects requiring narrative consistency",
    features: ["Storyboarding", "Shot planning", "Character consistency", "Multi-scene projects", "Desktop app", "Production tools"],
  },
  {
    name: "Haiper AI",
    slug: "haiper",
    description: "Open AI video platform by former DeepMind researchers, emphasizing accessibility and creative experimentation.",
    pricing: "Free",
    pricingDetails: "Completely free during beta. Future pricing model TBA.",
    strengths: [
      "Completely free",
      "Built by DeepMind researchers",
      "Regular model improvements",
      "Active community",
      "Good for experimentation",
      "No credit limits currently",
    ],
    weaknesses: [
      "Lower quality than paid alternatives",
      "Inconsistent results",
      "Future pricing uncertain",
      "Fewer features than competitors",
    ],
    bestFor: "Experimentation, hobbyists, learning AI video, and budget-conscious creators",
    features: ["Text-to-video", "Image-to-video", "Free unlimited", "Community features", "Experimentation", "Beta access"],
  },
  {
    name: "DeepBrain AI",
    slug: "deepbrain",
    description: "AI video generator focused on realistic AI humans, multi-language support, and enterprise video production.",
    pricing: "Paid",
    pricingDetails: "Starter $29/mo (15 min), Pro $89/mo (90 min), Enterprise custom",
    strengths: [
      "Highly realistic AI humans",
      "80+ languages",
      "Text-to-speech in 100+ voices",
      "Video templates for business",
      "Custom avatar creation",
      "API integration",
    ],
    weaknesses: [
      "No free tier",
      "Focused on talking head content",
      "Less creative than Runway/Pika",
      "Limited artistic capabilities",
    ],
    bestFor: "News-style videos, corporate announcements, product updates, and international content",
    features: ["Realistic AI humans", "80+ languages", "100+ voices", "Video templates", "Custom avatars", "API"],
  },
  {
    name: "Fliki",
    slug: "fliki",
    description: "Text-to-video platform that converts blog posts, scripts, and tweets into videos with AI voices and stock footage.",
    pricing: "Freemium",
    pricingDetails: "Free tier (5 min/mo), Standard $28/mo (180 min), Premium $88/mo (600 min)",
    strengths: [
      "Blog post to video conversion",
      "2,000+ AI voices",
      "75+ languages",
      "Stock media library",
      "Simple, fast workflow",
      "Good for content repurposing",
    ],
    weaknesses: [
      "Uses stock footage (not generative AI video)",
      "Less creative control",
      "Template-based approach",
      "Not true AI video generation like Sora",
    ],
    bestFor: "Content repurposing, blog-to-video, social media clips, and quick video creation",
    features: ["Blog to video", "2,000+ voices", "75+ languages", "Stock media", "Text-to-speech", "Auto-captions"],
  },
];

export default function SoraAlternativesPage() {
  // Find Sora in tools data if available
  const soraTool = tools.find(
    (t) => t.name.toLowerCase() === "sora" || t.slug === "sora"
  );

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      {/* Hero Section */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          12 Best Sora Alternatives in 2026
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          OpenAI's Sora set a new standard for AI video generation, but it's not the only option.
          Discover the best Sora alternatives for text-to-video, image-to-video, and professional
          AI video production.
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-gray-900 border border-gray-800 rounded-xl">
          <div>
            <div className="text-2xl font-bold text-blue-400">12</div>
            <div className="text-sm text-gray-400">Alternatives</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-400">7</div>
            <div className="text-sm text-gray-400">Free Options</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-400">$10-499</div>
            <div className="text-sm text-gray-400">Monthly Pricing</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-400">2026</div>
            <div className="text-sm text-gray-400">Updated</div>
          </div>
        </div>
      </header>

      {/* Why Look for Alternatives */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Why Consider Sora Alternatives?</h2>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400 mb-4">
            While Sora impressed with its February 2024 demos and 2025 limited release, several
            factors make alternatives worth considering:
          </p>
          <ul className="text-gray-400 space-y-2 ml-6">
            <li>
              <strong>Limited Access:</strong> Sora remains in limited preview with waitlist access,
              while alternatives like Runway, Kling, and Pika are publicly available today.
            </li>
            <li>
              <strong>Pricing Uncertainty:</strong> Sora's commercial pricing isn't finalized.
              Competitors offer transparent, often more affordable pricing.
            </li>
            <li>
              <strong>Specialized Features:</strong> Tools like HeyGen (AI avatars), Runway (motion
              control), and Veo (native audio) offer features Sora doesn't provide.
            </li>
            <li>
              <strong>Volume Needs:</strong> For high-volume production, Kling and Pika offer better
              value per video than expected Sora pricing.
            </li>
            <li>
              <strong>Workflow Integration:</strong> Established platforms integrate with existing
              video workflows, exports, and APIs.
            </li>
          </ul>
        </div>
      </section>

      {/* Alternatives Grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Compare Sora Alternatives</h2>
        <div className="space-y-8">
          {videoGenerators.map((generator, index) => {
            // Try to find tool data
            const toolData = tools.find(
              (t) =>
                t.slug === generator.slug ||
                t.name.toLowerCase().includes(generator.name.toLowerCase())
            );

            return (
              <article
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{generator.name}</h3>
                    <p className="text-gray-400">{generator.description}</p>
                  </div>
                  {toolData && (
                    <Link
                      href={`/tool/${toolData.slug}`}
                      className="text-blue-400 hover:text-blue-300 text-sm whitespace-nowrap ml-4"
                    >
                      View Details →
                    </Link>
                  )}
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="inline-block bg-gray-800 px-4 py-2 rounded-lg">
                    <span className="text-sm text-gray-400">Pricing: </span>
                    <span className="font-semibold">{generator.pricing}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{generator.pricingDetails}</p>
                </div>

                {/* Best For */}
                <div className="mb-6 p-4 bg-blue-900/20 border border-blue-800/30 rounded-lg">
                  <h4 className="font-semibold text-blue-300 mb-2">✨ Best For</h4>
                  <p className="text-gray-300 text-sm">{generator.bestFor}</p>
                </div>

                {/* Strengths */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-300 mb-3">✅ Strengths</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {generator.strengths.map((strength, i) => (
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
                    {generator.weaknesses.map((weakness, i) => (
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
                    {generator.features.map((feature, i) => (
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
        <h2 className="text-3xl font-bold mb-6">Which Sora Alternative Should You Choose?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Professional Filmmaking</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>Runway Gen-4.5:</strong> Best overall quality and camera control
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>LTX Studio:</strong> Multi-shot projects with storyboarding
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>Luma Dream Machine:</strong> Photorealistic scenes
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Social Media Content</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>Pika:</strong> Fast iterations with creative effects
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>Kling AI:</strong> High volume at competitive pricing
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>HeyGen:</strong> TikTok/Instagram talking videos
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Marketing & Corporate</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>HeyGen:</strong> AI presenters and product demos
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>Synthesia:</strong> Enterprise training videos
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>DeepBrain AI:</strong> Multi-language announcements
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Budget-Conscious Creators</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>Haiper AI:</strong> Completely free (beta)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>Pika:</strong> $10/mo for 700 credits
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>Kling AI:</strong> Best value for volume
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Character Animation</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>Hedra:</strong> Custom character creation
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>HeyGen:</strong> Realistic talking avatars
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>Synthesia:</strong> 140+ pre-made avatars
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Content Repurposing</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>Fliki:</strong> Blog posts to video
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>HeyGen:</strong> Script to presenter video
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>DeepBrain AI:</strong> Text to news-style video
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Quick Comparison Table</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-gray-900 border border-gray-800 rounded-xl">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="px-4 py-3 text-left font-semibold">Platform</th>
                <th className="px-4 py-3 text-left font-semibold">Starting Price</th>
                <th className="px-4 py-3 text-left font-semibold">Free Tier</th>
                <th className="px-4 py-3 text-left font-semibold">Best Feature</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="px-4 py-3 font-medium">Runway Gen-4.5</td>
                <td className="px-4 py-3 text-gray-400">$12/mo</td>
                <td className="px-4 py-3 text-green-400">✓ (125 credits)</td>
                <td className="px-4 py-3 text-gray-400">Camera controls</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="px-4 py-3 font-medium">Kling AI 3.0</td>
                <td className="px-4 py-3 text-gray-400">$15/mo</td>
                <td className="px-4 py-3 text-green-400">✓ (66 daily credits)</td>
                <td className="px-4 py-3 text-gray-400">Motion quality</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="px-4 py-3 font-medium">Pika</td>
                <td className="px-4 py-3 text-gray-400">$10/mo</td>
                <td className="px-4 py-3 text-green-400">✓ (150 credits/mo)</td>
                <td className="px-4 py-3 text-gray-400">Creative effects</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="px-4 py-3 font-medium">HeyGen</td>
                <td className="px-4 py-3 text-gray-400">$29/mo</td>
                <td className="px-4 py-3 text-green-400">✓ (1 min)</td>
                <td className="px-4 py-3 text-gray-400">AI avatars</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="px-4 py-3 font-medium">Luma Dream Machine</td>
                <td className="px-4 py-3 text-gray-400">$29.99/mo</td>
                <td className="px-4 py-3 text-green-400">✓ (30 gen/mo)</td>
                <td className="px-4 py-3 text-gray-400">Photorealism</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="px-4 py-3 font-medium">Google Veo</td>
                <td className="px-4 py-3 text-gray-400">TBA</td>
                <td className="px-4 py-3 text-green-400">✓ (limited preview)</td>
                <td className="px-4 py-3 text-gray-400">Native audio</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="px-4 py-3 font-medium">Haiper AI</td>
                <td className="px-4 py-3 text-gray-400">Free</td>
                <td className="px-4 py-3 text-green-400">✓ (unlimited beta)</td>
                <td className="px-4 py-3 text-gray-400">Free unlimited</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Synthesia</td>
                <td className="px-4 py-3 text-gray-400">$22/mo</td>
                <td className="px-4 py-3 text-red-400">✗</td>
                <td className="px-4 py-3 text-gray-400">140+ avatars</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">
              Is there a completely free Sora alternative?
            </h3>
            <p className="text-gray-400">
              Yes! Haiper AI is completely free during its beta phase with unlimited generations.
              Google Veo is also free but requires waitlist access. Additionally, Runway, Kling,
              Pika, and Luma all offer generous free tiers to get started.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">
              Which Sora alternative has the best video quality?
            </h3>
            <p className="text-gray-400">
              Runway Gen-4.5 is widely considered to have the best overall quality and consistency,
              especially for professional filmmaking. Luma Dream Machine excels at photorealism,
              while Kling AI offers exceptional motion quality and physics at a lower price point.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Can I use Sora alternatives commercially?</h3>
            <p className="text-gray-400">
              Yes, most Sora alternatives (Runway, Kling, Pika, HeyGen, Luma, Synthesia) allow
              commercial use on paid plans. Always check each platform's terms of service. Free
              tiers often have restrictions on commercial usage.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">
              Which alternative is best for social media content?
            </h3>
            <p className="text-gray-400">
              Pika is ideal for quick social media content with its fast generation times and
              creative effects. Kling AI is best for high-volume creators needing lots of clips.
              HeyGen excels at TikTok/Instagram talking head videos with AI avatars.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">
              How much does AI video generation cost compared to Sora?
            </h3>
            <p className="text-gray-400">
              Sora's pricing isn't finalized, but alternatives range from free (Haiper) to
              $10-70/month for individuals and $100-500/month for agencies. Most offer
              credit-based systems where each video costs $0.10-2.00 depending on length and
              settings. This is significantly cheaper than traditional video production.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">
              Can I create longer videos with Sora alternatives?
            </h3>
            <p className="text-gray-400">
              Most alternatives generate 4-10 second clips initially. Runway, Luma, and Kling offer
              "extend" features to create longer clips by extending the timeline. For full-length
              videos, you'll typically generate multiple clips and edit them together, or use
              HeyGen/Synthesia which support longer talking-head formats.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">
              Do Sora alternatives support image-to-video?
            </h3>
            <p className="text-gray-400">
              Yes! Runway, Kling, Pika, Luma, and most other alternatives support image-to-video
              where you upload an image and the AI animates it. This is great for bringing still
              images, artwork, or product photos to life.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">
              Which platform is best for AI avatars and talking videos?
            </h3>
            <p className="text-gray-400">
              HeyGen leads in AI avatars with instant creation from photos, 90+ languages, and
              natural lip-sync. Synthesia offers 140+ pre-made professional avatars with enterprise
              features. DeepBrain AI provides highly realistic AI humans for news-style content.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Find More AI Video Tools</h2>
        <p className="text-gray-400 mb-6">
          Explore our directory of 500+ AI tools including video generators, editors, and production
          platforms.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/category/ai-video-generator"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Browse AI Video Tools
          </Link>
          <Link
            href="/submit"
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Submit Your Tool
          </Link>
        </div>
      </section>
    </div>
  );
}
