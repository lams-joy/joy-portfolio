import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="border-b border-[var(--border)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <a href="/" className="text-lg font-bold tracking-tight">
          JOY LAMKA
        </a>

        <div className="hidden items-center gap-8 text-sm md:flex">
          <a href="#work" className="transition-opacity hover:opacity-60">
            Work
          </a>

          <a href="#about" className="transition-opacity hover:opacity-60">
            About
          </a>

          <a href="#articles" className="transition-opacity hover:opacity-60">
            Articles
          </a>

          <a
            href="/resume/Joy-Lamka-Resume.pdf"
            className="flex items-center gap-1 rounded-full bg-[var(--foreground)] px-4 py-2 text-white transition-transform hover:-translate-y-0.5"
          >
            Resume
            <ArrowUpRight size={15} />
          </a>
        </div>
      </nav>
    </header>
  );
}