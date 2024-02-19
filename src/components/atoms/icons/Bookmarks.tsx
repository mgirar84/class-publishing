import type { FC } from "react";

import { IconProps } from "./types";

type BookmarksProps = IconProps & {
  isActive: boolean;
};

export const Bookmarks: FC<BookmarksProps> = ({
  isActive,
  color = "#ffffff",
}) => {
  if (isActive) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ionicon"
        viewBox="0 0 512 512"
      >
        <path
          fill={color}
          d="M400 0H176a64.11 64.11 0 00-62 48h228a74 74 0 0174 74v304.89l22 17.6a16 16 0 0019.34.5 16.41 16.41 0 006.66-13.42V64a64 64 0 00-64-64z"
        />
        <path
          fill={color}
          d="M320 80H112a64 64 0 00-64 64v351.62A16.36 16.36 0 0054.6 509a16 16 0 0019.71-.71L216 388.92l141.69 119.32a16 16 0 0019.6.79 16.4 16.4 0 006.71-13.44V144a64 64 0 00-64-64z"
        />
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="ionicon"
      viewBox="0 0 512 512"
    >
      <path
        d="M128 80V64a48.14 48.14 0 0148-48h224a48.14 48.14 0 0148 48v368l-80-64"
        fill="none"
        stroke={color}
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <path
        d="M320 96H112a48.14 48.14 0 00-48 48v352l152-128 152 128V144a48.14 48.14 0 00-48-48z"
        fill="none"
        stroke={color}
        strokeLinejoin="round"
        strokeWidth="32"
      />
    </svg>
  );
};
