import { ArrowUpRight, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-6 py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div>
            <a
              href="/"
              className="text-lg font-bold tracking-tight transition-opacity hover:opacity-60"
            >
              JOY LAMKA
            </a>

            <p className="mt-2 text-sm text-[var(--muted)]">
              Software · Cloud · AI
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <a
              href="https://github.com/lams-joy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              GitHub
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>

            <a
              href="https://www.linkedin.com/in/joy-lamka-337810286"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              LinkedIn
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>

            <a
              href="https://dev.to/jlamka"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              DEV.to
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>

            <a
              href="mailto:lamkajoy2005@gmail.com"
              className="flex items-center gap-1 text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              Email
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>

          {/* Back to top */}
          <a
            href="#"
            className="flex w-fit items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2.5 text-sm font-medium transition-colors hover:border-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-white"
          >
            Back to top
            <ArrowUp size={15} aria-hidden="true" />
          </a>
        </div>

        {/* Bottom line */}
        <div className="mt-10 flex flex-col gap-2 border-t border-[var(--border)] pt-6 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Joy Lamka. All rights reserved.</p>

          <p>Built with Next.js &amp; curiosity.</p>
        </div>
      </div>
    </footer>
  );
}