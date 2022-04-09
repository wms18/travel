/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-04-07 11:33:00
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-04-07 13:38:18
 */
import React from "react";
import { Row, Col, Divider, Typography } from "antd";
import styles from "./ProductCollection.module.css";
import ProductImage from "./ProductImage";
interface PropsType {
  title: JSX.Element;
  sideImage: string;
  products: any[];
}
const ProductCollection: React.FC<PropsType> = ({
  title,
  sideImage,
  products,
}) => {
  return (
    <div className={styles.content}>
      <Divider orientation="left">{title}</Divider>
      <Row>
        <Col span={4}>
          <img src={sideImage} className={styles["side-image"]} alt="" />
        </Col>
        <Col span={20}>
          <Row>
            <Col span={12}>
              <ProductImage
                id={products[0].id}
                size="large"
                imageSrc={products[0].touristRoutePictures[0].url}
                price={products[0].price}
                title={products[0].title}
              ></ProductImage>
            </Col>
            <Col span={12}>
              <Row>
                <Col span={12}>
                  <ProductImage
                    id={products[1].id}
                    size="small"
                    imageSrc={products[1].touristRoutePictures[0].url}
                    price={products[1].price}
                    title={products[1].title}
                  ></ProductImage>
                </Col>
                <Col span={12}>
                  <ProductImage
                    id={products[2].id}
                    size="small"
                    imageSrc={products[2].touristRoutePictures[0].url}
                    price={products[2].price}
                    title={products[2].title}
                  ></ProductImage>
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <ProductImage
                    id={products[3].id}
                    size="small"
                    imageSrc={products[3].touristRoutePictures[0].url}
                    price={products[3].price}
                    title={products[3].title}
                  ></ProductImage>
                </Col>
                <Col span={12}>
                  <ProductImage
                    id={products[4].id}
                    size="small"
                    imageSrc={products[4].touristRoutePictures[0].url}
                    price={products[4].price}
                    title={products[4].title}
                  ></ProductImage>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <ProductImage
                id={products[5].id}
                size="small"
                imageSrc={products[5].touristRoutePictures[0].url}
                price={products[5].price}
                title={products[5].title}
              ></ProductImage>
            </Col>
            <Col span={6}>
              <ProductImage
                id={products[6].id}
                size="small"
                imageSrc={products[6].touristRoutePictures[0].url}
                price={products[6].price}
                title={products[6].title}
              ></ProductImage>
            </Col>
            <Col span={6}>
              <ProductImage
                id={products[7].id}
                size="small"
                imageSrc={products[7].touristRoutePictures[0].url}
                price={products[7].price}
                title={products[7].title}
              ></ProductImage>
            </Col>
            <Col span={6}>
              <ProductImage
                id={products[8].id}
                size="small"
                imageSrc={products[8].touristRoutePictures[0].url}
                price={products[8].price}
                title={products[8].title}
              ></ProductImage>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ProductCollection;
