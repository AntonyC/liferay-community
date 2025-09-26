import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { glob } from "glob";
import path from "node:path";
import { fileURLToPath } from "node:url";

const outDir = resolve(__dirname, "build-vite");

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
      `src/apps/**/style.scss`,
      `src/global/**/*.js`,
      `src/global/**/*.css`,
    ]),
  };

  //console.log(entries);
  return entries;
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
});
