import { createAsyncThunk } from "@reduxjs/toolkit";

import customAxios from "../../utils/axios";
import { logoutUser } from "./userSlice";

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user: any, thunkAPI: any) => {
    try {
      const resp = await customAxios.post("/auth/register", user);
      return resp.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user: any, thunkAPI: any) => {
    try {
      const resp = await customAxios.post("/auth/login", user);
      return resp.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (user: any, thunkAPI: any) => {
    try {
      const resp = await customAxios.patch("/auth/updateUser", user, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });
      return resp.data;
    } catch (error: any) {
      if (error.response.status === 401) {
        thunkAPI.dispatch(logoutUser());
        return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
      }

      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);
