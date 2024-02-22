import type { FC, ReactNode } from "react";

import "./Header.css";
import { IonBackButton, IonButtons } from "@ionic/react";

export type HeaderProps = {
  children?: ReactNode;
  title?: string;
  showBackButton?: boolean;
};

export const Header: FC<HeaderProps> = ({
  title,
  showBackButton,
  children,
}) => (
  <header className="container">
    {showBackButton && (
      <IonButtons slot="start" color="white">
        <IonBackButton />
      </IonButtons>
    )}
    <h1 className="title">{title}</h1>
    <div className="buttonsContainer">{children}</div>
  </header>
);
