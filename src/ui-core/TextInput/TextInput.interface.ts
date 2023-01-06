import type { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";
export type TextInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  startIcon?: ReactNode;
  label?: string;
};
