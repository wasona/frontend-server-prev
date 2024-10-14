import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true, // listens on all addresses
  },
  plugins: [react()],
});
