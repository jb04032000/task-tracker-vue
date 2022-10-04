import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  proxy: {
    "/api": {
      target: "http://localhost:5000",
      rewrite: (path) => path.replace(/^\/api/, ""),
      changeOrigin: true,
      secure: false,
      logLevel: "debug",
    },
  },
});
