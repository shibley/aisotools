import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bolt.new vs Lovable (2026): Speed Machine vs Full-Stack Builder",
  description:
    "In-depth comparison of Bolt.new vs Lovable in 2026. Compare token-based vs credit-based pricing ($25/mo each), WebContainer speed vs Supabase integration, deployment, code quality, and which AI app builder to choose.",
  keywords: [
    "bolt vs lovable",
    "bolt.new vs lovable",
    "lovable vs bolt",
    "bolt new comparison",
    "lovable comparison",
    "best AI app builder 2026",
    "AI app builder comparison",
    "bolt or lovable",
    "vibe coding tools 2026",
    "bolt.new pricing vs lovable pricing",
    "AI code generator comparison",
    "bolt.new review 2026",
    "lovable review 2026",
  ],
  openGraph: {
    title: "Bolt.new vs Lovable (2026): Speed Machine vs Full-Stack Builder",
    description:
      "Comprehensive comparison of Bolt.new and Lovable. Speed vs full-stack capabilities, pricing, AI models, deployment, database integration, and which vibe coding tool to choose in 2026.",
    url: "https://aisotools.com/bolt-vs-lovable",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/bolt-vs-lovable",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Bolt.new better than Lovable for building apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on your technical background and project needs. Bolt.new is faster for iteration (2-3x faster with its diffs feature) and gives developers direct code access, terminal, and multi-framework support (React, Vue, Svelte, Next.js, Astro). Lovable builds complete full-stack applications with integrated Supabase database, authentication, and one-click deployment — ideal for non-technical founders building MVPs. If you're a developer who wants speed and control, Bolt.new wins. If you need a working app with database and auth from a single prompt, Lovable wins.",
      },
    },
    {
      "@type": "Question",
      name: "How much does Bolt.new cost compared to Lovable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both start at $25/month for paid plans. Bolt.new Pro costs $25/month with 10M tokens (no daily limit, tokens roll over). Lovable Pro costs $25/month with 100 credits plus 5 daily bonus credits. Bolt.new Teams is $30/user/month. Lovable Business is $50/month shared across unlimited users. The key difference: Bolt.new uses tokens (consumption-based, burns faster on complex prompts) while Lovable uses credits (more predictable per-interaction). For teams, Lovable's shared pricing is significantly cheaper than Bolt.new's per-user model.",
      },
    },
    {
      "@type": "Question",
      name: "Can Bolt.new build full-stack applications with databases?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bolt.new is primarily a frontend tool. It runs Node.js in the browser via WebContainers and excels at generating UI code. However, it has no built-in database, no integrated authentication, and no deployment pipeline. You need to manually connect external services (Supabase, Firebase, AWS) and deploy to Netlify or Vercel yourself. Lovable, by contrast, automatically provisions a Supabase PostgreSQL database, authentication, file storage, and real-time data from a single prompt. For full-stack apps, Lovable saves hours of configuration.",
      },
    },
    {
      "@type": "Question",
      name: "Which is faster for prototyping — Bolt.new or Lovable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bolt.new is consistently faster for iteration thanks to its 'diffs' feature, which only updates changed code rather than rewriting entire files. Initial generation takes about 30 seconds vs Lovable's 60 seconds. For rapid prototyping sessions with many small changes, Bolt.new's speed advantage compounds significantly. However, Lovable's speed includes full-stack setup (database, auth, deployment), so comparing prompt-to-deployed-app, Lovable can be faster for complete MVPs despite slower individual iterations.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need coding experience to use Bolt.new or Lovable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bolt.new effectively requires development experience. It presents a full IDE interface with file tree, terminal, and code editor. Understanding React, npm, and deployment workflows is expected. Lovable is more beginner-friendly with its conversational interface, structured planning stage, and automatic backend setup. Non-technical users can build basic apps with Lovable, though debugging and extending functionality still benefits from development knowledge. Neither is truly zero-code for production applications, but Lovable has a lower barrier to entry.",
      },
    },
    {
      "@type": "Question",
      name: "Which AI models do Bolt.new and Lovable use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bolt.new supports multiple AI models including Claude (Anthropic), GPT-4o (OpenAI), and Gemini (Google), letting you switch models depending on the task. This multi-model approach gives developers flexibility to use the best model for each situation. Lovable uses a proprietary AI system and doesn't expose model selection to users. The tradeoff: Bolt.new gives you more control over AI quality, while Lovable's opinionated approach means less decision-making overhead.",
      },
    },
    {
      "@type": "Question",
      name: "Can I export code from Bolt.new and Lovable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, both platforms allow full code export. Bolt.new lets you download the complete project or push to GitHub. Lovable has native GitHub sync that automatically pushes code to your repository as you build. Both generate standard React/TypeScript code that can be continued in any IDE. Lovable's GitHub integration is slightly more polished, syncing automatically, while Bolt.new requires manual export steps.",
      },
    },
    {
      "@type": "Question",
      name: "Should I use Bolt.new and Lovable together?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, many developers use both tools together. A common Power Combo workflow: use Lovable to generate the initial full-stack app (database, auth, deployment), export to GitHub, then import into Bolt.new for rapid iteration on the UI. This combines Lovable's full-stack generation with Bolt.new's speed for frontend refinement. Combined cost is $50/month — still cheaper than a single Cursor Business seat or hiring a freelancer for even one task.",
      },
    },
  ],
};

