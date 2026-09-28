import Articles from "./Articles";

type Article = {
  id: number;
  title: string;
  description: string;
  url: string;
  published_at: string;
  tag_list: string[];
  reading_time_minutes: number;
};

async function getArticles(): Promise<Article[]> {
  try {
    const response = await fetch(
      "https://dev.to/api/articles?username=jlamka&per_page=4",
      {
        next: {
          revalidate: 3600,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch DEV.to articles");
    }

    return response.json();
  } catch {
    return [];
  }
}

export default async function ArticlesSection() {
  const articles = await getArticles();

  return <Articles articles={articles} />;
}