import { type FC } from "react";

import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonToolbar,
} from "@ionic/react";
import type { RouteComponentProps } from "react-router";

import { Article } from "../../components";
import { useNewsArticles } from "../../context/NewsArticlesContext";

import { bookmark, bookmarkOutline } from "ionicons/icons";

const ArticlePage: FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
  const { getArticlesByIds, toggleBookmarked } = useNewsArticles();
  const [firstArticle] = getArticlesByIds([match.params.id]);
  return (
    <>
      <IonHeader>
        <IonToolbar color="primary" >
          <IonButtons slot="start">
            <IonBackButton defaultHref="#"></IonBackButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton
              onClick={() => toggleBookmarked(firstArticle.article_id)}
            >
              <IonIcon
                slot="icon-only"
                size="large"
                icon={firstArticle.isBookmarked ? bookmark : bookmarkOutline}
              />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Article data={firstArticle} />
      </IonContent>
    </>
  );
};

export default ArticlePage;
