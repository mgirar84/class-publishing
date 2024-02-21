import { useState, type FC, type HTMLProps } from "react";

import { Bookmark, Bookmarks, Options } from "../../atoms";
import "./IconButton.css";
import { IconProps } from "../../atoms/icons/types";

const IconMap = {
  bookmarks: Bookmarks,
  options: Options,
  bookmark: Bookmark,
} as const;

type IconButtonProps = {
  iconName: keyof typeof IconMap;
  onClick: () => void;
  iconProps?: IconProps;
  isActiveForced?: boolean;
} & HTMLProps<HTMLButtonElement>;

export const IconButton: FC<IconButtonProps> = ({
  iconName,
  onClick,
  iconProps,
  isActiveForced,
}) => {
  const [isActive, setIsActive] = useState(false);

  const Icon = IconMap[iconName];

  const toggleActive = () => setIsActive((prevState) => !prevState);

  const onPressHandler = () => {
    toggleActive();
    onClick();
  };

  return (
    <button className="button" onClick={onPressHandler}>
      <Icon isActive={isActiveForced || isActive} {...iconProps} />
    </button>
  );
};
