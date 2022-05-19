/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-05-15 02:06:53
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-05-15 17:59:26
 */
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
interface ProductDetailState {
  data: any;
  loading: boolean;
  error: string | null;
}
const initialState: ProductDetailState = {
  data: null,
  loading: true,
  error: null,
};
export const getProductDetail = createAsyncThunk(
  "productDetail/getProductDetail",
  async (touristRouteId: string, thunkAPI) => {
    const { data } = await axios.get(
      `http://123.56.149.216:8080/api/touristRoutes/${touristRouteId}`
    );
    return data;
  }
);
export const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {},
  extraReducers: {
    [getProductDetail.pending.type]: (state: ProductDetailState) => {
      state.loading = true;
    },
    [getProductDetail.fulfilled.type]: (
      state: ProductDetailState,
      action: PayloadAction<any>
    ) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    [getProductDetail.rejected.type]: (
      state: ProductDetailState,
      action: PayloadAction<string | null>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
