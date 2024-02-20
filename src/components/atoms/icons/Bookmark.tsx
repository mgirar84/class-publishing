import type { FC } from "react";

import { IconProps } from "./types";

export const Bookmark: FC<IconProps> = ({ color = "#ffffff", ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="ionicon"
    viewBox="0 0 512 512"
    {...rest}
  >
    <path
      d="M352 48H160a48 48 0 00-48 48v368l144-128 144 128V96a48 48 0 00-48-48z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
    />
  </svg>
);
