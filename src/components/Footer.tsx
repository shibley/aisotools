export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div>
            <h3 className="font-semibold text-white mb-3">AISO Tools</h3>
            <p className="text-gray-400 text-sm">
              Discover the best AI tools for every task. Updated daily.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">Browse</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="/category" className="hover:text-white transition">
                  All Categories
                </a>
              </li>
              <li>
                <a href="/category/writing" className="hover:text-white transition">
                  AI Writing
                </a>
              </li>
              <li>
                <a href="/category/coding" className="hover:text-white transition">
                  AI Coding
                </a>
              </li>
              <li>
                <a href="/category/image-generation" className="hover:text-white transition">
                  AI Image
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="/about" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="/advertise" className="hover:text-white transition">
                  Advertise
                </a>
              </li>
              <li>
                <a href="/submit" className="hover:text-white transition">
                  Submit Tool
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-white transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">Our Projects</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="https://apistatuscheck.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  API Status Check
                </a>
              </li>
              <li>
                <a
                  href="https://www.usersrated.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  UsersRated
                </a>
              </li>
              <li>
                <a
                  href="https://www.4dayjob.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  4DayJob
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-3">
              Get the best new AI tools in your inbox weekly.
            </p>
            <form className="flex gap-2 max-w-xs">
              <input
                type="email"
                placeholder="you@email.com"
                className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm min-w-0 flex-1 focus:outline-none focus:border-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition shrink-0">
                Join
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} AISO Tools. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
