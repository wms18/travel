/*
import { FETCH_RECOMMEND_PRODUCTS_START } from './recommendProductsAction';
 * @Descripttion:
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-05-09 00:49:45
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-05-10 00:14:18
 */
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import axios from "axios";
export const FETCH_RECOMMEND_PRODUCTS_START = "FETCH_RECOMMEND_PRODUCTS_START"; // 正在调用推荐信息api
export const FETCH_RECOMMEND_PRODUCTS_SUCCESS =
  "FETCH_RECOMMEND_PRODUCTS_SUCCESS"; // 获取推荐信息成功
export const FETCH_RECOMMEND_PRODUCTS_FAIL = "FETCH_RECOMMEND_PRODUCTS_FAIL"; // 获取推荐信息失败
interface FetchRecommendProductStartAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_START;
}
interface FetchRecommendProductSuccessAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_SUCCESS;
  payload: any;
}
interface FetchRecommendProductFailAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_FAIL;
  payload: any;
}
export type RecommendProductsAction =
  | FetchRecommendProductStartAction
  | FetchRecommendProductSuccessAction
  | FetchRecommendProductFailAction;
export const fetchRecommendProductsStart =
  (): FetchRecommendProductStartAction => ({
    type: FETCH_RECOMMEND_PRODUCTS_START,
  });
export const fetchRecommendProductsSuccess = (
  data: any
): FetchRecommendProductSuccessAction => ({
  type: FETCH_RECOMMEND_PRODUCTS_SUCCESS,
  payload: data, // 推荐信息
});
export const fetchRecommendProductsFail = (
  error: any
): FetchRecommendProductFailAction => ({
  type: FETCH_RECOMMEND_PRODUCTS_FAIL,
  payload: error, // 错误信息
});
export const giveMeDataActionCreator =
  (): ThunkAction<void, RootState, unknown, RecommendProductsAction> =>
  async (dispatch, getState) => {
    dispatch(fetchRecommendProductsStart());
    try {
      let res = await axios.get(
        "http://123.56.149.216:8080/api/productCollections"
      );
      dispatch(fetchRecommendProductsSuccess(res.data));
    } catch (error: any) {
      dispatch(fetchRecommendProductsFail(error.message));
    }
  };
