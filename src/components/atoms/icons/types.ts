import type { CSSProperties, HTMLAttributes } from "react";

export type IconProps = {
  color?: CSSProperties['color'],
} & HTMLAttributes<HTMLOrSVGElement>
