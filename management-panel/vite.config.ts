import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || "localhost";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: PORT,
    host: HOST,
  },
});
