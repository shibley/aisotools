"use client";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              AISO
            </span>
            <span className="text-gray-400 text-sm font-medium">Tools</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="/category" className="text-gray-400 hover:text-white transition">
              Categories
            </a>
            <a href="/blog" className="text-gray-400 hover:text-white transition">
              Blog
            </a>
            <a href="/compare" className="text-gray-400 hover:text-white transition">
              Compare
            </a>
            <a
              href="/submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
            >
              Submit Tool
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-white transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800 py-4 space-y-3">
            <a
              href="/category"
              className="block text-gray-400 hover:text-white transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </a>
            <a
              href="/blog"
              className="block text-gray-400 hover:text-white transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </a>
            <a
              href="/compare"
              className="block text-gray-400 hover:text-white transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Compare
            </a>
            <a
              href="/submit"
              className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Submit Tool
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
