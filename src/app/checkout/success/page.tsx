import Link from "next/link";

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/15 to-amber-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-10 text-center backdrop-blur-sm">
            <div className="text-5xl mb-4">✅</div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Payment Successful</h1>
            <p className="text-gray-400 text-lg mb-6">
              Thanks for upgrading your listing. We&apos;ll review your tool and
              publish your featured placement within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition"
              >
                Back to Directory
              </Link>
              <Link
                href="/submit"
                className="inline-flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl font-semibold transition"
              >
                Submit Another Tool
              </Link>
            </div>
            <p className="text-gray-500 text-sm mt-6">
              Need help?{" "}
              <a
                href="mailto:shibley@apistatuscheck.com"
                className="text-blue-400 hover:text-blue-300"
              >
                shibley@apistatuscheck.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
