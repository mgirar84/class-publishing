import { type FC, type HTMLProps } from "react";

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
  isActive?: boolean;
} & HTMLProps<HTMLButtonElement>;

export const IconButton: FC<IconButtonProps> = ({
  iconName,
  onClick,
  iconProps,
  isActive,
}) => {
  const Icon = IconMap[iconName];
  const onPressHandler = () => onClick();

  return (
    <button className="button" onClick={onPressHandler}>
      <Icon isActive={isActive} {...iconProps} />
    </button>
  );
};
