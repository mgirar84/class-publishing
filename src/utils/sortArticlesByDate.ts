import { NewsArticle } from "../types";

export const sortArticlesByDate = (articles: NewsArticle[]) =>
  articles.toSorted((a, b) => {
    const aDate = new Date(a.pubDate);
    const bDate = new Date(b.pubDate);
    return aDate.getTime() - bDate.getTime();
  });
