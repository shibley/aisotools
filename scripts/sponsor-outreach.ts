#!/usr/bin/env npx tsx
/**
 * Sponsor Outreach Email Script for AISOTools.com
 *
 * Reads tools from the AISO database and sends personalized outreach emails
 * via the Resend API to tool owners about Featured Listing options.
 *
 * Usage:
 *   npx tsx scripts/sponsor-outreach.ts --dry-run
 *   npx tsx scripts/sponsor-outreach.ts --dry-run --category coding --limit 5
 *   npx tsx scripts/sponsor-outreach.ts --limit 10
 *
 * Flags:
 *   --dry-run     Print emails to console without sending
 *   --limit N     Max number of emails to process in this batch
 *   --category X  Only target tools in a specific category slug
 */

import { readFileSync, writeFileSync, existsSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// ── Resolve project paths ───────────────────────────────────────────
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, "..");

// ── Import tool data (uses tsx for TS resolution + path aliases) ────
// We import dynamically so tsx resolves @/* aliases from tsconfig
const { tools } = await import("../src/data/tools.js");
const { categories } = await import("../src/data/categories.js");

// ── Types ───────────────────────────────────────────────────────────
interface Tool {
  name: string;
  slug: string;
  url: string;
  category: string;
  description: string;
  shortDescription: string;
  featured: boolean;
  sponsored: boolean;
}

interface OutreachLogEntry {
  slug: string;
  name: string;
  email: string;
  sentAt: string;
  messageId?: string;
  status: "sent" | "dry-run" | "error";
  error?: string;
}

interface OutreachLog {
  entries: OutreachLogEntry[];
  lastRun: string;
  totalSent: number;
}

// ── Config ──────────────────────────────────────────────────────────
const RESEND_API_KEY = "re_4MRdkoe5_LqmGfhpGvN7uGtghDN3zNx1k";
const FROM_EMAIL = "shibley@aisotools.com";
const FROM_NAME = "Shibley Burnett";
const LOG_PATH = join(__dirname, "outreach-log.json");
const RATE_LIMIT_PER_SECOND = 2;
const MAX_DAILY_SENDS = 50;

// ── Parse CLI args ──────────────────────────────────────────────────
const args = process.argv.slice(2);
const DRY_RUN = args.includes("--dry-run");
const limitIdx = args.indexOf("--limit");
const LIMIT = limitIdx !== -1 ? parseInt(args[limitIdx + 1], 10) : Infinity;
const categoryIdx = args.indexOf("--category");
const CATEGORY_FILTER = categoryIdx !== -1 ? args[categoryIdx + 1] : null;

// ── Helpers ─────────────────────────────────────────────────────────

function loadLog(): OutreachLog {
  if (existsSync(LOG_PATH)) {
    try {
      return JSON.parse(readFileSync(LOG_PATH, "utf-8"));
    } catch {
      console.warn("⚠️  Could not parse outreach-log.json, starting fresh");
    }
  }
  return { entries: [], lastRun: "", totalSent: 0 };
}

function saveLog(log: OutreachLog): void {
  writeFileSync(LOG_PATH, JSON.stringify(log, null, 2));
}

function getCategoryName(slug: string): string {
  const cat = (categories as any[]).find((c: any) => c.slug === slug);
  return cat?.name || slug;
}

function getContactEmail(tool: Tool): string | null {
  // Extract domain from tool URL for generic contact
  try {
    const url = new URL(tool.url);
    const domain = url.hostname.replace("www.", "");
    // Common contact patterns — the actual email discovery would need
    // enrichment data. For now we generate the most common patterns.
    // In production, you'd want to verify these or use an email finder.
    return null; // Return null — we need real emails before sending
  } catch {
    return null;
  }
}

function generateSubject(tool: Tool): string {
  return `${tool.name} is listed on AISOTools.com — want to stand out?`;
}

