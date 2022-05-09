/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-03-27 02:24:39
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-05-09 00:43:24
 */
import React, { useEffect } from "react";
import logo from "../../assets/logo.svg";
import styles from "./Header.module.css";
import { Layout, Typography, Input, Menu, Button, Dropdown } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { useSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  changeLanguageActionCreator,
  addLanguageActionCreator,
} from "../../redux/language/languageActions";
const Header: React.FC = (props) => {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  const match = useRouteMatch();
  const language = useSelector((state) => state.language.language);
  const languageList = useSelector((state) => state.language.languageList);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const menuClickHandle = (e) => {
    if (e.key === "new") {
      dispatch(addLanguageActionCreator("新语言", "new"));
    } else {
      dispatch(changeLanguageActionCreator(e.key));
    }
  };
  return (
    <div>
      <div className={styles["app-header"]}>
        <div className={styles["top-header"]}>
          <div className={styles["inner"]}>
            <Typography.Text>{t("header.slogan")}</Typography.Text>
            <Dropdown.Button
              style={{ marginLeft: 15 }}
              overlay={
                <Menu onClick={menuClickHandle}>
                  {languageList.map((item: any) => {
                    return <Menu.Item key={item.code}>{item.name}</Menu.Item>;
                  })}
                  <Menu.Item key={"new"}>
                    {t("header.add_new_language")}
                  </Menu.Item>
                </Menu>
              }
              icon={<GlobalOutlined></GlobalOutlined>}
            >
              {language === "en" ? "English" : "中文"}
            </Dropdown.Button>
            <Button.Group className={styles["button-group"]}>
              <Button onClick={() => history.push("/register")}>
                {t("header.register")}
              </Button>
              <Button onClick={() => history.push("/signIn")}>
                {t("header.signin")}
              </Button>
            </Button.Group>
          </div>
        </div>
        <Layout.Header className={styles["main-header"]}>
          <img src={logo} alt="" className={styles["App-logo"]} />
          <span onClick={() => history.push("/")}>
            <Typography.Title level={3} className={styles.title}>
              {t("header.title")}
            </Typography.Title>
          </span>
          <Input.Search
            className={styles["search-input"]}
            placeholder="请输入旅游目的地、主题或关键字"
          ></Input.Search>
        </Layout.Header>
        <Menu mode={"horizontal"} className={styles["main-menu"]}>
          <Menu.Item key="1"> {t("header.home_page")} </Menu.Item>
          <Menu.Item key="2"> {t("header.weekend")} </Menu.Item>
          <Menu.Item key="3"> {t("header.group")} </Menu.Item>
          <Menu.Item key="4"> {t("header.backpack")} </Menu.Item>
          <Menu.Item key="5"> {t("header.private")} </Menu.Item>
          <Menu.Item key="6"> {t("header.cruise")} </Menu.Item>
          <Menu.Item key="7"> {t("header.hotel")} </Menu.Item>
          <Menu.Item key="8"> {t("header.local")} </Menu.Item>
          <Menu.Item key="9"> {t("header.theme")} </Menu.Item>
          <Menu.Item key="10"> {t("header.custom")} </Menu.Item>
          <Menu.Item key="11"> {t("header.study")} </Menu.Item>
          <Menu.Item key="12"> {t("header.visa")} </Menu.Item>
          <Menu.Item key="13"> {t("header.enterprise")} </Menu.Item>
          <Menu.Item key="14"> {t("header.high_end")} </Menu.Item>
          <Menu.Item key="15"> {t("header.outdoor")} </Menu.Item>
          <Menu.Item key="16"> {t("header.insurance")} </Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
