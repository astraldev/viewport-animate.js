import { defineConfig } from "tsdown";

export default defineConfig({
  dts: true,
  publint: true,
  entry: ["src/index.ts"],
  platform: "neutral",
  format: ["esm", "umd", "cjs"],
  globalName: "ViewportAnimate",
  rolldownOptions: {
    output: {
      exports: "default",
      name: "ViewportAnimate",
    },
  },
})