import { type FC } from "react";

import { IonHeader, IonToolbar } from "@ionic/react";

import { Header } from "../components";
import type { RouteComponentProps } from "react-router";
import { useNewsArticles } from "../context/NewsArticlesContext";

const ArticlePage: FC<RouteComponentProps> = (props) => {
  const { newsArticles } = useNewsArticles();
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <Header />
        </IonToolbar>
      </IonHeader>
      <div></div>
    </>
  );
};

export default ArticlePage;
