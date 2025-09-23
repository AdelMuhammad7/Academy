import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { API_BASE_URL } from "../../apiConfig";
import { Admin } from "@/types/adminTypes";
import { getCookie } from "cookies-next";

interface AuthResponse {
  message: string;
  success: boolean;
  token: string;
}

// ✅ إنشاء أدمن جديد
export const createNewUser = createAsyncThunk<
  AuthResponse,
  {
    fullName: string;
    email: string;
    password: string;
    cpassword: string; // 👈 زي ما الباك اند طالب
    phoneNumber: string;
  },
  { rejectValue: string }
>("auth/createNewUser", async (values, thunkAPI) => {
  try {
    const token = getCookie("token") as string | undefined;

    const res = await axios.post<AuthResponse>(
      `${API_BASE_URL}/admin/create-admin`,
      values,
      {
        headers: {
          token: token || "", // 👈 لازم نفس اسم الهيدر اللي في الـ curl
          "Content-Type": "application/json",
        },
      }
    );

    return res.data;
  } catch (err) {
    const error = err as AxiosError<{ message?: string }>;
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "حدث خطأ أثناء التسجيل"
    );
  }
});

// ✅ جلب كل الأدمنز
export const getAllAdmins = createAsyncThunk(
  "admin/getAllAdmins",
  async (_, thunkAPI) => {
    try {
      const token = getCookie("token") as string | undefined;

      const res = await axios.get(`${API_BASE_URL}/admin/all-admin`, {
        headers: {
          token: token || "",
        },
      });
      return res.data.data;
    } catch (err) {
      const error = err as AxiosError<{ message?: string }>;
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "حدث خطأ أثناء تنفيذ الطلب"
      );
    }
  }
);

const initialState: Admin = {
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
      // getAllAdmins
      .addCase(getAllAdmins.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllAdmins.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.adminData = action.payload;
      })
      .addCase(getAllAdmins.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "خطأ غير معروف";
      })
      // createNewUser
      .addCase(createNewUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createNewUser.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(createNewUser.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "خطأ غير معروف";
      });
  },
});

export const { allowAccess, resetAccess } = adminSlice.actions;
export default adminSlice.reducer;
