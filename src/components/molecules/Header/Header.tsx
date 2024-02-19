import type { FC } from "react";

import { IonHeader, IonTitle } from "@ionic/react";

import { IconButton } from "../IconButton";
import "./Header.css";

export type HeaderProps = {
  title: string;
};

export const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <IonHeader className="container">
      <IonTitle>{title}</IonTitle>
      <div className="buttonsContainer">
        <IconButton iconName="bookmarks" />
        <IconButton iconName="options" />
      </div>
    </IonHeader>
  );
};
