import { defineConfig } from "tsdown";

export default defineConfig([
  {
    clean: true,
    dts: true,
    publint: true,
    entry: { index: "src/index.ts" },
    platform: "neutral",
    format: ["esm", "cjs"],
  },
  {
    entry: { index: "src/umd.ts" },
    platform: "browser",
    format: ["umd"],
    globalName: "ViewportAnimate",
    // outputOptions: {
    //   exports: "default",
    //   name: "ViewportAnimate",
    // },
  },
]);