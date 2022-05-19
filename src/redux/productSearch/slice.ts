/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-05-15 02:06:53
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-05-20 01:24:51
 */
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
interface ProductSearchState {
  data: any;
  loading: boolean;
  error: string | null;
  pagination: any;
}
const initialState: ProductSearchState = {
  data: null,
  loading: true,
  error: null,
  pagination: null,
};
export const searchProduct = createAsyncThunk(
  "productSearch/searchProduct",
  async (touristRouteId: string, thunkAPI) => {
    const { data } = await axios.get(
      `http://123.56.149.216:8080/api/touristRoutes/${touristRouteId}`
    );
    return data;
  }
);
export const productSearchSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {},
  extraReducers: {
    [searchProduct.pending.type]: (state: ProductSearchState) => {
      state.loading = true;
    },
    [searchProduct.fulfilled.type]: (
      state: ProductSearchState,
      action: PayloadAction<any>
    ) => {
      state.loading = false;
      state.data = action.payload.data;
      state.pagination = action.payload.pagination;
      state.error = null;
    },
    [searchProduct.rejected.type]: (
      state: ProductSearchState,
      action: PayloadAction<string | null>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
