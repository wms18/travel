/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-05-15 02:06:53
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-05-22 02:36:49
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
  async (
    paramaters: {
      keywords: string;
      nextPage: number | string;
      pageSize: number | string;
    },
    thunkAPI
  ) => {
    let url = `http://123.56.149.216:8080/api/touristRoutes?pageNumber=${paramaters.nextPage}&pageSize=${paramaters.pageSize}`;
    if (paramaters.keywords) {
      url += `&keyword=${paramaters.keywords}`;
    }
    const response = await axios.get(url);
    return {
      data: response.data,
      pagination: JSON.parse(response.headers["x-pagination"]),
    };
  }
);

export const productSearchSlice = createSlice({
  name: "productSearch",
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
