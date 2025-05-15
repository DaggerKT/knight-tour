import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import compression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    compression({
      algorithm: "gzip",
      ext: ".gz",
      deleteOriginalAssets: false,
      filter: (file) => {
        return /\.(js|css|html|svg)$/.test(file);
      },
      threshold: 10240,
    }),
  ],
});
