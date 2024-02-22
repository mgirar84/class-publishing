import { type FC, useState } from "react";

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
  IonActionSheet,
} from "@ionic/react";

import { Card } from "../../components";
import { useNewsArticles } from "../../context/NewsArticlesContext";
import { bookmarks, bookmarksOutline, options } from "ionicons/icons";
import { filterArticlesByBookmark, filterArticlesByString } from "../../utils";
import { optionsButtonConfig } from "../../constants/optionsButtonConfig";

const HomePage: FC = () => {
  const [showBookmarks, setShowBookmarks] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const { newsArticles, toggleBookmarked } = useNewsArticles();

  const handleSearch = (value?: string | null) => {
    if (!value) return setSearchQuery("");
    setSearchQuery(value);
  };

  const toggleShowBookmarks = () => setShowBookmarks((prevState) => !prevState);
  const handleShowOptions = () => setShowOptions(true);
  const handleCloseOptions = () => setShowOptions(false);

  const bookmarkedArticles = showBookmarks
    ? filterArticlesByBookmark(newsArticles)
    : newsArticles;
  const searchedArticles = filterArticlesByString(
    searchQuery,
    bookmarkedArticles
  );

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
            <IonButton onClick={handleShowOptions}>
              <IonIcon slot="icon-only" icon={options} size="large" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSearchbar
          placeholder="Search titles"
          onIonInput={(event) => handleSearch(event.detail.value)}
          debounce={1000}
        />
        {!!searchedArticles?.length && (
          <IonList>
            {searchedArticles.map((article) => (
              <li key={article.article_id}>
                <Card
                  data={article}
                  onBookmarkPress={() => toggleBookmarked(article.article_id)}
                />
              </li>
            ))}
          </IonList>
        )}
        <IonActionSheet
          isOpen={showOptions}
          header="Sort By"
          buttons={optionsButtonConfig}
          onDidDismiss={handleCloseOptions}
          className="homePageActionSheet"
        />
      </IonContent>
    </>
  );
};

export default HomePage;
