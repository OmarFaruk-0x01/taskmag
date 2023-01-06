import type {
  DetailedHTMLProps,
  HTMLAttributes,
  LabelHTMLAttributes,
  ReactNode,
} from "react";

export type LabelProps = DetailedHTMLProps<
  LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
> & {
  startIcon?: ReactNode;
  variant?: "solid" | "ghost";
  texture?: "primary" | "danger" | "normal" | "warning";
};
