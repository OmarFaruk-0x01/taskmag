import Label from "@ui/Label";
import clsx from "clsx";
import type { FC } from "react";
import type { TextInputProps } from "./TextInput.interface";

const TextInput: FC<TextInputProps> = ({
  id,
  startIcon,
  className,
  label,
  ...props
}) => {
  return (
    <div>
      {!!label && (
        <Label className="pl-0" htmlFor={label}>
          {label}
        </Label>
      )}
      <div className="relative w-full">
        <div className="absolute top-[.55rem] left-2">{startIcon}</div>
        <input
          id={label}
          className={clsx(
            className,
            "w-full outline-none focus:outline-none active:outline-none text-base p-2  font-medium bg-zinc-100 hover:bg-zinc-200 focus:bg-zinc-200 rounded",
            {
              "pl-9": Boolean(startIcon),
            }
          )}
          {...props}
        />
      </div>
    </div>
  );
};

export default TextInput;
