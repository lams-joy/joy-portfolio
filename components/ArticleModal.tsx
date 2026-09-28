"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Article = {
  id: number;
  title: string;
  description: string;
  url: string;
  published_at: string;
  tag_list: string[];
  reading_time_minutes: number;
};

type ArticleModalProps = {
  article: Article;
  onClose: () => void;
};

export default function ArticleModal({
  article,
  onClose,
}: ArticleModalProps) {
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    async function fetchArticle() {
      try {
        const response = await fetch(
          `https://dev.to/api/articles/${article.id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch article");
        }

        const data = await response.json();
        setContent(data.body_html);
      } catch {
        setContent("");
      } finally {
        setLoading(false);
      }
    }

    fetchArticle();

    return () => {
      document.body.style.overflow = "";
    };
  }, [article.id]);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) {
            onClose();
          }
        }}
      >
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="article-title"
          className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-[2rem] bg-[var(--background)] shadow-2xl"
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.97 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {/* Header */}
          <div className="shrink-0 border-b border-[var(--border)] bg-white px-6 py-5 sm:px-8">
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--accent)]">
                    DEV.TO
                  </span>

                  <span className="text-xs text-[var(--muted)]">
                    {new Date(article.published_at).toLocaleDateString(
                      "en-US",
                      {
                        month: "short",
                        year: "numeric",
                      }
                    )}
                  </span>

                  <span className="text-xs text-[var(--muted)]">
                    {article.reading_time_minutes} min read
                  </span>
                </div>

                <h2
                  id="article-title"
                  className="mt-3 max-w-3xl text-2xl font-bold tracking-[-0.03em] sm:text-3xl lg:text-4xl"
                >
                  {article.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close article"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border)] transition-colors hover:bg-[var(--foreground)] hover:text-white"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Article content */}
          <div className="overflow-y-auto px-6 py-8 sm:px-10 sm:py-10">
            {loading ? (
              <div className="flex min-h-[300px] items-center justify-center">
                <div className="text-sm text-[var(--muted)]">
                  Loading article...
                </div>
              </div>
            ) : content ? (
              <article
                className="article-content mx-auto max-w-3xl"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            ) : (
              <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
                <p className="text-[var(--muted)]">
                  I couldn&apos;t load the article preview.
                </p>

                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex items-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-medium text-white"
                >
                  Read on DEV.to
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="shrink-0 border-t border-[var(--border)] bg-white px-6 py-4 sm:px-8">
            <div className="flex items-center justify-between gap-4">
              <p className="hidden text-xs text-[var(--muted)] sm:block">
                Reading on Joy&apos;s portfolio
              </p>

              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto flex items-center gap-2 text-sm font-medium"
              >
                Read on DEV.to
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}