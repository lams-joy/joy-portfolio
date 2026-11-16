"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Mwangaza",
    description:
      "A farm advisory platform that turns environmental data into practical recommendations for smallholder farmers.",
    tags: ["Go", "SQLite", "Flutter", "IoT", "Africa's Talking"],
    type: "Farm Advisory Platform",
    featured: true,
    liveUrl: "https://mwangaza-mwangaza.vercel.app/",
    caseStudy: "/work/mwangaza",
    previewImage: null,
  },
  {
    number: "02",
    title: "Amatsi",
    description:
      "A smart irrigation and water-management platform that uses soil and weather information to help farmers make better irrigation decisions.",
    tags: ["IoT", "KijaniAPI", "Africa's Talking", "LLM"],
    type: "Smart Irrigation",
    featured: false,
    liveUrl: "https://amatsi.vercel.app/",
    caseStudy: "/work/amatsi",
    previewImage: "/images/projects/amatsi-dashboard.webp",
  },
  {
    number: "03",
    title: "SmartDuka",
    description:
      "A digital tool designed to help local shop owners manage inventory, keep better records, and simplify day-to-day stock management.",
    tags: ["Go", "MySQL", "PWA", "Inventory"],
    type: "Business & Inventory",
    featured: false,
    liveUrl: null,
    caseStudy: null,
    previewImage: null,
  },
];

export default function Work() {
  return (
    <section id="work" className="px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="flex flex-col justify-between gap-8 border-b border-[var(--border)] pb-10 md:flex-row md:items-end"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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

        <div className="mt-12 space-y-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 100, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className="group relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-white transition-shadow duration-300 hover:shadow-2xl"
            >
              <div
                className={`relative z-10 grid ${
                  project.previewImage
                    ? "md:grid-cols-[1fr_0.9fr]"
                    : "grid-cols-1"
                }`}
              >
                <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
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

                    <span className="text-xs font-medium uppercase tracking-wider text-[var(--accent)]">
                      {project.featured ? "Featured" : "Project"}
                    </span>
                  </div>

                  <div className="mt-16">
                    <h3 className="text-4xl font-bold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                      {project.title}
                    </h3>

                    <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--muted)] transition-colors duration-300 group-hover:border-[var(--foreground)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-[var(--border)] pt-6">
                    {project.caseStudy && (
                      <Link
                        href={project.caseStudy}
                        className="group/link flex items-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
                      >
                        View case study
                        <ArrowUpRight
                          size={16}
                          aria-hidden="true"
                          className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                        />
                      </Link>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/live flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-3 text-sm font-medium transition-colors hover:border-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-white"
                      >
                        Live project
                        <ExternalLink
                          size={15}
                          aria-hidden="true"
                          className="transition-transform group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5"
                        />
                      </a>
                    )}
                  </div>
                </div>

                {project.previewImage && (
                  <Link
                    href={project.caseStudy || project.liveUrl || "#"}
                    className="relative min-h-[280px] overflow-hidden bg-[#201e19] md:min-h-full"
                    aria-label={`Explore the ${project.title} project`}
                  >
                    <Image
                      src={project.previewImage}
                      alt={`${project.title} dashboard preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 45vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                    <span className="absolute bottom-5 right-5 rounded-full bg-white/90 px-4 py-2 text-xs font-medium text-[#171717]">
                      Explore Amatsi
                      <ArrowUpRight
                        size={13}
                        className="ml-2 inline-block"
                      />
                    </span>
                  </Link>
                )}
              </div>

              <motion.div
                className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[var(--pink)] opacity-[0.08]"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </motion.article>
          ))}
        </div>

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