/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-04-10 23:40:15
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-05-12 01:29:50
 */
import React, { useState, useEffect } from "react";
import { RouteComponentProps, useParams } from "react-router-dom";
import axios from "axios";
import { Spin, Row, Col } from "antd";
import styles from "./DetailPage.module.css";
import Header from "../../components/header/Header";
import Footer from "./../../components/footer/Footer";
import { ProductIntro } from "../../components";
import { DatePicker } from "antd";
import moment from "moment";
interface MatchProps {
  touristRouteId: string;
}
export const DetailPage: React.FC<RouteComponentProps<MatchProps>> = (
  props
) => {
  const { touristRouteId } = useParams<MatchProps>();
  const [loading, setLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const { RangePicker } = DatePicker;
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await axios.get(
          `http://localhost:3000/api/touristRoute/${touristRouteId}`
        );
        setProduct(result.data);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
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
    <div>
      <Header />
      <div className={styles["page-content"]}>
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
        <div className={styles["product-detail-anchor"]}></div>
        {/* 产品特色 */}
        <div id="feature" className={styles["product-detail-container"]}></div>
        {/* 费用 */}
        <div id="fees" className={styles["product-detail-container"]}></div>
        {/* 预定须知 */}
        <div id="notes" className={styles["product-detail-container"]}></div>
        {/* 商品评价 */}
        <div id="comments" className={styles["product-detail-container"]}></div>
      </div>
      <Footer />
    </div>
  );
};
