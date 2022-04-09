/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-04-03 23:21:57
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-04-04 23:32:24
 */
import React from "react";
import styles from "./Carousel.module.css";
import { Image, Carousel as AntCarousel } from "antd";
import carouselImage1 from "../../assets/images/carousel_1.jpg";
import carouselImage2 from "../../assets/images/carousel_2.jpg";
import carouselImage3 from "../../assets/images/carousel_3.jpg";
const Carousel: React.FC = () => {
  return (
    <AntCarousel autoplay className={styles.slider}>
      <Image src={carouselImage1}></Image>
      <Image src={carouselImage2}></Image>
      <Image src={carouselImage3}></Image>
    </AntCarousel>
  );
};

export default Carousel;
