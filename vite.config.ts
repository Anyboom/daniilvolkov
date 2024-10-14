import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

import tailwindcss from "tailwindcss";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import eslint from "vite-plugin-eslint";
import { resolve } from "path";

import autoprefixer from "autoprefixer";

export default defineConfig({
  base: "/daniilvolkov.github.io/",
  plugins: [vue(), vueDevTools(), eslint()],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
