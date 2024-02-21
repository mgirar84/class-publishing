import { type FC } from "react";

import { IonHeader, IonToolbar } from "@ionic/react";

import { Header } from "../components";
import type { RouteComponentProps } from "react-router";
import { useNewsArticles } from "../context/NewsArticlesContext";

const ArticlePage: FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
  console.log(match.params.id);
  const { getArticlesById } = useNewsArticles();
  const article = getArticlesById([match.params.id]);
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
