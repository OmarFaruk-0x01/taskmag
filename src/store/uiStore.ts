import type { ReactNode } from "react";
import create from "zustand";
import { devtools } from "zustand/middleware";

export type OpenDialogType = {
  children: ReactNode;
};
// UI Store Types
export type UiStoreType = {
  overlay: boolean;
  dialog: OpenDialogType | null;
  openDialog: (opt: OpenDialogType) => void;
  closeDialog: () => void;
};

const uiStore = create<UiStoreType, [["zustand/devtools", never]]>(
  devtools((set, get) => ({
    overlay: false,
    dialog: null,
    openDialog(opt) {
      set({ dialog: opt, overlay: true });
    },
    closeDialog() {
      set({ dialog: null, overlay: false });
    },
  }))
);

export default uiStore;
