import { NewsArticle } from "../types";

export const sortArticlesByTitle = (articles: NewsArticle[]) => {
  return articles.toSorted((a, b) => a.title.localeCompare(b.title));
};
