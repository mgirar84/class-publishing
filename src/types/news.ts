export type NewsArticle = {
  title: string;
  author: string;
  description?: string;
  source: {
    id: string;
    name: string;
  };
  publishedAt: string;
  url: string;
};

export type NewsResponse = {
  status: string;
  totalResults: number;
  articles: NewsArticle[];
};
