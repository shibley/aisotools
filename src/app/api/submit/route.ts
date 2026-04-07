import { NextRequest, NextResponse } from "next/server";
import { readFile, writeFile, mkdir } from "fs/promises";
import { join } from "path";
import crypto from "crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// NOTE: On Vercel, filesystem writes (submissions.json) won't persist across deployments.
// The email flow is the primary record. For production persistence, migrate to Vercel KV,
// Supabase, or another database. The local file is useful for development and as a backup.

const SUBMISSIONS_PATH = join(process.cwd(), "data", "submissions.json");
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const REVIEW_TOKEN = process.env.SUBMIT_REVIEW_TOKEN;
const FROM_EMAIL = "shibley@aisotools.com";
const REVIEW_EMAIL = "shibley@gmail.com";
const BASE_URL = "https://aisotools.com";

// Simple in-memory rate limiting (resets on cold start — fine for basic spam protection)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 5; // max 5 submissions per hour per IP

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) return false;
  entry.count++;
  return true;
}

interface Submission {
  id: string;
  tool_name: string;
  url: string;
  category: string;
  short_description: string;
  description: string;
  pricing: string;
  pricing_details: string;
  features: string;
  email: string;
  timestamp: string;
  status: "pending" | "approved" | "rejected";
}

async function readSubmissions(): Promise<Submission[]> {
  try {
    const data = await readFile(SUBMISSIONS_PATH, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeSubmissions(submissions: Submission[]): Promise<void> {
  try {
    await mkdir(join(process.cwd(), "data"), { recursive: true });
    await writeFile(SUBMISSIONS_PATH, JSON.stringify(submissions, null, 2));
  } catch (err) {
    console.error("Failed to write submissions.json:", err);
  }
}

async function sendEmail(to: string, subject: string, html: string) {
  if (!RESEND_API_KEY) {
    console.error("RESEND_API_KEY not configured");
    return;
  }
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `AISO Tools <${FROM_EMAIL}>`,
      to: [to],
      subject,
      html,
    }),
  });
  if (!res.ok) {
    const errText = await res.text();
    console.error("Resend error:", res.status, errText);
  }
}

