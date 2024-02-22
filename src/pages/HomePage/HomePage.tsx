import { type FC, useEffect, useState } from "react";

import {
  IonSearchbar,
  IonContent,
  IonList,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonTitle,
  IonIcon,
} from "@ionic/react";

import { Card, Header, IconButton } from "../../components";
import { useNewsArticles } from "../../context/NewsArticlesContext";
import { bookmarks, bookmarksOutline, options } from "ionicons/icons";

const HomePage: FC = () => {
  const [showBookmarks, setShowBookmarks] = useState(false);
  const { newsArticles, toggleBookmarked, getBookmarkedArticles } =
    useNewsArticles();

  const toggleShowBookmarks = () => setShowBookmarks((prevState) => !prevState);
  const bookmarkedArticles = getBookmarkedArticles();
  const articles = showBookmarks ? bookmarkedArticles : newsArticles;

  const handleOptionsPress = () => console.log("options");

  return (
    <>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>App Class</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={toggleShowBookmarks}>
              <IonIcon
                slot="icon-only"
                icon={showBookmarks ? bookmarks : bookmarksOutline}
                size="large"
              />
            </IonButton>
            <IonButton onClick={handleOptionsPress}>
              <IonIcon slot="icon-only" icon={options} size="large" />
            </IonButton>
          </IonButtons>
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
