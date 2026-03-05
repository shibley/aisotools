import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

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

    const origin = req.headers.get("origin") || "https://aisotools.com";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      customer_email: email || undefined,
      metadata: {
        plan,
        tool_name: toolName || "",
        tool_url: toolUrl || "",
        contact_email: email || "",
      },
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("Stripe checkout error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
