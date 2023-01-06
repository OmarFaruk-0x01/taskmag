export type TaskModel = {
  message: string;
  assigned_to: string | null;
  due_date: string | null;
  priority: "1" | "2" | "3" | null;
};

export type ResponseTaskModel = TaskModel & {
  id: string;
  assigned_name: string;
  created_on: string;
};
