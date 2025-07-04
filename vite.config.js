import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/WebEVApp", // PRODUCTION
  plugins: [tailwindcss(), react()],
  server: {
    proxy: {
      "/api": {
        target: "https://app.bhl.co.th/wsEvApp/api",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
