/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  readonly VITE_API_BASE_URL: string;
  // زوّد أي variables تانية عندك هنا
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