function buildReviewEmailHtml(sub: Submission): string {
  const approveUrl = `${BASE_URL}/api/submit/approve?id=${sub.id}&action=approve&token=${REVIEW_TOKEN}`;
  const rejectUrl = `${BASE_URL}/api/submit/approve?id=${sub.id}&action=reject&token=${REVIEW_TOKEN}`;

  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #0f172a; color: #e2e8f0; padding: 32px; border-radius: 12px;">
      <h1 style="color: #3b82f6; margin-top: 0;">🔔 New Tool Submission</h1>

      <table style="width: 100%; border-collapse: collapse; margin: 24px 0;">
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #1e293b; color: #94a3b8; font-weight: 600; width: 140px;">Tool Name</td>
          <td style="padding: 12px; border-bottom: 1px solid #1e293b; color: #fff; font-weight: 700; font-size: 18px;">${sub.tool_name}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #1e293b; color: #94a3b8; font-weight: 600;">URL</td>
          <td style="padding: 12px; border-bottom: 1px solid #1e293b;"><a href="${sub.url}" style="color: #60a5fa;">${sub.url}</a></td>
        </tr>
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #1e293b; color: #94a3b8; font-weight: 600;">Category</td>
          <td style="padding: 12px; border-bottom: 1px solid #1e293b; color: #e2e8f0;">${sub.category}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #1e293b; color: #94a3b8; font-weight: 600;">Short Description</td>
          <td style="padding: 12px; border-bottom: 1px solid #1e293b; color: #e2e8f0;">${sub.short_description}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #1e293b; color: #94a3b8; font-weight: 600;">Description</td>
          <td style="padding: 12px; border-bottom: 1px solid #1e293b; color: #e2e8f0;">${sub.description}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #1e293b; color: #94a3b8; font-weight: 600;">Pricing</td>
          <td style="padding: 12px; border-bottom: 1px solid #1e293b; color: #e2e8f0;">${sub.pricing}${sub.pricing_details ? ` — ${sub.pricing_details}` : ""}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #1e293b; color: #94a3b8; font-weight: 600;">Features</td>
          <td style="padding: 12px; border-bottom: 1px solid #1e293b; color: #e2e8f0;">${sub.features}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #1e293b; color: #94a3b8; font-weight: 600;">Email</td>
          <td style="padding: 12px; border-bottom: 1px solid #1e293b;"><a href="mailto:${sub.email}" style="color: #60a5fa;">${sub.email}</a></td>
        </tr>
        <tr>
          <td style="padding: 12px; color: #94a3b8; font-weight: 600;">Submitted</td>
          <td style="padding: 12px; color: #94a3b8;">${new Date(sub.timestamp).toLocaleString("en-US", { timeZone: "America/Los_Angeles" })}</td>
        </tr>
      </table>

      <div style="display: flex; gap: 16px; margin-top: 24px;">
        <a href="${approveUrl}" style="display: inline-block; background: #22c55e; color: #fff; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 16px;">✅ Approve</a>
        <a href="${rejectUrl}" style="display: inline-block; background: #ef4444; color: #fff; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 16px; margin-left: 16px;">❌ Reject</a>
      </div>

      <p style="color: #64748b; font-size: 12px; margin-top: 32px;">Submission ID: ${sub.id}</p>
    </div>
  `;
}

function buildConfirmationEmailHtml(toolName: string): string {
  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #0f172a; color: #e2e8f0; padding: 32px; border-radius: 12px;">
      <h1 style="color: #3b82f6; margin-top: 0;">Thanks for submitting ${toolName}! 🎉</h1>
      <p style="font-size: 16px; line-height: 1.6;">
        We've received your submission and will review it within <strong style="color: #fff;">24 hours</strong>.
      </p>
      <p style="font-size: 16px; line-height: 1.6;">
        You'll receive an email once your tool has been reviewed. In the meantime, check out our
        <a href="https://aisotools.com/advertise" style="color: #60a5fa;">Featured listings</a>
        to get 10x more visibility.
      </p>
      <p style="color: #94a3b8; font-size: 14px; margin-top: 24px;">
        — The AISO Tools Team
      </p>
    </div>
  `;
}

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();

    // Honeypot check — if "website" field is filled, it's a bot
    if (body.website) {
      // Silently accept to not tip off bots
      return NextResponse.json({ success: true, message: "Submission received! We'll review your tool within 24 hours." });
    }

    const { tool_name, url, category, short_description, description, pricing, pricing_details, features, email } = body;

    // Validate required fields
    const missing: string[] = [];
    if (!tool_name?.trim()) missing.push("tool_name");
    if (!url?.trim()) missing.push("url");
    if (!category?.trim()) missing.push("category");
    if (!short_description?.trim()) missing.push("short_description");
    if (!description?.trim()) missing.push("description");
    if (!pricing?.trim()) missing.push("pricing");
    if (!features?.trim()) missing.push("features");
    if (!email?.trim()) missing.push("email");

    if (missing.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missing.join(", ")}` },
        { status: 400 }
      );
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Create submission
    const submission: Submission = {
      id: crypto.randomUUID(),
      tool_name: tool_name.trim(),
      url: url.trim(),
      category: category.trim(),
      short_description: short_description.trim(),
      description: description.trim(),
      pricing: pricing.trim(),
      pricing_details: (pricing_details || "").trim(),
      features: features.trim(),
      email: email.trim(),
      timestamp: new Date().toISOString(),
      status: "pending",
    };

    // Save to file (best effort — email is primary record)
    const submissions = await readSubmissions();
    submissions.push(submission);
    await writeSubmissions(submissions);

    // Send review email to admin
    await sendEmail(
      REVIEW_EMAIL,
      `🔔 New Tool Submission: ${submission.tool_name}`,
      buildReviewEmailHtml(submission)
    );

    // Send confirmation email to submitter
    await sendEmail(
      submission.email,
      `Thanks for submitting ${submission.tool_name}! — AISO Tools`,
      buildConfirmationEmailHtml(submission.tool_name)
    );

    return NextResponse.json({
      success: true,
      message: "Submission received! We'll review your tool within 24 hours.",
    });
  } catch (err) {
    console.error("Submit error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
