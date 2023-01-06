import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@hooks", replacement: path.resolve(__dirname, "./src/hooks/") },
      {
        find: "@interfaces",
        replacement: path.resolve(__dirname, "./src/interfaces/"),
      },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "./src/components/"),
      },
      { find: "@ui", replacement: path.resolve(__dirname, "./src/ui-core/") },
      {
        find: "@icons",
        replacement: path.resolve(__dirname, "./src/ui-core/icons/"),
      },
      {
        find: "@helpers",
        replacement: path.resolve(__dirname, "./src/helpers/"),
      },
      {
        find: "@store",
        replacement: path.resolve(__dirname, "./src/store/"),
      },
    ],
  },
});
