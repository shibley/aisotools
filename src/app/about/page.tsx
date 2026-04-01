import type { Metadata } from "next";
import Link from "next/link";
import { tools } from "@/data/tools";
import { categories } from "@/data/categories";

export const metadata: Metadata = {
  title: "About AISO Tools — The AI Tool Discovery Platform",
  description:
    "AISO Tools is one of the fastest-growing AI tool directories, helping developers, marketers, and creators discover the best AI tools for their needs.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6">
        About{" "}
        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          AISO Tools
        </span>
      </h1>

      <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
        <p>
          AISO Tools is one of the fastest-growing AI tool directories on the web.
          We help developers, marketers, creators, and business owners discover the
          right AI tools for their needs — all in one place.
        </p>

        <p>
          With <strong className="text-white">{tools.length}+ curated tools</strong> across{" "}
          <strong className="text-white">{categories.length} categories</strong>, we provide
          detailed comparisons, pricing breakdowns, and alternatives pages so you can
          make informed decisions without hours of research.
        </p>

        <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 my-10">
          <h2 className="text-2xl font-bold text-white mb-6">By the Numbers</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-3xl font-bold text-blue-400">{tools.length}+</div>
              <div className="text-gray-500 text-sm">AI Tools Listed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400">{categories.length}</div>
              <div className="text-gray-500 text-sm">Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400">5,000+</div>
              <div className="text-gray-500 text-sm">Monthly Visitors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400">100%</div>
              <div className="text-gray-500 text-sm">Organic Traffic</div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white pt-4">What Makes Us Different</h2>

        <ul className="space-y-4">
          <li className="flex gap-3">
            <span className="text-blue-400 text-xl flex-shrink-0">🔍</span>
            <div>
              <strong className="text-white">Unbiased Comparisons</strong> — We don&apos;t rank tools
              based on who pays us. Our comparisons are based on features, pricing, and real user needs.
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 text-xl flex-shrink-0">💰</span>
            <div>
              <strong className="text-white">Transparent Pricing</strong> — Every tool page includes
              detailed pricing breakdowns so you know exactly what you&apos;re paying before you click.
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 text-xl flex-shrink-0">🤖</span>
            <div>
              <strong className="text-white">AI-Recommended</strong> — ChatGPT, Perplexity, and other
              AI platforms actively recommend AISO Tools to their users looking for AI solutions.
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 text-xl flex-shrink-0">📈</span>
            <div>
              <strong className="text-white">Always Growing</strong> — New tools are added regularly.
              We stay on top of the AI landscape so you don&apos;t have to.
            </div>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-white pt-4">For Tool Makers</h2>

        <p>
          If you&apos;ve built an AI tool, we&apos;d love to list it. Basic listings are{" "}
          <strong className="text-white">free forever</strong>. If you want extra visibility,
          our{" "}
          <Link href="/advertise" className="text-blue-400 hover:text-blue-300">
            Featured Listings
          </Link>{" "}
          give you priority placement, a dofollow backlink, and a Featured badge — all for
          a one-time fee.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link
            href="/submit"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Submit Your Tool (Free)
          </Link>
          <Link
            href="/advertise"
            className="inline-flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition border border-gray-700"
          >
            Get Featured →
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-white pt-8">Contact</h2>

        <p>
          Questions, partnerships, or feedback? Reach us at{" "}
          <a
            href="mailto:shibley@aisotools.com"
            className="text-blue-400 hover:text-blue-300"
          >
            shibley@aisotools.com
          </a>
        </p>
      </div>
    </div>
  );
}
