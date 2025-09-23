import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { API_BASE_URL } from "../../apiConfig";
import { getCookie } from "cookies-next";



export const getAllLessons = createAsyncThunk(
  "lesson/getAllLessons",
  async (_, thunkAPI) => {
    try {
      const token = getCookie("token") as string | undefined;
      const res = await axios.get(`${API_BASE_URL}/lesson/?isPaid=true&sortBy=scheduledDate&sortOrder=asc&scheduledAfter=2025-07-01`, {
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



const initialState  = {
  lessonData: [],
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
      .addCase(getAllLessons.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllLessons.fulfilled, (state , action) => {
        state.loading = false;
        state.error = null;
        state.lessonData = action.payload
      })
      .addCase(getAllLessons.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "خطأ غير معروف"; // 👈 أمان أكتر
      });
  }
});


export const { allowAccess , resetAccess } = adminSlice.actions;
export default adminSlice.reducer;