/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string,
    readonly VITE_HOST_NAME: string,
    readonly VITE_FACEBOOK_APP_ID: string,
    readonly VITE_API_HOST: string
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }