import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit()],
  css: {
    preprocessorOptions: {
      scss: {
        // Variables and mixins will be imported manually in components
        api: "modern-compiler", // This fixes the deprecation warnings
      },
    },
  },
  // ssr: {
  //     noExternal: process.env.NODE_ENV === 'production' ? ['@sendgrid/mail'] : []
  // }
});
