/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-04-20 11:11:31
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-06-04 21:56:41
 */
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import languageReducer from "./language/languageReducer";
import recommendProductsReducer from "./recommendProducts/recommendProductsReducer";
import thunk from "redux-thunk";
import { actionLog } from "./middleWares/actionLog";
import { productDetailSlice } from "./productDetail/slice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productSearchSlice } from "./productSearch/slice";
import { userSlice } from "./user/slice";
const rootReducer = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer,
  productDetail: productDetailSlice.reducer,
  productSearch: productSearchSlice.reducer,
  user: userSlice.reducer,
});
// const store = createStore(rootReducer, applyMiddleware(thunk, actionLog));
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return [...getDefaultMiddleware(), actionLog];
  },
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
