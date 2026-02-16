import { tools } from "@/data/tools";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Video Generators 2026: Top 10 Text-to-Video & AI Avatar Tools",
  description:
    "Compare the best AI video generators for 2026 including Runway, Pika, Synthesia, HeyGen, Sora, and more. Find the perfect tool for text-to-video, AI avatars, and video editing.",
  keywords: [
    "AI video generator",
    "text-to-video AI",
    "AI avatar video",
    "best AI video tools",
    "Runway AI",
    "Synthesia",
    "HeyGen",
    "Sora",
  ],
  openGraph: {
    title: "Best AI Video Generators 2026: Top 10 Text-to-Video & AI Avatar Tools",
    description:
      "Compare top AI video generators for text-to-video creation, AI avatars, and editing. Expert reviews, pricing, and feature comparisons.",
    url: "https://aisotools.com/best-ai-video-generators",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/best-ai-video-generators",
  },
};

interface VideoToolComparison {
  name: string;
  slug: string;
  description: string;
  category: string;
  pricing: string;
  pricingDetails: string;
  strengths: string[];
  weaknesses: string[];
  bestFor: string;
  features: string[];
  rating: number;
}

const videoTools: VideoToolComparison[] = [
  {
    name: "Runway",
    slug: "runway",
    description: "Professional AI video generation and editing platform with Gen-2 model for filmmakers and creators.",
    category: "Text-to-Video",
    pricing: "Freemium",
    pricingDetails: "Free tier 125 credits, Standard $12/mo, Pro $28/mo, Unlimited $76/mo, Enterprise custom",
    strengths: [
      "Industry-leading Gen-2 model",
      "30+ AI magic tools",
      "Professional-grade output quality",
      "Motion brush and camera controls",
      "Inpainting and object removal",
      "Used by professional filmmakers",
    ],
    weaknesses: [
      "Steeper learning curve",
      "Credit-based system can get expensive",
      "Slower generation than competitors",
    ],
    bestFor: "Professional video creators, filmmakers, high-quality commercial work, creative control",
    features: ["Gen-2 video", "Motion brush", "Inpainting", "Green screen", "Frame interpolation", "Image-to-video"],
    rating: 4.6,
  },
  {
    name: "Pika",
    slug: "pika",
    description: "User-friendly AI video generator focused on ease of use with intuitive controls and style transformations.",
    category: "Text-to-Video",
    pricing: "Freemium",
    pricingDetails: "Free tier 30 credits/day, Standard $10/mo, Unlimited $35/mo, Pro $70/mo",
    strengths: [
      "Most user-friendly interface",
      "Fast generation speeds",
      "Intuitive camera controls",
      "Style transformations",
      "Lipsyncing feature",
      "Great for beginners",
    ],
    weaknesses: [
      "Less control than Runway",
      "Output quality varies",
      "Limited advanced features",
    ],
    bestFor: "Beginners, social media content, quick video creation, marketers needing fast results",
    features: ["Text-to-video", "Image-to-video", "Modify region", "Extend video", "Camera controls", "Lipsyncing"],
    rating: 4.3,
  },
  {
    name: "Synthesia",
    slug: "synthesia",
    description: "Enterprise AI video platform for creating professional videos with AI avatars and voiceovers.",
    category: "Avatar",
    pricing: "Paid",
    pricingDetails: "Starter $29/mo, Creator $89/mo, Enterprise custom (annual billing required)",
    strengths: [
      "140+ diverse AI avatars",
      "120+ languages and accents",
      "Professional presentation quality",
      "Custom brand templates",
      "Team collaboration features",
      "Trusted by enterprises",
    ],
    weaknesses: [
      "No free tier (only demo)",
      "Annual commitment required",
      "Expensive for individuals",
      "Limited creative flexibility",
    ],
    bestFor: "Enterprise training videos, corporate presentations, e-learning, multilingual content",
    features: ["AI avatars", "Voice cloning", "120+ languages", "Custom templates", "Brand kit", "Team workspace"],
    rating: 4.4,
  },
  {
    name: "HeyGen",
    slug: "heygen",
    description: "AI video platform for spokesperson and explainer videos with realistic avatars and video translation.",
    category: "Avatar",
    pricing: "Freemium",
    pricingDetails: "Free trial, Creator $29/mo, Business $89/mo, Enterprise custom",
    strengths: [
      "Realistic AI avatars",
      "Video translation feature",
      "Voice cloning (5-minute sample)",
      "One-click background removal",
      "Affordable pricing",
      "No technical skills required",
    ],
    weaknesses: [
      "Avatar movements can look stiff",
      "Limited customization",
      "Watermark on free tier",
    ],
    bestFor: "Marketing videos, explainers, product demos, social media, video translation",
    features: ["AI avatars", "Voice cloning", "Video translation", "Background removal", "Templates", "API access"],
    rating: 4.3,
  },
  {
    name: "Sora (OpenAI)",
    slug: "sora",
    description: "OpenAI's cutting-edge text-to-video model capable of generating high-quality, coherent videos up to 1 minute.",
    category: "Text-to-Video",
    pricing: "Limited Access",
    pricingDetails: "Currently in limited preview, pricing TBA (expected ChatGPT Plus integration)",
    strengths: [
      "State-of-the-art quality",
      "Coherent long-form videos",
      "Physics understanding",
      "Complex scene generation",
      "Character consistency",
      "From OpenAI (ChatGPT creators)",
    ],
    weaknesses: [
      "Not publicly available yet",
      "Pricing unknown",
      "Will likely be expensive",
      "May have usage restrictions",
    ],
    bestFor: "High-end video production (when available), complex scenes, storytelling",
    features: ["Text-to-video", "Long-form generation", "Physics simulation", "Character consistency", "Scene complexity"],
    rating: 4.7,
  },
  {
    name: "Kling AI",
    slug: "kling",
    description: "Chinese AI video model by Kuaishou offering impressive quality at competitive prices.",
    category: "Text-to-Video",
    pricing: "Freemium",
    pricingDetails: "Free tier 66 credits/day, Pro $13/mo 660 credits, Premier $84/mo",
    strengths: [
      "Excellent quality-to-price ratio",
      "Fast generation speeds",
      "Good physics simulation",
      "Competitive pricing",
      "Image-to-video capabilities",
      "Improving rapidly",
    ],
    weaknesses: [
      "Chinese company (data considerations)",
      "Less brand recognition",
      "Occasional censorship concerns",
      "Support primarily in Chinese",
    ],
    bestFor: "Budget-conscious creators, high-volume content production, text-to-video experiments",
    features: ["Text-to-video", "Image-to-video", "Camera movement", "Motion control", "High resolution", "Fast generation"],
    rating: 4.2,
  },
  {
    name: "Luma AI (Dream Machine)",
    slug: "luma-ai",
    description: "Fast and accessible AI video generator known for quick generation times and consistent quality.",
    category: "Text-to-Video",
    pricing: "Freemium",
    pricingDetails: "Free tier 30 generations/mo, Standard $30/mo, Pro $120/mo",
    strengths: [
      "Very fast generation (2 minutes)",
      "Consistent quality",
      "Simple interface",
      "Good motion coherence",
      "No watermarks on paid plans",
      "Reliable outputs",
    ],
    weaknesses: [
      "Less creative control",
      "Simpler features than Runway",
      "Limited editing capabilities",
    ],
    bestFor: "Social media content, quick video needs, consistent results, time-sensitive projects",
    features: ["Text-to-video", "Image-to-video", "Fast generation", "Extend video", "Keyframe control", "Camera movement"],
    rating: 4.1,
  },
  {
    name: "Descript",
    slug: "descript",
    description: "All-in-one video and podcast editing with AI avatars, transcription, and screen recording.",
    category: "Editing",
    pricing: "Freemium",
    pricingDetails: "Free tier 1 hour transcription, Creator $24/mo, Pro $40/mo, Enterprise custom",
    strengths: [
      "Edit video by editing text",
      "Automatic transcription",
      "AI eye contact correction",
      "Studio Sound enhancement",
      "Screen recording built-in",
      "Overdub voice cloning",
    ],
    weaknesses: [
      "Not purely AI generation",
      "Requires video editing knowledge",
      "Performance can be slow",
    ],
    bestFor: "Podcasters, video editors, screen recordings, interview editing, content repurposing",
    features: ["Text-based editing", "Transcription", "AI avatars", "Overdub", "Studio Sound", "Screen recorder"],
    rating: 4.5,
  },
  {
    name: "D-ID",
    slug: "d-id",
    description: "AI platform specializing in creating talking head videos from still images with natural expressions.",
    category: "Avatar",
    pricing: "Freemium",
    pricingDetails: "Free trial 20 credits, Lite $5.9/mo, Pro $29/mo, Advanced $196/mo, Enterprise custom",
    strengths: [
      "Animate any photo",
      "Natural facial expressions",
      "Multiple languages",
      "API access at all tiers",
      "Fast generation",
      "Affordable entry point",
    ],
    weaknesses: [
      "Limited to talking heads",
      "Lower quality than Synthesia",
      "Credit system confusing",
    ],
    bestFor: "Personalized messages, customer support videos, quick avatar videos, API integration",
    features: ["Photo animation", "AI avatars", "Voice synthesis", "Live portrait", "API access", "Multi-language"],
    rating: 4.0,
  },
  {
    name: "Invideo AI",
    slug: "invideo-ai",
    description: "AI video creation platform that generates complete videos from text prompts with stock footage.",
    category: "Editing",
    pricing: "Freemium",
    pricingDetails: "Free tier 10 min/week, Plus $20/mo, Max $60/mo",
    strengths: [
      "Complete video generation from text",
      "Automatic stock footage selection",
      "Voiceover generation",
      "Music and transitions",
      "Templates for different formats",
      "Quick production",
    ],
    weaknesses: [
      "Generic stock footage look",
      "Limited creative control",
      "Not true AI generation",
      "Watermark on free tier",
    ],
    bestFor: "Social media content, marketing videos, YouTube content, quick video assembly",
    features: ["Text-to-video", "Stock footage", "Voiceover", "Music library", "Templates", "Brand presets"],
    rating: 3.9,
  },
];

