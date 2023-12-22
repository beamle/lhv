//@ts-expect-error config
import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    //@ts-expect-error config
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
