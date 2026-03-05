import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Payment Successful — AISO Tools",
  description: "Your featured listing payment was successful. We'll set up your listing within 24 hours.",
};

export default function CheckoutSuccessPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/10 border border-green-500/20 rounded-full mb-8">
        <span className="text-4xl">✅</span>
      </div>
      <h1 className="text-4xl font-bold mb-4">Payment Successful!</h1>
      <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
        Thank you for choosing a featured listing on AISO Tools. We&apos;ll set up your 
        listing within <strong className="text-white">24 hours</strong> and email you 
        a confirmation once it&apos;s live.
      </p>
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8 text-left">
        <h2 className="font-semibold text-lg mb-3">What happens next?</h2>
        <ul className="space-y-2 text-gray-400 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-green-400 mt-0.5">✓</span>
            <span>Your payment has been received and confirmed</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-400 mt-0.5">→</span>
            <span>We&apos;ll review your tool details and set up your featured listing</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-400 mt-0.5">→</span>
            <span>You&apos;ll receive an email confirmation when your listing is live</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-400 mt-0.5">→</span>
            <span>Your featured badge and priority placement will be active within 24h</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          Back to Home
        </Link>
        <Link
          href="/directory"
          className="inline-flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          Browse Directory
        </Link>
      </div>
      <p className="text-gray-500 text-sm mt-8">
        Questions? Email{" "}
        <a href="mailto:shibley@saasintegrate.com" className="text-blue-400 hover:text-blue-300">
          shibley@saasintegrate.com
        </a>
      </p>
    </div>
  );
}
