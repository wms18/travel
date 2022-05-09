/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-04-20 11:11:31
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-05-10 00:49:56
 */
import { createStore, combineReducers, applyMiddleware } from "redux";
import languageReducer from "./language/languageReducer";
import recommendProductsReducer from "./recommendProducts/recommendProductsReducer";
import thunk from "redux-thunk";
import { actionLog } from "./middleWares/actionLog";
const rootReducer = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk, actionLog));
export type RootState = ReturnType<typeof store.getState>;
export default store;
