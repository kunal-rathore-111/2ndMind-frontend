// telling ts about vite feature for the env variables accessing

/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_BASE_URL: string;
}


interface ImportMeta {
    readonly env: ImportMetaEnv;
}
