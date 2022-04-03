/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-03-27 02:32:40
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-03-27 02:33:42
 */
import React from "react";
import { Layout, Typography } from "antd";

const Footer: React.FC = () => {
  return (
    <div>
      <Layout.Footer>
        <Typography.Title level={3} style={{ textAlign: "center" }}>
          版权所有 @ React 旅游网
        </Typography.Title>
      </Layout.Footer>
    </div>
  );
};

export default Footer;
