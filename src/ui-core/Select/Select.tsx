import Label from "@ui/Label";
import clsx from "clsx";
import type { FC } from "react";
import type { SelectProps } from "./Select.interface";

function Select<T>({
  items,
  renderItems,
  className,
  label,
  placeholder,
  ...props
}: SelectProps<T>) {
  return (
    <div>
      {!!label && <Label className="pl-0">{label}</Label>}
      <select
        className={clsx(
          className,
          "w-full outline-none focus:outline-none active:outline-none text-base p-2 font-medium bg-zinc-100 hover:bg-zinc-200 focus:bg-zinc-200 rounded"
        )}
        {...props}
      >
        <option value="null" selected disabled>
          {placeholder}
        </option>
        {items.map(renderItems)}
      </select>
    </div>
  );
}

export default Select;
