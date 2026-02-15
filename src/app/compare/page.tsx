import { tools } from "@/data/tools";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare AI Tools — Side-by-Side Comparisons",
  description:
    "Compare the best AI tools side by side. ChatGPT vs Claude, Midjourney vs DALL-E, Cursor vs GitHub Copilot, and more.",
};

const popularComparisons = [
  { tools: ["chatgpt", "claude"], label: "ChatGPT vs Claude" },
  { tools: ["midjourney", "dall-e-3"], label: "Midjourney vs DALL-E 3" },
  { tools: ["cursor", "github-copilot"], label: "Cursor vs GitHub Copilot" },
  { tools: ["runway", "pika"], label: "Runway vs Pika" },
  { tools: ["jasper", "copy-ai"], label: "Jasper vs Copy.ai" },
  { tools: ["elevenlabs", "murf-ai"], label: "ElevenLabs vs Murf AI" },
  { tools: ["notion-ai", "taskade"], label: "Notion AI vs Taskade" },
  { tools: ["gemini", "chatgpt"], label: "Gemini vs ChatGPT" },
  { tools: ["stable-diffusion", "leonardo-ai"], label: "Stable Diffusion vs Leonardo AI" },
  { tools: ["surfer-seo", "semrush-ai"], label: "Surfer SEO vs Semrush AI" },
  { tools: ["perplexity", "you-com"], label: "Perplexity vs You.com" },
  { tools: ["synthesia", "heygen"], label: "Synthesia vs HeyGen" },
  { tools: ["suno", "udio"], label: "Suno vs Udio" },
  { tools: ["figma-ai", "framer-ai"], label: "Figma AI vs Framer AI" },
  { tools: ["make-com", "zapier-ai"], label: "Make.com vs Zapier AI" },
];

export default function ComparePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-4">Compare AI Tools</h1>
      <p className="text-xl text-gray-400 mb-10">
        Side-by-side comparisons to help you pick the right AI tool. Features,
        pricing, pros &amp; cons — all in one place.
      </p>

      <h2 className="text-2xl font-bold mb-6">🔥 Popular Comparisons</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        {popularComparisons.map((comp) => {
          const slug = `${comp.tools[0]}-vs-${comp.tools[1]}`;
          return (
            <Link
              key={slug}
              href={`/compare/${slug}`}
              className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition group flex items-center justify-between"
            >
              <span className="font-medium group-hover:text-blue-400 transition">
                {comp.label}
              </span>
              <span className="text-gray-600 group-hover:text-gray-400 transition">→</span>
            </Link>
          );
        })}
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center">
        <h2 className="text-xl font-bold mb-3">Want a comparison we haven&apos;t covered?</h2>
        <p className="text-gray-400 mb-4">
          Let us know which tools you&apos;d like compared and we&apos;ll create a detailed breakdown.
        </p>
        <a
          href="mailto:hello@aisotools.com?subject=Comparison Request"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
        >
          Request a Comparison
        </a>
      </div>
    </div>
  );
}
