import type { FC, ReactNode } from "react";

import "./Header.css";

export type HeaderProps = {
  children?: ReactNode;
  title?: string;
};

export const Header: FC<HeaderProps> = ({
  title,
  children,
}) => (
  <header className="container">
    <h1 className="title">{title}</h1>
    <div className="buttonsContainer">{children}</div>
  </header>
);
