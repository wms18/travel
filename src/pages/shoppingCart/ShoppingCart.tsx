/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-06-04 23:03:27
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-06-07 18:11:04
 */
import React from "react";
import styles from "./ShoppingCart.module.css";
import { MainLayout } from "@/layouts/mainLayout";
import { Row, Col, Affix, Button, message } from "antd";
import { ProductList, PaymentCard } from "@/components";
export const ShoppingCart: React.FC = () => {
  return (
    <MainLayout>
      <Row>
        {/* 购物车清单 */}
        <Col span={16}>
          <div className={styles["product-list-container"]}>
            <ProductList></ProductList>
          </div>
        </Col>
        {/* 支付卡组件 */}
        <Col span={8}>
          <Affix>
            <div className={styles["payment-card-container"]}>
              <PaymentCard></PaymentCard>
            </div>
          </Affix>
        </Col>
      </Row>
    </MainLayout>
  );
};
