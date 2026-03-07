import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Notion AI Pricing 2026: Plans, Costs & What They Don\'t Tell You',
  description: 'Complete breakdown of Notion AI pricing in 2026. Free, Plus ($10/user), Business ($20/user), Enterprise costs. Hidden fees exposed. Real cost scenarios. vs competitors comparison.',
  keywords: 'notion ai pricing, notion cost, notion ai cost, how much does notion cost, notion ai plans, notion pricing 2026, notion business pricing, notion ai add-on',
  openGraph: {
    title: 'Notion AI Pricing 2026: Plans, Costs & What They Don\'t Tell You',
    description: 'Complete breakdown of Notion AI pricing in 2026. Free, Plus ($10/user), Business ($20/user), Enterprise costs. Hidden fees exposed.',
    type: 'article',
  },
};

export default function NotionAIPricingPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-12">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Notion AI Pricing 2026: Plans, Costs & What They Don't Tell You
        </h1>
        <p className="text-xl text-gray-600">
          Complete breakdown of Notion AI pricing in 2026. Free, Plus ($10/user), Business ($20/user with AI included), Enterprise costs. Hidden fees exposed. Real cost scenarios. vs competitors comparison.
        </p>
        <div className="mt-6 flex gap-4 text-sm text-gray-500">
          <time dateTime="2026-03-07">Updated March 7, 2026</time>
          <span>•</span>
          <span>16-minute read</span>
        </div>
      </header>

      <nav className="mb-12 rounded-lg border border-gray-200 bg-gray-50 p-6">
        <h2 className="mb-4 text-lg font-semibold">Quick Navigation</h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          <li><a href="#pricing-overview" className="text-blue-600 hover:underline">Pricing Overview</a></li>
          <li><a href="#ai-pricing-change" className="text-blue-600 hover:underline">2025 AI Pricing Change</a></li>
          <li><a href="#plans-breakdown" className="text-blue-600 hover:underline">Plans Breakdown</a></li>
          <li><a href="#real-costs" className="text-blue-600 hover:underline">Real Cost Scenarios</a></li>
          <li><a href="#hidden-costs" className="text-blue-600 hover:underline">Hidden Costs</a></li>
          <li><a href="#vs-competitors" className="text-blue-600 hover:underline">vs Competitors</a></li>
          <li><a href="#decision-framework" className="text-blue-600 hover:underline">Decision Framework</a></li>
          <li><a href="#faq" className="text-blue-600 hover:underline">FAQ</a></li>
        </ul>
      </nav>

      <section id="pricing-overview" className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Notion AI Pricing at a Glance (2026)</h2>
        
        <div className="mb-8 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-3 text-left font-semibold">Plan</th>
                <th className="border border-gray-300 p-3 text-left font-semibold">Monthly Price</th>
                <th className="border border-gray-300 p-3 text-left font-semibold">Annual Price</th>
                <th className="border border-gray-300 p-3 text-left font-semibold">AI Access</th>
                <th className="border border-gray-300 p-3 text-left font-semibold">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3 font-medium">Free</td>
                <td className="border border-gray-300 p-3">$0</td>
                <td className="border border-gray-300 p-3">$0</td>
                <td className="border border-gray-300 p-3">Limited trial (~20 responses)</td>
                <td className="border border-gray-300 p-3">Individuals, students, personal use</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-3 font-medium">Plus</td>
                <td className="border border-gray-300 p-3">$12/user</td>
                <td className="border border-gray-300 p-3">$10/user</td>
                <td className="border border-gray-300 p-3">Limited trial only</td>
                <td className="border border-gray-300 p-3">Small teams, freelancers (no AI)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-medium">Business</td>
                <td className="border border-gray-300 p-3">$24/user</td>
                <td className="border border-gray-300 p-3">$20/user</td>
                <td className="border border-gray-300 p-3"><strong>Full AI included</strong></td>
                <td className="border border-gray-300 p-3">Teams needing AI features</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-3 font-medium">Enterprise</td>
                <td className="border border-gray-300 p-3">Custom</td>
                <td className="border border-gray-300 p-3">Custom</td>
                <td className="border border-gray-300 p-3">Full AI + advanced security</td>
                <td className="border border-gray-300 p-3">Large orgs, Fortune 500</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-6">
          <h3 className="mb-2 font-semibold text-amber-900">⚠️ Critical Update: AI Pricing Changed May 2025</h3>
          <p className="text-amber-800">
            Notion fundamentally changed AI pricing in May 2025. Previously, AI was a $8-10/user add-on for any plan. <strong>Now AI is ONLY available on Business ($20/user) and Enterprise plans.</strong> New Free/Plus users get ~20 AI trial responses and cannot purchase full AI access. Existing AI subscribers are grandfathered at old pricing.
          </p>
        </div>
      </section>

      <section id="ai-pricing-change" className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">The 2025 AI Pricing Change: What You Need to Know</h2>
        
        <p className="mb-6 text-lg leading-relaxed">
          On May 13, 2025, Notion made a controversial pricing change that fundamentally altered how teams access AI features. Understanding this change is critical before making a purchase decision.
        </p>

        <div className="mb-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="mb-4 text-xl font-semibold">❌ Before May 2025 (Old Model)</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>AI was a <strong>$8-10/user/month add-on</strong> for ANY plan</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Free plan users could add AI for $10/month</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Plus users paid $10 + $10 = $20 total with AI</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Affordable AI access for individuals and small teams</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-green-600 bg-green-50 p-6">
            <h3 className="mb-4 text-xl font-semibold text-green-900">✅ After May 2025 (Current Model)</h3>
            <ul className="space-y-2 text-green-900">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>AI <strong>bundled exclusively into Business/Enterprise</strong></span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Minimum $20/user/month (annual) for full AI</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Free/Plus get ~20 AI trial responses only</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Cannot purchase AI separately anymore</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-6 rounded-lg bg-blue-50 p-6">
          <h3 className="mb-3 text-lg font-semibold text-blue-900">Grandfathered Users (Pre-May 2025 AI Subscribers)</h3>
          <p className="mb-3 text-blue-800">
            If you subscribed to Notion AI <em>before</em> May 13, 2025, you're grandfathered in at the old $8-10/user/month add-on pricing. You retain this pricing as long as you maintain your subscription without cancellation.
          </p>
          <p className="font-semibold text-blue-900">
            ⚠️ Warning: If you cancel your grandfathered AI subscription, you CANNOT reactivate at the old price. You must upgrade to Business ($20/user) for AI access.
          </p>
        </div>

        <h3 className="mb-4 text-xl font-semibold">Why Notion Made This Change</h3>
        <p className="mb-4 leading-relaxed">
          Notion positioned this as "simplifying" pricing and improving value. The Business plan now includes unlimited AI responses, autonomous AI Agents (launched September 2025), multi-model access (GPT-5, Claude Opus 4.1, o3, o1-mini), and Enterprise Search—features that would cost $60+/month through separate AI subscriptions.
        </p>
        <p className="mb-4 leading-relaxed">
          However, for individuals and small teams who previously paid $10-20/month total for Notion Plus + AI, this change effectively doubles their cost to $20/user minimum for AI access.
        </p>
      </section>

      <section id="plans-breakdown" className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Complete Notion Plans Breakdown</h2>

        <div className="space-y-8">
          {/* Free Plan */}
          <div className="rounded-lg border-2 border-gray-200 p-6">
            <div className="mb-4 flex items-baseline justify-between">
              <h3 className="text-2xl font-bold">Free Plan</h3>
              <span className="text-3xl font-bold text-green-600">$0</span>
            </div>
            
            <p className="mb-4 text-gray-600">
              Perfect for: Students, individuals, personal productivity, anyone exploring Notion
            </p>

            <div className="mb-4">
              <h4 className="mb-2 font-semibold">What's Included:</h4>
              <ul className="grid gap-2 sm:grid-cols-2">
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✓</span>
                  <span>Unlimited pages & blocks (solo use)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✓</span>
                  <span>All block types (50+ types)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✓</span>
                  <span>Unlimited integrations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✓</span>
                  <span>10 guest collaborators</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✓</span>
                  <span>Cross-device sync (web/desktop/mobile)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✓</span>
                  <span>Basic page analytics</span>
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="mb-2 font-semibold">Limitations:</h4>
              <ul className="space-y-1">
                <li className="flex items-start">
                  <span className="mr-2 text-red-600">✗</span>
                  <span>5 MB file upload limit (vs unlimited on paid)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-red-600">✗</span>
                  <span>7-day page history (version recovery)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-red-600">✗</span>
                  <span>AI trial only (~20 responses total)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-red-600">✗</span>
                  <span>1,000 block limit for team workspaces</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-red-600">✗</span>
                  <span>No advanced permissions or SSO</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-gray-50 p-4">
              <p className="text-sm">
                <strong>Bottom Line:</strong> The Free plan is genuinely unlimited for solo users. The 5 MB file limit is the most common reason individuals upgrade—you'll hit it quickly if you embed screenshots, PDFs, or media files.
              </p>
            </div>
          </div>

          {/* Plus Plan */}
          <div className="rounded-lg border-2 border-blue-200 p-6">
            <div className="mb-4 flex items-baseline justify-between">
              <h3 className="text-2xl font-bold">Plus Plan</h3>
              <div className="text-right">
                <div className="text-3xl font-bold text-blue-600">$10<span className="text-xl">/user/mo</span></div>
                <div className="text-sm text-gray-500">$12/user monthly billing</div>
              </div>
            </div>
            
            <p className="mb-4 text-gray-600">
              Perfect for: Small teams (2-10 people), freelancers needing unlimited storage, basic collaboration
            </p>

            <div className="mb-4">
              <h4 className="mb-2 font-semibold">Everything in Free, Plus:</h4>
              <ul className="grid gap-2 sm:grid-cols-2">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">✓</span>
                  <span><strong>Unlimited file uploads</strong> (no 5MB limit)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">✓</span>
                  <span>30-day page history (vs 7 days)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">✓</span>
                  <span>100 guest collaborators (vs 10)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">✓</span>
                  <span>Unlimited teamspaces</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">✓</span>
                  <span>Advanced page analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">✓</span>
                  <span>Custom automation buttons</span>
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="mb-2 font-semibold">Still Missing:</h4>
              <ul className="space-y-1">
                <li className="flex items-start">
                  <span className="mr-2 text-red-600">✗</span>
                  <span><strong>No full Notion AI</strong> (trial only)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-red-600">✗</span>
                  <span>No private teamspaces</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-red-600">✗</span>
                  <span>No SAML SSO or SCIM</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-red-600">✗</span>
                  <span>No bulk PDF exports</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-blue-50 p-4">
              <p className="text-sm text-blue-900">
                <strong>Bottom Line:</strong> Plus is worth it for unlimited file storage and longer version history. At $10/user, it's competitive for small team collaboration. However, with no AI access, teams wanting AI features must jump to Business ($20/user).
              </p>
            </div>
          </div>

          {/* Business Plan */}
          <div className="rounded-lg border-4 border-purple-400 bg-purple-50 p-6">
            <div className="mb-2 inline-block rounded-full bg-purple-600 px-3 py-1 text-sm font-semibold text-white">
              MOST POPULAR FOR AI
            </div>
            <div className="mb-4 flex items-baseline justify-between">
              <h3 className="text-2xl font-bold">Business Plan</h3>
              <div className="text-right">
                <div className="text-3xl font-bold text-purple-600">$20<span className="text-xl">/user/mo</span></div>
                <div className="text-sm text-gray-600">$24/user monthly billing</div>
              </div>
            </div>
            
            <p className="mb-4 text-gray-700">
              Perfect for: Teams needing AI, growing companies, mid-size orgs (10-100 people)
            </p>

            <div className="mb-4">
              <h4 className="mb-2 font-semibold">Everything in Plus, Plus:</h4>
              <ul className="grid gap-2 sm:grid-cols-2">
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">✓</span>
                  <span><strong>FULL NOTION AI INCLUDED</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">✓</span>
                  <span>Autonomous AI Agents (20-min tasks)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">✓</span>
                  <span>Multi-model access (GPT-5, Claude, o3)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">✓</span>
                  <span>Enterprise Search across workspace</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">✓</span>
                  <span>Private teamspaces</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">✓</span>
                  <span>SAML SSO (single sign-on)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">✓</span>
                  <span>250 guest limit (vs 100)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">✓</span>
                  <span>90-day page history (vs 30 days)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">✓</span>
                  <span>Bulk PDF exports</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">✓</span>
                  <span>Advanced page analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">✓</span>
                  <span>Priority support</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">✓</span>
                  <span>Database automations</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-white p-4">
              <p className="mb-2 text-sm font-semibold text-purple-900">
                AI Value Comparison:
              </p>
              <p className="text-sm text-gray-700">
                Notion Business at $20/user includes AI features that would cost $60/month separately: ChatGPT Plus ($20) + Claude Pro ($20) + Gemini Advanced ($20). Plus, Notion's AI understands your workspace context—something standalone AI tools can't do.
              </p>
            </div>

            <div className="mt-4 rounded-lg border-2 border-purple-300 bg-white p-4">
              <p className="text-sm">
                <strong>Bottom Line:</strong> Business is the minimum tier for full AI access. At $20/user, it's expensive for small teams but competitive if you value multi-model AI + workspace integration. Teams of 5 pay $100/month ($1,200/year).
              </p>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="rounded-lg border-2 border-gray-300 p-6">
            <div className="mb-4 flex items-baseline justify-between">
              <h3 className="text-2xl font-bold">Enterprise Plan</h3>
              <span className="text-2xl font-bold text-gray-600">Custom Pricing</span>
            </div>
            
            <p className="mb-4 text-gray-600">
              Perfect for: Large organizations (100+ seats), Fortune 500, regulated industries, complex security requirements
            </p>

            <div className="mb-4">
              <h4 className="mb-2 font-semibold">Everything in Business, Plus:</h4>
              <ul className="grid gap-2 sm:grid-cols-2">
                <li className="flex items-start">
                  <span className="mr-2 text-gray-600">✓</span>
                  <span>Unlimited page history</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-600">✓</span>
                  <span>SCIM user provisioning</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-600">✓</span>
                  <span>Advanced security controls</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-600">✓</span>
                  <span>Audit logs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-600">✓</span>
                  <span>Admin content search</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-600">✓</span>
                  <span>Workspace analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-600">✓</span>
                  <span>Granular admin roles</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-600">✓</span>
                  <span>Dedicated customer success manager</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-600">✓</span>
                  <span>Custom contracts & SLAs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-600">✓</span>
                  <span>Advanced compliance (SOC 2, HIPAA)</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-gray-50 p-4">
              <p className="text-sm">
                <strong>Typical Enterprise Pricing:</strong> Based on user reports, Enterprise typically starts around $25-30/user/month for contracts of 100+ seats, with volume discounts for 500+ seats. Enterprise deals are fully custom—contact Notion sales for quotes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="real-costs" className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Real-World Cost Scenarios</h2>
        
        <p className="mb-6 leading-relaxed">
          Here's what Notion actually costs for real team sizes and use cases, including annual vs monthly billing differences.
        </p>

        <div className="space-y-6">
          {/* Solo User */}
          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="mb-3 text-xl font-semibold">Scenario 1: Solo User (Personal Productivity)</h3>
            <div className="mb-4 space-y-2">
              <p><strong>Need:</strong> Personal wiki, task management, note-taking, file storage</p>
              <p><strong>AI Required:</strong> No</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-green-50 p-4">
                <p className="mb-1 text-sm font-semibold text-green-900">Free Plan (Recommended)</p>
                <p className="mb-2 text-3xl font-bold text-green-600">$0/month</p>
                <p className="text-sm text-green-800">Perfect for solo use. Upgrade to Plus only if you need unlimited file uploads.</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-4">
                <p className="mb-1 text-sm font-semibold text-gray-700">Plus Plan (if file storage needed)</p>
                <p className="mb-2 text-3xl font-bold text-gray-600">$10/month</p>
                <p className="text-sm text-gray-600">$120/year (annual) vs $144/year (monthly)</p>
              </div>
            </div>
          </div>

          {/* Solo + AI */}
          <div className="rounded-lg border border-purple-200 bg-purple-50 p-6">
            <h3 className="mb-3 text-xl font-semibold">Scenario 2: Solo User Wanting AI</h3>
            <div className="mb-4 space-y-2">
              <p><strong>Need:</strong> All Notion features + AI writing assistance, autonomous agents</p>
              <p><strong>AI Required:</strong> Yes</p>
            </div>
            <div className="rounded-lg bg-white p-4">
              <p className="mb-1 text-sm font-semibold text-purple-900">Business Plan (ONLY OPTION for AI)</p>
              <p className="mb-2 text-3xl font-bold text-purple-600">$20/month</p>
              <p className="mb-3 text-sm text-gray-600">$240/year (annual) vs $288/year (monthly)</p>
              <div className="rounded-lg bg-amber-50 p-3">
                <p className="text-sm text-amber-900">
                  <strong>⚠️ Cost Doubled:</strong> Before May 2025, solo users could get Plus + AI for $10 + $10 = $20/month total. Now AI alone requires $20/month Business plan, making it expensive for individuals.
                </p>
              </div>
            </div>
          </div>

          {/* 5-Person Team */}
          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="mb-3 text-xl font-semibold">Scenario 3: 5-Person Startup</h3>
            <div className="mb-4 space-y-2">
              <p><strong>Need:</strong> Team wiki, project management, documentation, file sharing</p>
              <p><strong>AI Required:</strong> Mixed (some need it, some don't)</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-blue-50 p-4">
                <p className="mb-1 text-sm font-semibold text-blue-900">Plus Plan (No AI)</p>
                <p className="mb-2 text-3xl font-bold text-blue-600">$50/month</p>
                <p className="text-sm text-blue-800">5 users × $10 = $50/month ($600/year annual)</p>
              </div>
              <div className="rounded-lg bg-purple-50 p-4">
                <p className="mb-1 text-sm font-semibold text-purple-900">Business Plan (With AI)</p>
                <p className="mb-2 text-3xl font-bold text-purple-600">$100/month</p>
                <p className="text-sm text-purple-800">5 users × $20 = $100/month ($1,200/year annual)</p>
              </div>
            </div>
          </div>

          {/* 15-Person Team */}
          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="mb-3 text-xl font-semibold">Scenario 4: 15-Person Marketing Agency</h3>
            <div className="mb-4 space-y-2">
              <p><strong>Need:</strong> Client wikis, project tracking, AI content creation, automation</p>
              <p><strong>AI Required:</strong> Yes (competitive advantage)</p>
            </div>
            <div className="rounded-lg bg-purple-50 p-4">
              <p className="mb-1 text-sm font-semibold text-purple-900">Business Plan (Required for AI)</p>
              <p className="mb-2 text-3xl font-bold text-purple-600">$300/month</p>
              <p className="mb-3 text-sm text-gray-600">15 users × $20 = $300/month ($3,600/year annual vs $4,320/year monthly)</p>
              <div className="mt-3 rounded-lg bg-white p-3">
                <p className="mb-1 text-sm font-semibold">Annual Savings:</p>
                <p className="text-sm">Paying annually saves $720/year (20% discount)</p>
              </div>
            </div>
          </div>

          {/* 50-Person Company */}
          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="mb-3 text-xl font-semibold">Scenario 5: 50-Person SaaS Company</h3>
            <div className="mb-4 space-y-2">
              <p><strong>Need:</strong> Company-wide workspace, SSO, advanced security, AI for all teams</p>
              <p><strong>AI Required:</strong> Yes</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-purple-50 p-4">
                <p className="mb-1 text-sm font-semibold text-purple-900">Business Plan</p>
                <p className="mb-2 text-3xl font-bold text-purple-600">$1,000/month</p>
                <p className="text-sm text-purple-800">50 users × $20 = $1,000/month ($12,000/year)</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-4">
                <p className="mb-1 text-sm font-semibold text-gray-700">Enterprise (with audit logs)</p>
                <p className="mb-2 text-3xl font-bold text-gray-600">~$1,250-1,500/month</p>
                <p className="text-sm text-gray-600">Estimated $25-30/user for 50 seats + enterprise features</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-lg bg-blue-50 p-6">
          <h3 className="mb-3 text-lg font-semibold text-blue-900">Annual vs Monthly Billing Savings</h3>
          <p className="mb-3 text-blue-800">
            Notion offers <strong>17-20% savings</strong> when you pay annually vs monthly. This applies to all paid plans:
          </p>
          <ul className="space-y-2 text-blue-800">
            <li>• Plus: $10/user/month (annual) vs $12/user/month (monthly) = <strong>17% savings</strong></li>
            <li>• Business: $20/user/month (annual) vs $24/user/month (monthly) = <strong>17% savings</strong></li>
          </ul>
          <p className="mt-3 text-sm text-blue-700">
            For a 10-person team on Business, annual billing saves $480/year ($2,400/year vs $2,880/year).
          </p>
        </div>
      </section>

      <section id="hidden-costs" className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Hidden Costs and Gotchas</h2>
        
        <p className="mb-6 leading-relaxed">
          Notion's pricing is relatively transparent, but there are several non-obvious costs and limitations that catch users by surprise.
        </p>

        <div className="space-y-6">
          <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-6">
            <h3 className="mb-3 text-lg font-semibold text-red-900">1. AI Access Requires $20/User Minimum</h3>
            <p className="mb-3 text-red-800">
              This is the biggest "hidden" cost. Free and Plus plans get only ~20 AI trial responses total (not per user, per workspace). You cannot purchase AI separately. Full AI access requires upgrading every user to Business ($20/user/month).
            </p>
            <p className="font-semibold text-red-900">
              Impact: A 10-person team wanting AI pays $200/month ($2,400/year) minimum, even if only 3 people use AI regularly.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="mb-3 text-lg font-semibold">2. Guest Limits Can Force Upgrades</h3>
            <p className="mb-3">
              Guest collaborators (external users like clients or contractors) have limits:
            </p>
            <ul className="mb-3 space-y-1">
              <li>• Free: 10 guests maximum</li>
              <li>• Plus: 100 guests per teamspace</li>
              <li>• Business: 250 guests per teamspace</li>
              <li>• Enterprise: Custom (negotiated)</li>
            </ul>
            <p className="text-sm text-gray-600">
              <strong>Impact:</strong> Client-facing teams (agencies, consultants) often hit guest limits on Free or Plus, forcing upgrades even if they don't need other premium features.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="mb-3 text-lg font-semibold">3. Mid-Cycle Member Changes = Prorated Charges</h3>
            <p className="mb-3">
              When you add team members mid-billing cycle, Notion charges a prorated amount immediately based on time remaining in the cycle. This creates unpredictable monthly invoices.
            </p>
            <p className="mb-3 text-sm text-gray-600">
              Example: Add 3 members halfway through your monthly billing cycle on Business plan → immediate charge of ~$36 (3 users × $24/month × 0.5 months remaining).
            </p>
            <p className="text-sm">
              <strong>Note:</strong> Removing members doesn't refund money—it just frees up a "seat" you can reassign to someone else without additional charge.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="mb-3 text-lg font-semibold">4. Custom Domains Cost Extra</h3>
            <p className="mb-3">
              Want to publish Notion pages with your own domain (e.g., docs.yourcompany.com instead of yourcompany.notion.site)?
            </p>
            <p className="font-semibold">
              Custom domains cost <strong>$10/month per domain</strong> (or $8/month paid annually)—separate from your plan pricing.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              This applies to all plans. A company with 3 custom domains pays an extra $30/month on top of their plan.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="mb-3 text-lg font-semibold">5. No Phone Support on Free/Plus</h3>
            <p className="mb-3">
              Free and Plus plans get email-only support with slow response times (often 24-48 hours). Business plans get "priority support" but still no phone support.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Enterprise only</strong> includes a dedicated customer success manager and premium support. Users report mixed experiences with Notion support quality across all tiers.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="mb-3 text-lg font-semibold">6. Limited Offline Access (Even on Paid Plans)</h3>
            <p className="mb-3">
              Notion's offline mode (launched 2025) requires manual page downloads or auto-caches only Favorites and Recents. Unlike local-first tools (Obsidian, Apple Notes), Notion isn't designed for offline work.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Impact:</strong> Not ideal for frequent travelers, remote workers in areas with spotty internet, or users who need guaranteed offline access to critical documents.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="mb-3 text-lg font-semibold">7. Performance Degrades with Large Databases</h3>
            <p className="mb-3">
              While not a direct cost, Notion slows noticeably when databases exceed 10,000 rows. Teams managing CRMs, inventory, or extensive content calendars often hit performance walls.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Hidden cost:</strong> Migrating large databases to Airtable or other specialized tools adds complexity and potentially another subscription ($24-54/user/month for Airtable).
            </p>
          </div>
        </div>
      </section>

      <section id="vs-competitors" className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Notion AI Pricing vs Competitors</h2>
        
        <p className="mb-6 leading-relaxed">
          How does Notion's pricing compare to similar all-in-one productivity platforms and standalone AI tools?
        </p>

        <div className="mb-8 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-3 text-left font-semibold">Platform</th>
                <th className="border border-gray-300 p-3 text-left font-semibold">Base Price</th>
                <th className="border border-gray-300 p-3 text-left font-semibold">AI Pricing</th>
                <th className="border border-gray-300 p-3 text-left font-semibold">Total with AI</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-purple-50">
                <td className="border border-gray-300 p-3 font-medium">Notion Business</td>
                <td className="border border-gray-300 p-3">$20/user/month</td>
                <td className="border border-gray-300 p-3"><strong>Included</strong></td>
                <td className="border border-gray-300 p-3 font-semibold">$20/user/month</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-medium">ClickUp Business</td>
                <td className="border border-gray-300 p-3">$12/user/month</td>
                <td className="border border-gray-300 p-3">+$7/user/month</td>
                <td className="border border-gray-300 p-3">$19/user/month</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-3 font-medium">Monday.com Standard</td>
                <td className="border border-gray-300 p-3">$12/user/month</td>
                <td className="border border-gray-300 p-3">Limited (not full AI)</td>
                <td className="border border-gray-300 p-3">$12/user/month</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-medium">Coda Team</td>
                <td className="border border-gray-300 p-3">$30/doc maker/month</td>
                <td className="border border-gray-300 p-3">Included</td>
                <td className="border border-gray-300 p-3">$30/doc maker/month</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-3 font-medium">Asana Advanced</td>
                <td className="border border-gray-300 p-3">$24.99/user/month</td>
                <td className="border border-gray-300 p-3">Separate (not bundled)</td>
                <td className="border border-gray-300 p-3">$24.99+/user/month</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="mb-4 text-xl font-semibold">Notion AI vs Standalone AI Subscriptions</h3>
        <p className="mb-4 leading-relaxed">
          Notion Business ($20/user/month) includes multi-model AI access. Compare this to managing separate AI subscriptions:
        </p>

        <div className="mb-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-gray-200 p-4">
            <h4 className="mb-2 font-semibold">ChatGPT Plus</h4>
            <p className="mb-2 text-2xl font-bold text-gray-600">$20/month</p>
            <ul className="space-y-1 text-sm">
              <li>• GPT-4.5 Turbo access</li>
              <li>• GPT-5 Early Preview</li>
              <li>• No workspace integration</li>
            </ul>
          </div>

          <div className="rounded-lg border border-gray-200 p-4">
            <h4 className="mb-2 font-semibold">Claude Pro</h4>
            <p className="mb-2 text-2xl font-bold text-gray-600">$20/month</p>
            <ul className="space-y-1 text-sm">
              <li>• Claude Opus 4.1 access</li>
              <li>• 5x message limits</li>
              <li>• No workspace integration</li>
            </ul>
          </div>

          <div className="rounded-lg border border-gray-200 p-4">
            <h4 className="mb-2 font-semibold">Gemini Advanced</h4>
            <p className="mb-2 text-2xl font-bold text-gray-600">$20/month</p>
            <ul className="space-y-1 text-sm">
              <li>• Gemini Ultra 2.0 access</li>
              <li>• Google Workspace integration</li>
              <li>• 2TB Google One storage</li>
            </ul>
          </div>
        </div>

        <div className="rounded-lg bg-green-50 p-6">
          <h4 className="mb-3 text-lg font-semibold text-green-900">Notion AI Value Proposition</h4>
          <p className="mb-3 text-green-800">
            <strong>Total for all 3 standalone AI tools: $60/month</strong>
          </p>
          <p className="mb-3 text-green-800">
            Notion Business at $20/month includes GPT-5, Claude Opus 4.1, o3, and o1-mini—all in one subscription with workspace integration, autonomous Agents, and Enterprise Search across your company's knowledge base.
          </p>
          <p className="font-semibold text-green-900">
            For teams already using Notion, adding AI through Business plan ($20) beats managing multiple AI subscriptions ($60+).
          </p>
        </div>

        <h3 className="mb-4 mt-8 text-xl font-semibold">When Competitors Might Be Better</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="mr-2 text-blue-600">•</span>
            <span><strong>ClickUp ($19 with AI):</strong> Better for advanced project management with Gantt charts, resource management, time tracking. Slightly cheaper than Notion with AI.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-blue-600">•</span>
            <span><strong>Coda ($30/doc maker):</strong> Charges only "Doc Makers" (not all viewers), so can be cheaper for teams with many read-only users. More powerful formulas.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-blue-600">•</span>
            <span><strong>Obsidian (Free-$10/user):</strong> Local-first, complete data ownership, full offline access. Better for privacy-conscious solo users or teams not needing real-time collaboration.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-blue-600">•</span>
            <span><strong>Airtable ($20-54/user):</strong> Far superior for database-heavy operations with 50K+ rows. Notion slows significantly with large datasets.</span>
          </li>
        </ul>
      </section>

      <section id="decision-framework" className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Decision Framework: Which Notion Plan Is Right for You?</h2>
        
        <div className="space-y-6">
          <div className="rounded-lg border-2 border-green-200 bg-green-50 p-6">
            <h3 className="mb-3 text-xl font-semibold text-green-900">Choose FREE if:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2 text-green-600">✓</span>
                <span>You're a solo user (student, freelancer, individual)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-600">✓</span>
                <span>You don't need to upload large files (&lt;5MB is fine)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-600">✓</span>
                <span>7-day version history is sufficient</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-600">✓</span>
                <span>You can live with ~20 AI trial responses</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-600">✓</span>
                <span>You're testing Notion before committing</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border-2 border-blue-200 bg-blue-50 p-6">
            <h3 className="mb-3 text-xl font-semibold text-blue-900">Choose PLUS ($10/user) if:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">✓</span>
                <span>You need unlimited file uploads (screenshots, PDFs, media)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">✓</span>
                <span>You have a small team (2-10 people) collaborating</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">✓</span>
                <span>30-day version history matters for your work</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">✓</span>
                <span>You need 11-100 guest collaborators (clients, contractors)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">✓</span>
                <span><strong>You DON'T need AI features</strong> (this is key—no AI on Plus)</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border-2 border-purple-200 bg-purple-50 p-6">
            <h3 className="mb-3 text-xl font-semibold text-purple-900">Choose BUSINESS ($20/user) if:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2 text-purple-600">✓</span>
                <span><strong>You need full Notion AI</strong> (this is the ONLY way to get AI)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-600">✓</span>
                <span>You want autonomous AI Agents executing multi-step tasks</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-600">✓</span>
                <span>You need multi-model access (GPT-5, Claude, o3) in one tool</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-600">✓</span>
                <span>Your team is 10-100 people and needs collaboration at scale</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-600">✓</span>
                <span>You require SAML SSO (single sign-on)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-600">✓</span>
                <span>You need private teamspaces for internal-only content</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-600">✓</span>
                <span>90-day version history and priority support are important</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border-2 border-gray-200 bg-gray-50 p-6">
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Choose ENTERPRISE if:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2 text-gray-600">✓</span>
                <span>You're a large organization (100+ employees)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-gray-600">✓</span>
                <span>You need unlimited version history</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-gray-600">✓</span>
                <span>SCIM provisioning, audit logs, and advanced security are required</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-gray-600">✓</span>
                <span>You operate in regulated industries (healthcare, finance)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-gray-600">✓</span>
                <span>You need a dedicated customer success manager</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-gray-600">✓</span>
                <span>Custom contracts, SLAs, and compliance certifications matter</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-lg border-2 border-amber-400 bg-amber-50 p-6">
          <h3 className="mb-3 text-lg font-semibold text-amber-900">The Hard Truth About AI Pricing</h3>
          <p className="mb-3 text-amber-800">
            If you're a solo user or small team (2-5 people) and want AI, Notion is now expensive. At $20/user minimum for AI, you're paying $100-240/month for features that used to cost $10-50/month before May 2025.
          </p>
          <p className="mb-3 text-amber-800">
            <strong>Alternatives to consider:</strong>
          </p>
          <ul className="space-y-1 text-amber-800">
            <li>• Standalone ChatGPT Plus ($20/month) or Claude Pro ($20/month) for solo AI needs</li>
            <li>• ClickUp Business + AI ($19/user) if you need project management + AI</li>
            <li>• Coda Team ($30/doc maker) with AI included, charges only creators not viewers</li>
            <li>• Use Notion Free/Plus for workspace + separate AI tool for writing</li>
          </ul>
          <p className="mt-3 font-semibold text-amber-900">
            Notion's AI is excellent—but only worth the cost if you're already committed to Notion as your all-in-one workspace AND have budget for $20/user/month.
          </p>
        </div>
      </section>

      <section id="faq" className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="mb-2 text-lg font-semibold">Can I get Notion AI on the Free or Plus plan?</h3>
            <p className="leading-relaxed">
              No (for new users). As of May 2025, Free and Plus plans receive only a limited AI trial (~20 responses total per workspace). You cannot purchase AI as a separate add-on. Full Notion AI access requires upgrading to Business ($20/user/month) or Enterprise plans. However, if you subscribed to Notion AI <em>before</em> May 13, 2025, you're grandfathered in at the old $8-10/user/month add-on pricing as long as you maintain your subscription.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold">How much does Notion AI cost per month?</h3>
            <p className="leading-relaxed">
              Notion AI is included in the Business plan at $20/user/month (annual billing) or $24/user/month (monthly billing). There is no standalone AI subscription for new users. The minimum cost for AI access is $20/month for a single user, or $100/month for a 5-person team.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold">Is there a free trial of Notion AI?</h3>
            <p className="leading-relaxed">
              Yes, but it's extremely limited. Free and Plus plan workspaces get approximately 20 AI responses total (not per user, per workspace) to try Notion AI features. Once you exhaust these trial responses, you must upgrade to Business for continued AI access. There's no traditional "30-day free trial" of full AI features.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold">What AI models does Notion include?</h3>
            <p className="leading-relaxed">
              Notion Business and Enterprise plans include multi-model AI access: GPT-5 (OpenAI), Claude Opus 4.1 (Anthropic), o3 and o1-mini (OpenAI's reasoning models). Users can toggle between models based on task requirements. This is a major value proposition—accessing all premium models in one $20/month subscription versus paying separately for ChatGPT Plus ($20), Claude Pro ($20), etc.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold">Can I pay monthly or do I have to pay annually?</h3>
            <p className="leading-relaxed">
              You can choose monthly or annual billing for all Notion plans. Annual billing provides 17-20% savings: Plus is $10/user/month (annual) vs $12/user/month (monthly). Business is $20/user/month (annual) vs $24/user/month (monthly). For a 10-person Business team, annual billing saves $480/year.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold">What happens if I add team members mid-cycle?</h3>
            <p className="leading-relaxed">
              Notion charges a prorated amount immediately when you add members mid-billing cycle. If you're halfway through your monthly cycle and add 2 users to Business plan, you'll be charged ~$24 (2 users × $24/month × 0.5 months remaining). Removing members doesn't generate refunds but frees up a "seat" you can reassign to someone else without additional charge.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold">Are there student discounts for Notion?</h3>
            <p className="leading-relaxed">
              Yes. Students and educators with verified school email addresses (.edu or other recognized domains) get the Plus Plan <em>free</em> with a 1-member limit. This provides unlimited file uploads, 30-day version history, and all Plus features at no cost. However, this doesn't include full AI—students still get only the limited AI trial unless they upgrade to Business.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold">How does Notion pricing compare to Obsidian or Roam Research?</h3>
            <p className="leading-relaxed">
              Obsidian is free for personal use with optional $50/year Commercial license and $10/user/month Sync service. Roam Research is $15/month for individuals. Notion Free matches Obsidian for solo use but requires paid plans ($10-20/user) for team collaboration. Key difference: Obsidian stores data locally (privacy/offline), Notion is cloud-first (real-time collaboration). Choose based on whether you prioritize local control vs team features.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12 rounded-lg border-2 border-purple-300 bg-purple-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-purple-900">Ready to Try Notion?</h2>
        <p className="mb-6 text-lg leading-relaxed text-purple-800">
          Start with the generous Free plan (unlimited pages and blocks for solo use) or jump straight to Business if you need AI features. Remember: AI is ONLY available on Business ($20/user) and Enterprise plans.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://www.notion.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-700"
          >
            Start Free →
          </a>
          <a 
            href="https://www.notion.com/pricing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block rounded-lg border-2 border-purple-600 bg-white px-6 py-3 font-semibold text-purple-600 transition hover:bg-purple-50"
          >
            View Official Pricing
          </a>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-bold">Related Pricing Guides</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link href="/chatgpt-plus-pricing" className="rounded-lg border border-gray-200 p-4 transition hover:border-blue-400 hover:shadow-md">
            <h3 className="mb-2 font-semibold text-blue-600">ChatGPT Plus Pricing</h3>
            <p className="text-sm text-gray-600">Complete breakdown of ChatGPT Plus, Team, and Enterprise pricing</p>
          </Link>
          <Link href="/jasper-ai-pricing" className="rounded-lg border border-gray-200 p-4 transition hover:border-blue-400 hover:shadow-md">
            <h3 className="mb-2 font-semibold text-blue-600">Jasper AI Pricing</h3>
            <p className="text-sm text-gray-600">Jasper Pro vs Business plans, costs, and hidden fees</p>
          </Link>
          <Link href="/midjourney-pricing" className="rounded-lg border border-gray-200 p-4 transition hover:border-blue-400 hover:shadow-md">
            <h3 className="mb-2 font-semibold text-blue-600">Midjourney Pricing</h3>
            <p className="text-sm text-gray-600">All Midjourney plans, fast hours, and what you actually pay</p>
          </Link>
          <Link href="/" className="rounded-lg border border-gray-200 p-4 transition hover:border-blue-400 hover:shadow-md">
            <h3 className="mb-2 font-semibold text-blue-600">AI Tools Directory</h3>
            <p className="text-sm text-gray-600">Browse 200+ AI tools with pricing comparisons</p>
          </Link>
        </div>
      </section>

      <footer className="border-t border-gray-200 pt-8 text-sm text-gray-600">
        <p className="mb-2">
          <strong>Last Updated:</strong> March 7, 2026
        </p>
        <p className="mb-4">
          Pricing information verified against Notion's official pricing page and user reports. Notion may change pricing at any time. Always verify current pricing on notion.com before purchasing.
        </p>
        <p>
          Part of the <Link href="/" className="text-blue-600 hover:underline">AISO Tools</Link> directory — your guide to AI tool pricing and comparisons.
        </p>
      </footer>
    </article>
  );
}
