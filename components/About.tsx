"use client";

import { motion } from "framer-motion";

const toolbox = [
  "Python",
  "Go",
  "Flask",
  "REST APIs",
  "Git & GitHub",
  "Docker",
  "Linux",
  "AWS",
  "Azure",
  "Microsoft Entra ID",
  "SQLite",
  "MySQL",
];

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-[var(--border)] px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--pink)]">
            A little about me
          </p>

          <h2 className="max-w-4xl text-4xl font-bold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-7xl">
            Still finding my footing.
            <br />
            Still building anyway.
          </h2>
        </motion.div>

        {/* Main content */}
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-24">
          {/* Story */}
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="text-xl leading-8 sm:text-2xl sm:leading-9">
              I&apos;m Joy, a software engineering graduate who likes figuring
              out how things work and then trying to build them myself.
            </p>

            <p className="mt-6 text-base leading-7 text-[var(--muted)] sm:text-lg">
              My background is in Microprocessor Technology &amp;
              Instrumentation, which means I&apos;ve spent time somewhere
              between software, hardware, systems, and everything in between.
              These days, I&apos;m particularly interested in software
              engineering, backend systems, cloud, and AI.
            </p>

            <p className="mt-6 text-base leading-7 text-[var(--muted)] sm:text-lg">
              I&apos;m still exploring where I want to go long-term, so I&apos;m
              giving myself permission to learn broadly, build things, break
              things, and occasionally stare at an error message for far too
              long.
            </p>

            <p className="mt-6 text-base leading-7 text-[var(--muted)] sm:text-lg">
              What matters to me is building technology that is actually
              useful. Whether that means helping a farmer make better
              decisions, making business records easier to manage, or building
              systems that solve a very specific problem, I like work that has
              a reason behind it.
            </p>

            <p className="mt-8 text-base font-medium leading-7">
              Not about knowing everything — caring enough to keep going.
            </p>
          </motion.div>

          {/* Side content */}
          <div>
            {/* Toolbox */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="mb-6 text-sm font-medium uppercase tracking-[0.15em] text-[var(--muted)]">
                My toolbox
              </p>

              <div className="flex flex-wrap gap-2">
                {toolbox.map((tool, index) => (
                  <motion.span
                    key={tool}
                    initial={{
                      opacity: 0,
                      y: 15,
                      scale: 0.95,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    viewport={{
                      once: false,
                      amount: 0.3,
                    }}
                    transition={{
                      duration: 0.35,
                      delay: 0.25 + index * 0.05,
                      ease: "easeOut",
                    }}
                    className="rounded-full border border-[var(--border)] bg-white px-4 py-2.5 text-sm transition-colors hover:border-[var(--foreground)]"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Currently exploring */}
            <motion.div
              className="mt-14 border-t border-[var(--border)] pt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: "easeOut",
              }}
            >
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.15em] text-[var(--muted)]">
                Currently exploring
              </p>

              <ul className="space-y-3 text-base">
                <li>→ Backend &amp; software engineering</li>
                <li>→ Cloud &amp; cloud security</li>
                <li>→ AI / machine learning</li>
                <li>→ Building products people actually use</li>
              </ul>
            </motion.div>

            {/* Outside the code */}
            <motion.div
              className="mt-14 rounded-[2rem] bg-[var(--foreground)] p-8 text-white"
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="text-sm uppercase tracking-[0.15em] text-white/50">
                Outside the code
              </p>

              <p className="mt-5 text-lg leading-7">
                Debater&apos;s mind. Sky Girl&apos;s energy. I&apos;m also a
                content creator who loves vlogging, riding bikes, swimming,
                and probably thinking about five different ideas at once.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}