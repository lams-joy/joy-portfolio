"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-[var(--border)] px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="relative overflow-hidden rounded-[2.5rem] bg-[var(--foreground)] px-8 py-16 text-white sm:px-12 sm:py-20 lg:px-16 lg:py-24"
          initial={{ opacity: 0, y: 80, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Joy pink decorative glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[var(--pink)] opacity-10" />

          <div className="relative z-10">
            <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
              {/* Main content */}
              <div>
                <motion.p
                  className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-white/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2,
                    ease: "easeOut",
                  }}
                >
                  Get in touch
                </motion.p>

                <motion.h2
                  className="max-w-4xl text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  Have something
                  <br />
                  worth building?
                </motion.h2>

                <motion.p
                  className="mt-8 max-w-xl text-base leading-7 text-white/60 sm:text-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.5,
                    ease: "easeOut",
                  }}
                >
                  I&apos;m always open to interesting conversations,
                  collaborations, opportunities, and ideas worth exploring.
                </motion.p>
              </div>

              {/* Contact button */}
              <motion.div
                className="flex flex-col items-start"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <a
                  href="mailto:lamkajoy65@gmail.com"
                  className="contact-button group flex w-fit items-center gap-3 rounded-full px-6 py-4 text-sm font-medium transition-transform duration-300 hover:-translate-y-1 sm:px-8 sm:py-5"
                >
                  <span>Let&apos;s talk</span>

                  <ArrowUpRight
                    size={18}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>

                <a
                  href="mailto:lamkajoy65@gmail.com"
                  className="mt-4 text-sm text-white/60 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white"
                >
                  lamkajoy65@gmail.com
                </a>
              </motion.div>
            </div>

            {/* Social links */}
            <motion.div
              className="mt-16 grid border-t border-white/10 pt-8 sm:grid-cols-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: 0.75,
                ease: "easeOut",
              }}
            >
              <a
                href="https://www.linkedin.com/in/joy-lamka-337810286"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-b border-white/10 py-5 text-sm text-white/70 transition-colors hover:text-white sm:border-b-0 sm:border-r sm:pr-8"
              >
                <span>LinkedIn</span>
                <ArrowUpRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="https://github.com/lams-joy"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-b border-white/10 py-5 text-sm text-white/70 transition-colors hover:text-white sm:border-b-0 sm:border-r sm:px-8"
              >
                <span>GitHub</span>
                <ArrowUpRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="https://dev.to/jlamka"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-5 text-sm text-white/70 transition-colors hover:text-white sm:pl-8"
              >
                <span>DEV.to</span>
                <ArrowUpRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}