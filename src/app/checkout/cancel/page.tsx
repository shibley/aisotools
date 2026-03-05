import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Checkout Cancelled — AISO Tools",
  description: "Your checkout was cancelled. No charges were made.",
};

export default function CheckoutCancelPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-800 border border-gray-700 rounded-full mb-8">
        <span className="text-4xl">↩️</span>
      </div>
      <h1 className="text-4xl font-bold mb-4">Checkout Cancelled</h1>
      <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
        No worries — no charges were made. You can always come back and get a 
        featured listing when you&apos;re ready.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/advertise"
          className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          View Plans Again
        </Link>
        <Link
          href="/submit"
          className="inline-flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          Submit Free Listing
        </Link>
      </div>
      <p className="text-gray-500 text-sm mt-8">
        Have questions?{" "}
        <a href="mailto:shibley@saasintegrate.com" className="text-blue-400 hover:text-blue-300">
          Contact us
        </a>{" "}
        and we&apos;ll help you pick the right plan.
      </p>
    </div>
  );
}
