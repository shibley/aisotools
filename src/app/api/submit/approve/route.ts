import { NextRequest, NextResponse } from "next/server";
import { readFile, writeFile } from "fs/promises";
import { join } from "path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// NOTE: On Vercel, submissions.json may not persist across deployments.
// The email flow is the primary record. See submit/route.ts for details.

const SUBMISSIONS_PATH = join(process.cwd(), "data", "submissions.json");
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const REVIEW_TOKEN = process.env.SUBMIT_REVIEW_TOKEN;
const FROM_EMAIL = "shibley@aisotools.com";

interface Submission {
  id: string;
  tool_name: string;
  url: string;
  email: string;
  status: string;
  [key: string]: unknown;
}

async function sendEmail(to: string, subject: string, html: string) {
  if (!RESEND_API_KEY) return;
  await fetch("https://api.resend.com/emails", {
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
}

function buildApprovalEmailHtml(toolName: string): string {
  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #0f172a; color: #e2e8f0; padding: 32px; border-radius: 12px;">
      <h1 style="color: #22c55e; margin-top: 0;">🎉 ${toolName} has been approved!</h1>
      <p style="font-size: 16px; line-height: 1.6;">
        Great news! Your tool <strong style="color: #fff;">${toolName}</strong> has been reviewed and approved.
        It will be listed on AISO Tools shortly.
      </p>
      <p style="font-size: 16px; line-height: 1.6;">
        Want to boost your visibility? Check out our
        <a href="https://aisotools.com/advertise" style="color: #60a5fa;">Featured placement options</a>
        for priority positioning, badges, and dofollow backlinks.
      </p>
      <p style="color: #94a3b8; font-size: 14px; margin-top: 24px;">
        — The AISO Tools Team
      </p>
    </div>
  `;
}

function buildRejectionEmailHtml(toolName: string): string {
  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #0f172a; color: #e2e8f0; padding: 32px; border-radius: 12px;">
      <h1 style="color: #f59e0b; margin-top: 0;">Update on ${toolName}</h1>
      <p style="font-size: 16px; line-height: 1.6;">
        Thank you for submitting <strong style="color: #fff;">${toolName}</strong> to AISO Tools.
      </p>
      <p style="font-size: 16px; line-height: 1.6;">
        After review, we're unable to list it at this time. This could be because the tool doesn't
        meet our current criteria, or we already have extensive coverage in that category.
      </p>
      <p style="font-size: 16px; line-height: 1.6;">
        Feel free to resubmit in the future if your tool evolves or if you'd like to discuss,
        reach out to <a href="mailto:shibley@aisotools.com" style="color: #60a5fa;">shibley@aisotools.com</a>.
      </p>
      <p style="color: #94a3b8; font-size: 14px; margin-top: 24px;">
        — The AISO Tools Team
      </p>
    </div>
  `;
}

function htmlResponse(title: string, message: string, color: string): NextResponse {
  const html = `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><title>${title}</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>body{margin:0;background:#0f172a;color:#e2e8f0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh}
.card{background:#1e293b;padding:48px;border-radius:16px;text-align:center;max-width:480px}
h1{color:${color};font-size:28px}
p{font-size:18px;color:#94a3b8;line-height:1.6}
a{color:#60a5fa;text-decoration:none}</style></head>
<body><div class="card"><h1>${title}</h1><p>${message}</p><p><a href="https://aisotools.com">← Back to AISO Tools</a></p></div></body></html>`;

  return new NextResponse(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const action = searchParams.get("action");
  const token = searchParams.get("token");

  // Validate token
  if (!token || token !== REVIEW_TOKEN) {
    return htmlResponse("⛔ Unauthorized", "Invalid or missing review token.", "#ef4444");
  }

  if (!id) {
    return htmlResponse("⛔ Error", "Missing submission ID.", "#ef4444");
  }

  if (action !== "approve" && action !== "reject") {
    return htmlResponse("⛔ Error", "Invalid action. Use 'approve' or 'reject'.", "#ef4444");
  }

  // Try to get tool_name and email from URL params (Vercel-safe fallback)
  const urlToolName = searchParams.get("name");
  const urlEmail = searchParams.get("email");

  // Attempt to read submissions.json (local dev only — won't exist on Vercel)
  let submission: Submission | undefined;
  try {
    const data = await readFile(SUBMISSIONS_PATH, "utf-8");
    const submissions: Submission[] = JSON.parse(data);
    submission = submissions.find((s) => s.id === id);
  } catch {
    // File not found — expected on Vercel. Fall through to URL params.
  }

  // Fall back to URL params if no file record found
  const toolName = submission?.tool_name || urlToolName;
  const recipientEmail = submission?.email || urlEmail;

  if (!toolName || !recipientEmail) {
    return htmlResponse(
      "⚠️ Missing Data",
      "Could not find submission details. Please check your email for the original submission and handle manually.",
      "#f59e0b"
    );
  }

  // Send email to submitter
  if (action === "approve") {
    await sendEmail(
      recipientEmail,
      `🎉 ${toolName} has been approved! — AISO Tools`,
      buildApprovalEmailHtml(toolName)
    );
    return htmlResponse(
      "✅ Approved!",
      `${toolName} has been approved. Notification sent to ${recipientEmail}.`,
      "#22c55e"
    );
  } else {
    await sendEmail(
      recipientEmail,
      `Update on your ${toolName} submission — AISO Tools`,
      buildRejectionEmailHtml(toolName)
    );
    return htmlResponse(
      "❌ Rejected",
      `${toolName} has been rejected. A polite notification was sent to ${recipientEmail}.`,
      "#ef4444"
    );
  }
}
