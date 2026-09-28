"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="px-6 pb-16 pt-28 lg:px-8 lg:pb-24 lg:pt-32">
      <div className="mx-auto max-w-7xl">
        {/* Software Engineer */}
        <motion.div
          className="mb-12 flex items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />

          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
            Software Engineer
          </p>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left side */}
          <div>
            {/* Headline */}
            <motion.h1
              className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Hi, I&apos;m Lamka.
              <br />
              I build software
              <br />
              <span className="text-[var(--accent)]">
                that solves problems.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="mt-8 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{
                duration: 0.6,
                delay: 0.45,
                ease: "easeOut",
              }}
            >
              I&apos;m a software engineer at Zone01Kisumu interested in building
              useful technology across software, backend systems, cloud, and
              AI.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{
                duration: 0.6,
                delay: 0.6,
                ease: "easeOut",
              }}
            >
              <a
                href="#work"
                className="button-dark group flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-transform hover:-translate-y-1"
              >
                View my work

                <ArrowUpRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="/resume/Joy-Lamka-Resume.pdf"
                className="button-light flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-colors"
              >
                Download résumé
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="mt-10 flex items-center gap-6 text-sm font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: 0.75,
              }}
            >
              <a
                href="https://github.com/lams-joy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/joy-lamka-337810286"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                LinkedIn
              </a>
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            className="relative mx-auto w-full max-w-lg lg:mx-0 lg:ml-auto"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{
              duration: 0.9,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Joy pink decorative circle */}
            <div className="absolute -right-5 -top-5 z-0 h-28 w-28 rounded-full border border-[var(--pink)] lg:-right-10 lg:-top-10" />

            <div className="relative z-10 overflow-hidden rounded-[2.5rem] bg-white">
              <Image
                src="/images/joy-new.jpg"
                alt="Joy Lamka"
                width={700}
                height={850}
                priority
                className="h-[520px] w-full object-cover transition-transform duration-700 hover:scale-105 lg:h-[650px]"
              />
            </div>

            {/* Currently card */}
            <motion.div
              className="absolute -bottom-6 -left-6 z-20 rounded-2xl border border-[var(--border)] bg-white px-6 py-5 shadow-sm"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: 0.9,
                ease: "easeOut",
              }}
            >
              <p className="text-xs uppercase tracking-widest text-[var(--muted)]">
                Currently
              </p>

              <p className="mt-1 text-sm font-medium">
                Building &amp; learning
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom divider */}
        <motion.div
          className="mt-20 flex items-center justify-between border-t border-[var(--border)] pt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: 0.6,
            delay: 1.05,
          }}
        >
          <p className="text-sm text-[var(--muted)]">
            Software · Cloud · AI
          </p>

          <a
            href="#work"
            className="flex items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            Scroll to explore
            <ArrowDown size={16} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}