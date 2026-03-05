import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const PRICE_MAP: Record<string, string> = {
  basic: "price_1T7bcFF0z7MFxZQhMwg0X6EY",
  pro: "price_1T7bcFF0z7MFxZQhF1RH7lYW",
  premium: "price_1T7bcFF0z7MFxZQh5NWJWl1K",
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { plan, toolName, toolUrl, email } = body;

    const priceId = PRICE_MAP[plan];
    if (!priceId) {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
    }

    if (!toolName || !toolUrl || !email) {
      return NextResponse.json(
        { error: "Please provide tool name, URL, and email." },
        { status: 400 }
      );
    }

    const origin = req.headers.get("origin") || "https://aisotools.com";

    const metadata = {
      plan,
      tool_name: toolName,
      tool_url: toolUrl,
      contact_email: email,
    };

    // Use fetch directly to avoid Stripe SDK agent issues on Vercel
    const stripeRes = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        mode: "payment",
        "payment_method_types[0]": "card",
        "line_items[0][price]": priceId,
        "line_items[0][quantity]": "1",
        customer_email: email,
        "metadata[plan]": metadata.plan,
        "metadata[tool_name]": metadata.tool_name,
        "metadata[tool_url]": metadata.tool_url,
        "metadata[contact_email]": metadata.contact_email,
        "payment_intent_data[metadata][plan]": metadata.plan,
        "payment_intent_data[metadata][tool_name]": metadata.tool_name,
        "payment_intent_data[metadata][tool_url]": metadata.tool_url,
        "payment_intent_data[metadata][contact_email]": metadata.contact_email,
        success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/checkout/cancel`,
      }).toString(),
    });

    const session = await stripeRes.json();

    if (!stripeRes.ok) {
      console.error("Stripe error:", JSON.stringify(session));
      return NextResponse.json(
        { error: session.error?.message || "Stripe error" },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("Checkout error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
