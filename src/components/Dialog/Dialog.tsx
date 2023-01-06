import Backdrop from "@components/Backdrop";
import uiStore from "@store/uiStore";
import clsx from "clsx";
import type { FC } from "react";
import type { DialogProps } from "./Dialog.interface";

const Dialog: FC<DialogProps> = () => {
  const dialog = uiStore((state) => state.dialog);
  const closeDialog = uiStore((state) => state.closeDialog);

  return (
    <>
      <Backdrop active={!!dialog} onClick={closeDialog} />
      <div
        className={clsx(
          "fixed left-1/2 top-1/2 -translate-x-[50%] z-50 transition-all duration-500",
          {
            "-translate-y-[50%] visible opacity-100 ": !!dialog,
            "-translate-y-[40%] invisible opacity-0 ": !dialog,
          }
        )}
      >
        {dialog?.children}
      </div>
    </>
  );
};

export default Dialog;
