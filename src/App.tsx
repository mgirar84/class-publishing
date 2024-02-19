import {
  IonApp,
  IonContent,
  IonInfiniteScroll,
  IonList,
  IonSearchbar,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { Header, Card } from "./components";
import { FC, useEffect, useState } from "react";
import { NewsResponse } from "./types";

setupIonicReact();

const API_KEY = "2da51991b0df43939a1712942eff874b";

const App: FC = () => {
  const [data, setData] = useState<NewsResponse["articles"]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=gb&apiKey=2da51991b0df43939a1712942eff874b"
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
    <IonApp>
      <Header title="Header"></Header>
      <IonReactRouter></IonReactRouter>
      <IonSearchbar></IonSearchbar>
      <IonContent>
        {!!data?.length && (
          <IonList>
            {data.map((article, index) => (
              <Card key={article.title + index} data={article} />
            ))}
          </IonList>
        )}
      </IonContent>
    </IonApp>
  );
};

export default App;
