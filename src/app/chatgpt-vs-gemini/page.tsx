import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ChatGPT vs Gemini: Complete Comparison 2026",
  description:
    "Compare ChatGPT vs Google Gemini. Detailed analysis of Google integration, multimodal capabilities, pricing, accuracy, plugins, and which AI chatbot is best for your needs.",
  keywords: [
    "ChatGPT vs Gemini",
    "Gemini vs ChatGPT",
    "Google Gemini comparison",
    "ChatGPT Gemini difference",
    "best AI chatbot",
    "Google AI vs OpenAI",
  ],
  openGraph: {
    title: "ChatGPT vs Gemini: Complete Comparison 2026",
    description:
      "In-depth comparison of ChatGPT and Google Gemini. Features, pricing, Google Workspace integration, and performance analysis.",
    url: "https://aisotools.com/chatgpt-vs-gemini",
    type: "article",
  },
  alternates: {
    canonical: "https://aisotools.com/chatgpt-vs-gemini",
  },
};

export default function ChatGPTvsGeminiPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
        <span className="text-gray-300">ChatGPT vs Gemini</span>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          ChatGPT vs Gemini: Complete Comparison 2026
        </h1>
        <p className="text-xl text-gray-400 max-w-4xl">
          OpenAI's ChatGPT vs Google's Gemini — which AI assistant is better? This comprehensive
          comparison covers Google Workspace integration, multimodal capabilities, pricing, accuracy,
          plugins, and real-world performance to help you choose.
        </p>
        <div className="flex flex-wrap gap-2 mt-6">
          <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
            Updated February 2026
          </span>
          <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
            11 min read
          </span>
        </div>
      </header>

      {/* Quick Answer */}
      <section className="bg-gradient-to-r from-blue-600/10 to-green-600/10 border border-blue-500/20 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-bold mb-3">⚡ Quick Answer</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          <strong>ChatGPT</strong> is better for creative writing, coding, plugins, and established workflows.
          <strong> Gemini</strong> excels with Google Workspace integration, real-time search, multimodal input,
          and research tasks.
        </p>
        <p className="text-gray-400">
          Choose ChatGPT for general-purpose AI with the best ecosystem. Choose Gemini if you're deeply
          embedded in Google's ecosystem or need multimodal capabilities and current information.
        </p>
      </section>

      {/* Side-by-Side Comparison Table */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">ChatGPT vs Gemini: Side-by-Side Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-gray-900 border border-gray-800 rounded-xl">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">Feature</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-blue-400">ChatGPT (GPT-4o)</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-green-500">Google Gemini</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr className="hover:bg-gray-800/50">
                <td className="px-6 py-4 font-medium">Pricing (Free)</td>
                <td className="px-6 py-4 text-center text-sm text-gray-400">GPT-4o mini, limited</td>
                <td className="px-6 py-4 text-center text-sm text-gray-400">Gemini 2.0 Flash, generous</td>
              </tr>
              <tr className="hover:bg-gray-800/50">
                <td className="px-6 py-4 font-medium">Pricing (Paid)</td>
                <td className="px-6 py-4 text-center text-sm text-gray-400">$20/mo (Plus)</td>
                <td className="px-6 py-4 text-center text-sm text-gray-400">$19.99/mo (Google One AI Premium)</td>
              </tr>
              <tr className="hover:bg-gray-800/50">
                <td className="px-6 py-4 font-medium">Company</td>
                <td className="px-6 py-4 text-center text-sm text-gray-400">OpenAI</td>
                <td className="px-6 py-4 text-center text-sm text-gray-400">Google</td>
              </tr>
              <tr className="hover:bg-gray-800/50">
                <td className="px-6 py-4 font-medium">Context Window</td>
                <td className="px-6 py-4 text-center text-sm text-gray-400">128K tokens</td>
                <td className="px-6 py-4 text-center text-sm text-gray-400">2M tokens</td>
              </tr>
              <tr className="hover:bg-gray-800/50">
                <td className="px-6 py-4 font-medium">Real-time Search</td>
                <td className="px-6 py-4 text-center text-sm">
                  <span className="text-green-400">✓ Limited</span>
                </td>
                <td className="px-6 py-4 text-center text-sm">
                  <span className="text-green-400">✓ Native Google Search</span>
                </td>
              </tr>
              <tr className="hover:bg-gray-800/50">
                <td className="px-6 py-4 font-medium">Multimodal Input</td>
                <td className="px-6 py-4 text-center text-sm">
                  <span className="text-green-400">✓ Images, text</span>
                </td>
                <td className="px-6 py-4 text-center text-sm">
                  <span className="text-green-400">✓ Text, images, video, audio</span>
                </td>
              </tr>
              <tr className="hover:bg-gray-800/50">
                <td className="px-6 py-4 font-medium">Image Generation</td>
                <td className="px-6 py-4 text-center text-sm">
                  <span className="text-green-400">✓ DALL-E 3</span>
                </td>
                <td className="px-6 py-4 text-center text-sm">
                  <span className="text-green-400">✓ Imagen 3</span>
                </td>
              </tr>
              <tr className="hover:bg-gray-800/50">
                <td className="px-6 py-4 font-medium">Coding Ability</td>
                <td className="px-6 py-4 text-center text-sm">
                  <span className="text-green-400">★★★★★</span>
                </td>
                <td className="px-6 py-4 text-center text-sm">
                  <span className="text-green-400">★★★★☆</span>
                </td>
              </tr>
              <tr className="hover:bg-gray-800/50">
                <td className="px-6 py-4 font-medium">Creative Writing</td>
                <td className="px-6 py-4 text-center text-sm">
                  <span className="text-green-400">★★★★★</span>
                </td>
                <td className="px-6 py-4 text-center text-sm">
                  <span className="text-green-400">★★★★☆</span>
                </td>
              </tr>
              <tr className="hover:bg-gray-800/50">
                <td className="px-6 py-4 font-medium">Research & Fact-Checking</td>
                <td className="px-6 py-4 text-center text-sm">
                  <span className="text-green-400">★★★★☆</span>
                </td>
                <td className="px-6 py-4 text-center text-sm">
                  <span className="text-green-400">★★★★★</span>
                </td>
              </tr>
              <tr className="hover:bg-gray-800/50">
                <td className="px-6 py-4 font-medium">Google Workspace</td>
                <td className="px-6 py-4 text-center text-sm">
                  <span className="text-red-400">✗ No integration</span>
                </td>
                <td className="px-6 py-4 text-center text-sm">
                  <span className="text-green-400">✓ Native integration</span>
                </td>
              </tr>
              <tr className="hover:bg-gray-800/50">
                <td className="px-6 py-4 font-medium">Plugins/Extensions</td>
                <td className="px-6 py-4 text-center text-sm">
                  <span className="text-green-400">✓ 1000+ plugins</span>
                </td>
                <td className="px-6 py-4 text-center text-sm">
                  <span className="text-yellow-400">⚡ Extensions (growing)</span>
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
                <td className="px-6 py-4 font-medium">Voice Interaction</td>
                <td className="px-6 py-4 text-center text-sm">
                  <span className="text-green-400">✓ Voice mode</span>
                </td>
                <td className="px-6 py-4 text-center text-sm">
                  <span className="text-green-400">✓ Voice input</span>
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
              <h4 className="text-xl font-semibold text-blue-400 mb-3">ChatGPT</h4>
              <ul className="space-y-2 text-gray-400">
                <li><strong className="text-white">Free:</strong> GPT-4o mini with message limits</li>
                <li><strong className="text-white">Plus ($20/mo):</strong> GPT-4o, DALL-E 3, faster responses, priority access</li>
                <li><strong className="text-white">Team ($25/user/mo):</strong> Team workspace, admin tools</li>
                <li><strong className="text-white">Enterprise:</strong> Custom pricing, dedicated support</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-green-500 mb-3">Gemini</h4>
              <ul className="space-y-2 text-gray-400">
                <li><strong className="text-white">Free:</strong> Gemini 2.0 Flash with generous limits</li>
                <li><strong className="text-white">Google One AI Premium ($19.99/mo):</strong> Gemini Advanced (Ultra), 2TB storage, Google Workspace features</li>
                <li><strong className="text-white">Workspace Add-on:</strong> $20/user/mo for business</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-400 mt-4 text-sm">
            <strong>Winner:</strong> <span className="text-green-500">Gemini</span> — Slightly cheaper at $19.99/mo and includes 2TB Google One storage.
          </p>
        </div>

        {/* Google Integration */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">🔗 Google Workspace Integration</h3>
          <p className="text-gray-400 mb-4">
            This is Gemini's killer feature. Native integration with Gmail, Docs, Sheets, Drive, and more.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-blue-400 mb-3">ChatGPT</h4>
              <ul className="space-y-2 text-gray-400">
                <li>✗ No native Google Workspace integration</li>
                <li>✗ Cannot access Gmail, Docs, or Drive</li>
                <li>✓ Third-party plugins available (limited)</li>
                <li>✗ Manual copy-paste workflow</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-green-500 mb-3">Gemini</h4>
              <ul className="space-y-2 text-gray-400">
                <li>✓ Read and analyze Gmail messages</li>
                <li>✓ Access Google Docs, Sheets, Slides</li>
                <li>✓ Search across Drive files</li>
                <li>✓ Integrated with Google Calendar</li>
                <li>✓ Works with Google Maps and Flights</li>
                <li>✓ Seamless workflow within Google ecosystem</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-400 mt-4 text-sm">
            <strong>Winner:</strong> <span className="text-green-500">Gemini</span> — Unmatched for Google Workspace users.
          </p>
        </div>

        {/* Multimodal Capabilities */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">🎨 Multimodal Capabilities</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-blue-400 mb-3">ChatGPT</h4>
              <ul className="space-y-2 text-gray-400">
                <li>✓ Image input and analysis (Vision)</li>
                <li>✓ DALL-E 3 image generation</li>
                <li>✓ Voice conversations</li>
                <li>✗ No video input</li>
                <li>✗ No audio file analysis</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-green-500 mb-3">Gemini</h4>
              <ul className="space-y-2 text-gray-400">
                <li>✓ Image input and analysis</li>
                <li>✓ Imagen 3 image generation</li>
                <li>✓ Video understanding (analyze videos)</li>
                <li>✓ Audio file analysis</li>
                <li>✓ Voice input</li>
                <li>✓ True multimodal AI</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-400 mt-4 text-sm">
            <strong>Winner:</strong> <span className="text-green-500">Gemini</span> — More comprehensive multimodal capabilities.
          </p>
        </div>

        {/* Real-time Information */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">🔍 Real-Time Search & Current Information</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-blue-400 mb-3">ChatGPT</h4>
              <ul className="space-y-2 text-gray-400">
                <li>✓ Web browsing capability (Plus/Team)</li>
                <li>✗ Uses Bing search (not as comprehensive)</li>
                <li>✗ Not always reliable with current events</li>
                <li>✗ Sometimes provides outdated info</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-green-500 mb-3">Gemini</h4>
              <ul className="space-y-2 text-gray-400">
                <li>✓ Native Google Search integration</li>
                <li>✓ Real-time information access</li>
                <li>✓ Excellent for research and fact-checking</li>
                <li>✓ Up-to-date news and current events</li>
                <li>✓ Better source citations</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-400 mt-4 text-sm">
            <strong>Winner:</strong> <span className="text-green-500">Gemini</span> — Google Search integration is a huge advantage.
          </p>
        </div>

        {/* Coding & Programming */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">💻 Coding & Programming</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-blue-400 mb-3">ChatGPT</h4>
              <ul className="space-y-2 text-gray-400">
                <li>✓ Excellent code generation</li>
                <li>✓ Strong debugging capabilities</li>
                <li>✓ Code interpreter/Advanced Data Analysis</li>
                <li>✓ Large community and examples</li>
                <li>✓ Better established for coding tasks</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-green-500 mb-3">Gemini</h4>
              <ul className="space-y-2 text-gray-400">
                <li>✓ Good code generation</li>
                <li>✓ Decent debugging</li>
                <li>✗ Less refined than ChatGPT for code</li>
                <li>✗ Smaller coding community</li>
                <li>✗ Less consistent with complex code</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-400 mt-4 text-sm">
            <strong>Winner:</strong> <span className="text-blue-400">ChatGPT</span> — More reliable and established for coding.
          </p>
        </div>

        {/* Writing & Content */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">✍️ Writing & Content Creation</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-blue-400 mb-3">ChatGPT</h4>
              <ul className="space-y-2 text-gray-400">
                <li>✓ More creative and engaging tone</li>
                <li>✓ Better storytelling</li>
                <li>✓ Excellent for blog posts and articles</li>
                <li>✓ Strong marketing copy</li>
                <li>✓ More natural conversational style</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-green-500 mb-3">Gemini</h4>
              <ul className="space-y-2 text-gray-400">
                <li>✓ Good for factual content</li>
                <li>✓ Better at research-based writing</li>
                <li>✓ Can pull real-time data</li>
                <li>✗ Less creative flair</li>
                <li>✗ More "corporate" tone</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-400 mt-4 text-sm">
            <strong>Winner:</strong> <span className="text-blue-400">ChatGPT</span> — Superior for creative and engaging content.
          </p>
        </div>

        {/* Plugins & Extensions */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">🔧 Plugins & Extensions</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-blue-400 mb-3">ChatGPT</h4>
              <ul className="space-y-2 text-gray-400">
                <li>✓ 1000+ plugins available</li>
                <li>✓ Custom GPTs marketplace</li>
                <li>✓ Zapier, Notion, Slack integrations</li>
                <li>✓ Large developer ecosystem</li>
                <li>✓ Well-established plugin architecture</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-green-500 mb-3">Gemini</h4>
              <ul className="space-y-2 text-gray-400">
                <li>✓ Extensions (YouTube, Maps, Flights, Hotels)</li>
                <li>✓ Native Google services integration</li>
                <li>✗ Smaller extension ecosystem</li>
                <li>✗ Fewer third-party integrations</li>
                <li>✓ Growing but not as mature</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-400 mt-4 text-sm">
            <strong>Winner:</strong> <span className="text-blue-400">ChatGPT</span> — Far more extensive plugin ecosystem.
          </p>
        </div>

        {/* Accuracy & Reliability */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">✓ Accuracy & Reliability</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-blue-400 mb-3">ChatGPT</h4>
              <ul className="space-y-2 text-gray-400">
                <li>✓ Very reliable for most tasks</li>
                <li>✓ Consistent performance</li>
                <li>✗ Knowledge cutoff limitations</li>
                <li>✗ Can hallucinate facts</li>
                <li>✓ Good uptime and availability</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-green-500 mb-3">Gemini</h4>
              <ul className="space-y-2 text-gray-400">
                <li>✓ Better with factual information</li>
                <li>✓ Real-time data access</li>
                <li>✓ Google Search verification</li>
                <li>✗ Occasionally overly cautious</li>
                <li>✓ Excellent uptime</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-400 mt-4 text-sm">
            <strong>Winner:</strong> <span className="text-green-500">Gemini</span> — Slight edge for factual accuracy with real-time search.
          </p>
        </div>
      </section>

      {/* Use Cases */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Which Should You Choose?</h2>
        <div className="grid md:grid-cols-2 gap-6">
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
                <span>Want access to 1000+ plugins</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>Need image generation (DALL-E 3)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>Want custom GPTs</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">→</span>
                <span>Prefer the most established AI platform</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-600/10 to-green-600/5 border border-green-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-green-500 mb-3">Choose Gemini if you:</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">→</span>
                <span>Use Google Workspace heavily (Gmail, Docs, Drive)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">→</span>
                <span>Need real-time search and current information</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">→</span>
                <span>Want multimodal input (video, audio analysis)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">→</span>
                <span>Do research and fact-checking work</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">→</span>
                <span>Want 2TB Google One storage included</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">→</span>
                <span>Prefer Google's ecosystem and privacy</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Verdict */}
      <section className="bg-gradient-to-r from-blue-600/10 to-green-600/10 border border-blue-500/20 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-bold mb-3">🏆 The Verdict</h2>
        <div className="space-y-4 text-gray-300">
          <p className="text-lg">
            The winner depends entirely on your ecosystem and use case.
          </p>
          <p>
            <strong className="text-blue-400">ChatGPT</strong> remains the superior general-purpose AI with better
            creative writing, coding abilities, and the most extensive plugin ecosystem. It's the safe choice for
            most users and the established standard.
          </p>
          <p>
            <strong className="text-green-500">Gemini</strong> is the clear winner if you're embedded in Google's
            ecosystem. The native Gmail, Docs, and Drive integration is transformative for productivity. Its
            real-time search and multimodal capabilities also give it an edge for research and current information.
          </p>
          <p className="text-lg font-semibold">
            💡 <strong>Recommendation:</strong> If you use Google Workspace for work, get Gemini. If you do a lot
            of coding or creative work, get ChatGPT. Both tools are excellent and competitively priced at ~$20/mo.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Is Gemini as good as ChatGPT?</h3>
            <p className="text-gray-400">
              Gemini is excellent for research, Google Workspace integration, and real-time information. ChatGPT
              is better for creative writing, coding, and has a larger plugin ecosystem. Both are top-tier AI
              assistants with different strengths.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Can Gemini access my Gmail and Google Docs?</h3>
            <p className="text-gray-400">
              Yes! With Google One AI Premium ($19.99/mo), Gemini can read your Gmail, access Google Docs, search
              your Drive, and integrate with Calendar. This is Gemini's killer feature that ChatGPT doesn't have.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Which is better for coding?</h3>
            <p className="text-gray-400">
              ChatGPT is generally better for coding. It has more reliable code generation, better debugging, and
              a larger developer community with more examples. Gemini is decent but not as refined for programming.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Does Gemini have plugins like ChatGPT?</h3>
            <p className="text-gray-400">
              Gemini has Extensions (for YouTube, Maps, Flights, Hotels, etc.) but not nearly as many as ChatGPT's
              1000+ plugins. However, its native Google services integration often makes up for fewer third-party
              plugins.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Which has better free tier?</h3>
            <p className="text-gray-400">
              Gemini's free tier is more generous with Gemini 2.0 Flash and higher message limits. ChatGPT's free
              tier uses GPT-4o mini with stricter limits. Both are excellent for trying the service.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Can I use both ChatGPT and Gemini?</h3>
            <p className="text-gray-400">
              Absolutely! Many professionals use both. Use Gemini for Google Workspace tasks and research, ChatGPT
              for creative work and coding. At ~$20/mo each, having both gives you the best of both worlds.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-600/20 to-blue-600/10 border border-blue-500/30 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Try ChatGPT</h3>
          <p className="text-gray-400 mb-6">
            Best for creative work, coding, and extensive plugins
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

        <div className="bg-gradient-to-br from-green-600/20 to-green-600/10 border border-green-500/30 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Try Gemini</h3>
          <p className="text-gray-400 mb-6">
            Best for Google Workspace and real-time research
          </p>
          <a
            href="https://gemini.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Start with Gemini →
          </a>
        </div>
      </section>
    </div>
  );
}
