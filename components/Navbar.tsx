"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;
      const difference = currentScrollY - lastScrollY.current;

      // Always show the navbar near the top of the page.
      if (currentScrollY < 50) {
        setVisible(true);
      }
      // Ignore tiny scroll movements.
      else if (Math.abs(difference) < 5) {
        return;
      }
      // Scrolling down → hide.
      else if (difference > 0) {
        setVisible(false);
      }
      // Scrolling up → show.
      else {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed left-0 right-0 top-0 z-40 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-sm"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <a
          href="/"
          className="text-lg font-bold tracking-tight transition-opacity hover:opacity-60"
        >
          JOY LAMKA
        </a>

        <div className="hidden items-center gap-8 text-sm md:flex">
          <a
            href="#about"
            className="transition-opacity hover:opacity-60"
          >
            About
          </a>

          <a
            href="#work"
            className="transition-opacity hover:opacity-60"
          >
            Work
          </a>

          <a
            href="#articles"
            className="transition-opacity hover:opacity-60"
          >
            Articles
          </a>

          <a
            href="#contact"
            className="transition-opacity hover:opacity-60"
          >
            Contact
          </a>

          <a
            href="/resume/Joy-Lamka-Resume.pdf"
            className="button-dark flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-transform hover:-translate-y-0.5"
          >
            Resume
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </nav>
    </motion.header>
  );
}