export default function BestAIVideoGeneratorsPage() {
  const toolsBySlug = new Map(tools.map((t) => [t.slug, t]));

  // Group by category
  const byCategory = videoTools.reduce((acc, tool) => {
    if (!acc[tool.category]) acc[tool.category] = [];
    acc[tool.category].push(tool);
    return acc;
  }, {} as Record<string, VideoToolComparison[]>);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-white">
          Home
        </Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Best AI Video Generators</span>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Best AI Video Generators 2026: Top 10 Text-to-Video & AI Avatar Tools
        </h1>
        <p className="text-xl text-gray-400 max-w-4xl">
          Compare the best AI video generators for 2026. Whether you need text-to-video generation,
          AI avatar videos, or intelligent editing tools, find the perfect solution for your video
          creation needs.
        </p>
        <div className="flex flex-wrap gap-2 mt-6">
          <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
            Updated February 2026
          </span>
          <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
            10 Tools Reviewed
          </span>
        </div>
      </header>

      {/* Quick Navigation by Category */}
      <section className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-12">
        <h2 className="text-lg font-semibold mb-4">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {Object.keys(byCategory).map((cat) => (
            <a
              key={cat}
              href={`#${cat.toLowerCase().replace(/\s+/g, "-")}`}
              className="bg-gray-800 hover:bg-gray-700 rounded-lg p-3 transition text-center"
            >
              <div className="font-medium text-sm">{cat}</div>
              <div className="text-xs text-gray-500 mt-1">
                {byCategory[cat].length} {byCategory[cat].length === 1 ? "tool" : "tools"}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Introduction */}
      <section className="prose prose-invert max-w-none mb-16">
        <h2 className="text-3xl font-bold mb-4">The AI Video Revolution</h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-4">
          AI video generation has exploded in 2025-2026. What once required expensive equipment,
          technical expertise, and hours of work can now be accomplished with a text prompt in
          minutes. From Runway's professional-grade Gen-2 model to Pika's user-friendly interface,
          and from Synthesia's enterprise avatar videos to the upcoming Sora from OpenAI, AI video
          tools are transforming content creation.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed mb-4">
          The landscape divides into three main categories: <strong>Text-to-Video generators</strong> like Runway and Pika that create footage
          from prompts, <strong>Avatar platforms</strong> like Synthesia and HeyGen for
          spokesperson videos, and <strong>Editing tools</strong> like Descript that use AI to
          streamline the editing workflow.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed">
          This guide compares 10 top AI video generators across features, pricing, quality, and
          ideal use cases to help you choose the right tool for your video projects.
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
                <th className="px-4 py-3 text-left text-sm font-semibold">Category</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Pricing</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Rating</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {videoTools.map((tool) => (
                <tr key={tool.slug} className="hover:bg-gray-800/50 transition">
                  <td className="px-4 py-3">
                    <a
                      href={`#${tool.slug}`}
                      className="font-medium text-blue-400 hover:text-blue-300"
                    >
                      {tool.name}
                    </a>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-400">{tool.category}</td>
                  <td className="px-4 py-3 text-sm text-gray-400">{tool.pricing}</td>
                  <td className="px-4 py-3 text-sm">
                    <span className="text-yellow-400">★</span> {tool.rating}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-400">
                    {tool.bestFor.split(",")[0]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Tools by Category */}
      {Object.entries(byCategory).map(([category, categoryTools]) => (
        <section
          key={category}
          id={category.toLowerCase().replace(/\s+/g, "-")}
          className="mb-16 scroll-mt-24"
        >
          <h2 className="text-3xl font-bold mb-8">
            Best AI Video Tools for {category}
          </h2>
          <div className="space-y-12">
            {categoryTools.map((tool) => {
              const toolData = toolsBySlug.get(tool.slug);
              return (
                <article
                  key={tool.slug}
                  id={tool.slug}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-8 scroll-mt-24"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold">{tool.name}</h3>
                        <span className="bg-purple-600/20 text-purple-400 px-2 py-1 rounded text-xs font-medium">
                          {tool.category}
                        </span>
                      </div>
                      <p className="text-gray-400">{tool.description}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="text-yellow-400 text-sm">
                          {"★".repeat(Math.floor(tool.rating))}
                          {"☆".repeat(5 - Math.floor(tool.rating))}
                        </div>
                        <span className="text-gray-500 text-sm">{tool.rating}/5</span>
                      </div>
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
      ))}

      {/* Use Case Guide */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Which AI Video Generator Should You Choose?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Professional Filmmaking</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>Runway:</strong> Industry-leading Gen-2 model, professional control
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>Sora:</strong> Cutting-edge quality when available (waitlist)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>Descript:</strong> Professional editing workflow with AI features
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
                  <strong>Pika:</strong> Fast generation, user-friendly, great for quick content
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>Luma AI:</strong> Consistent quality, reliable, fast turnaround
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>Invideo AI:</strong> Complete videos with stock footage quickly
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Corporate & Training Videos</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>Synthesia:</strong> Enterprise-grade avatars, professional quality
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>HeyGen:</strong> Affordable spokesperson videos with translation
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>D-ID:</strong> Quick personalized messages and avatar videos
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
                  <strong>Kling AI:</strong> Excellent quality at $13/mo, best value
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>Pika:</strong> Generous free tier, affordable paid plans
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>D-ID:</strong> Entry plan at $5.9/mo for avatar videos
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Marketing & Ads</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>HeyGen:</strong> Spokesperson videos at scale, video translation
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>Invideo AI:</strong> Quick marketing videos with stock footage
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>Pika:</strong> Fast creative content for ad campaigns
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">For Podcasters & Editors</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>Descript:</strong> Best all-in-one editing with transcription
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>
                  <strong>Runway:</strong> Advanced editing tools with AI magic features
                </span>
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
            <h3 className="text-lg font-semibold mb-2">
              What is the best AI video generator overall?
            </h3>
            <p className="text-gray-400">
              Runway (4.6/5) leads for professional use with its Gen-2 model, while Pika (4.3/5)
              is best for beginners and quick creation. Sora (4.7/5) will likely become the leader
              when publicly released. For avatars, Synthesia (4.4/5) and HeyGen (4.3/5) are top
              choices.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">
              Are there free AI video generators?
            </h3>
            <p className="text-gray-400">
              Yes! Runway, Pika, Kling AI, Luma AI, and HeyGen all offer free tiers with limited
              credits. Descript has a free plan with 1 hour of transcription per month. These free
              tiers usually include watermarks and credit limits but are great for testing.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">
              How much does AI video generation cost?
            </h3>
            <p className="text-gray-400">
              Pricing varies widely: Budget options like Kling ($13/mo) and Pika ($10/mo) offer
              great value. Mid-range tools like Runway ($28/mo Pro) and Luma ($30/mo) provide more
              credits. Enterprise platforms like Synthesia ($89/mo Creator) target businesses.
              Credit-based systems mean costs depend on usage.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">
              What's the difference between text-to-video and avatar tools?
            </h3>
            <p className="text-gray-400">
              <strong>Text-to-video</strong> tools (Runway, Pika, Sora) generate video footage
              from text prompts — scenes, actions, environments. <strong>Avatar tools</strong>{" "}
              (Synthesia, HeyGen, D-ID) create spokesperson-style videos with AI presenters
              delivering your script. They serve different purposes: one creates creative footage,
              the other creates presenter videos.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">
              Can AI video generators replace human videographers?
            </h3>
            <p className="text-gray-400">
              Not yet, but they're getting close for certain use cases. AI excels at: stock
              footage-style clips, avatar presentations, social media content, and concept
              visualization. Human videographers are still essential for: complex productions, real
              human stories, nuanced direction, and high-end commercial work. Think of AI as a
              powerful tool in the videographer's toolkit, not a replacement.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">
              What about OpenAI Sora? When can I use it?
            </h3>
            <p className="text-gray-400">
              Sora is currently in limited preview with select creators and red team testers.
              Public release timing hasn't been announced, but it's expected to integrate with
              ChatGPT Plus when available. Given its cutting-edge capabilities, expect pricing
              similar to other OpenAI premium features. Follow{" "}
              <a
                href="https://openai.com/sora"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300"
              >
                OpenAI's Sora page
              </a>{" "}
              for updates.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Explainer */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">How AI Video Generation Works</h2>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
          <div className="space-y-6 text-gray-400">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Diffusion Models (Text-to-Video)
              </h3>
              <p className="leading-relaxed">
                Tools like Runway, Pika, and Sora use diffusion models similar to image generators
                like Stable Diffusion and DALL-E. They start with random noise and gradually
                refine it frame-by-frame based on your text prompt, creating coherent motion and
                maintaining consistency across frames. The challenge is temporal coherence —
                keeping objects, lighting, and motion consistent over time.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Avatar & Deepfake Technology
              </h3>
              <p className="leading-relaxed">
                Avatar tools like Synthesia, HeyGen, and D-ID use face synthesis and lip-syncing
                models. They can animate a still image or generate a fully synthetic avatar,
                matching lip movements to audio with impressive accuracy. Voice cloning technology
                creates realistic speech from text, and some tools can even translate videos while
                maintaining lip-sync in the target language.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">AI Video Editing</h3>
              <p className="leading-relaxed">
                Tools like Descript use AI for transcription, object removal, eye contact
                correction, and audio enhancement. Runway offers 30+ "magic tools" for inpainting,
                motion tracking, and green screen removal. These aren't generating full videos, but
                using AI to automate tedious editing tasks that traditionally took hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Explore More AI Tools</h2>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Discover hundreds more AI tools for writing, coding, design, and more.
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
