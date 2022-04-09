/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-03-23 22:48:13
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-04-05 12:51:08
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "antd/dist/antd.css";
import zhCN from "antd/lib/locale/zh_CN";
import { ConfigProvider } from "antd";
ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>,
  document.getElementById("root")
);
