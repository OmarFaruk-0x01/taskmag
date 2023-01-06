import type { DetailedHTMLProps, ButtonHTMLAttributes, ReactNode } from "react";
export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  startIcon?: ReactNode;
  variant?: "solid" | "ghost";
  texture?: "primary" | "danger" | "normal";
};
