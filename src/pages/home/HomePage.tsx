/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-04-10 22:36:27
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-05-10 01:03:51
 */
import React, { Component } from "react";
import { Row, Col, Typography, Spin } from "antd";
import { withTranslation, WithTranslation } from "react-i18next";
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
import axios from "axios";
import { connect } from "react-redux";
import { RootState } from "../../redux/store";
import { giveMeDataActionCreator } from "../../redux/recommendProducts/recommendProductsAction";

const mapStateToProps = (state: RootState) => {
  return {
    loading: state.recommendProducts.loading,
    productList: state.recommendProducts.productList,
    error: state.recommendProducts.error,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    giveDataAction: () => {
      dispatch(giveMeDataActionCreator());
    },
  };
};
type PropsType = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  WithTranslation;
class HomePage extends Component<PropsType> {
  componentDidMount() {
    this.props.giveDataAction();
  }
  render() {
    const { t, productList, loading, error } = this.props;
    if (loading) {
      return (
        <Spin
          size="large"
          style={{
            marginTop: 200,
            marginBottom: 200,
            marginLeft: "auto",
            marginRight: "auto",
            width: "100%",
          }}
        />
      );
    }
    if (error) {
      return <div>网站出错：{error}</div>;
    }
    return (
      <>
        <Header />
        {/* 页面内容 content */}
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
            sideImage={sideImage}
            products={productList[0].touristRoutes}
          />
          <ProductCollection
            title={
              <Typography.Title level={3} type="danger">
                {t("home_page.new_arrival")}
              </Typography.Title>
            }
            sideImage={sideImage2}
            products={productList[1].touristRoutes}
          />
          <ProductCollection
            title={
              <Typography.Title level={3} type="success">
                {t("home_page.domestic_travel")}
              </Typography.Title>
            }
            sideImage={sideImage3}
            products={productList[2].touristRoutes}
          />
          <BusinessPartner
            title={
              <Typography.Title level={3} type="success">
                {t("home_page.joint_venture")}
              </Typography.Title>
            }
          />
        </div>
        <Footer />
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(HomePage));
