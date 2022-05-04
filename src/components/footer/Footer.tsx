/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-03-27 02:32:40
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-05-04 01:02:09
 */
import React from "react";
import { Layout, Typography } from "antd";
import { useTranslation } from "react-i18next";
const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Layout.Footer>
        <Typography.Title level={3} style={{ textAlign: "center" }}>
          {t("footer.detail")}
        </Typography.Title>
      </Layout.Footer>
    </div>
  );
};

export default Footer;
