export type NewsArticleResponse = {
  article_id: string;
  title: string;
  link: string;
  keywords: string[];
  creator: string[];
  video_url: string;
  description?: string;
  content: "ONLY AVAILABLE IN PAID PLANS";
  pubDate: string;
  image_url?: string;
  source_id: string;
  source_url: string;
  source_icon: string;
  source_priority: number;
  country: string[];
  category: string[];
  language: string;
  ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS";
  sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS";
  sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS";
  ai_region: "ONLY AVAILABLE IN CORPORATE PLANS";
};

export type NewsResponse = {
  status: string;
  results: NewsArticleResponse[];
  totalResults: number;
  nextpage: string;
};

export type NewsArticle = NewsArticleResponse & { isBookmarked?: boolean };
