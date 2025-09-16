import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { API_BASE_URL } from "../../apiConfig";


const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNfYWRtaW5AZ21haWwuY29tIiwiX2lkIjoiNjg1ODkxN2EwMTM2ZWFiMzA1YTMzMGYwIiwiaWF0IjoxNzU4MDMwNDU5LCJleHAiOjE3NTgxMTY4NTl9.fSpDEBCha5qz7X5qLcA-JmGXzCgZYJdbVievgXmuDeQ"

export const getAllAdmins = createAsyncThunk(
    "admin/getAllAdmins",
    async(_ , thunkAPI) => {
    try {
      const res = await axios.get(`${API_BASE_URL}/admin/all-admin`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    return res.data.data

    }catch (err) {
      const error = err as AxiosError;
      return thunkAPI.rejectWithValue(
        error.response?.data || "حدث خطأ أثناء تنفيذ الطلب"
      );
    }
    }
)


const initialState = {
  adminData: null,
  loading: false,
  error: null,
  fromPageA: false,
};

const adminSlice = createSlice({
  name: "admin",
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
      .addCase(getAllAdmins.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllAdmins.fulfilled, (state , action) => {
        state.loading = false;
        state.error = null;
        state.adminData = action.payload
      })
      .addCase(getAllAdmins.rejected, (state , action) => {
        state.loading = false;
        state.error = action.payload;
      })
  }
});


export const { allowAccess , resetAccess } = adminSlice.actions;
export default adminSlice.reducer;