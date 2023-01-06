import { useMemo } from "react";
import useUsers from "./useUsers";

const useUser = ({ id }: { id?: string | null }) => {
  const { users, mutate } = useUsers();
  const user = useMemo(
    () => users?.find((user) => user.id === id),
    [users, id]
  );
  return { user, mutate };
};

export default useUser;
