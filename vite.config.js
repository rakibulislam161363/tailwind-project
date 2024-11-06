
import { resolve } from "path";
import { defineConfig } from "vite";


export default defineConfig({

  build: {
    rollupOptions: {
      main: resolve(__dirname, "index.html"),
      news: resolve(__dirname, "news.html"),
      jsfile: resolve(__dirname, "script.js"),
    },
  },
});