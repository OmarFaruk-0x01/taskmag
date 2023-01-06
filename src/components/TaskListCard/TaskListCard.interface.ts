import { ResponseTaskModel } from "@interfaces/models/task";

export type TaskListCardProps = {
  title: string;
  tasks: ResponseTaskModel[];
  variant: "danger" | "primary" | "normal" | "warning";
};
