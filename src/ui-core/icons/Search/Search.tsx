import type { IconProps } from "@interfaces/icons.interface";
import type { FC } from "react";

const Search: FC<IconProps> = ({ width = "1.3em", height = "1.3em" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15.5 15.5L19 19M5 11a6 6 0 1 0 12 0a6 6 0 0 0-12 0Z"
      />
    </svg>
  );
};

export default Search;
