import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advertise on AISO Tools — Get Your AI Tool Featured",
  description:
    "Get your AI tool in front of thousands of developers, marketers, and creators. Featured listings starting at $49. One-time payment, no subscriptions.",
  openGraph: {
    title: "Advertise on AISO Tools — Featured Listings for AI Tools",
    description:
      "Put your AI tool at the top of the largest AI tools directory. Featured listings, sponsored badges, homepage placement, and dedicated reviews. One-time pricing.",
  },
};

export default function AdvertiseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
