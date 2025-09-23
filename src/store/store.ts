import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import adminReducer from "../slices/adminSlice";
import educationalReducer from "../slices/educationalSlice";
import userReducer from "../slices/userSlice";
import lessonReducer from "../slices/lessonSlice";
import examReducer from "../slices/examSlice";
import tableDataReducer from "../slices/tableSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    admin: adminReducer,
    educational: educationalReducer,
    user: userReducer,
    lesson: lessonReducer,
    exam: examReducer,
    tableData: tableDataReducer,
  },
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
