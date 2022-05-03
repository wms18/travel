/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-04-10 23:18:35
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-04-30 15:34:17
 */
import React from "react";
import { Table } from "antd";
export const SignIn = () => {
  const dataSource = [
    {
      key: "1",
      name: "胡彦斌",
      age: 32,
      address: "西湖区湖底公园1号",
      name1: "胡彦斌",
      age1: 32,
      address1: "西湖区湖底公园1号",
      name2: "胡彦斌",
      age2: 32,
      address2: "西湖区湖底公园1号111111111111111111111111111111111",
      address3: "西湖区湖底公园1号111111111111111111111111111111111",
    },
    {
      key: "2",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号",
      name1: "胡彦祖",
      age1: 42,
      address1: "西湖区湖底公园1号",
      name2: "胡彦祖",
      age2: 42,
      address2: "西湖区湖底公园1号",
      address3: "西湖区湖底公园1号",
    },
  ];
  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
      width: 100,
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
      width: 100,
    },
    {
      title: "住址",
      dataIndex: "address",
      key: "address",
      width: 100,
    },
    {
      title: "姓名",
      dataIndex: "name1",
      key: "name1",
      width: 100,
    },
    {
      title: "年龄",
      dataIndex: "age1",
      key: "age1",
      width: 100,
    },
    {
      title: "住址",
      dataIndex: "address1",
      key: "address1",
      width: 100,
    },
    {
      title: "姓名",
      dataIndex: "name2",
      key: "name2",
      width: 100,
    },
    {
      title: "年龄",
      dataIndex: "age2",
      key: "age2",
      width: 100,
    },
    {
      title: "住址",
      dataIndex: "address2",
      key: "address2",
      width: 100,
    },
    {
      title: "住址",
      dataIndex: "address3",
      key: "address3",
      width: 100,
    },
  ];
  //验证身份证格式
  function isCardNo(card) {
    // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if (reg.test(card) === false) {
      return false;
    }
  }
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};
