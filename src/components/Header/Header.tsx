import type { FC } from "react";

import { IonHeader } from "@ionic/react";

import "./Header.css";

export type HeaderProps = {
  name: string;
};

const Header: FC<HeaderProps> = ({ name }) => {
  return <IonHeader className="container">{name}</IonHeader>;
};

export default Header;
