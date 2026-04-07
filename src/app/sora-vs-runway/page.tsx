import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sora vs Runway (2026): Which AI Video Generator is Better?",
  description: "Compare Sora vs Runway for AI video generation. Detailed breakdown of video quality, pricing, features, generation speed, and which tool is best for different video needs.",
  keywords: ["Sora vs Runway", "AI video generator comparison", "OpenAI Sora", "Runway Gen-3", "best AI video tool", "text to video"],
  openGraph: {
    title: "Sora vs Runway: AI Video Generator Comparison 2026",
    description: "Sora vs Runway — comprehensive comparison of features, quality, pricing, and real-world performance.",
    url: "https://aisotools.com/sora-vs-runway",
    type: "article",
  },
  alternates: { canonical: "https://aisotools.com/sora-vs-runway" },
};

export default function SoraVsRunwayPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-white">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/compare" className="hover:text-white">Compare</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Sora vs Runway</span>
      </nav>

      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Sora vs Runway: Which AI Video Generator is Better in 2026?</h1>
        <p className="text-xl text-gray-400 max-w-4xl">
          OpenAI's Sora and Runway's Gen-3 Alpha are the two leading AI video generators. This comparison
          covers video quality, pricing, generation speed, creative control, and which is best for different use cases.
        </p>
        <div className="flex flex-wrap gap-2 mt-6">
          <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">Updated April 2026</span>
          <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">10 min read</span>
        </div>
      </header>

      <section className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-bold mb-3">⚡ Quick Answer</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          <strong>Sora</strong> produces higher-quality, more cinematic videos with better physics understanding and longer clips (up to 60 seconds).
          <strong> Runway</strong> offers faster generation, more creative control tools (Motion Brush, Camera Control), and a more established editing ecosystem.
        </p>
        <p className="text-gray-400">
          Choose Sora for maximum video quality. Choose Runway for faster iteration and more creative control.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Detailed Comparison</h2>
        <div className="space-y-4">
          {[
            { category: "Video Quality", sora: "⭐ Best-in-class — cinematic quality with realistic physics, lighting, and reflections", runway: "Very good — Gen-3 Alpha produces impressive results but slightly behind Sora on realism", winner: "Sora" },
            { category: "Max Video Length", sora: "⭐ Up to 60 seconds per generation", runway: "Up to 10 seconds per generation (extendable)", winner: "Sora" },
            { category: "Generation Speed", sora: "Slower — 5-20 minutes per video", runway: "⭐ Faster — typically 30 seconds to 2 minutes", winner: "Runway" },
            { category: "Creative Controls", sora: "Text prompts, image-to-video, Storyboard mode", runway: "⭐ Motion Brush, Camera Control, style references, inpainting", winner: "Runway" },
            { category: "Image-to-Video", sora: "Available with good quality", runway: "⭐ More refined with better motion control", winner: "Runway" },
            { category: "Text-to-Video", sora: "⭐ Superior prompt adherence and scene composition", runway: "Good but can struggle with complex multi-subject scenes", winner: "Sora" },
            { category: "Pricing", sora: "ChatGPT Plus ($20/mo) for limited, Pro ($200/mo) for more", runway: "Standard $12/mo, Pro $28/mo, Unlimited $76/mo", winner: "Runway" },
            { category: "Video Editing", sora: "Basic — trim, blend between clips", runway: "⭐ Comprehensive — Gen-1 style transfer, inpainting, outpainting", winner: "Runway" },
            { category: "Resolution", sora: "Up to 1080p", runway: "⭐ Up to 4K (on higher tiers)", winner: "Runway" },
            { category: "API Access", sora: "Available via OpenAI API", runway: "⭐ Mature API with SDKs and integrations", winner: "Runway" },
            { category: "Character Consistency", sora: "⭐ Better at maintaining consistent characters across scenes", runway: "Can struggle with character consistency in longer sequences", winner: "Sora" },
            { category: "Physics & Motion", sora: "⭐ Best physics understanding — natural gravity, fluids, fabric", runway: "Good but occasional physics artifacts", winner: "Sora" },
          ].map((row) => (
            <div key={row.category} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold">{row.category}</h3>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  row.winner === "Sora" ? "bg-green-500/20 text-green-400" :
                  row.winner === "Runway" ? "bg-purple-500/20 text-purple-400" :
                  "bg-gray-700 text-gray-400"
                }`}>{row.winner} wins</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-500/5 border border-green-500/10 rounded-lg p-3">
                  <span className="text-green-400 text-xs font-medium">Sora</span>
                  <p className="text-sm text-gray-300 mt-1">{row.sora}</p>
                </div>
                <div className="bg-purple-500/5 border border-purple-500/10 rounded-lg p-3">
                  <span className="text-purple-400 text-xs font-medium">Runway</span>
                  <p className="text-sm text-gray-300 mt-1">{row.runway}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">When to Choose Each</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-green-400 mb-4">Choose Sora When...</h3>
            <ul className="space-y-3">
              {["Maximum video quality is the priority", "You need longer clips (30-60 seconds)", "Physics accuracy matters (product demos, simulations)", "Character consistency across scenes is important", "You already have ChatGPT Pro", "Cinematic, film-quality output is the goal"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-300"><span className="text-green-400 mt-0.5">✓</span> {item}</li>
              ))}
            </ul>
            <Link href="/tool/sora" className="inline-block mt-6 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg font-medium transition">Try Sora →</Link>
          </div>
          <div className="bg-purple-500/5 border border-purple-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">Choose Runway When...</h3>
            <ul className="space-y-3">
              {["Faster iteration and generation speed matter", "You need fine-grained creative controls", "Video editing (not just generation) is part of your workflow", "Budget is a concern — more affordable plans", "You need API access for production pipelines", "You want 4K output resolution"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-300"><span className="text-purple-400 mt-0.5">✓</span> {item}</li>
              ))}
            </ul>
            <Link href="/tool/runway" className="inline-block mt-6 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-lg font-medium transition">Try Runway →</Link>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Is Sora better than Runway for video quality?</h3>
            <p className="text-gray-400">Yes, Sora generally produces higher quality videos with better physics, lighting, and character consistency. Runway Gen-3 Alpha is impressive but Sora edges it out on raw quality, especially for longer clips.</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Which is cheaper, Sora or Runway?</h3>
            <p className="text-gray-400">Runway is more affordable. Its Standard plan starts at $12/mo with credits included. Sora requires ChatGPT Plus ($20/mo) for limited access or Pro ($200/mo) for serious use.</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Can I use AI-generated videos commercially?</h3>
            <p className="text-gray-400">Both Sora (on paid plans) and Runway grant commercial usage rights. Check specific terms for your plan tier — watermark-free output typically requires a paid subscription.</p>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "Is Sora better than Runway for video quality?", acceptedAnswer: { "@type": "Answer", text: "Yes, Sora generally produces higher quality videos with better physics, lighting, and character consistency." } },
              { "@type": "Question", name: "Which is cheaper, Sora or Runway?", acceptedAnswer: { "@type": "Answer", text: "Runway is more affordable with Standard plans starting at $12/mo. Sora requires ChatGPT Plus ($20/mo) or Pro ($200/mo)." } },
              { "@type": "Question", name: "Can I use AI-generated videos commercially?", acceptedAnswer: { "@type": "Answer", text: "Both Sora and Runway grant commercial usage rights on paid plans." } },
            ],
          }),
        }}
      />

      <section className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Explore More Comparisons</h2>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">Find the perfect AI tool for your needs.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/compare" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition">All Comparisons</Link>
          <Link href="/sora-alternatives" className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition">Sora Alternatives →</Link>
        </div>
      </section>
    </div>
  );
}
