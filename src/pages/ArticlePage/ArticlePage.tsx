import { type FC } from "react";

import { IonContent, IonHeader, IonToolbar } from "@ionic/react";
import type { RouteComponentProps } from "react-router";

import { Article, Header, IconButton } from "../../components";
import { useNewsArticles } from "../../context/NewsArticlesContext";

const ArticlePage: FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
  const { getArticlesByIds, toggleBookmarked } = useNewsArticles();
  const [firstArticle] = getArticlesByIds([match.params.id]);
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <Header showBackButton>
            <IconButton
              iconName="bookmark"
              onClick={() => toggleBookmarked(firstArticle.article_id)}
              isActive={firstArticle?.isBookmarked}
            />
          </Header>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Article data={firstArticle} />
      </IonContent>
    </>
  );
};

export default ArticlePage;
