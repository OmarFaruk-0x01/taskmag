import { variants } from "classname-variants";
import clsx from "clsx";
import type { FC } from "react";
import type { LabelProps } from "./Label.interface";
const classes = variants({
  base: "flex items-center justify-start w-fit gap-2 py-2 px-3 text-base  rounded font-medium",
  variants: {
    variant: {
      solid: "bg-zinc-50",
      ghost: "",
    },
    texture: {
      primary: "text-primary",
      danger: "text-red-700",
      normal: "text-zinc-700",
      warning: "text-yellow-700",
    },
  },
  compoundVariants: [
    {
      className: "bg-primary-50",
      variants: { variant: "solid", texture: "primary" },
    },
    {
      className: "bg-red-50",
      variants: { variant: "solid", texture: "danger" },
    },
    {
      className: "bg-zinc-50",
      variants: { variant: "solid", texture: "normal" },
    },
    {
      className: "bg-yellow-50",
      variants: { variant: "solid", texture: "warning" },
    },
  ],
  defaultVariants: {},
});

const Label: FC<LabelProps> = ({
  className,
  startIcon,
  children,
  variant = "ghost",
  texture = "normal",
  ...props
}) => {
  return (
    <label className={clsx(className, classes({ variant, texture }))} {...props}>
      {!!startIcon && startIcon}
      <span>{children}</span>
    </label>
  );
};

export default Label;
