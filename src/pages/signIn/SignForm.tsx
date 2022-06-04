/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-05-30 01:46:45
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-06-04 22:23:16
 */
import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import axios from "axios";
import { useHistory } from "react-router-dom";
import styles from "./SignForm.module.css";
import { signIn } from "@/redux/user/slice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "@/redux/hooks";
export const SignForm: React.FC = () => {
  const history = useHistory();
  const loading = useSelector((s) => s.user.loading);
  const jwt = useSelector((s) => s.user.token);
  const error = useSelector((s) => s.user.error);
  const dispatch = useDispatch<any>();
  useEffect(() => {
    if (jwt !== null) {
      history.push("/");
    }
  }, [jwt]);

  const onFinish = async (values: any) => {
    console.log("Success:", values);
    dispatch(signIn({ email: values.username, password: values.password }));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className={styles["register-form"]}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" loading={loading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
