import type { FC, ReactNode } from "react";

import "./Header.css";
import { IonBackButton, IonButtons } from "@ionic/react";

export type HeaderProps = {
  children?: ReactNode;
  title?: string;
  showBackButton?: boolean;
};

export const Header: FC<HeaderProps> = ({ title, showBackButton, children }) => {
  return (
    <header className="container">
      <h1 className="title">{title}</h1>
      <div className="buttonsContainer">
        {showBackButton && (
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
        )}
        {children}
      </div>
    </header>
  );
};
