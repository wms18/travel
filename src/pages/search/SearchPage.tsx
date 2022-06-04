/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-05-15 23:26:11
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-05-22 23:46:10
 */
import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import { FilterArea, ProductList } from "@/components";
import styles from "./SearchPage.module.css";
import { Spin } from "antd";
import { searchProduct } from "@/redux/productSearch/slice";
import { useSelector } from "@/redux/hooks";
import { useDispatch } from "react-redux";
import { MainLayout } from "@/layouts/mainLayout/MainLayout";
interface MatchProps {
  keywords: string;
}
export const SearchPage: React.FC = () => {
  const { keywords } = useParams<MatchProps>();
  const loading = useSelector((state) => state.productSearch.loading);
  const error = useSelector((state) => state.productSearch.error);
  const pagination = useSelector((state) => state.productSearch.pagination);
  const productList = useSelector((state) => state.productSearch.data);
  const dispatch = useDispatch<any>();
  const location = useLocation();
  useEffect(() => {
    dispatch(searchProduct({ nextPage: 1, pageSize: 10, keywords }));
  }, [location]);
  const onPageChange = (nextPage, pageSize) => {
    dispatch(searchProduct({ nextPage, pageSize, keywords }));
  };
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
      {/* 分类过滤器 */}
      <div className={styles["product-list-container"]}>
        <FilterArea></FilterArea>
      </div>
      {/*产品列表  */}
      <div className={styles["product-list-container"]}>
        <ProductList
          data={productList}
          paging={pagination}
          onPageChange={onPageChange}
        ></ProductList>
      </div>
    </MainLayout>
  );
};
