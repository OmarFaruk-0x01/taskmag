import { APIResponse } from "@interfaces/api";
import { ResponseTaskModel } from "@interfaces/models/task";
import useSWR from "swr";

const empty = new Array<ResponseTaskModel>(0);

const useTasks = () => {
  const { data, isLoading, mutate } =
    useSWR<APIResponse<ResponseTaskModel[], "tasks">>("/list");

  const tasks = data?.status === "success" ? data.tasks : empty;

  return { tasks, mutate, isLoading };
};

export default useTasks;
