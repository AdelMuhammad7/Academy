import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { API_BASE_URL } from "../../apiConfig";
import { User } from "@/types/adminTypes";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNfYWRtaW5AZ21haWwuY29tIiwiX2lkIjoiNjg1ODkxN2EwMTM2ZWFiMzA1YTMzMGYwIiwiaWF0IjoxNzU4MDMwNDU5LCJleHAiOjE3NTgxMTY4NTl9.fSpDEBCha5qz7X5qLcA-JmGXzCgZYJdbVievgXmuDeQ"

export const getAllUsers = createAsyncThunk(
  "user/getAllUsers",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`${API_BASE_URL}/admin/all-user`, {
        headers: {
          token: token, // 👈 نفس اللي موجود في الـ curl
        },
      });
      return res.data.data;
    } catch (err) {
      const error = err as AxiosError;
      return thunkAPI.rejectWithValue(
        error.response?.data || "حدث خطأ أثناء تنفيذ الطلب"
      );
    }
  }
)



const initialState : User = {
  userData: [],
  loading: false,
  error: null,
  fromPageA: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    allowAccess(state) {
      state.fromPageA = true;
    },
    resetAccess(state) {
      state.fromPageA = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllUsers.fulfilled, (state , action) => {
        state.loading = false;
        state.error = null;
        state.userData = action.payload
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "خطأ غير معروف"; // 👈 أمان أكتر
      });
  }
});


export const { allowAccess , resetAccess } = userSlice.actions;
export default userSlice.reducer;