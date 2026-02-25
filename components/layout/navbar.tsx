"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center">
      <div className="w-full max-w-5xl px-6">
        <div className="glass rounded-2xl px-6 py-4 flex items-center justify-between">
          {/* Logo / Name */}
          <Link
            href="/"
            className="
              text-lg
              font-semibold
              tracking-tight
              hover:text-blue-400
              transition-colors
            "
          >
            Pitambar
          </Link>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-neutral-300">
            <Link
              href="#projects"
              className="hover:text-white transition-colors"
            >
              Projects
            </Link>

            <Link href="#skills" className="hover:text-white transition-colors">
              Skills
            </Link>

            <Link
              href="https://github.com"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              GitHub
            </Link>

            <Link
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
