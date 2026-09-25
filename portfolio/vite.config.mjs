import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  base: "/portfolio/",
  plugins: [react(), svgr()],
  build: {
    outDir: "build",
  },
  test: {
    environment: "jsdom",
    passWithNoTests: true,
  },
});