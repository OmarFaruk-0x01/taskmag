import { APIResponse } from "@interfaces/api";
import { ResponseUserModel } from "@interfaces/models/user";
import useSWR from "swr";

const empty = new Array<ResponseUserModel>(0);

const useUsers = () => {
  const { data, isLoading, mutate } =
    useSWR<APIResponse<ResponseUserModel[], "users">>("/listusers");

  const users = data?.status === "success" ? data.users : empty;

  return { users, mutate, isLoading };
};

export default useUsers;
