/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-04-18 23:33:13
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-06-07 00:58:09
 */
import React from "react";
import styles from "./App.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  SignIn,
  RegisterPage,
  DetailPage,
  SearchPage,
  ShoppingCart,
} from "./pages";
import { Redirect } from "react-router-dom";
import HomePage from "./pages/home";
import { useSelector } from "./redux/hooks";
const PrivateRoute = ({ component, isAuthenticated, ...res }) => {
  const routeComponent = (props) => {
    return isAuthenticated ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: "/signIn" }}></Redirect>
    );
  };
  return <Route render={routeComponent} {...res}></Route>;
};
function App() {
  const jwt = useSelector((s) => s.user.token);
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/detail/:touristRouteId" component={DetailPage} />
          <Route path="/search/:keywords?" component={SearchPage} />
          <PrivateRoute
            isAuthenticated={jwt !== null}
            path="/shoppingCart"
            component={ShoppingCart}
          ></PrivateRoute>
          <Route render={() => <h1>404 not found 页面去火星了 ！</h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
