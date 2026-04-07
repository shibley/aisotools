import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const RESEND_API_KEY = process.env.RESEND_API_KEY || process.env.STRIPE_SECRET_KEY?.replace("sk_live", "") || "";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Add to Resend audience (contacts)
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      // Fallback: send notification email
      console.error("RESEND_API_KEY not set");
      return NextResponse.json(
        { error: "Newsletter signup temporarily unavailable." },
        { status: 500 }
      );
    }

    // Send welcome email to subscriber
    const welcomeRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "AISO Tools <shibley@aisotools.com>",
        to: [email],
        subject: "Welcome to the AISO Tools Newsletter! 🤖",
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1a1a2e;">Welcome to AISO Tools! 👋</h2>
            <p>Thanks for subscribing to our weekly newsletter. You'll get:</p>
            <ul>
              <li>🆕 The best new AI tools every week</li>
              <li>📊 In-depth comparisons and reviews</li>
              <li>💡 Tips on using AI tools effectively</li>
            </ul>
            <p>In the meantime, check out our <a href="https://aisotools.com/blog" style="color: #3b82f6;">latest blog posts</a> and browse <a href="https://aisotools.com/category" style="color: #3b82f6;">500+ AI tools</a>.</p>
            <p style="color: #666;">— The AISO Tools Team</p>
          </div>
        `,
      }),
    });

    // Notify admin of new subscriber
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "AISO Tools <shibley@aisotools.com>",
        to: ["shibley@gmail.com"],
        subject: `New newsletter subscriber: ${email}`,
        html: `<p>New subscriber: <strong>${email}</strong></p><p>Time: ${new Date().toISOString()}</p>`,
      }),
    });

    if (!welcomeRes.ok) {
      const err = await welcomeRes.json();
      console.error("Resend error:", err);
      return NextResponse.json(
        { error: "Something went wrong. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("Newsletter error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
