import {
  type FC,
  type ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

import { NewsArticle, NewsResponse } from "../types";

// This should come from ENV's
const API_KEY = "pub_38701c2312fec503d32b7653b02ff18876ef2";

type NewsArticleContextT = {
  newsArticles: NewsArticle[] | undefined;
  updateNewsArticles: (newsArticles: NewsArticle[]) => void;
};

type NewsProviderProps = {
  children: ReactNode; // ReactNode allows any valid JSX to be passed as children
};

const NewsArticlesContext = createContext<NewsArticleContextT>({
  newsArticles: [],
  updateNewsArticles: () => {},
});

export const NewsArticlesProvider: FC<NewsProviderProps> = ({ children }) => {
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://newsdata.io/api/1/news?apikey=${API_KEY}&language=en`
      );
      const responseData: NewsResponse = await response.json();
      console.log(responseData);
      if (responseData?.results) {
        setNewsArticles(responseData?.results);
      }
    };
    getData();
  }, []);

  return (
    <NewsArticlesContext.Provider
      value={{ newsArticles, updateNewsArticles: setNewsArticles }}
    >
      {children}
    </NewsArticlesContext.Provider>
  );
};

export const useNewsArticles = () => {
  const context = useContext(NewsArticlesContext);
  if (!context) {
    throw new Error(
      "useNewsArticles must be used within a NewsArticlesProvider"
    );
  }
  return context;
};
