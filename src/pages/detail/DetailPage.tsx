/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-04-10 23:40:15
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-04-10 23:47:10
 */
import React from "react";
import { RouteComponentProps } from "react-router-dom";
interface MatchProps {
    touristRouteId: string;
}
export const DetailPage: React.FC<RouteComponentProps<MatchProps>> = (props) => {
  return (
    <div>路由路线详情页面，路线ID:{props.match.params.touristRouteId}</div>
  );
};
