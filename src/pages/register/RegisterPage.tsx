/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-04-10 23:22:50
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-05-30 01:02:28
 */
import React from "react";
import { UserLayout } from "@/layouts/userLayout/UserLayout";
import { RegisterForm } from "./RegisterForm";
export const RegisterPage = () => {
  return (
    <UserLayout>
      <RegisterForm></RegisterForm>
    </UserLayout>
  );
};
