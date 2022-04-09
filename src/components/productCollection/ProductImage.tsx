/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-04-07 12:19:29
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-04-07 12:37:39
 */
import React from "react";
import { Image, Typography } from "antd";
interface PropsType {
  id: string | number;
  size: "large" | "small";
  imageSrc: string;
  price: string | number;
  title: string;
}
const ProductImage: React.FC<PropsType> = ({
  id,
  size,
  imageSrc,
  price,
  title,
}) => {
  return (
    <div>
      {size === "large" ? (
        <Image src={imageSrc} height={285} width={490}></Image>
      ) : (
        <Image src={imageSrc} height={120} width={240}></Image>
      )}
      <Typography.Text type="secondary">{title.slice(0, 25)}</Typography.Text>
      <Typography.Text type="danger" strong>￥{price}起</Typography.Text>
    </div>
  );
};

export default ProductImage;
