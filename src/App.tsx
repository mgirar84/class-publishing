import { type FC } from "react";

import {
  IonApp,
  IonHeader,
  IonRouterOutlet,
  IonToolbar,
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

import "./theme/custom.css";

import { Route, Redirect } from "react-router";

import HomePage from "./pages/HomePage/HomePage";
import ArticlePage from "./pages/ArticlePage/ArticlePage";
import { NewsArticlesProvider } from "./context/NewsArticlesContext";

setupIonicReact();

const App: FC = () => (
  <IonApp>
    <NewsArticlesProvider>
      <IonReactRouter>
        <IonRouterOutlet>
          <Redirect exact path="/" to="/home" />
          <Route path="/home" render={() => <HomePage />} exact={true} />
          <Route
            path="/article/:id"
            render={(props) => <ArticlePage {...props} />}
            exact={true}
          />
        </IonRouterOutlet>
      </IonReactRouter>
    </NewsArticlesProvider>
  </IonApp>
);

export default App;
