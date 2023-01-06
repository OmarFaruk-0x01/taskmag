import axios from "@helpers/axios";
import { TaskModel } from "@interfaces/models/task";

export const addTask = (task: FormData) =>
  axios.post("/create", task, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const updateTask = (task: FormData) =>
  axios.post("/update", task, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const deleteTask = (data: FormData) =>
  axios.post("/delete", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
