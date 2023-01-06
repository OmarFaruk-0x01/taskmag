import { ResponseTaskModel } from "@interfaces/models/task";

export type TaskItemProps = ResponseTaskModel & {
  type: "primary" | "danger" | "warning" | "normal";
};
