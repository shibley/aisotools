import NewsletterBanner from "@/components/NewsletterBanner";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <NewsletterBanner />
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Join thousands of professionals who discover the best AI tools every week.
            No spam — unsubscribe anytime.
          </p>
        </div>
      </div>
    </>
  );
}
