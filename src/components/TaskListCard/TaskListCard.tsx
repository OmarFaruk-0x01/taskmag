import type { FC } from "react";
import type { TaskListCardProps } from "./TaskListCard.interface";
import TaskItem from "@components/TaskItem";
import clsx from "clsx";

const TaskListCard: FC<TaskListCardProps> = ({ tasks, title, variant }) => {
  const bgColor = clsx({
    "bg-primary": variant === "primary",
    "bg-red-500": variant === "danger",
    "bg-yellow-500": variant === "warning",
    "bg-zinc-400": variant === "normal",
  });
  const borderColor = clsx({
    "before:bg-primary": variant === "primary",
    "before:bg-red-500": variant === "danger",
    "before:bg-yellow-500": variant === "warning",
    "before:bg-zinc-400": variant === "normal",
  });
  return (
    <div className="">
      <div className="flex items-center gap-2 justify-start py-5">
        <div className={clsx("w-[10px] h-[10px] rounded-full", bgColor)} />
        <h5
          className={clsx(
            "relative font-semibold before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[3px] before:rounded-full",
            borderColor
          )}
        >
          {title}
        </h5>
      </div>
      <table className="w-full whitespace-nowrap">
        <tbody>
          {tasks.map((task) => (
            <TaskItem type={variant} key={task.id} {...task} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskListCard;
