/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-05-15 23:26:11
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-05-20 01:17:47
 */
import React from "react";
import { useParams } from "react-router-dom";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import { FilterArea, ProductList } from "@/components";
import styles from "./SearchPage.module.css";
interface MatchProps {
  keywords: string;
}
export const SearchPage: React.FC = () => {
  const { keywords } = useParams<MatchProps>();
  return (
    <div>
      <Header></Header>
      <div className={styles["page-content"]}>
        {/* 分类过滤器 */}
        <div className={styles["product-list-container"]}>
          <FilterArea></FilterArea>
        </div>
        {/*产品列表  */}
        <div className={styles["product-list-container"]}>
          <ProductList></ProductList>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
