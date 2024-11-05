/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_OPENAI_API_KEY: string;
    // add other environment variables here
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }