import { IconProps } from "@interfaces/icons.interface";
import type { FC } from "react";
import type { PlusProps } from "./Plus.interface";

const Plus: FC<IconProps> = ({ width = "1.3em", height = "1.3em" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
    </svg>
  );
};

export default Plus;
