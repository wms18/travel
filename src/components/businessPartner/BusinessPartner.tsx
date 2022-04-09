/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-04-07 13:54:26
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-04-07 23:27:04
 */
import React from "react";
import { Row, Col, Divider, Image } from "antd";
import styles from "./BusinessPartner.module.css";
import faceBook from "../../assets/images/facebook-807588_640.png";
import follow from "../../assets/images/follow-826033_640.png";
import icon from "../../assets/images/icon-720944_640.png";
import microsoft from "../../assets/images/microsoft-80658_640.png";
interface propsType {
  title: JSX.Element;
}
const companies = [
  { src: faceBook, title: "Facebook" },
  { src: follow, title: "Follow" },
  { src: icon, title: "Icon" },
  { src: microsoft, title: "Microsoft" },
];
const BusinessPartner: React.FC<propsType> = ({ title }) => {
  return (
    <div className={styles.content}>
      <Divider orientation="left">{title}</Divider>
      <Row>
        {companies.map((company, index) => (
          <Col span={6} key={index}>
            <img
              src={company.src}
              style={{
                width: "80%",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              alt={company.title}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BusinessPartner;
