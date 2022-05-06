/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-04-10 22:36:27
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-05-04 23:55:52
 */
import React from "react";
import { Row, Col, Typography } from "antd";
import { useTranslation } from "react-i18next";
import styles from "./HomePage.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SideMenu from "../../components/sideMenu";
import Carousel from "../../components/carousel";
import { productList1, productList2, productList3 } from "../home/mockups";
import sideImage from "../../assets/images/sider_2019_12-09.png";
import sideImage2 from "../../assets/images/sider_2019_02-04.png";
import sideImage3 from "../../assets/images/sider_2019_02-04-2.png";
import ProductCollection from "../../components/productCollection";
import BusinessPartner from "../../components/businessPartner";
const HomePage: React.FC = (props) => {
  const { t } = useTranslation();
  return (
    <div>
      <Header></Header>
      <div className={styles["page-content"]}>
        <Row style={{ marginTop: 20 }}>
          <Col span={6}>
            <SideMenu />
          </Col>
          <Col span={18}>
            <Carousel />
          </Col>
        </Row>
        <ProductCollection
          title={
            <Typography.Title level={3} type="warning">
              {t("home_page.hot_recommended")}
            </Typography.Title>
          }
          sideImage={sideImage2}
          products={productList1}
        ></ProductCollection>
        <ProductCollection
          title={
            <Typography.Title level={3} type="danger">
              {t("home_page.new_arrival")}
            </Typography.Title>
          }
          sideImage={sideImage3}
          products={productList1}
        ></ProductCollection>
        <ProductCollection
          title={
            <Typography.Title level={3} type="success">
              {t("home_page.domestic_travel")}
            </Typography.Title>
          }
          sideImage={sideImage}
          products={productList1}
        ></ProductCollection>
        <BusinessPartner
          title={
            <Typography.Title level={3} type="success">
              {t("home_page.joint_venture")}
            </Typography.Title>
          }
        ></BusinessPartner>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
