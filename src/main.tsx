import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { SWRConfig } from "swr";
import Dialog from "@components/Dialog";
import axios from "@helpers/axios";

const fetcher = (endpoint: string) =>
  axios.get(`${endpoint}`).then((data) => data.data);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SWRConfig value={{ fetcher }}>
      <App />
      <Dialog />
    </SWRConfig>
  </React.StrictMode>
);
