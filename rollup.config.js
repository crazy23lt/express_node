import typescript from "@rollup/plugin-typescript";
import alias from "@rollup/plugin-alias";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const baseCompile = { dir: "dist", sourcemap: true };
const amdCompile = { format: "amd", entryFileNames: "[name].amd.js" };
const cjsCompile = { format: "cjs", entryFileNames: "[name].cjs.js" };
const esmCompile = { format: "esm", entryFileNames: "[name].esm.js" };
const umdCompile = {
  format: "umd",
  entryFileNames: "[name].umd.js",
  name: "Vue",
};
/** @type {import('rollup').RollupOptions} */
export default {
  input: "./src/main.ts",
  output: [
    // Object.assign(baseCompile, amdCompile),
    Object.assign(baseCompile, cjsCompile),
    Object.assign(baseCompile, esmCompile),
    // Object.assign(baseCompile, umdCompile),
  ],
  external: ["express", "multer", "jsonwebtoken", "uuid", "etag"],
  plugins: [
    json(),
    alias({
      entries: [
        {
          find: "@src",
          replacement: path.resolve(__dirname, "src"),
        },
        {
          find: "@controllers",
          replacement: path.resolve(__dirname, "src/controllers"),
        },
        {
          find: "@middlewares",
          replacement: path.resolve(__dirname, "src/middlewares"),
        },
        {
          find: "@routes",
          replacement: path.resolve(__dirname, "src/routes"),
        },
      ],
    }),
    typescript(),
    commonjs(), // 将 CommonJS 模块转换为 ES6 模块
    resolve(), // 处理 Node.js 样式的模块依赖
  ],
};
