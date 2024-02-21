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
  const { newsArticles } = useNewsArticles();
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <Header title="Header" />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSearchbar></IonSearchbar>
        {!!newsArticles?.length && (
          <IonList>
            {newsArticles.map((article, index) => (
              <li key={article.article_id}>
                <Card data={article} index={index} />
              </li>
            ))}
          </IonList>
        )}
      </IonContent>
    </>
  );
};

export default HomePage;
