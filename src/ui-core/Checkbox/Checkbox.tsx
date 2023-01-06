import clsx from "clsx";
import type { FC } from "react";
import type { CheckboxProps } from "./Checkbox.interface";

const Checkbox: FC<CheckboxProps> = ({
  className,
  texture = "primary",
  ...props
}) => {
  return (
    <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
      <input
        placeholder="checkbox"
        type="checkbox"
        className="peer/checkbox checkbox absolute cursor-pointer w-full h-full opacity-0 z-10"
        {...props}
      />
      <div
        className={clsx(
          "peer-checked/checkbox:opacity-100 peer-hover/checkbox:opacity-20 peer-checked/checkbox:peer-hover/checkbox:opacity-100 opacity-0  text-white rounded-sm z-0",
          {
            "bg-primary-600": texture === "primary",
            "bg-red-600": texture === "danger",
          }
        )}
      >
        <svg
          className="icon icon-tabler icon-tabler-check"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z"></path>
          <path d="M5 12l5 5l10 -10"></path>
        </svg>
      </div>
    </div>
  );
};

export default Checkbox;
