/// <reference types="vite/client" />

interface ImportMetaEnvVars {
  readonly VITE_API_TOKEN: string;
  readonly VITE_BACKEND_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnvVars;
}
