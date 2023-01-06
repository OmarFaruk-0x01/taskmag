import { SelectHTMLAttributes, DetailedHTMLProps } from "react";
export type SelectProps<T> = Omit<
  DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>,
  "children"
> & {
  items: T[];
  renderItems: (item: T) => JSX.Element;
  label?: string;
};
