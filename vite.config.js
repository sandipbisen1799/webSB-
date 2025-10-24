import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  server: { port: 5173,
   proxy: {
      "/api": {
        target: "https://country.io",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // removes `/api` prefix
      },
    }, },
  plugins: [react(), tailwindcss()],
});
