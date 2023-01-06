import Axios from "axios";

const axios = Axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
  headers: {
    AuthToken: import.meta.env.VITE_API_TOKEN,
  },
});

export default axios;
