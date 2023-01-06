import { PriorityLevel } from "@helpers/constants";
import useUsers from "@hooks/api/useUsers";
import { UserModel } from "@interfaces/models/user";
import Button from "@ui/Button";
import Select from "@ui/Select";
import TextInput from "@ui/TextInput";
import { FC, useCallback, useEffect, useMemo } from "react";
import type { TaskFormProps } from "./TaskForm.interface";
import { useFormik } from "formik";
import { TaskModel } from "@interfaces/models/task";
import { addTask, deleteTask, updateTask } from "@store/api";
import useTasks from "@hooks/api/useTasks";
import uiStore from "@store/uiStore";
import Spin from "@icons/Spin";
import Plus from "@icons/Plus";
import Delete from "@icons/Delete";
const TaskForm: FC<TaskFormProps> = ({ mode, task }) => {
  const { users } = useUsers();
  const { mutate } = useTasks();
  const closeDialog = uiStore((state) => state.closeDialog);
  const formik = useFormik<TaskModel & { taskid?: string }>({
    initialValues: {
      assigned_to: null,
      due_date: null,
      message: "",
      priority: null,
    },
    async onSubmit(values, formikHelpers) {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        if (!!value) {
          formData.append(key, value);
        }
      });
      try {
        const api = mode === "new" ? addTask : updateTask;
        const resp = await api(formData);
        await mutate();
        formik.setSubmitting(false);
        closeDialog();
      } catch (err) {
        formik.setSubmitting(false);
        console.log(err);
      }
    },
  });
  const priorityLevel = useMemo(
    () =>
      Object.entries(PriorityLevel).map(([value, label]) => ({ label, value })),
    []
  );
  const renderPriority = useCallback(
    (item: typeof priorityLevel[0]) => (
      <option value={item.value}>{item.label}</option>
    ),
    []
  );
  const renderUsers = useCallback(
    (item: UserModel) => <option value={item.id}>{item.name}</option>,
    []
  );

  const handleDelete = async () => {
    const form = new FormData();
    form.append("taskid", formik.values.taskid!);
    await deleteTask(form);
    await mutate();
    closeDialog();
  };

  useEffect(() => {
    if (mode === "update" && !!task) {
      formik.setValues(task);
    }
  }, [task, mode]);
  return (
    <div className="flex flex-col gap-2 ">
      <TextInput
        label="Task"
        placeholder="task"
        name="message"
        onChange={formik.handleChange}
        value={formik.values.message}
      />
      <div className="flex gap-3 items-center">
        <TextInput
          type="date"
          label="Due Date"
          name="due_date"
          value={formik.values.due_date!}
          onChange={formik.handleChange}
        />
        <Select
          label="Priority"
          items={priorityLevel}
          placeholder="priority"
          value={formik.values.priority || "null"}
          renderItems={renderPriority}
          name="priority"
          onChange={formik.handleChange}
        />
      </div>
      <Select
        label="Assign To"
        items={users}
        placeholder="select user"
        renderItems={renderUsers}
        value={formik.values.assigned_to || "null"}
        name="assigned_to"
        onChange={formik.handleChange}
      />
      <div className="flex items-center flex-col md:flex-row gap-2">
        {mode === "update" && (
          <Button
            className="w-full"
            texture="danger"
            variant="ghost"
            startIcon={<Delete />}
            onClick={handleDelete}
          >
            Delete
          </Button>
        )}
        <Button
          // @ts-expect-error
          onClick={formik.handleSubmit}
          className="w-full"
          texture="primary"
          startIcon={(formik.isSubmitting && <Spin />) || <Plus />}
          disabled={formik.values.message === ""}
        >
          {mode === "new" ? "Submit Task" : "Update Task"}
        </Button>
      </div>
    </div>
  );
};

export default TaskForm;
