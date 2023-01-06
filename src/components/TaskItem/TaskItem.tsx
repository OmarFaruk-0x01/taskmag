import { FC, useMemo } from "react";
import type { TaskItemProps } from "./TaskItem.interface";
import Search from "@icons/Search";
import Button from "@ui/Button";
import Checkbox from "@ui/Checkbox";
import Label from "@ui/Label";
import clsx from "clsx";
import useUser from "@hooks/api/useUser";
import { PriorityLevel } from "@helpers/constants";
import Edit from "@icons/Edit";
import uiStore from "@store/uiStore";
import TaskForm from "@components/TaskForm";

const TaskItem: FC<TaskItemProps> = ({
  type,
  assigned_name,
  assigned_to,
  created_on,
  due_date,
  id,
  message,
  priority,
}) => {
  const { user, mutate } = useUser({ id: assigned_to });
  const openDialog = uiStore((state) => state.openDialog);
  const _priority = useMemo(() => {
    switch (priority) {
      case "1":
        return "primary";
      case "2":
        return "warning";
      case "3":
        return "danger";
      default:
        return "normal";
    }
  }, [priority]);

  const handleUpdate = () => {
    openDialog({
      children: (
        <div className="bg-white p-5 rounded w-full md:min-w-[400px]">
          <h5 className="text-lg font-semibold mb-5">Update New Task</h5>
          <TaskForm
            mode="update"
            task={{ taskid: id, message, priority, due_date, assigned_to }}
          />
        </div>
      ),
    });
  };

  return (
    <tr
      tabIndex={0}
      className={clsx("focus:outline-none h-16 rounded ", {
        "border-red-100 hover:bg-red-50/50": type === "danger",
        "border-primary-100 hover:bg-primary-50/50": type === "primary",
        "border-yellow-100 hover:bg-yellow-50/50": type === "warning",
        "border-zinc-100 hover:bg-zinc-50/50": type === "normal",
      })}
    >
      <td>
        <div className="ml-5">
          <Checkbox texture="danger" />
        </div>
      </td>
      <td className="">
        <div className="flex items-center pl-5">
          <Label>{message}</Label>
        </div>
      </td>

      <td className="pl-5">
        <Label
          variant="solid"
          className="!w-full"
          startIcon={
            <img
              src={user?.picture}
              className="rounded-full w-[25px] h-[25px] "
            />
          }
        >
          {user?.name}
        </Label>
      </td>
      <td className="pl-5">
        <Label className="!w-full" texture="danger" variant="solid">
          {!!due_date ? due_date : "Not Set"}
        </Label>
      </td>
      <td className="pl-4">
        <Label variant="solid" className="!w-full" texture={_priority}>
          {priority ? PriorityLevel[priority] : "NonPrioritized"}
        </Label>
      </td>
      <td>
        <div className="relative flex items-center justify-center gap-2">
          <Button variant="ghost" onClick={handleUpdate} startIcon={<Edit />} />
        </div>
      </td>
    </tr>
  );
};

export default TaskItem;