export default function BoltVsLovablePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">
              AISO Tools
            </Link>
            <span>/</span>
            <Link href="/compare" className="hover:text-white transition-colors">
              Compare
            </Link>
            <span>/</span>
            <span className="text-gray-200">Bolt.new vs Lovable</span>
          </nav>

          {/* Hero Section */}
          <header className="mb-16">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-400">
              <span>⚡</span>
              <span>2026 Comparison</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Bolt.new vs Lovable:{" "}
              <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                Speed Machine vs Full-Stack Builder
              </span>
            </h1>
            <p className="text-xl leading-relaxed text-gray-300">
              The two hottest AI app builders of the vibe coding era take fundamentally
              different approaches. Bolt.new (StackBlitz, $105M raised) runs Node.js{" "}
              <em>in your browser</em> with multi-model AI and blazing iteration speed.
              Lovable (formerly GPT Engineer, $20M ARR in 2 months) generates complete
              full-stack apps with database, auth, and deployment from a single prompt.
              Both cost $25/month. The choice comes down to what you value more: speed
              and control, or completeness and simplicity.
            </p>
          </header>

          {/* Quick Verdict */}
          <section className="mb-16 rounded-2xl border border-orange-500/20 bg-orange-500/5 p-8">
            <h2 className="mb-6 text-2xl font-bold text-white">⚡ Quick Verdict</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-6">
                <h3 className="mb-3 text-lg font-bold text-orange-400">
                  Choose Bolt.new if...
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• You{`'`}re a developer comfortable with code</li>
                  <li>• Speed is your top priority (2-3x faster iterations)</li>
                  <li>• You want to choose your AI model (Claude, GPT, Gemini)</li>
                  <li>• You need framework flexibility (React, Vue, Svelte, Astro)</li>
                  <li>• You{`'`}ll handle backend and deployment yourself</li>
                </ul>
              </div>
              <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-6">
                <h3 className="mb-3 text-lg font-bold text-pink-400">
                  Choose Lovable if...
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• You{`'`}re a non-technical founder building an MVP</li>
                  <li>• You need database + auth + deploy from one prompt</li>
                  <li>• You prefer guided, conversational app building</li>
                  <li>• You want one-click deployment with custom domains</li>
                  <li>• Team cost matters (unlimited users on shared plan)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Side-by-Side Feature Table */}
          <section className="mb-16">
            <h2 className="mb-8 text-3xl font-bold text-white">
              Feature-by-Feature Comparison
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-700">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-700 bg-gray-800/80">
                    <th className="px-4 py-3 font-semibold text-gray-300">Feature</th>
                    <th className="px-4 py-3 font-semibold text-orange-400">
                      Bolt.new
                    </th>
                    <th className="px-4 py-3 font-semibold text-pink-400">Lovable</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  <tr className="bg-gray-900/40">
                    <td className="px-4 py-3 font-medium text-gray-300">Company</td>
                    <td className="px-4 py-3 text-gray-400">StackBlitz ($105M raised)</td>
                    <td className="px-4 py-3 text-gray-400">Lovable (Stockholm, $20.6M raised)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-300">Primary Strength</td>
                    <td className="px-4 py-3 text-gray-400">⚡ Browser-based IDE + speed</td>
                    <td className="px-4 py-3 text-gray-400">🏗️ Full-stack app generation</td>
                  </tr>
                  <tr className="bg-gray-900/40">
                    <td className="px-4 py-3 font-medium text-gray-300">Revenue Milestone</td>
                    <td className="px-4 py-3 text-gray-400">~$40M ARR in 6 months</td>
                    <td className="px-4 py-3 text-gray-400">$20M ARR in 2 months (fastest in EU)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-300">Free Tier</td>
                    <td className="px-4 py-3 text-gray-400">300K tokens/day, 1M/month</td>
                    <td className="px-4 py-3 text-gray-400">5 credits/day (~150/month)</td>
                  </tr>
                  <tr className="bg-gray-900/40">
                    <td className="px-4 py-3 font-medium text-gray-300">Pro Price</td>
                    <td className="px-4 py-3 text-gray-400">$25/mo (10M tokens)</td>
                    <td className="px-4 py-3 text-gray-400">$25/mo (100 credits + 5/day bonus)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-300">Team Price</td>
                    <td className="px-4 py-3 text-gray-400">$30/user/month ❌ Per-user</td>
                    <td className="px-4 py-3 text-gray-400">$50/mo shared ✅ Unlimited users</td>
                  </tr>
                  <tr className="bg-gray-900/40">
                    <td className="px-4 py-3 font-medium text-gray-300">Billing Model</td>
                    <td className="px-4 py-3 text-gray-400">Token-based (consumption)</td>
                    <td className="px-4 py-3 text-gray-400">Credit-based (per-interaction)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-300">Token/Credit Rollover</td>
                    <td className="px-4 py-3 text-gray-400">✅ Yes (unused roll over)</td>
                    <td className="px-4 py-3 text-gray-400">✅ Yes (credit rollover)</td>
                  </tr>
                  <tr className="bg-gray-900/40">
                    <td className="px-4 py-3 font-medium text-gray-300">AI Models</td>
                    <td className="px-4 py-3 text-gray-400">✅ Multi-model (Claude, GPT-4o, Gemini)</td>
                    <td className="px-4 py-3 text-gray-400">Proprietary (no model selection)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-300">Frontend Frameworks</td>
                    <td className="px-4 py-3 text-gray-400">✅ React, Vue, Svelte, Next.js, Astro</td>
                    <td className="px-4 py-3 text-gray-400">React + Vite only</td>
                  </tr>
                  <tr className="bg-gray-900/40">
                    <td className="px-4 py-3 font-medium text-gray-300">Built-in Database</td>
                    <td className="px-4 py-3 text-gray-400">❌ None (manual setup)</td>
                    <td className="px-4 py-3 text-gray-400">✅ Supabase PostgreSQL</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-300">Authentication</td>
                    <td className="px-4 py-3 text-gray-400">❌ Manual setup</td>
                    <td className="px-4 py-3 text-gray-400">✅ Supabase Auth</td>
                  </tr>
                  <tr className="bg-gray-900/40">
                    <td className="px-4 py-3 font-medium text-gray-300">File Storage</td>
                    <td className="px-4 py-3 text-gray-400">❌ None</td>
                    <td className="px-4 py-3 text-gray-400">✅ Supabase Storage</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-300">Real-time Data</td>
                    <td className="px-4 py-3 text-gray-400">❌ None</td>
                    <td className="px-4 py-3 text-gray-400">✅ Supabase Realtime</td>
                  </tr>
                  <tr className="bg-gray-900/40">
                    <td className="px-4 py-3 font-medium text-gray-300">Deployment</td>
                    <td className="px-4 py-3 text-gray-400">✅ Built-in hosting + custom domains</td>
                    <td className="px-4 py-3 text-gray-400">✅ One-click deploy + custom domains</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-300">Code Editing</td>
                    <td className="px-4 py-3 text-gray-400">✅ Direct in-browser IDE</td>
                    <td className="px-4 py-3 text-gray-400">Chat-based only</td>
                  </tr>
                  <tr className="bg-gray-900/40">
                    <td className="px-4 py-3 font-medium text-gray-300">Terminal Access</td>
                    <td className="px-4 py-3 text-gray-400">✅ Full terminal (WebContainers)</td>
                    <td className="px-4 py-3 text-gray-400">❌ No</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-300">GitHub Integration</td>
                    <td className="px-4 py-3 text-gray-400">✅ Export/push</td>
                    <td className="px-4 py-3 text-gray-400">✅ Native auto-sync (better)</td>
                  </tr>
                  <tr className="bg-gray-900/40">
                    <td className="px-4 py-3 font-medium text-gray-300">Figma Import</td>
                    <td className="px-4 py-3 text-gray-400">✅ Yes</td>
                    <td className="px-4 py-3 text-gray-400">✅ Yes</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-300">Iteration Speed</td>
                    <td className="px-4 py-3 text-gray-400">✅ 2-3x faster (diffs feature)</td>
                    <td className="px-4 py-3 text-gray-400">Slower (rewrites larger sections)</td>
                  </tr>
                  <tr className="bg-gray-900/40">
                    <td className="px-4 py-3 font-medium text-gray-300">Planning Stage</td>
                    <td className="px-4 py-3 text-gray-400">Minimal</td>
                    <td className="px-4 py-3 text-gray-400">✅ Detailed plan before generating</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-300">Learning Curve</td>
                    <td className="px-4 py-3 text-gray-400">Medium (developer-oriented)</td>
                    <td className="px-4 py-3 text-gray-400">✅ Low (guided experience)</td>
                  </tr>
                  <tr className="bg-gray-900/40">
                    <td className="px-4 py-3 font-medium text-gray-300">Best For</td>
                    <td className="px-4 py-3 text-gray-400">Developers, rapid prototyping</td>
                    <td className="px-4 py-3 text-gray-400">Non-technical founders, MVPs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Pricing Deep Dive */}
          <section className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-white">
              Pricing Deep Dive: Tokens vs Credits
            </h2>
            <p className="mb-6 text-gray-300 leading-relaxed">
              Both tools cost $25/month at the entry paid tier, but their billing
              models create very different cost experiences in practice.
            </p>

            <div className="mb-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-orange-500/20 bg-gray-800/50 p-6">
                <h3 className="mb-4 text-xl font-bold text-orange-400">
                  Bolt.new{`'`}s Token Model
                </h3>
                <div className="space-y-3 text-gray-300">
                  <p><strong>Free:</strong> $0 — 300K tokens/day, 1M/month, Bolt branding</p>
                  <p><strong>Pro:</strong> $25/mo — 10M tokens, no daily limit, rollover, custom domains</p>
                  <p><strong>Teams:</strong> $30/user/mo — 10M tokens per member, admin controls, private NPM</p>
                  <p><strong>Enterprise:</strong> Custom — SSO, audit logs, 24/7 support, SLAs</p>
                </div>
                <div className="mt-4 rounded-lg bg-orange-500/10 p-3 text-sm text-orange-300">
                  <strong>Token reality:</strong> Complex prompts can burn 50K-200K tokens
                  per interaction. A single complex app session might consume 2-5M tokens.
                  Heavy users report hitting 10M mid-month.
                </div>
              </div>
              <div className="rounded-xl border border-pink-500/20 bg-gray-800/50 p-6">
                <h3 className="mb-4 text-xl font-bold text-pink-400">
                  Lovable{`'`}s Credit Model
                </h3>
                <div className="space-y-3 text-gray-300">
                  <p><strong>Free:</strong> $0 — 5 credits/day (up to 150/month)</p>
                  <p><strong>Pro:</strong> $25/mo — 100 credits + 5 daily bonus, rollover, custom domains</p>
                  <p><strong>Business:</strong> $50/mo — 100 credits, SSO, security center, unlimited users</p>
                  <p><strong>Enterprise:</strong> Custom — SCIM, audit logs, custom connectors</p>
                </div>
                <div className="mt-4 rounded-lg bg-pink-500/10 p-3 text-sm text-pink-300">
                  <strong>Credit reality:</strong> Each interaction costs 1 credit regardless
                  of complexity. With 100 base + ~150 daily bonus, you get ~250 interactions/month.
                  More predictable but can still run out on iteration-heavy projects.
                </div>
              </div>
            </div>

            <h3 className="mb-4 text-xl font-bold text-white">
              The Real Cost Comparison: Team Pricing Divergence
            </h3>
            <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-6">
              <p className="mb-4 text-gray-300">
                The pricing gap explodes at the team level. Bolt.new charges{" "}
                <strong>$30 per user per month</strong>. Lovable charges{" "}
                <strong>$50/month total for unlimited users</strong>.
              </p>
              <div className="space-y-2 text-gray-300">
                <p>• <strong>2-person team:</strong> Bolt $60/mo vs Lovable $50/mo (17% cheaper)</p>
                <p>• <strong>5-person team:</strong> Bolt $150/mo vs Lovable $50/mo (67% cheaper)</p>
                <p>• <strong>10-person team:</strong> Bolt $300/mo vs Lovable $50/mo (83% cheaper)</p>
                <p>• <strong>20-person team:</strong> Bolt $600/mo vs Lovable $50/mo (92% cheaper)</p>
              </div>
              <p className="mt-4 text-sm text-yellow-400">
                ⚠️ Note: Lovable{`'`}s shared plan means all team members share the same
                credit pool. A 10-person team on Business still only gets 100 credits/month
                total. More predictable cost, but potentially limiting if everyone{`'`}s
                building simultaneously.
              </p>
            </div>
          </section>

          {/* Speed & Iteration */}
          <section className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-white">
              Speed & Iteration: The Diffs Advantage
            </h2>
            <p className="mb-6 text-gray-300 leading-relaxed">
              Bolt.new{`'`}s single biggest technical advantage is its{" "}
              <strong>diffs feature</strong>. When you make a change, Bolt only rewrites
              the specific code that changed. Lovable rewrites larger code sections —
              sometimes entire files — for each iteration.
            </p>

            <div className="mb-8 rounded-xl border border-gray-700 bg-gray-800/50 p-6">
              <h3 className="mb-4 text-lg font-bold text-white">
                Head-to-Head Speed Test: Trello Clone
              </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <p className="font-medium text-white">Initial generation:</p>
                  <p>Bolt: ~30 seconds ⚡ | Lovable: ~60 seconds (includes planning stage)</p>
                </div>
                <div>
                  <p className="font-medium text-white">Adding dark theme:</p>
                  <p>Bolt: Instant diff (only CSS changes) | Lovable: Full component rewrite</p>
                </div>
                <div>
                  <p className="font-medium text-white">Adding boards + due dates + comments:</p>
                  <p>Bolt: Faster with fewer prompts | Lovable: Needed clarification but cleaner structure</p>
                </div>
                <div>
                  <p className="font-medium text-white">10-iteration session:</p>
                  <p>Bolt: ~8 minutes | Lovable: ~15 minutes (but with database and auth included)</p>
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              For rapid prototyping sessions where you{`'`}re making many small
              adjustments, Bolt.new{`'`}s speed compounds significantly. But Lovable{`'`}s
              {`"`}slower{`"`} approach includes full-stack setup that Bolt doesn{`'`}t do
              — so prompt-to-deployed-app time can actually favor Lovable.
            </p>
          </section>

          {/* Backend & Database */}
          <section className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-white">
              Backend & Database: The Decisive Gap
            </h2>
            <p className="mb-6 text-gray-300 leading-relaxed">
              This is where the two platforms diverge most sharply. The difference isn{`'`}t
              subtle — it{`'`}s fundamental.
            </p>

            <div className="mb-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-red-500/20 bg-gray-800/50 p-6">
                <h3 className="mb-3 text-lg font-bold text-orange-400">
                  Bolt.new: Frontend-First
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>❌ No built-in database</li>
                  <li>❌ No authentication system</li>
                  <li>❌ No file storage</li>
                  <li>❌ No real-time data</li>
                  <li>❌ No server-side API routes</li>
                  <li>✅ Unlimited databases (external, you connect)</li>
                  <li>✅ Choice of database provider</li>
                  <li>✅ Full control over backend architecture</li>
                </ul>
                <p className="mt-4 text-sm text-gray-400">
                  Bolt gives you freedom — but at the cost of doing backend work yourself.
                  You{`'`}ll need to provision Supabase, Firebase, or AWS separately,
                  write connection code, and handle auth flows manually.
                </p>
              </div>
              <div className="rounded-xl border border-green-500/20 bg-gray-800/50 p-6">
                <h3 className="mb-3 text-lg font-bold text-pink-400">
                  Lovable: Full-Stack Native
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>✅ PostgreSQL database (Supabase)</li>
                  <li>✅ Authentication (Supabase Auth)</li>
                  <li>✅ File storage (Supabase Storage)</li>
                  <li>✅ Real-time data (Supabase Realtime)</li>
                  <li>✅ Edge Functions (API routes)</li>
                  <li>❌ Locked into Supabase stack</li>
                  <li>❌ No Firebase, AWS, or custom backend</li>
                  <li>❌ Less architectural control</li>
                </ul>
                <p className="mt-4 text-sm text-gray-400">
                  Lovable auto-provisions a complete Supabase project with tables,
                  auth rules, and edge functions from a single prompt. Hours of
                  configuration eliminated — but you{`'`}re locked into Supabase.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-6">
              <h3 className="mb-3 text-lg font-bold text-yellow-400">
                The Lock-In Question
              </h3>
              <p className="text-gray-300">
                Lovable{`'`}s Supabase lock-in is both its greatest strength and weakness.
                For MVPs and prototypes, having everything auto-configured is magical. But
                if you outgrow Supabase or need a different backend (Firebase for real-time
                games, AWS for enterprise compliance, a custom Node/Python API), you{`'`}ll
                need to migrate — potentially rewriting significant portions. Bolt.new{`'`}s
                lack of built-in backend is painful upfront but gives you architectural
                freedom long-term.
              </p>
            </div>
          </section>

          {/* Code Quality */}
          <section className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-white">
              Code Quality & Developer Experience
            </h2>

            <div className="mb-8 overflow-x-auto rounded-xl border border-gray-700">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-700 bg-gray-800/80">
                    <th className="px-4 py-3 font-semibold text-gray-300">Dimension</th>
                    <th className="px-4 py-3 font-semibold text-orange-400">Bolt.new</th>
                    <th className="px-4 py-3 font-semibold text-pink-400">Lovable</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  <tr className="bg-gray-900/40">
                    <td className="px-4 py-3 font-medium text-gray-300">UI Polish</td>
                    <td className="px-4 py-3 text-gray-400">⭐⭐⭐⭐⭐ More polished hover effects, transitions</td>
                    <td className="px-4 py-3 text-gray-400">⭐⭐⭐⭐ Clean but slightly generic</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-300">Component Library</td>
                    <td className="px-4 py-3 text-gray-400">Varies by prompt (flexible)</td>
                    <td className="px-4 py-3 text-gray-400">shadcn/ui (consistent)</td>
                  </tr>
                  <tr className="bg-gray-900/40">
                    <td className="px-4 py-3 font-medium text-gray-300">Code Organization</td>
                    <td className="px-4 py-3 text-gray-400">Depends on user guidance</td>
                    <td className="px-4 py-3 text-gray-400">⭐ Opinionated structure</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-300">TypeScript Support</td>
                    <td className="px-4 py-3 text-gray-400">✅ Full</td>
                    <td className="px-4 py-3 text-gray-400">✅ Full</td>
                  </tr>
                  <tr className="bg-gray-900/40">
                    <td className="px-4 py-3 font-medium text-gray-300">Modularity</td>
                    <td className="px-4 py-3 text-gray-400">⭐ Cleaner with experienced prompts</td>
                    <td className="px-4 py-3 text-gray-400">Good for simple apps, degrades at scale</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-300">Refactoring Ease</td>
                    <td className="px-4 py-3 text-gray-400">⭐ Full IDE control</td>
                    <td className="px-4 py-3 text-gray-400">AI-dependent (chat-only)</td>
                  </tr>
                  <tr className="bg-gray-900/40">
                    <td className="px-4 py-3 font-medium text-gray-300">Mock Data</td>
                    <td className="px-4 py-3 text-gray-400">Sometimes</td>
                    <td className="px-4 py-3 text-gray-400">⭐ Included by default</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-300">Complex App Handling</td>
                    <td className="px-4 py-3 text-gray-400">⭐ Better (direct code fixes)</td>
                    <td className="px-4 py-3 text-gray-400">Quality degrades at scale</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-300 leading-relaxed">
              The developer experience split mirrors the target audience. Bolt.new{`'`}s
              full IDE with file tree, terminal, and code editor feels like VS Code in the
              cloud — powerful for developers, overwhelming for non-coders. Lovable{`'`}s
              conversational interface emphasizes the preview and the chat — accessible for
              everyone, but limiting for developers who want to make surgical code changes.
            </p>
          </section>

          {/* AI Model Comparison */}
          <section className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-white">
              AI Models: Multi-Model vs Proprietary
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-6">
                <h3 className="mb-3 text-lg font-bold text-orange-400">
                  Bolt.new: Model Marketplace
                </h3>
                <p className="mb-4 text-gray-300">
                  Bolt.new lets you choose between multiple AI models:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• <strong>Claude (Anthropic)</strong> — Best for complex reasoning, long context</li>
                  <li>• <strong>GPT-4o (OpenAI)</strong> — Strong general-purpose, fast</li>
                  <li>• <strong>Gemini (Google)</strong> — Good for multimodal tasks</li>
                  <li>• Switch models mid-project based on task</li>
                </ul>
                <p className="mt-4 text-sm text-gray-400">
                  Multi-model flexibility means you can use Claude for complex architecture
                  decisions and GPT-4o for quick UI tweaks. Power users love this control.
                </p>
              </div>
              <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-6">
                <h3 className="mb-3 text-lg font-bold text-pink-400">
                  Lovable: Opinionated AI
                </h3>
                <p className="mb-4 text-gray-300">
                  Lovable uses a proprietary AI system optimized for full-stack generation:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• No model selection — the system chooses</li>
                  <li>• Optimized for React + Supabase output</li>
                  <li>• Includes a planning stage before code generation</li>
                  <li>• Consistent output quality (same model every time)</li>
                </ul>
                <p className="mt-4 text-sm text-gray-400">
                  The opinionated approach reduces decision fatigue. You don{`'`}t need to
                  know which model is best — Lovable handles that. Tradeoff: no control
                  when the default model struggles with your use case.
                </p>
              </div>
            </div>
          </section>

          {/* Deployment & Hosting */}
          <section className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-white">
              Deployment & Hosting
            </h2>
            <p className="mb-6 text-gray-300 leading-relaxed">
              Both platforms now offer built-in hosting, but the experience differs significantly.
            </p>

            <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-6 mb-6">
              <div className="space-y-4 text-gray-300">
                <div>
                  <p className="font-medium text-white">Bolt.new Deployment:</p>
                  <p>Built-in website hosting with custom domain support on Pro+. Up to 333K
                  web requests on Free, 1M on Pro. No Bolt branding on paid plans. Can also
                  export and deploy to Netlify, Vercel, or Cloudflare Pages manually.</p>
                </div>
                <div>
                  <p className="font-medium text-white">Lovable Deployment:</p>
                  <p>One-click deployment to lovable.app subdomain or custom domain on Pro+.
                  Includes backend (Supabase) in the deployment — not just frontend. GitHub
                  auto-sync means you can also deploy via any CI/CD pipeline.</p>
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Both platforms have closed the deployment gap significantly in 2026. The key
              difference: Lovable{`'`}s deployment includes the <em>entire stack</em>
              (frontend + database + auth + storage), while Bolt.new{`'`}s hosting is
              frontend-focused. If your app needs a backend, Lovable{`'`}s one-click deploy
              is still meaningfully more complete.
            </p>
          </section>

          {/* Real-World Scenarios */}
          <section className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-white">
              6 Real-World Scenarios: Which Tool Wins?
            </h2>

            <div className="space-y-6">
              {[
                {
                  title: "1. Solo developer building a SaaS MVP",
                  winner: "Lovable",
                  color: "pink",
                  detail:
                    "Database, auth, payment integration, and deployment from prompts. Bolt.new would require manually connecting Supabase + Stripe + deploying — adding days to the timeline. Lovable gets you to a testable MVP in hours, not days.",
                },
                {
                  title: "2. Frontend developer iterating on UI components",
                  winner: "Bolt.new",
                  color: "orange",
                  detail:
                    "Direct code editing, multi-framework support, and 2-3x faster iterations via diffs. If you're building React components, Vue prototypes, or Svelte experiments, Bolt.new's IDE experience is purpose-built for this workflow.",
                },
                {
                  title: "3. Non-technical founder validating a business idea",
                  winner: "Lovable",
                  color: "pink",
                  detail:
                    "Guided conversational interface, structured planning stage, full-stack from prompts. No coding knowledge required for basic apps. Bolt.new's terminal and file tree would be intimidating without development experience.",
                },
                {
                  title: "4. Agency building client prototypes weekly",
                  winner: "Bolt.new",
                  color: "orange",
                  detail:
                    "Speed matters most when building multiple prototypes per week. Bolt.new's diffs feature and multi-framework support let you match each client's tech stack. Token rollover helps manage variable workloads.",
                },
                {
                  title: "5. Team of 5 building an internal tool",
                  winner: "Lovable",
                  color: "pink",
                  detail:
                    "Lovable Business at $50/month total vs Bolt.new Teams at $150/month (5 × $30). Lovable's shared workspace + auto-GitHub-sync + built-in backend makes team collaboration smoother. 67% cost savings.",
                },
                {
                  title: "6. Student learning web development",
                  winner: "Lovable",
                  color: "pink",
                  detail:
                    "50% student discount ($12.50/mo). Planning stage teaches app architecture. GitHub sync teaches version control. Supabase integration teaches database concepts. Lower barrier to entry with visual results that motivate learning.",
                },
              ].map((scenario, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-gray-700 bg-gray-800/50 p-6"
                >
                  <div className="mb-2 flex items-center gap-3">
                    <h3 className="text-lg font-bold text-white">{scenario.title}</h3>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${
                        scenario.color === "orange"
                          ? "bg-orange-500/20 text-orange-400"
                          : "bg-pink-500/20 text-pink-400"
                      }`}
                    >
                      → {scenario.winner}
                    </span>
                  </div>
                  <p className="text-gray-300">{scenario.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-gray-600 bg-gray-800/30 p-4 text-sm text-gray-400">
              <strong>Score:</strong> Bolt.new wins 2 scenarios, Lovable wins 4.
              Lovable{`'`}s full-stack approach covers more use cases. Bolt.new wins
              decisively for developers who need speed and framework control.
            </div>
          </section>

          {/* Power Combo */}
          <section className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-white">
              🔥 Power Combo: Use Both ($50/month)
            </h2>
            <div className="rounded-xl border border-purple-500/20 bg-purple-500/5 p-8">
              <p className="mb-6 text-gray-300 leading-relaxed">
                Many developers report the best results using both tools together.
                The combined cost of $50/month is still less than a single Cursor
                Business subscription or one hour of freelancer time.
              </p>
              <h3 className="mb-4 text-lg font-bold text-white">
                Optimal Workflow: Lovable → GitHub → Bolt.new
              </h3>
              <ol className="space-y-3 text-gray-300">
                <li>
                  <strong>Step 1 (Lovable):</strong> Generate full-stack app with database
                  schema, auth flows, API routes, and initial UI from conversational prompts
                </li>
                <li>
                  <strong>Step 2 (GitHub):</strong> Lovable auto-syncs to your repository
                </li>
                <li>
                  <strong>Step 3 (Bolt.new):</strong> Import from GitHub into Bolt.new for
                  rapid UI iteration using diffs — polish animations, responsive design,
                  micro-interactions
                </li>
                <li>
                  <strong>Step 4 (Deploy):</strong> Push from either platform or deploy via
                  your own Vercel/Netlify pipeline
                </li>
              </ol>
              <p className="mt-6 text-sm text-purple-300">
                This workflow combines Lovable{`'`}s full-stack generation (the hard part)
                with Bolt.new{`'`}s speed for frontend refinement (the fun part).
              </p>
            </div>
          </section>

          {/* Hidden Costs & Gotchas */}
          <section className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-white">
              Hidden Costs & Gotchas
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-orange-500/20 bg-gray-800/50 p-6">
                <h3 className="mb-4 text-lg font-bold text-orange-400">
                  Bolt.new Gotchas
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>
                    <strong>Token burn is real.</strong> Complex projects can exhaust 10M
                    tokens mid-month. Users report spending $40-100/month for serious
                    development.
                  </li>
                  <li>
                    <strong>No backend = hidden time cost.</strong> You save on subscription
                    but spend hours configuring Supabase, writing auth flows, and setting up
                    deployment pipelines.
                  </li>
                  <li>
                    <strong>Per-user team pricing scales fast.</strong> A 10-person team
                    costs $300/month — 6x Lovable Business.
                  </li>
                  <li>
                    <strong>Bolt branding on Free tier.</strong> Your deployed sites show
                    {`"`}Made with Bolt{`"`} — unprofessional for client work.
                  </li>
                  <li>
                    <strong>File upload limit.</strong> 10MB on Free, 100MB on Pro — large
                    assets need external hosting.
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-pink-500/20 bg-gray-800/50 p-6">
                <h3 className="mb-4 text-lg font-bold text-pink-400">
                  Lovable Gotchas
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>
                    <strong>Shared credits get competitive.</strong> Business plan{`'`}s
                    100 credits are shared across unlimited users — a 5-person team gets
                    20 interactions each per month.
                  </li>
                  <li>
                    <strong>Supabase lock-in is real.</strong> If you outgrow Supabase or
                    need Firebase/AWS, significant rewrite required.
                  </li>
                  <li>
                    <strong>React + Vite only.</strong> No Vue, Svelte, Next.js, or Astro.
                    If your stack is different, Lovable can{`'`}t help.
                  </li>
                  <li>
                    <strong>Quality degrades at scale.</strong> Simple apps shine. Complex
                    multi-feature apps accumulate technical debt and AI-generated code
                    becomes harder to maintain.
                  </li>
                  <li>
                    <strong>No direct code editing.</strong> All changes must go through
                    the chat interface — frustrating for developers who see a one-line fix
                    but can{`'`}t make it directly.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Competitive Landscape */}
          <section className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-white">
              Competitive Landscape 2026
            </h2>
            <p className="mb-6 text-gray-300 leading-relaxed">
              Bolt.new and Lovable aren{`'`}t the only players in the AI app builder space.
              Here{`'`}s how they compare to the broader competitive set.
            </p>

            <div className="overflow-x-auto rounded-xl border border-gray-700">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-700 bg-gray-800/80">
                    <th className="px-4 py-3 font-semibold text-gray-300">Tool</th>
                    <th className="px-4 py-3 font-semibold text-gray-300">Price</th>
                    <th className="px-4 py-3 font-semibold text-gray-300">Best For</th>
                    <th className="px-4 py-3 font-semibold text-gray-300">Key Advantage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  <tr className="bg-orange-500/5">
                    <td className="px-4 py-3 font-medium text-orange-400">Bolt.new</td>
                    <td className="px-4 py-3 text-gray-400">$25/mo</td>
                    <td className="px-4 py-3 text-gray-400">Developers, prototyping</td>
                    <td className="px-4 py-3 text-gray-400">Speed + multi-model + multi-framework</td>
                  </tr>
                  <tr className="bg-pink-500/5">
                    <td className="px-4 py-3 font-medium text-pink-400">Lovable</td>
                    <td className="px-4 py-3 text-gray-400">$25/mo</td>
                    <td className="px-4 py-3 text-gray-400">Non-technical founders, MVPs</td>
                    <td className="px-4 py-3 text-gray-400">Full-stack from one prompt</td>
                  </tr>
                  <tr className="bg-gray-900/40">
                    <td className="px-4 py-3 font-medium text-gray-300">
                      <Link href="/v0-vs-lovable" className="text-blue-400 hover:underline">v0</Link>
                    </td>
                    <td className="px-4 py-3 text-gray-400">$30/user/mo</td>
                    <td className="px-4 py-3 text-gray-400">React/Next.js developers</td>
                    <td className="px-4 py-3 text-gray-400">Best UI component quality (Vercel ecosystem)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-300">Replit Agent</td>
                    <td className="px-4 py-3 text-gray-400">$25/mo</td>
                    <td className="px-4 py-3 text-gray-400">Full-stack + collaboration</td>
                    <td className="px-4 py-3 text-gray-400">Multi-language, built-in hosting</td>
                  </tr>
                  <tr className="bg-gray-900/40">
                    <td className="px-4 py-3 font-medium text-gray-300">Google Stitch</td>
                    <td className="px-4 py-3 text-gray-400">Free tier</td>
                    <td className="px-4 py-3 text-gray-400">Google ecosystem users</td>
                    <td className="px-4 py-3 text-gray-400">Free entry, Gemini-powered</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-300">
                      <Link href="/cursor-vs-windsurf" className="text-blue-400 hover:underline">Cursor</Link>
                    </td>
                    <td className="px-4 py-3 text-gray-400">$20/mo</td>
                    <td className="px-4 py-3 text-gray-400">Professional developers</td>
                    <td className="px-4 py-3 text-gray-400">AI-powered IDE (local development)</td>
                  </tr>
                  <tr className="bg-gray-900/40">
                    <td className="px-4 py-3 font-medium text-gray-300">
                      <Link href="/claude-code-vs-cursor" className="text-blue-400 hover:underline">Claude Code</Link>
                    </td>
                    <td className="px-4 py-3 text-gray-400">$20/mo</td>
                    <td className="px-4 py-3 text-gray-400">Terminal-first developers</td>
                    <td className="px-4 py-3 text-gray-400">Autonomous agent, 1M context</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-300">Amazon Kiro</td>
                    <td className="px-4 py-3 text-gray-400">$19/mo</td>
                    <td className="px-4 py-3 text-gray-400">AWS developers</td>
                    <td className="px-4 py-3 text-gray-400">Spec-driven, enterprise compliance</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8">
              <h3 className="mb-4 text-xl font-bold text-white">
                4 Market Trends to Watch
              </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <p className="font-medium text-white">
                    1. The $25/Month Price War
                  </p>
                  <p>
                    Bolt, Lovable, Replit, and others have converged on ~$25/month. Google
                    Stitch{`'`}s free tier threatens to blow up this equilibrium. Expect
                    aggressive feature bundling as differentiation shifts from price to
                    capabilities.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-white">
                    2. Full-Stack Convergence
                  </p>
                  <p>
                    Bolt.new added hosting. Lovable is improving UI quality. v0 added agentic
                    capabilities. Every tool is converging toward {`"`}prompt to deployed app.{`"`}
                    The question is who gets there first without sacrificing quality.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-white">
                    3. Credit Anxiety Driving Churn
                  </p>
                  <p>
                    Both token and credit systems create anxiety. Users report stopping
                    mid-project to conserve allocation. Expect subscription models to evolve
                    toward {`"`}unlimited with fair use{`"`} (like Cursor{`'`}s model) to reduce
                    friction.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-white">
                    4. The {`"`}Use Both{`"`} Stable Equilibrium
                  </p>
                  <p>
                    Like Cursor + Claude Code, the developer community is settling on
                    multi-tool workflows. Bolt for speed, Lovable for full-stack, v0 for
                    UI components, Cursor for local development. The $50-100/month AI
                    tooling budget is becoming standard for professional developers.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Final Recommendation */}
          <section className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-white">
              Final Recommendation
            </h2>
            <div className="rounded-xl border border-gray-600 bg-gray-800/50 p-8">
              <p className="mb-6 text-lg text-gray-300 leading-relaxed">
                Bolt.new and Lovable aren{`'`}t competitors — they{`'`}re complementary
                tools for different phases of development and different types of builders.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-lg font-bold text-orange-400">
                    Bolt.new is for you if:
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>✅ You think in code and want IDE access</li>
                    <li>✅ Iteration speed is your bottleneck</li>
                    <li>✅ You need Vue, Svelte, or Astro (not just React)</li>
                    <li>✅ You want to choose your AI model</li>
                    <li>✅ You{`'`}re comfortable handling backend yourself</li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-3 text-lg font-bold text-pink-400">
                    Lovable is for you if:
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>✅ You want a complete app from a conversation</li>
                    <li>✅ Database and auth setup intimidates you</li>
                    <li>✅ You{`'`}re building a team product ($50 vs $150+)</li>
                    <li>✅ One-click deployment matters</li>
                    <li>✅ You{`'`}re a student (50% discount)</li>
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-gray-400">
                For the best results, consider using both ($50/month total): Lovable for
                full-stack generation, Bolt.new for rapid frontend iteration. It{`'`}s
                still cheaper than most single AI coding tools at their premium tier.
              </p>
            </div>
          </section>

          {/* Related Comparisons */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-bold text-white">
              Related Comparisons
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { href: "/v0-vs-lovable", label: "v0 vs Lovable" },
                { href: "/cursor-vs-windsurf", label: "Cursor vs Windsurf" },
                { href: "/claude-code-vs-cursor", label: "Claude Code vs Cursor" },
                { href: "/cursor-vs-github-copilot", label: "Cursor vs GitHub Copilot" },
                { href: "/deepseek-vs-claude", label: "DeepSeek vs Claude" },
                { href: "/claude-vs-gemini", label: "Claude vs Gemini" },
                { href: "/perplexity-vs-gemini", label: "Perplexity vs Gemini" },
                { href: "/", label: "Browse All AI Tools →" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-3 text-sm font-medium text-gray-300 transition-all hover:border-orange-500/50 hover:text-orange-400"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-2xl border border-gray-700 bg-gradient-to-r from-gray-800/50 to-gray-800/30 p-8 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white">
              Explore 3,700+ AI Tools
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-gray-400">
              Can{`'`}t decide between Bolt.new and Lovable? Browse our complete directory
              of AI tools to find the perfect match for your workflow.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition-all hover:bg-orange-600"
            >
              Browse AI Tools Directory →
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
