import type { TaskListCardProps } from "@components/TaskListCard/TaskListCard.interface";
import type { ResponseTaskModel } from "@interfaces/models/task";
import { ChangeEvent, useCallback, useMemo, useState } from "react";
import useTasks from "@hooks/api/useTasks";
import TextInput from "@ui/TextInput";
import Search from "@icons/Search";
import Button from "@ui/Button";
import TaskListCard from "@components/TaskListCard";
import useDebounce from "@hooks/useDebounce";
import { INPUT_DELAY } from "@helpers/constants";
import uiStore from "@store/uiStore";
import TaskForm from "@components/TaskForm";

function App() {
  const openDialog = uiStore((state) => state.openDialog);
  const { tasks } = useTasks();
  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebounce(searchText, INPUT_DELAY);

  const sections = useMemo(() => {
    const higher: ResponseTaskModel[] = [];
    const medium: ResponseTaskModel[] = [];
    const normal: ResponseTaskModel[] = [];
    const nones: ResponseTaskModel[] = [];
    const filteredTasks = tasks.filter((task) =>
      task.message.includes(debouncedSearchText)
    );
    filteredTasks.forEach((task) => {
      switch (task.priority) {
        case "1": {
          normal.push(task);
          break;
        }
        case "2": {
          medium.push(task);
          break;
        }
        case "3": {
          higher.push(task);
          break;
        }
        default:
          nones.push(task);
      }
    });
    return { higher, medium, normal, nones };
  }, [tasks, debouncedSearchText]);

  const color = useCallback(
    (key: string) =>
      ({
        medium: "warning",
        higher: "danger",
        normal: "primary",
        nones: "normal",
      }[key]!),
    [sections]
  );

  const handleSearch = (ev: ChangeEvent<HTMLInputElement>) => {
    setSearchText(ev.target.value);
  };
  const showTaskDialog = () => {
    openDialog({
      children: (
        <div className="bg-white p-5 rounded">
          <h5 className="text-lg font-semibold mb-5">Add New Task</h5>
          <TaskForm mode="new" />
        </div>
      ),
    });
  };

  console.log(sections);

  return (
    <div className="bg-white min-h-screen">
      <div className="container p-5">
        <div className="flex justify-between items-center py-5  ">
          <TextInput
            onChange={handleSearch}
            startIcon={<Search />}
            placeholder="Search.."
            type="search"
            value={searchText}
          />
          <Button onClick={showTaskDialog}>Add Task</Button>
        </div>
        <div className="grid grid-cols-1">
          {Object.entries(sections).map(([title, tasks]) => {
            if (debouncedSearchText && tasks.length === 0) {
              return <></>;
            } else {
              return (
                <TaskListCard
                  // @ts-expect-error
                  variant={color(title) || "normal"}
                  key={title}
                  title={title.toUpperCase()}
                  tasks={tasks}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
