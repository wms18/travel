/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-05-05 00:02:18
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-05-05 00:05:25
 */
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from "react-redux";
import { RootState } from "./store";
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
