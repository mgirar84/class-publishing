import { NewsArticle } from "../types";
import { sortArticlesByDate } from "./sortArticlesByDate";
import { sortArticlesByTitle } from "./sortArticlesByTitle";

export type SortType = "date" | "title";

export const sortArticles = (articles: NewsArticle[], sortBy: SortType) => {
  switch (sortBy) {
    case "date":
      return sortArticlesByDate(articles);
    case "title":
      return sortArticlesByTitle(articles);
    default:
      return articles;
  }
};
