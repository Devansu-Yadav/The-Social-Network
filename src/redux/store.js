import { configureStore } from '@reduxjs/toolkit';
import authSlice from "redux/slices/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice
  },
});
