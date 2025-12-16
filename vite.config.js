import { defineConfig } from "vite";

export default defineConfig({
  root: "src", // tells Vite that src/ is the project root
  server: {
    host: true,
    allowedHosts: "all"
  }
});
