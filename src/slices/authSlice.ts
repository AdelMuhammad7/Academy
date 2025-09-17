// store/slices/authSlice.ts
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { setCookie, getCookie, deleteCookie } from "cookies-next";
import { API_BASE_URL } from "../../apiConfig";

// ✅ User details interface
export interface UserDetails {
  fullName: string;
  email: string;
  classLevel: string;
  phoneNumber: string;
}

// ✅ Auth response type from API
interface AuthResponse {
  user: UserDetails;
  token: string;
}

// ✅ Auth state
interface AuthState {
  user: UserDetails | null;
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
  AuthResponse, // return type
  { email: string; password: string }, // argument type
  { rejectValue: string } // reject type
>("auth/loginUser", async (values, thunkAPI) => {
  try {
    const res = await axios.post<AuthResponse>(`${API_BASE_URL}/auth/login`, {
      email: values.email,
      password: values.password,
    });
    return res.data;
  } catch (err) {
    const error = err as AxiosError<{ message?: string }>;
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "حدث خطأ أثناء تسجيل الدخول"
    );
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
  AuthResponse,
  void,
  { rejectValue: string }
>("auth/getUser", async (_, thunkAPI) => {
  try {
    const token = getCookie("token") as string | undefined;
    const res = await axios.get<AuthResponse>(`${API_BASE_URL}/auth/login`, {
      headers: {
        token,
      },
    });
    return res.data;
  } catch (err) {
    const error = err as AxiosError<{ message?: string }>;
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "حدث خطأ أثناء جلب المستخدم"
    );
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
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;

        setCookie("token", action.payload.token, { maxAge: 60 * 60 * 24 });
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

// ✅ Exports
export const { logout, loadUserFromCookies } = authSlice.actions;
export default authSlice.reducer;
