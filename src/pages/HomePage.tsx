import { type FC, useEffect, useState } from "react";

import {
  IonSearchbar,
  IonContent,
  IonList,
  IonHeader,
  IonToolbar,
} from "@ionic/react";

import { Card, Header } from "../components";
import { useNewsArticles } from "../context/NewsArticlesContext";

const HomePage: FC = () => {
  const [showBookmarks, setShowBookmarks] = useState(false);
  const { newsArticles, toggleBookmarked, getBookmarkedArticles } =
    useNewsArticles();

  const toggleShowBookmarks = () => setShowBookmarks((prevState) => !prevState);
  const bookmarkedArticles = getBookmarkedArticles();
  const articles = showBookmarks ? bookmarkedArticles : newsArticles;

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <Header
            title="Header"
            onBookmarkPress={toggleShowBookmarks}
            onOptionsPress={() => console.log("options press")}
          />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSearchbar></IonSearchbar>
        {!!articles?.length && (
          <IonList>
            {articles.map((article) => (
              <li key={article.article_id}>
                <Card
                  data={article}
                  onBookmarkPress={() => toggleBookmarked(article.article_id)}
                />
              </li>
            ))}
          </IonList>
        )}
      </IonContent>
    </>
  );
};

export default HomePage;
