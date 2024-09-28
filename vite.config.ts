import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const key_path: string | undefined = process.env.PRIVKEY_PATH;
const cert_path: string | undefined = process.env.FULLCHAIN_PATH;

if (!key_path) {
  throw new Error("PRIVKEY_PATH is undefined");
}
if (!cert_path) {
  throw new Error("FULLCHAIN_PATH is undefined");
}

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true, // listens on all addresses
    port: 443,
    https: {
      key: fs.readFileSync(key_path),
      cert: fs.readFileSync(cert_path),
    },
  },
  plugins: [react()],
});
