import type { FC } from "react";

import { IconButton } from "../IconButton";

import "./Header.css";

export type HeaderProps = {
  title: string;
};

export const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <header className="container">
      <h1 className="title">{title}</h1>
      <div className="buttonsContainer">
        <IconButton
          className="bookmarksButton"
          iconName="bookmarks"
          onClick={() => console.log("bookmarks")}
        />
        <IconButton
          className="optionsButton"
          iconName="options"
          onClick={() => console.log("options")}
        />
      </div>
    </header>
  );
};
