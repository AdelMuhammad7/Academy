import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import adminReducer from "../slices/adminSlice";
import userReducer from "../slices/userSlice";
import lessonReducer from "../slices/lessonSlice";
import examReducer from "../slices/examSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    admin: adminReducer,
    user: userReducer,
    lesson: lessonReducer,
    exam: examReducer,
  },
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