function generateHtmlBody(tool: Tool): string {
  const categoryName = getCategoryName(tool.category);
  return `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
  <p>Hi ${tool.name} team,</p>

  <p>Your tool is already listed on <a href="https://aisotools.com" style="color: #2563eb;">AISOTools.com</a>, one of the fastest-growing AI tool directories with <strong>1,200+ weekly visitors</strong> (including 100+ referrals from ChatGPT weekly).</p>

  <p>Right now, <strong>${tool.name}</strong> appears in our <strong>${categoryName}</strong> section. We wanted to let you know about our Featured Listing options:</p>

  <ul style="padding-left: 20px;">
    <li><strong>Featured Badge</strong> — stand out with a highlighted listing (<strong>$49 one-time</strong>)</li>
    <li><strong>Category Leader</strong> — top placement in your category + comparison pages (<strong>$149 one-time</strong>)</li>
    <li><strong>Full Spotlight</strong> — homepage feature + dedicated review article (<strong>$299 one-time</strong>)</li>
  </ul>

  <p>All plans include a <strong>permanent dofollow backlink</strong> to your site.</p>

  <p>
    👉 <a href="https://aisotools.com/tool/${tool.slug}" style="color: #2563eb;">Check your listing</a><br/>
    ⭐ <a href="https://aisotools.com/advertise?tool=${tool.slug}" style="color: #2563eb;">Get featured</a>
  </p>

  <p>Best,<br/>
  <strong>Shibley Burnett</strong><br/>
  <a href="https://aisotools.com" style="color: #2563eb;">AISOTools.com</a></p>
</div>`.trim();
}

function generateTextBody(tool: Tool): string {
  const categoryName = getCategoryName(tool.category);
  return `Hi ${tool.name} team,

Your tool is already listed on AISOTools.com, one of the fastest-growing AI tool directories with 1,200+ weekly visitors (including 100+ referrals from ChatGPT weekly).

Right now, ${tool.name} appears in our ${categoryName} section. We wanted to let you know about our Featured Listing options:

- Featured Badge — stand out with a highlighted listing ($49 one-time)
- Category Leader — top placement in your category + comparison pages ($149 one-time)
- Full Spotlight — homepage feature + dedicated review article ($299 one-time)

All plans include a permanent dofollow backlink to your site.

Check your listing: https://aisotools.com/tool/${tool.slug}
Get featured: https://aisotools.com/advertise?tool=${tool.slug}

Best,
Shibley Burnett
AISOTools.com`;
}

