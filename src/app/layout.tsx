import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "AISO Tools — Discover the Best AI Tools",
    template: "%s | AISO Tools",
  },
  description:
    "Discover, compare, and find the best AI tools for every task. 500+ curated AI tools across writing, coding, design, marketing, and more. Updated daily.",
  keywords: [
    "AI tools",
    "best AI tools",
    "AI software",
    "AI tools directory",
    "AI tool finder",
    "artificial intelligence tools",
  ],
  metadataBase: new URL("https://aisotools.com"),
  openGraph: {
    title: "AISO Tools — Discover the Best AI Tools",
    description:
      "Discover, compare, and find the best AI tools for every task. 500+ curated AI tools updated daily.",
    url: "https://aisotools.com",
    siteName: "AISO Tools",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AISO Tools — Discover the Best AI Tools",
    description:
      "500+ curated AI tools across writing, coding, design, marketing, and more.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-950 text-gray-100 antialiased overflow-x-hidden`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
