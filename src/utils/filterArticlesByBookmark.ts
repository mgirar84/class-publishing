import { NewsArticle } from "../types";

export const filterArticlesByBookmark = (articles: NewsArticle[]) =>
  articles?.filter((article) => article.isBookmarked);
