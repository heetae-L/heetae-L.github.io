import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://heetae-l.github.io",
  vite: {
    plugins: [tailwindcss()]
  }
});
