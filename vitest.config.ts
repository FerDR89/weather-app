import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/test/setup.ts",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@lib": path.resolve(__dirname, "./src/lib"),
      "@hooks": path.resolve(__dirname, "./src/lib/hooks"),
      "@interfaces": path.resolve(__dirname, "./src/lib/interfaces"),
      "@reducers": path.resolve(__dirname, "./src/lib/reducers"),
      "@utils": path.resolve(__dirname, "./src/lib/utils"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@store": path.resolve(__dirname, "./src/store"),
    },
  },
});
