import typescript from "@rollup/plugin-typescript";
import alias from "@rollup/plugin-alias";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
/** @type {import('rollup').RollupOptions} */
export default {
  input: "./src/index.ts",
  output: {
    dir: "dist",
    format: "es",
  },
  external:['express'],
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
