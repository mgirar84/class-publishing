import type { FC } from "react";

import { Bookmarks, Options } from "../../atoms";
import "./IconButton.css";

const IconMap = {
  bookmarks: Bookmarks,
  options: Options,
};

type IconButtonProps = {
  iconName: keyof typeof IconMap;
};

export const IconButton: FC<IconButtonProps> = ({ iconName }) => {
  const Icon = IconMap[iconName];
  return (
    <button className="button">
      <Icon />
    </button>
  );
};
