// store/slices/authSlice.ts
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { setCookie, getCookie, deleteCookie } from "cookies-next";
import { API_BASE_URL } from "../../apiConfig";
import { User } from "@/types/adminTypes";

// ✅ User details interface// ✅ Auth response type from login/signup
interface AuthResponse {
  message: string;
  success: boolean;
  token: string;
  role : string;
}

// ✅ GetUser response type
interface GetUserResponse {
  user: User;
  token: string;
}


// ✅ Auth state
interface AuthState {
  user: User | null;
  token: string | null;
  isLoggedIn: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isLoggedIn: false,
  loading: false,
  error: null,
};

// ✅ AsyncThunk لتسجيل الدخول
export const loginUser = createAsyncThunk<
  AuthResponse,
  { email: string; password: string },
  { rejectValue: string }
>("auth/loginUser", async (values, thunkAPI) => {
  try {
    const res = await axios.post<AuthResponse>(`${API_BASE_URL}/auth/login`, values);
    if (res.data.success) {
      setCookie("token", res.data.token);
      setCookie("role", res.data.role);
    }
    console.log(res)
    return res.data;
  } catch (err) {
    const error = err as AxiosError<{ message?: string }>;
    return thunkAPI.rejectWithValue(error.response?.data?.message || "حدث خطأ أثناء تسجيل الدخول");
  }
});


// ✅ Forget password
export const forgetPass = createAsyncThunk<
  { message: string }, // response type
  { email: string },
  { rejectValue: string }
>("auth/forgetPass", async (values, thunkAPI) => {
  try {
    const res = await axios.post<{ message: string }>(
      `${API_BASE_URL}/user/forgot-password`,
      { email: values.email }
    );
    return res.data;
  } catch (err) {
    const error = err as AxiosError<{ message?: string }>;
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "حدث خطأ أثناء إرسال الإيميل"
    );
  }
});

// ✅ Reset password
export const resetPass = createAsyncThunk<
  { message: string },
  { email: string; otp: string; newPassword: string; cpassword: string },
  { rejectValue: string }
>("auth/resetPass", async (values, thunkAPI) => {
  try {
    const res = await axios.post<{ message: string }>(
      `${API_BASE_URL}/user/reset-password`,
      values
    );
    return res.data;
  } catch (err) {
    const error = err as AxiosError<{ message?: string }>;
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "حدث خطأ أثناء إعادة التعيين"
    );
  }
});

// ✅ Create new user
export const createNewUser = createAsyncThunk<
  AuthResponse,
  {
    fullName: string;
    email: string;
    password: string;
    cpassword: string;
    phoneNumber: string;
    classLevel: string;
  },
  { rejectValue: string }
>("auth/createNewUser", async (values, thunkAPI) => {
  try {
    const res = await axios.post<AuthResponse>(
      `${API_BASE_URL}/auth/signup`,
      values
    );
    return res.data;
  } catch (err) {
    const error = err as AxiosError<{ message?: string }>;
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "حدث خطأ أثناء التسجيل"
    );
  }
});

// ✅ Get user
export const getUser = createAsyncThunk<
  GetUserResponse,
  void,
  { rejectValue: string }
>("auth/getUser", async (_, thunkAPI) => {
  try {
    const token = getCookie("token") as string | undefined;
    const res = await axios.get(`${API_BASE_URL}/user`, {
      headers: {
        token: token, // 👈 نفس اللي موجود في الـ curl
      },
    });
    console.log(res)
    return res.data;
  } catch (err) {
    const error = err as AxiosError<{ message?: string }>;
    return thunkAPI.rejectWithValue(error.response?.data?.message || "حدث خطأ أثناء جلب المستخدم");
  }
});

// ✅ Slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
      deleteCookie("token");
    },
    loadUserFromCookies(state) {
      const token = getCookie("token");
      if (token) {
        state.token = token as string;
        state.isLoggedIn = true;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
        state.loading = false;
        state.token = action.payload.token;
        state.isLoggedIn = action.payload.success;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // getUser
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action: PayloadAction<GetUserResponse>) => {
        state.loading = false;
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }

});

// ✅ Exports
export const { logout, loadUserFromCookies } = authSlice.actions;
export default authSlice.reducer;
