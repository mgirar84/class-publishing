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
import {
  type SortType,
  sortArticles,
  filterArticlesByBookmark,
  filterArticlesByString,
} from "../../utils";
import { optionsButtonConfig } from "../../constants/optionsButtonConfig";

const [firstButton, secondButton, thirdButton] = optionsButtonConfig;

const HomePage: FC = () => {
  const [showBookmarks, setShowBookmarks] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>();
  const [sortBy, setSortBy] = useState<SortType>();

  const { newsArticles, toggleBookmarked } = useNewsArticles();

  const handleSearch = (value: string | undefined | null) =>
    setSearchQuery(value ?? "");

  const toggleShowBookmarks = () => setShowBookmarks((prevState) => !prevState);
  const handleShowOptions = () => setShowOptions(true);
  const handleCloseOptions = () => setShowOptions(false);

  const handleSortByTitle = () => setSortBy("title");
  const handleSortByDate = () => setSortBy("date");

  const bookmarkedArticles = showBookmarks
    ? filterArticlesByBookmark(newsArticles)
    : newsArticles;

  const searchedArticles = searchQuery
    ? filterArticlesByString(searchQuery, bookmarkedArticles)
    : bookmarkedArticles;

  const sortedArticles = sortBy
    ? sortArticles(searchedArticles, sortBy)
    : searchedArticles;

  return (
    <>
      <IonHeader>
        <IonToolbar color="primary" mode="ios">
          <IonTitle class="ion-text-center">Class Blog</IonTitle>
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
        {!!sortedArticles?.length && (
          <IonList>
            {sortedArticles.map((article) => (
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
          // todo: move this out
          buttons={[
            {
              ...firstButton,
              handler: handleSortByDate,
            },
            {
              ...secondButton,
              handler: handleSortByTitle,
            },
            thirdButton,
          ]}
          onDidDismiss={handleCloseOptions}
          className="homePageActionSheet"
        />
      </IonContent>
    </>
  );
};

export default HomePage;
