import { type FC } from "react";

import { IonHeader, IonToolbar } from "@ionic/react";

import { Header } from "../components";

const ArticlePage: FC = () => (
  <>
    <IonHeader>
      <IonToolbar>
        <Header title="Header" />
      </IonToolbar>
    </IonHeader>
    <div></div>
  </>
);

export default ArticlePage;
