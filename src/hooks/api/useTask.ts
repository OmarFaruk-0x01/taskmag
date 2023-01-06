import { useMemo } from "react";
import useTasks from "./useTasks";

const useTask = ({ id }: { id?: string }) => {
  const { tasks, isLoading, mutate } = useTasks();

  const task = useMemo(() => tasks?.find((tasks) => tasks.id === id), [tasks]);

  return { task, mutate, isLoading };
};

export default useTask;
