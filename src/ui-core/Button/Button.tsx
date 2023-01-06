import clsx from "clsx";
import type { FC } from "react";
import type { ButtonProps } from "./Button.interface";
import { variants } from "classname-variants";

const classes = variants({
  base: "flex items-center justify-center gap-2  px-4 py-2 font-medium text-base rounded transition-colors ",
  variants: {
    variant: {
      solid: "",
      ghost: "",
      outline: "",
    },
    texture: {
      normal: "",
      danger: "",
      primary: "",
    },
    disabled: {
      true: "opacity-50",
    },
  },
  compoundVariants: [
    {
      className:
        "bg-primary active:bg-primary-700 hover:bg-primary-600 text-white",
      variants: {
        variant: "solid",
        texture: "primary",
        disabled: false,
      },
    },
    {
      className: "bg-primary  text-white cursor-not-allowed	",
      variants: {
        variant: "solid",
        texture: "primary",
        disabled: true,
      },
    },
    {
      className: "bg-red-500 active:bg-red-700 hover:bg-red-600 text-white",
      variants: {
        variant: "solid",
        texture: "danger",
        disabled: false,
      },
    },
    {
      className: "bg-red-500  text-white cursor-not-allowed	",
      variants: {
        variant: "solid",
        texture: "danger",
        disabled: true,
      },
    },
    {
      className: "bg-zinc-500 active:bg-zinc-700 hover:bg-zinc-600 text-white",
      variants: {
        variant: "solid",
        texture: "normal",
      },
    },
    {
      className:
        "bg-primary/10 active:bg-primary-600/30 hover:bg-primary-600/20 text-primary",
      variants: {
        variant: "ghost",
        texture: "primary",
        disabled: false,
      },
    },
    {
      className: "bg-primary/10  text-primary cursor-not-allowed	",
      variants: {
        variant: "ghost",
        texture: "primary",
        disabled: true,
      },
    },
    {
      className:
        "bg-red-500/10 active:bg-red-600/30 hover:bg-red-600/20 text-red-500",
      variants: {
        variant: "ghost",
        texture: "danger",
        disabled: false,
      },
    },
    {
      className: "bg-red-500/10  text-red-500 cursor-not-allowed",
      variants: {
        variant: "ghost",
        texture: "danger",
        disabled: true,
      },
    },
    {
      className:
        "bg-zinc-500/10 active:bg-zinc-600/30 hover:bg-zinc-600/20 text-zinc-500",
      variants: {
        variant: "ghost",
        texture: "normal",
      },
    },
  ],
});

const Button: FC<ButtonProps> = ({
  startIcon,
  className,
  children,
  variant = "solid",
  texture = "normal",
  disabled,
  ...props
}) => {
  return (
    <button
      className={clsx(className, classes({ variant, texture, disabled }))}
      {...props}
    >
      <span
        className={clsx({
          hidden: !Boolean(startIcon),
        })}
      >
        {startIcon}
      </span>
      {children}
    </button>
  );
};

export default Button;
