import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sora vs Runway (2026): OpenAI Video vs Runway Gen-4.5 Compared",
  description:
    "In-depth Sora vs Runway comparison. Compare pricing (ChatGPT Plus $20 vs Runway $12/mo), video quality, models (Sora 2 Pro vs Gen-4.5), credit systems, and which AI video generator to choose in 2026.",
  keywords: [
    "Sora vs Runway",
    "Runway vs Sora",
    "Sora or Runway",
    "OpenAI Sora comparison",
    "Runway ML comparison",
    "best AI video generator 2026",
    "Sora 2 vs Runway Gen-4",
    "AI video generator comparison",
    "Sora pricing vs Runway pricing",
    "Sora 2 Pro vs Gen-4.5",
  ],
  openGraph: {
    title: "Sora vs Runway (2026): OpenAI Video vs Runway Gen-4.5 Compared",
    description:
      "Comprehensive comparison of OpenAI Sora 2 and Runway ML. Pricing, video quality, models, credit systems, audio features, and which AI video generator wins for different use cases.",
    url: "https://aisotools.com/sora-vs-runway",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/sora-vs-runway",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Sora better than Runway for AI video?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on your workflow. Sora 2 Pro produces arguably the most photorealistic AI video with exceptional physics simulation, but it requires a $200/month ChatGPT Pro subscription for full quality. Runway offers more models (Gen-4.5, Gen-4, Veo 3, Act-Two), better creative tools (timeline editor, storyboard, lip sync), and more affordable entry at $12/month. Sora wins on raw realism; Runway wins on creative control, tool ecosystem, and value.",
      },
    },
    {
      "@type": "Question",
      name: "How much does Sora cost compared to Runway?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sora is accessed through ChatGPT subscriptions: Plus ($20/month) gives unlimited 480p video, Pro ($200/month) gives 10,000 credits for up to 1080p. Runway starts at $12/month (Standard, 625 credits) and goes to $76/month (Unlimited with Explore Mode). For comparable 1080p quality, Sora Pro costs $200/month while Runway Pro costs $28/month — making Runway roughly 7x cheaper for high-quality video generation.",
      },
    },
    {
      "@type": "Question",
      name: "Can Sora generate longer videos than Runway?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes and no. Sora 2 Pro can generate up to 25 seconds via API (20 seconds via ChatGPT Pro subscription). Runway generates 5-10 second clips natively but offers stitching and extend features. However, Runway's Explore Mode on the Unlimited plan allows unlimited generations for iteration, making it easier to build longer sequences by combining clips. Neither platform generates minutes-long video in a single pass.",
      },
    },
    {
      "@type": "Question",
      name: "Does Sora have audio like Runway?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both platforms now support audio. Sora 2 generates synchronized audio with video. Runway offers more audio tools: Veo 3 generates video with native audio, plus dedicated Text to Speech, Text to SFX (sound effects), Voice Dubbing, Speech to Speech, and Lip Sync features. Runway's audio ecosystem is significantly more mature and versatile than Sora's current audio capabilities.",
      },
    },
    {
      "@type": "Question",
      name: "Which is better for beginners, Sora or Runway?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sora is simpler for absolute beginners — type a prompt, get a video. But Runway is better for learning AI video creation because it offers a gentler pricing curve ($12/month vs $20/month minimum for Sora), a full video editor, storyboard tools, and multiple models to experiment with. Runway also has a free tier with 125 credits, while Sora requires a ChatGPT subscription.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use Sora and Runway together?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, and many professional creators do. A popular workflow: use Sora 2 Pro for hero shots requiring maximum realism (establishing shots, product reveals, cinematic moments), then bring clips into Runway for editing, audio dubbing, Act-Two character animation, and post-processing. This Power Combo approach costs $228-295/month but leverages each platform's strengths.",
      },
    },
    {
      "@type": "Question",
      name: "Which AI video generator has better image-to-video?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Runway has the edge for image-to-video workflows. It offers dedicated image-to-video across multiple models (Gen-4.5, Gen-4, Act-Two for character animation from a single photo), plus camera controls and motion presets. Sora supports image-to-video but with less granular control. If your workflow starts with concept art, product photos, or character designs, Runway provides more tools to animate them precisely.",
      },
    },
    {
      "@type": "Question",
      name: "Is Sora worth $200/month for ChatGPT Pro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Only if you need Sora 2 Pro specifically. ChatGPT Pro's $200/month gives you 10,000 credits for Sora 2 Pro (up to 1080p, 25s videos) plus unlimited ChatGPT access with o3-pro. If you're already paying for ChatGPT Pro for other reasons, Sora is a powerful bonus. But if video is your only need, Runway Pro at $28/month or Unlimited at $76/month delivers more creative tools per dollar.",
      },
    },
  ],
};

