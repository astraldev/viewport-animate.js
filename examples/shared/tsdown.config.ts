import { defineConfig } from "tsdown";

export default defineConfig({
  entry: { index: "src/examples.ts" },
  format: ["esm", "umd"],
  globalName: "shared",
  dts: true,
  clean: true,
});
