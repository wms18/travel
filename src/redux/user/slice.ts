/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-05-15 02:06:53
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-06-04 22:54:41
 */
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
interface UserState {
  token: string | null;
  loading: boolean;
  error: string | null;
}
const initialState: UserState = {
  token: null,
  loading: false,
  error: null,
};
export const signIn = createAsyncThunk(
  "user/signIn",
  async (paramaters: { email: string; password: string }, thunkAPI) => {
    const { data } = await axios.post(`http://123.56.149.216:8080/auth/login`, {
      email: paramaters.email,
      password: paramaters.password,
    });
    return data.token;
  }
);
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: (state) => {
      state.token = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: {
    [signIn.pending.type]: (state) => {
      state.loading = true;
    },
    [signIn.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.token = action.payload;
      state.error = null;
    },
    [signIn.rejected.type]: (state, action: PayloadAction<string | null>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
