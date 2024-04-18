import path, { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  assetsInclude: ["/sb-preview/runtime.js"],

  build: {
    cssCodeSplit: false,
    outDir: "lib",
    sourcemap: true,
    minify: true,
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, "packages/index.ts"),
      name: "@mono-pack/my-design-system",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./packages"),
    },
  },
});
