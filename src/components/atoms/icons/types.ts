import type { CSSProperties, HTMLAttributes } from "react";

export type IconProps = {
  isActive?: boolean;
  color?: CSSProperties["color"];
} & HTMLAttributes<HTMLOrSVGElement>;
