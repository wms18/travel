/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-04-10 23:18:35
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-05-30 01:50:58
 */
import React from "react";
import { UserLayout } from "@/layouts/userLayout/UserLayout";
import {SignForm} from "@/pages/signIn/SignForm";
export const SignIn: React.FC = () => {
  return (
    <UserLayout>
      <SignForm></SignForm>
    </UserLayout>
  );
};
