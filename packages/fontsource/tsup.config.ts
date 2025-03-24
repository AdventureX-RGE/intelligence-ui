import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["index.ts"],
  format: ["cjs", "esm"],
  dts: false,
  clean: true,
  treeshake: true,
  loader: {
    ".woff": "copy",
    ".woff2": "copy",
  },
  noExternal: [/.*/],
})
