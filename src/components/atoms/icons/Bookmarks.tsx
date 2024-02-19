import type { FC } from "react";

import { IconProps } from "./types";

export const Bookmarks: FC<IconProps> = ({ color = "#ffffff" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="ionicon"
    viewBox="0 0 512 512"
  >
    <path
      d="M128 80V64a48.14 48.14 0 0148-48h224a48.14 48.14 0 0148 48v368l-80-64"
      fill="none"
      stroke={color}
      stroke-linejoin="round"
      stroke-width="32"
    />
    <path
      d="M320 96H112a48.14 48.14 0 00-48 48v352l152-128 152 128V144a48.14 48.14 0 00-48-48z"
      fill="none"
      stroke={color}
      stroke-linejoin="round"
      stroke-width="32"
    />
  </svg>
);
