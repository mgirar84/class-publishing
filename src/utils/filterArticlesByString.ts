import { NewsArticle } from "../types";

export const filterArticlesByString = (
  query: string,
  articles: NewsArticle[]
) =>
  articles.filter((article) =>
    article.title.toLowerCase().includes(query.toLowerCase())
  );
