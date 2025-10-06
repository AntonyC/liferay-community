import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { glob } from "glob";
import path from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";

const outDir = resolve(__dirname, "build-vite");
console.log("--: ", outDir);
const getEntries = () => {
  const _getEntries = (filePathPattern: string | string[]) => {
    return Object.fromEntries(
      glob
        .sync(filePathPattern)
        .map((file) => [
          path.relative(
            "src",
            file.slice(0, file.length - path.extname(file).length)
          ),
          fileURLToPath(new URL(file, import.meta.url)),
        ])
    );
  };

  let entries = {
    ..._getEntries([
      `src/apps/**/main.ts`,
      `src/apps/**/style.css`,
      `src/global/**/*.js`,
      `src/global/**/*.css`,
    ]),
  };

  //console.log(entries);
  return entries;
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: getEntries(),
    },
  },
  server: {
    port: 5178,
    strictPort: true,
  },
});
