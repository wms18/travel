/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-05-15 23:49:42
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-05-16 00:21:07
 */
const path = require("path");
const resolve = (dir) => path.resolve(__dirname, dir);
module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
      "components": resolve("src/components"),
    },
  },
};