export default function SoraVsRunwayPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gray-950 text-gray-100">
        {/* Breadcrumb */}
        <div className="max-w-4xl mx-auto px-4 pt-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-purple-400">
              Home
            </Link>
            <span>/</span>
            <Link href="/compare" className="hover:text-purple-400">
              Compare
            </Link>
            <span>/</span>
            <span className="text-gray-300">Sora vs Runway</span>
          </nav>
        </div>

        {/* Hero Section */}
        <header className="max-w-4xl mx-auto px-4 py-12">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <span>🎬</span>
              <span>AI Video Generator Comparison — March 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sora vs Runway (2026)
            </h1>
            <p className="text-xl text-gray-400 mb-2">
              OpenAI{"'"}s Physics Engine vs Runway{"'"}s Creative Studio
            </p>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Two fundamentally different approaches to AI video: Sora bets on raw physical realism through OpenAI{"'"}s research infrastructure. Runway bets on creative tooling through a purpose-built video platform. One makes the most realistic clips. The other makes you the most productive.
            </p>
          </div>

          {/* Quick Verdict Box */}
          <div className="mt-10 bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-purple-400 mb-4">
              ⚡ Quick Verdict
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-white">Choose Sora if:</h3>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• You already pay for ChatGPT Plus/Pro</li>
                  <li>• Maximum photorealism matters most</li>
                  <li>• You want the simplest prompt-to-video workflow</li>
                  <li>• You need API access for programmatic generation</li>
                  <li>• Longer single clips (up to 25s) are important</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-white">Choose Runway if:</h3>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• You need a full creative toolkit (editor, storyboard, audio)</li>
                  <li>• Budget matters ($12/mo vs $20/mo minimum)</li>
                  <li>• You want multiple model choices (Gen-4.5, Veo 3, Act-Two)</li>
                  <li>• Character animation and lip sync are important</li>
                  <li>• You iterate heavily (Explore Mode = unlimited relaxed gens)</li>
                </ul>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 pb-20 space-y-16">
          {/* Side-by-Side Feature Table */}
          <section>
            <h2 className="text-2xl font-bold mb-6">
              📊 Sora vs Runway: Side-by-Side Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">
                      Feature
                    </th>
                    <th className="text-left py-3 px-4 text-purple-400 font-medium">
                      OpenAI Sora
                    </th>
                    <th className="text-left py-3 px-4 text-blue-400 font-medium">
                      Runway
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800/50">
                  <tr>
                    <td className="py-3 px-4 text-gray-400">Company</td>
                    <td className="py-3 px-4">OpenAI</td>
                    <td className="py-3 px-4">Runway AI, Inc.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-400">Primary Strength</td>
                    <td className="py-3 px-4">Photorealistic physics simulation</td>
                    <td className="py-3 px-4">Creative video toolkit + multi-model</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-400">Starting Price</td>
                    <td className="py-3 px-4">$20/mo (ChatGPT Plus)</td>
                    <td className="py-3 px-4 text-green-400">$12/mo (Standard annual) ✓</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-400">Full Quality Price</td>
                    <td className="py-3 px-4">$200/mo (ChatGPT Pro)</td>
                    <td className="py-3 px-4 text-green-400">$28/mo (Pro annual) ✓</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-400">Free Tier</td>
                    <td className="py-3 px-4">No (requires ChatGPT sub)</td>
                    <td className="py-3 px-4 text-green-400">Yes — 125 credits ✓</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-400">Flagship Model</td>
                    <td className="py-3 px-4">Sora 2 Pro</td>
                    <td className="py-3 px-4">Gen-4.5</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-400">Available Models</td>
                    <td className="py-3 px-4">Sora 2, Sora 2 Pro</td>
                    <td className="py-3 px-4 text-green-400">Gen-4.5, Gen-4, Gen-4 Turbo, Veo 3, Act-Two, Gen-3 Alpha Turbo ✓</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-400">Max Resolution</td>
                    <td className="py-3 px-4">1080p (Pro) / 480p (Plus)</td>
                    <td className="py-3 px-4">720p native + 4K upscale</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-400">Max Clip Length</td>
                    <td className="py-3 px-4 text-green-400">25s (API) / 20s (Pro sub) ✓</td>
                    <td className="py-3 px-4">5-10s per generation</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-400">Image-to-Video</td>
                    <td className="py-3 px-4">Yes</td>
                    <td className="py-3 px-4 text-green-400">Yes — multi-model + camera controls ✓</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-400">Native Audio</td>
                    <td className="py-3 px-4">Yes (synchronized)</td>
                    <td className="py-3 px-4 text-green-400">Yes — Veo 3 + TTS + SFX + Dubbing + Lip Sync ✓</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-400">Character Animation</td>
                    <td className="py-3 px-4">Prompt-based</td>
                    <td className="py-3 px-4 text-green-400">Act-Two (single photo → animated character) ✓</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-400">Video Editor</td>
                    <td className="py-3 px-4">No (generate only)</td>
                    <td className="py-3 px-4 text-green-400">Yes — timeline, storyboard, stitching ✓</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-400">Unlimited Mode</td>
                    <td className="py-3 px-4">Relaxed (Pro only, after credits)</td>
                    <td className="py-3 px-4 text-green-400">Explore Mode ($76/mo, select models) ✓</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-400">API Access</td>
                    <td className="py-3 px-4">Yes ($0.10-$0.50/sec)</td>
                    <td className="py-3 px-4">Yes (credit-based)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-400">Watermark</td>
                    <td className="py-3 px-4">Plus: Yes / Pro: No</td>
                    <td className="py-3 px-4 text-green-400">Free: Yes / All paid: No ✓</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-400">Concurrent Gens</td>
                    <td className="py-3 px-4">Plus: 2 / Pro: 5</td>
                    <td className="py-3 px-4">Plan-dependent</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-400">Platform</td>
                    <td className="py-3 px-4">Web (sora.chatgpt.com) + API</td>
                    <td className="py-3 px-4">Web (runwayml.com) + API</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-400">Best For</td>
                    <td className="py-3 px-4">Cinematic realism, physics-heavy scenes</td>
                    <td className="py-3 px-4">Creative production, iteration, full pipeline</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Pricing Deep Dive */}
          <section>
            <h2 className="text-2xl font-bold mb-4">
              💰 Pricing Deep Dive: The $172/Month Gap
            </h2>
            <p className="text-gray-400 mb-6">
              The pricing structures reveal fundamentally different business models. Sora is bundled into OpenAI{"'"}s ChatGPT ecosystem — you{"'"}re paying for an AI platform that includes video. Runway is a dedicated video platform — every dollar goes toward video creation tools.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Sora Pricing */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-purple-400 mb-4">
                  OpenAI Sora Pricing
                </h3>
                <div className="space-y-4">
                  <div className="border-b border-gray-800 pb-3">
                    <div className="flex justify-between items-baseline">
                      <span className="font-medium">ChatGPT Plus</span>
                      <span className="text-purple-400">$20/mo</span>
                    </div>
                    <ul className="text-xs text-gray-500 mt-1 space-y-0.5">
                      <li>• Unlimited 480p video (up to 10s)</li>
                      <li>• Watermark on all videos</li>
                      <li>• 2 concurrent generations</li>
                      <li>• Sora 2 (standard model only)</li>
                    </ul>
                  </div>
                  <div className="border-b border-gray-800 pb-3">
                    <div className="flex justify-between items-baseline">
                      <span className="font-medium">ChatGPT Pro</span>
                      <span className="text-purple-400">$200/mo</span>
                    </div>
                    <ul className="text-xs text-gray-500 mt-1 space-y-0.5">
                      <li>• 10,000 credits/month</li>
                      <li>• Up to 1080p resolution</li>
                      <li>• Sora 2 Pro (premium model)</li>
                      <li>• Up to 25s clips (API) / 20s (web)</li>
                      <li>• No watermark</li>
                      <li>• 5 concurrent generations</li>
                      <li>• Unlimited relaxed mode after credits</li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex justify-between items-baseline">
                      <span className="font-medium">API (Pay-per-use)</span>
                      <span className="text-purple-400">$0.10-$0.50/sec</span>
                    </div>
                    <ul className="text-xs text-gray-500 mt-1 space-y-0.5">
                      <li>• Sora 2: $0.10/sec (720p)</li>
                      <li>• Sora 2 Pro: $0.30/sec (720p), $0.50/sec (1080p)</li>
                      <li>• No monthly commitment</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Runway Pricing */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-400 mb-4">
                  Runway Pricing
                </h3>
                <div className="space-y-4">
                  <div className="border-b border-gray-800 pb-3">
                    <div className="flex justify-between items-baseline">
                      <span className="font-medium">Free</span>
                      <span className="text-blue-400">$0</span>
                    </div>
                    <ul className="text-xs text-gray-500 mt-1 space-y-0.5">
                      <li>• 125 credits (one-time)</li>
                      <li>• Watermark on exports</li>
                      <li>• 720p max resolution</li>
                    </ul>
                  </div>
                  <div className="border-b border-gray-800 pb-3">
                    <div className="flex justify-between items-baseline">
                      <span className="font-medium">Standard</span>
                      <span className="text-blue-400">$12/mo (annual)</span>
                    </div>
                    <ul className="text-xs text-gray-500 mt-1 space-y-0.5">
                      <li>• 625 credits/month</li>
                      <li>• No watermark</li>
                      <li>• Gen-4.5, Gen-4, all models</li>
                      <li>• 100GB storage</li>
                    </ul>
                  </div>
                  <div className="border-b border-gray-800 pb-3">
                    <div className="flex justify-between items-baseline">
                      <span className="font-medium">Pro</span>
                      <span className="text-blue-400">$28/mo (annual)</span>
                    </div>
                    <ul className="text-xs text-gray-500 mt-1 space-y-0.5">
                      <li>• 2,250 credits/month</li>
                      <li>• Custom Voices</li>
                      <li>• 500GB storage</li>
                      <li>• Up to 10 editors</li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex justify-between items-baseline">
                      <span className="font-medium">Unlimited</span>
                      <span className="text-blue-400">$76/mo (annual)</span>
                    </div>
                    <ul className="text-xs text-gray-500 mt-1 space-y-0.5">
                      <li>• 2,250 credits + Explore Mode</li>
                      <li>• Unlimited relaxed-rate generations</li>
                      <li>• Gen-4.5, Gen-4, Aleph, Act-Two</li>
                      <li>• All Pro features</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Cost per video comparison */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">
                Real Cost Per Video (10s clip)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="text-left py-2 px-3 text-gray-400 font-medium">Scenario</th>
                      <th className="text-left py-2 px-3 text-purple-400 font-medium">Sora Cost</th>
                      <th className="text-left py-2 px-3 text-blue-400 font-medium">Runway Cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800/50">
                    <tr>
                      <td className="py-2 px-3 text-gray-400">480p, 10s clip</td>
                      <td className="py-2 px-3">~$0.40 (Plus, unlimited)</td>
                      <td className="py-2 px-3 text-green-400">~$0.96 (Standard, 625 credits) ✓ comparable</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 text-gray-400">720p, 10s clip</td>
                      <td className="py-2 px-3">$1.00 (API) or $1.60 (Pro sub)</td>
                      <td className="py-2 px-3 text-green-400">~$1.49 (Pro, Gen-4.5 at 12 cr/s)</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 text-gray-400">1080p, 10s clip</td>
                      <td className="py-2 px-3">$5.00 (API) or $4.00 (Pro sub)</td>
                      <td className="py-2 px-3 text-green-400">~$2.49 (Pro + 4K upscale) ✓</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 text-gray-400">50 clips/month (720p)</td>
                      <td className="py-2 px-3">$200 (Pro sub, most cost-effective)</td>
                      <td className="py-2 px-3 text-green-400">$76 (Unlimited, Explore Mode) ✓</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 text-gray-400">200+ clips/month</td>
                      <td className="py-2 px-3">$200 (Pro relaxed mode)</td>
                      <td className="py-2 px-3 text-green-400">$76 (Unlimited, truly unlimited) ✓</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                * Sora Plus estimates based on unlimited 480p access. Sora Pro based on 10,000 credits allocation. Runway based on published credit rates per second. Actual costs vary by prompt complexity and model version.
              </p>
            </div>
          </section>

          {/* Video Quality Deep Dive */}
          <section>
            <h2 className="text-2xl font-bold mb-4">
              🎥 Video Quality: Physics Engine vs Creative Engine
            </h2>
            <p className="text-gray-400 mb-6">
              This is the fundamental split. Sora is built from OpenAI{"'"}s research into world simulation — it understands physics, gravity, reflections, and material properties at a deeper level. Runway is built from creative production needs — it understands what video creators actually need to ship content.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-purple-400 mb-3">
                  Sora 2 Pro — The Physics Engine
                </h3>
                <div className="space-y-3 text-sm text-gray-400">
                  <p>
                    Sora{"'"}s standout capability is physical realism. Water flows naturally, fabrics drape correctly, light refracts through glass, and objects interact with believable weight and momentum. For scenes that depend on real-world physics — pouring liquids, wind effects, falling objects, reflections on wet surfaces — Sora 2 Pro produces results that competitors struggle to match.
                  </p>
                  <div>
                    <h4 className="text-white text-sm font-medium mb-1">Strengths:</h4>
                    <ul className="space-y-0.5">
                      <li>• Best-in-class physics simulation</li>
                      <li>• Superior material rendering (glass, water, fabric)</li>
                      <li>• Longer single clips (20-25s)</li>
                      <li>• Strong multi-character scene coherence</li>
                      <li>• OpenAI{"'"}s massive training data advantage</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium mb-1">Limitations:</h4>
                    <ul className="space-y-0.5">
                      <li>• Less creative control (prompt-only interface)</li>
                      <li>• No camera movement presets</li>
                      <li>• No storyboard or editing tools</li>
                      <li>• Iteration is expensive at 1080p</li>
                      <li>• 480p watermarked on $20/mo tier</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-400 mb-3">
                  Runway Gen-4.5 — The Creative Studio
                </h3>
                <div className="space-y-3 text-sm text-gray-400">
                  <p>
                    Runway{"'"}s strength is the full creative pipeline. Gen-4.5 produces high-quality video that{"'"}s close to Sora in realism for many use cases, and the surrounding toolset makes it far more productive. Timeline editing, storyboarding, motion presets, lip sync, Act-Two character animation, and Veo 3 with native audio give creators a complete studio.
                  </p>
                  <div>
                    <h4 className="text-white text-sm font-medium mb-1">Strengths:</h4>
                    <ul className="space-y-0.5">
                      <li>• 6+ models for different use cases</li>
                      <li>• Act-Two: photo → animated character</li>
                      <li>• Veo 3: video + native audio together</li>
                      <li>• Full editor with timeline and storyboard</li>
                      <li>• Lip Sync, Voice Dubbing, Text to SFX</li>
                      <li>• Camera controls and motion presets</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium mb-1">Limitations:</h4>
                    <ul className="space-y-0.5">
                      <li>• 5-10s max per generation (stitch for longer)</li>
                      <li>• Physics slightly behind Sora for complex scenes</li>
                      <li>• Credits shared across workspace (team bottleneck)</li>
                      <li>• Veo 3 excluded from Explore Mode unlimited</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality ratings */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Quality by Category</h3>
              <div className="space-y-3 text-sm">
                {[
                  { cat: "Physics/Realism", sora: "★★★★★", runway: "★★★★☆", note: "Sora's core advantage" },
                  { cat: "Character Animation", sora: "★★★★☆", runway: "★★★★★", note: "Act-Two is unmatched" },
                  { cat: "Camera Control", sora: "★★★☆☆", runway: "★★★★★", note: "Runway has presets + manual" },
                  { cat: "Audio Integration", sora: "★★★☆☆", runway: "★★★★★", note: "Runway's audio ecosystem" },
                  { cat: "Prompt Adherence", sora: "★★★★★", runway: "★★★★☆", note: "Sora follows complex prompts" },
                  { cat: "Consistency", sora: "★★★★★", runway: "★★★★☆", note: "Sora excels at multi-shot coherence" },
                  { cat: "Stylization", sora: "★★★★☆", runway: "★★★★★", note: "Runway's model variety" },
                  { cat: "Output Speed", sora: "★★★☆☆", runway: "★★★★☆", note: "Gen-4 Turbo is fastest" },
                ].map((row) => (
                  <div key={row.cat} className="flex items-center gap-4">
                    <span className="w-40 text-gray-400">{row.cat}</span>
                    <span className="w-28 text-purple-400">{row.sora}</span>
                    <span className="w-28 text-blue-400">{row.runway}</span>
                    <span className="text-gray-500 text-xs">{row.note}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Model Ecosystem */}
          <section>
            <h2 className="text-2xl font-bold mb-4">
              🧠 Model Ecosystem: 2 vs 6+
            </h2>
            <p className="text-gray-400 mb-6">
              Sora takes the Apple approach: two carefully tuned models, tightly integrated. Runway takes the marketplace approach: multiple models (including Google{"'"}s Veo 3) optimized for different workflows.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="font-semibold text-purple-400 mb-3">Sora Models</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-white font-medium">Sora 2 (Standard)</div>
                    <p className="text-gray-500">Up to 720p, 4/8/12s durations. Good quality, affordable on Plus ($20/mo).</p>
                  </div>
                  <div>
                    <div className="text-white font-medium">Sora 2 Pro (Premium)</div>
                    <p className="text-gray-500">Up to 1080p, 10/15/25s durations. Maximum realism. Pro only ($200/mo) or API ($0.30-$0.50/sec).</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="font-semibold text-blue-400 mb-3">Runway Models</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-white font-medium">Gen-4.5 (Flagship)</div>
                    <p className="text-gray-500">12 credits/sec. Best quality. World{"'"}s best video model per Runway.</p>
                  </div>
                  <div>
                    <div className="text-white font-medium">Gen-4 (Video + Image)</div>
                    <p className="text-gray-500">12 credits/sec video, 5-8 credits/image. Versatile production model.</p>
                  </div>
                  <div>
                    <div className="text-white font-medium">Gen-4 Turbo</div>
                    <p className="text-gray-500">5 credits/sec. Fast drafts at 60% cost savings.</p>
                  </div>
                  <div>
                    <div className="text-white font-medium">Veo 3 (Google, with audio)</div>
                    <p className="text-gray-500">40 credits/sec. Native synchronized audio generation. Premium.</p>
                  </div>
                  <div>
                    <div className="text-white font-medium">Act-Two (Character)</div>
                    <p className="text-gray-500">5 credits/sec. Single photo → animated character. Lip sync.</p>
                  </div>
                  <div>
                    <div className="text-white font-medium">Gen-3 Alpha Turbo (Legacy)</div>
                    <p className="text-gray-500">Budget option for non-critical output.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-blue-500/5 border border-blue-500/20 rounded-xl p-5">
              <p className="text-sm text-blue-300">
                <strong>Why this matters:</strong> Runway{"'"}s model variety lets you match cost to quality per clip. Use Gen-4 Turbo for $0.48/10s quick drafts, Gen-4.5 for $1.44/10s hero shots, and Veo 3 for $4.80/10s when you need native audio. With Sora, you choose between low-quality cheap (480p Plus) or high-quality expensive (Pro) — there{"'"}s no middle tier for video generation.
              </p>
            </div>
          </section>

          {/* Audio Comparison */}
          <section>
            <h2 className="text-2xl font-bold mb-4">
              🔊 Audio: Sora{"'"}s New Feature vs Runway{"'"}s Full Suite
            </h2>
            <p className="text-gray-400 mb-6">
              Audio is where Runway{"'"}s lead is most pronounced. While Sora recently added synchronized audio generation, Runway has built an entire audio production suite.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left py-2 px-3 text-gray-400 font-medium">Audio Feature</th>
                    <th className="text-left py-2 px-3 text-purple-400 font-medium">Sora</th>
                    <th className="text-left py-2 px-3 text-blue-400 font-medium">Runway</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800/50">
                  <tr>
                    <td className="py-2 px-3 text-gray-400">Synchronized video+audio</td>
                    <td className="py-2 px-3">✅ Sora 2</td>
                    <td className="py-2 px-3">✅ Veo 3</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-gray-400">Text to Speech</td>
                    <td className="py-2 px-3">❌</td>
                    <td className="py-2 px-3 text-green-400">✅ 1 credit/50 chars</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-gray-400">Text to Sound Effects</td>
                    <td className="py-2 px-3">❌</td>
                    <td className="py-2 px-3 text-green-400">✅ 1 credit/6 sec</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-gray-400">Voice Dubbing</td>
                    <td className="py-2 px-3">❌</td>
                    <td className="py-2 px-3 text-green-400">✅ 1 credit/2 sec</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-gray-400">Lip Sync</td>
                    <td className="py-2 px-3">❌</td>
                    <td className="py-2 px-3 text-green-400">✅ Lip Sync feature</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-gray-400">Speech to Speech</td>
                    <td className="py-2 px-3">❌</td>
                    <td className="py-2 px-3 text-green-400">✅</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-gray-400">Custom Voices</td>
                    <td className="py-2 px-3">❌</td>
                    <td className="py-2 px-3 text-green-400">✅ Pro+ plans</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Workflow Comparison */}
          <section>
            <h2 className="text-2xl font-bold mb-4">
              🔧 Creative Workflow: Generator vs Studio
            </h2>
            <p className="text-gray-400 mb-6">
              This is perhaps the most important difference for working creators. Sora is a video generator — you prompt, it generates. Runway is a video studio — you prompt, generate, edit, combine, add audio, and export.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="font-semibold text-purple-400 mb-3">Sora Workflow</h3>
                <ol className="text-sm text-gray-400 space-y-2">
                  <li><span className="text-purple-400 font-mono">1.</span> Write detailed prompt</li>
                  <li><span className="text-purple-400 font-mono">2.</span> Generate video (1-10 min)</li>
                  <li><span className="text-purple-400 font-mono">3.</span> Download clip</li>
                  <li><span className="text-purple-400 font-mono">4.</span> Edit in external tool (Premiere, DaVinci, CapCut)</li>
                  <li><span className="text-purple-400 font-mono">5.</span> Add audio in external tool</li>
                  <li><span className="text-purple-400 font-mono">6.</span> Export from external tool</li>
                </ol>
                <p className="text-xs text-gray-500 mt-3">
                  Sora generates the raw material. You need other tools to make it production-ready.
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="font-semibold text-blue-400 mb-3">Runway Workflow</h3>
                <ol className="text-sm text-gray-400 space-y-2">
                  <li><span className="text-blue-400 font-mono">1.</span> Create storyboard (or prompt directly)</li>
                  <li><span className="text-blue-400 font-mono">2.</span> Generate clips (choose model per scene)</li>
                  <li><span className="text-blue-400 font-mono">3.</span> Edit on timeline (trim, stitch, extend)</li>
                  <li><span className="text-blue-400 font-mono">4.</span> Add audio (TTS, SFX, dubbing — all in-platform)</li>
                  <li><span className="text-blue-400 font-mono">5.</span> Lip sync characters</li>
                  <li><span className="text-blue-400 font-mono">6.</span> Export (watermark-free on any paid plan)</li>
                </ol>
                <p className="text-xs text-gray-500 mt-3">
                  Runway is a complete production pipeline. Generate, edit, audio, export — all in one place.
                </p>
              </div>
            </div>
          </section>

          {/* Credit Systems */}
          <section>
            <h2 className="text-2xl font-bold mb-4">
              🎫 Credit Systems: How They Actually Work
            </h2>
            <p className="text-gray-400 mb-6">
              Both platforms use credit systems, but they work very differently. Understanding the math is critical for budgeting.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="font-semibold text-purple-400 mb-3">Sora Credits</h3>
                <div className="text-sm text-gray-400 space-y-2">
                  <p><strong className="text-white">Plus ($20/mo):</strong> Unlimited 480p, no credits to track. Simple.</p>
                  <p><strong className="text-white">Pro ($200/mo):</strong> 10,000 credits/month. Standard 10s = 10 credits. Pro 10s = 40-250 credits depending on resolution.</p>
                  <p><strong className="text-white">Purchased credits:</strong> Available for Codex &amp; Sora. Shared pool. 12-month expiry. Non-refundable.</p>
                  <p><strong className="text-white">Relaxed mode:</strong> Unlimited after priority credits (Pro only). Slower (5-10 min vs 1-2 min).</p>
                  <p className="text-yellow-400/80">⚠️ Credits do NOT roll over between months.</p>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="font-semibold text-blue-400 mb-3">Runway Credits</h3>
                <div className="text-sm text-gray-400 space-y-2">
                  <p><strong className="text-white">Standard ($12/mo):</strong> 625 credits. Gen-4 Turbo = ~125s of video. Gen-4.5 = ~52s.</p>
                  <p><strong className="text-white">Pro ($28/mo):</strong> 2,250 credits. Gen-4 Turbo = ~450s. Gen-4.5 = ~187s.</p>
                  <p><strong className="text-white">Unlimited ($76/mo):</strong> 2,250 credits + Explore Mode. Unlimited relaxed-rate gens for Gen-4.5/Gen-4/Aleph/Act-Two.</p>
                  <p><strong className="text-white">Purchased credits:</strong> Min 1,000. Never expire while account active.</p>
                  <p><strong className="text-white">Workspace sharing:</strong> Credits shared across all editors in workspace.</p>
                  <p className="text-yellow-400/80">⚠️ Monthly credits don{"'"}t roll over. Veo 3 NOT included in Explore Mode.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Power Combo Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4">
              🤝 The Power Combo: Sora + Runway ($228-295/mo)
            </h2>
            <p className="text-gray-400 mb-6">
              For professional creators, the best answer might not be either/or. Here{"'"}s a workflow that leverages both:
            </p>

            <div className="bg-gradient-to-r from-purple-500/5 to-blue-500/5 border border-gray-800 rounded-xl p-6">
              <div className="space-y-4 text-sm text-gray-400">
                <div className="flex gap-3">
                  <span className="text-purple-400 font-bold shrink-0">Step 1:</span>
                  <p><strong className="text-white">Sora 2 Pro for hero shots.</strong> Generate your highest-impact clips — establishing shots, product reveals, cinematic moments — where maximum photorealism matters. Budget: ChatGPT Pro $200/mo.</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-blue-400 font-bold shrink-0">Step 2:</span>
                  <p><strong className="text-white">Runway for everything else.</strong> Use Gen-4 Turbo for quick iterations, Act-Two for character animation from photos, Gen-4.5 for B-roll, and Veo 3 when you need audio. Budget: Runway Pro $28/mo or Unlimited $76/mo.</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-blue-400 font-bold shrink-0">Step 3:</span>
                  <p><strong className="text-white">Edit in Runway.</strong> Import Sora clips into Runway{"'"}s timeline. Add lip sync, voice dubbing, sound effects, transitions. Export watermark-free.</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-blue-400 font-bold shrink-0">Step 4:</span>
                  <p><strong className="text-white">Ship.</strong> Runway exports ready for social, ads, or client delivery.</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-800">
                <p className="text-sm text-gray-500">
                  <strong className="text-gray-300">Total cost:</strong> $228/mo (Pro + Pro) to $276/mo (Pro + Unlimited). Expensive, but for agencies billing $5K+ per video project, the ROI is clear.
                </p>
              </div>
            </div>
          </section>

          {/* Scenarios */}
          <section>
            <h2 className="text-2xl font-bold mb-6">
              🎯 Real-World Scenarios: Who Should Choose What?
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "TikTok/Reels Creator (50+ clips/month)",
                  winner: "Runway",
                  color: "blue",
                  reason: "Unlimited plan ($76/mo) with Explore Mode means unlimited iteration. Gen-4 Turbo for fast drafts, Gen-4.5 for finals. Full audio suite. Sora's $200/mo Pro would work but you'd burn through priority credits fast.",
                  plan: "Runway Unlimited — $76/mo",
                },
                {
                  title: "Film/Commercial Director (5-10 hero shots/month)",
                  winner: "Sora",
                  color: "purple",
                  reason: "When every frame needs to be photorealistic — product commercials, cinematic trailers, architectural visualizations — Sora 2 Pro's physics engine delivers shots that Runway can't quite match. The $200/mo is justified when client budgets are $10K+.",
                  plan: "ChatGPT Pro — $200/mo",
                },
                {
                  title: "YouTuber (weekly videos, need B-roll + intros)",
                  winner: "Runway",
                  color: "blue",
                  reason: "You need variety more than perfection. Runway Pro gives you 2,250 credits — enough for ~37 Gen-4.5 clips or ~75 Gen-4 Turbo clips per month. Built-in editor means less switching between tools. Audio features let you do voiceover and SFX without leaving the platform.",
                  plan: "Runway Pro — $28/mo",
                },
                {
                  title: "AI Hobbyist / Experimenter",
                  winner: "Runway",
                  color: "blue",
                  reason: "Runway has a free tier. Sora doesn't. Standard at $12/mo is the cheapest way to access premium AI video models. If you already pay for ChatGPT Plus, Sora is a nice bonus — but $20/mo for 480p watermarked video isn't a great standalone value.",
                  plan: "Runway Standard — $12/mo (or Free)",
                },
                {
                  title: "Marketing Agency (client deliverables)",
                  winner: "Both",
                  color: "green",
                  reason: "Use the Power Combo. Sora 2 Pro for the hero shots that win pitches. Runway for the daily production grind — iteration, audio, editing, export. Bill clients for the premium and pocket the margin.",
                  plan: "Power Combo — $228-276/mo",
                },
                {
                  title: "Developer / API Integration",
                  winner: "It depends",
                  color: "gray",
                  reason: "Sora's API is simpler and prices per-second ($0.10-$0.50/sec). Runway's API uses the credit system. For automated pipelines needing maximum realism, Sora API. For pipelines needing model variety and audio, Runway API.",
                  plan: "Both available — compare per-unit costs for your use case",
                },
              ].map((scenario) => (
                <div
                  key={scenario.title}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-5"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-semibold text-white">{scenario.title}</h3>
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full whitespace-nowrap ${
                        scenario.color === "blue"
                          ? "bg-blue-500/10 text-blue-400"
                          : scenario.color === "purple"
                          ? "bg-purple-500/10 text-purple-400"
                          : scenario.color === "green"
                          ? "bg-green-500/10 text-green-400"
                          : "bg-gray-500/10 text-gray-400"
                      }`}
                    >
                      Winner: {scenario.winner}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">{scenario.reason}</p>
                  <p className="text-xs text-gray-500">
                    <strong>Recommended:</strong> {scenario.plan}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Hidden Costs */}
          <section>
            <h2 className="text-2xl font-bold mb-4">
              ⚠️ Hidden Costs &amp; Gotchas
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="font-semibold text-purple-400 mb-3">Sora — Watch Out For</h3>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>
                    <strong className="text-white">$180/mo quality gap.</strong> The jump from Plus ($20/mo, 480p watermarked) to Pro ($200/mo, 1080p watermark-free) is massive. There{"'"}s no mid-tier.
                  </li>
                  <li>
                    <strong className="text-white">Credits shared with Codex.</strong> Purchased credits work across Codex and Sora. If you also use Codex heavily, your Sora budget shrinks.
                  </li>
                  <li>
                    <strong className="text-white">Sora 2 Pro cost scaling.</strong> High-res Pro videos cost 25-50x more credits than standard Sora 2. A single 15s 1080p Pro clip costs 500 credits — 5% of your monthly Pro allocation.
                  </li>
                  <li>
                    <strong className="text-white">No editing tools.</strong> Every Sora clip needs external post-production. That{"'"}s time, additional software cost, and workflow friction.
                  </li>
                  <li>
                    <strong className="text-white">Relaxed mode limitations.</strong> After priority credits, relaxed mode is 5-10 min per clip vs 1-2 min. For iteration-heavy workflows, that{"'"}s a productivity wall.
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="font-semibold text-blue-400 mb-3">Runway — Watch Out For</h3>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>
                    <strong className="text-white">Veo 3 credit burn.</strong> At 40 credits/sec, a single 10s Veo 3 clip costs 400 credits — 64% of your Standard monthly allocation or 18% of Pro.
                  </li>
                  <li>
                    <strong className="text-white">Explore Mode exclusions.</strong> Veo 3 and Gemini 3 Pro are NOT included in Unlimited{"'"}s Explore Mode. You still pay credits for them.
                  </li>
                  <li>
                    <strong className="text-white">Shared workspace credits.</strong> Adding team members doesn{"'"}t add credits. 4 editors on Pro share 2,250 credits — that{"'"}s 562 each.
                  </li>
                  <li>
                    <strong className="text-white">5-10s clip limit.</strong> Longer content requires stitching multiple clips. This works but adds complexity and credit cost for transitions.
                  </li>
                  <li>
                    <strong className="text-white">Monthly credits expire.</strong> Use-it-or-lose-it. Plan credits don{"'"}t roll over (purchased credits do, though).
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Competitive Landscape */}
          <section>
            <h2 className="text-2xl font-bold mb-4">
              🌍 Competitive Landscape: Where They Sit in 2026
            </h2>
            <p className="text-gray-400 mb-6">
              Sora and Runway are the two most-discussed AI video generators, but they{"'"}re not the only game in town. Here{"'"}s where everything stands:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left py-2 px-3 text-gray-400 font-medium">Tool</th>
                    <th className="text-left py-2 px-3 text-gray-400 font-medium">Best For</th>
                    <th className="text-left py-2 px-3 text-gray-400 font-medium">Starting Price</th>
                    <th className="text-left py-2 px-3 text-gray-400 font-medium">Unique Angle</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800/50">
                  <tr>
                    <td className="py-2 px-3 text-purple-400 font-medium">Sora 2</td>
                    <td className="py-2 px-3 text-gray-400">Maximum realism</td>
                    <td className="py-2 px-3">$20/mo (ChatGPT Plus)</td>
                    <td className="py-2 px-3 text-gray-500">OpenAI physics engine</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-blue-400 font-medium">Runway</td>
                    <td className="py-2 px-3 text-gray-400">Creative production</td>
                    <td className="py-2 px-3">$12/mo (Standard)</td>
                    <td className="py-2 px-3 text-gray-500">Multi-model studio + audio</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-gray-300">Kling AI</td>
                    <td className="py-2 px-3 text-gray-400">Budget quality video</td>
                    <td className="py-2 px-3">Free / $5.99/mo</td>
                    <td className="py-2 px-3 text-gray-500">Cheapest quality tier</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-gray-300">Pika</td>
                    <td className="py-2 px-3 text-gray-400">Stylized/artistic video</td>
                    <td className="py-2 px-3">$8/mo</td>
                    <td className="py-2 px-3 text-gray-500">Scene modification tools</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-gray-300">Seedance</td>
                    <td className="py-2 px-3 text-gray-400">Motion quality</td>
                    <td className="py-2 px-3">Free / $9.99/mo</td>
                    <td className="py-2 px-3 text-gray-500">Strong motion physics</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-gray-300">Google Veo 3</td>
                    <td className="py-2 px-3 text-gray-400">Video + native audio</td>
                    <td className="py-2 px-3">Via Gemini / Runway</td>
                    <td className="py-2 px-3 text-gray-500">Best synchronized audio</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-gray-300">Synthesia</td>
                    <td className="py-2 px-3 text-gray-400">Avatar/talking head</td>
                    <td className="py-2 px-3">$29/mo</td>
                    <td className="py-2 px-3 text-gray-500">Enterprise AI avatars</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-gray-300">HeyGen</td>
                    <td className="py-2 px-3 text-gray-400">AI spokesperson</td>
                    <td className="py-2 px-3">$24/mo</td>
                    <td className="py-2 px-3 text-gray-500">700+ avatar personas</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Market Trends */}
          <section>
            <h2 className="text-2xl font-bold mb-4">
              📈 4 Market Trends Shaping the Choice
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "1. Platform Bundling vs. Best-of-Breed",
                  content:
                    "OpenAI is bundling Sora into ChatGPT — you pay for an AI platform and get video generation as a feature. Runway sells video generation as the product. This mirrors the Microsoft Office vs. Google Docs dynamic: bundled convenience vs. purpose-built tools. If you're already in the OpenAI ecosystem (ChatGPT Pro, Codex, API), Sora is incremental. If video is your primary need, Runway's purpose-built approach delivers more per dollar.",
                },
                {
                  title: "2. Audio Is the New Battleground",
                  content:
                    "Silent AI video was a novelty. Audio-synced AI video is a production tool. Runway's investment in TTS, SFX, dubbing, and lip sync positions it as a complete production studio. Sora's synchronized audio is catching up, but Runway's audio toolkit is 2+ years ahead in maturity. The winner of the audio race wins the creator market.",
                },
                {
                  title: "3. Multi-Model Marketplaces Are Winning",
                  content:
                    "Runway's decision to offer Google's Veo 3 alongside its own Gen-4.5 mirrors the AI model marketplace trend (see: Cursor offering Claude, GPT, Gemini). Creators want the best model for each shot, not loyalty to one model. Sora's two-model approach limits flexibility. Expect OpenAI to eventually offer competitor models in Sora, or lose market share.",
                },
                {
                  title: "4. Real-Time Generation Is Coming",
                  content:
                    "Runway's GWM-1 (General World Model) signals the shift toward real-time, interactive video generation — think game engines powered by AI video models. Sora's research-grade approach may produce better individual clips, but Runway's platform strategy is better positioned for the real-time future. This is the 2027-2028 battleground.",
                },
              ].map((trend) => (
                <div
                  key={trend.title}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-5"
                >
                  <h3 className="font-semibold text-white mb-2">{trend.title}</h3>
                  <p className="text-sm text-gray-400">{trend.content}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6">
              ❓ Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {jsonLd.mainEntity.map(
                (
                  faq: { name: string; acceptedAnswer: { text: string } },
                  i: number
                ) => (
                  <details
                    key={i}
                    className="group bg-gray-900 border border-gray-800 rounded-xl"
                  >
                    <summary className="flex items-center justify-between p-5 cursor-pointer">
                      <span className="font-medium text-gray-200 pr-4">
                        {faq.name}
                      </span>
                      <span className="text-gray-500 group-open:rotate-45 transition-transform text-xl">
                        +
                      </span>
                    </summary>
                    <div className="px-5 pb-5 text-sm text-gray-400 leading-relaxed">
                      {faq.acceptedAnswer.text}
                    </div>
                  </details>
                )
              )}
            </div>
          </section>

          {/* Bottom Line */}
          <section>
            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">🏁 The Bottom Line</h2>
              <div className="space-y-4 text-gray-400">
                <p>
                  <strong className="text-white">Sora is the better video generator.</strong> Its physics engine produces the most photorealistic AI video available in 2026. If you need one perfect shot and cost isn{"'"}t the primary concern, Sora 2 Pro is unmatched.
                </p>
                <p>
                  <strong className="text-white">Runway is the better video platform.</strong> Its model variety, creative tools, audio suite, and pricing flexibility make it the more complete production solution. For 90% of creators, Runway delivers more value per dollar.
                </p>
                <p>
                  The question isn{"'"}t really {'"'}which is better{'"'} — it{"'"}s {'"'}what do you need?{'"'} A physics engine for cinematic hero shots, or a creative studio for daily production? The answer shapes the choice.
                </p>
              </div>
            </div>
          </section>

          {/* Internal Links */}
          <section>
            <h2 className="text-lg font-semibold text-gray-400 mb-4">
              Related Comparisons &amp; Guides
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { href: "/midjourney-vs-runway", label: "Midjourney vs Runway" },
                { href: "/runway-alternatives", label: "Runway Alternatives" },
                { href: "/runway-ml-pricing", label: "Runway ML Pricing" },
                { href: "/claude-vs-gemini", label: "Claude vs Gemini" },
                { href: "/chatgpt-vs-claude", label: "ChatGPT vs Claude" },
                { href: "/chatgpt-plus-pricing", label: "ChatGPT Plus Pricing" },
                { href: "/synthesia-pricing", label: "Synthesia Pricing" },
                { href: "/directory", label: "Full AI Directory →" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="bg-gray-900 border border-gray-800 rounded-lg p-3 text-sm text-gray-400 hover:text-purple-400 hover:border-purple-500/30 transition-colors text-center"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
