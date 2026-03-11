import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Copilot vs ChatGPT: Complete Comparison 2026",
  description:
    "Compare Microsoft Copilot vs ChatGPT. Detailed analysis of Microsoft 365 integration, pricing, coding, features, and which AI assistant is best for your needs in 2026.",
  keywords: [
    "Copilot vs ChatGPT",
    "ChatGPT vs Copilot",
    "Microsoft Copilot vs ChatGPT",
    "ChatGPT vs Microsoft Copilot",
    "best AI chatbot 2026",
    "Microsoft AI vs OpenAI",
    "Copilot or ChatGPT",
    "Copilot Pro vs ChatGPT Plus",
  ],
  openGraph: {
    title: "Copilot vs ChatGPT: Complete Comparison 2026",
    description:
      "In-depth comparison of Microsoft Copilot and OpenAI's ChatGPT. Microsoft 365 integration, pricing, features, and performance analysis.",
    url: "https://aisotools.com/copilot-vs-chatgpt",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/copilot-vs-chatgpt",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Microsoft Copilot the same as ChatGPT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, though they're related. Microsoft Copilot uses OpenAI's GPT models but is a separate product with Microsoft 365 integration, Bing search, and a different interface. ChatGPT is OpenAI's direct product with its own features like custom GPTs and plugins.",
      },
    },
    {
      "@type": "Question",
      name: "Is Copilot better than ChatGPT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Copilot is better for Microsoft 365 users who want AI integrated into Word, Excel, PowerPoint, and Outlook. ChatGPT is better for creative writing, coding, plugins, and general-purpose AI use. They use similar underlying models.",
      },
    },
    {
      "@type": "Question",
      name: "Is Microsoft Copilot free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Microsoft Copilot has a free tier with access to GPT-4o and basic features. Copilot Pro costs $20/month for priority access and Microsoft 365 app integration. Microsoft 365 Copilot for business costs $30/user/month.",
      },
    },
    {
      "@type": "Question",
      name: "Does Copilot use GPT-4?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Microsoft Copilot uses OpenAI's GPT-4o model. Microsoft has a major investment in OpenAI and integrates their latest models into Copilot. Both ChatGPT and Copilot use the same underlying AI technology.",
      },
    },
    {
      "@type": "Question",
      name: "Which is cheaper, Copilot or ChatGPT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both Copilot Pro and ChatGPT Plus cost $20/month for individual users. Copilot's free tier is more generous with GPT-4o access. For business, Microsoft 365 Copilot costs $30/user/month while ChatGPT Team costs $25/user/month.",
      },
    },
    {
      "@type": "Question",
      name: "Can Copilot generate images?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Copilot includes DALL-E 3 image generation through Microsoft Designer, available even on the free tier. ChatGPT also includes DALL-E 3 for Plus subscribers and GPT-4o native image generation.",
      },
    },
    {
      "@type": "Question",
      name: "Should I use Copilot or ChatGPT for coding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For coding assistance in the browser, ChatGPT is better with Code Interpreter and Canvas. For IDE integration, GitHub Copilot (a separate product at $10/month) is the best option. Microsoft Copilot is more focused on productivity tasks than coding.",
      },
    },
    {
      "@type": "Question",
      name: "Does Copilot work with Microsoft Office?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, this is Copilot's key advantage. With Copilot Pro ($20/month) and a Microsoft 365 subscription, you get AI directly in Word, Excel, PowerPoint, Outlook, and OneNote. ChatGPT has no native Microsoft Office integration.",
      },
    },
  ],
};

