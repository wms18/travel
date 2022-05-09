/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-05-08 19:22:35
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-05-09 00:59:38
 */
import {
  FETCH_RECOMMEND_PRODUCTS_START,
  FETCH_RECOMMEND_PRODUCTS_SUCCESS,
  FETCH_RECOMMEND_PRODUCTS_FAIL,
  RecommendProductsAction,
} from "./recommendProductsAction";
interface RecommendProductsState {
  productList: any[];
  loading: boolean;
  error: string | null;
}
const defaultState: RecommendProductsState = {
  productList: [],
  loading: true,
  error: null,
};
export default (state = defaultState, action: RecommendProductsAction) => {
  switch (action.type) {
    case FETCH_RECOMMEND_PRODUCTS_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_RECOMMEND_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        productList: action.payload,
      };
    case FETCH_RECOMMEND_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
