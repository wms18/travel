/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-04-10 23:40:15
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-05-23 00:30:52
 */
import React, { useState, useEffect } from "react";
import { RouteComponentProps, useParams } from "react-router-dom";
import axios from "axios";
import { Spin, Row, Col, Divider, Typography, Anchor, Menu } from "antd";
import styles from "./DetailPage.module.css";
import Header from "../../components/header/Header";
// import Footer from "./../../components/footer/Footer";
import Footer from "components/footer/Footer";
import { ProductIntro, ProductComments } from "../../components";
import { DatePicker } from "antd";
import { commentMockData } from "./mockUp";
import { getProductDetail } from "@/redux/productDetail/slice";
import { useSelector } from "./../../redux/hooks";
import { useDispatch } from "react-redux";
import { MainLayout } from "@/layouts/mainLayout/MainLayout";
interface MatchProps {
  touristRouteId: string;
}
export const DetailPage: React.FC<RouteComponentProps<MatchProps>> = (
  props
) => {
  const { touristRouteId } = useParams<MatchProps>();
  // const [loading, setLoading] = useState<boolean>(true);
  // const [product, setProduct] = useState<any>(null);
  // const [error, setError] = useState<string | null>(null);
  const loading = useSelector((state) => state.productDetail.loading);
  const product = useSelector((state) => state.productDetail.data);
  const error = useSelector((state) => state.productDetail.error);
  const { RangePicker } = DatePicker;
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(getProductDetail(touristRouteId));
  }, []);
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
    <MainLayout>
      {/* 产品与日期选择 */}
      <div className={styles["product-intro-container"]}>
        <Row>
          <Col span={13}>
            <ProductIntro
              title={product.title}
              shortDescription={product.description}
              price={product.originalPrice}
              coupons={product.coupons}
              points={product.points}
              discount={product.price}
              rating={product.rating}
              pictures={product.touristRoutePictures.map((p) => p.url)}
            />
          </Col>
          <Col span={11}>
            <RangePicker format={"YYYY/MM/DD"} style={{ marginTop: 20 }} />
          </Col>
        </Row>
      </div>
      {/* 锚点菜单 */}
      <Anchor className={styles["product-detail-anchor"]}>
        <Menu mode="horizontal">
          <Menu.Item>
            <Anchor.Link href="#feature" title="产品特色"></Anchor.Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Anchor.Link href="#fees" title="费用"></Anchor.Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Anchor.Link href="#notes" title="预订须知"></Anchor.Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Anchor.Link href="#comments" title="用户评价"></Anchor.Link>
          </Menu.Item>
        </Menu>
      </Anchor>
      {/* 产品特色 */}
      <div id="feature" className={styles["product-detail-container"]}>
        <Divider orientation="center">
          <Typography.Title level={3}>产品特色</Typography.Title>
        </Divider>
        <div
          dangerouslySetInnerHTML={{
            __html: product.description,
          }}
          style={{ marginTop: 50 }}
        ></div>
      </div>
      {/* 费用 */}
      <div id="fees" className={styles["product-detail-container"]}>
        <Divider orientation="center">
          <Typography.Title level={3}>费用</Typography.Title>
        </Divider>
        <div
          dangerouslySetInnerHTML={{
            __html: product.fees,
          }}
          style={{ marginTop: 50 }}
        ></div>
      </div>
      {/* 预定须知 */}
      <div id="notes" className={styles["product-detail-container"]}>
        <Divider orientation="center">
          <Typography.Title level={3}>预定须知</Typography.Title>
        </Divider>
        <div
          dangerouslySetInnerHTML={{
            __html: product.notes,
          }}
          style={{ marginTop: 50 }}
        ></div>
      </div>
      {/* 商品评价 */}
      <div id="comments" className={styles["product-detail-container"]}>
        <Divider orientation="center">
          <Typography.Title level={3}>用户评价</Typography.Title>
        </Divider>
        <div style={{ marginTop: 40 }}>
          <ProductComments data={commentMockData} />
        </div>
      </div>
    </MainLayout>
  );
};
