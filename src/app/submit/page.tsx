import type { Metadata } from "next";
import { categories } from "@/data/categories";

export const metadata: Metadata = {
  title: "Submit Your AI Tool — Get Listed Free",
  description:
    "Submit your AI tool to AISO Tools directory. Free basic listing. Featured placements available for maximum visibility.",
};

export default function SubmitPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-4">Submit Your AI Tool</h1>
      <p className="text-gray-400 mb-8">
        Get your AI tool in front of thousands of developers, marketers, and
        creators. Basic listings are <strong className="text-white">free forever</strong>.
        Want more visibility?{" "}
        <a href="/advertise" className="text-blue-400 hover:text-blue-300">
          Check our featured plans →
        </a>
      </p>

      <form
        action="https://formsubmit.co/hello@aisotools.com"
        method="POST"
        className="space-y-6"
      >
        {/* Tool Name */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Tool Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="tool_name"
            required
            placeholder="e.g., ChatGPT, Midjourney, Cursor"
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* URL */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Website URL <span className="text-red-400">*</span>
          </label>
          <input
            type="url"
            name="url"
            required
            placeholder="https://yourtool.com"
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Category <span className="text-red-400">*</span>
          </label>
          <select
            name="category"
            required
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat.slug} value={cat.slug}>
                {cat.icon} {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* Short Description */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Short Description <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="short_description"
            required
            maxLength={120}
            placeholder="One sentence about what your tool does (max 120 chars)"
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Full Description */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Full Description <span className="text-red-400">*</span>
          </label>
          <textarea
            name="description"
            required
            rows={4}
            placeholder="Describe your tool in 2-3 sentences. What problem does it solve? Who is it for?"
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
          />
        </div>

        {/* Pricing */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Pricing Model <span className="text-red-400">*</span>
          </label>
          <select
            name="pricing"
            required
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          >
            <option value="">Select pricing model</option>
            <option value="free">Free</option>
            <option value="freemium">Freemium (free tier + paid plans)</option>
            <option value="paid">Paid only</option>
            <option value="open-source">Open Source</option>
          </select>
        </div>

        {/* Pricing Details */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Pricing Details
          </label>
          <input
            type="text"
            name="pricing_details"
            placeholder="e.g., Free tier available. Pro $20/mo, Team $25/user/mo"
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Key Features */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Key Features (comma-separated) <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="features"
            required
            placeholder="e.g., AI code generation, Multi-file editing, Codebase chat"
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Contact Email */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Contact Email <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="you@company.com"
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold text-lg transition"
        >
          Submit Tool (Free)
        </button>

        <p className="text-gray-500 text-sm text-center">
          Submissions are reviewed within 24 hours. Want instant listing +
          featured placement?{" "}
          <a href="/advertise" className="text-blue-400 hover:text-blue-300">
            See pricing →
          </a>
        </p>
      </form>

      {/* Featured Upsell — prominent after submission */}
      <div className="mt-12 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-8">
        <div className="text-center mb-6">
          <span className="text-4xl mb-3 block">🚀</span>
          <h2 className="text-2xl font-bold mb-2">Want 10x More Visibility?</h2>
          <p className="text-gray-400">
            Free listings are great, but featured tools get <strong className="text-white">priority placement</strong>,{" "}
            <strong className="text-white">Featured badges</strong>, and{" "}
            <strong className="text-white">dofollow backlinks</strong>.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-center">
            <div className="font-bold text-lg mb-1">Basic</div>
            <div className="text-2xl font-bold text-blue-400">$49</div>
            <div className="text-gray-500 text-xs">one-time</div>
            <div className="text-gray-400 text-sm mt-2">Featured badge + priority placement</div>
          </div>
          <div className="bg-blue-600/10 border border-blue-500/30 rounded-lg p-4 text-center">
            <div className="font-bold text-lg mb-1">Pro</div>
            <div className="text-2xl font-bold text-blue-400">$149</div>
            <div className="text-gray-500 text-xs">one-time</div>
            <div className="text-gray-400 text-sm mt-2">Top of category + comparison pages</div>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-center">
            <div className="font-bold text-lg mb-1">Premium</div>
            <div className="text-2xl font-bold text-blue-400">$299</div>
            <div className="text-gray-500 text-xs">one-time</div>
            <div className="text-gray-400 text-sm mt-2">Homepage + review article + social</div>
          </div>
        </div>
        <div className="text-center">
          <a
            href="/advertise#pricing"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition shadow-md shadow-blue-600/20"
          >
            Upgrade to Featured →
          </a>
        </div>
      </div>
    </div>
  );
}