export default function CopilotVsChatGPTPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-white">
          Home
        </Link>
        <span className="mx-2">›</span>
        <Link href="/compare" className="hover:text-white">
          Compare
        </Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Copilot vs ChatGPT</span>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Copilot vs ChatGPT: Complete Comparison 2026
        </h1>
        <p className="text-xl text-gray-400 max-w-4xl">
          Microsoft Copilot vs OpenAI&apos;s ChatGPT — an ironic rivalry since Copilot is powered by OpenAI&apos;s
          own GPT models. This comparison covers Microsoft 365 integration, pricing, features, coding,
          and real-world performance to help you choose the right AI assistant.
        </p>
        <div className="flex flex-wrap gap-2 mt-6">
          <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
            Updated March 2026
          </span>
          <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
            10 min read
          </span>
        </div>
      </header>

      {/* Quick Answer */}
      <section className="bg-gradient-to-r from-cyan-600/10 to-blue-600/10 border border-cyan-500/20 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-bold mb-3">⚡ Quick Answer</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          <strong>Copilot</strong> is better for Microsoft 365 power users who want AI directly in Word, Excel,
          PowerPoint, and Outlook.
          <strong> ChatGPT</strong> is better for creative work, coding, custom GPTs, plugins, and general-purpose AI use.
        </p>
        <p className="text-gray-400">
          They use the same underlying GPT-4o model, so core intelligence is similar. The difference is in the
          ecosystem: Microsoft 365 integration vs OpenAI&apos;s custom GPTs and plugin marketplace.
        </p>
      </section>

      {/* Side-by-Side Comparison Table */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Copilot vs ChatGPT: Side-by-Side Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-gray-900 border border-gray-800 rounded-xl">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">Feature</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-cyan-400">Microsoft Copilot</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-blue-400">ChatGPT (GPT-4o)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr className="hover:bg-gray-800/50">
                <td className="px-6 py-4 font-medium">Company</td>
                <td className="px-6 py-4 text-center text-sm text-gray-400">Microsoft</td>
                <td className="px-6 py-4 text-center text-sm text-gray-400">OpenAI</td>
              </tr>
              <tr className="hover:bg-gray-800/50">
                <td className="px-6 py-4 font-medium">Underlying Model</td>
                <td className="px-6 py-4 text-center text-sm text-gray-400">GPT-4o (OpenAI)</td>
                <td className="px-6 py-4 text-center text-sm text-gray-400">GPT-4o / o1</td>
              </tr>
              <tr className="hover:bg-gray-800/50">
                <td className="px-6 py-4 font-medium">Free Tier</td>
                <td className="px-6 py-4 text-center text-sm text-gray-400">GPT-4o access, generous limits</td>
                <td className="px-6 py-4 text-center text-sm text-gray-400">GPT-4o mini, limited messages</td>
              </tr>
              <tr className="hover:bg-gray-800/50">
                <td className="px-6 py-4 font-medium">Paid (Individual)</td>
                <td className="px-6 py-4 text-center text-sm text-gray-400">$20/mo (Copilot Pro)</td>
                <td className="px-6 py-4 text-center text-sm text-gray-400">$20/mo (Plus)</td>
              </tr>
              <tr className="hover:bg-gray-800/50">
                <td className="px-6 py-4 font-medium">Paid (Business)</td>
                <td className="px-6 py-4 text-center text-sm text-gray-400">$30/user/mo (M365 Copilot)</td>
                <td className="px-6 py-4 text-center text-sm text-gray-400">$25/user/mo (Team)</td>
              </tr>
              <tr className="hover:bg-gray-800/50">
                <td className="px-6 py-4 font-medium">Web Search</td>
                <td className="px-6 py-4 text-center text-sm">
                  <span className="text-green-400">✓ Native Bing search</span>
                </td>
                <td className="px-6 py-4 text-center text-sm">
                  <span className="text-green-400">✓ Web browsing</span>
                </td>
              </tr>
              <tr className="hover:bg-gray-800/50">
                <td className="px-6 py-4 font-medium">Image Generation</td>
                <td className="px-6 py-4 text-center text-sm">
                  <span className="text-green-400">✓ DALL-E 3 (free!)</span>
                </td>
                <td className="px-6 py-4 text-center text-sm">
                  <span className="text-green-400">✓ DALL-E 3 / GPT-4o</span>
                </td>
              </tr>
              <tr className="hover:bg-gray-800/50">
                <td className="px-6 py-4 font-medium">Office Integration</td>
                <td className="px-6 py-4 text-center text-sm">
                  <span className="text-green-400">✓ Word, Excel, PPT, Outlook</span>
                </td>
                <td className="px-6 py-4 text-center text-sm">
                  <span className="text-red-400">✗ No Office integration</span>
                </td>
              </tr>
              <tr className="hover:bg-gray-800/50">
                <td className="px-6 py-4 font-medium">Custom GPTs</td>
                <td className="px-6 py-4 text-center text-sm">
                  <span className="text-yellow-400">⚡ Copilot GPTs (limited)</span>
                </td>
                <td className="px-6 py-4 text-center text-sm">
                  <span className="text-green-400">✓ GPT Store (1000s)</span>
                </td>
              </tr>
              <tr className="hover:bg-gray-800/50">
                <td className="px-6 py-4 font-medium">Code Interpreter</td>
                <td className="px-6 py-4 text-center text-sm">
                  <span className="text-red-400">✗ No</span>
                </td>
                <td className="px-6 py-4 text-center text-sm">
                  <span className="text-green-400">✓ Yes</span>
                </td>
              </tr>
              <tr className="hover:bg-gray-800/50">
                <td className="px-6 py-4 font-medium">Coding Ability</td>
                <td className="px-6 py-4 text-center text-sm">
                  <span className="text-green-400">★★★★☆</span>
                </td>
                <td className="px-6 py-4 text-center text-sm">
                  <span className="text-green-400">★★★★★</span>
                </td>
              </tr>
              <tr className="hover:bg-gray-800/50">
                <td className="px-6 py-4 font-medium">Creative Writing</td>
                <td className="px-6 py-4 text-center text-sm">
                  <span className="text-green-400">★★★★☆</span>
                </td>
                <td className="px-6 py-4 text-center text-sm">
                  <span className="text-green-400">★★★★★</span>
                </td>
              </tr>
              <tr className="hover:bg-gray-800/50">
                <td className="px-6 py-4 font-medium">Mobile Apps</td>
                <td className="px-6 py-4 text-center text-sm">
                  <span className="text-green-400">✓ iOS & Android</span>
                </td>
                <td className="px-6 py-4 text-center text-sm">
                  <span className="text-green-400">✓ iOS & Android</span>
                </td>
              </tr>
              <tr className="hover:bg-gray-800/50">
                <td className="px-6 py-4 font-medium">Voice Mode</td>
                <td className="px-6 py-4 text-center text-sm">
                  <span className="text-green-400">✓ Basic voice</span>
                </td>
                <td className="px-6 py-4 text-center text-sm">
                  <span className="text-green-400">✓ Advanced Voice</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Detailed Comparison Sections */}
      <section className="mb-16 space-y-12">
        <h2 className="text-3xl font-bold mb-8">In-Depth Comparison</h2>

        {/* Pricing */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">💰 Pricing & Value</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-cyan-400 mb-3">Microsoft Copilot</h4>
              <ul className="space-y-2 text-gray-400">
                <li><strong className="text-white">Free:</strong> GPT-4o access, DALL-E 3, Bing search</li>
                <li><strong className="text-white">Copilot Pro ($20/mo):</strong> Priority GPT-4o, M365 app integration</li>
                <li><strong className="text-white">M365 Copilot ($30/user/mo):</strong> Full business suite integration</li>
                <li><strong className="text-white">Note:</strong> Requires M365 subscription for Office features</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-blue-400 mb-3">ChatGPT</h4>
              <ul className="space-y-2 text-gray-400">
                <li><strong className="text-white">Free:</strong> GPT-4o mini with message limits</li>
                <li><strong className="text-white">Plus ($20/mo):</strong> GPT-4o, DALL-E 3, voice, plugins</li>
                <li><strong className="text-white">Team ($25/user/mo):</strong> Team workspace, admin tools</li>
                <li><strong className="text-white">Enterprise:</strong> Custom pricing, dedicated support</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-400 mt-4 text-sm">
            <strong>Winner:</strong> <span className="text-cyan-400">Copilot</span> — More generous free tier (GPT-4o + DALL-E 3 for free). Same $20/mo paid price. See our{" "}
            <Link href="/chatgpt-plus-pricing" className="text-blue-400 hover:underline">ChatGPT Plus pricing breakdown</Link>.
          </p>
        </div>

        {/* Microsoft 365 Integration */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">📎 Microsoft 365 Integration</h3>
          <p className="text-gray-400 mb-4">
            This is Copilot&apos;s defining feature — AI built directly into the Microsoft productivity suite.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-cyan-400 mb-3">Copilot</h4>
              <ul className="space-y-2 text-gray-400">
                <li>✓ AI in Word (draft, rewrite, summarize)</li>
                <li>✓ AI in Excel (analyze data, create formulas)</li>
                <li>✓ AI in PowerPoint (generate presentations)</li>
                <li>✓ AI in Outlook (draft emails, summarize threads)</li>
                <li>✓ AI in Teams (meeting summaries, action items)</li>
                <li>✓ AI in OneNote (organize, summarize)</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-blue-400 mb-3">ChatGPT</h4>
              <ul className="space-y-2 text-gray-400">
                <li>✗ No native Office integration</li>
                <li>✗ Manual copy-paste workflow</li>
                <li>✓ Can generate content to paste into Office</li>
                <li>✓ File upload and analysis</li>
                <li>✓ Third-party plugins for some workflows</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-400 mt-4 text-sm">
            <strong>Winner:</strong> <span className="text-cyan-400">Copilot</span> — If you use Microsoft 365, this integration is transformative.
          </p>
        </div>

        {/* Coding */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">💻 Coding & Development</h3>
          <p className="text-gray-400 mb-4">
            Note: <strong>Microsoft Copilot</strong> (the chatbot) is different from <strong>GitHub Copilot</strong> (the code autocomplete tool, $10/mo). Don&apos;t confuse them!
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-cyan-400 mb-3">Microsoft Copilot</h4>
              <ul className="space-y-2 text-gray-400">
                <li>✓ Can generate and explain code</li>
                <li>✓ Bing search for documentation</li>
                <li>✗ No code interpreter/sandbox</li>
                <li>✗ Not designed for coding workflows</li>
                <li>✗ GitHub Copilot is the coding-focused product</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-blue-400 mb-3">ChatGPT</h4>
              <ul className="space-y-2 text-gray-400">
                <li>✓ Excellent code generation and debugging</li>
                <li>✓ Code Interpreter runs code live</li>
                <li>✓ Canvas for collaborative code editing</li>
                <li>✓ Large developer community</li>
                <li>✓ Purpose-built for coding assistance</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-400 mt-4 text-sm">
            <strong>Winner:</strong> <span className="text-blue-400">ChatGPT</span> — Far better coding tools. For IDE autocomplete, see{" "}
            <Link href="/cursor-vs-github-copilot" className="text-blue-400 hover:underline">Cursor vs GitHub Copilot</Link>.
          </p>
        </div>

        {/* Search & Real-Time Info */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">🔍 Search & Real-Time Information</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-cyan-400 mb-3">Copilot</h4>
              <ul className="space-y-2 text-gray-400">
                <li>✓ Native Bing search integration</li>
                <li>✓ Always-on web access (even free tier)</li>
                <li>✓ Source citations with links</li>
                <li>✓ Real-time information access</li>
                <li>✓ Shopping and product comparisons</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-blue-400 mb-3">ChatGPT</h4>
              <ul className="space-y-2 text-gray-400">
                <li>✓ Web browsing for Plus users</li>
                <li>✓ Deep Research for comprehensive analysis</li>
                <li>✗ Less integrated search experience</li>
                <li>✗ Free tier has limited web access</li>
                <li>✓ Better analysis of search results</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-400 mt-4 text-sm">
            <strong>Winner:</strong> <span className="text-cyan-400">Copilot</span> — Better built-in search with Bing, especially on the free tier.
          </p>
        </div>

        {/* Writing & Content */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">✍️ Writing & Content Creation</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-cyan-400 mb-3">Copilot</h4>
              <ul className="space-y-2 text-gray-400">
                <li>✓ Good general writing</li>
                <li>✓ Word integration for document editing</li>
                <li>✓ Email drafting in Outlook</li>
                <li>✗ Less creative than ChatGPT</li>
                <li>✗ More template-driven outputs</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-blue-400 mb-3">ChatGPT</h4>
              <ul className="space-y-2 text-gray-400">
                <li>✓ Superior creative writing</li>
                <li>✓ Excellent blog and article generation</li>
                <li>✓ Canvas for iterative editing</li>
                <li>✓ Custom GPTs for specific writing tasks</li>
                <li>✓ More adaptable tone and style</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-400 mt-4 text-sm">
            <strong>Winner:</strong> <span className="text-blue-400">ChatGPT</span> — Better creative output, though Copilot excels at in-document editing.
          </p>
        </div>

        {/* Image Generation */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">🎨 Image Generation</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-cyan-400 mb-3">Copilot</h4>
              <ul className="space-y-2 text-gray-400">
                <li>✓ DALL-E 3 via Microsoft Designer</li>
                <li>✓ Available on free tier</li>
                <li>✓ 15 boosts/day (free), 100/day (Pro)</li>
                <li>✓ Good for quick image creation</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-blue-400 mb-3">ChatGPT</h4>
              <ul className="space-y-2 text-gray-400">
                <li>✓ DALL-E 3 + GPT-4o native generation</li>
                <li>✓ Better prompt understanding</li>
                <li>✓ Iterative editing and refinement</li>
                <li>✗ Requires Plus subscription</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-400 mt-4 text-sm">
            <strong>Winner:</strong> <span className="text-yellow-400">Tie</span> — Both use DALL-E 3. Copilot offers it free; ChatGPT has better integration.
          </p>
        </div>

        {/* Ecosystem */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">🔧 Ecosystem & Plugins</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-cyan-400 mb-3">Copilot</h4>
              <ul className="space-y-2 text-gray-400">
                <li>✓ Deep Microsoft ecosystem (Windows, Edge, Office)</li>
                <li>✓ Copilot GPTs (growing selection)</li>
                <li>✓ Built into Windows 11</li>
                <li>✗ Fewer third-party plugins</li>
                <li>✗ Smaller developer ecosystem</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-blue-400 mb-3">ChatGPT</h4>
              <ul className="space-y-2 text-gray-400">
                <li>✓ 1000+ plugins</li>
                <li>✓ GPT Store with custom GPTs</li>
                <li>✓ Zapier, Notion, Slack integrations</li>
                <li>✓ Robust API for developers</li>
                <li>✓ Largest AI app ecosystem</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-400 mt-4 text-sm">
            <strong>Winner:</strong> <span className="text-blue-400">ChatGPT</span> — More extensive plugin and custom GPT ecosystem.
          </p>
        </div>
      </section>

      {/* Use Cases */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Which Should You Choose?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-cyan-600/10 to-cyan-600/5 border border-cyan-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-cyan-400 mb-3">Choose Copilot if you:</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">→</span>
                <span>Use Microsoft 365 (Word, Excel, Outlook) daily</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">→</span>
                <span>Want free GPT-4o and DALL-E 3 access</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">→</span>
                <span>Need always-on Bing search integration</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">→</span>
                <span>Want AI built into your Windows workflow</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">→</span>
                <span>Need to generate presentations quickly</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">→</span>
                <span>Are in a Microsoft-centric enterprise</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-600/10 to-blue-600/5 border border-blue-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-400 mb-3">Choose ChatGPT if you:</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>Need the best creative writing and content</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>Do a lot of coding and programming</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>Want access to 1000+ plugins and custom GPTs</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>Need Code Interpreter and Canvas</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>Want advanced voice conversations</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>Prefer platform-agnostic AI</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Verdict */}
      <section className="bg-gradient-to-r from-cyan-600/10 to-blue-600/10 border border-cyan-500/20 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-bold mb-3">🏆 The Verdict</h2>
        <div className="space-y-4 text-gray-300">
          <p className="text-lg">
            Copilot and ChatGPT are siblings — same AI brain, different bodies.
          </p>
          <p>
            <strong className="text-cyan-400">Microsoft Copilot</strong> is the better choice if your workflow
            revolves around Microsoft 365. Having AI in Word, Excel, PowerPoint, and Outlook is genuinely
            transformative for productivity. The free tier with GPT-4o and DALL-E 3 is also hard to beat.
          </p>
          <p>
            <strong className="text-blue-400">ChatGPT</strong> wins as the standalone AI platform. Its plugin
            ecosystem, custom GPTs, Code Interpreter, Advanced Voice, and Canvas make it the most capable
            general-purpose AI assistant. For coding and creative work, ChatGPT is the clear leader.
          </p>
          <p className="text-lg font-semibold">
            💡 <strong>Recommendation:</strong> Microsoft 365 power users should get Copilot Pro. Everyone else
            should get ChatGPT Plus. Both cost $20/mo, so pick based on your ecosystem, not the AI model.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Is Microsoft Copilot the same as ChatGPT?</h3>
            <p className="text-gray-400">
              No, though they&apos;re related. Copilot uses OpenAI&apos;s GPT models but is a separate product with
              Microsoft 365 integration, Bing search, and its own interface. ChatGPT is OpenAI&apos;s direct product
              with unique features like custom GPTs and plugins.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Is Copilot better than ChatGPT?</h3>
            <p className="text-gray-400">
              Copilot is better for Microsoft 365 users who want AI in Word, Excel, and Outlook. ChatGPT is
              better for creative writing, coding, plugins, and standalone AI tasks. They use the same
              underlying GPT-4o model.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Is Microsoft Copilot free?</h3>
            <p className="text-gray-400">
              Yes, Copilot has a free tier with GPT-4o access and DALL-E 3 image generation. Copilot Pro
              costs $20/month for priority access and Microsoft 365 integration. M365 Copilot for business
              is $30/user/month.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Does Copilot use GPT-4?</h3>
            <p className="text-gray-400">
              Yes, Copilot uses OpenAI&apos;s GPT-4o model. Microsoft has a major partnership with OpenAI and
              integrates their latest models. Both ChatGPT and Copilot share the same underlying AI technology.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Which is cheaper, Copilot or ChatGPT?</h3>
            <p className="text-gray-400">
              Both cost $20/month for individual premium plans. Copilot&apos;s free tier is more generous
              (GPT-4o access vs GPT-4o mini). For business, M365 Copilot is $30/user/month while ChatGPT
              Team is $25/user/month.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Can Copilot generate images?</h3>
            <p className="text-gray-400">
              Yes, Copilot includes DALL-E 3 image generation through Microsoft Designer, available even on
              the free tier. ChatGPT also includes DALL-E 3 but requires a Plus subscription.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Should I use Copilot or ChatGPT for coding?</h3>
            <p className="text-gray-400">
              For coding, ChatGPT is better with Code Interpreter and Canvas. For IDE autocomplete, GitHub
              Copilot ($10/month, separate product) is the best option. Microsoft Copilot focuses on
              productivity, not coding.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Does Copilot work with Microsoft Office?</h3>
            <p className="text-gray-400">
              Yes, with Copilot Pro ($20/month) and a Microsoft 365 subscription, you get AI directly in
              Word, Excel, PowerPoint, Outlook, and OneNote. ChatGPT has no native Microsoft Office integration.
            </p>
          </div>
        </div>
      </section>

      {/* Related Comparisons */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Related Comparisons</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/chatgpt-vs-gemini" className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-gray-600 transition">
            <h3 className="font-semibold mb-1">ChatGPT vs Gemini</h3>
            <p className="text-sm text-gray-400">OpenAI vs Google&apos;s AI assistant</p>
          </Link>
          <Link href="/chatgpt-vs-claude" className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-gray-600 transition">
            <h3 className="font-semibold mb-1">ChatGPT vs Claude</h3>
            <p className="text-sm text-gray-400">OpenAI vs Anthropic comparison</p>
          </Link>
          <Link href="/cursor-vs-github-copilot" className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-gray-600 transition">
            <h3 className="font-semibold mb-1">Cursor vs GitHub Copilot</h3>
            <p className="text-sm text-gray-400">AI code editors compared</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-cyan-600/20 to-cyan-600/10 border border-cyan-500/30 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Try Microsoft Copilot</h3>
          <p className="text-gray-400 mb-6">
            Best for Microsoft 365 and free GPT-4o access
          </p>
          <a
            href="https://copilot.microsoft.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Start with Copilot →
          </a>
        </div>

        <div className="bg-gradient-to-br from-blue-600/20 to-blue-600/10 border border-blue-500/30 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Try ChatGPT</h3>
          <p className="text-gray-400 mb-6">
            Best for coding, writing, and plugins
          </p>
          <a
            href="https://chat.openai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Start with ChatGPT →
          </a>
        </div>
      </section>
    </div>
  );
}
