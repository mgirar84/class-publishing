import { type FC, useEffect, useState } from "react";

import {
  IonSearchbar,
  IonContent,
  IonList,
  IonHeader,
  IonToolbar,
} from "@ionic/react";

import { Card, Header } from "../components";
import { NewsResponse } from "../types";

// Store this in ENV's
const API_KEY = "2da51991b0df43939a1712942eff874b";

const HomePage: FC = () => {
  const [data, setData] = useState<NewsResponse["articles"]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=gb&apiKey=${API_KEY}`
      );
      const responseData = await response.json();
      console.log(responseData);
      if (responseData?.articles) {
        setData(responseData?.articles);
      }
    };
    getData();
  }, []);

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <Header title="Header" />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSearchbar></IonSearchbar>
        {!!data?.length && (
          <IonList>
            {data.map((article, index) => (
              <Card key={article.title + index} data={article} index={index} />
            ))}
          </IonList>
        )}
      </IonContent>
    </>
  );
};

export default HomePage;
