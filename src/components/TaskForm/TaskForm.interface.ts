import { TaskModel } from "@interfaces/models/task";

export type TaskFormProps = {
  mode: "new" | "update";
  task?: TaskModel & { taskid: string };
};
