/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-05-13 00:53:50
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-05-13 01:17:54
 */
import React from "react";
import { Comment, Tooltip, List } from "antd";
interface PropsType {
  data: {
    author: string;
    avatar: string;
    content: string;
    createDate: string;
  }[];
}
export const ProductComments: React.FC<PropsType> = ({ data }) => {
  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Comment
              author={item.author}
              avatar={item.avatar}
              content={item.content}
              datetime={item.createDate}
            />
          </List.Item>
        )}
      ></List>
    </div>
  );
};
