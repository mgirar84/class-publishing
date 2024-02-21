import type { FC } from "react";

import { IconButton } from "../IconButton";

import "./Header.css";

export type HeaderProps = {
  onBookmarkPress: () => void;
  onOptionsPress: () => void;
  title?: string;
};

export const Header: FC<HeaderProps> = ({
  title,
  onBookmarkPress,
  onOptionsPress,
}) => {
  const bookmarkPressHandler = () => {
    onBookmarkPress();
  };
  const optionsPressHandler = () => {
    onOptionsPress();
  };
  return (
    <header className="container">
      <h1 className="title">{title}</h1>
      <div className="buttonsContainer">
        <IconButton
          className="bookmarksButton"
          iconName="bookmarks"
          onClick={bookmarkPressHandler}
        />
        <IconButton
          className="optionsButton"
          iconName="options"
          onClick={optionsPressHandler}
        />
      </div>
    </header>
  );
};
