import { useState, type FC, type HTMLProps } from "react";

import { Bookmarks, Options } from "../../atoms";
import "./IconButton.css";

const IconMap = {
  bookmarks: Bookmarks,
  options: Options,
};

type IconButtonProps = {
  iconName: keyof typeof IconMap;
  onClick: () => void;
} & HTMLProps<HTMLButtonElement>;

export const IconButton: FC<IconButtonProps> = ({ iconName, onClick }) => {
  const [isActive, setIsActive] = useState(false);

  const Icon = IconMap[iconName];

  const toggleActive = () => setIsActive((prevState) => !prevState);

  const onPressHandler = () => {
    toggleActive();
    onClick();
  };

  return (
    <button className="button" onClick={onPressHandler}>
      <Icon isActive={isActive} />
    </button>
  );
};
