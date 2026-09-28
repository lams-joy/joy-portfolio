"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import ArticleModal from "./ArticleModal";

type Article = {
  id: number;
  title: string;
  description: string;
  url: string;
  published_at: string;
  tag_list: string[];
  reading_time_minutes: number;
};

type ArticlesProps = {
  articles: Article[];
};

export default function Articles({ articles }: ArticlesProps) {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedArticle]);

  return (
    <>
      <section
        id="articles"
        className="border-t border-[var(--border)] px-6 py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
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
                Articles &amp; thoughts
              </p>

              <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                Things I&apos;ve written,
                <br />
                learned &amp; figured out.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-[var(--muted)]">
              Technical things, lessons from building, and the occasional story
              about something that refused to work.
            </p>
          </motion.div>

          {/* Articles */}
          <div className="mt-12">
            {articles.length > 0 ? (
              <div className="divide-y divide-[var(--border)]">
                {articles.map((article, index) => (
                  <motion.button
                    key={article.id}
                    type="button"
                    onClick={() => setSelectedArticle(article)}
                    className="group block w-full py-8 text-left first:pt-0 last:pb-0"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                      once: false,
                      amount: 0.15,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{
                      y: -4,
                      transition: {
                        duration: 0.25,
                        ease: "easeOut",
                      },
                    }}
                  >
                    <div className="grid gap-6 md:grid-cols-[80px_1fr_auto] md:items-start md:gap-8">
                      {/* Number */}
                      <span className="text-sm font-medium text-[var(--muted)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* Content */}
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--accent)]">
                            DEV.TO
                          </span>

                          <span className="text-xs text-[var(--muted)]">
                            {new Date(
                              article.published_at
                            ).toLocaleDateString("en-US", {
                              month: "short",
                              year: "numeric",
                            })}
                          </span>

                          <span className="text-xs text-[var(--muted)]">
                            {article.reading_time_minutes} min read
                          </span>
                        </div>

                        <h3 className="mt-3 max-w-3xl text-2xl font-semibold tracking-[-0.02em] transition-colors group-hover:text-[var(--accent)] sm:text-3xl">
                          {article.title}
                        </h3>

                        <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--muted)] sm:text-base">
                          {article.description}
                        </p>

                        {/* Tags */}
                        <div className="mt-5 flex flex-wrap gap-2">
                          {article.tag_list.slice(0, 4).map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)] transition-colors duration-300 group-hover:border-[var(--foreground)]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Arrow */}
                      <motion.div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-300 group-hover:border-[var(--foreground)] group-hover:bg-[var(--foreground)] group-hover:text-white"
                        whileHover={{
                          rotate: 8,
                          scale: 1.08,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                      >
                        <ArrowUpRight
                          size={18}
                          aria-hidden="true"
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </motion.div>
                    </div>
                  </motion.button>
                ))}
              </div>
            ) : (
              <motion.div
                className="rounded-[2rem] border border-[var(--border)] bg-white p-10 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                <p className="text-[var(--muted)]">
                  Articles are taking a little longer to load. Check back soon.
                </p>
              </motion.div>
            )}
          </div>

          {/* DEV.to link */}
          <motion.div
            className="mt-10 flex justify-end border-t border-[var(--border)] pt-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: "easeOut",
            }}
          >
            <a
              href="https://dev.to/jlamka"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm font-medium"
            >
              View all on DEV.to
              <ArrowUpRight
                size={15}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      )}
    </>
  );
}