/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-03-23 22:48:13
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-05-07 15:35:16
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "antd/dist/antd.css";
import zhCN from "antd/lib/locale/zh_CN";
import { ConfigProvider } from "antd";
import "./i18n/configs";
import { Provider } from "react-redux";
import store from "./redux/store";
import axios from "axios";
axios.defaults.headers["x-icode"] = "JFC30932E499FCD5B";

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <App />
    </Provider>
  </ConfigProvider>,
  document.getElementById("root")
);
