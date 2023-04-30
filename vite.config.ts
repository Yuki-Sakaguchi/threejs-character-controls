import { defineConfig } from "vite";
import wasm from "vite-plugin-wasm";

export default defineConfig({
  base: "./",
  assetsInclude: ["**/*.glb", "**/*.jpg"],
  plugins: [wasm()],
});
