"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Mwangaza",
    description:
      "A farm advisory dashboard that turns environmental data into practical recommendations for smallholder farmers.",
    tags: ["Go", "SQLite", "Flutter", "IoT", "Africa's Talking"],
    type: "Farm Advisory Platform",
    featured: true,
    github: "",
  },
  {
    number: "02",
    title: "Lakehub Social",
    description:
      "A social-impact platform focused on making community stories, people, and impact easier to discover and share.",
    tags: ["Product", "UX", "WordPress", "Project Management"],
    type: "Social Impact",
    featured: false,
    github: "",
  },
  {
    number: "03",
    title: "SmartDuka",
    description:
      "A digital tool designed to help local shop owners manage inventory, keep better records, and make day-to-day stock management easier.",
    tags: ["Go", "MySQL", "PWA", "Inventory"],
    type: "Business & Inventory",
    featured: false,
    github: "",
  },
];

export default function Work() {
  return (
    <section id="work" className="px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          className="flex flex-col justify-between gap-8 border-b border-[var(--border)] pb-10 md:flex-row md:items-end"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
              Selected work
            </p>

            <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              Things I&apos;ve built,
              <br />
              worked on &amp; learned from.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-[var(--muted)]">
            A mix of software, cloud, and community-focused projects that have
            shaped how I build.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="mt-12 space-y-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{
                opacity: 0,
                y: 100,
                scale: 0.97,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: false,
                amount: 0.15,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -8,
                transition: {
                  duration: 0.25,
                  ease: "easeOut",
                },
              }}
              className={`group relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-white transition-shadow duration-300 hover:shadow-2xl ${
                project.featured ? "min-h-[420px]" : "min-h-[340px]"
              }`}
            >
              <div className="flex h-full flex-col justify-between p-8 sm:p-10 lg:p-12">
                {/* Project header */}
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-[var(--muted)]">
                      {project.number}
                    </span>

                    <span className="h-px w-8 bg-[var(--border)]" />

                    <span className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--muted)]">
                      {project.type}
                    </span>
                  </div>

                  <motion.div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--border)] transition-colors duration-300 group-hover:border-[var(--foreground)] group-hover:bg-[var(--foreground)] group-hover:text-white"
                    whileHover={{ rotate: 8, scale: 1.08 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowUpRight
                      size={18}
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </motion.div>
                </div>

                {/* Project information */}
                <div className="mt-16 max-w-3xl">
                  <h3 className="text-4xl font-bold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                    {project.title}
                  </h3>

                  <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">
                    {project.description}
                  </p>
                </div>

                {/* Tags + GitHub */}
                <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--muted)] transition-colors duration-300 group-hover:border-[var(--foreground)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className="group/github flex shrink-0 items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2.5 text-sm font-medium transition-all duration-300 hover:border-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-white"
                    >
                      GitHub

                      <ArrowUpRight
                        size={14}
                        aria-hidden="true"
                        className="transition-transform group-hover/github:translate-x-0.5 group-hover/github:-translate-y-0.5"
                      />
                    </a>
                  )}
                </div>
              </div>

              {/* Joy pink decorative accent */}
              <motion.div
                className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[var(--pink)] opacity-[0.08]"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </motion.article>
          ))}
        </div>

        {/* GitHub footer */}
        <motion.div
          className="mt-10 flex items-center justify-between border-t border-[var(--border)] pt-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-sm text-[var(--muted)]">
            More projects coming as I keep building.
          </p>

          <a
            href="https://github.com/lams-joy"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-sm font-medium"
          >
            View GitHub

            <ArrowUpRight
              size={15}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}