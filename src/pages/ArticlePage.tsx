import { type FC } from "react";

import { IonHeader, IonToolbar } from "@ionic/react";

import { Header } from "../components";
import type { RouteComponentProps } from "react-router";
import { useNewsArticles } from "../context/NewsArticlesContext";

const ArticlePage: FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
  const { getArticlesByIds } = useNewsArticles();
  const article = getArticlesByIds([match.params.id]);
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <Header />
        </IonToolbar>
      </IonHeader>
      <div>{JSON.stringify(article)}</div>
    </>
  );
};

export default ArticlePage;
