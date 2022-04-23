/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-04-10 22:36:27
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-04-20 10:59:10
 */
import React from "react";
import { Row, Col, Typography } from "antd";
import styles from "./HomePage.module.css";
import Header from "../../components/header/Header.class";
import Footer from "../../components/footer/Footer";
import SideMenu from "../../components/sideMenu";
import Carousel from "../../components/carousel";
import { productList1, productList2, productList3 } from "../home/mockups";
import sideImage from "../../assets/images/sider_2019_12-09.png";
import sideImage2 from "../../assets/images/sider_2019_02-04.png";
import sideImage3 from "../../assets/images/sider_2019_02-04-2.png";
import ProductCollection from "../../components/productCollection";
import BusinessPartner from "../../components/businessPartner";
const HomePage: React.FC = () => {
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
              爆款推荐
            </Typography.Title>
          }
          sideImage={sideImage2}
          products={productList1}
        ></ProductCollection>
        <ProductCollection
          title={
            <Typography.Title level={3} type="danger">
              新品上市
            </Typography.Title>
          }
          sideImage={sideImage3}
          products={productList1}
        ></ProductCollection>
        <ProductCollection
          title={
            <Typography.Title level={3} type="success">
              国内游推荐
            </Typography.Title>
          }
          sideImage={sideImage}
          products={productList1}
        ></ProductCollection>
        <BusinessPartner
          title={
            <Typography.Title level={3} type="success">
              合作企业
            </Typography.Title>
          }
        ></BusinessPartner>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
