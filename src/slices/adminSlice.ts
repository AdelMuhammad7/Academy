import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { API_BASE_URL } from "../../apiConfig";
import { Admin } from "@/types/adminTypes";
import { getCookie } from "cookies-next";







export const getAllAdmins = createAsyncThunk(
  "admin/getAllAdmins",
  async (_, thunkAPI) => {
    try {

      const token = getCookie("token") as string | undefined;
      
      const res = await axios.get(`${API_BASE_URL}/admin/all-admin`, {
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



const initialState : Admin = {
  adminData: [],
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
      .addCase(getAllAdmins.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "خطأ غير معروف"; // 👈 أمان أكتر
      });
  }
});


export const { allowAccess , resetAccess } = adminSlice.actions;
export default adminSlice.reducer;