async function sendViaResend(
  to: string,
  subject: string,
  html: string,
  text: string
): Promise<{ id: string }> {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `${FROM_NAME} <${FROM_EMAIL}>`,
      to: [to],
      subject,
      html,
      text,
      reply_to: FROM_EMAIL,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Resend API error ${res.status}: ${err}`);
  }

  return res.json();
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ── Main ────────────────────────────────────────────────────────────
async function main() {
  console.log("═══════════════════════════════════════════════════════════");
  console.log("  AISOTools.com — Sponsor Outreach Script");
  console.log("═══════════════════════════════════════════════════════════");
  console.log(`  Mode:     ${DRY_RUN ? "🧪 DRY RUN (no emails sent)" : "🚀 LIVE"}`);
  console.log(`  Limit:    ${LIMIT === Infinity ? "No limit" : LIMIT}`);
  console.log(`  Category: ${CATEGORY_FILTER || "All"}`);
  console.log("═══════════════════════════════════════════════════════════\n");

  const log = loadLog();
  const alreadySent = new Set(log.entries.filter((e) => e.status === "sent").map((e) => e.slug));

  // Count today's sends for daily limit
  const todayStr = new Date().toISOString().split("T")[0];
  const todaySends = log.entries.filter(
    (e) => e.status === "sent" && e.sentAt.startsWith(todayStr)
  ).length;

  if (todaySends >= MAX_DAILY_SENDS && !DRY_RUN) {
    console.log(`❌ Daily limit reached (${todaySends}/${MAX_DAILY_SENDS} sent today). Try again tomorrow.`);
    process.exit(1);
  }

  const remainingDaily = MAX_DAILY_SENDS - todaySends;

  // Filter tools
  let targetTools = (tools as Tool[]).filter((t) => {
    // Skip already-sent
    if (alreadySent.has(t.slug)) return false;
    // Category filter
    if (CATEGORY_FILTER && t.category !== CATEGORY_FILTER) return false;
    // Skip already-featured/sponsored
    if (t.featured || t.sponsored) return false;
    return true;
  });

  // Apply limit (respect both user limit and daily limit)
  const effectiveLimit = DRY_RUN ? LIMIT : Math.min(LIMIT, remainingDaily);
  targetTools = targetTools.slice(0, effectiveLimit);

  console.log(`📋 Found ${targetTools.length} tools to process\n`);

  if (targetTools.length === 0) {
    console.log("Nothing to do. All eligible tools have been contacted or filtered out.");
    process.exit(0);
  }

  let sentCount = 0;
  let errorCount = 0;

  for (const tool of targetTools) {
    const categoryName = getCategoryName(tool.category);
    const subject = generateSubject(tool);
    const html = generateHtmlBody(tool);
    const text = generateTextBody(tool);

    // For dry run, we show what WOULD be sent
    // For live, we need a real email — for now this script uses a placeholder
    // In production, you'd integrate with an email finder or have contact emails in the DB
    const contactEmail = getContactEmail(tool);

    console.log(`──────────────────────────────────────────────`);
    console.log(`📧 ${tool.name} (${tool.slug})`);
    console.log(`   Category: ${categoryName}`);
    console.log(`   URL: ${tool.url}`);
    console.log(`   Subject: ${subject}`);

    if (DRY_RUN) {
      console.log(`   Status: 🧪 DRY RUN — would send`);
      console.log(`\n--- Email Preview ---`);
      console.log(text);
      console.log(`--- End Preview ---\n`);

      log.entries.push({
        slug: tool.slug,
        name: tool.name,
        email: contactEmail || "(no email)",
        sentAt: new Date().toISOString(),
        status: "dry-run",
      });
      sentCount++;
    } else {
      if (!contactEmail) {
        console.log(`   Status: ⚠️  SKIPPED — no contact email found`);
        console.log(`   → Add contact emails to tool data or use --dry-run to preview\n`);
        continue;
      }

      try {
        console.log(`   Sending to: ${contactEmail}`);
        const result = await sendViaResend(contactEmail, subject, html, text);
        console.log(`   Status: ✅ SENT (id: ${result.id})`);

        log.entries.push({
          slug: tool.slug,
          name: tool.name,
          email: contactEmail,
          sentAt: new Date().toISOString(),
          messageId: result.id,
          status: "sent",
        });
        sentCount++;

        // Rate limiting: max 2 per second
        await sleep(1000 / RATE_LIMIT_PER_SECOND);
      } catch (err: any) {
        console.log(`   Status: ❌ ERROR — ${err.message}`);
        log.entries.push({
          slug: tool.slug,
          name: tool.name,
          email: contactEmail,
          sentAt: new Date().toISOString(),
          status: "error",
          error: err.message,
        });
        errorCount++;
      }
    }
  }

  // Save log
  log.lastRun = new Date().toISOString();
  log.totalSent = log.entries.filter((e) => e.status === "sent").length;
  saveLog(log);

  console.log(`\n═══════════════════════════════════════════════════════════`);
  console.log(`  Summary`);
  console.log(`═══════════════════════════════════════════════════════════`);
  console.log(`  Processed: ${sentCount}`);
  console.log(`  Errors:    ${errorCount}`);
  console.log(`  Mode:      ${DRY_RUN ? "Dry Run" : "Live"}`);
  console.log(`  Log saved: ${LOG_PATH}`);
  console.log(`═══════════════════════════════════════════════════════════`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
